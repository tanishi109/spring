import Canvas from "../components/Canvas"

export default () => (
  <div>
    <div>
      <a href="page1">page1</a>
    </div>

    <div>
      <a href="page2">page2</a>
    </div>

    <div>
      <a href="page3">page3</a>
    </div>

    <div>
      <a href="page4">page4</a>
    </div>

    <div>
      <a href="page5">page5</a>
    </div>

    <div>
      <a href="page6">page6</a>
    </div>

    <Canvas />

    <style jsx>{`
      div {
        margin: 8px;
      }
    `}</style>
  </div>
)
