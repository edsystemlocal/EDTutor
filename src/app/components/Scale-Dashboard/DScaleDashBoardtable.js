"use client";
import { useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ScaleDetails from "@/app/content/scale-details";
import LineDetails from "../../content/line-details";

export default function DScaleDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [ScaleMaximumLength, setScaleMaximumLength] = useState(8); // Default value
  const [ScaleMaximumLengthUnit, setScaleMaximumLengthUnit] = useState("km"); // Default value
  const [ScaleShowLength1, setScaleShowLength1] = useState(6); // Default value
  const [ScaleShowUnit1, setScaleShowUnit1] = useState("km"); // Default value
  const [ScaleShowLength2, setScaleShowLength2] = useState(7); // Default value
  const [ScaleShowUnit2, setScaleShowUnit2] = useState("hm"); 
  const [ScaleShowLength3, setScaleShowLength3] = useState(7); // Default value
  const [ScaleShowUnit3, setScaleShowUnit3] = useState("hm"); // Default value
  const [ScaleRF, setScaleRF] = useState("5"); // Default value

  const inputs = {
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
    "Show Length3": ScaleShowLength3,
    "Show Length3 Unit": ScaleShowUnit3,
    "Scale RF": ScaleRF,
  };

  const inputStyle = "w-12 p-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 font-bold  bg-gradient-to-r from-green-100 to-blue-100";
  const buttonStyle = "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";
  const labelStyle = "px-5 font-bold";

  if (isCanvas) {
    return (
      <div className="flex flex-col w-full">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-full bg-gradient-to-r from-blue-50 to-blue-200"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>

              <div className="w-full flex items-center justify-center pb-4">
                <div>
                  <table className="table-auto w-full text-left text-gray-700">
                    <tbody>
                      <tr>
                        <td><label className={labelStyle}>RF [1]:</label></td>
                        <td>
                          <input
                            type="number"
                            value={ScaleRF}
                            onChange={(e) => setScaleRF(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><label className={labelStyle}>Maximum Length:</label></td>
                        <td>
                          <input
                            type="number"
                            value={ScaleMaximumLength}
                            onChange={(e) => setScaleMaximumLength(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                        <td><label className={labelStyle}>Unit:</label></td>
                        <td>
                          <input
                            type="string"
                            value={ScaleMaximumLengthUnit}
                            onChange={(e) => setScaleMaximumLengthUnit(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><label className={labelStyle}>Show Length1:</label></td>
                        <td>
                          <input
                            type="number"
                            value={ScaleShowLength1}
                            onChange={(e) => setScaleShowLength1(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                        <td><label className={labelStyle}>Unit:</label></td>
                        <td>
                          <input
                            type="string"
                            value={ScaleShowUnit1}
                            onChange={(e) => setScaleShowUnit1(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><label className={labelStyle}>Show Length2:</label></td>
                        <td>
                          <input
                            type="number"
                            value={ScaleShowLength2}
                            onChange={(e) => setScaleShowLength2(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                        <td><label className={labelStyle}>Unit:</label></td>
                        <td>
                          <input
                            type="string"
                            value={ScaleShowUnit2}
                            onChange={(e) => setScaleShowUnit2(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><label className={labelStyle}>Show Length3:</label></td>
                        <td>
                          <input
                            type="number"
                            value={ScaleShowLength3}
                            onChange={(e) => setScaleShowLength3(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                        <td><label className={labelStyle}>Unit:</label></td>
                        <td>
                          <input
                            type="string"
                            value={ScaleShowUnit3}
                            onChange={(e) => setScaleShowUnit3(e.target.value)}
                            className={inputStyle}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="text-center mt-4">
                <button
                  onClick={() => setIsCanvas(true)}
                  className={buttonStyle}
                >
                  Submit
                </button>
              </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-8">
            <section
              id="scale-details-container"
              className="border-2 border-gray-300 rounded flex  w-full h-136 bg-gradient-to-r from-blue-50 to-blue-200"
            >
              <ScaleDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
