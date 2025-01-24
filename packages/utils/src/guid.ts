const s4 = (): string =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString()
    .substring(1);

export const guid = (): string => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
