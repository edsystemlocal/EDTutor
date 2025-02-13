import {
  darkPencil,
  endPoint,
  lightPencil,
  numPoints,
  startPoint,
  superDarkPencil,
} from "./globalVariable";

// src/utils/functionHelpers.js
export function calculateDashLinePoints(startPoint, endPoint, pencil=lightPencil) {
  const points = [];
  var leaveBlank = 0;
  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  // Determine the step size for x and y
  const xStep = deltaX / (numPoints - 1);
  const yStep = deltaY / (numPoints - 1);

  // Generate points with blanks alternating after each point
  for (let i = 0; i < numPoints; i++) {
    leaveBlank = leaveBlank + 1;

    if (leaveBlank < 8 && leaveBlank > 5) {
      if (leaveBlank == 6) {
        points.push(...pencil);
      }
    } else {
      if (leaveBlank > 8) {
        leaveBlank = 0;
      }
      points.push({
        x: startPoint.x + i * xStep,
        y: startPoint.y + i * yStep,
      });
    }
  }
  points.push(...pencil);
  return points;
}

// src/utils/functionHelpers.js
export function calculateAxisDashLinePoints(startPoint, endPoint, pencil=lightPencil) {
  const points = [];
  var leaveBlank = 0;
  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  // Determine the step size for x and y
  const xStep = deltaX / (numPoints - 1);
  const yStep = deltaY / (numPoints - 1);

  // Generate points with blanks alternating after each point
  for (let i = 0; i < numPoints; i++) {
    leaveBlank = leaveBlank + 1;

    if (leaveBlank < 8 && leaveBlank > 3) {
      console.log("leaveBlank: ", leaveBlank);
      if (leaveBlank === 4) {
        points.push(...pencil);
      }
      if (leaveBlank === 7) {
        points.push(...pencil);
      }
      if (leaveBlank === 6 || leaveBlank === 5) {
        points.push({
          x: startPoint.x + i * xStep,
          y: startPoint.y + i * yStep,
        });
      }
    } else {
      if (leaveBlank > 12) {
        leaveBlank = 0;
      }
      points.push({
        x: startPoint.x + i * xStep,
        y: startPoint.y + i * yStep,
      });
    }
  }
  points.push(...pencil);
  return points;
}

// --------------------------------------------------------------------------

// Function to generate points for a circle around a given point
export function getCirclePoints(center, radius = 1) {
  const circlePoints = [
    { x: center.x + radius, y: center.y }, // 0°
    { x: center.x + radius * 0.7, y: center.y + radius * 0.7 }, // 45°
    { x: center.x, y: center.y + radius }, // 90°
    { x: center.x - radius * 0.7, y: center.y + radius * 0.7 }, // 135°
    { x: center.x - radius, y: center.y }, // 180°
    { x: center.x - radius * 0.7, y: center.y - radius * 0.7 }, // 225°
    { x: center.x, y: center.y - radius }, // 270°
    { x: center.x + radius * 0.7, y: center.y - radius * 0.7 }, // 315°
    { x: center.x + radius, y: center.y }, // Closing the circle
  ];
  // circlePoints.push(...darkPencil);

  return [...circlePoints];
}
// ---------------------------------------------------------------------------------------

// --------------------------------------------------------
export function drawXYaxis() {
  // Calculate main line points
  const mainLinePoints = calculateLinePointsWithCircles(startPoint, endPoint);

  // Label the start and end points
  const labeledStartPoint = calculateLabel(startPoint, "X", "left");
  const labeledEndPoint = calculateLabel(endPoint, "Y", "right");

  const xyaxis = [
    ...labeledStartPoint,
    ...mainLinePoints,
    ...superDarkPencil,
    ...labeledEndPoint,
  ];

  return xyaxis;
}

// -----------------------------------------------------------------------
export function calculateSlope(startPoint, endPoint) {
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  if (deltaX === 0) {
    return null; // Slope is undefined for vertical lines
  }

  return deltaY / deltaX; // Calculate and return the slope
}

//   ------------------------------------------------------------------------------------------

