"use client";
import { useState } from "react";
import Canvas from "../Canvas/canvas";
import LineDetails from "@/app/content/line-details";

export default function InclinationtobothDashboard({drawingType}) {
  // const [drawingType, setDrawingType] = useState("line");
  const [isCanvas, setIsCanvas] = useState(false);

  // Line lengths and angles
  const [LineLength, setLineLength] = useState(70);
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState(15);
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState(10);
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [InclinationToHP, setInclinationToHP] = useState("");
  const [topViewLength, settopViewLength] = useState("50");
  const [frontViewLength, setfrontViewLength] = useState("60");

  const [TopviewAngle, setTopviewAngle] = useState("");
  const [FrontviewAngle, setFrontviewAngle] = useState("");
  
  const inputs = {
    LineLength,
    firstpointfrontOfVPLength,
    firstPointAboveHPLength,
    InclinationToVP,
    InclinationToHP,
    topViewLength,
    frontViewLength,
    TopviewAngle,
    FrontviewAngle
  };
  console.log("Drawing Type received:", drawingType);
  
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
                  <label className="flex justify-between">
                    Line Length:{" "}
                    <input
                      type="text"
                      value={LineLength}
                      onChange={(e) => setLineLength(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    First Point Front of VP Length:{" "}
                    <input
                      type="text"
                      value={firstpointfrontOfVPLength}
                      onChange={(e) => setFirstPointFrontOfVPLength(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    First Point Above HP Length:{" "}
                    <input
                      type="text"
                      value={firstPointAboveHPLength}
                      onChange={(e) => setFirstPointAboveHPLength(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                
                  <label className="flex justify-between">
                    Inclination to VP:{" "}
                    <input
                      type="text"
                      value={InclinationToVP}
                      onChange={(e) => setInclinationToVP(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    Inclination to HP:{" "}
                    <input
                      type="text"
                      value={InclinationToHP}
                      onChange={(e) => setInclinationToHP(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    Top View Length:{" "}
                    <input
                      type="text"
                      value={topViewLength}
                      onChange={(e) => settopViewLength(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    Front View Length:{" "}
                    <input
                      type="text"
                      value={frontViewLength}
                      onChange={(e) => setfrontViewLength(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                  Top view Angle:{" "}
                    <input
                      type="text"
                      value={TopviewAngle}
                      onChange={(e) => setTopviewAngle(Number(e.target.value))}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <br />
                  <label className="flex justify-between">
                    Front View Angle :{" "}
                    <input
                      type="text"
                      value={FrontviewAngle}
                      onChange={(e) => setFrontviewAngle(Number(e.target.value))}
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
              id="scale-details-container"
              className="border-2 border-slate-300 rounded flex items-center w-full h-136"
            >
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
