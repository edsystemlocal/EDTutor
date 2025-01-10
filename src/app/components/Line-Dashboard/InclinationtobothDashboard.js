"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";

export default function InclinationtobothDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  const [LineLength, setLineLength] = useState(70);
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(10);
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("above");
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(15);
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("front");
  const [secondpointAboveHPLength, setSecondPointAboveHPLength] = useState(25);
  const [secondpointPositionHP, setsecondpointPositionHP] = useState("");
  const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState(40);
  const [secondpointPositionVP, setSecondpointPositionVP] = useState("");
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [InclinationToHP, setInclinationToHP] = useState("");
  const [topViewLength, settopViewLength] = useState("50");
  const [frontViewLength, setfrontViewLength] = useState("60");
  const [TopviewAngle, setTopviewAngle] = useState("");
  const [FrontviewAngle, setFrontviewAngle] = useState("");
  const [MidpointHPLength, setMidpointHPLength] = useState("");
  const [midpointPositionHP, setmidpointPositionHP] = useState("");
  const [MidpointVPLength, setMidpointVPLength] = useState("");
  const [midpointPositionVP, setmidpointPositionVP] = useState("");

  
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
    MidpointHPLength,
    midpointPositionHP,
    MidpointVPLength,
    midpointPositionVP
  };
  const inputStyle =
    "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
  const selectStyle =
    "w-22 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

  if (isCanvas) {
    return (
      <div className="flex flex-col w-full">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full">
      <main id="main-container" className="w-full p-1">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-4 h-150">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full">
            <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <table className="table-auto w-full text-left text-gray-700">
                <tbody>
                  <tr>
                    <td>Line Length:</td>
                    <td>
                      <input
                        type="text"
                        value={LineLength}
                        onChange={(e) => setLineLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>First Point of HP Length:</td>
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
                        className={selectStyle}
                      >
                        <option value="above">Above</option>
                        <option value="below">Below</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>First Point of VP Length:</td>
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
                        className={selectStyle}
                      >
                        <option value="front">Front</option>
                        <option value="behind">Behind</option>
                      </select>
                    </td>
                  </tr>
                  {/* Add other rows similarly */}
                  <tr>
                    <td>Second Point of HP Length:</td>
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
                        onChange={(e) => setsecondpointPositionHP(e.target.value)}
                        className={selectStyle}
                      >
                        <option value="above">Above</option>
                        <option value="below">Below</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Second Point of VP Length:</td>
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
                        className={selectStyle}
                      >
                        <option value="front">Front</option>
                        <option value="behind">Behind</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Inclination to VP:</td>
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
                    <td>Inclination to HP:</td>
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
                    <td>Top View Length:</td>
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
                    <td>Front View Length:</td>
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
                    <td>Top View Angle:</td>
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
                    <td>Front View Angle:</td>
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
                    <td>Mid Point of HP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={MidpointHPLength}
                        onChange={(e) => setMidpointHPLength(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                    <td>
                      <select
                        value={midpointPositionHP}
                        onChange={(e) => setmidpointPositionHP(e.target.value)}
                        className={selectStyle}
                      >
                        <option value="above">Above</option>
                        <option value="below">Below</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Mid Point of VP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={MidpointVPLength}
                        onChange={(e) => setMidpointVPLength(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                    <td>
                      <select
                        value={midpointPositionVP}
                        onChange={(e) => setmidpointPositionVP(e.target.value)}
                        className={selectStyle}
                      >
                        <option value="front">Front</option>
                        <option value="behind">Behind</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="text-center">
              <button
                onClick={() => setIsCanvas(true)}
                className={buttonStyle}
              >
                Submit
              </button>
              </div>
            </section>
          </div>
          <div className="col-span-8 h-150">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full overflow-scroll">
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}