import { calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateDashLinePoints, calculateDistance, calculateHeight, calculateHypotenuseWithAngle, calculateLabel, calculateLinePointsWithCircles, defineSteps, drawQuarterCircle, drawXYaxis, getCirclePoints } from "@/utils/functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";


//Problem 10-8.  page no.215
export function projectionOfLine_1Points() {
  const startPoint = { x: 100, y: 200 };
  const lineLength = 200;
  const angleInDegreesUp = 30;
  const angleInDegreesDown = 360 - 45;
  //  vertical lengths based on the lineLength and angles
  const verticalLengthUP = Math.abs(lineLength * Math.sin((angleInDegreesUp * Math.PI) / 180));
  const verticalLengthDown = Math.abs(lineLength * Math.sin((angleInDegreesDown * Math.PI) / 180));
  const angledEndPointUp = calculateAngledLinePoints(
    startPoint,
    angleInDegreesUp, // Angle in degrees
    lineLength // Length of the angled line
  );
  const angledLinePointsUp = calculateLinePointsWithCircles(startPoint, angledEndPointUp);
  const labeledaAxisLineStartPoint = calculateLabel(startPoint, "a", "left-up");
  const labeledangledEndPointUp = calculateLabel(angledEndPointUp, "b'", "up");
  const verticalLineStartPoint = angledEndPointUp;
  const verticalLineEndPoint = {
    x: verticalLineStartPoint.x,
    y: verticalLineStartPoint.y + verticalLengthUP,
  };
  const verticalLinePoints = calculateLinePointsWithCircles(verticalLineStartPoint, verticalLineEndPoint);
  const labeledbAxisLineStartPoint = calculateLabel(verticalLineEndPoint, "b", "right-up");
  const angledEndPointDown = calculateAngledLinePoints(
    startPoint,
    angleInDegreesDown, // Angle in degrees
    lineLength // Length of the angled line
  );
  const angledLinePointsDown = calculateLinePointsWithCircles(startPoint, angledEndPointDown);
  const labeledangledEndPointDown = calculateLabel(angledEndPointDown, "b1", "down");
  const verticalLineStartPointDown = angledEndPointDown;
  const verticalLineEndPointDown = {
    x: verticalLineStartPointDown.x,
    y: verticalLineStartPointDown.y - verticalLengthDown,
  };
  const verticalLinePointsDown = calculateLinePointsWithCircles(verticalLineStartPointDown, verticalLineEndPointDown);
  const labeledverticalLineEndPointDown = calculateLabel(verticalLineEndPointDown, "b'1", "up");
  const dashLineLength = 500 / 2; // Set the length of the dashed line
  const dashedLineStart = { x: angledEndPointUp.x - dashLineLength / 2, y: angledEndPointUp.y };
  const dashedLineEnd = { x: angledEndPointUp.x + dashLineLength / 2, y: angledEndPointUp.y };
  const dashedLinePoints = calculateLinePointsWithCircles(dashedLineStart, dashedLineEnd);
  const labeleddashedLineStart = calculateLabel(dashedLineStart, "p", "left");
  const labeleddashedLineEnd = calculateLabel(dashedLineEnd, "q", "right");
  const dashedLineStartDown = { x: angledEndPointDown.x - dashLineLength / 2, y: angledEndPointDown.y };
  const dashedLineEndDown = { x: angledEndPointDown.x + dashLineLength / 2, y: angledEndPointDown.y };
  const dashedLinePointsDown = calculateLinePointsWithCircles(dashedLineStartDown, dashedLineEndDown);
  const labeleddashedLineStartDown = calculateLabel(dashedLineStartDown, "r", "left");
  const labeleddashedLineEndDown = calculateLabel(dashedLineEndDown, "s", "right");
  const arcRadiusUpper = Math.abs(startPoint.x - verticalLineEndPointDown.x);
  const arcStartAngleUpper = Math.min(0, angleInDegreesUp); // Adjust based on the start angle
  const arcEndAngleUpper = Math.max(45, Math.abs(angleInDegreesDown)); // Adjust based on the upper range
  const drawuppercricle = drawQuarterCircle(startPoint, arcStartAngleUpper, arcEndAngleUpper, arcRadiusUpper);
  const arcRadiusLower = Math.abs(startPoint.x - verticalLineEndPoint.x);
  const arcStartAngleLower = 360; // Start from 360
  const arcEndAngleLower = arcStartAngleLower - Math.abs(angleInDegreesDown - 10); // Adjust dynamically
  const drawlowercricle = drawQuarterCircle(startPoint, arcStartAngleLower, arcEndAngleLower, arcRadiusLower);
  const arcEndPointUpper = {
    x: startPoint.x + arcRadiusUpper * Math.cos((arcEndAngleUpper * Math.PI) / 180),
    y: startPoint.y - arcRadiusUpper * Math.sin((arcEndAngleUpper * Math.PI) / 180),
  };
  // Draw an angled line from startPoint to arcEndPointUpper
  const angledLineToArcEndPoint = calculateLinePointsWithCircles(startPoint, arcEndPointUpper);
  const arcEndPointLower = {
    x: startPoint.x + arcRadiusLower * Math.cos((arcEndAngleLower * Math.PI) / 180),
    y: startPoint.y - arcRadiusLower * Math.sin((arcEndAngleLower * Math.PI) / 180),
  };
  // Draw an angled line from startPoint to arcEndPointLower
  const angledLineToArcEndPointLower = calculateLinePointsWithCircles(startPoint, arcEndPointLower);
  const verticalLinePointsBetweenArcs = calculateLinePointsWithCircles(arcEndPointUpper, arcEndPointLower);
  const labeledarcEndAngleUpper = calculateLabel(arcEndPointUpper, "b'2", "up");
  const labeledarcEndAngleLower = calculateLabel(arcEndPointLower, "b2", "down");
  return [
    ...drawXYaxis(),
    ...labeledaAxisLineStartPoint,
    ...labeledangledEndPointUp,
    ...angledLinePointsUp,
    ...lightPencil,
    ...labeledbAxisLineStartPoint,
    ...verticalLinePoints,
    ...lightPencil,
    ...labeledangledEndPointDown,
    ...angledLinePointsDown,
    ...lightPencil,
    ...labeledverticalLineEndPointDown,
    ...verticalLinePointsDown,
    ...lightPencil,
    ...dashedLinePoints,
    ...labeleddashedLineStart,
    ...labeleddashedLineEnd,
    ...lightPencil,
    ...dashedLinePointsDown,
    ...labeleddashedLineStartDown,
    ...labeleddashedLineEndDown,
    ...lightPencil,
    ...drawuppercricle,
    ...lightPencil,
    ...drawlowercricle,
    ...lightPencil,
    ...angledLineToArcEndPoint,
    ...darkPencil,
    ...angledLineToArcEndPointLower,
    ...darkPencil,
    ...labeledarcEndAngleLower,
    ...verticalLinePointsBetweenArcs,
    ...labeledarcEndAngleUpper,
    ...lightPencil,
  ];
}
// ------------------------------------------------
// Problem 10-12. page no.217
export function projectionOfLine_2Points() {
  const startPoint = { x: 100, y: 200 };
  const verticalLengthUP = 20;
  const verticalLengthDown = 25;
  const lineLength = 200
  const lowerDashedLineLengthUP = 40;
  const lowerDashedLineLengthDown = 65;
  const verticalStartPointUp = startPoint;
  const verticalEndPointUp = {
    x: verticalStartPointUp.x,
    y: verticalStartPointUp.y - verticalLengthUP,
  };
  const verticalLineUpPoints = calculateLinePointsWithCircles(verticalStartPointUp, verticalEndPointUp);
  const labeledverticalEndPointUp = calculateLabel(verticalEndPointUp, "a'", "left-up");
  const verticalStartPointDown = startPoint;
  const verticalEndPointDown = {
    x: verticalStartPointUp.x,
    y: verticalStartPointUp.y + verticalLengthDown,
  };
  const verticalLineDownPoints = calculateLinePointsWithCircles(verticalStartPointDown, verticalEndPointDown);
  const labeledverticalEndPointDown = calculateLabel(verticalEndPointDown, "a", "left-up");
  // Points for the lower horizontal line
  const lowerLineStart = { x: 50, y: 200 + verticalLengthDown }
  const lowerLineEnd = { x: lowerLineStart.x + lineLength, y: lowerLineStart.y };
  const lowerLinePoints = calculateLinePointsWithCircles(lowerLineStart, lowerLineEnd);
  const labeledlowerLineStart = calculateLabel(lowerLineStart, "g", "left");
  const labeledlowerLineEnd = calculateLabel(lowerLineEnd, "h", "right");
  const upperLineStart = { x: 50, y: 200 - verticalLengthUP };
  const upperLineEnd = { x: upperLineStart.x + lineLength, y: upperLineStart.y };
  const upperLinePoints = calculateLinePointsWithCircles(upperLineStart, upperLineEnd);
  const labeledupperLineStart = calculateLabel(upperLineStart, "c", "left");
  const labeledupperLineEnd = calculateLabel(upperLineEnd, "d", "right");
  // Upper dashed line points
  const upperDashedLineStart = { x: 50, y: 200 - lowerDashedLineLengthUP };
  const upperDashedLineEnd = { x: upperDashedLineStart.x + lineLength, y: upperDashedLineStart.y };
  const upperDashedLinePoints = calculateLinePointsWithCircles(upperDashedLineStart, upperDashedLineEnd);
  //  const upperDashedLinePoints = calculateDashLinePoints(upperDashedLineStart, upperDashedLineEnd);
  const labeleddashedLineStart = calculateLabel(upperDashedLineStart, "e", "left");
  const labeleddashedLineEnd = calculateLabel(upperDashedLineEnd, "f", "right");
  // Lower dashed line points
  const lowerDashedLineStart = { x: 50, y: 200 + lowerDashedLineLengthDown };
  const lowerDashedLineEnd = { x: lowerDashedLineStart.x + lineLength, y: lowerDashedLineStart.y };
  const lowerDashedLinePoints = calculateLinePointsWithCircles(lowerDashedLineStart, lowerDashedLineEnd);
  // const lowerDashedLinePoints = calculateDashLinePoints(lowerDashedLineStart, lowerDashedLineEnd);
  const labeleddashedLineStartDown = calculateLabel(lowerDashedLineStart, "j", "left");
  const labeleddashedLineEndDown = calculateLabel(lowerDashedLineEnd, "k", "right");
  // Diagonal line from a' to upper dashed line with exact length of 65
  const diagonalLineLength = 65;
  const diagonalLineStart = verticalEndPointUp; // Starting point (a')
  // Calculate the x difference to maintain length along the dashed line
  const xDifference = Math.sqrt(diagonalLineLength ** 2 - (upperDashedLineStart.y - diagonalLineStart.y) ** 2);
  // End point on the upper dashed line
  const diagonalLineEnd = {
    x: diagonalLineStart.x + xDifference,
    y: upperDashedLineStart.y, // Same height as the upper dashed line
  };
  const diagonalLinePoints = calculateLinePointsWithCircles(diagonalLineStart, diagonalLineEnd);
  const labeledDiagonalLineEnd = calculateLabel(diagonalLineEnd, "b'", "right-up");
  // Vertical line from diagonalLineEnd to lower line
  const verticalLineStart = diagonalLineEnd;
  const verticalLineEnd = {
    x: verticalLineStart.x,
    y: lowerLineStart.y, // Same y-coordinate as the lower line
  };
  const verticalLinePoints = calculateLinePointsWithCircles(verticalLineStart, verticalLineEnd);
  const labeledVerticalLineEnd = calculateLabel(verticalLineEnd, "b", "right");
  const upperarc = calculateArcPoints(diagonalLineStart, diagonalLineEnd);
  // New diagonal line from verticalEndPointDown to lower dashed line
  const secondDiagonalLineStart = verticalEndPointDown; // Starting point (a)
  const secondYDifference = lowerDashedLineStart.y - secondDiagonalLineStart.y; // Y-distance to lower dashed line
  const secondXDifference = Math.sqrt(diagonalLineLength ** 2 - secondYDifference ** 2); // X-distance for length
  // End point on the lower dashed line
  const secondDiagonalLineEnd = {
    x: secondDiagonalLineStart.x + secondXDifference,
    y: lowerDashedLineStart.y, // Same height as the lower dashed line
  };
  const secondDiagonalLinePoints = calculateLinePointsWithCircles(secondDiagonalLineStart, secondDiagonalLineEnd);
  const labeledSecondDiagonalLineEnd = calculateLabel(secondDiagonalLineEnd, "b1", "down");
  const lowerarc = calculateArcPoints(secondDiagonalLineStart, secondDiagonalLineEnd);
  // Vertical line from diagonalLineEnd to lower line
  const verticalLinedownStart = secondDiagonalLineEnd;
  const verticalLinedownEnd = {
    x: verticalLinedownStart.x,
    y: upperLineStart.y, // Same y-coordinate as the lower line
  };
  const verticalLinedownPoints = calculateLinePointsWithCircles(verticalLinedownStart, verticalLinedownEnd);
  const labeledVerticalLinedownEnd = calculateLabel(verticalLinedownEnd, "b'1", "right");
  //  point `b` for calculating the distance
  const pointB = { x: 50, y: 200 };
  // Calculate the distance between `a` and `b`
  const distanceAB = Math.sqrt(
    (pointB.x - verticalEndPointDown.x) ** 2 + (pointB.y - verticalEndPointDown.y) ** 2
  );
  // Start point for the new diagonal line
  const diagonalStart = verticalEndPointDown; // Point `a`
  // Calculate the y difference to the lower dashed line
  const yDifference = lowerDashedLineStart.y - diagonalStart.y;
  // Calculate the x difference to maintain the length equal to distanceAB
  const xDifferences = Math.sqrt(distanceAB ** 2 - yDifference ** 2);
  // End point on the lower dashed line
  const diagonalEnd = {
    x: diagonalStart.x + xDifferences,
    y: lowerDashedLineStart.y,
  };
  // Draw the diagonal line
  const newdiagonalLinePoints = calculateLinePointsWithCircles(diagonalStart, diagonalEnd);
  const newlabeledDiagonalLineEnd = calculateLabel(diagonalEnd, "b", "down");
  // Start point for the new diagonal line
  const diagonalStartup = verticalEndPointUp; // Point `a`
  // End point on the lower dashed line
  const diagonalEndup = {
    x: diagonalStartup.x + xDifferences,
    y: upperDashedLineStart.y,
  };
  // Draw the diagonal line
  const diagonalLinePointsup = calculateLinePointsWithCircles(diagonalStartup, diagonalEndup);
  const labeledDiagonalLineup = calculateLabel(diagonalEndup, "b'2", "up");
  const verticalLine = calculateLinePointsWithCircles(diagonalEndup, diagonalEnd);
  const newdrawuppercricle = drawQuarterCircle(verticalEndPointUp, 0, 60, 51);
  const newdrawlowercricle = drawQuarterCircle(verticalEndPointDown, 360, 295, 65);
  return [
    ...drawXYaxis(),
    ...labeledverticalEndPointUp,
    ...verticalLineUpPoints,
    ...lightPencil,
    ...labeledverticalEndPointDown,
    ...verticalLineDownPoints,
    ...lightPencil,
    ...upperLinePoints,
    ...lightPencil,
    ...labeledupperLineStart,
    ...labeledupperLineEnd,
    ...lowerLinePoints,
    ...lightPencil,
    ...labeledlowerLineStart,
    ...labeledlowerLineEnd,
    ...upperDashedLinePoints,
    ...lightPencil,
    ...labeleddashedLineStart,
    ...labeleddashedLineEnd,
    ...lowerDashedLinePoints,
    ...lightPencil,
    ...labeleddashedLineStartDown,
    ...labeleddashedLineEndDown,
    ...diagonalLinePoints,
    ...labeledDiagonalLineEnd,
    ...darkPencil,
    ...upperarc,
    ...lightPencil,
    ...verticalLinePoints,
    ...labeledVerticalLineEnd,
    ...lightPencil,
    ...secondDiagonalLinePoints,
    ...labeledSecondDiagonalLineEnd,
    ...darkPencil,
    ...lowerarc,
    ...lightPencil,
    ...verticalLinedownPoints,
    ...labeledVerticalLinedownEnd,
    ...lightPencil,
    ...newdiagonalLinePoints,
    ...newlabeledDiagonalLineEnd,
    ...darkPencil,
    ...diagonalLinePointsup,
    ...labeledDiagonalLineup,
    ...darkPencil,
    ...verticalLine,
    ...lightPencil
  ]
}
// ---------------------------------------

