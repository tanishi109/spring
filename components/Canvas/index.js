import React from "react";
import Vars from "./Vars";

export default class extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("stage");
    const ctx = canvas.getContext("2d");
    const width = document.getElementById("wrapper").clientWidth;
    const height = document.getElementById("wrapper").clientHeight;

    Vars.canvas = canvas;
    Vars.ctx = ctx;
    Vars.width = width;
    Vars.height = height;
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

