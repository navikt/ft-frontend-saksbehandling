const path = require('path');
const shell = require('shelljs');
const glob = require('glob');
const fs = require('fs');
<<<<<<< HEAD
=======
const ghpages = require('gh-pages');
>>>>>>> 3d542410 (div)

const generateRow = (package) => `
  <div class="box">
    <a href="${path.join(package.name, 'index.html')}" class="package-row" target="blank">
      <div class="title">
        ${package.name}
      </div>
    </a>
    <div class="description">
      Beskrivelse: ${package.description || '-- Mangler --'}
    </div>
  </div>
`;

const generateHTML = (packages) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Storybook - FT-FRONTEND-SAKSBEHANDLING</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="monorepo-index.css">
  </head>
  <body>
    <h1 class="main-header">Storybook for FT-FRONTEND-SAKSBEHANDLING</h1>
    <h2 class="header">Faktapaneler:</h3>
    <div class="grid-container">
      ${packages.filter((p) => p.name.includes('ft-fakta')).map(generateRow).join('')}
    </div>
    <br />
    <h2 class="header">Prosesspaneler:</h3>
    <div class="grid-container">
      ${packages.filter((p) => p.name.includes('ft-prosess')).map(generateRow).join('')}
    </div>
    <br />
    <h2 class="header">Sak-paneler:</h3>
    <div class="grid-container">
      ${packages.filter((p) => p.name.includes('ft-sak')).map(generateRow).join('')}
    </div>
    <h2 class="header">Andre:</h3>
    <div class="grid-container">
      ${packages.filter((p) => !p.name.includes('ft-sak')
        && !p.name.includes('ft-fakta')
        && !p.name.includes('ft-prosess')).map(generateRow).join('')}
    </div>
  </body>
  </html>
`;


const DEPLOY_FOLDER = '../.storybook-static-build';

const creatIndexHtml = () => {
  // Lag folder-struktur for innholdet som skal deployes
  shell.mkdir(path.join(__dirname, DEPLOY_FOLDER));
  shell.mkdir(path.join(__dirname, DEPLOY_FOLDER, '@navikt'));

  // Kopier css fil til folder som skal deployes
  shell.cp(
    path.join(__dirname, 'storybook-monorepo-index.css'),
    path.join(__dirname, DEPLOY_FOLDER, 'monorepo-index.css'),
  );

  // Kopier storybook fra pakkene og inn i folder som skal deployes
  const origDir = process.cwd();
  const packages = glob
    .sync(path.join(origDir, 'packages', '**/package.json'), {
      ignore: '**/node_modules/**',
    })
    .map(path.dirname)
    .map((subPackage) => {
      shell.cd(subPackage);
      if (!fs.existsSync('package.json') || !fs.existsSync('.storybook-static-build')) {
        return null;
      }

      const packagesJson = JSON.parse(
        fs.readFileSync(path.resolve('package.json'), 'utf8'),
      );

      const packageDestFolder = path.join(__dirname, DEPLOY_FOLDER, packagesJson.name);
      shell.mkdir(packageDestFolder);
      shell.cp('-r', path.join(subPackage, '.storybook-static-build', '*'), packageDestFolder);

      return packagesJson;
    })
    .filter((subPackage) => subPackage);

  // Lag index-fil
  const index = generateHTML(packages);
  fs.writeFileSync(path.join(__dirname, DEPLOY_FOLDER, 'index.html'), index);

  console.log('Done copying files');
};

creatIndexHtml();
