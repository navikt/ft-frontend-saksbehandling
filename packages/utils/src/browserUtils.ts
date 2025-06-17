export const forhandsvisDokument = (data: Blob | MediaSource) => {
  if (URL.createObjectURL) {
    window.open(URL.createObjectURL(data));
  }
};
