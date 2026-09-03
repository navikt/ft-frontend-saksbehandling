// DOMMatrix kjem frå vitest-canvas-mock, ikkje frå jsdom (jsdom implementerer det
// ikkje i nokon versjon). Mocken sin DOMMatrix manglar rotateSelf.
//
// Frå jsdom 30 renderer echarts-grafane sine decal-mønster i testmiljøet, og då
// kallar zrender (createCanvasPattern i zrender/lib/canvas/graphic.js) rotateSelf
// på ein DOMMatrix. Under jsdom 29 blei den kodestien aldri nådd, så mangelen
// hadde ingen praktisk konsekvens.
//
// Sjekken mot undefined dekkjer testprosjekt utan jsdom/canvas-mock.
if (typeof DOMMatrix !== 'undefined' && typeof DOMMatrix.prototype.rotateSelf !== 'function') {
  DOMMatrix.prototype.rotateSelf = function rotateSelf(rotX, _rotY, rotZ) {
    const angleX = rotX ?? 0;
    const radians = ((rotZ ?? angleX) * Math.PI) / 180;
    const cosine = Math.cos(radians);
    const sine = Math.sin(radians);
    const { a, b, c, d } = this;

    this.a = a * cosine + c * sine;
    this.b = b * cosine + d * sine;
    this.c = c * cosine - a * sine;
    this.d = d * cosine - b * sine;

    return this;
  };
}
