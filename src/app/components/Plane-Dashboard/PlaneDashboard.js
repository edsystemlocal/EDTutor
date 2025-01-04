// "use client";
// import { useState } from "react";
// import Canvas from "../Canvas/canvas";
// import Navbar from "../Navbar/navbar";
// import PlaneDetails from "@/app/content/plane-details";

// export default function PlaneDashboard({ drawingType }) {
//   const [isCanvas, setIsCanvas] = useState(false); // Default value

//   const [PlaneType, setPlaneType] = useState("Pentagone"); // Default value
  
//   const [PlaneSideLength, setPlaneSideLength] = useState(25); // Default value
 
//   const [PlaneHPAngle, setPlaneHPAngle] = useState(30); // Default value
 
//   const [PlaneVPAngle, setPlaneVPAngle] = useState(60); // Default value
//   const [PlanePosition1, setPlanePosition1] = useState("side"); // Default value
 
//   const [PlanePosition2, setPlanePosition2] = useState("Parallel"); // Default value
//   const [PlanePosition3, setPlanePosition3] = useState("HP");
 
  

 
  

//   const inputs2 = {
//     PlaneType,
   
//     PlaneSideLength,
   
//     PlaneHPAngle,
//     PlaneVPAngle

//   };

//   const inputs = {
//     "Plane Type": PlaneType,
   
//     "Side Length": PlaneSideLength,
//     "Plane Position ":PlanePosition1,
//     "   ->            ":PlanePosition2,
//     "   ->          ":PlanePosition3,
   
//     "Incline With HP": PlaneHPAngle,
   
//     "Inclined With VP": PlaneVPAngle
    

//   };
//   if (isCanvas) {
//     return (
//       <div className="flex flex-col w-full">
//         <Canvas inputs={inputs} drawingType={drawingType} />
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-col w-full">
//       <main id="main-container" className="w-full p-1">
//         <div className="grid grid-cols-12 gap-1">
//           <div className="col-span-3 h-136">
//             <section
//               id="input-container"
//               className="border-2 border-slate-300 rounded p-1 w-full h-full"
//             >
//               <div className="w-full flex items-center justify-center pb-4">
//                 <div>
                
//                   <br />
//                   <label htmlFor="planeoption">Type of plane:{" "}
                   
//                      <select id="planeoption" name="plane type" onChange={(e) =>setPlaneType((e.target.value))} className="w-30 p-1 m-1 border">
                     
//                          <option value="Traingle">Traingle</option>
//                          <option value="Square">Square</option>
//                          <option value="Pentagone">Pentagone</option>
//                          <option value="Hexagone">Hexagone</option>
//                          <option value="Circle">Circle</option>
 
//                       </select>
                     
//                   </label>            
//                   <br />
//                   <label>
//                     Side Length:{"    "}
//                     <input
//                       type="number"
//                       value={PlaneSideLength}
//                       onChange={(e) =>
//                         setPlaneSideLength(Number(e.target.value))
//                       }
//                       className="w-14 p-1 m-1 border"
//                     />
//                   </label>
                  
//                   <br />
//                   <label htmlFor="plane Position">Plane Position:{" "}
                   
//                      <select id="plane Position1" name="plane Position1" onChange={(e) =>setPlanePosition1((e.target.value))} className="w-20 p-1 m-1 border">
                     
//                          <option value="Side">Side</option>
//                          <option value="Corner">Corner</option> 
//                       </select>
                     
//                   </label>            
//                   <label htmlFor="plane Position2">:{" "}
                   
//                      <select id="plane Position2" name="plane Position2" onChange={(e) =>setPlanePosition2((e.target.value))} className="w-20 p-1 m-1 border">
                     
//                          <option value="in">in</option>
//                          <option value="Parallel">Parallel</option> 
//                          <option value="Perpendicular">Perpendicular</option>
//                       </select>
                     
//                   </label>   
//                   <label htmlFor="plane Position3">:{" "}
                   
//                      <select id="plane Position3" name="plane Position3" onChange={(e) =>setPlanePosition3((e.target.value))} className="w-20 p-1 m-1 border">
                     
//                          <option value="HP">HP</option>
//                          <option value="VP">VP</option> 
//                       </select>
                     
//                   </label>   

                 
//                   <br />
//                   <label>
//                     Inclined With HP:{" "}
//                     <input
//                       type="number"
//                       value={PlaneHPAngle}
//                       onChange={(e) =>
//                         setPlaneHPAngle(Number(e.target.value))
//                       }
//                       className="w-14 p-1 m-1 border"
//                     />
//                   </label>
                  
//                   <br />
            
