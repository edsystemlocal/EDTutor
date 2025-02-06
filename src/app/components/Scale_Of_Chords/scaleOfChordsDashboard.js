"use client";

import { useState } from "react";
import Canvas from "../Canvas/canvas";
import ScaleOfChordsDetails from "@/app/content/scaleOfChords-details";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";
import { detailPageStyle, detailPageStyle1, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";

export default function ScaleOfChordsDashboard({ drawingType }) {
    const [isCanvas, setIsCanvas] = useState(false);
    
    const inputs = {
        
    };

    const inputStyle =
    "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
 const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200 animate-wiggle";

    if (isCanvas) {
        return (
            <div className="flex flex-col w-full">
                <Canvas inputs={inputs} drawingType={drawingType} />
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-full top-5">
            <main id="main-container" className="w-full p-2">
                <div className="grid grid-cols-12 gap-2">
                    <div className={parameterPageStyle}>
                        <section
                            id="input-container"
                            className={parameterPageStyle1}
                        >
                            <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                                Drawing Type: {getDisplayValueOfType(drawingType)}
                            </div>
                            <div className="text-center mt-4 text-black">
                          Please click on Submit button to draw the 'Scale of Chords.'
                            </div>
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setIsCanvas(true)}
                                    className={buttonStyle}
                                >
                                    Submit
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className={detailPageStyle}>
                        <section
                            id="bisect-line-details-container"
                            className={detailPageStyle1}
                        >
                            < ScaleOfChordsDetails />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