// Problem 10-17. page .no 220

export function projectionOfLine_3Steps() {
  return {
    1: defineSteps("Draw XY axis"),
    2: defineSteps(
      "Draw a vertical line downward from the start point 'A'",
      "Label the endpoint of the downward vertical line as 'a'"
    ),
    3: defineSteps(
      "Draw a vertical line upward from the start point 'A'",
      "Label the endpoint of the upward vertical line as 'a''"
    ),
    4: defineSteps(
      "Draw a horizontal line starting from 'a'' with a given length",
      "Label the endpoint of the horizontal line"
    ),
    5: defineSteps(
      "Draw a diagonal line starting from 'a'' at an angle of 30°",
      "Label the endpoint of the diagonal line as 'b''"
    ),
    6: defineSteps(
      "Draw a vertical line upward from the endpoint of the diagonal line",
      "Extend the line to a specified length"
    ),
    7: defineSteps(
      "Draw a horizontal line connecting the vertical line upward to the downward vertical line",
      "Label the endpoint of the horizontal line as 'b'"
    ),
    8: defineSteps(
      "Draw a dashed line starting at the midpoint of the diagonal line",
      "Label the start and end points of the dashed line as 'p' and 'q'"
    ),
    9: defineSteps(
      "Draw an angled line from 'a'' to meet the dashed line",
      "Label the endpoint of the angled line as 'b''1"
    ),
    10: defineSteps(
      "Draw a downward dashed line starting from the endpoint of the angled line",
      "Label the start and end points of the dashed line as 'r' and 's'"
    ),
    11: defineSteps(
      "Draw a line from 'a' to meet the dashed line downward",
      "Label the endpoint as 'b'"
    ),
    12: defineSteps(
      "Draw a vertical line upward from the endpoint of the angled line",
      "Extend the vertical line to a specified length"
    ),
    13: defineSteps(
      "Draw another angled line from 'a' to meet the downward dashed line",
      "Label the endpoint as 'b2'"
    ),
    14: defineSteps(
      "Draw an arc connecting the vertical line downward to the angled line",
      "Ensure the arc is smooth and labeled appropriately"
    ),
    15: defineSteps(
      "Draw a quarter circle using the base points and label the circle appropriately"
    )
  };
}

