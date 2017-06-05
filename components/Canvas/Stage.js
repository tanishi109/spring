import Vars from "./Vars";

class Stage {
  constructor(contents) {
    Vars.ctx = getContext("2d");
    this.contents = contents;

    this.init();
  }

  init() {
    this.width = Vars.width;
    this.height = Vars.height;
    Vars.canvas.setAttribute("width", this.width);
    Vars.canvas.setAttribute("height", this.height);

    this.render();
  }

  render() {
    Vars.ctx.clearRect(0, 0, this.width, this.height);

    this.contents.forEach((cnt) => {
      cnt.render(Vars.ctx);
    });
    requestAnimationFrame(::this.render);
  }
}