//                   <label>
//                     Inclined With VP:{" "}
//                     <input
//                       type="number"
//                       value={PlaneVPAngle}
//                       onChange={(e) =>
//                         setPlaneVPAngle(Number(e.target.value))
//                       }
//                       className="w-14 p-1 m-1 border"
//                     />
//                   </label>
                  
//                   <br />
//                   <button
//                     onClick={() => setIsCanvas(true)}
//                     style={{
//                       padding: "5px 25px",
//                       backgroundColor: "orange",
//                       color: "#FFF",
//                       border: "none",
//                       borderRadius: "5px",
//                       cursor: "pointer",
//                       fontSize: "16px",
//                     }}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="col-span-9">
//             <section
//               id="scale-details-container"
//               className="border-2 border-slate-300 rounded flex items-center w-full h-136"
//             >
//               <PlaneDetails />
//             </section>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


// ---------------------------------------

"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import PlaneDetails from "@/app/content/plane-details";

export default function PlaneDashboard({ drawingType }) {
  let [setDrawingType] = useState("Plane");
  const [isCanvas, setIsCanvas] = useState(false); // Default value

  const [PlaneType, setPlaneType] = useState("Pentagone"); // Default value
  
  const [PlaneSideLength, setPlaneSideLength] = useState(25); // Default value
 
  const [PlaneHPAngle, setPlaneHPAngle] = useState(30); // Default value
 
  const [PlaneVPAngle, setPlaneVPAngle] = useState(60); // Default value
  const [PlanePosition1, setPlanePosition1] = useState("side"); // Default value
 
  const [PlanePosition2, setPlanePosition2] = useState("Parallel"); // Default value
  const [PlanePosition3, setPlanePosition3] = useState("HP");

  const inputs = {
    "Plane Type": PlaneType,
    "Side Length": PlaneSideLength,
    "Plane Position":PlanePosition1,
    "Plane in/parallel Postion":PlanePosition2,
    "Plane HP/VP Postion":PlanePosition3,
    "Incline With HP": PlaneHPAngle,
    "Inclined With VP": PlaneVPAngle 
  };

  const inputStyle =
    "w-16 p-2 m-1 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

  if (isCanvas) {
    return (
      <div className="flex flex-col w-full">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5">
      <main id="main-container" className="w-full p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <div>
                <label className="block mb-3">
                  <span className="text-gray-700">Plane Type:</span>
                  <select
                    value={PlaneType}
                    onChange={(e) => setPlaneType(e.target.value)}
                    className={inputStyle}
                  >
                    <option value="Traingle">Triangle</option>
                    <option value="Square">Square</option>
                    <option value="Pentagone">Pentagon</option>
                    <option value="Hexagone">Hexagon</option>
                    <option value="Circle">Circle</option>
                  </select>
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Side Length:</span>
                  <input
                    type="number"
                    value={PlaneSideLength}
                    onChange={(e) => setPlaneSideLength(Number(e.target.value))}
                    className={inputStyle}
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Plane Position:</span>
                  <div className="flex items-center">
                    <select
                      value={PlanePosition1}
                      onChange={(e) => setPlanePosition1(e.target.value)}
                      className={`${inputStyle} w-auto`}
                    >
                      <option value="Side">Side</option>
                      <option value="Corner">Corner</option>
                    </select>
                    <select
                      value={PlanePosition2}
                      onChange={(e) => setPlanePosition2(e.target.value)}
                      className={`${inputStyle} w-auto`}
                    >
                      <option value="in">In</option>
                      <option value="Parallel">Parallel</option>
                      <option value="Perpendicular">Perpendicular</option>
                    </select>
                    <select
                      value={PlanePosition3}
                      onChange={(e) => setPlanePosition3(e.target.value)}
                      className={`${inputStyle} w-auto`}
                    >
                      <option value="HP">HP</option>
                      <option value="VP">VP</option>
                    </select>
                  </div>
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Inclined With HP:</span>
                  <input
                    type="number"
                    value={PlaneHPAngle}
                    onChange={(e) => setPlaneHPAngle(Number(e.target.value))}
                    className={inputStyle}
                  />
                </label>
                <label className="block mb-3">
                  <span className="text-gray-700">Inclined With VP:</span>
                  <input
                    type="number"
                    value={PlaneVPAngle}
                    onChange={(e) => setPlaneVPAngle(Number(e.target.value))}
                    className={inputStyle}
                  />
                </label>
                <button onClick={() => setIsCanvas(true)} className={buttonStyle}>
                  Submit
                </button>
              </div>
            </section>
          </div>

          <div className="col-span-9">
            <section
              id="plane-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen overflow-scroll"
            >
              <PlaneDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
