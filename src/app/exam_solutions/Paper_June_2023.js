import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2023 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  
    // const handleClick = (question) => {
    //   if (question === "q1") {
    //     setCurrentDrawing({
    //       drawingType: "parallelToHP",
    //       inputs: {
    //         LineLength: 65,
    //         firstPointAboveHPLength: 30,
    //       },
    //     });
    //   } else if (question === "q2") {
    //     setCurrentDrawing({
    //       drawingType: "parallelToVP",
    //       inputs: {
    //         LineLength: 75,
    //         firstpointfrontOfVPLength: 40,
    //       },
    //     });
    //   } else if (question === "q3(b)") {
    //     setCurrentDrawing({
    //       drawingType: "ellipseGeneralMethod",
    //       inputs: {
    //         majorAxis: 500,
    //         minorAxis: 300,
    //         distanceofthefocusfromthedirectrix: 100,
    //       },
    //     });
    //   } else if (question === "q4") {
    //     setCurrentDrawing({
    //       drawingType: "ellipseConcentricCircleMethod",
    //       inputs: {
    //         majorAxis: 500,
    //         minorAxis: 300,
    //         distanceofthefocusfromthedirectrix: 100,
    //       },
    //     });
    //   }
    // };
  
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

        <div className="card">
            <p className="card-text">
           1. a) Fill in the blanks.
            <br></br>

            i) The number of mutually perpendicular planes that may surround an object in space is________.
            <br></br>
            ii) In the third angle projection, the object is imagined to be placed________.
            <br></br>
            iii) In half sectional view, _________ of the object is imagined to be removed. 
            <br></br>
            iv) In the orthographic projection, the projectors are ___________to the plane of projection.
            <br></br>
            v) Hatching lines are drawn at an angle of __________to the axis or to the main outline of the sections.
            <br></br>
            vi) Graphics can be converted into hard copy with a_______.
          
               </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
           b) What are Scale? Classify its different types, also describe how RF is calculated.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
           2. a) A rectangular plot of land arca 0.45 hectare, is represented on a map by a similar rectangle of 5 sq. cm. 
            Calculate the RF of the map, Also draw a scale to read up to single metre from the map, the scale should be long enough to measure up to 400 metres.
            </p>
            <button onClick={() => handleClick("q2(a)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              b) An inelastic string is unwound to a length of 122 mm from a drum of $30 mm.
               Draw the locus of free end of the string which is held taut during unwinding.</p>
            <button onClick={() => handleClick("q2(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              3. a)The projections a'b' and ab of a line AB are 65 mm and 50 mm long, respectively. The midpoint of the line is 38 mm in front of VP and 30 mm above HP. End A is 10 mm in front of the VP and nearer to it.
               End B is nearer to the HP. Draw the projections of the line, find its true length.</p>
            <button onClick={() => handleClick("q3(a)")} className="button-blue">
              *Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b)  A regular hexagonal lamina 40 mm side has a square hole of 25 mm side centrally cut through it.
             Draw its projections when it is resting on one of its sides on HP with its surface inclined at 60° to VP and its corner nearest to VP is 24 mm from VP.
               
               </p>
            <button onClick={() => handleClick("q3(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
           4) A triangular prism of side of base 30 mm and axis 55 mm long lies on one of its rectangular faces in HP with its axis parallel to VP. Draw its Projection.
               </p>
            <button onClick={() => handleClick("q4")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
            <p className="card-text">
          5)  A right regular square pyramid, edge of base 35 mm and height 50 mm, rest on its base on HP with its base edges equally inclined to VP.
             A section plane perpendicular to VP and inclined to HP on 32°, cuts the pyramid bisecting its axis, Draw the projections and true shape of the section of truncated pyramid.
               </p>
            <button onClick={() => handleClick("q5")} className="button-blue">
              Click Here
            </button>
          </div>
        

          <div className="card">
            <p className="card-text">
           6. a) Develop the lateral surface of an oblique cone, diameter of the base 40mm and height 40 mm having its axis inclined at 60° to its base..
               </p>
            <button onClick={() => handleClick("q6(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) A right circular cone, diameter of base 50 mm and axis 62 mm long, rest on its base rim on HP with its axis parallel to VP and one of the elements perpendicular to HP. Draw the projections..
               </p>
            <button onClick={() => handleClick("q6(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           7.a) A cube 30 mm edge is placed centrally on the top of a cylindrical block of 52 mm and 20 mm height. Draw the isometric drawing of the solid.
               </p>
            <button onClick={() => handleClick("q7(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
            b) Explain the purpose of Zoom Command.
               </p>
            <button onClick={() => handleClick("q7(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           8) Write short note on: (any two) 
            i) View ports 
            ii) Layering concept 
            iii) Type of projections
               </p>
            <button onClick={() => handleClick("q8")} className="button-blue">
              Click Here
            </button>
          </div>




        
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2023;