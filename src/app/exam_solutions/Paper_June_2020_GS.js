


import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2020_GS = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  
    const handleClick = (question) => {
      if (question === "q1(b)") {
        setCurrentDrawing({
          drawingType: "plainScale",
          inputs: {
            ScaleMaximumLength: 6,
            ScaleMaximumLengthUnit: "m",
            ScaleShowLength1:0,
            ScaleShowUnit1: "m",
            ScaleShowLength2:0,
            ScaleShowUnit2: "dcm",
          },
        });
      
      }

      else if (question === "q5") {
        setCurrentDrawing({
          drawingType: "ellipseConcentricCircleMethod",
          inputs: {
            majorAxis: 100,
            minorAxis: 75,
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
        <h1 className="title">Paper June 2020</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <div className="card">
            <p className="card-text">
           1. a) List different types of scales used in Engineering drawing and define R.F. of scale.
          
               </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
          b) Construct a plain scale to show metres and decimetres when 1m is represented by 2.5 cm and long enough to measure up to 6m.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
          2. Draw the projections of a hexagonal prism of base 25 mm side and axis 60 mm long which is resting on one of its corners of the base on H.P. 
		  The axis of the solid in inclined at 45° to H.P.
            </p>
            <button onClick={() => handleClick("q2")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
			3. A hexagonal pyramid with 30mm base sides and 70mm long axis is lying on a slant edge on the ground such that the axis is parallel to the V.P. Draw it's projections.
			</p>
            <button onClick={() => handleClick("q3")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
       4. Draw the isometric projection of a hexagonal prism, side of base 25 mm and height 60 mm, any suitable position.
              </p>
            <button onClick={() => handleClick("q4")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
         5. Draw an ellipse given the length of major axis and minor axis as 100 mm and 75mm.
               
               </p>
            <button onClick={() => handleClick("q5")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
          6. Construct a diagonal scale of 3:200 showing meters, decimeters and centimeters and to measure upto 6 meters.
		  <br></br>
		  
		  or
		  <br></br>
		  What is CAD? List out five advantages of CAD as compared to conventional drawing.
               </p>
            <button onClick={() => handleClick("q6")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
             <p className="card-text">
             7. List advantages of computer aided drafting.
			 <br></br>
			 or
			 <br></br>
			 List five editing commands and their functions used in CAD.
               </p>
            <button onClick={() => handleClick("q7")} className="button-blue">
              Click Here
            </button>
          </div>
        

          <div className="card">
            <p className="card-text">
           8. Write a short notes on the following:(any two)
		   a) Orthographic Projection b) Traces of a line c) Editing commands in CAD
               </p>
            <button onClick={() => handleClick("q8")} className="button-blue">
              Click Here
            </button>
          </div>


         
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2020_GS;