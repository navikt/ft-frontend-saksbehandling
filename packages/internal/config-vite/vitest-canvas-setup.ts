// DOMMatrix finst berre i jsdom-miljø med vitest-canvas-mock lasta; hopp over
// polyfillen i andre testprosjekt (t.d. node-miljø) der den ikkje er definert.
if (typeof DOMMatrix !== 'undefined' && typeof DOMMatrix.prototype.rotateSelf !== 'function') {
  DOMMatrix.prototype.rotateSelf = function rotateSelf(rotX = 0, _rotY = 0, rotZ) {
    const radians = ((rotZ ?? rotX) * Math.PI) / 180;
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
