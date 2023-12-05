class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.ctx = this.canvas.getContext("2d");

    this.selected = null;

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (evt) => {
      const mouse = new Point(evt.offsetX, evt.offsetY);
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
