"use client";
import { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { drawPointsWithLabels, getDisplayValueOfType, getPointsForDrawing, updateStepText } from "./canvasHelper";

const canvasWidth1 = 3000;
const canvasHeight1 = 3000;

// Function to resize the canvas to fullscreen
export const resizeCanvas = (canvas) => {
  if (canvas) {
    // get the width and height of the parent element of the canvas
    // set the width and height of canvas same as the width and height of the parent element
    canvas.width = canvasWidth1;
    canvas.height = canvasHeight1;
  }
};

// Main content 
export default function Canvas({ inputs, drawingType }) {

  // console.log("canvasjjjjjjj",themeSelect)
  console.log(inputs, "ooooooooooooooooooooooooooooooo")

  const [PointsArray, setPointsArray] = useState([]);
  const [counter, setCounter] = useState(0);
  const [stepText, setStepText] = useState("");
  const [isDrawing, setIsDrawing] = useState(false); // Tracks if drawing is in progress
  const [finalDrawing, setFinalDrawing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const canvasRef = useRef(null);
  const stepsContainerRef = useRef(null); // Reference to the steps container
  const drawingState = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");


    const handleResize = () => {
      resizeCanvas(canvas);
      redrawCanvas(ctx);
    };

    const resizeCanvas = (canvas) => {
      const { clientWidth, clientHeight } = canvas.parentElement;
      canvas.width = canvasWidth1;
      canvas.height = canvasHeight1;
    };

    const redrawCanvas = (ctx) => {
      drawingState.current.forEach((drawData) => {
        drawPointsWithLabels(
          ctx,
          drawData.points,
          drawData.size,
          drawData.color
        );
      });
    };

    resizeCanvas(canvas);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);






  const drawNewPoints = (newPoints, isBack = false) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let pointIndex = 0;

    setIsDrawing(true); // Set drawing in progress

    const interval = setInterval(() => {
      if (pointIndex >= newPoints.length) {
        setIsDrawing(false); // Drawing completed

        clearInterval(interval);
        return;
      }

      const {
        currentPoints,
        pencilSize,
        pencilColor,
        pointIndex: newPointIndex,
      } = getPointsForDrawing(newPoints, pointIndex);

      drawPointsWithLabels(ctx, currentPoints, pencilSize, pencilColor, isBack);

      drawingState.current.push({
        points: currentPoints,
        size: pencilSize,
        color: pencilColor,
      });

      pointIndex = newPointIndex;
    }, 100 - window.slideSpeedValue);
  };

  console.log(window.slideSpeedValue, "kkkkkkkkkkkkkkkkkkkkkkkkkkk")
  const handleNextClick = async (isFinal = false, isBack = false) => {

    let newCounter = counter;

    if (!isBack) {
      newCounter = counter + 1;
      setCounter(newCounter);
    }

    try {
      const response = await fetch("/api/next-point", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          drawingType,
          counter: newCounter,
          inputs,
          finalDrawing: isFinal, // Final Drawing flag
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send counter");
      }

      const data = await response.json();

      if (data.points) {
        setPointsArray((prevPoints) => [...prevPoints, ...data.points]);
        drawNewPoints(data.points, isBack);
      }

      const formattedText = updateStepText(data, setStepText, newCounter);

      // Scroll to the bottom of the steps container
      if (stepsContainerRef.current) {
        stepsContainerRef.current.scrollTop =
          stepsContainerRef.current.scrollHeight;
      }
    } catch (error) {
      console.error("Error sending counter:", error);
    }

    if (isBack) {
      newCounter = counter - 1;
      setCounter(newCounter);
    }

  };

  const buttonStyle =
    "px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all duration-200";


  const [zoomLevel, setZoomLevel] = useState(1);
  const handleZoom = (scaleFactor) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Update zoom level
    const newZoomLevel = zoomLevel * scaleFactor;
    setZoomLevel(newZoomLevel);

    ctx.clearRect(0, 0, canvasWidth1, canvasHeight1);
    // Apply scaling
    ctx.setTransform(newZoomLevel, 0, 0, newZoomLevel, 0, 0);

    // Redraw the canvas with the current drawing state
    drawingState.current.forEach((drawData) => {
      drawPointsWithLabels(
        ctx,
        drawData.points,
        drawData.size,
        drawData.color
      );
    });
  };

  const handleReset = () => {
    // Reset all states
    setPointsArray([]);
    setCounter(0);
    setStepText("");
    setFinalDrawing(false);
    drawingState.current = [];
    // Clear the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth1, canvasHeight1);
  };
  
  const handleSave = async () => {
    const fileName = window.prompt("Please enter a file name:");
    
    if (!fileName) {
      alert("File name is required to save the data.");
      return;
    }
  
    if (fileName.length > 40) {
      alert("File name must be at most 40 characters long.");
      return;
    }
  
    let data = {
      fileName,
      drawingType,
      inputs,
    };
  
    try {
      let response = await fetch("/api/saveUserProblem", { // ✅ FIXED PATH
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      let result = await response.json(); 
  
      if (response.ok) {
        console.log(result.message);
        alert("Data sent successfully!");
      } else {
        console.error("API Error:", result);
        alert("Failed to send data: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error details:", error);
      alert(`An error occurred: ${error.message}`);
    }
  };
  
  

  return (
    <main
      id="drawing-container"
      className="w-full p-4 bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen text-gray-700"
    >
      <div className="grid grid-cols-12 gap-4">
        {/* Left Panel */}
        <div className="col-span-4 h-136"> {/* Adjusted to col-span-4 */}
          {/* Drawing Type Section */}
          <section
            id="print-input-container"
            className="border-2 border-blue-300 bg-white shadow-lg rounded p-2 w-full flex flex-col items-center overflow-auto bg-gradient-to-r from-blue-50 to-blue-200"
            style={{ height: "30%" }}
          >
            <div className="border-2 border-blue-300 rounded p-1 mb-2 flex items-center justify-center font-bold text-blue-700">
              Drawing Type: {getDisplayValueOfType(drawingType)}
            </div>
            <div className="w-full flex items-center justify-center">
              <table>
                <tbody>
                  {Object.entries(inputs).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="font-bold">{key} :</td>
                      <td className="font-bold">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Save Button */}
            <button
              className="px-4 py-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-bold rounded-lg shadow-md hover:from-orange-500 hover:to-yellow-500 hover:shadow-lg transition-all"
              onClick={handleSave}
            >
              Save
            </button>
          </section>


          {/* Button Section */}
          <section
            id="button-container"
            className="border-2 border-blue-300 bg-white shadow-lg rounded p-4 w-full grid grid-cols-3 gap-4 "
            style={{ height: "15%" }}
          >
            {/* Clear Button */}
            <button
              onClick={() => handleReset()}
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className="fa-solid fa-eraser" title="Clear"></i>
            </button>


            {/* Back Button */}
            <button
              onClick={() => handleNextClick(false, true)}
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className="fa-solid fa-arrow-left-long" title="Back"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={() => handleNextClick()}
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className={`fas fa-arrow-right ${isDrawing ? "animate-spin" : ""}`} title="Next" />
            </button>


            {/* Zoom Out Button */}
            <button
              onClick={() => handleZoom(0.8)} // Zoom Out
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className="fa-solid fa-magnifying-glass-minus" title="Zoom Out"></i>
            </button>

            {/* Zoom In Button */}
            <button
              onClick={() => handleZoom(1.2)} // Zoom In
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className="fa-solid fa-magnifying-glass-plus" title="Zoom In"></i>
            </button>

            {/* Final Button */}
            <button
              onClick={() => handleNextClick(true)}
              disabled={isDrawing}
              className={`py-2 px-6 text-white rounded font-semibold flex items-center justify-center ${isDrawing
                ? "bg-gray-400 cursor-not-allowed"
                : buttonStyle
                }`}
            >
              <i className={`fa-solid fa-trophy ${isDrawing ? "animate-spin" : ""}`} title="Final"></i>
            </button>
          </section>


          {/* Steps Section */}
          <section
            id="print-steps-container"
            className="border-2 border-blue-300 bg-white shadow-lg rounded p-4 w-full overflow-auto whitespace-pre-wrap bg-gradient-to-r from-blue-50 to-blue-200 "
            style={{ height: "55%" }}
            ref={stepsContainerRef}
          >
            <h2 className="text-center font-semibold text-lg text-blue-700 mb-2">
              Steps
            </h2>
            <div className="w-full h-full text-gray-700">{stepText}</div>
          </section>
        </div>

        {/* Right Panel */}
        <div className={"scrollableDiv bg-yellow-100"}> {/* Adjusted to col-span-8 */}
          <section
            id="canvas-container"
            className="bg-white shadow-lg rounded flex items-center  bg-yellow-100"
          >
            <canvas ref={canvasRef} className="rounded-lg" />
          </section>
        </div>
      </div>

    </main>
  );
}