export function projectionOfLine_3Points(payload) {
  const { counter } = payload;

  const steps = projectionOfLine_3Steps(); // Generate steps dynamically

  const startPoint = { x: 100, y: 200 };
  const verticalLengthUP = 12;
  const verticalLengthDown = 20;
  const newHorizontallinelengthup = 30;
  const upperAngle = 30; // in degrees
  const diagonalLength = 90; // length in mm
  const angledLineLength = 65;
  const verticalStartPointUp = startPoint;
  const verticalEndPointUp = {
    x: verticalStartPointUp.x,
    y: verticalStartPointUp.y - verticalLengthUP,
  };
  const verticalLineUpPoints = calculateLinePointsWithCircles(verticalStartPointUp, verticalEndPointUp);
  const labeledverticalEndPointUp = calculateLabel(verticalEndPointUp, "a'", "left-up");
  const verticalStartPointDown = startPoint;
  const verticalEndPointDown = {
    x: verticalStartPointDown.x,
    y: verticalStartPointDown.y + verticalLengthDown,
  };
  const verticalLineDownPoints = calculateLinePointsWithCircles(verticalStartPointDown, verticalEndPointDown);
  const labeledverticalEndPointDown = calculateLabel(verticalEndPointDown, "a", "left");
  // New horizontal line starting from verticalLengthDown's endpoint, parallel to AB
  const newHorizontalStartPoint = verticalEndPointUp;
  const newHorizontalEndPoint = {
    x: newHorizontalStartPoint.x + newHorizontallinelengthup,
    y: newHorizontalStartPoint.y,
  };
  const newHorizontalLinePoints = calculateLinePointsWithCircles(newHorizontalStartPoint, newHorizontalEndPoint);
  // Diagonal line from a' with length 90 mm and angle 30°
  // Convert angle to radians for trigonometric functions
  const diagonalAngleRadians = (Math.PI / 180) * upperAngle;
  const diagonalStartPoint = verticalEndPointUp; // Starting from a'
  const diagonalEndPoint = {
    x: diagonalStartPoint.x + diagonalLength * Math.cos(diagonalAngleRadians),
    y: diagonalStartPoint.y - diagonalLength * Math.sin(diagonalAngleRadians),
  };

  const diagonalLinePoints = calculateLinePointsWithCircles(diagonalStartPoint, diagonalEndPoint);
  const labeleddiagonalLinePoints = calculateLabel(diagonalEndPoint, "b'", "up");
  // Calculate new vertical length using the hypotenuse formula
  const newverticalLengthUP = diagonalLength * Math.sin(diagonalAngleRadians);
  const newverticalStartPointUp = diagonalEndPoint;
  const newverticalEndPointUp = {
    x: newverticalStartPointUp.x,
    y: newverticalStartPointUp.y + (newverticalLengthUP + verticalLengthDown + verticalLengthUP),
  };
  const newverticalLineUpPoints = calculateLinePointsWithCircles(newverticalStartPointUp, newverticalEndPointUp);
  const newHorizontalLinePointsdown = calculateLinePointsWithCircles(verticalEndPointDown, newverticalEndPointUp);
  const newlabeledHorizontalLinePointsdown = calculateLabel(newverticalEndPointUp, "b", "right");
  const dashLineLength = 500 / 2; // Set the length of the dashed line
  const dashedLineStart = { x: diagonalEndPoint.x - dashLineLength / 2, y: diagonalEndPoint.y };
  const dashedLineEnd = { x: diagonalEndPoint.x + dashLineLength / 2, y: diagonalEndPoint.y };
  // const upperDashedLinePoints = calculateDashLinePoints(dashedLineStart, dashedLineEnd);
  const upperDashedLinePoints = calculateLinePointsWithCircles(dashedLineStart, dashedLineEnd);
  const labeleddashedLineStart = calculateLabel(dashedLineStart, "p", "left");
  const labeleddashedLineEnd = calculateLabel(dashedLineEnd, "q", "right");
  // Calculate new angled line endpoint
  const angledLineStartPoint = verticalEndPointUp;
  const fixedY = dashedLineStart.y; // The Y-coordinate is fixed by the dashed line
  // Solve for x-coordinate using Pythagorean theorem
  const deltaY = fixedY - angledLineStartPoint.y; // Vertical distance
  const deltaX = Math.sqrt(angledLineLength ** 2 - deltaY ** 2); // Horizontal distance
  const angledLineEndPoint = {
    x: angledLineStartPoint.x + deltaX, // Add deltaX for rightward movement
    y: fixedY,
  };
  const angledLinePoints = calculateLinePointsWithCircles(angledLineStartPoint, angledLineEndPoint);
  const labeledAngledLineEndPoint = calculateLabel(angledLineEndPoint, "b'1", "up");
  // Length of the new vertical line
  const verticalLineFromAngledLength = 138; // Set desired length
  // Starting point is the endpoint of the angled line
  const verticalLineFromAngledStartPoint = angledLineEndPoint;
  // Calculate endpoint of the vertical line
  const verticalLineFromAngledEndPoint = {
    x: verticalLineFromAngledStartPoint.x,
    y: verticalLineFromAngledStartPoint.y + verticalLineFromAngledLength, // Adjust for upward direction
  };

  // Generate points for the vertical line
  const verticalLineFromAngledPoints = calculateLinePointsWithCircles(
    verticalLineFromAngledStartPoint,
    verticalLineFromAngledEndPoint
  );
  const angledlinedown = calculateLinePointsWithCircles(verticalEndPointDown, verticalLineFromAngledEndPoint);
  const labeledangledlinedown = calculateLabel(verticalLineFromAngledEndPoint, "b", "down");
  const dashedLineStartDown = { x: verticalLineFromAngledEndPoint.x - dashLineLength / 2, y: verticalLineFromAngledEndPoint.y };
  const dashedLineEndDown = { x: verticalLineFromAngledEndPoint.x + dashLineLength / 2, y: verticalLineFromAngledEndPoint.y };
  // const dashedLinePointsDown = calculateDashLinePoints(dashedLineStartDown, dashedLineEndDown);
  const dashedLinePointsDown = calculateLinePointsWithCircles(dashedLineStartDown, dashedLineEndDown);
  const labeleddashedLineStartDown = calculateLabel(dashedLineStartDown, "r", "left");
  const labeleddashedLineEndDown = calculateLabel(dashedLineEndDown, "s", "right");
  // New angled line starting at verticalEndPointDown and ending at dashedLinePointsDown with length 90mm
  const newAngledLineLength = 90; // Length in mm
  const angledLineStartPointNew = verticalEndPointDown; // Starting from verticalEndPointDown
  const fixedYNew = dashedLinePointsDown[0].y; // The Y-coordinate is fixed by dashedLinePointsDown
  // Calculate the deltaY between the start and the fixed endpoint
  const deltaYNew = fixedYNew - angledLineStartPointNew.y;
  // Solve for deltaX using Pythagorean theorem
  const deltaXNew = Math.sqrt(newAngledLineLength ** 2 - deltaYNew ** 2); // Horizontal distance
  // Determine the end point of the angled line
  const angledLineEndPointNew = {
    x: angledLineStartPointNew.x + deltaXNew, // Add deltaX for rightward movement
    y: fixedYNew,
  };
  //the angled line points
  const newAngledLinePoints = calculateLinePointsWithCircles(angledLineStartPointNew, angledLineEndPointNew);
  const labeledNewAngledLineEndPoint = calculateLabel(angledLineEndPointNew, "b2", "down");
  const lowerarc = calculateArcPoints(verticalEndPointDown, angledLineEndPointNew);
  const newdrawlowercricle = drawQuarterCircle(verticalEndPointDown, 360, 306, 78);

  const sendToPoints = [];
  let step = ""; // Variable to hold the step description

  if (counter === 1) {
    sendToPoints.push(...drawXYaxis());
    step = steps[1];
    console.log(step, "step 111111111")
  }

  if (counter === 2) {
    sendToPoints.push(
      ...verticalLineDownPoints,
      ...lightPencil,
      ...labeledverticalEndPointDown,
    );
    step = steps[2];
  };

  if (counter === 3) {
    sendToPoints.push(
      ...verticalLineUpPoints,
      ...lightPencil,
      ...labeledverticalEndPointUp,
    )
    step = steps[3];
  };

  if (counter === 4) {
    sendToPoints.push(
      ...newHorizontalLinePoints,
      ...lightPencil,
    )
    step = steps[4];
  };


  if (counter === 5) {
    sendToPoints.push(
      ...diagonalLinePoints,
      ...lightPencil,
      ...labeleddiagonalLinePoints,

    )
    step = steps[5];
  };


  if (counter === 6) {
    sendToPoints.push(
      ...newverticalLineUpPoints,
      ...lightPencil,

    )
    step = steps[6];
  };



  if (counter === 7) {
    sendToPoints.push(
      ...newHorizontalLinePointsdown,
      ...newlabeledHorizontalLinePointsdown,
      ...lightPencil,
    )
    step = steps[7];
  };


  if (counter === 8) {
    sendToPoints.push(
      ...upperDashedLinePoints,
      ...labeleddashedLineStart,
      ...labeleddashedLineEnd,
      ...lightPencil,
    )
    step = steps[8];
  };


  if (counter === 9) {
    sendToPoints.push(
      ...angledLinePoints,
      ...labeledAngledLineEndPoint,
      ...lightPencil,
    )
    step = steps[9];
  };


  if (counter === 10) {
    sendToPoints.push(
      ...dashedLinePointsDown,
      ...labeleddashedLineStartDown,
      ...labeleddashedLineEndDown,
      ...lightPencil,
    )
    step = steps[10];
  };

  if (counter === 11) {
    sendToPoints.push(
      ...angledlinedown,
      ...labeledangledlinedown,
      ...lightPencil,
    )
    step = steps[11];
  };


  if (counter === 12) {
    sendToPoints.push(
      ...verticalLineFromAngledPoints,
      ...lightPencil,
    )
    step = steps[12];
  };

  if (counter === 13) {
    sendToPoints.push(
      ...newAngledLinePoints,
      ...labeledNewAngledLineEndPoint,
      ...lightPencil,

    )
    step = steps[13];
  };

  if (counter === 14) {
    sendToPoints.push(
      ...lowerarc,
      ...lightPencil,

    )
    step = steps[14];
  };

  if (counter === 15) {
    sendToPoints.push(
      ...newdrawlowercricle,
      ...lightPencil,
    )
    step = steps[15];
  };

  return { points: sendToPoints, step }; // Return empty points and message for invalid counter

}



