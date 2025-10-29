#!/usr/bin/env node
/**
 * Replace all "workspace:^" dependencies with the real versions
 * for local packages under ./packages/*.
 *
 * ✅ Updates dependencies, devDependencies, and peerDependencies
 * 🗂️  Should be placed in ./scripts
 *
 * Usage:
 *   node scripts/replace-workspace-deps.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one level from ./scripts to repo root
const repoRoot = path.resolve(__dirname, '..');
const packagesDir = path.join(repoRoot, 'packages');

// Find all package directories with package.json
const packageDirs = fs.readdirSync(packagesDir).filter(name => {
  const dirPath = path.join(packagesDir, name);
  return fs.existsSync(path.join(dirPath, 'package.json'));
});

// Build a map of local package names → versions
const packageVersions = {};
for (const dir of packageDirs) {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  packageVersions[pkg.name] = pkg.version;
}

console.log('📦 Found local packages:');
console.table(packageVersions);

function replaceWorkspaceDeps(deps) {
  if (!deps) return deps;
  for (const [dep, version] of Object.entries(deps)) {
    if (version.startsWith('workspace:')) {
      const localVersion = packageVersions[dep];
      if (localVersion) {
        deps[dep] = localVersion;
        console.log(`  ✅ ${dep}: ${version} → ${localVersion}`);
      } else {
        console.warn(`  ⚠️  No local version found for ${dep} (${version})`);
      }
    }
  }
  return deps;
}

for (const dir of packageDirs) {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  console.log(`\n🔧 Updating ${pkg.name}...`);

  pkg.dependencies = replaceWorkspaceDeps(pkg.dependencies);
  pkg.devDependencies = replaceWorkspaceDeps(pkg.devDependencies);
  pkg.peerDependencies = replaceWorkspaceDeps(pkg.peerDependencies);

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('  💾 Saved', pkgPath);
}

console.log('\n✅ Done replacing workspace:^ with real versions!');
