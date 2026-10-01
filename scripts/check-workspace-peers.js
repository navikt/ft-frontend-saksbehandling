#!/usr/bin/env node
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { satisfies } from 'semver';

import { getWorkspacePackages } from './transform-deps.js';

export const checkWorkspacePeers = packages => {
  const localPackages = new Map(packages.map(pkg => [pkg.name, pkg]));
  const errors = [];

  for (const pkg of packages) {
    for (const [name, range] of Object.entries(pkg.peerDependencies ?? {})) {
      const peer = localPackages.get(name);
      if (!peer) {
        continue;
      }
      if (!pkg.private && peer.private) {
        errors.push(`${pkg.name}: ${name} er privat og kan ikke publiseres som peerDependency.`);
        continue;
      }

      let semverRange = range;
      if (range.startsWith('workspace:')) {
        semverRange = range.slice('workspace:'.length);
        if (['*', '^', '~'].includes(semverRange)) {
          semverRange = `${semverRange === '*' ? '' : semverRange}${peer.version}`;
        }
      }
      if (!satisfies(peer.version, semverRange)) {
        errors.push(`${pkg.name}: ${name}@${range} støtter ikke lokal versjon ${peer.version}.`);
      }
    }
  }

  return errors;
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = checkWorkspacePeers(getWorkspacePackages());
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Alle workspace-peers er kompatible, og ingen publiserbare pakker har private peers.');
  }
}
