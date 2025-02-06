

import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { JuneCBGS } from './ExamInputHelper';
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_June_2020_CBGS = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});
   const [currentDrawing, setCurrentDrawing] = useState(null);
   const [activeTooltip, setActiveTooltip] = useState(null);

   const toggleTooltip = (tooltipId) => {
    setActiveTooltip((prev) => (prev === tooltipId ? null : tooltipId));
  };


  const toggleAnswer = (question) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const handleClick = (question) => {
    if (question === "q6(a)") {
      setCurrentDrawing({
        drawingType: "plane",
        inputs: {
          "Plane Type": "Pentagone", 
          "Side Length": 26, 
          "Plane Position": "Side -> Parallel -> VP", 
          "Incline With HP": 45, 
          "Inclined With VP": 30, 
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
      <h1 className="title">Paper June 2020 CBGS</h1>
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Question 1 */}
        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          1. Mark the answer as True/False:
          <br />
          i) Arc of circle method is used for drawing parabola.
          <br />
          ii) Scale of chords is used for measuring angles.
          <br />
          iii) If a right circular cylinder is cut by a plane parallel to the axis of the cylinder, the section obtained is an ellipse.
          <br />
          iv) Four centre method is known to draw cycloid.
          <br />
          v) CAD is time consuming.
          <br />
          vi) In case of orthographic projections, projectors are not perpendicular to the plane of projection.
          <br />
          vii) True length of line inclined to H.P. and parallel to V.P. appears in front view.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q1")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q1"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q1"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            i) False<br />
            ii) False<br />
            iii) True<br />
            iv) True<br />
            v) False<br />
            vi) False<br />
            vii) True
          </p>
        </td>
      </tr>
    )}
  </tbody>
     </table>


     
<QuestionCard
        question="2. A cube 25 mm edge is placed centrally on the top of another square block of 40 mm edge and 15 mm thick.
            Draw the isometric drawing of two solids."
        tooltipContent={JuneCBGS.JuneCBGSQ1}
        tooltipId="q2"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2')} />


        

        
        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          3. a) Define R.F. of scale.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q3(a)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q3(a)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q3(a)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            When an object is drawn with its actual dimensions, the scale used is called full-size scale. 
            But most of the time, it is not possible to draw an object to its actual size. We have to use either a reducing scale for large objects or an enlarging scale for smaller objects. 
            Drawings of small machine parts, mechanical instruments, watches, etc., are made larger than their real size. They are said to be drawn in an increasing or enlarging scale.
            <br />
            <b>Representative Fraction (R.F.)</b> of a scale is the ratio of the distance on the drawing to the corresponding actual distance on the object.
            <br />
            <b>R.F. = (Distance on Drawing) / (Actual Distance)</b>
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>

  
    
<QuestionCard
        question="b) Construct a diagonal scale of R.F = 1/32 to read metres, decimeters and centimetres and long enough to read upto 4 metres.
           Show on this scale a distance of 2.46 m."
        tooltipContent={JuneCBGS.JuneCBGSQ2}
        tooltipId="q3(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(b)')} />

<QuestionCard
        question=" 4. One end of a line UV is in the first quadrant, 20mm above HP and 30mm infront of V.P. other end is 40mm behind VP and 50mm below other end is 40mm behind the projectors of the line is 60mm.
           Draw the projection of the line and find its true length."
        tooltipContent={JuneCBGS.JuneCBGSQ3}
        tooltipId="q4"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q4')} />
<QuestionCard
        question="5 a) Draw the isometric projection of a cone of base 40mm diameter and height 58mm. When it rests with its base on H.P."
        tooltipContent={JuneCBGS.JuneCBGSQ4}
        tooltipId="q5(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q5(a)')} />

        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          5. b) Explain the various advantages of CAD.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q5(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q5(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q5(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            The advantages of CAD include:
            <br />
            1. Enhanced accuracy and precision in design.
            <br />
            2. Faster design iterations and changes.
            <br />
            3. Better visualization of the final product.
            <br />
            4. Easy sharing and collaboration on designs.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


<QuestionCard
        question="6. a) Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
            its one side is parallel to the V.P. and inclined at 45° to H.P.."
        tooltipContent={JuneCBGS.JuneCBGSQ5}
        tooltipId="q6(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q6(a)')} />
<QuestionCard
        question="b) A square prism, side of base 35mm and axis 50mm long lies with one of longer edges on HP such that its axis is perpendicular to V.P.
           Also one of its rectangular faces containing that longer edge is inclined at 30° to H.P. Draw its projection."
        tooltipContent={JuneCBGS.JuneCBGSQ6}
        tooltipId="q6(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q6(b)')} />
<QuestionCard
        question="7. a) A line AB, 50 mm long has end A 12 mm above HP and 10 mm infront of V.P.
           The end B is 30 mm above HP and 25 mm infront of V.P. Draw the projection of line."
        tooltipContent={JuneCBGS.JuneCBGSQ7}
        tooltipId="q7(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q7(a)')} />

   <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          7. b) Differentiate between the first angle and third angle projection.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q7(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <b>First Angle Projection</b>:
            <br />
            - The object is assumed to be situated in the first quadrant.
            <br />
            - The concept can be explained as follows:
            <br />
            1. The object lies between the observer and the planes of projection.
            <br />
            2. The object is situated on or above the horizontal plane (H.P).
            <br />
            3. The front view is drawn above the XY line, and the top view is below the XY line.
            <br />
            <br />
            <b>Third Angle Projection</b>:
            <br />
            - The object is assumed to be situated in the third quadrant.
            <br />
            - The concept can be explained as follows:
            <br />
            1. The planes of projection are between the object and the observer.
            <br />
            2. The object is situated on or above the ground.
            <br />
            3. The front view is drawn below the XY line, and the top view is above it.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          8. Write short note on any two
          <br />
          a) Types of scales
          <br />
          b) Epicycloid
          <br />
          c) Editing commands in CAD
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q8")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q8"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <b>i) Types of scales:</b> Some commonly used types of scales in engineering practice are:
            <br />
            - Plain scales
            <br />
            - Diagonal scales
            <br />
            - Comparative scales
            <br />
            - Vernier scales
            <br />
            - Scale of chords
            <br />
            - Isometric scales
            <br />
            <br />
            <b>ii) Epicycloid:</b> When a circle rolls without slipping around the outside of a fixed circle, the locus of a point on the circumference of the rolling circle is called the epicycloid. 
            <br />
            - The rolling circle is called the generating circle.
            <br />
            - The fixed circle is called the base circle or directing circle.
            <br />
            <br />
            <b>iii) Editing commands in CAD:</b> A drawing may be modified or edited either during its preparation or during the revision of the design. In AutoCAD, editing commands are of two types:
            <br />
            (1) Commands used to modify entities:
            <br />
            - ERASE, UNDO, REDO, SELECT, ROTATE, CHAMFER, etc.
            <br />
            (2) Commands used to make copies of drawings:
            <br />
            - COPY, MIRROR, OFFSET, ARRAY, etc.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>

   </div>
    </div>
  );
};

export default Paper_June_2020_CBGS;



