// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2023 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
//       if (question === "q1") {
//         setCurrentDrawing({
//           drawingType: "parallelToHP",
//           inputs: {
//             LineLength: 65,
//             firstPointAboveHPLength: 30,
//           },
//         });
//       } else if (question === "q2") {
//         setCurrentDrawing({
//           drawingType: "parallelToVP",
//           inputs: {
//             LineLength: 75,
//             firstpointfrontOfVPLength: 40,
//           },
//         });
//       } else if (question === "q3") {
//         setCurrentDrawing({
//           drawingType: "ellipseGeneralMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       } else if (question === "q4") {
//         setCurrentDrawing({
//           drawingType: "ellipseConcentricCircleMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       }
//     };
  
//     if (currentDrawing) {
//       return (
//         <Canvas
//           inputs={currentDrawing.inputs}
//           drawingType={currentDrawing.drawingType}
//         />
//       );
//     }
  
//     return (
//       <div className="container">
//         <h1 className="title">Paper June 2023</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             a) Fill in the blanks.
//             <br></br>

//             i) The number of mutually perpendicular planes that may surround an object in space is________.
//             <br></br>
//             ii) In the third angle projection, the object is imagined to be placed________.
//             <br></br>
//             iii) In half sectional view, _________ of the object is imagined to be removed. 
//             <br></br>
//             iv) In the orthographic projection, the projectors are ___________to the plane of projection.
//             <br></br>
//             v) Hatching lines are drawn at an angle of __________to the axis or to the main outline of the sections.
//             <br></br>
//             vi) Graphics can be converted into hard copy with a_______.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//             What are Scale? Classify its different types, also describe how RF is calculated.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//             A rectangular plot of land arca 0.45 hectare, is represented on a map by a similar rectangle of 5 sq. cm. 
//             Calculate the RF of the map, Also draw a scale to read up to single metre from the map, the scale should be long enough to measure up to 400 metres.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">An inelastic string is unwound to a length of 122 mm from a drum of $30 mm.
//                Draw the locus of free end of the string which is held taut during unwinding.</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">The projections a'b' and ab of a line AB are 65 mm and 50 mm long, respectively. The midpoint of the line is 38 mm in front of VP and 30 mm above HP. End A is 10 mm in front of the VP and nearer to it.
//                End B is nearer to the HP. Draw the projections of the line, find its true length.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A regular hexagonal lamina 40 mm side has a square hole of 25 mm side centrally cut through it.
//              Draw its projections when it is resting on one of its sides on HP with its surface inclined at 60° to VP and its corner nearest to VP is 24 mm from VP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             A triangular prism of side of base 30 mm and axis 55 mm long lies on one of its rectangular faces in HP with its axis parallel to VP. Draw its Projection.
//                </p>
//             <button onClick={() => handleClick("q4")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//             <p className="card-text">
//             A right regular square pyramid, edge of base 35 mm and height 50 mm, rest on its base on HP with its base edges equally inclined to VP.
//              A section plane perpendicular to VP and inclined to HP on 32°, cuts the pyramid bisecting its axis, Draw the projections and true shape of the section of truncated pyramid.
//                </p>
//             <button onClick={() => handleClick("q5")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//             Develop the lateral surface of an oblique cone, diameter of the base 40mm and height 40 mm having its axis inclined at 60° to its base..
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A right circular cone, diameter of base 50 mm and axis 62 mm long, rest on its base rim on HP with its axis parallel to VP and one of the elements perpendicular to HP. Draw the projections..
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A cube 30 mm edge is placed centrally on the top of a cylindrical block of 52 mm and 20 mm height. Draw the isometric drawing of the solid.
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             Explain the purpose of Zoom Command.
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             Write short note on: (any two) 
//             i) View ports 
//             ii) Layering concept 
//             iii) Type of projections
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_June_2023;
  
//************************************************************************





// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2022 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
//       if (question === "q1") {
//         setCurrentDrawing({
//           drawingType: "parallelToHP",
//           inputs: {
//             LineLength: 65,
//             firstPointAboveHPLength: 30,
//           },
//         });
//       } else if (question === "q2") {
//         setCurrentDrawing({
//           drawingType: "parallelToVP",
//           inputs: {
//             LineLength: 75,
//             firstpointfrontOfVPLength: 40,
//           },
//         });
//       } else if (question === "q3") {
//         setCurrentDrawing({
//           drawingType: "ellipseGeneralMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       } else if (question === "q4") {
//         setCurrentDrawing({
//           drawingType: "ellipseConcentricCircleMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       }
//     };
  
//     if (currentDrawing) {
//       return (
//         <Canvas
//           inputs={currentDrawing.inputs}
//           drawingType={currentDrawing.drawingType}
//         />
//       );
//     }
  
