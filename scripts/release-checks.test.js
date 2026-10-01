import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { beforeEach, expect, test, vi } from 'vitest';

import {
  checkRelease,
  inspectRelease,
  prepareRelease,
  validateChangedPaths,
  validateReleasePackages,
  validateReleaseTags,
} from './release-checks.js';

vi.mock('node:child_process', () => ({
  execFileSync: vi.fn(),
  spawnSync: vi.fn(),
}));
vi.mock('node:fs', () => ({ default: { readFileSync: vi.fn() } }));

const base = 'a'.repeat(40);
const commit = 'b'.repeat(40);
const tagObject = 'c'.repeat(40);
const peerName = '@navikt/ft-peer';
const consumerName = '@navikt/ft-consumer';
const peerPath = 'packages/peer/package.json';
const consumerPath = 'packages/consumer/package.json';

const entry = (path, name, version, extra = {}) => ({
  path,
  manifest: { name, version, ...extra },
});

const before = [
  entry(peerPath, peerName, '12.0.0'),
  entry(consumerPath, consumerName, '1.0.0', {
    devDependencies: { [peerName]: 'workspace:^' },
    peerDependencies: { [peerName]: '12.x' },
  }),
];

beforeEach(() => {
  vi.resetAllMocks();
});

test('godtar major-bump og samme workspace-pakke som devDependency og peerDependency', () => {
  const after = [
    entry(peerPath, peerName, '13.0.0'),
    entry(consumerPath, consumerName, '2.0.0', {
      devDependencies: { [peerName]: 'workspace:^' },
      peerDependencies: { [peerName]: '13.x' },
    }),
  ];

  expect(
    validateReleasePackages(before, after)
      .bumped.map(pkg => pkg.manifest.name)
      .sort(),
  ).toEqual([peerName, consumerName].sort());
});

test('avviser peer-endring når forbrukeren ikke er versjonert', () => {
  const after = [
    before[0],
    entry(consumerPath, consumerName, '1.0.0', {
      ...before[1].manifest,
      peerDependencies: { [peerName]: '13.x' },
    }),
  ];

  expect(() => validateReleasePackages(before, after)).toThrow(
    `${consumerName}: package.json er endret, men versjonen er fortsatt 1.0.0`,
  );
});

test('avviser ugyldige og private workspace-peers', () => {
  const incompatible = [
    entry(peerPath, peerName, '13.0.0'),
    entry(consumerPath, consumerName, '2.0.0', { peerDependencies: { [peerName]: '12.x' } }),
  ];
  expect(() => validateReleasePackages(before, incompatible)).toThrow('støtter ikke lokal versjon 13.0.0');

  const privatePeer = [
    entry(peerPath, peerName, '13.0.0', { private: true }),
    entry(consumerPath, consumerName, '2.0.0', { peerDependencies: { [peerName]: '13.x' } }),
  ];
  expect(() => validateReleasePackages(before, privatePeer)).toThrow('er privat');
});

test('avviser versjonsrollback', () => {
  expect(() => validateReleasePackages(before, [entry(peerPath, peerName, '11.0.0'), before[1]])).toThrow(
    'versjonen er satt ned fra 12.0.0 til 11.0.0',
  );
});

test('avviser kildekode og andre filer i release-committen', () => {
  expect(() => validateChangedPaths([peerPath, 'yarn.lock'], [peerPath])).not.toThrow();
  expect(() => validateChangedPaths([peerPath, 'src/secret.txt'], [peerPath])).toThrow('src/secret.txt');
});

test('avviser manglende og ekstra tags', () => {
  const expected = [`${peerName}@13.0.0`];
  expect(() => validateReleaseTags(expected, [])).toThrow('Fant: (ingen)');
  expect(() => validateReleaseTags(expected, [...expected, 'uventet@1.0.0'])).toThrow('uventet@1.0.0');
});

