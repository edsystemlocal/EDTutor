"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaAngleInfo, ParaBaseInfo, ParaHeightInfo, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";
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
  const [Base, setBase] = useState("200");
  const [Height, setHeight] = useState("100");
  const [angleInDegrees, setAngleInDegrees] = useState("30");

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
          <div className={parameterPageStyle}>
            <section
              id="input-container"
              className={parameterPageStyle1}
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
                            {ParaBaseInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={Base}
                          onChange={(e) => setBase(e.target.value)}
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
                           {ParaHeightInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={Height}
                          onChange={(e) => setHeight(e.target.value)}
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
                           {ParaAngleInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="text"
                          value={angleInDegrees}
                          onChange={(e) => setAngleInDegrees(e.target.value)}
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

          <div className={detailPageStyle}>
            <section
              id="parabola-details-container"
              className={detailPageStyle1}
            >
              <ParabolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