//2) src/utils/functionHelpers.js/calculateAngle function
export function calculateAngle(startPoint, endPoint) {
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  const angleInRadians = Math.atan2(deltaY, deltaX);
  return angleInRadians;
}

export function calculateAngleInDegrees(startPoint, endPoint) {
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  const angleInRadians = Math.atan2(deltaY, deltaX);
  const angleInDegree = angleInRadians * (180 / Math.PI);
  return angleInDegree;
}
// export function calculateAngleInDegrees(startPoint, endPoint) {
//   const deltaX = endPoint.x - startPoint.x;
//   const deltaY = endPoint.y - startPoint.y;
//   const angleInRadians = Math.atan2(deltaY, deltaX); // atan2 considers all quadrants
//   const angleInDegrees = angleInRadians * (180 / Math.PI);
//   return angleInDegrees < 0 ? angleInDegrees + 360 : angleInDegrees; // Normalize to 0-360°
// }
// ----------------------------------------------------------------------------------------------
//3) src/utils/functionHelpers.js/calculateArcPoints function

// Function to calculate the distance between two points
export function calculateDistance(startPoint, endPoint) {
  const dx = Math.abs(endPoint.x - startPoint.x);
  const dy = Math.abs(endPoint.y - startPoint.y);
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to calculate the adjusted arc radius
export function calculateArcRadius(startPoint, endPoint) {
  const distance = calculateDistance(startPoint, endPoint);
  return distance;
}

// Function to calculate arc points with automatic radius calculation
export function calculateArcPoints(startPoint1, endPoint1, pencil=lightPencil) {
  // Calculate the radius within the function
  const radius = calculateArcRadius(startPoint1, endPoint1);
  // Calculate the angle between start and end points
  const angle = calculateAngle(startPoint1, endPoint1);
  // Set the angle range to a fixed range around the calculated angle
  
  let startAngle = angle - 0.25;
  let endAngle = angle + 0.25;
  if(radius>50 && radius<=100){
    startAngle = angle - 0.20;
    endAngle = angle + 0.20;
  } else if(radius>100 && radius<=150){
    startAngle = angle - 0.15;
    endAngle = angle + 0.15;
  } else if(radius>150 && radius<=200){
    startAngle = angle - 0.1;
    endAngle = angle + 0.1;
  } else if(radius>200){
    startAngle = angle - 0.05;
    endAngle = angle + 0.05;
  }

  // Generate arc points within the specified angle range
  const arcPoints = [];  
  arcPoints.push(...pencil);
  let startPoint2 = {
    x: startPoint1.x + radius * Math.cos(startAngle),
    y: startPoint1.y + radius * Math.sin(startAngle)
  };
  for (let i = 0; i < numPoints; i++) {
    arcPoints.push(startPoint2);
    const theta = startAngle + ((endAngle - startAngle) * i) / numPoints;
    const x = startPoint1.x + radius * Math.cos(theta);
    const y = startPoint1.y + radius * Math.sin(theta);
    startPoint2 = {x,y};
    arcPoints.push(startPoint2);
    arcPoints.push(...pencil);    
  }
  arcPoints.push(...getCirclePoints(endPoint1,1), ...darkPencil);
  return arcPoints;
}
// -------------------------------------------------------------------------------------------

//4) src/utils/functionHelpers.js/calculateHypotenuse function

export function calculateHypotenuse(base, height) {
  return Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
}

export function calculateHeight(hypotenuse, base) {
  return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(base, 2));
}

export function calculateBase(hypotenuse, height) {
  return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(height, 2));
}

// // Function to calculate the distance between two points
// export const calculateDistance = (point1, point2) => {
//     const dx = point2.x - point1.x;
//     const dy = point2.y - point1.y;
//     return Math.sqrt(dx * dx + dy * dy);
//   };

//   // Function to calculate the adjusted arc radius
// export const calculateArcRadius = (startPoint, endPoint) => {
//     const distance = calculateDistance(startPoint, endPoint);
//     return (2 / 3) * distance;
//   };
// -----------------------------------------------------------------------------------------

