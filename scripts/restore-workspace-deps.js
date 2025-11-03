/**
 * Restore @navikt/ft-* dependencies back to "workspace:^"
 * for all packages in ./packages/*.
 *
 * ✅ Updates only dependencies and devDependencies
 * 🚫 Skips peerDependencies
 *
 * Usage:
 *   node scripts/restore-workspace-deps.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up one level from ./scripts to repo root
const repoRoot = path.resolve(__dirname, '..');
const packagesDir = path.join(repoRoot, 'packages');

// Get all package directories that contain package.json
const packageDirs = fs.readdirSync(packagesDir).filter(name => {
  const dirPath = path.join(packagesDir, name);
  return fs.existsSync(path.join(dirPath, 'package.json'));
});

function replaceWithWorkspace(deps) {
  if (!deps) return deps;
  for (const [dep, version] of Object.entries(deps)) {
    if (dep.startsWith('@navikt/ft-') && version !== 'workspace:^') {
      deps[dep] = 'workspace:^';
      console.log(`  🔄 ${dep}: ${version} → workspace:^`);
    }
  }
  return deps;
}

for (const dir of packageDirs) {
  const pkgPath = path.join(packagesDir, dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  console.log(`\n📦 Restoring ${pkg.name}...`);

  pkg.dependencies = replaceWithWorkspace(pkg.dependencies);
  pkg.devDependencies = replaceWithWorkspace(pkg.devDependencies);

  // peerDependencies intentionally skipped
  // pkg.peerDependencies = replaceWithWorkspace(pkg.peerDependencies);

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('  💾 Saved', pkgPath);
}

console.log('\n✅ Done restoring @navikt/ft-* packages to workspace:^ (dependencies + devDependencies only)!');
