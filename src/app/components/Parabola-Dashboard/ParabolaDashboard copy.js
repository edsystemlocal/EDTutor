"use client";
import { useState } from "react";
import Canvas from "../canvas";
import ParabolaDetails from "@/app/content/parabola-details";

export default function ParabolaDashboard({drawingType}) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Parabola properties
  const [Base, setBase] = useState(200);
  const [Height, setHeight] = useState(100);
  const [angleInDegrees, setangleInDegrees] = useState(60);
  const [distanceofthefocusfromthedirectrix, setdistanceofthefocusfromthedirectrix] = useState(100);



  const inputs = {
    Base,
    Height,
    angleInDegrees,
    distanceofthefocusfromthedirectrix,
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
              <div className="w-full flex items-center justify-center pb-4">
                <div>
                  <label>
                    Base:{" "}
                    <input
                      type="number"
                      value={Base}
                      onChange={(e) => setBase(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label>
                    Height:{" "}
                    <input
                      type="number"
                      value={Height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br/>
                  <label>
                  angleInDegrees:{" "}
                    <input
                      type="number"
                      value={angleInDegrees}
                      onChange={(e) => setangleInDegrees(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br/>
                  <label>
                  distanceofthefocusfromthedirectrix:{" "}
                    <input
                      type="number"
                      value={distanceofthefocusfromthedirectrix}
                      onChange={(e) => setdistanceofthefocusfromthedirectrix(Number(e.target.value))}
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
              id="parabola-details-container"
              className="border-2 border-slate-300 rounded flex items-center w-full h-136"
            >
              <ParabolaDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
