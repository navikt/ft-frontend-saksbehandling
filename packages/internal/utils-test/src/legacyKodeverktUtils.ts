// TODO Fjern denne fila når k9 er over på kodeverk-string

export const konverterKodeverkTilKode = (data: any) => {
  if (data === undefined || data === null) {
    return;
  }

  const newData = JSON.parse(JSON.stringify(data)); // Create a deep copy of the input object
  const lengdeKodeverkObject = 2;

  Object.keys(newData).forEach(key => {
    if (newData[key]?.kode) {
      const antallAttr = Object.keys(newData[key]).length;
      if (
        (newData[key]?.kodeverk &&
          (antallAttr === lengdeKodeverkObject || newData[key]?.kodeverk === 'AVKLARINGSBEHOV_DEF')) ||
        antallAttr === 1
      ) {
        // Modify the new object instead of the input object
        newData[key] = newData[key].kode;
      }
    }
    if (typeof newData[key] === 'object' && newData[key] !== null) {
      newData[key] = konverterKodeverkTilKode(newData[key]);
    }
  });

  return newData;
};
