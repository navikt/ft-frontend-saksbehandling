import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import semver from 'semver';

import { checkWorkspacePeers } from './check-workspace-peers.js';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const shaPattern = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/;

const git = (...args) =>
  execFileSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();

const requireBaseRef = baseRef => {
  if (!shaPattern.test(baseRef ?? '')) {
    throw new Error('FT_RELEASE_BASE_SHA må være en full SHA-1- eller SHA-256-hash med små bokstaver.');
  }
};

const workspacePatterns = ref => {
  const rootPackage = JSON.parse(git('show', `${ref}:package.json`));
  const patterns = Array.isArray(rootPackage.workspaces) ? rootPackage.workspaces : rootPackage.workspaces?.packages;
  if (!Array.isArray(patterns) || patterns.length === 0) {
    throw new Error(`Fant ingen workspaces i package.json ved ${ref}.`);
  }
  return patterns.map(pattern => `${pattern}/package.json`);
};

const workspacePaths = ref => {
  const patterns = workspacePatterns(ref);
  return git('ls-tree', '-r', '--name-only', ref)
    .split('\n')
    .filter(Boolean)
    .filter(file => patterns.some(pattern => path.matchesGlob(file, pattern)))
    .sort();
};

const gitSnapshot = ref =>
  workspacePaths(ref).map(file => ({
    path: file,
    manifest: JSON.parse(git('show', `${ref}:${file}`)),
  }));

const workingSnapshot = paths =>
  paths.map(file => ({
    path: file,
    manifest: JSON.parse(fs.readFileSync(path.join(repoRoot, file), 'utf8')),
  }));

const byPath = packages => new Map(packages.map(pkg => [pkg.path, pkg.manifest]));

const requireVersion = (name, version) => {
  if (!semver.valid(version)) {
    throw new Error(`${name} har ugyldig versjon ${version ?? '(mangler)'}.`);
  }
};

export const validateReleasePackages = (before, after, { changedPaths } = {}) => {
  const oldPackages = byPath(before);
  const newPackages = byPath(after);
  const oldPaths = [...oldPackages.keys()].sort();
  const newPaths = [...newPackages.keys()].sort();
  if (JSON.stringify(oldPaths) !== JSON.stringify(newPaths)) {
    throw new Error('Workspaces kan ikke legges til, fjernes eller flyttes i en release-commit.');
  }

  const changed = new Set(
    changedPaths ??
      oldPaths.filter(file => JSON.stringify(oldPackages.get(file)) !== JSON.stringify(newPackages.get(file))),
  );
  const bumped = [];
  for (const file of oldPaths) {
    const oldPackage = oldPackages.get(file);
    const newPackage = newPackages.get(file);
    if (oldPackage.name !== newPackage.name) {
      throw new Error(`${file}: pakken kan ikke bytte navn i en release-commit.`);
    }
    requireVersion(newPackage.name, oldPackage.version);
    requireVersion(newPackage.name, newPackage.version);
    if (!changed.has(file)) {
      continue;
    }
    if (!semver.gt(newPackage.version, oldPackage.version)) {
      const reason = semver.lt(newPackage.version, oldPackage.version)
        ? `versjonen er satt ned fra ${oldPackage.version} til ${newPackage.version}`
        : `versjonen er fortsatt ${newPackage.version}`;
      throw new Error(
        `${newPackage.name}: package.json er endret, men ${reason}. Ta med pakken som forbruker i versjonsvalget.`,
      );
    }
    bumped.push({ path: file, manifest: newPackage });
  }

  const peerErrors = checkWorkspacePeers(after.map(pkg => pkg.manifest));
  if (peerErrors.length > 0) {
    throw new Error(peerErrors.join('\n'));
  }
  return { bumped, changed: [...changed].sort() };
};

export const validateChangedPaths = (changedPaths, manifestPaths) => {
  const allowed = new Set([...manifestPaths, 'yarn.lock']);
  const prohibited = changedPaths.filter(file => !allowed.has(file));
  if (prohibited.length > 0) {
    throw new Error(`Release-committen inneholder filer som ikke er tillatt: ${prohibited.join(', ')}.`);
  }
};

export const validateReleaseTags = (expected, actual) => {
  const expectedTags = [...expected].sort();
  const actualTags = [...actual].sort();
  if (JSON.stringify(expectedTags) !== JSON.stringify(actualTags)) {
    throw new Error(
      `Release-tags samsvarer ikke med versjonene. Forventet: ${expectedTags.join(', ') || '(ingen)'}. ` +
        `Fant: ${actualTags.join(', ') || '(ingen)'}.`,
    );
  }
};

const requireSignatureBlock = (content, description) => {
  if (!/-----BEGIN (PGP|SSH) SIGNATURE-----\n[\s\S]+\n-----END \1 SIGNATURE-----$/.test(content)) {
    throw new Error(`${description} mangler signatur.`);
  }
};

