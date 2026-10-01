#!/usr/bin/env node
import { checkRelease } from './release-checks.js';

if (checkRelease()) {
  console.log('Release-commit og tags samsvarer med pakkekontraktene.');
} else {
  console.log('Ingen endrede pakkeversjoner eller release-tags på HEAD.');
}
