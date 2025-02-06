"use client";
import { useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import LineDetails from "../../content/line-details";
import { detailPageStyle, detailPageStyle1, inputStyle, labelStyle, parameterPageStyle, parameterPageStyle1 } from "../Helper/informationIconHelper";

export default function LineDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false);

  // Line lengths and angles
  const [LineLength, setLineLength] = useState("");
  const [firstpointfrontOfVPLength, setFirstPointFrontOfVPLength] = useState("");
  const [firstPointAboveHPLength, setFirstPointAboveHPLength] = useState("");
  const [secondpointAboveHPLength, setSecondPointAboveHPLength] = useState("");
  const [secondpointFrontOfVPLength, setSecondPointFrontOfVPLength] = useState("");
  const [InclinationToVP, setInclinationToVP] = useState("");
  const [InclinationToHP, setInclinationToHP] = useState("");

  const inputs = {
    // LineLength,
    // firstpointfrontOfVPLength,
    // firstPointAboveHPLength,
    // secondpointAboveHPLength,
    // secondpointFrontOfVPLength,
    // InclinationToVP,
    // InclinationToHP,

    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "Second Point Above of HP": secondpointAboveHPLength,
    "Second Point Front of VP": secondpointFrontOfVPLength,
    "Inclination To VP": InclinationToVP,
    "Inclination To HP": InclinationToHP,


  };
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
          <div className={parameterPageStyle}>
            <section className={parameterPageStyle1}>
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {drawingType}
              </div>
              <div>
                <table className="w-full text-left text-gray-700">
                  <tbody className={ labelStyle}>
                  <tr>
                    <td className={labelStyle}>Line Length:</td>
                    {/* <td style={{ paddingLeft: "50px"}} className={labelstyle}>Line Length:</td> */}
                    <td>
                      <input
                        type="text"
                        value={LineLength}
                        onChange={(e) => setLineLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelStyle}>First Point of HP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={firstPointAboveHPLength}
                        onChange={(e) => setFirstPointAboveHPLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                   
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelStyle}>First Point of VP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={firstpointfrontOfVPLength}
                        onChange={(e) => setFirstPointFrontOfVPLength(e.target.value)}
                        className={inputStyle}
                      />

                    </td>
                  
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  {/* Add other rows similarly */}
                  <tr>
                    <td className={labelStyle}>Second Point of HP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={secondpointAboveHPLength}
                        onChange={(e) => setSecondPointAboveHPLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelStyle}>Second Point of VP Length:</td>
                    <td>
                      <input
                        type="text"
                        value={secondpointFrontOfVPLength}
                        onChange={(e) => setSecondPointFrontOfVPLength(e.target.value)}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelStyle}>Inclination to VP:</td>
                    <td>
                      <input
                        type="text"
                        value={InclinationToVP}
                        onChange={(e) => setInclinationToVP(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <td className={labelStyle}>Inclination to HP:</td>
                    <td>
                      <input
                        type="text"
                        value={InclinationToHP}
                        onChange={(e) => setInclinationToHP(Number(e.target.value))}
                        className={inputStyle}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <hr />
                    </td>
                  </tr>
                  </tbody>
                </table>

                <div className="text-center mt-4">
                  <button onClick={() => setIsCanvas(true)} className={buttonStyle}>
                    Submit
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className={detailPageStyle}>
            <section className={detailPageStyle1}>
              <LineDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
