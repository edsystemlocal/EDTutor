// frontendFunctions.js

// Function to resize the canvas to fullscreen
export const resizeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

// Function to fetch points from the backend API
export const fetchPoints = async (setPointsArray) => {
  try {
    const response = await fetch('/api/points');
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Failed to fetch');

    setPointsArray(data.allPoints);
  } catch (error) {
    console.error("Error fetching points:", error);
  }
};

// Function to draw each arc without clearing the canvas and display labels
export const drawPointsWithLabels  = (ctx, currentPoints, pencilSize, pencilColor) => {
  if (currentPoints && currentPoints.length > 0) {
    ctx.beginPath();
    currentPoints.forEach((point, index) => {
      ctx.strokeStyle = point.color;
      if (point.label) {
        ctx.font = "14px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(point.label, point.labelX, point.labelY);
      } else {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }
    });
    ctx.lineWidth = pencilSize;
    ctx.strokeStyle = pencilColor;
    ctx.stroke();
  }
};

// Function to process points for arc drawing
export const getPointsForDrawing  = (points, pointIndex) => {
  let currentPoints = [];
  let pencilSize = 0.5;
  let pencilColor = '#D3D3D3';

  while (pointIndex < points.length) {
    const point = points[pointIndex];
    pointIndex += 1;

    if (point.x === 4999 && point.y === 4999) {
      pencilSize = 0.3;
      pencilColor = '#FDFDFD';
      break;
    } else if (point.x === 5000 && point.y === 5000) {
      pencilSize = 0.5;
      pencilColor = '#D3D3D3';
      break;
    } else if (point.x === 5001 && point.y === 5001) {
      pencilSize = 0.7;
      pencilColor = '#2F2F2F';
      break;
    } else if (point.x === 5002 && point.y === 5002) {
      pencilSize = 0.9;
      pencilColor = '#0A0A0A';

      break;
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
        .filter((step) => step.length > 0) // Remove empty steps
        .map((step) => `• ${step}`) // Add bullet point
        .join("\n"); // Join steps with a newline
    } else if (Array.isArray(data.steps)) {
      // Format steps if they are an array
      formattedSteps = data.steps
        .map((step) => `• ${step.trim()}`) // Add bullet point and trim
        .join("\n"); // Join steps with a newline
    } else {
      console.error("Unexpected data type for steps:", typeof data.steps);
      return null; // Return early if the type is unexpected
    }

    // Append the formatted steps to the step text
    setStepText((prevText) => 
      `${prevText }\n➽ Step ${newCounter}:\n${formattedSteps}\nz`
    );

    // Return the formatted steps for reference
    return `➽ Step ${newCounter}:\n${formattedSteps}\nz`;
  }

  // Return null if data.steps is not available
  return null;
};


// ---------------------


