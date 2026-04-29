const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkgFiles = fs.readdirSync(path.join(root, 'packages')).flatMap(d => {
  const p = path.join(root, 'packages', d);
  if (!fs.statSync(p).isDirectory()) return [];
  const pkgFile = path.join(p, 'package.json');
  if (fs.existsSync(pkgFile)) return [pkgFile];
  return fs
    .readdirSync(p)
    .map(dd => path.join(p, dd, 'package.json'))
    .filter(f => fs.existsSync(f));
});

// Collect workspace package names and their versions
const wsNames = new Set();
const wsVersions = {};
for (const f of pkgFiles) {
  const pkg = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (pkg.name) {
    wsNames.add(pkg.name);
    wsVersions[pkg.name] = pkg.version;
  }
}

const isPrepublish = process.argv.includes('--prepublish');

if (isPrepublish) {
  // Pre-publish mode: replace workspace:^ in peerDependencies with real major-wildcard versions
  // so consumers don't receive unresolvable workspace: protocol references in published packages.
  for (const pkgPath of pkgFiles) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const peers = pkg.peerDependencies;
    if (!peers) continue;

    let changed = false;
    for (const [name, ver] of Object.entries(peers)) {
      if (!ver.startsWith('workspace:')) continue;
      const version = wsVersions[name];
      if (!version) {
        console.warn(`⚠️  No version found for workspace package ${name} in ${pkgPath}`);
        continue;
      }
      const major = version.replace(/^(\d+)\..*$/, '$1.x');
      console.log(`${pkg.name}:\t peerDependencies ${name} "${ver}" -> "${major}"`);
      peers[name] = major;
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    }
  }
  console.log('Done (prepublish: workspace:^ replaced in peerDependencies).');
  process.exit(0);
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

    // Workspace packages should always use workspace:^
    if (wsNames.has(name)) {
      if (ver !== 'workspace:^') {
        console.log(`${pkg.name}: ${name} peer "${ver}" -> "workspace:^"`);
        peers[name] = 'workspace:^';
        if (!devs[name] || devs[name] !== 'workspace:^') {
          devs[name] = 'workspace:^';
        }
        changed = true;
      }
      continue;
    }

    const devVer = devs[name];
    if (devVer) {
      const major = devVer?.replace(/^(\d+)\..*$/, '$1.x');
      if (ver !== major) {
        console.log(`${pkg.name}:\t ${name} peer "${ver}" -> "${major}"`);
        peers[name] = major;
        changed = true;
      }
      continue;
    }
  }

  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  }
}

console.log('Done');
