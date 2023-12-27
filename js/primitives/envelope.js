class Envelope {
  constructor(skeleton, width) {
    this.skeleton = skeleton;
    this.poly = this.#generatePolygon(width);
  }

  #generatePolygon(width) {
    const { p1, p2 } = this.skeleton;
    const radius = width / 2;
    const alpha = angle(subtract(p1, p2));
    const alpha_cw = alpha + Math.PI / 2;
    const alpha_ccw = alpha - Math.PI / 2;
    const p1_ccw = translate(p1, alpha_ccw, radius);
    const p2_ccw = translate(p2, alpha_ccw, radius);
    const p2_cw = translate(p2, alpha_cw, radius);
    const p1_cw = translate(p1, alpha_cw, radius);

    return new Polygon([p1_ccw, p2_ccw, p2_cw, p1_cw]);
  }
  draw(ctx) {
    this.poly.draw(ctx);
  }
}
