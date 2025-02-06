
import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { June } from './ExamInputHelper';
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2023 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(null);
   const [visibleAnswers, setVisibleAnswers] = useState({});

   const toggleTooltip = (tooltipId) => {
         setActiveTooltip((prev) => (prev === tooltipId ? null : tooltipId));
       };
    
 
   // Function to toggle the answer visibility for theory questions
   const toggleAnswer = (question) => {
     setVisibleAnswers((prev) => ({
       ...prev,
       [question]: !prev[question],
     }));
   };
  
    const handleClick = (question) => {
    //   if (question === "q1") {
    //     setCurrentDrawing({
    //       drawingType: "parallelToHP",
    //       inputs: {
    //         LineLength: 65,
    //         firstPointAboveHPLength: 30,
    //       },
    //     });
     
    // };

  //   if (question === "q3(b)") {
  //     setCurrentDrawing({
  //         drawingType: "plane",
  //         inputs: {
  //             "Plane Type":"Hexagone",
  //             "Side Length":40,
  //             "Plane Position":"Corner",
  //             "Plane in/parallel Postion":"in",
  //             "Plane HP/VP Postion":"HP",
  //             "Incline With HP":45,
  //             "Inclined With VP":60
  //             //"Plane Type": "Hexagone", // Static value
  //             //"Side Length": 40, // Static value
  //            // "Plane Position": "Corner -> in -> HP", // Static value
  //            // "Incline With HP":45 , // Replace with the actual value
  //            // "Inclined With VP": 60, // Replace with the actual value
  //         },
  //     });
  // }
  }
  
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
        <h1 className="title">Paper June 2023</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          1. a) Fill in the blanks.
          <br />
          i) The number of mutually perpendicular planes that may surround an object in space is________.
          <br />
          ii) In the third angle projection, the object is imagined to be placed________.
          <br />
          iii) In half sectional view, _________ of the object is imagined to be removed.
          <br />
          iv) In the orthographic projection, the projectors are ___________to the plane of projection.
          <br />
          v) Hatching lines are drawn at an angle of __________to the axis or to the main outline of the sections.
          <br />
          vi) Graphics can be converted into hard copy with a_______.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q1(a)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q1(a)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q1(a)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <b>i)</b> Three
            <br />
            <b>ii)</b> Below and behind the projection planes.
            <br />
            <b>iii)</b> One-fourth
            <br />
            <b>iv)</b> Perpendicular
            <br />
            <b>v)</b> 45 degrees
            <br />
            <b>vi)</b> Plotter.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>



        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    {/* Question and Button */}
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top" }}>
        <p className="card-text">
          1. b) What are Scale? Classify its different types, also describe how RF is calculated.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px" }}>
        <button onClick={() => toggleAnswer("q1(b)")} className="button-blue">
          {visibleAnswers["q1(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {/* Answer Section */}
    {visibleAnswers["q1(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <strong>Scales:</strong> It is not always possible or convenient to draw drawings of an object to its actual size. 
            For instance:
          </p>
          <ol>
            <li>
              Drawings of very big objects like buildings or machines cannot be prepared in full size because they could be too big to fit on the drawing sheet.
            </li>
            <li>
              Drawings of very small objects like precision instruments (e.g., watches, electronic devices) cannot be prepared in full size because they would be too small to draw and read.
            </li>
            <li>
              To address this, a convenient scale is chosen to prepare drawings of both big and small objects in proportionately smaller or larger sizes.
            </li>
          </ol>
          <p>
            <strong>Types of Scales:</strong> Some commonly used types of scales in engineering practice are listed below:
          </p>
          <ol>
            <li>1)Plain scales</li>
            <li>2)Diagonal scales</li>
            <li>3)Comparative scales</li>
            <li>4)Vernier scales</li>
            <li>5)Scale of chords</li>
            <li>6)Isometric scales</li>
          </ol>
          <p>
            <strong>Representative Fraction (RF):</strong> RF is defined as the ratio of the linear dimensions of an element 
            in the drawing to the actual linear dimension of the same element in the object.
          </p>
          <p>
            <strong>Formula:</strong> 
            <br />
            RF = Length of an element in the drawing / Actual length of the same element
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>

        

