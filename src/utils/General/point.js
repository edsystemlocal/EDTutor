import { calculateLabel, calculateLinePointsWithCircles, defineSteps, drawXYaxis, getCirclePoints } from "../functionHelper";
import { lightPencil, startPoint, superDarkPencil } from "../globalVariable";

export function PointExercisSteps() {
    return {
      1: defineSteps("Draw the XY axis"),
      2: defineSteps(
        "Draw  first Point Above the HP ",
        "Label the point as (a')",
      ),
      3: defineSteps(
        "Draw  first Point Front Of VP",
        "Label the point as (a)",
      ),
     
    };
  }
  
  export function PointExercises(payload) {
    const  {counter, inputs , finalDrawing} = payload;
  

    const {firstPointFrontOfVP, firstPointAboveHP } = inputs;

  const verticalStartPoint = { x: 150, y: startPoint.y };
  const verticalEndPoint = {
    x: verticalStartPoint.x,
    y: verticalStartPoint.y + firstPointFrontOfVP, // Length of the vertical line
  };
  const verticalLinePoints = calculateLinePointsWithCircles(verticalStartPoint, verticalEndPoint, lightPencil);
  const point1 = getCirclePoints(verticalStartPoint);
  const point = getCirclePoints(verticalEndPoint);

  const verticalStartPointUp = { x: 150, y: startPoint.y };
  const verticalEndPointUp = { x: verticalStartPointUp.x, y: verticalStartPointUp.y - firstPointAboveHP };
  const verticalLineUpPoints = calculateLinePointsWithCircles(verticalStartPointUp, verticalEndPointUp, lightPencil);

  const point2 = getCirclePoints(verticalStartPointUp);
  const point3 = getCirclePoints(verticalEndPointUp);


  let drawAll = false;
const sendToPoints = [];
  if (counter === 1|| drawAll) {
    sendToPoints.push(
      ...drawXYaxis()
    );
        if (finalDrawing) {
            drawAll = true;
        }
  }
  if (counter === 2|| drawAll) {
    sendToPoints.push(
      ...verticalLineUpPoints,
      ...lightPencil,
      ...point2,
      ...superDarkPencil,
      ...point3,
      ...superDarkPencil,
      ...calculateLabel(verticalEndPointUp, "a'", "up"),

    );
        if (finalDrawing) {
            drawAll = true;
        }
    
  }
  if (counter === 3|| drawAll) {
    sendToPoints.push(
      ...verticalLinePoints,
      ...lightPencil,
      ...point1,
      ...superDarkPencil,
      ...point,
      ...superDarkPencil,
      ...calculateLabel(verticalEndPoint, "a", "down"),
      
    );
        if (finalDrawing) {
            drawAll = true;
        }
 
  }
  const steps = PointExercisSteps(); // Generate steps dynamically
  const step = drawAll
  ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
  : steps[counter];
  return {points:sendToPoints, step}

  }