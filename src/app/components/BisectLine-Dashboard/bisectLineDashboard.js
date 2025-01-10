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
                    <div className="col-span-4">
                        <section
                            id="input-container"
                            className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen bg-gradient-to-r from-blue-50 to-blue-200  h-screen"
                        >
                            <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                                Drawing Type: {drawingType}
                            </div>

                            {/* Table for Input Alignment */}
                            <table className="w-full border-collapse border-spacing-2">
                                <tbody>
                                    <tr>
                                        <td className={labelStyle}>Length:</td>
                                        <td>
                                            <input
                                                type="text"
                                                value={Lenght}
                                                onChange={(e) =>
                                                    setLenght(Number(e.target.value))
                                                }
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
                                    onClick={() => setIsCanvas(true)}
                                    className={buttonStyle}
                                >
                                    Submit
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="col-span-8">
                        <section
                            id="bisect-line-details-container"
                            className="border-2 border-gray-300 rounded-lg p-4  bg-gradient-to-r from-blue-50 to-blue-200  h-screen shadow-lg bg-white h-screen overflow-scroll"
                        >
                            <BisectLineDetails />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