// ----------------------------------------------------
// Aashutosh code 
export function projectionOfLine_4Steps() {
  return {
    1: defineSteps("Draw the XY axis"),
    2: defineSteps(
      "Label the start point as 'A'",
      "Draw the XY axis line",
      "Label the endpoint as 'B'"
    ),
    3: defineSteps(
      "Draw the vertical line down from point 'A'",
      "Label the endpoint of the vertical line as 'A'",
      "Draw the downward vertical line"
    ),
    4: defineSteps(
      "Draw the second horizontal line from 'A' to 'B'",
      "Label the endpoint of the horizontal line as 'B'"
    ),
    5: defineSteps("Draw the upward vertical line"),
    6: defineSteps("Draw the downward vertical line starting from 'B'"),
    7: defineSteps("Draw the first angled line (upward)"),
    8: defineSteps("Draw the second angled line (downward)"),
    9: defineSteps("Draw the dashed line upward from the endpoint"),
    10: defineSteps("Draw the dashed line downward from the endpoint"),
    11: defineSteps("Draw the upper arc from point 'A'"),
    12: defineSteps("Draw the lower arc from point 'B'"),
    13: defineSteps("Draw the angled line upwards from the arc endpoint"),
    14: defineSteps("Draw the angled line downwards from the arc endpoint"),
    15: defineSteps("Draw the vertical line between the arcs")
  };
}

export function projectionOfLine_4Points(payload) {
  const { counter } = payload;

  // Define lengths for the lines
  const verticalLineDownLength = 12;
  const secondHorizontalLineLength = 65;
  const xyAxisLineLength = 50;
  const angledLineLength = 75; // Length of the angled lines
  const start = { x: 150, y: startPoint.y };
  // Calculate vertical line points (downward from 'start')
  const verticalStartPointDown = start;
  const verticalEndPointDown = {
    x: verticalStartPointDown.x,
    y: verticalStartPointDown.y + verticalLineDownLength,
  };
  const verticalLineDownPoints = calculateLinePointsWithCircles(verticalStartPointDown, verticalEndPointDown);
  // Calculate horizontal line points (from the end of vertical line)
  const secondHorizontalStartPoint = verticalEndPointDown;
  const secondHorizontalEndPoint = {
    x: secondHorizontalStartPoint.x + secondHorizontalLineLength,
    y: secondHorizontalStartPoint.y,
  };
  const secondHorizontalLinePoints = calculateLinePointsWithCircles(secondHorizontalStartPoint, secondHorizontalEndPoint);
  // Calculate XY axis line points
  const xyAxisLineStartPoint = start;
  const xyAxisLineEndPoint = { x: xyAxisLineStartPoint.x + xyAxisLineLength, y: startPoint.y };
  const xyAxisLinePoints = calculateLinePointsWithCircles(xyAxisLineStartPoint, xyAxisLineEndPoint);
  // Calculate the height using Pythagoras' theorem for upward vertical line
  const upwardHeight = Math.sqrt(Math.pow(angledLineLength, 2) - Math.pow(secondHorizontalLineLength, 2));
  console.log(`Upward vertical line length: ${upwardHeight.toFixed(2)} mm`);
  // Upward vertical line
  const upwardVerticalStartPoint = secondHorizontalEndPoint;
  const upwardVerticalEndPoint = {
    x: upwardVerticalStartPoint.x,
    y: upwardVerticalStartPoint.y - (upwardHeight + verticalLineDownLength),
  };

  const upwardVerticalLinePoints = calculateLinePointsWithCircles(upwardVerticalStartPoint, upwardVerticalEndPoint);
  // Calculate the height using Pythagoras' theorem for downward vertical line
  const downwardHeight = Math.sqrt(Math.pow(angledLineLength, 2) - Math.pow(xyAxisLineLength, 2));
  console.log(`Downward vertical line length: ${downwardHeight.toFixed(2)}mm`);
  const downwardVerticalStartPoint = xyAxisLineEndPoint;
  const downwardVerticalEndPoint = {
    x: downwardVerticalStartPoint.x,
    y: downwardVerticalStartPoint.y + (downwardHeight + verticalLineDownLength),
  };
  const downwardVerticalLinePoints = calculateLinePointsWithCircles(downwardVerticalStartPoint, downwardVerticalEndPoint);
  // First angled line (upward)
  const firstAngledLinePoints = calculateLinePointsWithCircles(start, upwardVerticalEndPoint);
  // Calculate the length of the first angled line
  const firstAngledLineLength = Math.sqrt(
    Math.pow(upwardVerticalEndPoint.x - start.x, 2) +
    Math.pow(upwardVerticalEndPoint.y - start.y, 2)
  );
  console.log(`First angled line length: ${firstAngledLineLength.toFixed(2)}mm`);
  // Second angled line (downward)
  const secondAngledLinePoints = calculateLinePointsWithCircles(verticalEndPointDown, downwardVerticalEndPoint);
  // Calculate the length of the second angled line
  const secondAngledLineLength = Math.sqrt(
    Math.pow(downwardVerticalEndPoint.x - verticalEndPointDown.x, 2) +
    Math.pow(downwardVerticalEndPoint.y - verticalEndPointDown.y, 2)
  );
  console.log(`Second angled line length: ${secondAngledLineLength.toFixed(2)}mm`);

  const dashLineLength = 500 / 2; // Set the length of the dashed line
  const dashedLineStart = { x: upwardVerticalEndPoint.x - dashLineLength / 2, y: upwardVerticalEndPoint.y };
  const dashedLineEnd = { x: upwardVerticalEndPoint.x + dashLineLength / 2, y: upwardVerticalEndPoint.y };
  const dashedLinePoints = calculateDashLinePoints(dashedLineStart, dashedLineEnd);
  const labeleddashedLineStart = calculateLabel(dashedLineStart, "c", "left");
  const labeleddashedLineEnd = calculateLabel(dashedLineEnd, "d", "right");

  const dashedLineStartDown = { x: downwardVerticalEndPoint.x - dashLineLength / 2, y: downwardVerticalEndPoint.y };
  const dashedLineEndDown = { x: downwardVerticalEndPoint.x + dashLineLength / 2, y: downwardVerticalEndPoint.y };
  const dashedLinePointsDown = calculateDashLinePoints(dashedLineStartDown, dashedLineEndDown);
  const labeleddashedLineStartDown = calculateLabel(dashedLineStartDown, "e", "left");
  const labeleddashedLineEndDown = calculateLabel(dashedLineEndDown, "f", "right");
  // const upperarc = calculateArcPoints(start, upwardVerticalEndPoint);

  // const lowerarc =  calculateArcPoints(verticalEndPointDown, downwardVerticalEndPoint);
  const newdrawuppercricle = drawQuarterCircle(start, 0, 50, xyAxisLineLength);
  const newangledLineStartUp = start; // The endpoint of the vertical line
  const newdrawuppercirclePoints = drawQuarterCircle(start, 0, 50, xyAxisLineLength); // Retrieve circle points
  const newangledLineEndUp = newdrawuppercirclePoints[newdrawuppercirclePoints.length - 1]; // Last point of the arc
  //     // Step 2: Calculate points for the angled line
  const newangledLinePointsUp = calculateLinePointsWithCircles(newangledLineStartUp, newangledLineEndUp);
  const newdrawlowercricle = drawQuarterCircle(verticalEndPointDown, 360, 300, secondHorizontalLineLength);
  const newangledLineStartDown = verticalEndPointDown; // The endpoint of the vertical line
  const newdrawlowercirclePoints = drawQuarterCircle(verticalEndPointDown, 360, 300, secondHorizontalLineLength); // Retrieve circle points
  const newangledEndPointDown = newdrawlowercirclePoints[newdrawlowercirclePoints.length - 1]; // Last point of the arc
  // Step 2: Calculate points for the angled line
  const newangledLinePointsDown = calculateLinePointsWithCircles(newangledLineStartDown, newangledEndPointDown);

  // Calculate the length of the second angled line
  const newangledLinetUpLenght = Math.sqrt(
    Math.pow(newangledLineEndUp.x - newangledLineStartUp.x, 2) +
    Math.pow(newangledLineEndUp.y - newangledLineStartUp.y, 2)
  );
  console.log(`New UP angled line length: ${newangledLinetUpLenght.toFixed(2)}mm`);
  // Calculate the length of the second angled line
  const newangledLineDownLenght = Math.sqrt(
    Math.pow(newangledEndPointDown.x - newangledLineStartDown.x, 2) +
    Math.pow(newangledEndPointDown.y - newangledLineStartDown.y, 2)
  );
  console.log(`New Down angled line length: ${newangledLineDownLenght.toFixed(2)}mm`);

  const verticalLinePointsBetweenArcs = calculateLinePointsWithCircles(newangledLineEndUp, newangledEndPointDown);

  const sendToPoints = [];

  // Return points and step description based on the counter value
  if (counter === 1) {
    sendToPoints.push(...drawXYaxis());
  }

  if (counter === 2) {
    sendToPoints.push(

      ...xyAxisLinePoints,
      ...calculateLabel(xyAxisLineStartPoint, "a'", "up"),
      ...calculateLabel(xyAxisLineEndPoint, "b'1", "up"),
      ...darkPencil,
    )

  }


  if (counter === 3) {
    sendToPoints.push(

      ...verticalLineDownPoints,
      ...calculateLabel(verticalEndPointDown, "a", "down"),
      ...lightPencil,
    )

  }

  if (counter === 4) {
    sendToPoints.push(

      ...secondHorizontalLinePoints,
      ...calculateLabel(secondHorizontalEndPoint, "b", "down"),
      ...darkPencil,
    )

  }

  if (counter === 5) {
    sendToPoints.push(

      ...upwardVerticalLinePoints,
      ...calculateLabel(upwardVerticalEndPoint, "b'", "up"),
      ...lightPencil,
    )

  }

  if (counter === 6) {
    sendToPoints.push(

      ...downwardVerticalLinePoints,
      ...calculateLabel(downwardVerticalEndPoint, "b1", "down"),
      ...lightPencil,
    )

  }

  if (counter === 7) {
    sendToPoints.push(

      ...firstAngledLinePoints,
      ...lightPencil,
    )

  }

  if (counter === 8) {
    sendToPoints.push(

      ...secondAngledLinePoints,
      ...lightPencil,
    )

  }

  if (counter === 9) {
    sendToPoints.push(

      ...dashedLinePoints,
      ...labeleddashedLineStart,
      ...labeleddashedLineEnd,
      ...lightPencil,
    )

  }

  if (counter === 10) {
    sendToPoints.push(

      ...dashedLinePointsDown,
      ...labeleddashedLineStartDown,
      ...labeleddashedLineEndDown,
      ...lightPencil,
    )

  }

  if (counter === 11) {
    sendToPoints.push(

      ...newdrawuppercricle,
      ...lightPencil,
    )

  }

  if (counter === 12) {
    sendToPoints.push(
      ...newdrawlowercricle,
      ...lightPencil,

    )

  }

  if (counter === 13) {
    sendToPoints.push(

      ...newangledLinePointsUp,
      ...calculateLabel(newangledLineEndUp, "b'2", "up"),
      ...darkPencil,
    )

  }

  if (counter === 14) {
    sendToPoints.push(
      ...newangledLinePointsDown,
      ...calculateLabel(newangledEndPointDown, "b2", "down"),
      ...darkPencil,
    )

  }

  if (counter === 15) {
    sendToPoints.push(

      ...verticalLinePointsBetweenArcs,
      ...lightPencil,
    )
  }
  const steps = projectionOfLine_4Steps(); // Generate steps dynamically
  let step = steps[counter];


  return { points: sendToPoints, step };
}

