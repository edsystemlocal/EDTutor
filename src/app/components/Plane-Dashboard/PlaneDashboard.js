"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import PlaneDetails from "@/app/content/plane-details";
import { buttonStyle, detailPageStyle, detailPageStyle1, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, parameterPageStyle, parameterPageStyle1, PlaneHPAngleInfo, PlanePositionInfo, PlaneSideLengthInfo, PlaneTypeInfo, PlaneVPAngleInfo, selectInputStyle } from "../Helper/informationIconHelper";
import { PlaneValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function PlaneDashboard({ drawingType }) {
  let [setDrawingType] = useState("Plane");
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [PlaneType, setPlaneType] = useState("Pentagone"); // Default value
  const [PlaneSideLength, setPlaneSideLength] = useState("30"); // Default value
  const [PlaneHPAngle, setPlaneHPAngle] = useState("30"); // Default value
  const [PlaneVPAngle, setPlaneVPAngle] = useState("45"); // Default value
  const [PlanePosition1, setPlanePosition1] = useState("side"); // Default value
  const [PlanePosition2, setPlanePosition2] = useState("Parallel"); // Default value
  const [PlanePosition3, setPlanePosition3] = useState("HP");
  const [warningMessage, setWarningMessage] = useState([]);


  const inputs = {
    "Plane Type": PlaneType,
    "Side Length": PlaneSideLength,
    "Plane Position": PlanePosition1,
    "Plane in/parallel Postion": PlanePosition2,
    "Plane HP/VP Postion": PlanePosition3,
    "Incline With HP": PlaneHPAngle,
    "Inclined With VP": PlaneVPAngle
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
    PlaneValidation(
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
              <table className="w-full border-collapse border-spacing-2">
                <tbody>
                  <tr>
                    <td className="p-2">
                      <span className={labelStyle}>
                        Plane Type:
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
                          {PlaneTypeInfo.split("\n").map((line, index) => (
                            <p key={index} className="mb-2">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </td>
                    <td>
                      <select
                        value={PlaneType}
                        onChange={(e) => setPlaneType(e.target.value)}
                        className={selectInputStyle}
                      >
                        <option value="Traingle">Triangle</option>
                        <option value="Square">Square</option>
                        <option value="Pentagone">Pentagon</option>
                        <option value="Hexagone">Hexagon</option>
                        <option value="Circle">Circle</option>
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
                        Side Length:
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
                            {PlaneSideLengthInfo.split("\n").map((line, index) => (
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
                        value={PlaneSideLength}
                        onChange={(e) => setPlaneSideLength(e.target.value)}
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
                        Plane Position:
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
                          {PlanePositionInfo.split("\n").map((line, index) => (
                            <p key={index} className="mb-2">
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="flex space-x-1">
                        <select
                          value={PlanePosition1}
                          onChange={(e) => setPlanePosition1(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="Side">Side</option>
                          <option value="Corner">Corner</option>
                        </select>
                        <select
                          value={PlanePosition2}
                          onChange={(e) => setPlanePosition2(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="in">In</option>
                          <option value="Parallel">Parallel</option>
                          <option value="Perpendicular">Perpendicular</option>
                        </select>
                        <select
                          value={PlanePosition3}
                          onChange={(e) => setPlanePosition3(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="HP">HP</option>
                          <option value="VP">VP</option>
                        </select>
                      </div>
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
                        Inclined With HP:
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
                        {PlaneHPAngleInfo.split("\n").map((line, index) => (
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
                        value={PlaneHPAngle}
                        onChange={(e) => setPlaneHPAngle(e.target.value)}
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
                    <td className="p-2 " >
                      <span className={labelStyle}>
                        Inclined With VP:
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
                        {PlaneVPAngleInfo.split("\n").map((line, index) => (
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
                        value={PlaneVPAngle}
                        onChange={(e) => setPlaneVPAngle(e.target.value)}
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

          <div className={detailPageStyle}>
            <section
              id="plane-details-container"
              className={detailPageStyle1}
            >
              <PlaneDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