//     return (
//       <div className="container">
//         <h1 className="title">Paper June 2023</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             a) Construct a forward reading vernier scale to read distance correct to decimetre on a map in which the actual distances are reduced in the ratio of 1: 40000.
// 			The scale should be long enough to measure upto 6 km. Mark on the scale a length of 3.34 km and 0.59 km.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//            b) Construct a hypocycloid, rolling circle 50 mm diameter and directing circle 175 mm diameter. 
// 		   Draw a tangent to it at a point 50 mm from the centre of the directing circle.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//            2. a) A line AB of 70 mm long has its end A at 10 mm above H.P and 15 mm in front of V.P. Its front view and top view measure 50 mm and 60 mm respectively.
// 		   Draw the projections of the line and determine its inclinations with H.P. and V.P.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
// 			b) A line AB, 60 mm long has its end A 15 mm above HP and 10 mm in front of V.P. 
// 			It is inclined at 45° to the HP and 30° to V.P. Draw it's projections.</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">3. a) Draw the isometric projections of the frustum of a cone of 50mm base diameter, 25mm top diameter and 60mm height.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) Draw the isometric view of a hexagonal prism having side of base 25mm and axis 65mm long resting on its base on HP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             4. a) Explain the layering concept with examples. How is it implemented into CAD software?
//                </p>
//             <button onClick={() => handleClick("q4(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//             <p className="card-text">
//     b) Differentiate between the first angles and third angles projection.
//                </p>
//             <button onClick={() => handleClick("q4(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//             5. a) How do you specify a plotter for graphics applying?
//                </p>
//             <button onClick={() => handleClick("q5(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) What is CAD? Name two CAD Softwares. Give advantages and disadvantages of using CAD.
//                </p>
//             <button onClick={() => handleClick("q5(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             6. a) Explain the purpose of Zoom command.
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             b) Explain the method of drawing wireframe models of the following objects. 
// 			7 i) Cone ii) Pyramid iii) Prism
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            7. a) Prepare an ellipse using four different methods in AutoCAD.
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//            b) Explain about Building Information Modeling (BIM).
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           8. Write short notes of the following.
// 		  i) Types of scales ii) Editing commands in CAD iii) Orthographic projection
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_June_2022;

//**********************************************************************

// final code 

// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_November2022 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
//       if (question === "q1") {
//         setCurrentDrawing({
//           drawingType: "parallelToHP",
//           inputs: {
//             LineLength: 65,
//             firstPointAboveHPLength: 30,
//           },
//         });
//       } else if (question === "q2") {
//         setCurrentDrawing({
//           drawingType: "parallelToVP",
//           inputs: {
//             LineLength: 75,
//             firstpointfrontOfVPLength: 40,
//           },
//         });
//       } else if (question === "q3") {
//         setCurrentDrawing({
//           drawingType: "ellipseGeneralMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       } else if (question === "q4") {
//         setCurrentDrawing({
//           drawingType: "ellipseConcentricCircleMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       }
//     };
  
//     if (currentDrawing) {
//       return (
//         <Canvas
//           inputs={currentDrawing.inputs}
//           drawingType={currentDrawing.drawingType}
//         />
//       );
//     }
  
//     return (
//       <div className="container">
//         <h1 className="title">Paper June 2023</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             1. a) An area of 144 sq cm on a map represents an area of 36 sq km on the field. Find the RF of the scale of the map and draw a diagonal scale to show km, hectometres and decametres and to measure up to 10 km.
// 			indicate on the scale a distance 7 km, 5 hectometres and 6 decimeters.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//            b) Construct a conic when the distance of its focus from its directrix is equal to 50 mm and its eccentricity is 2/3.
// 		   Name the curve; mark its major axis and minor axis. Draw a tangent at any point, P on the curve.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//           2. a) The length of the front view of a line CD which is parallel to HP and inclined 30 deg to VP is 50 mm. 
// 		  The end C of the line is 15 mm in front of VP and 25 mm above HP. Draw the projections of the line and find its true length.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
// 			b) A line PS 65 mm has its end P, 15 mm above the HP and 15 mm in front of the VP. It is inclined at 55 deg * 1 to the HP and 35 deg to the VP.
// 			Draw its projections..</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">3. a) Draw the projections of a pentagonal prism of base 25 mm side and 50 mm long. The prism is resting on one of its rectangular faces in with its is inclined at 45 deg P. HP.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) Draw the isometric view of a hexagonal prism having side of base 25 mm and axis 65 mm long resting on its base on HP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             4. a) A right circular cone of axis height 80 mm is resting on one of its generators in HP. Draw its projections. The base is 40 mm dia.
//                </p>
//             <button onClick={() => handleClick("q4(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//             <p className="card-text">
//              b) Give some examples where the layering concept is useful to use.
//                </p>
//             <button onClick={() => handleClick("q4(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//             5. a) Name and explain five edit commands used in CAD. 7
//                </p>
//             <button onClick={() => handleClick("q5(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//           b) Explain the various advantages of CAD.
//                </p>
//             <button onClick={() => handleClick("q5(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//              6. a) What is the use of UCS icon? Explain in detail?
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             b) Write about Dialog boxes and windows in CAD software.
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            7. a) Explain the various commands used for transformation of an object.  i) Move ii) Copy iii) Rotate iv) Mirror
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           b) Explain the different methods used for drawing a circle in AutoCAD.
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           8. Write short notes of the following. 
// 		  i) Isometric projection ii) Epicycloid iii) Basic drawing command
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_November2022;

// ------------------------------------

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
              Click Here
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