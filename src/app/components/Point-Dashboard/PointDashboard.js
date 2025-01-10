"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import PointDetails from "@/app/content/point-details";

export default function PointDashboard({ drawingType }) {
  // State for variables
  const [firstPointFrontOfVP, setFirstPointFrontOfVP] = useState(60);
  const [firstPointAboveHP, setFirstPointAboveHP] = useState(40);
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [isCanvas, setIsCanvas] = useState(false);

 // Inputs for Canvas with labels
 const inputs = 
 {
  // "First Point Above HP": `${firstPointAboveHP} ${firstpointPositionHP}`,
  // "First Point Front of VP": `${firstPointFrontOfVP} ${firstpointPositionVP}`,


   "First Point Of HP": firstPointAboveHP,
   "First Point Position HP": firstpointPositionHP,
   "First Point Of VP": firstPointFrontOfVP,
   "First Point Position VP": firstpointPositionVP,

 
}
  if (isCanvas) {
    return (
      <div className="flex flex-col w-full ">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }

  const inputStyle =
    "w-12 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold   bg-gradient-to-r from-green-100 to-blue-100";
  const selectInputStyle =
    "w-22 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold text-sm  bg-gradient-to-r from-green-100 to-blue-100";
  const labelStyle = "text-gray-700 font-bold px-10 ";
  const buttonStyle = "px-5 py-2 mt-10 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5 ">
      <main id="main-container " className="w-full p-2  ">
        <div className="grid grid-cols-12 gap-2 ">
          {/* Input Form Section */}
          <div className="col-span-4 h-150">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-gradient-to-r from-blue-50 to-blue-200  h-screen"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>

              {/* Table for Input Alignment */}
              <table className="w-full border-collapse border-spacing-2">
                <tbody>
                  <tr>
                    <td  className={labelStyle}>First Point Above HP:</td>
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
                    <td  className={labelStyle}>First Point Front of VP:</td>
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
                <button
                  onClick={() => {
                    console.log(inputs); // Log inputs for debugging
                    setIsCanvas(true);
                  }}
                  className={buttonStyle}
                >
                  Submit
                </button>
              </div>
            </section>
          </div>

          <div className="col-span-8 h-150 ">
            <section
              id="point-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 bg-gradient-to-r from-blue-50 to-blue-200 shadow-lg bg-white h-screen overflow-scroll"
            >
              <PointDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
