

import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_November_2022 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  
    const handleClick = (question) => {
      
      if (question === "q1(b)") {
        setCurrentDrawing({
          drawingType: "ellipseGeneralMethod",
          inputs: {
            
            distanceofthefocusfromthedirectrix: 50,
          },
        });
    };
    
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
        <h1 className="title">Paper November 2022</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <div className="card">
            <p className="card-text">
            1. a) An area of 144 sq cm on a map represents an area of 36 sq km on the field. Find the RF of the scale of the map and draw a diagonal scale to show km, hectometres and decametres and to measure up to 10 km.
			indicate on the scale a distance 7 km, 5 hectometres and 6 decimeters.
          
               </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
           b) Construct a conic when the distance of its focus from its directrix is equal to 50 mm and its eccentricity is 2/3.
		   Name the curve; mark its major axis and minor axis. Draw a tangent at any point, P on the curve.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
          2. a) The length of the front view of a line CD which is parallel to HP and inclined 30 deg to VP is 50 mm. 
		  The end C of the line is 15 mm in front of VP and 25 mm above HP. Draw the projections of the line and find its true length.
            </p>
            <button onClick={() => handleClick("q2(a)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
			b) A line PS 65 mm has its end P, 15 mm above the HP and 15 mm in front of the VP. It is inclined at 55 deg * 1 to the HP and 35 deg to the VP.
			Draw its projections..</p>
            <button onClick={() => handleClick("q2(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              
          3. a) Draw the projections of a pentagonal prism of base 25 mm side and 50 mm long. The prism is resting on one of its rectangular faces in with its is inclined at 45 deg P. HP.</p>
            <button onClick={() => handleClick("q3(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) Draw the isometric view of a hexagonal prism having side of base 25 mm and axis 65 mm long resting on its base on HP.
               
               </p>
            <button onClick={() => handleClick("q3(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
            4. a) A right circular cone of axis height 80 mm is resting on one of its generators in HP. Draw its projections. The base is 40 mm dia.
               </p>
            <button onClick={() => handleClick("q4(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
            <p className="card-text">
             b) Give some examples where the layering concept is useful to use.
               </p>
            <button onClick={() => handleClick("q4(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        

          <div className="card">
            <p className="card-text">
            5. a) Name and explain five edit commands used in CAD. 7
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
             6. a) What is the use of UCS icon? Explain in detail?
               </p>
            <button onClick={() => handleClick("q6(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
            b) Write about Dialog boxes and windows in CAD software.
               </p>
            <button onClick={() => handleClick("q6(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           7. a) Explain the various commands used for transformation of an object.  i) Move ii) Copy iii) Rotate iv) Mirror
               </p>
            <button onClick={() => handleClick("q7(a)")} className="button-blue">
              Click Here
            </button>
          </div>
		  
		  
		   <div className="card">
            <p className="card-text">
          b) Explain the different methods used for drawing a circle in AutoCAD.
               </p>
            <button onClick={() => handleClick("q7(b)")} className="button-blue">
              Click Here
            </button>
          </div>
		  
		  
		   <div className="card">
            <p className="card-text">
          8. Write short notes of the following. 
		  i) Isometric projection ii) Epicycloid iii) Basic drawing command
               </p>
            <button onClick={() => handleClick("q8")} className="button-blue">
              Click Here
            </button>
          </div>




        
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_November_2022;