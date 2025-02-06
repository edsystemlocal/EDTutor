"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import PointDetails from "@/app/content/point-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, ff, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, pageStyle, parameterPageStyle, parameterPageStyle1, PointFristInHPInfo, PointFristInVPInfo, selectInputStyle } from "../Helper/informationIconHelper";
import PointValidation from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function PointDashboard({ drawingType }) {
  // State for variables
  const [firstPointFrontOfVP, setFirstPointFrontOfVP] = useState("25");
  const [firstPointAboveHP, setFirstPointAboveHP] = useState("50");
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [isCanvas, setIsCanvas] = useState(false);
  const [firstPointFrontOfVPInfo, setfirstPointFrontOfVPInfo] = useState(false);
  const [firstPointAboveHPInfo, setfirstPointAboveHPInfo] = useState(false);
  const [warningMessage, setWarningMessage] = useState([]);

  const firstPointFrontOfVPInfoRef = useRef(null);
  const firstPointAboveHPInfoRef = useRef(null);

  // Inputs for Canvas with labels
  const inputs = {
    "First Point Of HP": firstPointAboveHP,
    "First Point Position HP": firstpointPositionHP,
    "First Point Of VP": firstPointFrontOfVP,
    "First Point Position VP": firstpointPositionVP,
  };

  // Handle click outside the tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (firstPointAboveHPInfoRef.current && !firstPointAboveHPInfoRef.current.contains(event.target)) {
        setfirstPointAboveHPInfo(false);
      }
      if (firstPointFrontOfVPInfoRef.current && !firstPointFrontOfVPInfoRef.current.contains(event.target)) {
        setfirstPointFrontOfVPInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    PointValidation(
      inputs, // Pass the inputs object directly
      setWarningMessage,
      setIsCanvas
    );
  };


  if (isCanvas) {
    return (
      <div className="flex flex-col w-full ">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5 ">
      <main id="main-container " className="w-full p-2  ">
        <div className="grid grid-cols-12 gap-2 ">
          {/* Input Form Section */}
          <div className={parameterPageStyle}>
            <section
              id="input-container"
              className={parameterPageStyle1}
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>

              {/* Table for Input Alignment */}
              <table className="w-full border-collapse border-spacing-2">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <span className={labelStyle}>
                        First Point Of HP:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setfirstPointAboveHPInfo(!firstPointAboveHPInfo)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {firstPointAboveHPInfo && (
                        <div ref={firstPointAboveHPInfoRef} className={onClickStyle}>
                          {PointFristInHPInfo.split("\n").map((line, index) => (
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
                        value={firstPointAboveHP}
                        onChange={(e) => setFirstPointAboveHP(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                    <td>
                      <select
                        value={firstpointPositionHP}
                        onChange={(e) => setfirstpointPositionHP(e.target.value)}
                        className={selectInputStyle}
                      >
                        <option value="Above">Above</option>
                        <option value="Below">Below</option>
                      </select>
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
                        First Point Of VP:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setfirstPointFrontOfVPInfo(!firstPointFrontOfVPInfo)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {firstPointFrontOfVPInfo && (
                        <div ref={firstPointFrontOfVPInfoRef} className={onClickStyle}>
                         {PointFristInVPInfo.split("\n").map((line, index) => (
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
                        value={firstPointFrontOfVP}
                        onChange={(e) => setFirstPointFrontOfVP(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                    <td>
                      <select
                        value={firstpointPositionVP}
                        onChange={(e) => setfirstpointPositionVP(e.target.value)}
                        className={selectInputStyle}
                      >
                        <option value="Front">Front</option>
                        <option value="Behind">Behind</option>
                      </select>
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

          <div className={detailPageStyle}>
            <section
              id="point-details-container"
              className={detailPageStyle1}
            >
              <PointDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
