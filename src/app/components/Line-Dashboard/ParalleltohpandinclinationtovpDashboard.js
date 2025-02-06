"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";
import { ParalleltohpandinclinationtovpValidation, PerpendiculartoHpValidation } from "../Helper/validationHelper";
import { buttonStyle, detailPageStyle, detailPageStyle1, FirstPointofHPLengthInfo, FirstPointofVPLengthInfo, HoverMsg, InclinationtoVPInfo, infoIconStyle, inputStyle, labelStyle, LineLengthInfo, onClickStyle, parameterPageStyle, parameterPageStyle1, SecondPontofVPLengthInfo, selectInputStyle } from "../Helper/informationIconHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function ParalleltohpandinclinationtovpDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Line lengths and angles
  const [LineLength, setLineLength] = useState("75");
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState("25");
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState("25");
  const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState("");
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [secondpointPositionHP, setsecondpointPositionHP] = useState("Above");
  const [secondpointPositionVP, setSecondpointPositionVP] = useState("Front");
  const [warningMessage, setWarningMessage] = useState([]);






  const inputs = {
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "Second Point Front of VP": secondpointFrontOfVPLength,
    "Inclination To VP": InclinationToVP,
    "First Point Position HP ": firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
    "Second point Position HP": secondpointPositionHP,
    "Second point Position VP": secondpointPositionVP,


  };

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false);

  const showInfoRef1 = useRef(null);
  const showInfoRef2 = useRef(null);
  const showInfoRef3 = useRef(null);
  const showInfoRef4 = useRef(null);
  const showInfoRef5 = useRef(null);

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
      if (showInfoRef4.current && !showInfoRef4.current.contains(event.target)) {
        setShowInfo4(false);
      }
      if (showInfoRef5.current && !showInfoRef5.current.contains(event.target)) {
        setShowInfo5(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    ParalleltohpandinclinationtovpValidation(
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
            <section className={parameterPageStyle1}>
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>

              <div>
                <table className="w-full text-left text-gray-700">
                  <tbody>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Line Length:
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
                            {LineLengthInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">
                                {line}
                              </p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td >
                        <input
                          type="text"
                          value={LineLength}
                          onChange={(e) => setLineLength(e.target.value)}
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
                          First Point of HP Length:
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
                           {FirstPointofHPLengthInfo.split("\n").map((line, index) => (
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
                          value={firstPointAboveHPLength}
                          onChange={(e) => setFirstPointAboveHPLength(e.target.value)}
                          className={inputStyle}
                        />
                      </td>
                      <td>
                        <select
                          value={firstpointPositionHP}
                          onChange={(e) => setfirstpointPositionHP(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="above">Above</option>
                          <option value="below">Below</option>

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
                          First Point of VP Length:
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
                          {FirstPointofVPLengthInfo.split("\n").map((line, index) => (
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
                          value={firstpointfrontOfVPLength}
                          onChange={(e) => setFirstPointFrontOfVPLength(e.target.value)}
                          className={inputStyle}
                        />
                      </td>
                      <td>
                        <select
                          value={firstpointPositionVP}
                          onChange={(e) => setfirstpointPositionVP(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="front">Front</option>
                          <option value="behind">Behind</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>
                    {/* Add other rows similarly */}

                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Second Point of VP Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowInfo4(!showInfo4)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {showInfo4 && (
                          <div ref={showInfoRef4} className={onClickStyle}>
                            {SecondPontofVPLengthInfo.split("\n").map((line, index) => (
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
                          value={secondpointFrontOfVPLength}
                          onChange={(e) => setSecondPointFrontOfVPLength(e.target.value)}
                          className={inputStyle}
                        />
                      </td>
                      <td>
                        <select
                          value={secondpointPositionVP}
                          onChange={(e) => setSecondpointPositionVP(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="front">Front</option>
                          <option value="behind">Behind</option>
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
                          Inclination to VP:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowInfo5(!showInfo5)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {showInfo5 && (
                          <div ref={showInfoRef5} className={onClickStyle}>
                           {InclinationtoVPInfo.split("\n").map((line, index) => (
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
                          value={InclinationToVP}
                          onChange={(e) => setInclinationToVP(e.target.value)}
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

          <div className={detailPageStyle}>
            <section className={detailPageStyle1}>
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