<QuestionCard
        question="2. a) A rectangular plot of land arca 0.45 hectare, is represented on a map by a similar rectangle of 5 sq. cm. 
            Calculate the RF of the map, Also draw a scale to read up to single metre from the map, the scale should be long enough to measure up to 400 metres.."
        tooltipContent={June.JuneQ1}
        tooltipId="q2(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(a)')} />
  <QuestionCard
        question="b) An inelastic string is unwound to a length of 122 mm from a drum of $30 mm.
               Draw the locus of free end of the string which is held taut during unwinding"
        tooltipContent={June.JuneQ2}
        tooltipId="q2(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(b)')} />
   <QuestionCard
        question="3. a)The projections a'b' and ab of a line AB are 65 mm and 50 mm long, respectively. The midpoint of the line is 38 mm in front of VP and 30 mm above HP. End A is 10 mm in front of the VP and nearer to it.
               End B is nearer to the HP. Draw the projections of the line, find its true length."
        tooltipContent={June.JuneQ3}
        tooltipId="q3(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(a)')} />
  <QuestionCard
        question=" 3.b)  A regular hexagonal lamina 40 mm side has a square hole of 25 mm side centrally cut through it.
             Draw its projections when it is resting on one of its sides on HP with its surface inclined at 60° to VP and its corner nearest to VP is 24 mm from VP."
        tooltipContent={June.JuneQ4}
        tooltipId="q3(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(b)')} />
  <QuestionCard
        question="  4) A triangular prism of side of base 30 mm and axis 55 mm long lies on one of its rectangular faces in HP with its axis parallel to VP. Draw its Projection.."
        tooltipContent={June.JuneQ5}
        tooltipId="q4"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q4')} />
   <QuestionCard
        question="  5)  A right regular square pyramid, edge of base 35 mm and height 50 mm, rest on its base on HP with its base edges equally inclined to VP.
             A section plane perpendicular to VP and inclined to HP on 32°, cuts the pyramid bisecting its axis, Draw the projections and true shape of the section of truncated pyramid.."
        tooltipContent={June.JuneQ6}
        tooltipId="q5"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q5')} />
   <QuestionCard
        question=" 6. a) Develop the lateral surface of an oblique cone, diameter of the base 40mm and height 40 mm having its axis inclined at 60° to its base.."
        tooltipContent={June.JuneQ7}
        tooltipId="q6(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q6(a)')} />
  <QuestionCard
        question=" b) A right circular cone, diameter of base 50 mm and axis 62 mm long, rest on its base rim on HP with its axis parallel to VP and one of the elements perpendicular to HP. Draw the projections.."
        tooltipContent={June.JuneQ8}
        tooltipId="q6(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q6(b)')} />
     <QuestionCard
        question="7.a) A cube 30 mm edge is placed centrally on the top of a cylindrical block of 52 mm and 20 mm height. Draw the isometric drawing of the solid."
        tooltipContent={June.JuneQ9}
        tooltipId="q7(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q7(a)')} />
 
 <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top" }}>
        <p className="card-text">
          7. b) Explain the purpose of the Zoom Command.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px" }}>
        <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
          {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            The Zoom Command is a tool commonly used in applications such as CAD software (e.g., AutoCAD), graphic design tools, or other visualization software to enhance the user's ability to focus on specific areas of a drawing, model, or workspace. Here's a breakdown of its purpose:
          </p>
          <p>
            <strong>Purpose of the Zoom Command:</strong>
          </p>
          <ul>
            <li>
              <strong>Focus on Details:</strong> The command allows users to magnify specific sections of the workspace or drawing to closely inspect or modify details.
            </li>
            <li>
              <strong>Adjust View Scale:</strong> Users can zoom in to increase the scale (make elements appear larger) or zoom out to decrease the scale (see more of the overall workspace).
            </li>
            <li>
              <strong>Navigation:</strong> Helps users navigate large or complex drawings efficiently by quickly shifting focus to a particular area.
            </li>
            <li>
              <strong>Improve Precision:</strong> In design or drafting applications, zooming enables precise selection, alignment, and editing of elements.
            </li>
            <li>
              <strong>Customizable Viewing:</strong> Often allows users to set predefined zoom levels, zoom to fit the entire drawing, or zoom to specific extents (e.g., selected objects or the entire model).
            </li>
          </ul>
        </td>
      </tr>
    )}
  </tbody>