//5) src/utils/functionHelpers.js/bisectionLine function

export function calculateBisectionLine(startPoint, endPoint) {
  // Calculate midpoint for the bisection line
  const midPoint = {
    x: (startPoint.x + endPoint.x) / 2,
    y: (startPoint.y + endPoint.y) / 2,
  };

  // Calculate the slope of the main line
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  // Check if the line is vertical to avoid division by zero
  let perpendicularSlope;
  if (deltaY === 0) {
    // Main line is horizontal, so perpendicular line should be vertical
    perpendicularSlope = null;
  } else if (deltaX === 0) {
    // Main line is vertical, so perpendicular line should be horizontal
    perpendicularSlope = 0;
  } else {
    perpendicularSlope = -deltaX / deltaY;
  }

  // Define length for the bisection line
  const distance = calculateHypotenuse(deltaX, deltaY); // Hypotenuse (distance) between start and end points
  const hype = (2 / 3) * distance;
  const base = deltaX / 2;
  const height = calculateHeight(hype, base); // Calculate height using the new function

  // Calculate the bisection line endpoints based on perpendicular direction
  let bisectionStartPoint, bisectionEndPoint;
  if (perpendicularSlope === null) {
    // Vertical bisection line
    bisectionStartPoint = { x: midPoint.x, y: midPoint.y - height };
    bisectionEndPoint = { x: midPoint.x, y: midPoint.y + height };
  } else {
    // Calculate based on the perpendicular slope
    bisectionStartPoint = { x: midPoint.x, y: midPoint.y - height };
    bisectionEndPoint = { x: midPoint.x, y: midPoint.y + height };
  }

  return { bisectionStartPoint, bisectionEndPoint };
}

// ---------------------------------------------------------------------------------------------

//6) src/utils/functionHelpers.js/angleUtils function
// Function to convert degrees to radians
export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Function to calculate start and end points for an angled line
export function calculateAngledLinePoints(
  startPoint,
  angleInDegrees,
  lineLength
) {
  const angleInRadians = degreesToRadians(angleInDegrees);

  const angledEndPoint = {
    x: startPoint.x + lineLength * Math.cos(angleInRadians),
    y: startPoint.y - lineLength * Math.sin(angleInRadians),
  };

  return angledEndPoint;
}

//   -------------------------------------------

//7) Helper function to calculate label position based on alignment
export function calculateLabel(point, label, alignment) {
  let labelX = point.x;
  let labelY = point.y;
  // Adjust label position based on alignment
  switch (alignment) {
    case "up":
      labelY -= 10; // Adjust Y upwards
      break;
    case "down":
      labelY += 20; // Adjust Y downwards
      break;
    case "left":
      labelX -= 12; // Adjust X to the left
      break;
    case "right":
      labelX += 2; // Adjust X to the right
      break;
    case "left-up":
      labelX -= 12; // Adjust X to the left
      labelY -= 5; // Adjust Y further upwards
      break;
    case "left-down":
      // If label has more than one character, adjust further to the left
      labelX -= 12;
      labelY += 12; // Adjust Y downwards
      break;
    case "right-up":
      labelX += 5; // Adjust X to the right
      labelY -= 5; // Adjust Y upwards
      break;
    case "right-down":
      labelX += label.length > 1 ? 3 : 12;
      labelY += 10; // Adjust Y downwards
      break;
    case "exact":
      labelX -= 4;
      labelY += 4; // Adjust Y downwards
      break;
    case "End-Start":
      labelX -= label.length * 9;
      console.log("label lenght" + label.length);
      labelY += 20; // Adjus// Adjust Y downwards
      break;
    default:
      break; // No adjustment if no alignment is specified
  }
  return [{ ...point, label, labelX, labelY }];
}

