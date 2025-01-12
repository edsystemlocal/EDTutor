"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import PlaneDetails from "@/app/content/plane-details";

export default function PlaneDashboard({ drawingType }) {
  let [setDrawingType] = useState("Plane");
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [PlaneType, setPlaneType] = useState("Pentagone"); // Default value
  const [PlaneSideLength, setPlaneSideLength] = useState(25); // Default value
  const [PlaneHPAngle, setPlaneHPAngle] = useState(30); // Default value
  const [PlaneVPAngle, setPlaneVPAngle] = useState(60); // Default value
  const [PlanePosition1, setPlanePosition1] = useState("side"); // Default value
  const [PlanePosition2, setPlanePosition2] = useState("Parallel"); // Default value
  const [PlanePosition3, setPlanePosition3] = useState("HP");

  const inputs = {
    "Plane Type": PlaneType,
    "Side Length": PlaneSideLength,
    "Plane Position":PlanePosition1,
    "Plane in/parallel Postion":PlanePosition2,
    "Plane HP/VP Postion":PlanePosition3,
    "Incline With HP": PlaneHPAngle,
    "Inclined With VP": PlaneVPAngle 
  };

  const inputStyle =
  "w-12 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold   bg-gradient-to-r from-green-100 to-blue-100";
const selectInputStyle =
  "w-22 p-1 m-1 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold text-sm  bg-gradient-to-r from-green-100 to-blue-100";
const labelStyle = "text-gray-700 font-bold px-8 ";
const buttonStyle = "px-5 py-2 mt-10 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

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
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white  bg-gradient-to-r from-blue-50 to-blue-200 h-screen"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <table className="w-full border-collapse border-spacing-2">
                <tbody>
                  <tr>
                    <td  className={labelStyle}> Plane Type: </td>
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
                    <td  className={labelStyle}> Side Length: </td>
                    <td>
                      <input
                        type="text"
                        value={PlaneSideLength}
                        onChange={(e) => setPlaneSideLength(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td  className={labelStyle}> Plane Position: </td>
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
                    <td  className={labelStyle}> Inclined With HP: </td>
                    <td>
                      <input
                        type="text"
                        value={PlaneHPAngle}
                        onChange={(e) => setPlaneHPAngle(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td  className={labelStyle}>  Inclined With VP: </td>
                    <td>
                      <input
                        type="text"
                        value={PlaneVPAngle}
                        onChange={(e) => setPlaneVPAngle(Number(e.target.value))}
                        className={inputStyle}
                      />
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

          <div className="col-span-8 h-150">
            <section
              id="plane-details-container"
              className="border-2 border-gray-300 rounded-lg p-4  bg-gradient-to-r from-blue-50 to-blue-200 shadow-lg bg-white h-screen overflow-scroll"
            >
              <PlaneDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}