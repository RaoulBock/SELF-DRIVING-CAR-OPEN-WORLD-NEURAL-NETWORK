class World {
  constructor(graph, roadWidth = 100, roadRoundness = 10) {
    this.graph = graph;
    this.roadWidth = roadWidth;
    this.roadRoundness = roadRoundness;

    this.envelopes = [];
    this.roadBoarders = [];
    this.generate();
  }
  generate() {
    this.envelopes.length = 0;
    for (const seg of this.graph.segments) {
      this.envelopes.push(
        new Envelope(seg, this.roadWidth, this.roadRoundness)
      );
    }

    this.roadBoarders = Polygon.union(this.envelopes.map((e) => e.poly));
  }

  draw(ctx) {
    for (const env of this.envelopes) {
      env.draw(ctx, { fill: "#bbb", stroke: "#bbb", lineWidth: 15 });
    }
    for (const seg of this.graph.segments) {
      seg.draw(ctx, { color: "white", width: 4, dash: [10, 10] });
    }
    for (const seg of this.roadBoarders) {
      seg.draw(ctx, { color: "white", width: 4 });
    }
  }
}