export function drawPointWithArrow(pointStartPoint, pointEndPoint, position, pointLabel, arrowLabel, pencil = lightPencil) {
  const sendToPoints = [];
  
  let pointLabelCal; 
  if(pointEndPoint.y < startPoint.y){
    if(position=="left"){
      pointLabelCal = calculateLabel(pointEndPoint, pointLabel, "left-up");
    } else if(position == "right"){
      pointLabelCal = calculateLabel(pointEndPoint, pointLabel, "right-up");
    } else {
      pointLabelCal = calculateLabel(pointEndPoint, pointLabel, position);
    }
  } else {    
      if(position=="left"){
        pointLabelCal = calculateLabel(pointEndPoint, pointLabel, "left-down");
      } else if(position == "right"){
        pointLabelCal = calculateLabel(pointEndPoint, pointLabel, "right-down");
      } else {
        pointLabelCal = calculateLabel(pointEndPoint, pointLabel, position);
      }    
  }
  
  sendToPoints.push(
    ...calculateLinePointsWithCircles(pointStartPoint, pointEndPoint, pencil),
    ...pointLabelCal    
  );

  if(pointEndPoint.y != startPoint.y){
    sendToPoints.push(
      ...drawPerpendicularArrow(pointStartPoint, pointEndPoint, position, arrowLabel)
    );
  }
  return sendToPoints;
}
//   ------------------------------------------------------
// Function to calculate arrow position based on direction
//   export function calculateDirection(startPoint, endPoint, distanceFromEnd = 20) {
//     // Calculate the angle of the line
//     const dx = endPoint.x - startPoint.x;
//     const dy = endPoint.y - startPoint.y;
//     const angle = Math.atan2(dy, dx);

//     // Calculate arrow position slightly back from the endpoint to show direction
//     const arrowX = endPoint.x - distanceFromEnd * Math.cos(angle);
//     const arrowY = endPoint.y - distanceFromEnd * Math.sin(angle);

//     // Return arrow point with angle for drawing arrowhead
//     return {
//       x: arrowX,
//       y: arrowY,
//       angle: angle,
//       type: "arrow", // Type to identify arrow points
//     };
//   }

// -----------------------------------------------------------------------

// Function to calculate the hypotenuse using the base and angle
export function calculateHypotenuseWithAngle(base, angleInDegrees) {
  const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert angle to radians
  const hypotenuse = base / Math.cos(angleInRadians); // Calculate hypotenuse
  return hypotenuse;
}

// height=hypotenuse×sin(angle)
export function calculateHeightFromHypotenuse(hypotenuse, angleInDegrees) {
  const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert to radians
  const height = hypotenuse * Math.sin(angleInRadians);
  return height;
}

// base=hypotenuse×cos(angle)
export function calculateBaseFromHypotenuse(hypotenuse, angleInDegrees) {
  const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert to radians
  const base = hypotenuse * Math.cos(angleInRadians);
  return base;
}
// height=base×tan(angle)
export function calculateHeightFromBase(base, angleInDegrees) {
  const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert to radians
  const height = base * Math.tan(angleInRadians);
  return height;
}

// angle=arcsin(height/ hypotenuse)
export function calculateAngleFromHeightAndHypotenuse(height, hypotenuse) {
  const angleInRadians = Math.asin(height / hypotenuse);
  const angleInDegrees = angleInRadians * (180 / Math.PI); // Convert to degrees
  return angleInDegrees;
}

// --------------------------------------------------------------------------------

export function calculateDirection(startPoint, endPoint) {
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  if (deltaX === 0 && deltaY === 0) {
    return "The line is a point, as start and end points are the same.";
  }

  if (deltaX === 0) {
    return deltaY > 0
      ? "The line is vertical pointing upwards."
      : "The line is vertical pointing downwards.";
  }

  if (deltaY === 0) {
    return deltaX > 0
      ? "The line is horizontal pointing to the right."
      : "The line is horizontal pointing to the left.";
  }

  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  if (angle > 0) {
    return `The line is angled at ${angle.toFixed(
      2
    )} degrees above the horizontal.`;
  } else {
    return `The line is angled at ${Math.abs(angle).toFixed(
      2
    )} degrees below the horizontal.`;
  }
}

// -----------------------------------------------------------------------------

