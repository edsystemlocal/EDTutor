"use client";
import { useEffect, useRef, useState } from "react";
import PrintInput from "../Print-Input/print-input";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Function to resize the canvas to fullscreen
export const resizeCanvas = (canvas) => {
  if (canvas) {
    // get the width and height of the parent element of the canvas
    // set the width and height of canvas same as the width and height of the parent element
    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = canvas.parentElement?.clientHeight || 300;
  }
};

// Function to draw each arc without clearing the canvas and display labels
export const drawPointsWithLabels = (
  ctx,
  currentPoints,
  pencilSize,
  pencilColor,
  isBack = false
) => {
  if (currentPoints && currentPoints.length > 0) {
    ctx.beginPath();
    let previousPoint = null;
    currentPoints.forEach((point, index) => {
      if (point.label) {
        ctx.font = "14px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(point.label, point.labelX, point.labelY);
      } else {
        if (index === 0) {
          if (isBack) {
            if (point.x < 4990) {
              ctx.moveTo(point.x, point.y);
              ctx.clearRect(point.x - 1, point.y - 1, 2, 2);
            }
          } else {
            ctx.moveTo(point.x, point.y);
          }
        } else {
          if (isBack) {
            if (point.x < 4990) {
              ctx.clearRect(point.x - 1, point.y - 1, 2, 2);
              if (previousPoint != null && previousPoint.x < point.x - 2) {
                ctx.clearRect(point.x - 4, point.y - 1, 2, 2);
              }
              if (previousPoint != null && previousPoint.x < point.x - 4) {
                ctx.clearRect(point.x - 6, point.y - 1, 2, 2);
              }
            }
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }
      }
      previousPoint = point;
    });
    ctx.lineWidth = pencilSize;
    ctx.strokeStyle = pencilColor;
    ctx.stroke();
  }
};

export const getPointsForDrawing = (points, pointIndex) => {
  let currentPoints = [];
  let pencilSize = 0.5;
  let pencilColor = "#D3D3D3";

  const themeSelect = window.selectedDropdownValue || "theme_colorful"; // Default to Option_1 if not set

  console.log("kkkkkkkkkkkkkkk", themeSelect)

  while (pointIndex < points.length) {
    const point = points[pointIndex];
    pointIndex += 1;

    if (themeSelect === "theme_colorful") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        //pencilColor = "#6A0DAD"; // Royal Purple (Dark and Elegant)
        pencilColor = "red";
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        //pencilColor = "#8B0000"; // Dark Red (Bold and Rich)
        pencilColor = "#64B5F6";
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 2;
        pencilColor = "#8B0000"; // Navy Blue (Strong and Dark)
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#FF4500"; // Burnt Orange (Vivid and Striking)
        break;
      }
    } else if (themeSelect === "theme_b_and_w") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#FDFDFD";
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#D3D3D3";
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "black";
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#0A0A0A";
        break;
      }
    }
    else if (themeSelect === "theme_red") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#FF0000"; // Bright red
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#E60000"; // Dark red
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#FF3333";
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#CC0000";
        break;
      }
    }
    else if (themeSelect === "classic_grayscale") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#EAEAEA"; // Very light gray
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#BEBEBE"; // Light gray
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#808080"; // Medium gray
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#404040"; // Dark gray
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#000000"; // Pure black
        break;
      }
    }

    else if (themeSelect === "sunset_glow") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#FFE4B5"; // Light peach
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#FFB74D"; // Soft orange
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#FF8A65"; // Coral
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#D84315"; // Burnt orange
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#4E342E"; // Deep brown
        break;
      }
    }
    else if (themeSelect === "ocean_blues") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#E0F7FA"; // Light cyan
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#81D4FA"; // Sky blue
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#0288D1"; // Medium blue
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#01579B"; // Deep blue
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#002171"; // Navy blue
        break;
      }
    }
    else if (themeSelect === "forest_shades") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#E8F5E9"; // Pale green
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#A5D6A7"; // Mint green
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#66BB6A"; // Vibrant green
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#388E3C"; // Forest green
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#1B5E20"; // Deep green
        break;
      }
    }
    else if (themeSelect === "sunny_days") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#FFF9C4"; // Light yellow
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#FFECB3"; // Soft gold
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#FFD54F"; // Bright yellow
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#FFB300"; // Golden yellow
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#FF6F00"; // Deep orange
        break;
      }
    }

    else if (themeSelect === "modern_neutrals") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "#F5F5F5"; // Light gray (almost white)
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "#D3D3D3"; // Medium light gray
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "#A9A9A9"; // Neutral gray
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "#696969"; // Dark gray
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "#2F4F4F"; // Charcoal gray
        break;
      }
    }
    if (themeSelect === "purple_rain") {
      if (point.x === 4999 && point.y === 4999) {
        pencilSize = 0.5;
        pencilColor = "rgb(204, 153, 255)"; // Light Lavender
        break;
      } else if (point.x === 5000 && point.y === 5000) {
        pencilSize = 0.8;
        pencilColor = "rgb(186, 104, 200)"; // Lavender Magenta
        break;
      } else if (point.x === 5001 && point.y === 5001) {
        pencilSize = 1;
        pencilColor = "rgb(155, 89, 182)"; // Amethyst
        break;
      } else if (point.x === 5002 && point.y === 5002) {
        pencilSize = 1.2;
        pencilColor = "rgb(138, 43, 226)"; // Blue Violet
        break;
      } else if (point.x === 5003 && point.y === 5003) {
        pencilSize = 1.5;
        pencilColor = "rgb(75, 0, 130)"; // Indigo
        break;
      }
    }
    
    currentPoints.push(point);
  }
  return { currentPoints, pencilSize, pencilColor, pointIndex };
};

