"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ScaleOfChordsDetails from "@/app/content/scaleOfChords-details";
import { buttonStyle, ChordsAngleInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle } from "../informationIconHelper";
import { angleInScaleOfChordsValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function AngleInScaleOfChordsDashboard({ drawingType }) {
  const [Angle, setAngle] = useState();
  const [isCanvas, setIsCanvas] = useState(false);
  const [warningMessage, setWarningMessage] = useState([]);


  const [showInfo, setShowInfo] = useState(false); // state for tooltip visibility
  const InfoRef = useRef(null);

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

  const inputs = { Angle };

  const handleSubmit = () => {
    angleInScaleOfChordsValidation(
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          {/* Left Section for Input */}
          <div className="col-span-4 h-150">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>
              <table className="w-full border-collapse text-gray-700">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <span className={labelStyle}>Angle:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo(!showInfo)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo && (
                        <div ref={InfoRef} className={onClickStyle}>
                          {ChordsAngleInfo}
                        </div>
                      )}
                    </td>
                    <td className="">
                      <input
                        type="text"
                        value={Angle}
                        onChange={(e) => setAngle(e.target.value)}
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
                <div className="text-red-500 text-center">
                  {warningMessage.map((msg, index) => (
                    <div key={index}>{msg}</div>
                  ))}
                </div>
                <button onClick={handleSubmit} className={buttonStyle}>
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
