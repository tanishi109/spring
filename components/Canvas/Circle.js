import Vars from "./Vars";

class Circle {
  constructor(x, y, r, chainTo) {
    this.x = x;
    this.y = y;
    this.r = r;

    this.spring = 0.1;
    this.friction = 0.85;

    this.vx = 50;
    this.targetX = 300;

    this.vy = 0;
    this.targetY = 300;
    this.gravity = 60;

    this.chainTo = chainTo;
  }

  render(ctx) {
    ctx.beginPath();

    const dx = this.getTargetX() - this.x;
    const ax = dx * this.spring;
    this.vx += ax;
    this.vx *= this.friction
    this.x += this.vx;

    const dy = this.getTargetY() - this.y;
    const ay = dy * this.spring;
    this.y += this.gravity;
    this.vy += ay;
    this.vy *= this.friction
    this.y += this.vy;

    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(155, 187, 89, 0.8)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.getTargetX(), this.getTargetY());
    ctx.lineWidth = 30;
    ctx.strokeStyle = "rgba(155, 187, 89, 0.8)";
    ctx.stroke();

  }

  getTargetX() {
    return this.chainTo ? this.chainTo.x : this.targetX;
  }

  getTargetY() {
    return this.chainTo ? this.chainTo.y : this.targetY;
  }
}