export function drawQuarterCircle(startPoint, startAngle, endAngle, radius) {
  const points = [];
  // Convert angles from degrees to radians
  const startAngleRad = (Math.PI / 180) * startAngle;
  const endAngleRad = (Math.PI / 180) * endAngle;
  // Dynamically calculate the number of points based on radius for smoothness
  const numPoints = Math.max(10, Math.floor(radius / 2)); // Minimum of 10 points for small circles
  // Calculate the angle increment based on the number of points
  const angleIncrement = (endAngleRad - startAngleRad) / numPoints;
  // Generate points along the arc of the quarter circle
  for (let i = 0; i <= numPoints; i++) {
    const angle = startAngleRad + i * angleIncrement;
    const x = startPoint.x + radius * Math.cos(angle);
    const y = startPoint.y - radius * Math.sin(angle);
    points.push({ x, y });
  }
  return points;
}

//   -------------------------------------------------

// Function to define and return steps dynamically
export function defineSteps(...steps) {
  return steps; // Return all the steps as an array
}


// --------------------------------------------------

// Function to calculate line points and add circles at start and end points
export function calculateLinePointsWithCircles1(startPoint, endPoint) {
  const points = [];

  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;

  // Determine the step size for x and y
  const xStep = deltaX / (numPoints - 1);
  const yStep = deltaY / (numPoints - 1);

  // Generate points along the line
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: startPoint.x + i * xStep,
      y: startPoint.y + i * yStep,
    });
  }

  // Add circles at the start and end points
  const startCirclePoints = getCirclePoints(startPoint); // Circle with radius 1 at startPoint
  const endCirclePoints = getCirclePoints(endPoint); // Circle with radius 1 at endPoint

  return [...startCirclePoints, ...points, ...endCirclePoints];
}
// --------------------------
export function calculateLinePointsWithCircles(startPoint, endPoint,pencil=darkPencil) {
  const points = [];
  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  // Determine the step size for x and y
  const xStep = deltaX / (numPoints - 1);
  const yStep = deltaY / (numPoints - 1);
  let startPoint1 = startPoint;
  let speed = 1;
  if(pencil == lightPencil){
    speed = 8;
  }
  if(pencil == darkPencil){
    speed = 4;
  }
  let speedChecker = 0;
  // Generate points along the line
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: startPoint1.x,
      y: startPoint1.y
    });
    startPoint1 = {
      x: startPoint.x + i * xStep,
      y: startPoint.y + i * yStep,
    }
    points.push(startPoint1);
    if(speedChecker>=speed){
      points.push(...pencil);
      speedChecker = 0;
    }
    speedChecker ++;    
  }
  points.push(...pencil);
  // Add circles at the start and end points
  const startCirclePoints = getCirclePoints(startPoint); // Circle with radius 1 at startPoint
  const endCirclePoints = getCirclePoints(endPoint); // Circle with radius 1 at endPoint
  return [...startCirclePoints, ...darkPencil, ...points, ...endCirclePoints, ...darkPencil];
}


// --------------------------------------------



export function calculateLinePointsWithCircles2(startPoint, endPoint) {
  const points = [];
  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  // Determine the step size for x and y
  const xStep = deltaX / (numPoints - 1);
  const yStep = deltaY / (numPoints - 1);
  // Generate points along the line
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: startPoint.x + i * xStep,
      y: startPoint.y + i * yStep,
    });
  }
  // Add circles at the start and end points
  const startCirclePoints = getCirclePoints(startPoint); // Circle with radius 1 at startPoint
  const endCirclePoints = getCirclePoints(endPoint); // Circle with radius 1 at endPoint
  return [...startCirclePoints, ...points, ...endCirclePoints];
}

