// eslint-disable-next-line import/prefer-default-export
const data = {};

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

console.log(JSON.stringify(data));
