// import { useState } from "react";
// import Canvas from "../components/canvas";

// const Paper_June_2018 = () => {

//   const [isCanvas, setIsCanvas] = useState(false);

//   // Line lengths and angles
//   const [LineLength, setLineLength] = useState(75);
//   const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(25);
//   const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(30);
//   const [secondpointAboveHPLength, setSecondPointAboveHPLength] = useState(25);
//   const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState(40);
//   const [InclinationToVP, setInclinationToVP] = useState("");
//   const [InclinationToHP, setInclinationToHP] = useState("");

//   const inputs = {
//     LineLength,
//     firstPointAboveHPLength,
//   };

//   const handleClick = () => {

//     if (Q1) {
//       Length
//       firstpointfrontOfVPLength
//     }

//   };
//   let drawingType = "parallelToHP";

//   if (isCanvas) {
//     return (
//       <div className="flex flex-col w-full">
//         <Canvas inputs={inputs} drawingType={drawingType} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div>
//         <p>
//           Draw the projections of a 75 mm long straight line, in the following
//           positions: Parallel to and 30 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => setIsCanvas(true)}>Click Here</button>
//       </div>
//       <div>
//         <p>
//           Draw the projections of a 65 mm long straight line, in the following
//           positions: Parallel to and 40 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => setIsCanvas(true)}>Click Here</button>
//       </div>

//     </>
//   );
// };

// export default Paper_June_2018;


// -------------------------------------




// import { useState } from "react";
// import Canvas from "../components/canvas";

// const Paper_June_2018 = () => {

//   const [isCanvas, setIsCanvas] = useState(false);

//   // Line lengths and angles
//   const [LineLength, setLineLength] = useState(75);
//   const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(25);
//   const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(30);
//   const [secondpointAboveHPLength, setSecondPointAboveHPLength] = useState(25);
//   const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState(40);
//   const [InclinationToVP, setInclinationToVP] = useState("");
//   const [InclinationToHP, setInclinationToHP] = useState("");


//  let inputs="";
//  let drawingType="";
//   const handleClick = (q1) => {
//     drawingType = "parallelToHP";
//     if (q1) {
//        inputs = {
//         LineLength,
//         firstPointAboveHPLength,
//       };
//     }

//   };


//   <Canvas inputs={inputs} drawingType={drawingType} />




//   return (
//     <>
//       <div>
//         <p>
//           Draw the projections of a 75 mm long straight line, in the following
//           positions: Parallel to and 30 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => handleClick(q1)}>Click Here</button>
//       </div>
//       {/* <div>
//         <p>
//           Draw the projections of a 65 mm long straight line, in the following
//           positions: Parallel to and 40 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => setIsCanvas(true)}>Click Here</button>
//       </div> */}

//     </>
//   );
// };

// export default Paper_June_2018;


// -----------------------------------------
// final code 
// import { useState } from "react";
// import Canvas from "../components/Canvas/canvas";

// const Paper_June_2018 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);

//   // Function to handle button clicks
//   const handleClick = (question) => {
//     if (question === "q1") {
//       setCurrentDrawing({
//         drawingType: "parallelToHP",
//         inputs: {
//           LineLength: 65,
//           firstPointAboveHPLength: 30,
//         },
//       });

//     }
//     else if (question === "q2") {
//       setCurrentDrawing({
//         drawingType: "parallelToVP",
//         inputs: {
//           LineLength: 75,
//           firstpointfrontOfVPLength: 40,
//         },
//       });
//     }
//     else if (question === "q3") {
//       setCurrentDrawing({
//         drawingType: "ellipseGeneralMethod",
//         inputs: {
//           majorAxis: 500,
//           minorAxis: 300,
//           distanceofthefocusfromthedirectrix: 100

//         },
//       });
//     }
//     else if (question === "q4") {
//       setCurrentDrawing({
//         drawingType: "ellipseConcentricCircleMethod",
//         inputs: {
//           majorAxis: 500,
//           minorAxis: 300,
//           distanceofthefocusfromthedirectrix: 100

//         },
//       });
//     }
//   };

//   // Render Canvas if currentDrawing is set
//   if (currentDrawing) {
//     return (
//       <Canvas
//         inputs={currentDrawing.inputs}
//         drawingType={currentDrawing.drawingType}
//       />
//     );
//   }

