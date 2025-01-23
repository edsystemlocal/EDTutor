"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaAngleInfo, ParaBaseInfo, ParaHeightInfo } from "../informationIconHelper";
import { ParallelogramValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function ParallelogramDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [warningMessage, setWarningMessage] = useState([]);


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


  // Parallelogram properties
  const [Base, setBase] = useState();
  const [Height, setHeight] = useState();
  const [angleInDegrees, setAngleInDegrees] = useState();

  const inputs = {
    "Base": Base,
    "Height": Height,
    "Angle (Degrees)": angleInDegrees,
  };


    const handleSubmit = () => {
      ParallelogramValidation(
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 h-150">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen bg-gradient-to-r from-blue-50 to-blue-200  h-screen"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                 Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>
              <div>
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Base:
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
                            {ParaBaseInfo}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={Base}
                          onChange={(e) => setBase(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                    </tr>
                    <tr>
                        <td className="p-2">
                        <span className={labelStyle}>
                        Height:
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
                            {ParaHeightInfo}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={Base}
                          onChange={(e) => setHeight(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                    </tr>
                    <tr>
                    <td className="p-2">
                        <span className={labelStyle}>
                        Angle (Degrees):
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
                            {ParaAngleInfo}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={Base}
                          onChange={(e) => setAngleInDegrees(Number(e.target.value))}
                          className={inputStyle}
                        />
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

          <div className="col-span-8 h-150">
            <section
              id="parabola-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-200  h-screen shadow-lg bg-white h-screen overflow-scroll"
            >
              <ParabolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
