// TODO Fjern denne fila når k9 er over på kodeverk-strings

// eslint-disable-next-line import/prefer-default-export
const data = {};

// eslint-disable-next-line @typescript-eslint/no-shadow
const konverterKodeverkTilKode = data => {
  if (data === undefined || data === null) {
    return;
  }
  const lengdeKodeverkObject = 2;

  Object.keys(data).forEach(key => {
    if (data[key]?.kode) {
      const antallAttr = Object.keys(data[key]).length;
      if (
        (data[key]?.kodeverk &&
          (antallAttr === lengdeKodeverkObject || data[key]?.kodeverk === 'AVKLARINGSBEHOV_DEF')) ||
        antallAttr === 1
      ) {
        // eslint-disable-next-line no-param-reassign
        data[key] = data[key].kode;
      }
    }
    if (typeof data[key] === 'object' && data[key] !== null) {
      konverterKodeverkTilKode(data[key]);
    }
  });
};

konverterKodeverkTilKode(data);

// kopiere til clipboard
function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy');
  proc.stdin.write(data);
  proc.stdin.end();
}
// eslint-disable-next-line no-console
pbcopy(JSON.stringify(data));
