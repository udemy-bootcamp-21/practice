import { useState, useRef, useEffect } from "react";
import Canvas from "./components/Canvas";

function App() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  return (
    <div className="App">
      <Canvas canvasRef={canvasRef} setCanvas={setCanvas} canvas={canvas} />
    </div>
  );
}

export default App;
