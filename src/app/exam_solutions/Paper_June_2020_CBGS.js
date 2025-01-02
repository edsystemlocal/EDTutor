

import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2020_CBGS = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);

  const handleClick = (question) => {
    if (question === "q6(a)") {
      const inputs = {
        "Plane Type": "Pentagone", // Static value
        "Side Length": 26, // Static value
        "Plane Position": "Side -> Parallel -> VP", // Static value
        "Incline With HP":45 , // Replace with the actual value
        "Inclined With VP": 30, // Replace with the actual value
      };
  
      setCurrentDrawing({
        drawingType: "plane", // Static value
        inputs,
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
    <h1 className="title">Paper June 2020 CBGS</h1>
    <div className="max-w-4xl mx-auto space-y-6">

      <div className="card">
        <p className="card-text">
          1. Mark the answer as True/False:
          <br></br>
          i) Arc of circle method is used for drawing parabola.
          <br></br>
          ii) Scale of chords is used for measuring angles.
          <br></br>
          iii) If a right circular cylinder is cut by a plane parallel to the axis of the cylinder the section obtained is a ellipse.
          <br></br>
          iv) Four centre method is known to draw cycloid.
          <br></br>
          v) CAD is time consuming.
          vi) In case of orthographic projections, projectors are not perpendicular to the plane of projection.
          <br></br>
          vii) True length of line inclined to H.P. and parallel to V.P. appears in front view.

        </p>
        <button onClick={() => handleClick("q1")} className="button-blue">
          Click Here
        </button>
      </div>

      <div className="card">
        <p className="card-text">
          2. A cube 25 mm edge is placed centrally on the top of another square block of 40 mm edge and 15 mm thick.
          Draw the isometric drawing of two solids.
        </p>
        <button onClick={() => handleClick("q2")} className="button-blue">
          Click Here
        </button>
      </div>
      <div className="card">
        <p className="card-text">
          3. a) Define R.F. of scale.
        </p>
        <button onClick={() => handleClick("q3(a)")} className="button-blue">
          Click Here
        </button>
      </div>
      <div className="card">
        <p className="card-text">
          b) Construct a diagonal scale of R.F = 1/32 to read metres, decimeters and centimetres and long enough to read upto 4 metres.
          Show on this scale a distance of 2.46 m.
        </p>
        <button onClick={() => handleClick("q3(b)")} className="button-blue">
          Click Here
        </button>
      </div>
      <div className="card">
        <p className="card-text">
          4. One end of a line UV is in the first quadrant, 20mm above HP and 30mm infront of V.P. other end is 40mm behind VP and 50mm below other end is 40mm behind the projectors of the line is 60mm.
          Draw the projection of the line and find its true length.
        </p>
        <button onClick={() => handleClick("q4")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          5. a) Draw the isometric projection of a cone of base 40mm diameter and height 58mm. When it rests with its base on H.P.

        </p>
        <button onClick={() => handleClick("q5(a)")} className="button-blue">
          Click Here
        </button>
      </div>

      <div className="card">
        <p className="card-text">
          b) Explain the various advantages of CAD.
        </p>
        <button onClick={() => handleClick("q5(b)")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          6. a) Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
          its one side is parallel to the V.P. and inclined at 45° to H.P.
        </p>
        <button onClick={() => handleClick("q6(a)")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          b) A square prism, side of base 35mm and axis 50mm long lies with one of longer edges on HP such that its axis is perpendicular to V.P.
          Also one of its rectangular faces containing that longer edge is inclined at 30° to H.P. Draw its projection.
        </p>
        <button onClick={() => handleClick("q6(b)")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          7. a) A line AB, 50 mm long has end A 12 mm above HP and 10 mm infront of V.P.
          The end B is 30 mm above HP and 25 mm infront of V.P. Draw the projection of line.
        </p>
        <button onClick={() => handleClick("q7(a)")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          b) Differentiate between the first angle and third angle projection.
        </p>
        <button onClick={() => handleClick("q7(b)")} className="button-blue">
          Click Here
        </button>
      </div>


      <div className="card">
        <p className="card-text">
          8. Write short note on any two
          a) Types of scales b) Epicycloid c) Editing commands in CAD
        </p>
        <button onClick={() => handleClick("q8")} className="button-blue">
          Click Here
        </button>
      </div>






    </div>
  </div>
);
  };




export default Paper_June_2020_CBGS;