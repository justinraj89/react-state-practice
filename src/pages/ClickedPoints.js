import { useState } from "react";
//================================

function ClickedPoints() {
  // State
  const [points, setPoints] = useState([]);
  const [poppedPoints, setPoppedPoints] = useState([]);
  //==============================================
  // Functions
  function handleAddPoint(e) {
    let { clientY, clientX } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }
  //---------------------------------
  function handleUndo() {
    let newPoints = [...points];
    let poppedPoint = newPoints.pop();
    if (!poppedPoint) return;
    setPoppedPoints([...poppedPoints, poppedPoint]);
    setPoints(newPoints);
  }
  //----------------------------------
  function handleRedo() {
    let newPoppedPoints = [...poppedPoints];
    let poppedPoint = newPoppedPoints.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPoppedPoints(newPoppedPoints);
  }
  //-----------------------------------
  function handleReset() {
    setPoints([]);
    setPoppedPoints([]);
  }
  //==============================================
  return (
    <main className="flex flex-col h-[90vh] items-center mt-12 lg:mt-8 px-4 font-mono">
      <h1 className="pb-4 text-3xl font-extrabold">Total clicked Points: {points.length}</h1>
      <div className="flex gap-8 pb-4">
        <button
          onClick={handleUndo}
          className="border-2 border-red-800 bg-red-500 text-white px-4 rounded-lg"
        >
          undo
        </button>
        <button
          onClick={handleRedo}
          className="border-2 border-blue-800 bg-blue-500 text-white px-4 rounded-lg"
        >
          redo
        </button>
      </div>
      <div
        className="border-8 border-black w-full h-1/2 lg:h-[500px] lg:w-[500px] bg-zinc-900 rounded-2xl"
        onClick={handleAddPoint}
      >
        {points.map((point, i) => (
          <div
            className="absolute h-[20px] w-[20px] rounded-full bg-red-500 border-2 border-blue-800"
            style={{ top: point.y - 11 + "px", left: point.x - 10 + "px" }}
            key={i}
          ></div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <button
          className="border-2 border-green-800 bg-green-500 text-white px-4 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

export default ClickedPoints;
