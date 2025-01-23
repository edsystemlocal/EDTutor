"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "../../content/line-details";
import { buttonStyle, FirstPointofHPLengthInfo, FirstPointofVPLengthInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, LineLengthInfo, onClickStyle, selectInputStyle } from "../informationIconHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";
import { ParalleltobothValidation, PerpendiculartoHpValidation } from "../Helper/validationHelper";

export default function PerpendiculartoHpDashboard({ drawingType }) {
 
   const [isCanvas, setIsCanvas] = useState(false);
   const [LineLength, setLineLength] = useState();
   const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState();
   const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState();
   const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
   const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
   const [warningMessage, setWarningMessage] = useState([]);
 
 
   const inputs = {
     "Line Length": LineLength,
     "First Point Above of HP": firstPointAboveHPLength,
     "First Point Front of VP": firstpointfrontOfVPLength,
     "First Point Position HP ": firstpointPositionHP,
     "First point Position VP": firstpointPositionVP,
   };
 
   const [showInfo1, setShowInfo1] = useState(false);
   const [showInfo2, setShowInfo2] = useState(false);
   const [showInfo3, setShowInfo3] = useState(false);
 
   const showInfoRef1 = useRef(null);
   const showInfoRef2 = useRef(null);
   const showInfoRef3 = useRef(null);
 
   // Handle click outside the tooltip to close it
   useEffect(() => {
     const handleClickOutside = (event) => {
       if (showInfoRef1.current && !showInfoRef1.current.contains(event.target)) {
         setShowInfo1(false);
       }
       if (showInfoRef2.current && !showInfoRef2.current.contains(event.target)) {
         setShowInfo2(false);
       }
       if (showInfoRef3.current && !showInfoRef3.current.contains(event.target)) {
         setShowInfo3(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);
 
   const handleSubmit = () => {
    PerpendiculartoHpValidation(
       inputs, // Pass the inputs object directly
       setWarningMessage,
       setIsCanvas
     );
   };
 
 
   if (isCanvas) {
     return (
       <div className="flex flex-col w-full">
         <Canvas inputs={inputs} drawingType={drawingType} themeSelect={themeSelect} />
       </div>
     );
   }
   return (
     <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-full top-5">
       <main id="main-container" className="w-full p-2">
         <div className="grid grid-cols-12 gap-2">
           <div className="col-span-4">
             <section
               className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
               <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                 Drawing Type: {getDisplayValueOfType(drawingType)}
               </div>
 
               <div>
                 <table className="w-full text-left text-gray-700">
                   <tbody>
                     <tr>
                       <td className="p-2">
                         <span className={labelStyle}>
                           Line Length:
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
                             {LineLengthInfo}
                           </div>
                         )}
                       </td>
                       <td className="p-2">
                         <input
                           type="text"
                           value={LineLength}
                           onChange={(e) => setLineLength(Number(e.target.value))}
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
                         <span className={labelStyle}>
                           First Point of HP Length:
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
                             {FirstPointofHPLengthInfo}
                           </div>
                         )}
                       </td>
                       <td>
                         <input
                           type="text"
                           value={firstPointAboveHPLength}
                           onChange={(e) => setFirstPointAboveHPLength(e.target.value)}
                           className={inputStyle}
                         />
                       </td>
                       <td>
                         <select
                           value={firstpointPositionHP}
                           onChange={(e) => setfirstpointPositionHP(e.target.value)}
                           className={selectInputStyle}
                         >
                           <option value="above">Above</option>
                           <option value="below">Below</option>
 
                         </select>
                       </td>
                     </tr>
                     <tr>
                       <td colSpan="3">
                         <hr />
                       </td>
                     </tr>
                     <tr>
                       <td className="p-2">
                         <span className={labelStyle}>
                           First Point of VP Length:
                           <span
                             className={infoIconStyle}
                             title={HoverMsg}
                             onClick={() => setShowInfo3(!showInfo3)} // toggle tooltip on click
                           >
                             ⓘ
                           </span>
                         </span>
                         {showInfo3 && (
                           <div ref={showInfoRef3} className={onClickStyle}>
                             {FirstPointofVPLengthInfo}
                           </div>
                         )}
                       </td>
                       <td>
                         <input
                           type="text"
                           value={firstpointfrontOfVPLength}
                           onChange={(e) => setFirstPointFrontOfVPLength(e.target.value)}
                           className={inputStyle}
                         />
                       </td>
                       <td>
                         <select
                           value={firstpointPositionVP}
                           onChange={(e) => setfirstpointPositionVP(e.target.value)}
                           className={selectInputStyle}
                         >
                           <option value="front">Front</option>
                           <option value="behind">Behind</option>
                         </select>
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
 
           <div className="col-span-8 ">
             <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200 overflow-scroll">
               <LineDetails drawingType={drawingType} />
             </section>
           </div>
 
         </div>
       </main>
     </div>
   );
 }
 