//   // Render questions and buttons
//   return (
//     <>
//       <div>
//         <p>
//           Draw the projections of a 65 mm long straight line, in the following
//           positions: Parallel to and 30 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => handleClick("q1")}>Click Here</button>
//       </div>
//       <div>
//         <p>
//           Draw the projections of a 75 mm long straight line, in the following
//           positions: Parallel to and 40 mm above the H.P. and in the V.P.
//         </p>
//         <button onClick={() => handleClick("q2")}>Click Here</button>
//       </div>
//       <div>
//         <p>
//           Question:  ellipseGeneralMethod
//         </p>
//         <button onClick={() => handleClick("q3")}>Click Here</button>
//       </div>
//       <div>
//         <p>
//           Question:  ellipseGeneralMethod
//         </p>
//         <button onClick={() => handleClick("q4")}>Click Here</button>
//       </div>
//     </>
//   );
// };

// export default Paper_June_2018;

// ----------------------
// final code 
// import { useState } from "react";
// import Canvas from "../components/Canvas/canvas";

// const Paper_June_2018 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);

//   // Function to handle button clicks
//   const handleClick = (question) => {
//     if (question === "q1") {
//       setCurrentDrawing({
//         drawingType: "parallelToHP",
//         inputs: {
//           LineLength: 65,
//           firstPointAboveHPLength: 30,
//         },
//       });
//     } else if (question === "q2") {
//       setCurrentDrawing({
//         drawingType: "parallelToVP",
//         inputs: {
//           LineLength: 75,
//           firstpointfrontOfVPLength: 40,
//         },
//       });
//     } else if (question === "q3") {
//       setCurrentDrawing({
//         drawingType: "ellipseGeneralMethod",
//         inputs: {
//           majorAxis: 500,
//           minorAxis: 300,
//           distanceofthefocusfromthedirectrix: 100,
//         },
//       });
//     } else if (question === "q4") {
//       setCurrentDrawing({
//         drawingType: "ellipseConcentricCircleMethod",
//         inputs: {
//           majorAxis: 500,
//           minorAxis: 300,
//           distanceofthefocusfromthedirectrix: 100,
//         },
//       });
//     }
//   };

//   // Render Canvas if currentDrawing is set
//   if (currentDrawing) {
//     return (
//       <Canvas
//         inputs={currentDrawing.inputs}
//         drawingType={currentDrawing.drawingType}
//       />
//     );
//   }

//   // Render questions and buttons
//   return (
//     <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen py-8">
//       <h1 className="text-center text-3xl font-bold text-blue-700 mb-8">
//         Paper June 2018
//       </h1>
//       <div className="max-w-4xl mx-auto space-y-6">
//         <div className="bg-white p-6 shadow-lg rounded-lg border border-blue-300">
//           <p className="text-lg font-semibold text-gray-700 mb-4">
//             Draw the projections of a 65 mm long straight line, in the following
//             positions: Parallel to and 30 mm above the H.P. and in the V.P.
//           </p>
//           <button
//             onClick={() => handleClick("q1")}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Click Here
//           </button>
//         </div>
//         <div className="bg-white p-6 shadow-lg rounded-lg border border-blue-300">
//           <p className="text-lg font-semibold text-gray-700 mb-4">
//             Draw the projections of a 75 mm long straight line, in the following
//             positions: Parallel to and 40 mm above the H.P. and in the V.P.
//           </p>
//           <button
//             onClick={() => handleClick("q2")}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Click Here
//           </button>
//         </div>
//         <div className="bg-white p-6 shadow-lg rounded-lg border border-blue-300">
//           <p className="text-lg font-semibold text-gray-700 mb-4">
//             Question: Ellipse General Method
//           </p>
//           <button
//             onClick={() => handleClick("q3")}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Click Here
//           </button>
//         </div>
//         <div className="bg-white p-6 shadow-lg rounded-lg border border-blue-300">
//           <p className="text-lg font-semibold text-gray-700 mb-4">
//             Question: Ellipse Concentric Circle Method
//           </p>
//           <button
//             onClick={() => handleClick("q4")}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Click Here
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Paper_June_2018;

// --------------------------
// final code 888
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
