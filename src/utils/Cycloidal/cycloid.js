




import { generateFullCircle } from "../Ellipse/ellipse_by_concentricCriclemethodPoint";
import { calculateAngle, calculateAngledLinePoints , calculateArcPoints, calculateArcRadius, calculateBase, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
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
    let Diameter = Number(inputs["Diameter"]) || 0;
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

//     // Iterate over the last 5 division points
const lastFivePoints = divisionPoints.slice(-5); // Get the last 5 points
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
 
    const cycloidCenterPoint = [];

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
        cycloidCenterPoint.push(verticalLineEnd);
        const verticalLinePoints = calculateLinePointsWithCircles(verticalLineStart, verticalLineEnd, lightPencil);
        const label_c = calculateLabel(verticalLineEnd, `c${i + 0}`, "down");
        verticalLinesFrombaseline.push(...verticalLinePoints, ...lightPencil, ...label_c, ...darkPencil);

    }

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        const majorCirclePoints = generateFullCircle(midpoint, major_half);

        console.log("cycloidCenterPoint = ", cycloidCenterPoint[0]);
        console.log("divisionPoints = ", divisionPoints[0]);
        
        
        sendToPoints.push(
            ...Diameter_LinePoints,
            ...darkPencil,
            ...majorCirclePoints,
            ...darkPencil,
            ...labelmid,
            ...darkPencil,
            
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
            verticalLines.push(...verticalLine, ...lightPencil
                ,...Circlelabel_labelstartpoint,...Circlelabel_labelendpoint
            );
            
        }
        // for (let i = 0; i < 12; i++) {
        //     const labelPointsCircle = calculateLabel(divisionPoints[i], i + 1, "up"); // Position label above the point
        //     sendToPoints.push(...labelPointsCircle);
        // }
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

    if(counter === 7 || drawAll){
        let x1 = calculateBase(Diameter/2, cycloidCenterPoint[0].y -  divisionPoints[11].y);
        let x2 = calculateBase(Diameter/2, cycloidCenterPoint[1].y -  divisionPoints[10].y);
        let x3 = calculateBase(Diameter/2, cycloidCenterPoint[2].y -  divisionPoints[9].y);
        let x4 = calculateBase(Diameter/2, cycloidCenterPoint[3].y -  divisionPoints[8].y);
        let x5 = calculateBase(Diameter/2, cycloidCenterPoint[4].y -  divisionPoints[7].y);
        let x6 = calculateBase(Diameter/2, cycloidCenterPoint[5].y -  divisionPoints[6].y);
        let x7 = calculateBase(Diameter/2, cycloidCenterPoint[6].y -  divisionPoints[5].y);
        let x8 = calculateBase(Diameter/2, cycloidCenterPoint[7].y -  divisionPoints[4].y);
        let x9 = calculateBase(Diameter/2, cycloidCenterPoint[8].y -  divisionPoints[3].y);
        let x10 = calculateBase(Diameter/2, cycloidCenterPoint[9].y -  divisionPoints[2].y);
        let x11 = calculateBase(Diameter/2, cycloidCenterPoint[10].y -  divisionPoints[1].y);
        let x12 = calculateBase(Diameter/2, cycloidCenterPoint[11].y -  divisionPoints[0].y);
        sendToPoints.push(
            ...calculateArcPoints(cycloidCenterPoint[0], {x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y}),
            ...calculateArcPoints(cycloidCenterPoint[1], {x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y}),
            ...calculateArcPoints(cycloidCenterPoint[2], {x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y}),
            ...calculateArcPoints(cycloidCenterPoint[3], {x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y}),
            ...calculateArcPoints(cycloidCenterPoint[4], {x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y}),
            ...calculateArcPoints(cycloidCenterPoint[5], {x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y}),
            ...calculateArcPoints(cycloidCenterPoint[6], {x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y}),
            ...calculateArcPoints(cycloidCenterPoint[7], {x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y}),
            ...calculateArcPoints(cycloidCenterPoint[8], {x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y}),
            ...calculateArcPoints(cycloidCenterPoint[9], {x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y}),
            ...calculateArcPoints(cycloidCenterPoint[10], {x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y}),
            ...calculateArcPoints(cycloidCenterPoint[11], {x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y}),



            ...calculateLinePointsWithCircles(p_Point, {x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y}, {x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y}, {x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y}, {x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y}, {x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y}, {x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y}, {x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y}, {x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y}, {x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y}, {x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y}, {x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y}),
            ...calculateLinePointsWithCircles({x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y}, {x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y})
         

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

function calculateCycloidPoints(){

}



