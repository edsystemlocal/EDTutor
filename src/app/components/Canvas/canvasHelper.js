export function getDisplayValueOfType(drawingType) {
    if (drawingType === "plainScale") {
      return "Plain Scale"
    }
    if (drawingType === "diagonalScale") {
      return "Diagonal Scale"
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


//   --------------------------------------------------------------------------------------------------------------

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


// -------------------------------------------------------------------------------------------

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
// =======================================================================================

export const updateStepText = (data, setStepText, newCounter) => {
  if (data.steps) {
    console.log("Data from backend:", data);

    let formattedSteps = "";

    if (typeof data.steps === "string") {
      console.log("Single Single: " + data.steps);
      // Format the steps so that each part after a comma goes to the next line
      // formattedSteps = data.steps
      //   .split(",") // Split the string by commas
      //   .map((step) => step.trim()) // Trim each step to remove extra spaces
      //   .join("\n• "); // Join them with a newline and bullet point

        let steps1 = data.steps.split("Step");
        
        for(let i=0;i<steps1.length;i++){
          
          let steps2 = steps1[i].split(",");
          for(let j=0;j<steps2.length;j++){
          if(steps2[j].slice(0,4).includes(":")){
            let steps3 = steps2[j].split(":");
            //console.log("array Single: " + steps1);
            for(let k=0;k<steps3.length;k++){
              if(k==0){
                formattedSteps += "\n➽ Step " + steps3[k];
              } else if(k==1){
                formattedSteps += "\n•" + steps3[k];
              } else {
                formattedSteps += ":"+steps3[k];
              }
            }
          } else {
            if(steps2[j].trim() != ""){
              formattedSteps += "\n•" + steps2[j];
            }
          }
        }
        }
      // Update the step text
      //setStepText((prevText) => `${prevText}\n➽ Step ${newCounter}:\n• ${formattedSteps}`);
      setStepText(formattedSteps);
    } else if (Array.isArray(data.steps)) {
        // If steps are an array, format them appropriately
        formattedSteps = data.steps
          .map((step) => `• ${step.trim()}`) // Add bullet point and trim each step
          .join("\n"); // Join all steps with a newline
  
        // Update the step text
        setStepText((prevText) => `${prevText}\n➽ Step ${newCounter}:\n${formattedSteps}\n`);
      
    }
    else {
      console.error("Unexpected data type for steps:", typeof data.steps);
    }

    // Return the formatted steps
    return formattedSteps;
  }

  // Return null if data.steps is not available
  return null;
};
// ===============================================================