const mockReleaseGit = ({ failVerification = false, signedCommit = true, signedTag = true, overrides = {} } = {}) => {
  const root = JSON.stringify({ workspaces: { packages: ['packages/*'] } });
  const oldPeer = JSON.stringify(before[0].manifest);
  const newPeer = JSON.stringify({ ...before[0].manifest, version: '13.0.0' });
  const tag = `${peerName}@13.0.0`;
  execFileSync.mockImplementation((command, args) => {
    expect(command).toBe('git');
    const key = args.join(' ');
    const responses = {
      'rev-parse HEAD': commit,
      [`rev-parse ${commit}^`]: base,
      'rev-list --parents -n 1 HEAD': `${commit} ${base}`,
      [`rev-list --count ${base}..HEAD`]: '1',
      [`show ${base}:package.json`]: root,
      [`show ${commit}:package.json`]: root,
      [`ls-tree -r --name-only ${base}`]: peerPath,
      [`ls-tree -r --name-only ${commit}`]: peerPath,
      [`show ${base}:${peerPath}`]: oldPeer,
      [`show ${commit}:${peerPath}`]: newPeer,
      [`diff --name-only ${base} ${commit} --`]: peerPath,
      [`tag --points-at ${commit}`]: tag,
      [`cat-file -p ${commit}`]: signedCommit
        ? 'tree 1\ngpgsig -----BEGIN SSH SIGNATURE-----\n signed\n -----END SSH SIGNATURE-----\n\nRelease'
        : 'tree 1\n\nRelease',
      [`rev-parse refs/tags/${tag}`]: tagObject,
      [`cat-file -t ${tagObject}`]: 'tag',
      [`rev-parse ${tagObject}^{commit}`]: commit,
      [`cat-file -p ${tagObject}`]: signedTag
        ? `object ${commit}\ntype commit\n\nRelease\n-----BEGIN SSH SIGNATURE-----\nsigned\n-----END SSH SIGNATURE-----`
        : `object ${commit}\ntype commit\n\nRelease`,
      [`verify-commit ${commit}`]: '',
      [`verify-tag ${tagObject}`]: '',
      ...overrides,
    };
    if (failVerification && key === `verify-commit ${commit}`) {
      throw new Error('ukjent offentlig nøkkel');
    }
    if (!(key in responses)) {
      throw new Error(`Uventet git-kall: ${key}`);
    }
    return responses[key];
  });
  return tag;
};

test('avviser signatur som Git ikke kan verifisere', () => {
  mockReleaseGit({ failVerification: true });
  expect(() => inspectRelease(base)).toThrow('kunne ikke verifisere signaturen');
});

test('verifiserer commit og tags med immutable objekthasher', () => {
  const tag = mockReleaseGit();
  expect(inspectRelease(base)).toEqual({
    commit,
    tags: [tag],
    tagObjects: { [tag]: tagObject },
  });
  expect(execFileSync).toHaveBeenCalledWith(
    'git',
    ['verify-commit', commit],
    expect.objectContaining({ encoding: 'utf8' }),
  );
  expect(execFileSync).toHaveBeenCalledWith(
    'git',
    ['verify-tag', tagObject],
    expect.objectContaining({ encoding: 'utf8' }),
  );
});

test('hopper bare over kryptografisk verifisering i CI', () => {
  const tag = mockReleaseGit();
  expect(inspectRelease(base, { requireSignatures: false })).toEqual({
    commit,
    tags: [tag],
    tagObjects: { [tag]: tagObject },
  });
  expect(execFileSync.mock.calls.some(([, args]) => args[0] === 'verify-commit')).toBe(false);
});

test('krever fortsatt signaturmarkør når offentlig nøkkel ikke kreves', () => {
  mockReleaseGit({ signedCommit: false });
  expect(() => inspectRelease(base, { requireSignatures: false })).toThrow('Release-committen mangler signatur');

  vi.resetAllMocks();
  mockReleaseGit({ signedTag: false });
  expect(() => inspectRelease(base, { requireSignatures: false })).toThrow('mangler signatur');
});

test('aksepterer ikke signaturtekst i commit-meldingen som signaturfelt', () => {
  mockReleaseGit({
    overrides: {
      [`cat-file -p ${commit}`]:
        'tree 1\n\nRelease\ngpgsig -----BEGIN SSH SIGNATURE-----\n signed\n -----END SSH SIGNATURE-----',
    },
  });
  expect(() => inspectRelease(base, { requireSignatures: false })).toThrow('mangler signatur');
});

test('godtar PGP-signaturfelt med tom fortsettelseslinje', () => {
  mockReleaseGit({
    overrides: {
      [`cat-file -p ${commit}`]:
        'tree 1\ngpgsig -----BEGIN PGP SIGNATURE-----\n \n signed\n -----END PGP SIGNATURE-----\n\nRelease',
    },
  });
  expect(() => inspectRelease(base, { requireSignatures: false })).not.toThrow();
});

test('aksepterer ikke signaturtekst midt i tagmeldingen', () => {
  mockReleaseGit({
    overrides: {
      [`cat-file -p ${tagObject}`]:
        'object 1\ntype commit\n\n-----BEGIN SSH SIGNATURE-----\nsigned\n-----END SSH SIGNATURE-----\nNot a signature',
    },
  });
  expect(() => inspectRelease(base, { requireSignatures: false })).toThrow('mangler signatur');
});

test('stopper når peer-transformeringen feiler', () => {
  execFileSync.mockReturnValue(base);
  spawnSync.mockReturnValue({ status: 1, signal: null });
  expect(() => prepareRelease(base)).toThrow('Peer-transformeringen feilet');
});

test('kontrollerer en tagget release i CI uten lokale offentlige nøkler', () => {
  const tag = mockReleaseGit();
  expect(checkRelease()).toEqual({ commit, tags: [tag], tagObjects: { [tag]: tagObject } });
  expect(execFileSync.mock.calls.some(([, args]) => args[0] === 'verify-commit')).toBe(false);
});

