const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkgFiles = fs.readdirSync(path.join(root, 'packages')).flatMap(d => {
  const p = path.join(root, 'packages', d);
  if (!fs.statSync(p).isDirectory()) return [];
  const pkgFile = path.join(p, 'package.json');
  if (fs.existsSync(pkgFile)) return [pkgFile];
  return fs.readdirSync(p)
    .map(dd => path.join(p, dd, 'package.json'))
    .filter(f => fs.existsSync(f));
});

// Collect workspace package names
const wsNames = new Set();
for (const f of pkgFiles) {
  const pkg = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (pkg.name) wsNames.add(pkg.name);
}

for (const pkgPath of pkgFiles) {
  const raw = fs.readFileSync(pkgPath, 'utf8');
  const pkg = JSON.parse(raw);
  const peers = pkg.peerDependencies;
  if (!peers) continue;

  const devs = pkg.devDependencies || {};
  let changed = false;

  for (const [name, ver] of Object.entries(peers)) {
    if (ver.startsWith('workspace:')) continue;

    // Workspace packages should use workspace:^
    if (wsNames.has(name)) {
      if (ver !== 'workspace:^') {
        console.log(`${pkgPath}: ${name} peer "${ver}" -> "workspace:^"`);
        peers[name] = 'workspace:^';
        if (!devs[name] || devs[name] !== 'workspace:^') {
          devs[name] = 'workspace:^';
        }
        changed = true;
      }
      continue;
    }

    const devVer = devs[name];
    if (!devVer) {
      console.log(`${pkgPath}: ${name} (missing) -> adding ${ver} to devDependencies`);
      devs[name] = ver;
      changed = true;
      continue;
    }

    // Derive major wildcard from devDependencies pinned version
    const major = devVer.replace(/^(\d+)\..*$/, '$1.x');
    if (ver !== major) {
      console.log(`${pkgPath}: ${name} peer "${ver}" -> "${major}"`);
      peers[name] = major;
      changed = true;
    }
  }

  if (changed) {
    pkg.devDependencies = Object.fromEntries(
      Object.entries(devs).sort(([a], [b]) => a.localeCompare(b))
    );
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  }
}

console.log('Done');
