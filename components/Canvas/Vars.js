class Vars {
  constructor() {
    this.canvas;
    this.ctx;
    this.width;
    this.height;
    this.circle;
    this.stage;
    this.cursor = {
      x: 0,
      y: 0,
      id: -1,
    };
    this.calcHistory = [];
  }
}

export default new Vars();
