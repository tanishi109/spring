class Vars {
  constructor() {
    this.stage;
    this.circle;
  }
}

// let stage;
// let circle;
//
// $(() => {
//   circle = new Circle(150, 150, 40);
//   const circle2 = new Circle(150, 150, 40, circle);
//   const circle3 = new Circle(150, 150, 40, circle2);
//   stage = new Stage([circle, circle2, circle3]);
// });
//
// $(window).on("resize", () => {
//   stage.init();
// });
//
// $(window).on("mousemove", (e) => {
//   circle.targetX = e.offsetX;
//   circle.targetY = e.offsetY;
// });

export default new Vars();
