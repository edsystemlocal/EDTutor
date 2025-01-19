"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import InvoluteDetails from "@/app/content/involute-details";
import { buttonStyle, DiameterInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle } from "../informationIconHelper";


export default function InvoluteDashboard({ drawingType }) {
 const [isCanvas, setIsCanvas] = useState(false);
 
   const [showInfo1, setShowInfo1] = useState(false);
 
 
   const showInfoRef1 = useRef(null);
 
   // Handle click outside the tooltip to close it
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (showInfoRef1.current && !showInfoRef1.current.contains(event.target)) {
         setShowInfo1(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);
 
 
   const [Diameter, setDiameter] = useState(200);
 
   const inputs = {
     "Diameter": Diameter
   };
 
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
               <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                 Drawing Type: {drawingType}
               </div>
               <div>
                 <table className="table-auto w-full">
                   <tbody>
                     <tr>
                       <td className="p-2">
                         <span className={labelStyle}>
                           Diameter:
                           <span
                             className={infoIconStyle}
                             title={HoverMsg}
                             onClick={() => setShowInfo1(!showInfo1)} // toggle tooltip on click
                           >
                             ⓘ
                           </span>
                         </span>
                         {showInfo1 && (
                           <div ref={showInfoRef1} className={onClickStyle}>
                             {DiameterInfo}
                           </div>
                         )}
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
              <InvoluteDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
