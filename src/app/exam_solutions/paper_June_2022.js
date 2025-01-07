 

import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2022 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  
    const handleClick = (question) => {
     
        if (question === "q2(a)") {
        setCurrentDrawing({
          drawingType: "inclinationToBoth",
          inputs: {
            LineLength:70,
            firstpointfrontOfVPLength:15,
            firstpointPositionHP: "above",
            firstPointAboveHPLength:10,
            firstpointPositionVP: "front",
            topViewLength:60,
            frontViewLength:50,           
          },
        });
      }
        else if (question === "q2(b)") {
          setCurrentDrawing({
            drawingType: "inclinationToBoth",
            inputs: {
              LineLength:60,
              firstPointAboveHPLength:15,
              firstpointPositionHP: "above",              
              firstpointfrontOfVPLength:10,
              firstpointPositionVP: "front",
              InclinationToVP:30,
              InclinationToHP:45,
            },
          });
      } 
      // else if (question === "q3") {
      //   setCurrentDrawing({
      //     drawingType: "ellipseGeneralMethod",
      //     inputs: {
      //       majorAxis: 500,
      //       minorAxis: 300,
      //       distanceofthefocusfromthedirectrix: 100,
      //     },
      //   });
      // } else if (question === "q4") {
      //   setCurrentDrawing({
      //     drawingType: "ellipseConcentricCircleMethod",
      //     inputs: {
      //       majorAxis: 500,
      //       minorAxis: 300,
      //       distanceofthefocusfromthedirectrix: 100,
      //     },
      //   });
      // }
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
        <h1 className="title">Paper June 2022</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <div className="card">
            <p className="card-text">
            1. a) Construct a forward reading vernier scale to read distance correct to decimetre on a map in which the actual distances are reduced in the ratio of 1: 40000.
			The scale should be long enough to measure upto 6 km. Mark on the scale a length of 3.34 km and 0.59 km.
          
               </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
           b) Construct a hypocycloid, rolling circle 50 mm diameter and directing circle 175 mm diameter. 
		   Draw a tangent to it at a point 50 mm from the centre of the directing circle.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
           2. a) A line AB of 70 mm long has its end A at 10 mm above H.P and 15 mm in front of V.P. Its front view and top view measure 50 mm and 60 mm respectively.
		   Draw the projections of the line and determine its inclinations with H.P. and V.P.
            </p>
            <button onClick={() => handleClick("q2(a)")} className="button-blue">
              Click Here*
            </button>
          </div>
          <div className="card">
            <p className="card-text">
			b) A line AB, 60 mm long has its end A 15 mm above HP and 10 mm in front of V.P. 
			It is inclined at 45° to the HP and 30° to V.P. Draw it's projections.</p>
            <button onClick={() => handleClick("q2(b)")} className="button-blue">
              Click Here*
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              
        3. a) Draw the isometric projections of the frustum of a cone of 50mm base diameter, 25mm top diameter and 60mm height.</p>
            <button onClick={() => handleClick("q3(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) Draw the isometric view of a hexagonal prism having side of base 25mm and axis 65mm long resting on its base on HP.
               
               </p>
            <button onClick={() => handleClick("q3(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
            4. a) Explain the layering concept with examples. How is it implemented into CAD software?
               </p>
            <button onClick={() => handleClick("q4(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
            <p className="card-text">
    b) Differentiate between the first angles and third angles projection.
               </p>
            <button onClick={() => handleClick("q4(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        

          <div className="card">
            <p className="card-text">
            5. a) How do you specify a plotter for graphics applying?
               </p>
            <button onClick={() => handleClick("q5(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) What is CAD? Name two CAD Softwares. Give advantages and disadvantages of using CAD.
               </p>
            <button onClick={() => handleClick("q5(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
            6. a) Explain the purpose of Zoom command.
               </p>
            <button onClick={() => handleClick("q6(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
            b) Explain the method of drawing wireframe models of the following objects. 
			7 i) Cone ii) Pyramid iii) Prism
               </p>
            <button onClick={() => handleClick("q6(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           7. a) Prepare an ellipse using four different methods in AutoCAD.
               </p>
            <button onClick={() => handleClick("q7(a)")} className="button-blue">
              Click Here
            </button>
          </div>
		  
		  
		   <div className="card">
            <p className="card-text">
           b) Explain about Building Information Modeling (BIM).
               </p>
            <button onClick={() => handleClick("q7(b)")} className="button-blue">
              Click Here
            </button>
          </div>
		  
		  
		   <div className="card">
            <p className="card-text">
          8. Write short notes of the following.
		  i) Types of scales ii) Editing commands in CAD iii) Orthographic projection
               </p>
            <button onClick={() => handleClick("q8")} className="button-blue">
              Click Here
            </button>
          </div>




        
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2022;