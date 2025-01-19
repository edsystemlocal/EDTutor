"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import BisectLineDetails from "@/app/content/bisectline-details";
import { BisectLengthInfo, buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle} from "../informationIconHelper";

export default function BisectLineDashboard({ drawingType }) {
    const [Length, setLength] = useState(100); // Renamed to `Length`
    const [isCanvas, setIsCanvas] = useState(false);
    const [showInfo, setShowInfo] = useState(false); // state for tooltip visibility
    const InfoRef = useRef(null);



    const inputs = {
        Length
    };
    // Handle click outside the tooltip to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (InfoRef.current && !InfoRef.current.contains(event.target)) {
                setShowInfo(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


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
                                        <td className="p-2">
                                            <span className={labelStyle}>Length:
                                                <span 
                                                    className={infoIconStyle}
                                                    title={HoverMsg }
                                                    onClick={() => setShowInfo(!showInfo)} // toggle tooltip on click
                                                >
                                                    ⓘ
                                                </span>
                                            </span>
                                            {showInfo && (
                                                <div ref={InfoRef} className={onClickStyle}>
                                                    {BisectLengthInfo}
                                                </div>
                                            )}
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={Length}
                                                onChange={(e) =>
                                                    setLength(Number(e.target.value))
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