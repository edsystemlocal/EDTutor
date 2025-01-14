import {  defineSteps, drawPointWithArrow, drawXYaxis } from "../functionHelper";
import { lightPencil, startPoint } from "../globalVariable";

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
  const { counter, finalDrawing, inputs } = payload;  

  // Convert to Number and apply default
  let firstPointAboveHP = Number(inputs["First Point Of HP"]) || 0;
  let firstPointFrontOfVP = Number(inputs["First Point Of VP"]) || 0;
  let firstPointFrontOfVPPosition = inputs["First Point Position VP"]
  let firstPointAboveHPPosition = inputs["First Point Position HP"]

  let zoom = 2;
  let updatedFirstPointFrontOfVP = firstPointFrontOfVP * zoom;
  let updatedFirstPointAboveHP = firstPointAboveHP * zoom;

  let pointStartPoint = { x: startPoint.x + 100, y: startPoint.y };

  let firstPointAboveHPPoint = pointStartPoint;
  if (firstPointAboveHPPosition === "Above") {
    firstPointAboveHPPoint = { x: pointStartPoint.x, y: pointStartPoint.y - updatedFirstPointAboveHP };
  } else if (firstPointAboveHPPosition === "Below") {
    firstPointAboveHPPoint = { x: pointStartPoint.x, y: pointStartPoint.y + updatedFirstPointAboveHP };
  }

  let firstPointFrontOfVPPoint = pointStartPoint;
  if (firstPointFrontOfVPPosition === "Front") {
    firstPointFrontOfVPPoint = { x: pointStartPoint.x, y: pointStartPoint.y + updatedFirstPointFrontOfVP };
  } else if (firstPointFrontOfVPPosition === "Behind") {
    firstPointFrontOfVPPoint = { x: pointStartPoint.x, y: pointStartPoint.y - updatedFirstPointFrontOfVP };
  }

  let drawAll = false;
  const sendToPoints = [];
  if (counter === 1 || drawAll) {
    sendToPoints.push(
      ...drawXYaxis()
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }
  if (counter === 2 || drawAll) {
    sendToPoints.push(
      ...drawPointWithArrow(pointStartPoint, firstPointAboveHPPoint, "left", "a'", firstPointAboveHP, lightPencil)
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }
  if (counter === 3 || drawAll) {
    sendToPoints.push(
      ...drawPointWithArrow(pointStartPoint, firstPointFrontOfVPPoint, "left", "a", firstPointFrontOfVP, lightPencil)
    );
    if (finalDrawing) {
      drawAll = true;
    }

  }
  const steps = PointExercisSteps(); // Generate steps dynamically
  const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
  return { points: sendToPoints, step }

}
