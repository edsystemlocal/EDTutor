"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";

import CycloidDetails from "@/app/content/cycloidal-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, DiameterInfo, DirectingCircleInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";
import { EpicycloidValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";


export default function HypocycloidDashboard({ drawingType }) {
 const [isCanvas, setIsCanvas] = useState(false);
 const [warningMessage, setWarningMessage] = useState([]);

 
   const [showInfo1, setShowInfo1] = useState(false);
   const [showInfo2, setShowInfo2] = useState(false);
 
   const showInfoRef1 = useRef(null);
   const showInfoRef2 = useRef(null);
 
   // Handle click outside the tooltip to close it
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (showInfoRef1.current && !showInfoRef1.current.contains(event.target)) {
         setShowInfo1(false);
       }
       if (showInfoRef2.current && !showInfoRef2.current.contains(event.target)) {
         setShowInfo2(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);
 
   const [Diameter, setDiameter] = useState("75");
   const [DirectingCircle, setDirectingCircle] = useState("25");
 
 
   const inputs = {
     "Diameter": Diameter,
     "Directing Circle": DirectingCircle
   };


   
       const handleSubmit = () => {
         EpicycloidValidation(
           inputs, // Pass the inputs object directly
           setWarningMessage,
           setIsCanvas
         );
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
           <div className={parameterPageStyle}>
             <section
               id="input-container"
               className={parameterPageStyle1}
             >
               <div className="mb-6 text-center text-xl font-semibold text-blue-700 ">
                 Drawing Type: {getDisplayValueOfType(drawingType)}
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
                             {DiameterInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                           </div>
                         )}
                       </td>
                       <td className="p-2">
                         <input
                           type="text"
                           value={Diameter}
                           onChange={(e) => setDiameter(e.target.value)}
                           className={inputStyle}
                         />
                       </td>
 
                     </tr>
                     <tr>
                     <td className="p-2">
                         <span className={labelStyle}>
                           Directing Circle:
                           <span
                             className={infoIconStyle}
                             title={HoverMsg}
                             onClick={() => setShowInfo2(!showInfo2)} // toggle tooltip on click
                           >
                             ⓘ
                           </span>
                         </span>
                         {showInfo2 && (
                           <div ref={showInfoRef2} className={onClickStyle}>
                             {DirectingCircleInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                           </div>
                         )}
                       </td>
                       <td className="p-2">
                         <input
                           type="text"
                           value={DirectingCircle}
                           onChange={(e) => setDirectingCircle(e.target.value)}
                           className={inputStyle}
                         />
                       </td>
                     </tr>
                   </tbody>
                 </table>
                 <div className="text-center">
                  <div className="text-red-500 text-center">
                    {warningMessage.map((msg, index) => (
                      <div key={index}>{msg}</div>
                    ))}
                  </div>
                  <button onClick={handleSubmit} className={buttonStyle}>
                    Submit
                  </button>
                </div>
               </div>
             </section>
           </div>
 
           <div className={detailPageStyle}>
             <section
               id="ellipse-details-container"
               className={detailPageStyle1}
             >
               <CycloidDetails drawingType={drawingType} />
             </section>
           </div>
         </div>
       </main>
     </div>
   );
 }
 