export const updateStepText = (data, setStepText, newCounter) => {
  if (data.steps) {
    console.log("Data from backend:", data);

    let formattedSteps = "";

    if (typeof data.steps === "string") {
      // Format the steps so that each part after a comma goes to the next line
      formattedSteps = data.steps
        .split(",") // Split the string by commas
        .map((step) => step.trim()) // Trim each step to remove extra spaces
        .join("\n• "); // Join them with a newline and bullet point

      // Update the step text
      setStepText((prevText) => `${prevText}\n➽ Step ${newCounter}:\n• ${formattedSteps}`);
    } else if (Array.isArray(data.steps)) {
      // If steps are an array, format them appropriately
      formattedSteps = data.steps
        .map((step) => `• ${step.trim()}`) // Add bullet point and trim each step
        .join("\n"); // Join all steps with a newline

      // Update the step text
      setStepText((prevText) => `${prevText}\n➽ Step ${newCounter}:\n${formattedSteps}\n`);
    } else {
      console.error("Unexpected data type for steps:", typeof data.steps);
    }

    // Return the formatted steps
    return `➽ Step ${newCounter}:\n${formattedSteps}`;
  }

  // Return null if data.steps is not available
  return null;
};

// Main content 
export default function Canvas({ inputs, drawingType }) {

  // console.log("canvasjjjjjjj",themeSelect)
    console.log(inputs,"ooooooooooooooooooooooooooooooo")
    
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
      canvas.width = clientWidth;
      canvas.height = clientHeight;
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
    }, window.slideSpeedValue);
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

    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  };

  function getDisplayValueOfType(drawingType){
    if (drawingType === "plainScale") {
          return "Plain Scale"
        } 
    if (drawingType === "plane") {
      return "Plain"
    } 
        if (drawingType === "bisectLine") {
          return "Bisect Line"
        }
        if (drawingType === "point") {
          return "Point"
        }
        if (drawingType === "parallelToHP") {
          return "Parallel To HP"
        }
        if (drawingType === "parallelToVP") {
          return "Parallel To VP"
        }
        if (drawingType === "parallelToBoth") {
          return "Parallel To Both"
        }
        if (drawingType === "parallelToHPAndInclinationToVP") {
          return "Parallel To HP And Inclination To VP"
        }
        if (drawingType === "parallelToVPAndInclinationToHP") {
          return "Parallel To VP And Inclination To HP"
        }
        if (drawingType === "inclinationToBoth") {
          return "Inclination To Both"
        }
        if (drawingType === "perpendicularToHP") {
          return "Perpendicular To HP"
        }
        if (drawingType === "perpendicularToVP") {
          return "Perpendicular To VP"
        }
        if (drawingType === "projectionOfLine_3") {
          return "Projection Of Line 3"
        }
        if (drawingType === "projectionOfLine_4") {
          return "Projection Of Line 4"
        }
        if (drawingType === "ellipseGeneralMethod") {
          return "Ellipse General Method"
        }
        if (drawingType === "ellipseConcentricCircleMethod") {
          return "Ellipse Concentric Circle Method"
        }
        if (drawingType === "parabolaTangentMethod") {
          return "Parabola Tangent Method"
        }
        if (drawingType === "parabolaRectangularMethod") {
          return "Parabola Rectangular Method"
        }
        if (drawingType === "parabolaParallelogramMethod") {
          return "Parabola Parallelogram Method"
        }  
        if (drawingType === "parabolaGeneralMethod") {
          return "Parabola General Method"
        }
        if (drawingType === "hyperbolaGeneralMethod") {
          return "Hyperbola General Method"
        }
        if (drawingType === "solid") {
          return "Solid"
        }
    
        if (drawingType === "cycloid") {
          return "Cycloid"
        }
        if (drawingType === "hypocycloid") {
          return "Hypocycloid"
        }
        if (drawingType === "epicycloid") {
          return "Epicycloid"
        }
        if (drawingType === "Involute") {
          return "Involute"
        }
        if (drawingType === "scaleOfChords") {
          return "Scale Of Chords"
        }
        if (drawingType === "angleInScaleOfChords") {
          return "Angle In Scale Of Chords"
        }
        
        return "";
  }

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
            className="border-2 border-blue-300 bg-white shadow-lg rounded p-2 w-full flex flex-col items-center overflow-auto bg-gradient-to-r from-blue-50 to-blue-200 "
            style={{ height: "30%" }}
          >
            <div className="border-2 border-blue-300 rounded p-1 mb-2 flex items-center justify-center font-bold text-blue-700 ">
              Drawing Type: {getDisplayValueOfType(drawingType)}
            </div>
            <div className="w-full flex items-center justify-center">
              <table className="">
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
        <div className="col-span-8"> {/* Adjusted to col-span-8 */}
          <section
            id="canvas-container"
            className="border-2 border-blue-300 bg-white shadow-lg rounded flex items-center justify-center w-full h-136 bg-yellow-100 "
          >
            <canvas ref={canvasRef} className="rounded-lg" />
          </section>
        </div>
      </div>

    </main>
  );
}





