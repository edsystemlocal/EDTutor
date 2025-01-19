"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ElipseDetails from "@/app/content/elipse-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, majorAxisInfo, minorAxisInfo, onClickStyle } from "../informationIconHelper";

export default function EllipseConcentricCircleMethodDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

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


  // Ellipse properties
  const [majorAxis, setmajorAxis] = useState(500);
  const [minorAxis, setminorAxis] = useState(300);

  const inputs = {
    "Major Axis": majorAxis,
    "Minor Axis": minorAxis,
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
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white  bg-gradient-to-r from-blue-50 to-blue-200  h-screen"
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
                          Major Axis:
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
                            {majorAxisInfo}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={majorAxis}
                          onChange={(e) => setmajorAxis(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Minor Axis:
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
                            {minorAxisInfo}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={minorAxis}
                          onChange={(e) => setminorAxis(Number(e.target.value))}
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
              <ElipseDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}