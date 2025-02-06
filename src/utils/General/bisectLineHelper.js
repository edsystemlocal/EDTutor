import { calculateDashLinePoints, calculateLinePointsWithCircles, defineSteps, drawXYaxis } from "../functionHelper";
import { calculateBisectionLine } from "../functionHelper";
import { calculateArcPoints } from "../functionHelper";
import { darkPencil,   startPoint,   superLightPencil } from "../globalVariable";
import { calculateLabel } from "../functionHelper";

export function generateBisectLineSteps(values) {
  const {Length} = values;
 
  return {
    1: defineSteps(`Draw XY axis line of given Length ${Length} mm`),
    2: defineSteps(
      "Draw left upper arc",
      "Draw right upper arc",
      "Add label 'P' for the bisection start point (up)"
    ),
    3: defineSteps(
      "Draw left lower arc",
      "Draw right lower arc",
      "Add label 'Q' for the bisection end point (down)"
    ),
    4: defineSteps("Draw bisection line")
  };
}

export function getBisectLinePoints(payload) {
  const { counter ,inputs,finalDrawing} = payload; // Destructure counter from payload
  

  // const startPoint = { x: 50, y: 400 };
    let Length = Number(inputs["Length"]) || 0;

    // const startpoint = { x: 50, y: 400 };
   
    let values ={
      Length
   }


   // Calculate XY axis line points
      const XYLineStartPoint = startPoint;
      const XYLineEndPoint = { x: XYLineStartPoint.x + Length*2, y: startPoint.y };
      const XYLinePoints = calculateLinePointsWithCircles(XYLineStartPoint, XYLineEndPoint);

  // Points calculations
  const { bisectionStartPoint, bisectionEndPoint } = calculateBisectionLine(startPoint, XYLineEndPoint);
  const bisectionLinePoints = calculateDashLinePoints(bisectionStartPoint, bisectionEndPoint);
  const leftArcPointsUp = calculateArcPoints(startPoint, bisectionStartPoint);
  const rightArcPointsUp = calculateArcPoints(XYLineEndPoint, bisectionStartPoint);
  const leftArcPointsDown = calculateArcPoints(startPoint, bisectionEndPoint);
  const rightArcPointsDown = calculateArcPoints(XYLineEndPoint, bisectionEndPoint);

  const sendToPoints = [];
  let  drawAll = false;

  // Conditional return based on counter
  if (counter === 1 || drawAll) {
    sendToPoints.push(...XYLinePoints,...darkPencil);
  
    if(finalDrawing){
      drawAll=true;
  }
  }
  if (counter === 2 || drawAll)  {
    sendToPoints.push(
      ...leftArcPointsUp,
      ...darkPencil,
      ...rightArcPointsUp,
      ...darkPencil,
      ...calculateLabel(bisectionStartPoint, "P", "up")
    );
    if(finalDrawing){
      drawAll=true;
  }
   
  }
  if (counter === 3 || drawAll) {
    sendToPoints.push(
      ...leftArcPointsDown,
      ...darkPencil,
      ...rightArcPointsDown,
      ...darkPencil,
      ...calculateLabel(bisectionEndPoint, "Q", "down")
    );
    if(finalDrawing){
      drawAll=true;
  }
    
  }
  if (counter === 4 || drawAll) {
    sendToPoints.push(...bisectionLinePoints, ...superLightPencil);
    if(finalDrawing){
      drawAll=true;
  }
   
  }

  // Return points and step description
  const steps = generateBisectLineSteps(values); // Generate steps dynamically
  const step = drawAll
  ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
  : steps[counter];

  return { points: sendToPoints, step };
}

