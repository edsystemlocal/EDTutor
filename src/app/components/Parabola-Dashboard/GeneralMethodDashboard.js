"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, ParaDistanceInfo } from "../informationIconHelper";
import { GeneralMethodValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function GeneralMethodDashboard({ drawingType }) {
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
  const [distanceofthefocusfromthedirectrix, setdistanceofthefocusfromthedirectrix] = useState();

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
                            {ParaDistanceInfo}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={distanceofthefocusfromthedirectrix}
                          onChange={(e) =>
                            setdistanceofthefocusfromthedirectrix(Number(e.target.value))
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
