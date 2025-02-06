"use client";
import { useState, useRef, useEffect } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaBaseInfo, ParaHeightInfo, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";
import { TangentValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function TangentDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Parabola properties
  const [Base, setBase] = useState("200");
  const [Height, setHeight] = useState("100");
  const [showBaseInfo, setShowBaseInfo] = useState(false); // state for tooltip visibility
  const [showHeightInfo, setShowHeightInfo] = useState(false); // state for tooltip visibility
  const [warningMessage, setWarningMessage] = useState([]);


  // Refs for tooltips
  const baseInfoRef = useRef(null);
  const heightInfoRef = useRef(null);

  const inputs = {
    "Base": Base,
    "Height": Height,
  };

  // Handle click outside the tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (baseInfoRef.current && !baseInfoRef.current.contains(event.target)) {
        setShowBaseInfo(false);
      }
      if (heightInfoRef.current && !heightInfoRef.current.contains(event.target)) {
        setShowHeightInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSubmit = () => {
    TangentValidation(
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-full top-5">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          {/* Input Form Section */}
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
                            onClick={() => setShowBaseInfo(!showBaseInfo)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {showBaseInfo && (
                          <div ref={baseInfoRef} className={onClickStyle}>
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
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Height:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowHeightInfo(!showHeightInfo)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {showHeightInfo && (
                          <div ref={heightInfoRef} className={onClickStyle}>
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
              </div>
            </section>
          </div>

          {/* Parabola Details Section */}
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
