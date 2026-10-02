#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { inspectRelease } from './release-checks.js';

const repoRoot = fileURLToPath(new URL('../', import.meta.url));
const yarn = path.join(repoRoot, '.yarn/releases/yarn-4.17.0.cjs');

const run = (command, args, { capture = false, env = process.env } = {}) => {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    env,
    encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} feilet (${result.signal ?? result.status}).`);
  }
  return capture ? result.stdout.trim() : undefined;
};

const git = (...args) => run('git', args, { capture: true });

const requireCleanWorktree = () => {
  if (git('status', '--porcelain', '--untracked-files=all')) {
    throw new Error('Arbeidskopien har lokale endringer. Ingen release pushes før arbeidskopien er ren.');
  }
};

const requireMain = () => {
  if (git('symbolic-ref', '--quiet', '--short', 'HEAD') !== 'main') {
    throw new Error('Publisering må starte fra main. Bruk en egen, ren arbeidskopi.');
  }
};

export const runRelease = (args = []) => {
  if (args.length > 1 || args.some(arg => !['--force-publish', '--resume'].includes(arg))) {
    throw new Error('Bruk yarn tag, yarn tag:force eller yarn tag:resume. Andre Lerna-flagg er ikke tillatt.');
  }
  const resume = args.includes('--resume');
  requireMain();
  requireCleanWorktree();

  if (!resume) {
    const config = JSON.parse(readFileSync(path.join(repoRoot, 'lerna.json'), 'utf8'));
    const ignoreScripts = run('npm', ['config', 'get', 'ignore-scripts'], { capture: true });
    if (
      ignoreScripts !== 'false' ||
      config.ignoreScripts ||
      config['ignore-scripts'] ||
      config.command?.version?.ignoreScripts ||
      config.command?.version?.['ignore-scripts']
    ) {
      throw new Error(
        'Lifecycle-skript er deaktivert. Avklar npm ignore-scripts før publisering; peer-oppdateringen må kjøre.',
      );
    }
    if (config.version !== 'independent') {
      throw new Error('Release-skriptet krever uavhengig pakkeversjonering.');
    }
  }

  run('git', ['fetch', '--tags', 'origin', 'refs/heads/main:refs/remotes/origin/main']);
  const before = git('rev-parse', 'HEAD');
  const remote = git('rev-parse', 'refs/remotes/origin/main');
  const base = resume ? git('rev-parse', 'HEAD^') : before;
  if (remote !== base && !(resume && remote === before)) {
    throw new Error('Lokal release bygger ikke på siste origin/main. Ingen push utføres.');
  }

  if (!resume) {
    run(process.execPath, [yarn, 'check:peers']);
    run(
      process.execPath,
      [
        yarn,
        'exec',
        'lerna',
        'version',
        '--no-push',
        '--no-amend',
        '--git-tag-version',
        '--no-force-git-tag',
        '--granular-pathspec',
        '--sign-git-commit',
        '--sign-git-tag',
        '--git-remote=origin',
        ...args,
      ],
      { env: { ...process.env, FT_RELEASE_BASE_SHA: base } },
    );
    if (git('rev-parse', 'HEAD') === base) {
      requireCleanWorktree();
      console.log('Ingen ny versjonscommit. Ingenting pushes.');
      return;
    }
  }

  requireMain();
  requireCleanWorktree();
  const { commit, tags, tagObjects } = inspectRelease(base);
  run(process.execPath, [yarn, 'install', '--immutable', '--mode=skip-build']);
  requireMain();
  requireCleanWorktree();
  if (git('rev-parse', 'HEAD') !== commit) {
    throw new Error('HEAD ble endret under release-kontrollen. Ingen push utføres.');
  }
  run('git', [
    '-c',
    'push.followTags=false',
    'push',
    '--atomic',
    'origin',
    `${commit}:refs/heads/main`,
    ...tags.map(tag => `${tagObjects[tag]}:refs/tags/${tag}`),
  ]);
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runRelease(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    console.error(
      'Release-kjøringen er stoppet. Se git status og git log før du fortsetter. ' +
        'Hvis versjonscommit og tags er ferdige, bruk yarn tag:resume for ny kontroll og push. ' +
        'Ikke kjør en ny versjonsbump eller slett tags automatisk.',
    );
    process.exitCode = 1;
  }
}
