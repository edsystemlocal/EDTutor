"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ScaleOfChordsDetails from "@/app/content/scaleOfChords-details";
import { buttonStyle, ChordsAngleInfo, detailPageStyle, detailPageStyle1, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";
import { angleInScaleOfChordsValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function AngleInScaleOfChordsDashboard({ drawingType }) {
  const [Angle, setAngle] = useState("45");
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
          <div className={parameterPageStyle}>
            <section className={parameterPageStyle1}>
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
                          {ChordsAngleInfo.split("\n").map((line, index) => (
                            <p key={index} className="mb-2">
                              {line}
                            </p>
                          ))}
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
          <div className={detailPageStyle}>
            <section
              id="scale-of-chords-details-container"
              className={detailPageStyle1}
            >
              <ScaleOfChordsDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
