"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "../Canvas/canvas";
import PointDetails from "@/app/content/point-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, PointFristInHPInfo, PointFristInVPInfo, selectInputStyle } from "../informationIconHelper";

export default function PointDashboard({ drawingType }) {
  // State for variables
  const [firstPointFrontOfVP, setFirstPointFrontOfVP] = useState(60);
  const [firstPointAboveHP, setFirstPointAboveHP] = useState(40);
  const [firstpointPositionVP, setfirstpointPositionVP] = useState("Front");
  const [firstpointPositionHP, setfirstpointPositionHP] = useState("Above");
  const [isCanvas, setIsCanvas] = useState(false);
  const [firstPointFrontOfVPInfo, setfirstPointFrontOfVPInfo] = useState(false);
  const [firstPointAboveHPInfo, setfirstPointAboveHPInfo] = useState(false);

  const firstPointFrontOfVPInfoRef = useRef(null);
  const firstPointAboveHPInfoRef = useRef(null);

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

  // Handle click outside the tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (firstPointAboveHPInfoRef.current && !firstPointAboveHPInfoRef.current.contains(event.target)) {
        setfirstPointAboveHPInfo(false);
      }
      if (firstPointFrontOfVPInfoRef.current && !firstPointFrontOfVPInfoRef.current.contains(event.target)) {
        setfirstPointFrontOfVPInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isCanvas) {
    return (
      <div className="flex flex-col w-full ">
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }

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
                    <td className="p-2">

                      <span className={labelStyle}>First Point Above HP:

                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setfirstPointAboveHPInfo(!firstPointAboveHPInfo)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {firstPointAboveHPInfo && (
                        <div ref={firstPointAboveHPInfoRef} className={onClickStyle}>
                          {PointFristInHPInfo}
                        </div>
                      )}

                    </td>
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
                    <td className="p-2">
                      <span className={labelStyle}>First Point Front of VP:
                        <span
                          className={infoIconStyle}
                          title={HoverMsg}
                          onClick={() => setfirstPointFrontOfVPInfo(!firstPointFrontOfVPInfo)} // toggle tooltip on click
                        >
                          ⓘ
                        </span>
                      </span>
                      {firstPointFrontOfVPInfo && (
                        <div ref={firstPointFrontOfVPInfoRef} className={onClickStyle}>
                          {PointFristInVPInfo}
                        </div>
                      )}
                    </td>
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