export function GenerateFullCircle(center, radius) {
  const numPoints = 361; // Total points for the circle
  const circlePoints = [];
  let startPoint1 = {};
  for (let i = 0; i < numPoints; i++) {

      if(startPoint1!=null){      
          const angle = (i * Math.PI) / 180; // Convert degrees to radians
          const x1 = center.x + radius * Math.cos(angle);
          const y1 = center.y + radius * Math.sin(angle);      
          circlePoints.push({
              x: startPoint1.x,
              y: startPoint1.y
            });
            startPoint1 = {x: x1,y: y1}
            circlePoints.push(startPoint1);
            circlePoints.push(...darkPencil);
      } else {
          const angle = (i * Math.PI) / 180; // Convert degrees to radians
          startPoint1 = {
              x: center.x + radius * Math.cos(angle),
              y: center.y + radius * Math.sin(angle)
          }
      }
      
  }


  
  return circlePoints;
}


// --------------------------------

export function drawPerpendicularArrow(verticalStartPointUp, verticalEndPointUp, position, label) {
  let sendToPoints = [];
  let distance = 15;
  let arrowHeadSize = 5;
  let labelSide = 15;
  if(position == "right"){
    distance = -15;
    labelSide = -5;
  }
  
  let adjustedStartPointUp = {x: verticalStartPointUp.x - distance, y: verticalStartPointUp.y};
  let adjustedEndPointUp = {x: verticalEndPointUp.x - distance, y: verticalEndPointUp.y};
  let arrowHeadEndPoint = [];
  if(verticalStartPointUp.y > verticalEndPointUp.y){
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x - arrowHeadSize, y: adjustedEndPointUp.y + arrowHeadSize});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x + arrowHeadSize, y: adjustedEndPointUp.y + arrowHeadSize});
  } else {
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x - arrowHeadSize, y: adjustedEndPointUp.y - arrowHeadSize});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x + arrowHeadSize, y: adjustedEndPointUp.y - arrowHeadSize});
  }
  let arrowHeadStartPoint = [];
  if(verticalStartPointUp.y > verticalEndPointUp.y){
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x - arrowHeadSize, y: adjustedStartPointUp.y - arrowHeadSize});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x + arrowHeadSize, y: adjustedStartPointUp.y - arrowHeadSize});
  } else {
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x - arrowHeadSize, y: adjustedStartPointUp.y + arrowHeadSize});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x + arrowHeadSize, y: adjustedStartPointUp.y + arrowHeadSize});
  }
  
  sendToPoints.push(
    ...lightPencil,
    ...[adjustedStartPointUp, adjustedEndPointUp], ...lightPencil,    
    ...arrowHeadEndPoint, ...lightPencil,    
    ...arrowHeadStartPoint, ...lightPencil,
    
  );

  let arrowLabel;
  if(position=="left"){
    arrowLabel = calculateLabel({x: verticalStartPointUp.x - 20, y: verticalStartPointUp.y-((verticalStartPointUp.y - verticalEndPointUp.y)/2)} ,label, position);
    sendToPoints.push(...arrowLabel);
  } else if(position=="right"){
    arrowLabel = calculateLabel({x: verticalStartPointUp.x + 10 , y: verticalStartPointUp.y-((verticalStartPointUp.y - verticalEndPointUp.y)/2)} ,label, position);
    sendToPoints.push(...arrowLabel, ...lightPencil);
  } else {
    arrowLabel = calculateLabel({x: verticalStartPointUp.x, y: verticalStartPointUp.y-((verticalStartPointUp.y - verticalEndPointUp.y)/2)} ,label, "right");
    sendToPoints.push(...arrowLabel, ...lightPencil);
  }
 
  return sendToPoints;
}
export function drawParallelArrow(verticalStartPointUp, verticalEndPointUp, position , label) {
  let sendToPoints = [];
  let distance = 15;
  let arrowHeadSize = 5;
  let labelSide = 15;
  if(position == "down"){
    distance = -15;
    labelSide = -10;
  }  
  let adjustedStartPointUp = {x: verticalStartPointUp.x, y: verticalStartPointUp.y - distance};
  let adjustedEndPointUp = {x: verticalEndPointUp.x, y: verticalEndPointUp.y - distance};
  let arrowHeadEndPoint = [];
  if(verticalStartPointUp.x > verticalEndPointUp.x){
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x + arrowHeadSize, y: adjustedEndPointUp.y - arrowHeadSize});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x + arrowHeadSize, y: adjustedEndPointUp.y + arrowHeadSize});
  } else {
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x - arrowHeadSize, y: adjustedEndPointUp.y - arrowHeadSize});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: adjustedEndPointUp.x - arrowHeadSize, y: adjustedEndPointUp.y + arrowHeadSize});
  }
  let arrowHeadStartPoint = [];
  if(verticalStartPointUp.y > verticalEndPointUp.y){
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x - arrowHeadSize, y: adjustedStartPointUp.y - arrowHeadSize});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x - arrowHeadSize, y: adjustedStartPointUp.y + arrowHeadSize});
  } else {
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x + arrowHeadSize, y: adjustedStartPointUp.y - arrowHeadSize});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: adjustedStartPointUp.x + arrowHeadSize, y: adjustedStartPointUp.y + arrowHeadSize});
  }
  sendToPoints.push(
    ...lightPencil,
    ...[adjustedStartPointUp, adjustedEndPointUp], ...lightPencil,    
    ...arrowHeadEndPoint, ...lightPencil,    
    ...arrowHeadStartPoint, ...lightPencil,
    ...calculateLabel({x: verticalStartPointUp.x + Math.abs((verticalStartPointUp.x - verticalEndPointUp.x)/4), y: verticalStartPointUp.y - labelSide} ,label, position )
  );
  
  
  return sendToPoints;
}

