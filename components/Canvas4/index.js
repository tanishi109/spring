import React from "react";
import Head from "next/head";

import Stage from "./Stage";
import Circle from "./Circle";
import Vars from "./Vars";

export default class extends React.Component {
  componentDidMount() {
    this.initVars();
    this.initHanlder();
    this.initDatGUI(Vars.stage);
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

    const c1 = new Circle(50, 50, 10);
    const c2 = new Circle(50, 100, 10);
    const c3 = new Circle(50, 150, 10);

    c1.chainTo = [c2, c3, Vars.cursor];
    c2.chainTo = [c1, c3];
    c3.chainTo = [c2, c1];

    const stage = new Stage([c1, c2, c3]);

    Vars.stage = stage;
  }

  initHanlder() {
    window.addEventListener("resize", () => {
      Vars.stage.fit();
    });

    window.addEventListener("mousemove", (e) => {
      Vars.cursor.x = e.offsetX;
      Vars.cursor.y = e.offsetY;
    });
  }

  initDatGUI(stage) {
    const gui = new dat.GUI();

    stage.contents.forEach((c) => {
      gui.add(c, "r", 1, 10);
    });
  }

  render() {
    return (
      <div id="wrapper" className="wrapper">
        {this.head()}
        <canvas id="stage" className="stage" />
        <style jsx>{`
          div {
            width: calc(100vw - 50px);
            height: 100vh;
            margin: 25px;
          }
          canvas {
            width: calc(100vw - 25px - 25px);
            height: calc(100vh - 25px - 25px);
            border: 1px solid #000;
            border-radius: 2px;
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

  head() {
    return (
      <Head>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js"></script>
      </Head>
    );
  }
}

