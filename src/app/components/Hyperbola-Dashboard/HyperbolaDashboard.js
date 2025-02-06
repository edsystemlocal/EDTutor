"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import HyperbolaDetails from "@/app/content/hyperbola-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaDistanceInfo, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";
import { GeneralMethodValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function HyperbolaDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);
  const [showInfo, setShowInfo] = useState(false); // state for tooltip visibility
  const [warningMessage, setWarningMessage] = useState([]);

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

  // Parabola properties
  const [distanceofthefocusfromthedirectrix, setdistanceofthefocusfromthedirectrix] = useState("100");

  const inputs = {
    "Distance From focus To Directrix": distanceofthefocusfromthedirectrix,
  };


  const handleSubmit = () => {
    GeneralMethodValidation(
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
                        <span className={labelStyle}>Distance from Focus to Directrix:
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
                            {ParaDistanceInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={distanceofthefocusfromthedirectrix}
                          onChange={(e) =>
                            setdistanceofthefocusfromthedirectrix(e.target.value)
                          }
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
              <HyperbolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

