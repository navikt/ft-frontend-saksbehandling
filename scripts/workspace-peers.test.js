import assert from 'node:assert/strict';
import { test } from 'vitest';

import { checkWorkspacePeers } from './check-workspace-peers.js';
import { getWorkspacePackages, transformDeps } from './transform-deps.js';

const peer = { name: '@navikt/ft-form-hooks', version: '13.0.0' };
const consumer = {
  name: '@navikt/ft-consumer',
  version: '1.0.0',
  peerDependencies: { [peer.name]: '13.x' },
};

test('godtar kompatible ranges, inkludert flere majorer og workspace-protokollen', () => {
  for (const range of [
    '13.x',
    '^13.0.0',
    '12.x || 13.x',
    '>=12 <14',
    'workspace:^',
    'workspace:~',
    'workspace:*',
    'workspace:^13.0.0',
  ]) {
    assert.deepEqual(checkWorkspacePeers([peer, { ...consumer, peerDependencies: { [peer.name]: range } }]), [], range);
  }
});

test('avviser gammel major, ugyldige ranges og inkompatible workspace-ranges', () => {
  for (const range of ['12.x', 'ugyldig', 'workspace:12.x']) {
    assert.deepEqual(checkWorkspacePeers([peer, { ...consumer, peerDependencies: { [peer.name]: range } }]), [
      `${consumer.name}: ${peer.name}@${range} støtter ikke lokal versjon 13.0.0.`,
    ]);
  }
});

test('kontrollerer også valgfrie peers', () => {
  assert.equal(
    checkWorkspacePeers([
      peer,
      {
        ...consumer,
        peerDependencies: { [peer.name]: '12.x' },
        peerDependenciesMeta: { [peer.name]: { optional: true } },
      },
    ]).length,
    1,
  );
});

test('avviser private peers fra publiserbare pakker, også valgfrie peers', () => {
  const privatePeer = { name: '@navikt/ft-kodeverk', version: '6.0.0', private: true };
  for (const range of ['6.x', 'workspace:^']) {
    assert.deepEqual(
      checkWorkspacePeers([
        privatePeer,
        {
          ...consumer,
          peerDependencies: { [privatePeer.name]: range },
          peerDependenciesMeta: { [privatePeer.name]: { optional: true } },
        },
      ]),
      [`${consumer.name}: ${privatePeer.name} er privat og kan ikke publiseres som peerDependency.`],
    );
  }
});

test('tillater private peers mellom private pakker og private devDependencies', () => {
  const privatePeer = { ...peer, private: true };
  assert.deepEqual(
    checkWorkspacePeers([
      privatePeer,
      { ...consumer, private: true },
      { name: '@navikt/ft-bundler', devDependencies: { [peer.name]: 'workspace:^' } },
    ]),
    [],
  );
});

test('ignorerer eksterne peers og pakker uten peers', () => {
  assert.deepEqual(checkWorkspacePeers([peer, { ...consumer, peerDependencies: { react: '19.x' } }]), []);
});

test('finner både publiserbare og interne workspaces', () => {
  const packages = getWorkspacePackages();
  assert.ok(packages.some(pkg => pkg.name === '@navikt/ft-form-hooks' && !pkg.private));
  assert.ok(packages.some(pkg => pkg.name === '@navikt/ft-kodeverk' && pkg.private));
});

test('versjonering retter gamle majors og workspace-peers, men beholder kompatible ranges', () => {
  for (const [range, expected] of [
    ['12.x', '13.x'],
    ['workspace:^', '13.x'],
    ['12.x || 13.x', '12.x || 13.x'],
    ['^13.0.0', '^13.0.0'],
  ]) {
    assert.deepEqual(transformDeps({ [peer.name]: range }, 'peerDependencies', { [peer.name]: peer.version }), {
      [peer.name]: expected,
    });
  }
});

test('beholder eksisterende transformering og restore for vanlige avhengigheter', () => {
  const versions = { [peer.name]: peer.version };
  for (const type of ['dependencies', 'devDependencies']) {
    assert.deepEqual(transformDeps({ [peer.name]: 'workspace:^' }, type, versions), { [peer.name]: '13.0.0' });
    assert.deepEqual(transformDeps({ [peer.name]: '13.0.0' }, type, versions, true), { [peer.name]: 'workspace:^' });
  }
  assert.deepEqual(transformDeps({ [peer.name]: 'workspace:^' }, 'peerDependencies', versions, true), {
    [peer.name]: '13.x',
  });
  assert.deepEqual(transformDeps({ '@navikt/ft-kodeverk': 'workspace:^' }, 'devDependencies', versions), {
    '@navikt/ft-kodeverk': 'workspace:^',
  });
});
