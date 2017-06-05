import Vars from "./Vars";

export default class Circle {
  constructor(x, y, r, chainTo = []) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.spring = 0.1;
    this.friction = 0.85;

    this.vx = 50;
    this.vy = 0;
    this.gravity = 0;

    this.chainTo = chainTo;
  }

  render(ctx) {
    ctx.beginPath();

    this.chainTo.forEach((chain) => {
      // X
      const dx = chain.x - this.x;
      const ax = dx * this.spring;

      this.vx += ax;
      this.vx *= this.friction
      this.x += this.vx;

      // Y
      const dy = chain.y - this.y;
      const ay = dy * this.spring;

      this.y += this.gravity;
      this.vy += ay;
      this.vy *= this.friction
      this.y += this.vy;
    });

    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(155, 187, 89, 0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    // ctx.lineTo(this.getTargetX(), this.getTargetY());
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(155, 187, 89, 0.8)";
    ctx.stroke();
  }
}