export const prepareRelease = baseRef => {
  requireBaseRef(baseRef);
  if (git('rev-parse', 'HEAD') !== baseRef) {
    throw new Error('FT_RELEASE_BASE_SHA er ikke lik HEAD. Start release med yarn tag-wrapperen.');
  }

  const transform = spawnSync(
    process.execPath,
    [path.join(repoRoot, 'scripts/replace-workspace-deps.js'), '--peer-only'],
    {
      cwd: repoRoot,
      stdio: 'inherit',
    },
  );
  if (transform.error) {
    throw transform.error;
  }
  if (transform.status !== 0) {
    throw new Error(`Peer-transformeringen feilet (${transform.signal ?? transform.status}).`);
  }

  const before = gitSnapshot(baseRef);
  const manifestPaths = before.map(pkg => pkg.path);
  const changedPaths = git('diff', '--name-only', baseRef, '--').split('\n').filter(Boolean);
  const changedManifests = changedPaths.filter(file => file.endsWith('package.json'));
  const outsideWorkspace = changedManifests.filter(file => !manifestPaths.includes(file));
  if (outsideWorkspace.length > 0) {
    throw new Error(`Endrede package.json-filer ligger utenfor release-utvalget: ${outsideWorkspace.join(', ')}.`);
  }

  const result = validateReleasePackages(before, workingSnapshot(manifestPaths), {
    changedPaths: changedManifests,
  });
  return { packages: result.bumped.map(pkg => pkg.manifest.name) };
};

export const inspectRelease = (baseRef, { requireSignatures = true } = {}) => {
  requireBaseRef(baseRef);
  const commit = git('rev-parse', 'HEAD');
  const commitLine = git('rev-list', '--parents', '-n', '1', 'HEAD').split(' ');
  if (commitLine.length !== 2 || commitLine[1] !== baseRef || git('rev-list', '--count', `${baseRef}..HEAD`) !== '1') {
    throw new Error('Release må bestå av nøyaktig én commit med base-committen som eneste forelder.');
  }

  const before = gitSnapshot(baseRef);
  const after = gitSnapshot(commit);
  const changedPaths = git('diff', '--name-only', baseRef, commit, '--').split('\n').filter(Boolean);
  validateChangedPaths(
    changedPaths,
    after.map(pkg => pkg.path),
  );
  const result = validateReleasePackages(before, after, {
    changedPaths: changedPaths.filter(file => file.endsWith('package.json')),
  });
  if (result.bumped.length === 0) {
    throw new Error('Release-committen versjonerer ingen pakker.');
  }

  const expectedTags = result.bumped.map(pkg => `${pkg.manifest.name}@${pkg.manifest.version}`);
  const tags = git('tag', '--points-at', commit).split('\n').filter(Boolean);
  validateReleaseTags(expectedTags, tags);

  const commitObject = git('cat-file', '-p', commit);
  const commitHeaders = commitObject.split('\n\n')[0];
  const signatureHeader = commitHeaders.match(/^gpgsig (.+(?:\n .*)*)/m)?.[1];
  if (!signatureHeader) {
    throw new Error('Release-committen mangler signatur.');
  }
  requireSignatureBlock(signatureHeader.replaceAll('\n ', '\n'), 'Release-committen');
  const tagObjects = {};
  for (const tag of tags) {
    const tagObject = git('rev-parse', `refs/tags/${tag}`);
    if (git('cat-file', '-t', tagObject) !== 'tag') {
      throw new Error(`${tag} er ikke en annotert tag.`);
    }
    if (git('rev-parse', `${tagObject}^{commit}`) !== commit) {
      throw new Error(`${tag} peker ikke på release-committen.`);
    }
    requireSignatureBlock(git('cat-file', '-p', tagObject), `Taggen ${tag}`);
    tagObjects[tag] = tagObject;
  }

  if (requireSignatures) {
    try {
      git('verify-commit', commit);
      for (const tagObject of Object.values(tagObjects)) {
        git('verify-tag', tagObject);
      }
    } catch (error) {
      throw new Error('Git kunne ikke verifisere signaturen på release-committen eller taggene.', {
        cause: error,
      });
    }
  }
  return { commit, tags: [...tags].sort(), tagObjects };
};

export const checkRelease = () => {
  const commit = git('rev-parse', 'HEAD');
  const base = git('rev-parse', `${commit}^`);
  if (git('tag', '--points-at', commit)) {
    return inspectRelease(base, { requireSignatures: false });
  }

  const before = byPath(gitSnapshot(base));
  const changedVersions = gitSnapshot(commit).filter(({ path: file, manifest }) => {
    const previous = before.get(file);
    return previous?.name === manifest.name && previous.version !== manifest.version;
  });
  if (changedVersions.length > 0) {
    throw new Error(
      `Pakkeversjoner er endret uten release-tags: ${changedVersions.map(pkg => pkg.manifest.name).join(', ')}.`,
    );
  }
  return undefined;
};
