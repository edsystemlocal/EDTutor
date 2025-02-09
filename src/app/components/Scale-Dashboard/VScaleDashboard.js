
"use client";
import { useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ScaleDetails from "@/app/content/scale-details";
import LineDetails from "../../content/line-details";

export default function VScaleDashboard({ drawingType }) {
  // const [drawingType, setDrawingType] = useState("scale");
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [RF1, setRF1] = useState(1);
  const [RF2, setRF2] = useState(50);
  const [RealLength, setRealLength] = useState();
  const [RealUnit, setRealUnit] = useState();
  const [DrawingLength, setDrawingLength] = useState();
  const [DrawingUnit, setDrawingUnit] = useState();


  const [ScaleMaximumLength, setScaleMaximumLength] = useState(8); // Default value
  const [ScaleMaximumLengthUnit, setScaleMaximumLengthUnit] = useState("km"); // Default value
  const [ScaleShowLength1, setScaleShowLength1] = useState(6); // Default value
  const [ScaleShowUnit1, setScaleShowUnit1] = useState("km"); // Default value
  const [ScaleShowLength2, setScaleShowLength2] = useState(7); // Default value
  const [ScaleShowUnit2, setScaleShowUnit2] = useState("hm"); // Default value
  const [ScaleShowLength3, setScaleShowLength3] = useState(5); // Default value
  const [ScaleShowUnit3, setScaleShowUnit3] = useState("dm"); // Default value

  const inputs2 = {
    RF1,
    RF2,
    RealLength,
    RealUnit,
    DrawingLength,
    DrawingUnit,
    ScaleMaximumLength,
    ScaleMaximumLengthUnit,
    ScaleShowLength1,
    ScaleShowUnit1,
    ScaleShowLength2,
    ScaleShowUnit2,
    ScaleShowLength3,
    ScaleShowUnit3,
  };

  const inputs = {
   "RF" :RF1,
    ":":RF2,
    "Actual Length":RealLength,
    "Actual Length Unit":RealUnit,
   "Drawing Length": DrawingLength,
   "Drawing Length Unit" :DrawingUnit,
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
    "Show Length3": ScaleShowLength3,
    "Show Length3 Unit": ScaleShowUnit3,
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
  const inputStyle =
    "w-16 p-2 m-1 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";

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

              <div className="w-full flex items-center justify-center pb-3">
                <div >
                  <div className="flex justify-between">
                  <label className="flex justify-between">
                      RF:{" "}
                      <input
                        type="number"
                        value={RF1}
                        onChange={(e) =>
                          setRF1(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      :{" "}
                      <input
                        type="number"
                        value={RF2}
                        onChange={(e) =>
                          setRF2(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    </div>
                    <br />

                    <div className="flex justify-between">
                    <label className="flex justify-between">
                      Drawing Length:{""}
                      <input
                        type="number"
                        value={DrawingLength}
                        onChange={(e) =>
                          setDrawingLength(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleMaximumLengthUnit}
                        onChange={(e) =>
                          setScaleMaximumLengthUnit(e.target.value)
                        }
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}

                      <select
                        value={DrawingUnit}
                        onChange={(e) => setDrawingUnit(e.target.value)}
                        className={inputStyle}>
                        <option value="">select</option>
                       <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>


                    </label>
                  </div>

                  <br />


                  <div className="flex justify-between">
                    <label className="flex justify-between">
                      Actual Length:{""}
                      <input
                        type="number"
                        value={RealLength}
                        onChange={(e) =>
                          setRealLength(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleMaximumLengthUnit}
                        onChange={(e) =>
                          setScaleMaximumLengthUnit(e.target.value)
                        }
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}

                      <select
                        value={RealUnit}
                        onChange={(e) => setRealUnit(e.target.value)}
                        className={inputStyle}>
                        <option value="">select</option>
                        <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>


                    </label>
                  </div>

                  <br />

                      
                  


                    <div className="flex justify-between">
                    <label className="flex justify-between">
                      Maximum Length:{" "}
                      <input
                        type="number"
                        value={ScaleMaximumLength}
                        onChange={(e) =>
                          setScaleMaximumLength(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleMaximumLengthUnit}
                        onChange={(e) =>
                          setScaleMaximumLengthUnit(e.target.value)
                        }
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}

                      <select
                        value={ScaleMaximumLengthUnit}
                        onChange={(e) => setScaleMaximumLengthUnit(e.target.value)}
                        className={inputStyle}>
                        <option value="">select</option>
                        <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>


                    </label>
                  </div>

                  <br />
                  <div className="flex justify-between">
                    <label className="flex justify-between">
                      To Read length:{" "}
                      <input
                        type="number"
                        value={ScaleShowLength1}
                        onChange={(e) =>
                          setScaleShowLength1(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>

                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleShowUnit1}
                        onChange={(e) => setScaleShowUnit1(e.target.value)}
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}

                      <select
                        value={ScaleShowUnit1}
                        onChange={(e) => setScaleShowUnit1(e.target.value)}
                        className={inputStyle}>
                       <option value="">select</option>
                       <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>

                    </label>
                  </div>
                  <br />
                  <div className="flex justify-between">
                    <label className="flex justify-between">
                      Show Length2:{" "}
                      <input
                        type="number"
                        value={ScaleShowLength2}
                        onChange={(e) =>
                          setScaleShowLength2(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleShowUnit2}
                        onChange={(e) => setScaleShowUnit2(e.target.value)}
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}
                      <select
                        value={ScaleShowUnit2}
                        onChange={(e) => setScaleShowUnit2(e.target.value)}
                        className={inputStyle}>
                        <option value="">select</option>
                        <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>



                    </label>
                  </div>

                  <br />
                  <div className="flex justify-between">
                    <label className="flex justify-between">
                      Show Length3:{" "}
                      <input
                        type="number"
                        value={ScaleShowLength3}
                        onChange={(e) =>
                          setScaleShowLength3(Number(e.target.value))
                        }
                        // className="w-14 p-1 m-1 border border-black"
                        className={inputStyle}
                      />
                    </label>
                    <label className="flex justify-between">
                      Unit:{" "}
                      {/* <input
                        type="string"
                        value={ScaleShowUnit2}
                        onChange={(e) => setScaleShowUnit2(e.target.value)}
                        // className="w-14 p-1 m-1 border border-black"
                         className={inputStyle}
                      /> */}
                      <select
                        value={ScaleShowUnit3}
                        onChange={(e) => setScaleShowUnit3(e.target.value)}
                        className={inputStyle}>
                        <option value="">select</option>
                        <option value="km">km</option>
                        <option value="hm">hm</option>
                        <option value="dm">dm</option>
                        <option value="m">m</option>
                        <option value="dcm">dcm</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                        <option value="yard">yard</option>
                        <option value="ft">ft</option>
                        <option value="inch">inch</option>
                        <option value="hh">hh</option>
                        <option value="min">min</option>
                        <option value="sec">sec</option>
                      </select>



                    </label>
                  </div>
                  <br />
                  <button
                    onClick={() => setIsCanvas(true)}
                    // style={{
                    //   padding: "5px 25px",
                    //   backgroundColor: "orange",
                    //   color: "#FFF",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   cursor: "pointer",
                    //   fontSize: "16px",
                    // }}
                    className={buttonStyle}
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