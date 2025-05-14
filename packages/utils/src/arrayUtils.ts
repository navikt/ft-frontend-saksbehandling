export const range = (length: number) => [...Array(length).keys()];

export const unique = <T>(array: T[]) => array.filter((it, index, self) => index === self.findIndex(t => t === it));
