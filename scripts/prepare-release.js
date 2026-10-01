#!/usr/bin/env node
import process from 'node:process';

import { prepareRelease } from './release-checks.js';

try {
  if (!process.env.FT_RELEASE_BASE_SHA) {
    throw new Error('FT_RELEASE_BASE_SHA mangler. Start release med yarn tag-wrapperen.');
  }
  prepareRelease(process.env.FT_RELEASE_BASE_SHA);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
}
