


"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ScaleDetails from "@/app/content/scale-details";
import LineDetails from "../../content/line-details";
import { ActualLengthInfo, buttonStyle, detailPageStyle, detailPageStyle1, DrawingLengthInfo, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, pageStyle, parameterPageStyle, parameterPageStyle1, RFInfo, RFLenghtInfo, ScaleMaximumLengthInfo, ScaleShowLength1Info, ScaleShowLength2Info, ScaleShowLength3Info, selectInputStyle } from "../Helper/informationIconHelper";
import { vScaleValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function VScaleDashboard({ drawingType }) {
  // const [drawingType, setDrawingType] = useState("scale");
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [RF1, setRF1] = useState("");
  const [RF2, setRF2] = useState("");
  const [RealLength, setRealLength] = useState();
  const [RealUnit, setRealUnit] = useState();
  const [DrawingLength, setDrawingLength] = useState();
  const [DrawingUnit, setDrawingUnit] = useState();


  const [ScaleMaximumLength, setScaleMaximumLength] = useState(""); // Default value
  const [ScaleMaximumLengthUnit, setScaleMaximumLengthUnit] = useState(""); // Default value
  const [ScaleShowLength1, setScaleShowLength1] = useState(""); // Default value
  const [ScaleShowUnit1, setScaleShowUnit1] = useState(""); // Default value
  const [ScaleShowLength2, setScaleShowLength2] = useState(""); // Default value
  const [ScaleShowUnit2, setScaleShowUnit2] = useState(""); // Default value
  const [ScaleShowLength3, setScaleShowLength3] = useState(""); // Default value
  const [ScaleShowUnit3, setScaleShowUnit3] = useState(""); // Default value
  const [warningMessage, setWarningMessage] = useState([]);

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
    "RF": RF1,
    ":": RF2,
    "Actual Length": RealLength,
    "Actual Length Unit": RealUnit,
    "Drawing Length": DrawingLength,
    "Drawing Length Unit": DrawingUnit,
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
    "Show Length3": ScaleShowLength3,
    "Show Length3 Unit": ScaleShowUnit3,
  };

  const [DrawingLength1, setDrawingLengthInfo] = useState(false);
  const [ActualLength, setActualLength] = useState(false);

  const [RFInfo, setRFInfo] = useState(false);
  const [ScaleMaximumLength1, setScaleMaximumLength1] = useState(false);
  const [ShowLength1, setShowLength1] = useState(false);
  const [ShowLength2, setShowLength2] = useState(false);
  const [ShowLength3, setShowLength3] = useState(false);

  const DrawingLengthInfoRef = useRef(null);
  const ActualLengthInfoRef = useRef(null);

  const RFInfoRef = useRef(null);
  const ScaleMaximumLength1Ref = useRef(null);
  const ShowLength1Ref = useRef(null);
  const ShowLength2Ref = useRef(null);
  const ShowLength3Ref = useRef(null);

  // Handle click outside the tooltip to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (RFInfoRef.current && !RFInfoRef.current.contains(event.target)) {
        setRFInfo(false);
      }
      if (DrawingLengthInfoRef.current && !DrawingLengthInfoRef.current.contains(event.target)) {
        setDrawingLengthInfo(false);
      }
      if (ActualLengthInfoRef.current && !ActualLengthInfoRef.current.contains(event.target)) {
        setActualLength(false);
      }
      if (ScaleMaximumLength1Ref.current && !ScaleMaximumLength1Ref.current.contains(event.target)) {
        setScaleMaximumLength1(false);
      }
      if (ShowLength1Ref.current && !ShowLength1Ref.current.contains(event.target)) {
        setShowLength1(false);
      }
      if (ShowLength2Ref.current && !ShowLength2Ref.current.contains(event.target)) {
        setShowLength2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    vScaleValidation(
      inputs, // Pass the inputs object directly
      setWarningMessage,
      setIsCanvas
    );
  };


  if (isCanvas) {
    return (
      <div className="flex flex-col w-full">
        {/* <Navbar /> */}
        <Canvas inputs={inputs} drawingType={drawingType} />
      </div>
    );
  }
  ;

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-white min-h-screen top-5">
      <main id="main-container" className="w-full p-2">
        <div className="grid grid-cols-12 gap-2">
          <div className={parameterPageStyle}>

            <section
              id="input-container"
              className={parameterPageStyle1}
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>
              <div className="w-full flex items-center justify-center pb-4">
                <table className="table-auto w-full text-left text-gray-700">
                  <tbody>

                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          RF:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setRFInfo(!RFInfo)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {RFInfo && (
                          <div ref={RFInfoRef} className={onClickStyle}>
                            {RFLenghtInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>

                      <td>
                        <input
                          type="text"
                          value={RF1}
                          onChange={(e) => setRF1(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td className={labelStyle}></td>

                      <td>
                        <input
                          type="text"
                          value={RF2}
                          onChange={(e) => setRF2(Number(e.target.value))}
                          className={inputStyle}
                        />

                      </td>



                      
                    </tr>



                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Drawing Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setDrawingLengthInfo(!DrawingLength1)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {DrawingLength1 && (
                          <div ref={DrawingLengthInfoRef} className={onClickStyle}>
                            {DrawingLengthInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={DrawingLength}
                          onChange={(e) => setDrawingLength(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td className={labelStyle}></td>
                      <td>
                        <select
                          value={DrawingUnit}
                          onChange={(e) => setDrawingUnit(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="">unit</option>
                          <option value="km">km</option>
                          <option value="m">m</option>
                          <option value="cm">cm</option>
                          <option value="mm">mm</option>
                          <option value="ft">ft</option>
                          <option value="inch">inch</option>
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
                        <span className={labelStyle}>
                          Actual Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setActualLength(!ActualLength)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ActualLength && (
                          <div ref={ActualLengthInfoRef} className={onClickStyle}>
                            {ActualLengthInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={RealLength}
                          onChange={(e) => setRealLength(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td className={labelStyle}></td>
                      <td>
                        <select
                          value={RealUnit}
                          onChange={(e) => setRealUnit(e.target.value)}
                          className={selectInputStyle}
                        >

                          <option value="">unit</option>
                          <option value="km">km</option>
                          <option value="m">m</option>
                          <option value="cm">cm</option>
                          <option value="mm">mm</option>
                          <option value="ft">ft</option>
                          <option value="inch">inch</option>
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
                        <span className={labelStyle}>
                          Maximum Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setScaleMaximumLength1(!ScaleMaximumLength1)} // Toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ScaleMaximumLength1 && (
                          <div ref={ScaleMaximumLength1Ref} className={onClickStyle}>
                            {ScaleMaximumLengthInfo.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleMaximumLength}
                          onChange={(e) => setScaleMaximumLength(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td><label className={labelStyle}></label></td>
                      <td>
                        <select
                          value={ScaleMaximumLengthUnit}
                          onChange={(e) => setScaleMaximumLengthUnit(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="">unit</option>
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
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>


                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          To Read Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowLength1(!ShowLength1)} // Toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ShowLength1 && (
                          <div ref={ShowLength1Ref} className={onClickStyle}>
                            {ScaleShowLength1Info.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleShowLength1}
                          onChange={(e) => setScaleShowLength1(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td><label className={labelStyle}></label></td>
                      <td>
                        <select
                          value={ScaleShowUnit1}
                          onChange={(e) => setScaleShowUnit1(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="">unit</option>
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
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Show Length2:{""}
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowLength2(!ShowLength2)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ShowLength2 && (
                          <div ref={ShowLength2Ref} className={onClickStyle}>
                            {ScaleShowLength2Info.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleShowLength2}
                          onChange={(e) => setScaleShowLength2(e.target.value)}
                          className={inputStyle}
                        />
                      </td>
                      <td>
                        <label className={labelStyle}></label>
                      </td>
                      <td>
                        <select
                          value={ScaleShowUnit2}
                          onChange={(e) => setScaleShowUnit2(e.target.value)}  // ✅ Corrected this
                          className={selectInputStyle}
                        >
                          <option value="">unit</option>
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
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>
                          Show Length3:{" "}
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowLength3(!ShowLength3)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ShowLength3 && (
                          <div ref={ShowLength3Ref} className={onClickStyle}>
                            {ScaleShowLength3Info.split("\n").map((line, index) => (
                              <p key={index} className="mb-2">{line}</p>
                            ))}
                          </div>
                        )}
                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleShowLength3}
                          onChange={(e) => setScaleShowLength3(Number(e.target.value))}
                          className={inputStyle}
                        />
                      </td>
                      <td>
                        <label className={labelStyle}></label>
                      </td>
                      <td>
                        <select
                          value={ScaleShowUnit3}
                          onChange={(e) => setScaleShowUnit3(e.target.value)}
                          className={selectInputStyle}
                        >
                          <option value="">unit</option>
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
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="3">

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center">
                <div className="text-red-500 text-center">
                  {warningMessage.map((msg, index) => (
                    <div key={index}>{msg}</div>
                  ))}
                </div>
                <button onClick={handleSubmit} className={buttonStyle}>
                  Submit
                </button>
              </div>
            </section>
          </div>

          <div className={detailPageStyle}>
            <section
              id="scale-details-container"
              className={detailPageStyle1}
            >
              <ScaleDetails drawingType={drawingType} />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
