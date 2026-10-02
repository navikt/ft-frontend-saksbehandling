import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { beforeEach, expect, test, vi } from 'vitest';

import { runRelease } from './release.js';
import { inspectRelease } from './release-checks.js';

vi.mock('node:child_process', () => ({ spawnSync: vi.fn() }));
vi.mock('node:fs', () => ({ readFileSync: vi.fn() }));
vi.mock('./release-checks.js', () => ({ inspectRelease: vi.fn() }));

const base = 'a'.repeat(40);
const commit = 'b'.repeat(40);
const tagObject = 'c'.repeat(40);
const tag = '@navikt/ft-utils@7.0.0';
let state;

const pushes = () => spawnSync.mock.calls.filter(([command, args]) => command === 'git' && args.includes('push'));
const lernaCalls = () => spawnSync.mock.calls.filter(([, args]) => args.includes('lerna'));

beforeEach(() => {
  vi.resetAllMocks();
  state = {
    branch: 'main',
    head: base,
    remote: base,
    ignoreScripts: 'false',
    dirty: '',
    lernaStatus: 0,
    installStatus: 0,
    fetchStatus: 0,
    pushStatus: 0,
    noChanges: false,
    dirtyAfterVersion: '',
    dirtyAfterInstall: '',
  };
  readFileSync.mockReturnValue(JSON.stringify({ version: 'independent' }));
  inspectRelease.mockReturnValue({ commit, tags: [tag], tagObjects: { [tag]: tagObject } });
  spawnSync.mockImplementation((command, args) => {
    let stdout = '';
    let status = 0;
    if (command === 'npm') {
      stdout = state.ignoreScripts;
    } else if (command === 'git') {
      switch (args[0]) {
        case 'symbolic-ref':
          stdout = state.branch;
          break;
        case 'status':
          stdout = state.dirty;
          break;
        case 'fetch':
          status = state.fetchStatus;
          break;
        case 'rev-parse':
          stdout = args[1] === 'HEAD' ? state.head : args[1] === 'HEAD^' ? base : state.remote;
          break;
        case '-c':
          status = state.pushStatus;
          break;
        default:
          throw new Error(`Uventet git-kall: ${args}`);
      }
    } else if (args.includes('lerna')) {
      status = state.lernaStatus;
      if (status === 0 && !state.noChanges) {
        state.head = commit;
      }
      state.dirty = state.dirtyAfterVersion;
    } else if (args.includes('install')) {
      status = state.installStatus;
      state.dirty = state.dirtyAfterInstall;
    } else if (!args.includes('check:peers')) {
      throw new Error(`Uventet kommando: ${command} ${args}`);
    }
    return { status, stdout };
  });
});

test('bruker signert lokal versjonering og pusher bare kontrollert commit og tags atomisk', () => {
  runRelease();

  expect(lernaCalls()).toHaveLength(1);
  const [, args, options] = lernaCalls()[0];
  expect(args).toEqual(
    expect.arrayContaining([
      '--no-push',
      '--no-amend',
      '--git-tag-version',
      '--no-force-git-tag',
      '--granular-pathspec',
      '--sign-git-commit',
      '--sign-git-tag',
    ]),
  );
  expect(options.env.FT_RELEASE_BASE_SHA).toBe(base);
  expect(inspectRelease).toHaveBeenCalledWith(base);
  expect(pushes()).toHaveLength(1);
  expect(pushes()[0][1]).toEqual([
    '-c',
    'push.followTags=false',
    'push',
    '--atomic',
    'origin',
    `${commit}:refs/heads/main`,
    `${tagObject}:refs/tags/${tag}`,
  ]);
  expect(inspectRelease.mock.invocationCallOrder[0]).toBeLessThan(spawnSync.mock.invocationCallOrder.at(-1));
});

test.each(['true', '', 'undefined'])('stopper før versjonering ved uklar eller deaktivert lifecycle: %s', value => {
  state.ignoreScripts = value;
  expect(() => runRelease()).toThrow('Lifecycle-skript er deaktivert');
  expect(lernaCalls()).toHaveLength(0);
  expect(pushes()).toHaveLength(0);
});