export function drawInclinedArrow(verticalStartPointUp, verticalEndPointUp, position , label) {
  let sendToPoints = [];
  let distance = 15;
  let arrowHeadSize = 5;
  let labelSide = 15;
  if(position == "down"){
    distance = -15;
    labelSide = -20;
  }  
  let adjustedStartPointUp = {x: verticalStartPointUp.x - distance, y: verticalStartPointUp.y};
  let adjustedEndPointUp = {x: verticalEndPointUp.x - distance, y: verticalEndPointUp.y};
  let linePoints = calculateLinePointsWithCircles(adjustedStartPointUp, adjustedEndPointUp);
  let arrowHeadEndPoint = [];
  let i = 30;
  if(verticalStartPointUp.x > verticalEndPointUp.x){    
    arrowHeadEndPoint.push({x: linePoints[linePoints.length - i].x - arrowHeadSize, y: linePoints[linePoints.length - i].y});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: linePoints[linePoints.length - i].x + arrowHeadSize, y: linePoints[linePoints.length - i].y});
  } else {
    arrowHeadEndPoint.push({x: linePoints[linePoints.length - i].x - arrowHeadSize, y: linePoints[linePoints.length - i].y});
    arrowHeadEndPoint.push(adjustedEndPointUp);
    arrowHeadEndPoint.push({x: linePoints[linePoints.length - i].x + arrowHeadSize, y: linePoints[linePoints.length - i].y});
  }
  let arrowHeadStartPoint = [];
  if(verticalStartPointUp.y > verticalEndPointUp.y){
    arrowHeadStartPoint.push({x: linePoints[i].x - arrowHeadSize, y: linePoints[i].y});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: linePoints[i].x + arrowHeadSize, y: linePoints[i].y});
  } else {
    arrowHeadStartPoint.push({x: linePoints[i].x - arrowHeadSize, y: linePoints[i].y});
    arrowHeadStartPoint.push(adjustedStartPointUp);
    arrowHeadStartPoint.push({x: linePoints[i].x + arrowHeadSize, y: linePoints[i].y});
  }
  let labelX = Math.abs((verticalStartPointUp.x - verticalEndPointUp.x)/6);
  if(labelX===0){
    labelX = -5;
  }
  sendToPoints.push(
    ...lightPencil,
    ...[adjustedStartPointUp, adjustedEndPointUp], ...lightPencil,    
    ...arrowHeadEndPoint, ...lightPencil,    
    ...arrowHeadStartPoint, ...lightPencil,
    ...calculateLabel({x: verticalStartPointUp.x + labelX, y: verticalStartPointUp.y + (verticalEndPointUp.y - verticalStartPointUp.y)/2} ,label, position )
  );
  
  
  return sendToPoints;
}
