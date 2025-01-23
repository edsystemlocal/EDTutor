"use client";
import { useState, useRef, useEffect } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaBaseInfo, ParaHeightInfo } from "../informationIconHelper";
import { TangentValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function TangentDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Parabola properties
  const [Base, setBase] = useState();
  const [Height, setHeight] = useState();
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
          <div className="col-span-4 h-150">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen bg-gradient-to-r from-blue-50 to-blue-200 h-screen"
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
                            {ParaHeightInfo}
                          </div>
                        )}
                      </td>

                      <td className="p-2">
                        <input
                          type="text"
                          value={Height}
                          onChange={(e) => setHeight(Number(e.target.value))}
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
          <div className="col-span-8 h-150">
            <section
              id="parabola-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-200 h-screen shadow-lg bg-white h-full overflow-scroll"
            >
              <ParabolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
