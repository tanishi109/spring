import Vars from "./Vars";
import {throttle} from "lodash";

const intervalLog = throttle((args) => {
  console.log(args);
}, 500);

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
    this.friction = 0.8;

    this.vx = 0;
    this.vy = 0;
    this.gravity = 1;

    this.chainTo = chainTo;
    this.distance = 120;
  }

  render(ctx) {
    ctx.beginPath();

    this.chainTo.forEach((chain) => {
      const [ax, ay] = this.getAccel(chain);

      this.vx += ax;
      this.vx *= this.friction;
      this.x += this.vx;

      this.vy += this.gravity;
      this.vy += ay;
      this.vy *= this.friction;
      this.y += this.vy;

      const currentSet = new Set([this.id, chain.id]);

      if (!this.isCalculated(currentSet)) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(chain.x, chain.y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgba(155, 187, 89, 0.8)";
        ctx.stroke();
        ctx.closePath();
      }

      Vars.calcHistory.push(currentSet);
    });

    this.checkFloor(this);

    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgba(155, 187, 89, 0.8)";
    ctx.fill();
  }

  getTarget(chain) {
    const dx = chain.x - this.x;
    const dy = chain.y - this.y;
    const angle = Math.atan2(dy, dx);
    const targetX = chain.x - Math.cos(angle) * this.distance;
    const targetY = chain.y - Math.sin(angle) * this.distance;

    return [targetX, targetY];
  }

  getAccel(chain) {
    const [targetX, targetY] = this.getTarget(chain);
    const ax = (targetX - this.x) * this.spring;
    const ay = (targetY - this.y) * this.spring;

    return [ax, ay];
  }

  checkFloor(circle) {
    const bottom = circle.y + circle.r;
    if (bottom > Vars.height) {
      const dy = bottom - Vars.height;
      circle.y -= dy;
    }
  }

  toRadian(degree) {
    return degree * (Math.PI / 180);
  }

  toDegree(radian) {
    return radian * 180 / Math.PI;    
  }

  isCalculated(currentSet) {
    return Vars.calcHistory.some((set) => {
      return [...currentSet].filter(id => !set.has(id)).length === 0;
    });
  }
}