// ----------------------------------------------------------------------



export function getProblem12Points() {
  const startPoint = { x: 100, y: 200 };
  const verticalLengthDown = 20;
  const upperAngle = 30; // in degrees
  const diagonalLength = 90; // length in mm
  const angledLineLength = 65;

  const verticalStartPointDown = startPoint;
  const verticalEndPointDown = {
    x: verticalStartPointDown.x,
    y: verticalStartPointDown.y + verticalLengthDown,
  };
  const verticalLineDownPoints = calculateLinePoints(verticalStartPointDown, verticalEndPointDown);
  const labeledverticalEndPointDown = calculateLabel(verticalEndPointDown, "a", "left");
  // Diagonal line from a' with length 90 mm and angle 30°
  // Convert angle to radians for trigonometric functions
  const diagonalAngleRadians = (Math.PI / 180) * upperAngle;
  const diagonalStartPoint = startPoint; // Starting from a'
  const diagonalEndPoint = {
    x: diagonalStartPoint.x + diagonalLength * Math.cos(diagonalAngleRadians),
    y: diagonalStartPoint.y - diagonalLength * Math.sin(diagonalAngleRadians),
  };
  const diagonalLinePoints = calculateLinePoints(diagonalStartPoint, diagonalEndPoint);
  const labeleddiagonalLinePoints = calculateLabel(diagonalEndPoint, "b'", "up");
  // Calculate new vertical length using the hypotenuse formula
  const newverticalLengthUP = diagonalLength * Math.sin(diagonalAngleRadians);
  const newverticalStartPointUp = diagonalEndPoint;
  const newverticalEndPointUp = {
    x: newverticalStartPointUp.x,
    y: newverticalStartPointUp.y + (newverticalLengthUP + verticalLengthDown),
  };
  const newverticalLineUpPoints = calculateLinePoints(newverticalStartPointUp, newverticalEndPointUp);
  const newHorizontalLinePointsdown = calculateLinePoints(verticalEndPointDown, newverticalEndPointUp);
  const newlabeledHorizontalLinePointsdown = calculateLabel(newverticalEndPointUp, "b", "right");
  const dashLineLength = 500 / 2; // Set the length of the dashed line
  const dashedLineStart = { x: diagonalEndPoint.x - dashLineLength / 2, y: diagonalEndPoint.y };
  const dashedLineEnd = { x: diagonalEndPoint.x + dashLineLength / 2, y: diagonalEndPoint.y };
  // const upperDashedLinePoints = calculateDashLinePoints(dashedLineStart, dashedLineEnd);
  const upperDashedLinePoints = calculateDashLinePoints(dashedLineStart, dashedLineEnd);
  const labeleddashedLineStart = calculateLabel(dashedLineStart, "p", "left");
  const labeleddashedLineEnd = calculateLabel(dashedLineEnd, "q", "right");
  // Calculate new angled line endpoint
  const angledLineStartPoint = startPoint;
  const fixedY = dashedLineStart.y; // The Y-coordinate is fixed by the dashed line
  // Solve for x-coordinate using Pythagorean theorem
  const deltaY = fixedY - angledLineStartPoint.y; // Vertical distance
  const deltaX = Math.sqrt(angledLineLength ** 2 - deltaY ** 2); // Horizontal distance
  const angledLineEndPoint = {
    x: angledLineStartPoint.x + deltaX, // Add deltaX for rightward movement
    y: fixedY,
  };


  const angledLinePoints = calculateLinePoints(angledLineStartPoint, angledLineEndPoint);
  const labeledAngledLineEndPoint = calculateLabel(angledLineEndPoint, "b'1", "up");
  // Length of the new vertical line
  const verticalLineFromAngledLength = 122; // Set desired length
  // Starting point is the endpoint of the angled line
  const verticalLineFromAngledStartPoint = angledLineEndPoint;
  // Calculate endpoint of the vertical line
  const verticalLineFromAngledEndPoint = {
    x: verticalLineFromAngledStartPoint.x,
    y: verticalLineFromAngledStartPoint.y + verticalLineFromAngledLength, // Adjust for upward direction
  };
  // Generate points for the vertical line
  const verticalLineFromAngledPoints = calculateLinePoints(
    verticalLineFromAngledStartPoint,
    verticalLineFromAngledEndPoint
  );
  const angledlinedown = calculateLinePoints(verticalEndPointDown, verticalLineFromAngledEndPoint);
  const labeledangledlinedown = calculateLabel(verticalLineFromAngledEndPoint, "b", "down");
  const dashedLineStartDown = { x: verticalLineFromAngledEndPoint.x - dashLineLength / 2, y: verticalLineFromAngledEndPoint.y };
  const dashedLineEndDown = { x: verticalLineFromAngledEndPoint.x + dashLineLength / 2, y: verticalLineFromAngledEndPoint.y };
  // const dashedLinePointsDown = calculateDashLinePoints(dashedLineStartDown, dashedLineEndDown);
  const dashedLinePointsDown = calculateDashLinePoints(dashedLineStartDown, dashedLineEndDown);
  const labeleddashedLineStartDown = calculateLabel(dashedLineStartDown, "r", "left");
  const labeleddashedLineEndDown = calculateLabel(dashedLineEndDown, "s", "right");
  // New angled line starting at verticalEndPointDown and ending at dashedLinePointsDown with length 90mm
  const newAngledLineLength = 90; // Length in mm
  const angledLineStartPointNew = verticalEndPointDown; // Starting from verticalEndPointDown
  const fixedYNew = dashedLinePointsDown[0].y; // The Y-coordinate is fixed by dashedLinePointsDown
  // Calculate the deltaY between the start and the fixed endpoint
  const deltaYNew = fixedYNew - angledLineStartPointNew.y;
  // Solve for deltaX using Pythagorean theorem
  const deltaXNew = Math.sqrt(newAngledLineLength ** 2 - deltaYNew ** 2); // Horizontal distance
  // Determine the end point of the angled line
  const angledLineEndPointNew = {
    x: angledLineStartPointNew.x + deltaXNew, // Add deltaX for rightward movement
    y: fixedYNew,
  };
  // Generate the angled line points
  const newAngledLinePoints = calculateLinePoints(angledLineStartPointNew, angledLineEndPointNew);
  // Optionally label the endpoint
  const labeledNewAngledLineEndPoint = calculateLabel(angledLineEndPointNew, "b2", "down");
  const lowerarc = calculateArcPoints(verticalEndPointDown, angledLineEndPointNew);
  const newdrawlowercricle = drawQuarterCircle(verticalEndPointDown, 360, 312, 78);

  return [
    ...drawXYaxis(),
    ...verticalLineDownPoints,
    ...lightPencil,
    ...labeledverticalEndPointDown,
    ...lightPencil,
    ...diagonalLinePoints, // Add the diagonal line
    ...lightPencil,
    ...labeleddiagonalLinePoints,
    ...newverticalLineUpPoints,
    ...lightPencil,
    ...newHorizontalLinePointsdown,
    ...newlabeledHorizontalLinePointsdown,
    ...lightPencil,
    ...upperDashedLinePoints,
    ...labeleddashedLineStart,
    ...labeleddashedLineEnd,
    ...lightPencil,
    ...angledLinePoints,
    ...labeledAngledLineEndPoint,
    ...lightPencil,
    ...dashedLinePointsDown,
    ...labeleddashedLineStartDown,
    ...labeleddashedLineEndDown,
    ...lightPencil,
    ...angledlinedown,
    ...labeledangledlinedown,
    ...lightPencil,
    ...verticalLineFromAngledPoints,
    ...lightPencil,
    ...newAngledLinePoints,
    ...labeledNewAngledLineEndPoint,
    ...lightPencil,

    ...lowerarc,
    ...lightPencil,
    ...newdrawlowercricle,
    ...lightPencil,



  ]
}

