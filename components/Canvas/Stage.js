import Vars from "./Vars";

export default class Stage {
  constructor(contents) {
    this.contents = contents;

    this.fit();
  }

  fit() {
    this.width = Vars.width;
    this.height = Vars.height;
    Vars.canvas.setAttribute("width", this.width);
    Vars.canvas.setAttribute("height", this.height);

    this.render();
  }

  render() {
    Vars.ctx.clearRect(0, 0, this.width, this.height);
    Vars.calcHistory = [];

    this.contents.forEach((cnt) => {
      cnt.render(Vars.ctx);
    });
    requestAnimationFrame(this.render.bind(this));
  }
}
