// "use client";

// import { useState } from "react";
// import Canvas from "../Canvas/canvas";
// import BisectLineDetails from "@/app/content/bisectline-details";

// export default function BisectLineDashboard({ drawingType }) {
//     // State for variables
//     const [Lenght, setLenght] = useState(100); // Renamed to `Lenght`
//     const [isCanvas, setIsCanvas] = useState(false);

//     // Inputs for Canvas
//     const inputs = {
//         Lenght
//     };

//     // Conditional rendering for Canvas
//     if (isCanvas) {
//         return (
//             <div className="flex flex-col w-full">
//                 <Canvas inputs={inputs} drawingType={drawingType} />
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col w-full">
//             <main id="main-container" className="w-full p-1">
//                 <div className="grid grid-cols-12 gap-1">
//                     {/* Input Form Section */}
//                     <div className="col-span-3 h-136">
//                         <section
//                             id="input-container"
//                             className="border-2 border-slate-300 rounded p-1 w-full h-full"
//                         >


//                             <div className="border-2 border-slate-300 rounded p-4 mb-4 flex items-center justify-center font-bold ">                 Drawing Type : {drawingType}
//                             </div>

//                             <div className="w-full flex items-center justify-center pb-4">
//                                 <div>
//                                     {/* Input for Lenght */}
//                                     <label className="flex justify-between">
//                                         Lenght:{" "}
//                                         <input
//                                             type="number"
//                                             value={Lenght}
//                                             onChange={(e) =>
//                                                 setLenght(Number(e.target.value))
//                                             }
//                                             className="w-14 p-1 m-1 border"
//                                         />
//                                     </label>
//                                     <br />
//                                     {/* Submit Button */}
//                                     <button
//                                         onClick={() => setIsCanvas(true)}
//                                         style={{
//                                             padding: "5px 25px",
//                                             backgroundColor: "orange",
//                                             color: "#FFF",
//                                             border: "none",
//                                             borderRadius: "5px",
//                                             cursor: "pointer",
//                                             fontSize: "16px",
//                                         }}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>

//                     {/* Details Section */}
//                     <div className="col-span-9">
//                         <section
//                             id="parabola-details-container"
//                             className="border-2 border-slate-300 rounded flex items-center w-full h-136"
//                         >
//                             <BisectLineDetails />
//                         </section>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// --------------------------------------

"use client";

import { useState } from "react";
import Canvas from "../Canvas/canvas";
import BisectLineDetails from "@/app/content/bisectline-details";

export default function BisectLineDashboard({ drawingType }) {
    const [Lenght, setLenght] = useState(100); // Renamed to `Lenght`
    const [isCanvas, setIsCanvas] = useState(false);

    const inputs = {
     Lenght
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
                                <label className="flex justify-between mb-3">
                                    <span className="text-gray-700">Length:</span>
                                    <input
                                        type="number"
                                        value={Lenght}
                                        onChange={(e) =>
                                            setLenght(Number(e.target.value))
                                        }
                                        className={inputStyle}
                                    />
                                </label>
                                <button
                                    onClick={() => setIsCanvas(true)}
                                    className={buttonStyle}
                                >
                                    Submit
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="col-span-9">
                        <section
                            id="bisect-line-details-container"
                            className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen overflow-scroll"
                        >
                            <BisectLineDetails />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

