class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(point) {
    return this.x == point.x && this.y === point.y;
  }

  draw(ctx, { size = 18, color = "black", outline = false } = {}) {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
    if (outline) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      (ctx.strokeStyle = "Yellow"),
        ctx.arc(this.x, this.y, rad, 0.6, Math.PI * 2);
      ctx.stroke();
    }
  }
}
