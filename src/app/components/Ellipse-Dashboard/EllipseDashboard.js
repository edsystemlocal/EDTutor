"use client";
import { useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ElipseDetails from "@/app/content/elipse-details";

export default function EllipseDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Ellipse properties
  const [majorAxis, setMajorAxis] = useState("");
  const [minorAxis, setMinorAxis] = useState("");
  const [distanceofthefocusfromthedirectrix, setdistanceofthefocusfromthedirectrix] = useState(100);

  const inputs = {
    majorAxis,
    minorAxis,
    distanceofthefocusfromthedirectrix

  };

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
          <div className="col-span-3 h-136">
            <section
              id="input-container"
              className="border-2 border-slate-300 rounded p-1 w-full h-full"
            >
              <div className="border-2 border-slate-300 rounded p-4 mb-4 flex items-center justify-center font-bold ">
                Drawing Type : {drawingType}
              </div>
              <div className="w-full flex items-center justify-center pb-4">
                <div>
                  <label className="flex justify-between">
                    Major Axis:{" "}
                    <input
                      type="number"
                      value={majorAxis}
                      onChange={(e) => setMajorAxis(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    Minor Axis:{" "}
                    <input
                      type="number"
                      value={minorAxis}
                      onChange={(e) => setMinorAxis(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    distanceofthefocusfromthedirectrix:{" "}
                    <input
                      type="number"
                      value={distanceofthefocusfromthedirectrix}
                      onChange={(e) => setdistanceofthefocusfromthedirectrix(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />

                  <button
                    onClick={() => setIsCanvas(true)}
                    style={{
                      padding: "5px 25px",
                      backgroundColor: "orange",
                      color: "#FFF",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-9">
            <section
              id="ellipse-details-container"
              className="border-2 border-slate-300 rounded flex items-center w-full h-136"
            >
              <ElipseDetails />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