test.each([
  { ignoreScripts: true },
  { 'ignore-scripts': true },
  { command: { version: { ignoreScripts: true } } },
  { command: { version: { 'ignore-scripts': true } } },
])('stopper også når lerna.json deaktiverer lifecycle', config => {
  readFileSync.mockReturnValue(JSON.stringify({ version: 'independent', ...config }));
  expect(() => runRelease()).toThrow('Lifecycle-skript er deaktivert');
  expect(lernaCalls()).toHaveLength(0);
});

test.each([
  { branch: 'feature', error: 'main' },
  { dirty: ' M README.md', error: 'lokale endringer' },
  { remote: 'd'.repeat(40), error: 'siste origin/main' },
  { fetchStatus: 1, error: 'fetch' },
])('stopper før Lerna ved feil forutsetninger: $error', ({ error, ...values }) => {
  Object.assign(state, values);
  expect(() => runRelease()).toThrow(error);
  expect(lernaCalls()).toHaveLength(0);
  expect(pushes()).toHaveLength(0);
});

test('stopper når version-hooken eller Lerna feiler, uten å rydde eller pushe', () => {
  state.lernaStatus = 1;
  state.dirtyAfterVersion = ' M packages/utils/package.json';
  expect(() => runRelease()).toThrow('lerna');
  expect(inspectRelease).not.toHaveBeenCalled();
  expect(pushes()).toHaveLength(0);
  expect(state.dirty).not.toBe('');
});

test('bevarer årsaken når en kommando ikke kan startes', () => {
  spawnSync.mockReturnValueOnce({ error: new Error('spawn git ENOENT') });
  expect(() => runRelease()).toThrow('spawn git ENOENT');
  expect(pushes()).toHaveLength(0);
});

test('stopper dersom Lerna etterlater manifestendringer utenfor committen', () => {
  state.dirtyAfterVersion = ' M packages/form-hooks/package.json';
  expect(() => runRelease()).toThrow('lokale endringer');
  expect(pushes()).toHaveLength(0);
});

test('stopper ved feil commit, manglende tags eller ugyldig signatur', () => {
  inspectRelease.mockImplementation(() => {
    throw new Error('Ugyldig release');
  });
  expect(() => runRelease()).toThrow('Ugyldig release');
  expect(pushes()).toHaveLength(0);
});

test('stopper hvis den committede lockfilen ikke kan installeres uendret', () => {
  state.installStatus = 1;
  expect(() => runRelease()).toThrow('--immutable');
  expect(pushes()).toHaveLength(0);
});

test('stopper dersom installasjonen endrer arbeidskopien', () => {
  state.dirtyAfterInstall = ' M yarn.lock';
  expect(() => runRelease()).toThrow('lokale endringer');
  expect(pushes()).toHaveLength(0);
});

test('pusher ingenting når Lerna ikke lager en ny versjonscommit', () => {
  state.noChanges = true;
  runRelease();
  expect(inspectRelease).not.toHaveBeenCalled();
  expect(pushes()).toHaveLength(0);
});

test('videresender force-publish uten å åpne for andre Lerna-flagg', () => {
  runRelease(['--force-publish']);
  expect(lernaCalls()[0][1]).toContain('--force-publish');
});

test.each([['--ignore-scripts'], ['--yes'], ['--resume', '--force-publish']])(
  'avviser uventede argumenter: %j',
  (...args) => {
    expect(() => runRelease(args)).toThrow('Andre Lerna-flagg');
    expect(spawnSync).not.toHaveBeenCalled();
  },
);

test.each([base, commit])('kan gjenoppta push uten ny versjonsbump når origin/main er %s', remote => {
  state.head = commit;
  state.remote = remote;
  runRelease(['--resume']);
  expect(lernaCalls()).toHaveLength(0);
  expect(inspectRelease).toHaveBeenCalledWith(base);
  expect(pushes()).toHaveLength(1);
});

test('ved avvist atomisk push forsøkes verken force-push eller separat tag-push', () => {
  state.pushStatus = 1;
  expect(() => runRelease()).toThrow('--atomic');
  expect(pushes()).toHaveLength(1);
});