// ------------------------------------------------------




export function getLineProblemSteps(values) {
  const { counter, firstPointAboveHPLength, firstpointfrontOfVPLength, LineLength, InclinationToVP, InclinationToHP, isPositive, drawingType } = values;

  const isAboveHPPositive = isPositive(firstPointAboveHPLength);
  const isFrontVPPositive = isPositive(firstpointfrontOfVPLength);

  const steps = {
    1: [`Draw the XY axis with a total line length of ${LineLength} mm`],
    2: isAboveHPPositive && isFrontVPPositive
      ? [
        `Draw a ${firstPointAboveHPLength} mm vertical line from the XY axis to the first point above HP and label it as a and a'`,
        `Draw a ${firstpointfrontOfVPLength} mm vertical line from the XY axis to the first point in front of VP and label it as b`,
      ]
      : isAboveHPPositive
        ? [`Draw a ${firstPointAboveHPLength} mm vertical line from the XY axis to the first point above HP and label it as a and a'`]
        : isFrontVPPositive
          ? [`Draw a ${firstpointfrontOfVPLength} mm vertical line from the XY axis to the first point in front of VP and label it as b`]
          : ["No valid points to calculate and draw"],
    3:
      drawingType === "parallelToVP&InclinationToHP" || drawingType === "parallelToVP"
        ? [
          `Draw a ${LineLength} mm horizontal line parallel to VP and label the second point as b'.`,
        ]
        : drawingType === "parallelToHP&InclinationToVP" || drawingType === "parallelToHP"
          ? [
            `Draw a ${LineLength} mm horizontal line parallel to HP and label the second point as b'.`,
          ]
          : drawingType === "perpendicularToVP"
            ? [
              `Draw a ${LineLength} mm vertical line perpendicular to VP and label the second point as b'.`,
            ]
            : drawingType === "perpendicularToHP"
              ? [
                `Draw a ${LineLength} mm vertical line perpendicular to HP and label the second point as b'.`,
              ]
              : drawingType === "parallelToBoth"
                ? [
                  `Draw a ${LineLength} mm horizontal line parallel to HP and label the second point as a1'.`,
                  `Draw a ${LineLength} mm horizontal line parallel to VP and label the second point as b'.`,
                ]

                : ["No valid drawingTypes to draw parallel, inclined, or perpendicular lines"],


    4:
      drawingType === "parallelToVP&InclinationToHP"
        ? [
          `Draw a vertical line from the second point front of VP (${LineLength} mm) to the second point above HP and label the point as c`,
        ]
        : drawingType === "parallelToHP&InclinationToVP"
          ? [
            `Draw a vertical line from the second point above HP (${LineLength} mm) to the second point front of VP and label the point as c`,
          ]
          : ["No valid drawingTypes to draw the vertical line and label it"],
    5:
      drawingType === "parallelToVP&InclinationToHP"
        ? [
          `Draw an inclined line from the first point above HP to the second point above HP with an angle of ${InclinationToHP}°`,
        ]
        : drawingType === "parallelToHP&InclinationToVP"
          ? [
            `Draw an inclined line from the first point front of VP to the second point front of VP with an angle of ${InclinationToVP}°`,
          ]
          : ["No valid drawingTypes to draw the inclined line"],
  };

  // Return step based on counter
  if (counter) {
    return steps[counter] || "Invalid step";
  }

  return steps;
}

export function getLineProblemPoints(payload) {
  const { counter, inputs, drawingType } = payload;

  const {
    LineLength = 0,
    firstPointAboveHPLength = 0,
    firstpointfrontOfVPLength = 0,
    secondpointAboveHPLength = 0,
    secondpointFrontOfVPLength = 0,
    InclinationToVP = 0,
    InclinationToHP = 0,
  } = inputs;

  // Adjust InclinationToVP if its value is 0
  // const adjustedInclinationToVP = InclinationToVP === 0 ? 360 : 360 - InclinationToVP;
  const adjustedInclinationToVP = InclinationToVP ? 360 - InclinationToVP : -1;

  let sendToPoints = [];

  // Helper function to validate if a value is greater than 0
  const isPositive = (value) => typeof value === "number" && value >= 0;
  
  // Proceed only if primary drawingTypes are met
  if(drawingType === "inclinationtoBoth" ){
  getLineInclinedToBothPlanesPoints(payload);
  }
  if (
    drawingType === "parallelToHPAndInclinationToVP" ||
    drawingType === "parallelToVPAndInclinationToHP" ||
    drawingType === "perpendicularToHP" ||
    drawingType === "perpendicularToVP" ||
    drawingType === "parallelToHP" ||
    drawingType === "parallelToVP" ||
    drawingType === "parallelToBoth"
  ) {
    // Calculate XY axis line points
    const xyAxisLineStartPoint = { x: startPoint.x + 100, y: startPoint.y };
    const xyAxisLineEndPoint = { x: xyAxisLineStartPoint.x + LineLength, y: startPoint.y };

    let firstPointAboveHP = xyAxisLineStartPoint;

    if (isPositive(firstPointAboveHPLength)) {
      firstPointAboveHP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y - firstPointAboveHPLength };
    }

    let firstPointFrontVP = xyAxisLineStartPoint;
    if (isPositive(firstpointfrontOfVPLength)) {
      firstPointFrontVP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y + firstpointfrontOfVPLength };
    }

    let secondPointAboveHP = null;
    let secondPointFrontVP = null;

    if (drawingType === "parallelToHPAndInclinationToVP" || drawingType === "parallelToBoth") {
      secondPointAboveHP = { x: firstPointAboveHP.x + LineLength, y: firstPointAboveHP.y };
    } 
    if (drawingType === "parallelToVPAndInclinationToHP" || drawingType === "parallelToBoth") {
      
      secondPointFrontVP = { x: firstPointFrontVP.x + LineLength, y: firstPointFrontVP.y };
      console.log("parallelToBoth : ",secondPointFrontVP );
    }

    if (drawingType === "parallelToHPAndInclinationToVP") {
      if (isPositive(secondpointFrontOfVPLength)) {
        secondPointFrontVP = { x: secondPointAboveHP.x, y: xyAxisLineStartPoint.y + secondpointFrontOfVPLength };
      } else if (isPositive(adjustedInclinationToVP)) {
          secondPointFrontVP = calculateAngledLinePoints(
          firstPointFrontVP,
          adjustedInclinationToVP,
          calculateHypotenuseWithAngle(LineLength, adjustedInclinationToVP)
        );
      }
    } else if (drawingType === "parallelToVPAndInclinationToHP") {
      console.log("InclinationToHP: ", InclinationToHP);
      if (isPositive(secondpointAboveHPLength)) {
        secondPointAboveHP = { x: secondPointFrontVP.x, y: xyAxisLineStartPoint.y - secondpointAboveHPLength };
      } if (isPositive(InclinationToHP) || isPositive(Number(InclinationToHP))) {
        secondPointAboveHP = calculateAngledLinePoints(
          firstPointAboveHP,
          InclinationToHP,
          calculateHypotenuseWithAngle(LineLength, InclinationToHP)
        );
        console.log("calculating secondPointAboveHP: ", secondPointAboveHP);
      }
      console.log("calculateHypotenuseWithAngle(LineLength, InclinationToHP): ", calculateHypotenuseWithAngle(LineLength, InclinationToHP));
      console.log("secondPointAboveHP: ", secondPointAboveHP);
    } else if (drawingType === "perpendicularToHP") {
      secondPointAboveHP = { x: firstPointAboveHP.x, y: firstPointAboveHP.y - LineLength };
    } else if (drawingType === "perpendicularToVP") {
      secondPointFrontVP = { x: firstPointFrontVP.x, y: firstPointFrontVP.y + LineLength };
    }



    if (counter === 1) {
      const xyAxisLinePoints = calculateLinePointsWithCircles(xyAxisLineStartPoint, xyAxisLineEndPoint);
      sendToPoints.push(...drawXYaxis());
    }


    if (counter === 2) {
      const firstPointAboveHPPoints = calculateLinePointsWithCircles(xyAxisLineStartPoint, firstPointAboveHP, lightPencil);
      const labelfirstPointAboveHPPoints = calculateLabel(firstPointAboveHP, "a'", "left");
      sendToPoints.push(
        ...firstPointAboveHPPoints,
        ...labelfirstPointAboveHPPoints
      );

      const firstpointfrontOfVPPoints = calculateLinePointsWithCircles(xyAxisLineStartPoint, firstPointFrontVP, lightPencil);
      const labelfirstpointfrontOfVPPoints = calculateLabel(firstPointFrontVP, "a", "left");
      sendToPoints.push(...firstpointfrontOfVPPoints, ...labelfirstpointfrontOfVPPoints);
    }


    if (counter === 3) {
      let parallelLinePoints;
      let labelparallelLinePoints = "";

      if (drawingType === "parallelToVPAndInclinationToHP" || drawingType === "perpendicularToVP") {
        parallelLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP,darkPencil,);
        labelparallelLinePoints= calculateLabel(secondPointFrontVP, "b'", "right");
      } else if (drawingType === "parallelToHPAndInclinationToVP" || drawingType === "perpendicularToHP") {
        parallelLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP,darkPencil);
        labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
      }else if (drawingType === "parallelToBoth") {
        parallelLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP,darkPencil);
        labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
      }


      sendToPoints = [
        ...parallelLinePoints,
        ...labelparallelLinePoints 
      ];
    } 
      
  

    if (
      drawingType === "parallelToVPAndInclinationToHP" ||
      drawingType === "parallelToHPAndInclinationToVP" ||
      drawingType === "parallelToBoth"
    ) {
      if (counter === 4) {
        
        let verticalLinePoints = null;
        let labelverticalLinePoints = "";
        if (drawingType === "parallelToVPAndInclinationToHP") {
          verticalLinePoints = calculateLinePointsWithCircles(secondPointFrontVP, secondPointAboveHP, lightPencil);
          labelverticalLinePoints = calculateLabel(secondPointAboveHP, "c", "right");
        } else if (drawingType === "parallelToHPAndInclinationToVP") {
          console.log("error secondPointAboveHP: ", secondPointAboveHP);
          console.log("error secondPointFrontVP: ", secondPointFrontVP);
    
          verticalLinePoints = calculateLinePointsWithCircles(secondPointAboveHP, secondPointFrontVP, lightPencil);
          labelverticalLinePoints = calculateLabel(secondPointFrontVP, "c", "right");
        } else if (drawingType === "parallelToBoth") {
          console.log("parallelToBoth firstPointFrontVP: ", firstPointFrontVP);
          console.log("parallelToBoth secondPointFrontVP: ", secondPointFrontVP);
          //parallelLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP);
          //labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
          verticalLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, darkPencil);
          labelverticalLinePoints = calculateLabel(secondPointFrontVP, "b", "right");
        }

        sendToPoints = [
          ...verticalLinePoints,
          ...labelverticalLinePoints
        ];
      }}
      if (
        drawingType === "parallelToVPAndInclinationToHP" ||
        drawingType === "parallelToHPAndInclinationToVP" 
      ) {
      if (counter === 5) {
        let inclinedLinePoints = null;
        let calculatedAngle = null;
        if (drawingType === "parallelToVPAndInclinationToHP") {
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP,darkPencil);
          calculatedAngle = calculateAngleInDegrees(firstPointAboveHP, secondPointAboveHP);
        } else if (drawingType === "parallelToHPAndInclinationToVP") {
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP,darkPencil);
          calculatedAngle = calculateAngleInDegrees(firstPointFrontVP, secondPointFrontVP);
        }

        sendToPoints = [...inclinedLinePoints];
      }
    }
  }

  let values = {
    counter,
    firstPointAboveHPLength,
    firstpointfrontOfVPLength,
    LineLength,
    InclinationToVP: adjustedInclinationToVP,
    InclinationToHP,
    isPositive,
    drawingType,
  };

  const step = getLineProblemSteps(values);

  return { points: sendToPoints, step };
}