test('avviser versjonscommit uten tags i CI', () => {
  mockReleaseGit({ overrides: { [`tag --points-at ${commit}`]: '' } });
  expect(() => checkRelease()).toThrow('Pakkeversjoner er endret uten release-tags');
});

test('tillater vanlig commit uten versjonsendringer eller tags i CI', () => {
  mockReleaseGit({
    overrides: {
      [`tag --points-at ${commit}`]: '',
      [`show ${commit}:${peerPath}`]: JSON.stringify(before[0].manifest),
    },
  });
  expect(checkRelease()).toBeUndefined();
});

test.each([
  { 'rev-list --parents -n 1 HEAD': `${commit} ${base} ${'d'.repeat(40)}` },
  { 'rev-list --parents -n 1 HEAD': `${commit} ${'d'.repeat(40)}` },
  { [`rev-list --count ${base}..HEAD`]: '2' },
])('avviser feil forelder, merge eller flere release-commits', overrides => {
  mockReleaseGit({ overrides });
  expect(() => inspectRelease(base)).toThrow('nøyaktig én commit');
});

test.each([
  { overrides: { [`cat-file -t ${tagObject}`]: 'commit' }, message: 'ikke en annotert tag' },
  { overrides: { [`rev-parse ${tagObject}^{commit}`]: base }, message: 'peker ikke på release-committen' },
])('avviser feil tag-objekt: $message', ({ overrides, message }) => {
  mockReleaseGit({ overrides });
  expect(() => inspectRelease(base)).toThrow(message);
});

test.each(['HEAD', '--help', '', 'a'.repeat(39)])('avviser ugyldig base uten Git-kall: %s', value => {
  expect(() => prepareRelease(value)).toThrow('full SHA');
  expect(() => inspectRelease(value)).toThrow('full SHA');
  expect(execFileSync).not.toHaveBeenCalled();
  expect(spawnSync).not.toHaveBeenCalled();
});

test('avviser workspace som legges til, fjernes eller bytter navn under release', () => {
  expect(() => validateReleasePackages(before, [before[0]])).toThrow('Workspaces kan ikke');
  expect(() =>
    validateReleasePackages(before, [...before, entry('packages/new/package.json', '@navikt/ft-new', '1.0.0')]),
  ).toThrow('Workspaces kan ikke');
  expect(() => validateReleasePackages(before, [entry(peerPath, '@navikt/ft-renamed', '13.0.0'), before[1]])).toThrow(
    'kan ikke bytte navn',
  );
});

test('tar med private versjonerte pakker i forventet release', () => {
  const oldPackage = entry(peerPath, peerName, '1.0.0', { private: true });
  const newPackage = entry(peerPath, peerName, '2.0.0', { private: true });
  expect(validateReleasePackages([oldPackage], [newPackage]).bumped).toEqual([newPackage]);
});

const mockPrepareRelease = bumpConsumer => {
  const after = [
    entry(peerPath, peerName, '13.0.0'),
    entry(consumerPath, consumerName, bumpConsumer ? '1.0.1' : '1.0.0', {
      devDependencies: { [peerName]: 'workspace:^' },
      peerDependencies: { [peerName]: '13.x' },
    }),
  ];
  const root = JSON.stringify({ workspaces: { packages: ['packages/*'] } });
  execFileSync.mockImplementation((_command, args) => {
    const responses = {
      'rev-parse HEAD': base,
      [`show ${base}:package.json`]: root,
      [`ls-tree -r --name-only ${base}`]: `${peerPath}\n${consumerPath}`,
      [`show ${base}:${peerPath}`]: JSON.stringify(before[0].manifest),
      [`show ${base}:${consumerPath}`]: JSON.stringify(before[1].manifest),
      [`diff --name-only ${base} --`]: `${peerPath}\n${consumerPath}`,
    };
    if (!(args.join(' ') in responses)) {
      throw new Error(`Uventet git-kall: ${args.join(' ')}`);
    }
    return responses[args.join(' ')];
  });
  spawnSync.mockReturnValue({ status: 0 });
  fs.readFileSync.mockImplementation(file => {
    expect(spawnSync).toHaveBeenCalledOnce();
    return JSON.stringify(after.find(pkg => file.endsWith(pkg.path)).manifest);
  });
};

test('version-hooken godtar nye peer-krav når forbrukeren også versjoneres', () => {
  mockPrepareRelease(true);
  expect(prepareRelease(base).packages.sort()).toEqual([peerName, consumerName].sort());
  expect(spawnSync.mock.calls[0][1].at(-1)).toBe('--peer-only');
});

test('version-hooken stopper før commit hvis forbrukeren mangler ny versjon', () => {
  mockPrepareRelease(false);
  expect(() => prepareRelease(base)).toThrow('versjonen er fortsatt 1.0.0');
  expect(spawnSync.mock.calls[0][1].at(-1)).toBe('--peer-only');
});
