"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";

export default function ParalleltohpandinclinationtovpDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Line lengths and angles
  const [LineLength, setLineLength] = useState(100);
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(25);
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(40);
  const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState(40);
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [secondpointPositionHP, setsecondpointPositionHP] = useState("Above");
  const [secondpointPositionVP, setSecondpointPositionVP] = useState("Front");





  const inputs = {
    // LineLength,
    // firstpointfrontOfVPLength,
    // firstPointAboveHPLength,
    // secondpointAboveHPLength,
    // secondpointFrontOfVPLength,
    // InclinationToVP,
    // InclinationToHP,

    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "Second Point Front of VP": secondpointFrontOfVPLength,
    "Inclination To VP": InclinationToVP,
    "First Point Position HP ":firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
    "Second point Position HP": secondpointPositionHP,
    "Second point Position VP": secondpointPositionVP,


  };

  const inputStyle =
    "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  bg-gradient-to-r from-green-100 to-blue-100";
  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";
   const labelstyle ="px-10 font-bold "
   const selectStyle =
   "w-22 p-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold text-sm  bg-gradient-to-r from-green-100 to-blue-100";
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
          <div className="col-span-4">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <div>
                <table className="w-full text-left text-gray-700">
                  <tbody className={ labelstyle}>
                  <tr>
                    <td className={labelstyle}>Line Length:</td>
                    {/* <td style={{ paddingLeft: "50px"}} className={labelstyle}>Line Length:</td> */}
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
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelstyle}>First Point of HP Length:</td>
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
                        <option  value="above">Above</option>
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
                    <td className={labelstyle}>First Point of VP Length:</td>
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
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  {/* Add other rows similarly */}

                  <tr>
                    <td className={labelstyle}>Second Point of VP Length:</td>
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
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelstyle}>Inclination to VP:</td>
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
                  </tbody>
                </table>

                <div className="text-center mt-4">
                  <button onClick={() => setIsCanvas(true)} className={buttonStyle}>
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-8 h-150">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200 overflow-scroll">
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
