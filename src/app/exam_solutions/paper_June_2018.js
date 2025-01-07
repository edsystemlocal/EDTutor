import { useState } from "react";
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2018 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);

  const handleClick = (question) => {
    if (question === "q1") {
      setCurrentDrawing({
        drawingType: "parallelToHP",
        inputs: {
          LineLength: 65,
          firstPointAboveHPLength: 30,
        },
      });
    } else if (question === "q2") {
      setCurrentDrawing({
        drawingType: "parallelToVP",
        inputs: {
          LineLength: 75,
          firstpointfrontOfVPLength: 40,
        },
      });
    } else if (question === "q3") {
      setCurrentDrawing({
        drawingType: "ellipseGeneralMethod",
        inputs: {
          majorAxis: 500,
          minorAxis: 300,
          distanceofthefocusfromthedirectrix: 100,
        },
      });
    } else if (question === "q4") {
      setCurrentDrawing({
        drawingType: "ellipseConcentricCircleMethod",
        inputs: {
          majorAxis: 500,
          minorAxis: 300,
          distanceofthefocusfromthedirectrix: 100,
        },
      });
    }
  };

  if (currentDrawing) {
    return (
      <Canvas
        inputs={currentDrawing.inputs}
        drawingType={currentDrawing.drawingType}
      />
    );
  }

  return (
    <div className="container">
      <h1 className="title">Paper June 2018</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="card">
          <p className="card-text">
            Draw the projections of a 65 mm long straight line, in the following
            positions: Parallel to and 30 mm above the H.P. and in the V.P.
          </p>
          <button onClick={() => handleClick("q1")} className="button-blue">
            Click Here
          </button>
        </div>
        <div className="card">
          <p className="card-text">
            Draw the projections of a 75 mm long straight line, in the following
            positions: Parallel to and 40 mm above the H.P. and in the V.P.
          </p>
          <button onClick={() => handleClick("q2")} className="button-blue">
            Click Here
          </button>
        </div>
        <div className="card">
          <p className="card-text">Question: Ellipse General Method</p>
          <button onClick={() => handleClick("q3")} className="button-blue">
            Click Here
          </button>
        </div>
        <div className="card">
          <p className="card-text">Question: Ellipse Concentric Circle Method</p>
          <button onClick={() => handleClick("q4")} className="button-blue">
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paper_June_2018;
