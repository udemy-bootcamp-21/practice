import { useState, useEffect } from "react";
export default function Canvas({ canvas, setCanvas, canvasRef }) {
  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    const current = canvasRef.current;
    current.width = 600;
    current.height = 700;
    // canvas html 태그 내장 함수 사용 getContext
    const ctx = current.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    setCanvas(ctx);
  }, [canvas, setCanvas, canvasRef]);

  const drawCanvas = (e) => {
    // console.log(canvas);
    if (!isPainting) {
      // console.log(`x축:${e.nativeEvent.offsetX}`, `y축: ${e.nativeEvent.offsetY}`);
      canvas.beginPath();
      // 2d API의 메소드
      canvas.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    } else {
      canvas.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      canvas.stroke();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={() => setIsPainting(true)}
      onMouseUp={() => setIsPainting(false)}
      onMouseMove={drawCanvas}
      onMouseLeave={() => setIsPainting(false)}
    ></canvas>
  );
}
