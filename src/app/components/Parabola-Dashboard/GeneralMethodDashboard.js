"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import ParabolaDetails from "@/app/content/parabola-details";

export default function GeneralMethodDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Parabola properties
  const [distanceofthefocusfromthedirectrix, setdistanceofthefocusfromthedirectrix] = useState(100);

  const inputs = {
    distanceofthefocusfromthedirectrix,
  };

  const inputStyle =
    "w-16 p-2 m-1 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
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
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5">
      <main id="main-container" className="w-full p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <section
              id="input-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <div>
                <label className="block mb-3 ">
                  <span className="text-gray-700">Distance from Focus to Directrix:</span>
                  <input
                    type="number"
                    value={distanceofthefocusfromthedirectrix}
                    onChange={(e) =>
                      setdistanceofthefocusfromthedirectrix(Number(e.target.value))
                    }
                    className={inputStyle}
                  />
                </label>
                <button onClick={() => setIsCanvas(true)} className={buttonStyle}>
                  Submit
                </button>
              </div>
            </section>
          </div>

          <div className="col-span-9">
            <section
              id="parabola-details-container"
              className="border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white h-screen overflow-scroll"
            >
              <ParabolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}