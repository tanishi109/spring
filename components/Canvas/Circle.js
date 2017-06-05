import Vars from "./Vars";

const getId = (() => {
  let id = 0;
  return () => {
    return id++;
  }
})();

export default class Circle {
  constructor(x, y, r, chainTo = []) {
    this.id = getId();
    this.x = x;
    this.y = y;
    this.r = r;

    this.spring = 0.1;
    this.friction = 0.85;

    this.vx = 50;
    this.vy = 0;
    this.gravity = 0;

    this.chainTo = chainTo;
    this.distance = 120;
  }

  render(ctx) {
    ctx.beginPath();

    this.chainTo.forEach((chain) => {
      const currentSet = new Set([this.id, chain.id]);
      if (this.isCalculated(currentSet)) {
        return;
      }

      const dx = chain.x - this.x;
      const dy = chain.y - this.y;
      const [ax, ay] = this.getTarget(chain, dx, dy);

      this.vx += ax;
      this.vx *= this.friction;
      this.x += this.vx;

      this.y += this.gravity;
      this.vy += ay;
      this.vy *= this.friction;
      this.y += this.vy;

      Vars.calcHistory.push(currentSet)
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

  getTarget(chain, dx, dy) {
    const angle = Math.atan2(dy, dx);
    const targetX = chain.x - Math.cos(angle) * this.distance;
    const targetY = chain.y - Math.sin(angle) * this.distance;
    const ax = (targetX - this.x) * this.spring;
    const ay = (targetY - this.y) * this.spring;

    return [ax, ay];
  }

  isCalculated(currentSet) {
    return Vars.calcHistory.some((set) => {
      return [...currentSet].filter(id => !set.has(id));
    });
  }
}
