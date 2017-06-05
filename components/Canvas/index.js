import React from "react";

import Stage from "./Stage";
import Circle from "./Circle";
import Vars from "./Vars";

export default class extends React.Component {
  componentDidMount() {
    this.initVars();
    this.initHanlder();
  }

  initVars() {
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    const width = document.getElementById("wrapper").clientWidth;
    const height = document.getElementById("wrapper").clientHeight;

    Vars.canvas = canvas;
    Vars.ctx = ctx;
    Vars.width = width;
    Vars.height = height;

    const circle = new Circle(150, 150, 40);
    const circle2 = new Circle(150, 150, 40, circle);
    const circle3 = new Circle(150, 150, 40, circle2);
    const stage = new Stage([circle, circle2, circle3]);

    Vars.circle = circle;
    Vars.stage = stage;
  }

  initHanlder() {
    window.addEventListener("resize", () => {
      Vars.stage.fit();
    });

    window.addEventListener("mousemove", (e) => {
      Vars.circle.targetX = e.offsetX;
      Vars.circle.targetY = e.offsetY;
    });
  }

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <canvas id="stage" className="stage" />
        <style jsx>{`
          div {
            width: calc(100vw - 50px);
            height: 100vh;
            margin: 25px;
          }
          canvas {
            width: 100vw;
            height: 100vh;
          }
        `}</style>
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

