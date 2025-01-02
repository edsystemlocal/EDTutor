

import { generateFullCircle } from "../Ellipse/ellipse_by_concentricCriclemethodPoint";
import { calculateAngle, calculateAngledLinePoints , calculateArcRadius, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, numPoints } from "../globalVariable";
import { drawParallelLine } from "../Scale/Scale";
export function cycloidSteps(values) {
    const { Diameter } = values;
    return {
        1: defineSteps(
            "Draw a circle of length equal to diameter/2."
        ),
        2: defineSteps(
            "Divide circle into 12 equal parts.And label the line."
        ),
        3: defineSteps(
            "Draw a line 'p-a' tangential to and equal to the circumference of the circle. "
        ),
        4: defineSteps(
            "Horizontal lines are to be drawn from the end points of all the vertical lines dividing the circle"
        ),
        5: defineSteps(
            "Divide p-a line  into 12 equal parts."
        ),
        6: defineSteps(
            "Divide mid horizontal line  into 12 equal parts according to the p-a lines.and label the line as c1,c2,c3..."
        )
       
    };
}
export function cycloidPoint(payload) {
    const { counter, inputs, finalDrawing } = payload;
    const startPoint = { x: 100, y: 400 };
    const { Diameter } = inputs;
    let values = { Diameter }

    const Diameter_LineEndPoint = { x: startPoint.x + Diameter, y: startPoint.y };
    const Diameter_LinePoints = calculateLinePointsWithCircles(startPoint, Diameter_LineEndPoint);
    const midpoint = { x: (startPoint.x + Diameter_LineEndPoint.x) / 2, y: (startPoint.y + Diameter_LineEndPoint.y) / 2 };
    const labelmid = calculateLabel(midpoint, "o", "up");
    const halfLength = Diameter / 2;
    const p_Point = { x: midpoint.x, y: midpoint.y + halfLength };
    const label_p = calculateLabel(p_Point, "p", "down");
    const major_half = Diameter / 2;
    const string = 22 / 7 * Diameter;
    const BaseLineEndPoint = { x: p_Point.x + string, y: p_Point.y };
    const BaseLinePoints = calculateLinePointsWithCircles(p_Point, BaseLineEndPoint);
    const BaseLineendlabel = calculateLabel(BaseLineEndPoint,"a","down");
    const InclinedEndPoint = calculateAngledLinePoints(p_Point, -20, 240);
    const InclinedLinePoints = calculateLinePointsWithCircles(p_Point, InclinedEndPoint, lightPencil);

    // Generate circles along the inclined line and label them
    const circleRadius = 1; // Radius of the circles
    const circleSpacing = 20; // Distance between each circle
    const numberOfCircles = Math.floor(240 / circleSpacing); // Total circles to fit within 240 mm
    const circleCenters = [];
    const inclinedCircles = [];
    const labels = [];

    for (let i = 0; i < numberOfCircles; i++) {
        // Calculate the center of the current circle
        const offset = circleSpacing * (i + 1);
        const center = calculateAngledLinePoints(p_Point, -20, offset);
        circleCenters.push(center);
        // Generate points for the circle using the getCirclePoints function
        const circlePoints = getCirclePoints(center, circleRadius);
        inclinedCircles.push(...circlePoints);
        // Generate a label for the circle
        const label = `${i + 1}'`;
        const labelPoints = calculateLabel(center, label, "down");
        labels.push(...labelPoints);
    }

    // Divide Major Circle into 12 Equal Parts
    const numDivisions = 12;
    const divisionPoints = [];
    const verticalLines = [];

    for (let i = 0; i < numDivisions; i++) {
        const startAngle = Math.PI / 2;
        const angle = startAngle + (i * (2 * Math.PI)) / numDivisions;

        const xMajor = midpoint.x + major_half * Math.cos(angle);
        const yMajor = midpoint.y + major_half * Math.sin(angle);
        divisionPoints.push({ x: xMajor, y: yMajor });
          
    }
    // Create horizontal lines parallel to the baseline
    const horizontalLines = [];
    const baseLineLength = BaseLineEndPoint.x - p_Point.x; // Calculate baseline length

    divisionPoints.forEach((point) => {
        // Calculate the horizontal line start and end points
        const horizontalLineStart = { x: point.x, y: point.y };
        const horizontalLineEnd = { x: point.x + baseLineLength, y: point.y }; // Extend parallel to the baseline

        // Generate points for the horizontal line
        const horizontalLinePoints = calculateLinePointsWithCircles(horizontalLineStart, horizontalLineEnd, lightPencil);
        horizontalLines.push(...horizontalLinePoints, ...lightPencil)
    });

    const numCircles = 13; // Total number of circles
    const circleSpacing1 = string / 12; // Distance between circles
    console.log("circleSpacing  = ", circleSpacing);
    const circleRadius1 = 1; // Adjust radius as needed
    const circlePointsArray = [];
    const labels2 = [];
    const connectingLines = []; // Store lines connecting 1' to 1, 2' to 2, etc.
    const verticalLinesFrombaseline = []; // New array to store vertical lines
 

    // Generate circles along the base line
    for (let i = 1; i < numCircles; i++) {
        // Calculate the center of the current circle
        const circleCenter = {
            x: p_Point.x + i * circleSpacing1,
            y: p_Point.y,
        };
    
        // Generate the circle points
        const circlePoints = getCirclePoints(circleCenter, circleRadius1);

        // Add the circle points to the array
        circlePointsArray.push(...circlePoints);
        const label2 = `${i + 0}`;
        const label2Points = calculateLabel(circleCenter, label2, "down");
        labels2.push(...label2Points);

        // Connect corresponding points
        const inclinedPoint = circleCenters[i - 1]; // Corresponding 1', 2', ..., 12'
        if (inclinedPoint) {
            const linePoints = calculateLinePointsWithCircles(inclinedPoint, circleCenter, lightPencil);

            connectingLines.push(...linePoints, ...lightPencil);
        }

        // Generate vertical line from baseline to horizontalLines
        const verticalLineStart = circleCenter;
        const verticalLineEnd = {
            x: circleCenter.x, y: circleCenter.y - (Diameter / 2)
        };
        const verticalLinePoints = calculateLinePointsWithCircles(verticalLineStart, verticalLineEnd, lightPencil);
        const label_c = calculateLabel(verticalLineEnd, `c${i + 0}`, "down");
        verticalLinesFrombaseline.push(...verticalLinePoints, ...lightPencil, ...label_c, ...darkPencil);

    }

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        const majorCirclePoints = generateFullCircle(midpoint, major_half);

        sendToPoints.push(
            ...Diameter_LinePoints,
            ...darkPencil,
            ...majorCirclePoints,
            ...darkPencil,
            ...labelmid,
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 || drawAll) {
        // Create vertical line from midpoint to circle's edge
        for (let i = 0; i <= 5; i++) {
            const verticalLine = calculateLinePointsWithCircles(divisionPoints[i], divisionPoints[i + 6], lightPencil);
            const Circlelabel_labelstartpoint = calculateLabel(divisionPoints[i], `${i + 1}`, "up");
            const Circlelabel_labelendpoint=calculateLabel(divisionPoints[i + 6], `${i + 7}`, "up");
            verticalLines.push(...verticalLine, ...lightPencil,...Circlelabel_labelstartpoint,...Circlelabel_labelendpoint);
        }
        sendToPoints.push(
            ...verticalLines,
            ...lightPencil,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {

        sendToPoints.push(
            ...label_p,
            ...BaseLinePoints,
            ...BaseLineendlabel,
            ...darkPencil,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
   
    if (counter === 4 || drawAll) {
       
        sendToPoints.push(
            ...horizontalLines,// Add horizontal lines to the drawing
            // ...circlePointsArray,
            // ...darkPencil,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 5 || drawAll) {

        sendToPoints.push(
            ...InclinedLinePoints,
            ...lightPencil,
            ...inclinedCircles,
            ...darkPencil,
            ...labels,
            ...connectingLines,
            ...darkPencil,  
            ...labels2,
            ...darkPencil,
         
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
  
    if (counter === 6 || drawAll) {
    
        sendToPoints.push(
            ...verticalLinesFrombaseline, // Add vertical lines
            ...darkPencil,
        );
    
        if (finalDrawing) {
            drawAll = true; // Ensure no unintended infinite loop
        }
    }
    const steps = cycloidSteps(values); // Generate steps dynamically
    const step = drawAll
        ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
        : steps[counter];
    return { points: sendToPoints, step }; // Return empty points and message for invalid counter
}



