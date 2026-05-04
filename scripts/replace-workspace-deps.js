#!/usr/bin/env node
/**
 * Replace all "workspace:^" dependencies with the real versions
 * for local packages under ./packages/*.
 *
 * ✅ Updates dependencies, devDependencies, and peerDependencies
 *
 * Usage:
 *   node scripts/replace-workspace-deps.js [options]
 *
 * Options:
 *   -p, --peer-only  Only transform peerDependencies
 *   -r, --restore    Restore workspace dependencies instead of replacing them with real versions
 */

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { getPackageDirs, getPackageVersions, packagesDir, transformDeps } from './transform-deps.js';

const { values } = parseArgs({
  options: {
    'peer-only': { type: 'boolean', short: 'p' },
    restore: { type: 'boolean', short: 'r', default: false },
  },
});

const packageDirs = getPackageDirs();
const packageVersions = getPackageVersions();

for (const dir of packageDirs) {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  console.log(`\nProcessing ${pkg.name}...`);
  if (!values['peer-only']) {
    pkg.dependencies = transformDeps(pkg.dependencies, 'dependencies', packageVersions, values.restore);
    pkg.devDependencies = transformDeps(pkg.devDependencies, 'devDependencies', packageVersions, values.restore);
  }
  pkg.peerDependencies = transformDeps(pkg.peerDependencies, 'peerDependencies', packageVersions, values.restore);

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}

console.log('\n✅ Done');
