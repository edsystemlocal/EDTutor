// "use client";

// import { useState } from "react";
// import Canvas from "../Canvas/canvas";
// import ScaleOfChordsDetails from "@/app/content/scaleOfChords-details";

// export default function AngleInScaleOfChordsDashboard({ drawingType }) {
//     const [Angle, setAngle] = useState(50);
//     const [isCanvas, setIsCanvas] = useState(false);

//     const inputs = {
//         Angle
//     };
//     const inputStyle =
//         "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
//     const buttonStyle =
//         "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

//     if (isCanvas) {
//         return (
//             <div className="flex flex-col w-full ">
//                 <Canvas inputs={inputs} drawingType={drawingType} />
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-full top-5">
//             <main id="main-container" className="w-full p-1">
//                 <div className="grid grid-cols-12 gap-1">
//                     <div className="col-span-4 h-150">
//                         <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full">
//                             <div className="mb-6 text-center text-xl font-semibold text-blue-700">
//                                 Drawing Type: {drawingType}
//                             </div>
//                             <div>
//                                 <label className="block mb-3">
//                                     <span className="text-gray-700">Angle:</span>
//                                     <input
//                                         type="text"
//                                         value={Angle}
//                                         onChange={(e) => setAngle(e.target.value)}
//                                         className={inputStyle}
//                                     />
//                                 </label>
//                                 <button
//                                     onClick={() => setIsCanvas(true)}
//                                     className={buttonStyle}
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </section>
//                     </div>

//                     <div className="col-span-8 h-150 ">
//                         <section
//                             id="bisect-line-details-container"
//                             className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full overflow-scroll"
//                         >
//                             < ScaleOfChordsDetails />
//                         </section>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// ---------------

"use client";

import { useState } from "react";
import Canvas from "../Canvas/canvas";
import ScaleOfChordsDetails from "@/app/content/scaleOfChords-details";

export default function AngleInScaleOfChordsDashboard({ drawingType }) {
  const [Angle, setAngle] = useState(50);
  const [isCanvas, setIsCanvas] = useState(false);

  const inputs = { Angle };

  const inputStyle =
    "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  bg-gradient-to-r from-green-100 to-blue-100";
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          {/* Left Section for Input */}
          <div className="col-span-4 h-150">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <table className="w-full border-collapse text-gray-700">
                <tbody>
                  <tr>
                    <td className="">Angle:</td>
                    <td className="">
                      <input
                        type="text"
                        value={Angle}
                        onChange={(e) => setAngle(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-4">
                <button onClick={() => setIsCanvas(true)} className={buttonStyle}>
                  Submit
                </button>
              </div>
            </section>
          </div>

          {/* Right Section for Details */}
          <div className="col-span-8 h-150">
            <section
              id="scale-of-chords-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen overflow-scroll bg-gradient-to-r from-blue-50 to-blue-200"
            >
              <ScaleOfChordsDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
