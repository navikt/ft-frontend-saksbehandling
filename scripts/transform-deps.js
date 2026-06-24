#!/usr/bin/env node
/**
 * Transform local @navikt/ft-* dependencies using versions from packages under ./packages/*.
 *
 * ✅ Updates matching entries in dependencies, devDependencies, and peerDependencies
 * ✅ Only updates dependencies that exist in the local packageVersions map
 * ✅ Writes the exact local version for dependencies and devDependencies
 * ✅ Writes a major wildcard version like "5.x" for peerDependencies
 * ✅ Restores matching entries to "workspace:^" when run in restore mode
 *
 * Usage:
 *   node scripts/transform-deps.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one level from ./scripts to repo root
const repoRoot = path.resolve(__dirname, '..');
export const packagesDir = path.join(repoRoot, 'packages');

// Find all package directories with package.json
export const getPackageDirs = () => {
  return fs.readdirSync(packagesDir).filter(name => {
    const dirPath = path.join(packagesDir, name);
    return fs.existsSync(path.join(dirPath, 'package.json'));
  });
};

/**
 * @returns {Record<string,string>}
 */
export const getPackageVersions = () => {
  const packageVersions = {};
  for (const dir of getPackageDirs()) {
    const pkgPath = path.join(packagesDir, dir, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    packageVersions[pkg.name] = pkg.version;
  }
  if (Object.keys(packageVersions).length === 0) {
    console.warn('⚠️  No local packages found in', packagesDir);
  } else {
    console.log('📦 Found local packages in workspace:');
    console.table(packageVersions);
  }
  return packageVersions;
};

/**
 * @param {Record<string,string>} deps
 * @param {'dependencies' | 'devDependencies' | 'peerDependencies'} dependencyType
 * @param {Record<string,string>} packageVersions
 * @param {boolean} shouldRestore
 * @returns {Record<string,string>}
 */
export const transformDeps = (deps, dependencyType, packageVersions, shouldRestore = false) => {
  if (!deps) return deps;
  let changed = {};
  for (const [dep, version] of Object.entries(deps)) {
    if (!dep.startsWith('@navikt/ft-')) continue;

    const localVersion = packageVersions[dep];
    if (!localVersion) continue;

    let newVersion;
    if (dependencyType === 'peerDependencies') {
      newVersion = localVersion.replace(/^(\d+)\..*$/, '$1.x');
    } else if (shouldRestore) {
      newVersion = `workspace:^`;
    } else {
      newVersion = localVersion;
    }
    deps[dep] = newVersion;
    changed[dep] = version === newVersion ? newVersion : `${version} -> ${newVersion}`;
  }
  console.log(`- ${dependencyType}:\t`, Object.keys(changed).length > 0 ? changed : 'No changes');
  return deps;
};
