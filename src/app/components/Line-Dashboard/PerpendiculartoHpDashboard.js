"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";

export default function PerpendiculartoHpDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Line lengths and angles
  const [LineLength, setLineLength] = useState(100);
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(40);
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(25);

  const inputs = {
    // LineLength,
    // firstpointfrontOfVPLength,
    // firstPointAboveHPLength,

    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
  };

  const inputStyle =
    "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  bg-gradient-to-r from-green-100 to-blue-100";
  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";
    const labelstyle ="px-10 font-bold ";

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
          <div className="col-span-4 ">
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200">
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <div>
                <table className="w-full text-left text-gray-700">
                  <tbody className={labelstyle}>
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
            <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200 overflow-scroll"  >
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
