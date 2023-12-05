class GraphEditor {
  constructor(canvas, graph) {
    this.canvas = canvas;
    this.graph = graph;
    this.ctx = this.canvas.getContext("2d");

    this.#addEventListeners();
  }

  #addEventListeners() {
    this.canvas.addEventListener("mousedown", (evt) => {
      const mouse = new Point(evt.offsetX, evt.offsetY);
      this.graph.addPoint(mouse);
    });
  }

  display() {
    this.graph.draw(this.ctx);
  }
}
