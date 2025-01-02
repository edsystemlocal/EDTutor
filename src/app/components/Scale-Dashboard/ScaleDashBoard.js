
"use client";
import { useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ScaleDetails from "@/app/content/scale-details";
import LineDetails from "../../content/line-details";

export default function ScaleDashboard({drawingType}) {
  // const [drawingType, setDrawingType] = useState("scale");
  const [isCanvas, setIsCanvas] = useState(false); // Default value

  const [ScaleMaximumLength, setScaleMaximumLength] = useState(8); // Default value
  const [ScaleMaximumLengthUnit, setScaleMaximumLengthUnit] = useState("km"); // Default value
  const [ScaleShowLength1, setScaleShowLength1] = useState(6); // Default value
  const [ScaleShowUnit1, setScaleShowUnit1] = useState("km"); // Default value
  const [ScaleShowLength2, setScaleShowLength2] = useState(7); // Default value
  const [ScaleShowUnit2, setScaleShowUnit2] = useState("hm"); // Default value

  const inputs2 = {
    ScaleMaximumLength,
    ScaleMaximumLengthUnit,
    ScaleShowLength1,
    ScaleShowUnit1,
    ScaleShowLength2,
    ScaleShowUnit2,
  };

  const inputs = {
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
  };

  // Function to reset Drawing
  // const resetDrawing = (path) => {
  //   setDrawingType(path);
  //   if(isCanvas) setIsCanvas(false);
  // };

  // if (isCanvas) {
  //   return (
  //     <div className="flex flex-col w-full">
  //       <Navbar resetDrawing={resetDrawing} />
  //       <Canvas inputs={inputs} drawingType={drawingType} />
  //     </div>
  //   );
  // }

 if (isCanvas) {
    return (
      <div className="flex flex-col w-full">
        {/* <Navbar /> */}
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
                <div className="flex justify-between">
                <label>
                    Maximum Length:{" "}
                    <input
                      type="number"
                      value={ScaleMaximumLength}
                      onChange={(e) =>
                        setScaleMaximumLength(Number(e.target.value))
                      }
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <label>
                    Unit:{" "}
                    <input
                      type="string"
                      value={ScaleMaximumLengthUnit}
                      onChange={(e) =>
                        setScaleMaximumLengthUnit(e.target.value)
                      }
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                </div>
                  <br />
                  <div className="flex justify-between">
                  <label>
                    Show Length1:{" "}
                    <input
                      type="number"
                      value={ScaleShowLength1}
                      onChange={(e) =>
                        setScaleShowLength1(Number(e.target.value))
                      }
                      className="w-14 p-1 m-1 border"
                    />
                  </label>

                  <label>
                    Unit:{" "}
                    <input
                      type="string"
                      value={ScaleShowUnit1}
                      onChange={(e) => setScaleShowUnit1(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  </div>
                  <br />
                 <div className="flex justify-between">
                 <label>
                    Show Length2:{" "}
                    <input
                      type="number"
                      value={ScaleShowLength2}
                      onChange={(e) =>
                        setScaleShowLength2(Number(e.target.value))
                      }
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                  <label>
                    Unit:{" "}
                    <input
                      type="string"
                      value={ScaleShowUnit2}
                      onChange={(e) => setScaleShowUnit2(e.target.value)}
                      className="w-14 p-1 m-1 border"
                    />
                  </label>
                 </div>
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
              <ScaleDetails drawingType={drawingType} />

            </section>
          </div>
        </div>
      </main>
    </div>
  );
}