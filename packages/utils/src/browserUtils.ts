export const forhandsvisDokument = (data: Blob | MediaSource) => {
  if (URL.createObjectURL) {
    globalThis.open(URL.createObjectURL(data));
  }
};
