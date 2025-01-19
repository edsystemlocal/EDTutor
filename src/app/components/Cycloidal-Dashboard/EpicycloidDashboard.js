"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";

import CycloidDetails from "@/app/content/cycloidal-details";
import { buttonStyle, DiameterInfo, DirectingCircleInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle } from "../informationIconHelper";

export default function EpicycloidDashboard({ drawingType }) {
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

  const [Diameter, setDiameter] = useState(100);
  const [DirectingCircle, setDirectingCircle] = useState(150);


  const inputs = {
    "Diameter": Diameter,
    "Directing Circle": DirectingCircle
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
              <div className="mb-6 text-center text-xl font-semibold text-blue-700 ">
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
                            {DirectingCircleInfo}
                          </div>
                        )}
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
