"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";
import { InclinationtobothValidation } from "../Helper/validationHelper";
import { buttonStyle, FirstPointofHPLengthInfo, FirstPointofVPLengthInfo, FrontViewAngleInfo, FrontViewLengthInfo, HoverMsg, InclinationtoHPInfo, InclinationtoVPInfo, infoIconStyle, inputStyle, labelStyle, LineLengthInfo, onClickStyle, SecondPoitofHPLengthInfo, SecondPontofVPLengthInfo, selectInputStyle, TopViewAngleInfo, TopViewLengthInfo } from "../informationIconHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function InclinationtobothDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  const [LineLength, setLineLength] = useState(70);
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(10);
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(15);
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [secondpointAboveHPLength, setSecondPointAboveHPLength] = useState(25);
  const [secondpointPositionHP, setsecondpointPositionHP] = useState("Above");
  const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState(40);
  const [secondpointPositionVP, setSecondpointPositionVP] = useState("Front");
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [InclinationToHP, setInclinationToHP] = useState("");
  const [topViewLength, settopViewLength] = useState("50");
  const [frontViewLength, setfrontViewLength] = useState("60");
  const [TopviewAngle, setTopviewAngle] = useState("");
  const [FrontviewAngle, setFrontviewAngle] = useState("");
  const [warningMessage, setWarningMessage] = useState([]);




  const inputs = {
    LineLength,
    firstPointAboveHPLength,
    firstpointPositionHP,
    firstpointfrontOfVPLength,
    firstpointPositionVP,
    secondpointAboveHPLength,
    secondpointPositionHP,
    secondpointFrontOfVPLength,
    secondpointPositionVP,
    InclinationToVP,
    InclinationToHP,
    topViewLength,
    frontViewLength,
    TopviewAngle,
    FrontviewAngle,

  };

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false);
  const [showInfo6, setShowInfo6] = useState(false);
  const [showInfo7, setShowInfo7] = useState(false);
  const [showInfo8, setShowInfo8] = useState(false);
  const [showInfo9, setShowInfo9] = useState(false);
  const [showInfo10, setShowInfo10] = useState(false);
  const [showInfo11, setShowInfo11] = useState(false);




  const showInfoRef1 = useRef(null);
  const showInfoRef2 = useRef(null);
  const showInfoRef3 = useRef(null);
  const showInfoRef4 = useRef(null);
  const showInfoRef5 = useRef(null);
  const showInfoRef6 = useRef(null);
  const showInfoRef7 = useRef(null);
  const showInfoRef8 = useRef(null);
  const showInfoRef9 = useRef(null);
  const showInfoRef10 = useRef(null);
  const showInfoRef11 = useRef(null);


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
      if (showInfoRef6.current && !showInfoRef6.current.contains(event.target)) {
        setShowInfo1(false);
      }
      if (showInfoRef7.current && !showInfoRef7.current.contains(event.target)) {
        setShowInfo7(false);
      }
      if (showInfoRef8.current && !showInfoRef8.current.contains(event.target)) {
        setShowInfo8(false);
      }
      if (showInfoRef9.current && !showInfoRef9.current.contains(event.target)) {
        setShowInfo9(false);
      }
      if (showInfoRef10.current && !showInfoRef10.current.contains(event.target)) {
        setShowInfo10(false);
      }
      if (showInfoRef11.current && !showInfoRef11.current.contains(event.target)) {
        setShowInfo11(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSubmit = () => {
    InclinationtobothValidation(
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white">
      <main id="main-container" className="w-full p-2 ">
        <div className="grid grid-cols-12 gap-2 ">
          <div className="col-span-4 ">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>
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
                          {LineLengthInfo}
                        </div>
                      )}
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        value={LineLength}
                        onChange={(e) => setLineLength(Number(e.target.value))}
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
                          {FirstPointofHPLengthInfo}
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
                          {FirstPointofVPLengthInfo}
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
                        Second Point of HP Length:
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
                          {SecondPoitofHPLengthInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={secondpointAboveHPLength}
                        onChange={(e) => setSecondPointAboveHPLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                    <td>
                      <select
                        value={secondpointPositionHP}
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
                        Second Point of VP Length:
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
                          {SecondPontofVPLengthInfo}
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
                          onClick={() => setShowInfo6(!showInfo6)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo6 && (
                        <div ref={showInfoRef6} className={onClickStyle}>
                          {InclinationtoVPInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={InclinationToVP}
                        onChange={(e) => setInclinationToVP(Number(e.target.value))}
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
                        Inclination to HP:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo7(!showInfo7)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo7 && (
                        <div ref={showInfoRef7} className={onClickStyle}>
                          {InclinationtoHPInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={InclinationToHP}
                        onChange={(e) => setInclinationToHP(Number(e.target.value))}
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
                        Top View Length:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo8(!showInfo8)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo8 && (
                        <div ref={showInfoRef8} className={onClickStyle}>
                          {TopViewLengthInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={topViewLength}
                        onChange={(e) => settopViewLength(Number(e.target.value))}
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
                        Front View Length:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo9(!showInfo9)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo9 && (
                        <div ref={showInfoRef9} className={onClickStyle}>
                          {FrontViewLengthInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={frontViewLength}
                        onChange={(e) => setfrontViewLength(Number(e.target.value))}
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
                        Top View Angle:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo10(!showInfo10)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo10 && (
                        <div ref={showInfoRef10} className={onClickStyle}>
                          {TopViewAngleInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={TopviewAngle}
                        onChange={(e) => setTopviewAngle(Number(e.target.value))}
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
                        Front View Angle:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setShowInfo11(!showInfo11)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {showInfo11 && (
                        <div ref={showInfoRef11} className={onClickStyle}>
                          {FrontViewAngleInfo}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        value={FrontviewAngle}
                        onChange={(e) => setFrontviewAngle(Number(e.target.value))}
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
              <br />

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
          <div className="col-span-8">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200 overflow-scroll">
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main >
    </div >
  );
}
