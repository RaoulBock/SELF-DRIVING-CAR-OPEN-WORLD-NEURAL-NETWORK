class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.ctx = this.canvas.getContext("2d");

    this.selected = null;
    this.hovered = null;

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (evt) => {
      const mouse = new Point(evt.offsetX, evt.offsetY);
      this.hovered = getNearestPoint(mouse, this.graph.points, 50);
      if (this.hovered) {
        this.selected = this.hovered;
        return;
      }
      this.graph.addPoint(mouse);
      this.selected = mouse;
    });
  }

  display() {
    this.graph.draw(this.ctx);
    if (this.selected) {
      this.selected.draw(this.ctx, { outline: true });
    }
  }
}