</table>


<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    {/* Question and Button */}
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top" }}>
        <p className="card-text">
          8) Write short note on: (any two)
          <br />
          i) Viewports
          <br />
          ii) Layering concept
          <br />
          iii) Types of projections
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px" }}>
        <button onClick={() => toggleAnswer("q8")} className="button-blue">
          {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {/* Answer Section */}
    {visibleAnswers["q8"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          {/* Viewports */}
          <p>
            <strong>1) Viewports:</strong>
          </p>
          <ol>
            <li>
              The Viewports command in AutoCAD is used to split the screen into
              multiple partitions (e.g., 2, 3, or 4 partitions). Each partition is called a viewport.
            </li>
            <li>
              1)Viewports allow viewing a drawing from different directions or angles.
            </li>
            <li>
              2)They are useful for displaying different parts of a drawing in various zoom levels, such as a close-up view and an overall plan view simultaneously.
            </li>
            <li>
              3)Viewports are especially helpful for 3D drawings, enabling designers to visualize and edit from multiple perspectives.
            </li>
            <li>
              Steps to create a viewport:
              <ol>
                <li>1)Open the Viewports dialog box from the Visualize tab.</li>
                <li>2)Select a configuration (e.g., "Three: Right").</li>
                <li>3)Modify the view in each viewport as needed.</li>
                <li>4)Save the viewport configuration for future use.</li>
              </ol>
            </li>
          </ol>
          {/* Layering Concept */}
          <p>
            <strong>2) Layering Concept:</strong>
          </p>
          <ol>
            <li>
              1)Layers in AutoCAD are transparent planes used to organize a drawing into separate components.
            </li>
            <li>
              2)Different layers can represent different parts of a drawing, such as outlines, dimensions, and hatching in mechanical designs or walls, furniture, and plumbing in architectural plans.
            </li>
            <li>
              3)Layers provide control over visibility, making it easier to focus on specific parts of a drawing.
            </li>
            <li>
              4)AutoCAD allows unlimited layers, and each layer's visibility, color, and linetype can be controlled globally.
            </li>
          </ol>
          {/* Types of Projections */}
          <p>
            <strong>3) Types of Projections:</strong>
          </p>
          <ol>
            <li>
              <strong>Orthographic Projections:</strong>
              <ul>
                <li>1)First Angle</li>
                <li>2)Second Angle</li>
                <li>3)Third Angle</li>
                <li>4)Fourth Angle</li>
              </ul>
            </li>
            <li>
              <strong>Pictorial Projections:</strong>
              <ol>
                <li>
                  Axonometric Projections:
                  <ul>
                    <li>1)Isometric</li>
                    <li>2)Dimetric</li>
                    <li>3)Trimetric</li>
                  </ul>
                </li>
                <li>
                  Oblique Projections:
                  <ul>
                    <li>1)Cabinet</li>
                    <li>2)Cavalier</li>
                    <li>3)Clinographic</li>
                  </ul>
                </li>
                <li>
                  Perspective Projections:
                  <ul>
                    <li>1)One-point</li>
                    <li>2)Two-point</li>
                    <li>3)Three-point</li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </td>
      </tr>
    )}
  </tbody>
</table>

</div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2023;

