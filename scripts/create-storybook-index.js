const path = require('path');
const shell = require('shelljs');

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

module.exports = function creatHtml(allPackageJson, outputDir) {
  shell.cp(
    path.join(__dirname, 'storybook-monorepo-index.css'),
    path.join(outputDir, 'monorepo-index.css'),
  );
  return generateHTML(allPackageJson);
};
