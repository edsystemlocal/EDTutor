"use client";
import { useEffect, useRef, useState } from "react";
import Canvas from "@/app/components/Canvas/canvas";
import Navbar from "../Navbar/navbar";
import ScaleDetails from "@/app/content/scale-details";
import LineDetails from "../../content/line-details";
import { buttonStyle, HoverMsg, infoIconStyle, inputStyle, labelStyle, onClickStyle, RFLenghtInfo, ScaleMaximumLengthInfo, ScaleShowLength1Info, ScaleShowLength2Info, ScaleShowLength3Info } from "../informationIconHelper";
import { dScaleValidation } from "../Helper/validationHelper";
import { getDisplayValueOfType } from "../Canvas/canvasHelper";

export default function DScaleDashboard({ drawingType }) {
  const [isCanvas, setIsCanvas] = useState(false); // Default value
  const [ScaleMaximumLength, setScaleMaximumLength] = useState(); // Default value
  const [ScaleMaximumLengthUnit, setScaleMaximumLengthUnit] = useState("km"); // Default value
  const [ScaleShowLength1, setScaleShowLength1] = useState(); // Default value
  const [ScaleShowUnit1, setScaleShowUnit1] = useState("km"); // Default value
  const [ScaleShowLength2, setScaleShowLength2] = useState(); // Default value
  const [ScaleShowUnit2, setScaleShowUnit2] = useState("hm");
  const [ScaleShowLength3, setScaleShowLength3] = useState(); // Default value
  const [ScaleShowUnit3, setScaleShowUnit3] = useState("hm"); // Default value
  const [ScaleRF, setScaleRF] = useState(); // Default value

  const [warningMessage, setWarningMessage] = useState([]);


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


  const [RFInfo, setRFInfo] = useState(false);
  const [ScaleMaximumLength1, setScaleMaximumLength1] = useState(false);
  const [ShowLength1, setShowLength1] = useState(false);
  const [ShowLength2, setShowLength2] = useState(false);
  const [ShowLength3, setShowLength3] = useState(false);



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
      if (ScaleMaximumLength1Ref.current && !ScaleMaximumLength1Ref.current.contains(event.target)) {
        setScaleMaximumLength1(false);
      }
      if (ShowLength1Ref.current && !ShowLength1Ref.current.contains(event.target)) {
        setShowLength1(false);
      }
      if (ShowLength2Ref.current && !ShowLength2Ref.current.contains(event.target)) {
        setShowLength2(false);
      }
      if (ShowLength3Ref.current && !ShowLength3Ref.current.contains(event.target)) {
        setShowLength3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = () => {
    dScaleValidation(
      inputs, // Pass the inputs object directly
      setWarningMessage,
      setIsCanvas
    );
  };

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
          <div className="col-span-4 h-full">
            <section
              id="input-container"
              className="border-2 border-slate-300 rounded p-4 w-full h-full bg-gradient-to-r from-blue-50 to-blue-200"
            >
              <div className="mb-6 text-center text-xl font-semibold text-blue-700">
                Drawing Type: {getDisplayValueOfType(drawingType)}
              </div>

              <div className="w-full flex items-center justify-center pb-4">
                <table className="w-full border-collapse text-gray-700">
                  <tbody>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>RF [1]:
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
                            {RFLenghtInfo}
                          </div>
                        )}

                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleRF}
                          onChange={(e) => setScaleRF(Number(e.target.value))}
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
                      <td className="p-2">
                        <span className={labelStyle}>Maximum Length:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setScaleMaximumLength1(!ScaleMaximumLength1)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ScaleMaximumLength1 && (
                          <div ref={ScaleMaximumLength1Ref} className={onClickStyle}>
                            {ScaleMaximumLengthInfo}
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
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>Show Length1:
                          <span
                            className={infoIconStyle}
                            title={HoverMsg}
                            onClick={() => setShowLength1(!ShowLength1)} // toggle tooltip on click
                          >
                            ⓘ
                          </span>
                        </span>
                        {ShowLength1 && (
                          <div ref={ShowLength1Ref} className={onClickStyle}>
                            {ScaleShowLength1Info}
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
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <span className={labelStyle}>Show Length2:
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
                            {ScaleShowLength2Info}
                          </div>
                        )}

                      </td>
                      <td>
                        <input
                          type="text"
                          value={ScaleShowLength2}
                          onChange={(e) => setScaleShowLength2(Number(e.target.value))}
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
                      <td colSpan="3">
                        <hr />
                      </td>
                    </tr>
                    <tr>

                      <td className="p-2">
                        <span className={labelStyle}>Show Length3:
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
                            {ScaleShowLength3Info}
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
                    <tr>
                      <td colSpan="3">
                        <hr />
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
