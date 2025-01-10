"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";

import CycloidDetails from "@/app/content/cycloidal-details";

export default function HypocycloidDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);
 
   const [Diameter, setDiameter] = useState(100);
   const [DirectingCircle, setDirectingCircle] = useState(150);
 
 
   const inputs = {
    "Diameter":Diameter,
    "Directing Circle":DirectingCircle
   };
 
   const inputStyle =
   "w-12 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold   bg-gradient-to-r from-green-100 to-blue-100";
 const selectInputStyle =
   "w-22 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold text-sm  bg-gradient-to-r from-green-100 to-blue-100";
 const labelStyle = "text-gray-700 font-bold px-10 ";
 const buttonStyle = "px-5 py-2 mt-10 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

   if (isCanvas) {
     return (
       <div className="flex flex-col w-full">
         <Canvas inputs={inputs} drawingType={drawingType} />
       </div>
     );
   }
 
   return (
     <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5">
       <main id="main-container" className="w-full p-2">
         <div className="grid grid-cols-12 gap-2">
           <div className="col-span-4 h-150">
             <section
               id="input-container"
               className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen  bg-gradient-to-r from-blue-50 to-blue-200  h-screen"
             >
               <div className="mb-6 text-center text-xl font-semibold text-blue-700 ">
                 Drawing Type: {drawingType}
               </div>
               <div>
                 <table className="table-auto w-full">
                   <tbody>
                     <tr>
                       <td className="p-2">
                         <span className={labelStyle}>Diameter:</span>
                       </td>
                       <td className="p-2">
                         <input
                           type="text"
                           value={Diameter}
                           onChange={(e) => setDiameter(Number(e.target.value))}
                           className={inputStyle}
                     />
                     </td>
                   </tr>
                   <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                   <tr>
                       <td className="p-2">
                         <span className={labelStyle}>Directing Circle:</span>
                       </td>
                       <td className="p-2">
                         <input
                           type="text"
                           value={DirectingCircle}
                           onChange={(e) => setDirectingCircle(Number(e.target.value))}
                           className={inputStyle}
                     />
                     </td>
                   </tr>
                   <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                 </tbody>
               </table>
                 <div className="text-center">
                   <button
                     onClick={() => {
                       console.log(inputs); // Log inputs for debugging
                       setIsCanvas(true);
                     }}
                     className={buttonStyle}
                   >
                     Submit
                   </button>
                 </div>
               </div>
             </section>
           </div>
 
           <div className="col-span-8 h-150">
             <section
               id="ellipse-details-container"
               className="border-2 border-gray-300 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-200  h-screen shadow-lg bg-white h-screen overflow-scroll"
             >
               <CycloidDetails drawingType={drawingType} />
             </section>
           </div>
         </div>
       </main>
     </div>
   );
 }
 