// ----------------------------------------


export function getLineInclinedToBothPlanesPoints(payload) {

  //Problem 10-8 (fig 10-31) page 214
  //Problem 10-9 (fig 10-33) page 215
  //Problem 10-11 (fig 10-35) page 216
  //Problem 10-17 (fig 10-42) page 220
  //
  //Problem 10-12 (fig 10-36) page 217 Work on it
  //Problem 10-14 (fig 10-39) page 218 Work on it New parameter needed
  //Problem 10-10 (fig 10-34) page 216 Work on it New parameter needed for midpoint check in question paper

  const { counter, inputs, drawingType ,finalDrawing} = payload;
  const isPositive = (value) => typeof value === "number" && value >= 0;
  

  let LineLength = Number(inputs.LineLength) || 0;
  let firstPointAboveHPLength = Number(inputs.firstPointAboveHPLength) || 0;
  let firstpointfrontOfVPLength = Number(inputs.firstpointfrontOfVPLength) || 0;
  let secondpointAboveHPLength = Number(inputs.secondpointAboveHPLength) || 0;
  let secondpointFrontOfVPLength = Number(inputs.secondpointFrontOfVPLength) || 0;
  let InclinationToVP = Number(inputs.InclinationToVP) || -1;
  let InclinationToHP = Number(inputs.InclinationToHP) || -1;
  let topViewLength = Number(inputs.topViewLength) ||0;
  let frontViewLength = Number(inputs.frontViewLength) ||0;

  console.log("LineLength : " + LineLength);
  console.log(inputs);

  // Calculate XY axis line points
  const xyAxisLineStartPoint = { x: startPoint.x + 100, y: startPoint.y };
  

  let firstPointAboveHP = xyAxisLineStartPoint;

    if (isPositive(firstPointAboveHPLength)) {
      firstPointAboveHP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y - firstPointAboveHPLength };
    }

    let firstPointFrontVP = xyAxisLineStartPoint;
    if (isPositive(firstpointfrontOfVPLength)) {
      firstPointFrontVP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y + firstpointfrontOfVPLength };
    }
    
    let frontViewLengthSecondPointAboveHP;
    //if(isPositive(frontViewLength) && !isPositive(InclinationToHP)){
    if(isPositive(frontViewLength) && !isPositive(InclinationToHP)){
      console.log("it is here as well af af", isPositive(InclinationToHP));
      frontViewLengthSecondPointAboveHP = { x: firstPointAboveHP.x + frontViewLength, y: firstPointAboveHP.y };
    }

    let topViewLengthSecondPointfrontOfVP;
    if(isPositive(topViewLength)){
      topViewLengthSecondPointfrontOfVP = { x: firstPointFrontVP.x + topViewLength, y: firstPointFrontVP.y };
    } else if(isPositive(InclinationToHP)){
      console.log("calculating InclinationToHP : ", InclinationToHP);
      let projectPointOfTopViewTemp = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, LineLength);
      topViewLengthSecondPointfrontOfVP = { x: projectPointOfTopViewTemp.x, y: firstPointFrontVP.y };
      console.log("calculating InclinationToHP : ", InclinationToHP, ": topViewLengthSecondPointfrontOfVP : ", topViewLengthSecondPointfrontOfVP);
    }

    let projectPointOfTopView; 
    if(isPositive(LineLength)){
      if(isPositive(topViewLength)){
        projectPointOfTopView = {x: topViewLengthSecondPointfrontOfVP.x, y: firstPointAboveHP.y - calculateHeight(LineLength, topViewLength)}
      } else if(isPositive(InclinationToHP)){        
        projectPointOfTopView = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, LineLength);
        console.log("calculating projectPointOfTopView with angle", projectPointOfTopView);
      }
    }

    
    let finalPointOfFrontView;
    if(isPositive(frontViewLength)){
      finalPointOfFrontView = {x: firstPointAboveHP.x + calculateHeight(frontViewLength, firstPointAboveHP.y - projectPointOfTopView.y), y: projectPointOfTopView.y};
    } else if(isPositive(InclinationToHP) && isPositive(InclinationToVP) && isPositive(LineLength)) {
      let projectPointOfFrontViewTemp = calculateAngledLinePoints(firstPointFrontVP, InclinationToVP, LineLength);
      let radius = projectPointOfTopView.x - firstPointFrontVP.x;      
      let height = firstPointFrontVP.y - projectPointOfFrontViewTemp.y;
      finalPointOfFrontView = {x: firstPointAboveHP.x + calculateHeight(radius, height), y: projectPointOfTopView.y}
      console.log("radius: ", radius);
      console.log("height: ", height);
      console.log("height: ", calculateHeight(radius, height));
    }
    
    let projectPointOfFrontView;
    if(isPositive(LineLength) && isPositive(frontViewLength) && !isPositive(InclinationToHP)){
      projectPointOfFrontView = {x: frontViewLengthSecondPointAboveHP.x, y: firstPointFrontVP.y + calculateHeight(LineLength, frontViewLength)}; 
    } else if(isPositive(InclinationToHP) && !isPositive(InclinationToVP)){
      let finalPointOfTopViewTemp = {x: finalPointOfFrontView.x, y: firstPointFrontVP.y + calculateHeight(topViewLengthSecondPointfrontOfVP.x - firstPointFrontVP.x, finalPointOfFrontView.x - firstPointAboveHP.x)};
      projectPointOfFrontView = {x: firstPointFrontVP.x + calculateHeight(LineLength, finalPointOfTopViewTemp.y - firstPointFrontVP.y), y: finalPointOfTopViewTemp.y};  
    } else if(isPositive(InclinationToHP)){
      projectPointOfFrontView = calculateAngledLinePoints(firstPointFrontVP, 360-InclinationToVP, LineLength);  
    }
    console.log("it is here as well topViewLength");
    
    let finalPointOfTopView;
    if(isPositive(topViewLength)){
      
      finalPointOfTopView = {x: firstPointFrontVP.x + calculateHeight(topViewLength, projectPointOfFrontView.y - firstPointFrontVP.y), y: projectPointOfFrontView.y};
    } else if(isPositive(InclinationToHP)){
      finalPointOfTopView = {x: finalPointOfFrontView.x, y: firstPointFrontVP.y + calculateHeight(topViewLengthSecondPointfrontOfVP.x - firstPointFrontVP.x, finalPointOfFrontView.x - firstPointAboveHP.x)};
    }

    console.log("it is here as well", isPositive(InclinationToHP));
    console.log("firstPointAboveHP : ",firstPointAboveHP);
    console.log("firstPointFrontVP : ", firstPointFrontVP);
    console.log("frontViewLengthSecondPointAboveHP : ", frontViewLengthSecondPointAboveHP);
    console.log("topViewLengthSecondPointfrontOfVP : ", topViewLengthSecondPointfrontOfVP);
    console.log("projectPointOfTopView: ", projectPointOfTopView);
    console.log("projectPointOfFrontView: ", projectPointOfFrontView);
    console.log("finalPointOfFrontView: ", finalPointOfFrontView);
    console.log("finalPointOfTopView: ", finalPointOfTopView);
    
    let drawAll = false;
    const sendToPoints = [];
    // Return points and step description based on the counter value
    if (counter === 1|| drawAll) {
      sendToPoints.push(...drawXYaxis());
      if (finalDrawing) {
        drawAll = true;
    }
    }   

    if (counter === 2|| drawAll) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(xyAxisLineStartPoint, firstPointAboveHP),
        ...lightPencil,
        ...calculateLinePointsWithCircles(xyAxisLineStartPoint, firstPointFrontVP),
        ...lightPencil,
        ...getCirclePoints(firstPointAboveHP),
        ...darkPencil,
        ...getCirclePoints(firstPointFrontVP),
        ...darkPencil,
        ...calculateLabel(firstPointAboveHP, "a'", "left-up"),
        ...calculateLabel(firstPointFrontVP, "a", "left-down"),
        ...darkPencil,
      )
      if (finalDrawing) {
        drawAll = true;
    }
    }

    if (counter === 3|| drawAll) {
      if(frontViewLengthSecondPointAboveHP!=null){
        console.log("crossed not null");
        sendToPoints.push(
          ...calculateLinePointsWithCircles(firstPointAboveHP, frontViewLengthSecondPointAboveHP),
          ...calculateLabel(frontViewLengthSecondPointAboveHP, "b1'", "right-up"),
          ...lightPencil
        )
      }
      if(isPositive(InclinationToHP)){
        sendToPoints.push(          
          ...calculateArcPoints(firstPointAboveHP,projectPointOfTopView),
          ...lightPencil,          
          ...calculateLabel(projectPointOfTopView, "b'", "right-up"),
          ...calculateLinePointsWithCircles(firstPointAboveHP,projectPointOfTopView),
          ...darkPencil
        )
      }
      if (finalDrawing) {
        drawAll = true;
    }
    }    
    
    if (counter === 4|| drawAll) {
      
      if(isPositive(topViewLength)){
        sendToPoints.push(
          ...calculateLinePointsWithCircles(firstPointFrontVP, topViewLengthSecondPointfrontOfVP),
          ...calculateLabel(topViewLengthSecondPointfrontOfVP, "b1", "right-down"),
          ...lightPencil
        )
      }
      if(isPositive(InclinationToHP)){
        sendToPoints.push(
          ...calculateLinePointsWithCircles(projectPointOfTopView, topViewLengthSecondPointfrontOfVP),
          ...lightPencil,
          ...calculateLinePointsWithCircles(firstPointFrontVP, topViewLengthSecondPointfrontOfVP),
          ...calculateLabel(topViewLengthSecondPointfrontOfVP, "b1", "right-down"),
          ...lightPencil
        )
      }
      if (finalDrawing) {
        drawAll = true;
    }
    }

    if (counter === 5|| drawAll) {

      if(isPositive(topViewLength)){
        sendToPoints.push(
          ...calculateLinePointsWithCircles(topViewLengthSecondPointfrontOfVP, projectPointOfTopView),
          ...calculateLabel(projectPointOfTopView, "b'", "right-up"),
          ...calculateArcPoints(firstPointAboveHP,projectPointOfTopView),
          ...lightPencil,        
          ...calculateLinePointsWithCircles(firstPointAboveHP,projectPointOfTopView),
          ...darkPencil,
          ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: projectPointOfTopView.y },  { x: projectPointOfTopView.x + 50, y: projectPointOfTopView.y }),
          ...lightPencil
        )
        
      }

      if(isPositive(InclinationToHP)){
        sendToPoints.push(
          ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: projectPointOfTopView.y },  { x: projectPointOfTopView.x + 50, y: projectPointOfTopView.y }),
          ...lightPencil,       
          ...calculateLinePointsWithCircles(firstPointAboveHP, finalPointOfFrontView),
          ...calculateLabel(finalPointOfFrontView, "b'2", "left-up"),
          ...darkPencil,
        )
      }
      if (finalDrawing) {
        drawAll = true;
    }
    }

    

    if (counter === 6|| drawAll) {
      if(isPositive(topViewLength)){
        sendToPoints.push(
          ...calculateLinePointsWithCircles(frontViewLengthSecondPointAboveHP, projectPointOfFrontView),
          ...calculateLabel(projectPointOfFrontView, "b1", "right-down"),
          ...calculateArcPoints(firstPointFrontVP,projectPointOfFrontView),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP,projectPointOfFrontView),
        ...darkPencil,
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: projectPointOfFrontView.y },  { x: projectPointOfFrontView.x + 50, y: projectPointOfFrontView.y }),
        ...lightPencil
        )
      }

      if(isPositive(InclinationToHP)){
        sendToPoints.push(       
          ...calculateLinePointsWithCircles(finalPointOfFrontView, finalPointOfTopView),
          ...lightPencil
        )
      }
      if (finalDrawing) {
        drawAll = true;
    }
    }
    
    if (counter === 7|| drawAll) {
      if(frontViewLengthSecondPointAboveHP!=null){
        const drawUpperCircle = drawQuarterCircle(firstPointAboveHP, 0, 50, frontViewLength);
        sendToPoints.push(
          ...drawUpperCircle,
          ...lightPencil,
        )
      }
      console.log("Till this point");
      let drawLowerCircleRadius=-1;
      if(isPositive(topViewLength)){
        drawLowerCircleRadius = topViewLength;
      } else if(isPositive(InclinationToHP)){
        drawLowerCircleRadius = calculateDistance(topViewLengthSecondPointfrontOfVP, firstPointFrontVP);
        console.log("drawLowerCircleRadius: ",drawLowerCircleRadius);
      }
      if(isPositive(drawLowerCircleRadius)){
        const drawLowerCircle = drawQuarterCircle(firstPointFrontVP, 360, 270, drawLowerCircleRadius);
        sendToPoints.push(
          ...drawLowerCircle,
          ...lightPencil,
        )
      }
      console.log("Till this point as well");
      sendToPoints.push(       
        ...calculateLinePointsWithCircles(firstPointAboveHP, finalPointOfFrontView),
        ...calculateLabel(finalPointOfFrontView, "b2'", "left-up"),
        ...darkPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, finalPointOfTopView),
        ...calculateLabel(finalPointOfTopView, "b2", "left-down"),
        ...darkPencil,
      )

      if(isPositive(InclinationToHP)){
        sendToPoints.push(   
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: finalPointOfTopView.y },  { x: finalPointOfTopView.x + 80, y: finalPointOfTopView.y }),
        ...lightPencil,
        ...calculateArcPoints(firstPointFrontVP, projectPointOfFrontView),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, projectPointOfFrontView),
        ...darkPencil,
        ...calculateLabel(projectPointOfFrontView, "b", "right-down")
        )
      }
      if (finalDrawing) {
        drawAll = true;
    } 
    }

    if (counter === 8|| drawAll) {
      sendToPoints.push(
        ...calculateLabel({x: finalPointOfTopView.x + 100, y: finalPointOfTopView.y + 20}, "θ = "+ calculateAngleInDegrees(firstPointAboveHP,finalPointOfFrontView), "left"),
        ...calculateLabel({x: finalPointOfTopView.x + 100, y: finalPointOfTopView.y + 40}, "Φ = "+ calculateAngleInDegrees(firstPointFrontVP,finalPointOfTopView), "left")
      )
      if (finalDrawing) {
        drawAll = true;
    }
    }

  const steps = projectionOfLine_4Steps(); // Generate steps dynamically
  const step = drawAll
  ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
  : steps[counter];

  return { points: sendToPoints, step };
}



