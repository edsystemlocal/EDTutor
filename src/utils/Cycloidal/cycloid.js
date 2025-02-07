
import { generateFullCircle } from "../Ellipse/ellipse_by_concentricCriclemethodPoint";
import { calculateAngle, calculateAngledLinePoints, calculateArcPoints, calculateArcRadius, calculateBase, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, numPoints } from "../globalVariable";
import { drawParallelLine } from "../Scale/Scale";
export function cycloidSteps(values) {
    const { Diameter } = values;
    return {
        1: defineSteps(
            `Draw a circle of Diameter ${Diameter} mm with centre C.`
        ),
        2: defineSteps(
            "Divide circle into 12 equal parts."
        ),
        3: defineSteps(
            " Draw the directing line PA = πD, horizontal and tangential to the circle. "
        ),
        4: defineSteps(
            " Draw lines through points 1', 2', 3', etc., parallel to PA."
        ),
        5: defineSteps(
            "Divide PA into 12 equal parts and mark the divisions as 1,2,3, etc. "
        ),
        6: defineSteps(
            "Erect vertical lines from points 1, 2, 3, etc., to meet the centre line C at C1, C2, C3, etc."
        ),
        7: defineSteps(
            " Draw an arc with centre C1 and radius = Daimeter/2 to intersect the horizontal line through point 1 at point P1.",
             "Similarly, draw arcs with centres C2, C3, C4, etc., and radius = Daimeter/2, to intersect the horizontallocus lines through points 2, 3, 4, etc., at points P2, P3, P4, etc.,",
              "respectively.Draw a smooth curve passing through P1, P2, P3, P4, etc., to get the required cycloid."
        ),

    };
}
export function cycloidPoint(payload) {
    const { counter, inputs, finalDrawing } = payload;
    // const startPoint = { x: 100, y: 400 };
    // let { Diameter } = inputs;
    
    let Diameter = Number(inputs["Diameter"]) || 0;
    const startPoint = { x: 100, y: 250+ Diameter};
    let values = { Diameter }
    Diameter =Diameter*2;

    const Diameter_LineEndPoint = { x: startPoint.x + Diameter, y: startPoint.y };
    const Diameter_LinePoints = calculateLinePointsWithCircles(startPoint, Diameter_LineEndPoint);
    const midpoint = { x: (startPoint.x + Diameter_LineEndPoint.x) / 2, y: (startPoint.y + Diameter_LineEndPoint.y) / 2 };
    const labelmid = calculateLabel(midpoint, "c", "up");
    const halfLength = Diameter / 2;
    const p_Point = { x: midpoint.x, y: midpoint.y + halfLength };
    const label_p = calculateLabel(p_Point, "p", "down");
    const major_half = Diameter / 2;
    const string = 22 / 7 * Diameter;
    const BaseLineEndPoint = { x: p_Point.x + string, y: p_Point.y };
    const BaseLinePoints = calculateLinePointsWithCircles(p_Point, BaseLineEndPoint);
    const BaseLineendlabel = calculateLabel(BaseLineEndPoint, "a", "down");
    const InclinedEndPoint = calculateAngledLinePoints(p_Point, -20, (string-60));
    const InclinedLinePoints = calculateLinePointsWithCircles(p_Point, InclinedEndPoint, lightPencil);

    // Generate circles along the inclined line and label them
    const circleRadius = 1; // Radius of the circles
    const circleSpacing = (string-60)/12; // Distance between each circle
    const numberOfCircles = Math.floor((string-60) / circleSpacing); // Total circles to fit within 240 mm
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
        // const angle = startAngle + (i * (2 * Math.PI)) / numDivisions;
        const angle = startAngle - (i * (2 * Math.PI)) / numDivisions; // Subtract instead of add

        const xMajor = midpoint.x + major_half * Math.cos(angle);
        const yMajor = midpoint.y + major_half * Math.sin(angle);
        divisionPoints.push({ x: xMajor, y: yMajor });

    }

    // Create horizontal lines parallel to the baseline
    const horizontalLines = [];
    const baseLineLength =BaseLineEndPoint.x; // Calculate baseline length

        // Iterate over the last 5 division points
    const lastFivePoints = divisionPoints.slice(6); // Get the last 5 points
    const reversedPoints = lastFivePoints.reverse(); // Reverse the points so the lines start from the last point
    reversedPoints.forEach((point) => {
        // Calculate the horizontal line start and end points
        const horizontalLineStart = { x: point.x, y: point.y };
        const horizontalLineEnd = { x:baseLineLength+30, y: point.y }; // Extend parallel to the baseline
       
        // Generate points for the horizontal line
        const horizontalLinePoints = calculateLinePointsWithCircles(horizontalLineStart, horizontalLineEnd, lightPencil);
        horizontalLines.push(...horizontalLinePoints, ...lightPencil);
    });

    const numCircles = 13; // Total number of circles
    const circleSpacing1 = string / 12; // Distance between circles
    const verticalLinesFrombaseline = []; // New array to store vertical lines
    const cycloidCenterPoint = [];

    // Generate circles along the base line
    for (let i = 1; i < numCircles; i++) {
        // Calculate the center of the current circle
        const circleCenter = {
            x: p_Point.x + i * circleSpacing1,
            y: p_Point.y,
        };

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
            ...getCirclePoints(midpoint),
            ...labelmid,
            ...darkPencil,
            ...majorCirclePoints,
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
            const Circlelabel_labelstartpoint = calculateLabel(divisionPoints[i], `${i === 0 ? 12 : i}'`, "up");
            const Circlelabel_labelendpoint = calculateLabel(divisionPoints[i + 6], `${i +6}'`, "up");
            verticalLines.push(...verticalLine, ...lightPencil
                // , ...Circlelabel_labelstartpoint, ...Circlelabel_labelendpoint
            );
           
        }
        sendToPoints.push(
            ...verticalLines,
            ...lightPencil,
            
            
        );
        for (let i = 0; i < 12; i++) {
            const labelPointsCircle = calculateLabel(divisionPoints[i],`${i === 0 ? 12 : i}'`, "up"); // Position label above the point
            sendToPoints.push(...labelPointsCircle);
        }
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
        
        const numCircles = 13; // Total number of circles
        const circleSpacing = string / 12; // Distance between circles
        const circleRadius = 1; // Adjust radius as needed
        const circlePointsArray = [];
        const labels2 = [];
        const connectingLines = []; // Store lines connecting 1' to 1, 2' to 2, etc.
        const connectingLineLabels = []; // Array to store labels for connecting line endpoints
    
        // Generate circles along the base line in reverse order
        for (let i = numCircles - 1; i > 0; i--) {
            // Calculate the center of the current circle
            const circleCenter = {
                x: p_Point.x + i * circleSpacing,
                y: p_Point.y,
            };
    
            // Generate the circle points
            const circlePoints = getCirclePoints(circleCenter, circleRadius);
    
            // Add the circle points to the array
            circlePointsArray.push(...circlePoints);
            const label2 = `${i + 1}`;
    
            // Connect corresponding points
            const inclinedPoint = circleCenters[i - 1]; // Corresponding 1', 2', ..., 12'
            if (inclinedPoint) {
                const linePoints = calculateLinePointsWithCircles(inclinedPoint, circleCenter, lightPencil);
                connectingLines.push(...linePoints, ...lightPencil);
    
                // Add labels to the endpoint of the connecting line
                const lineEndPointLabel = calculateLabel(circleCenter, `${i}`, "left-down"); // Label for the circle
                // const lineStartPointLabel = calculateLabel(inclinedPoint, `${i}'`, "up"); // Label for inclined point
                connectingLineLabels.push(...lineEndPointLabel);
            }
        }
    
        sendToPoints.push(
            ...BaseLinePoints,
            ...darkPencil,
            ...InclinedLinePoints,
            ...darkPencil,
            ...inclinedCircles,
            ...darkPencil,
            // ...labels,
            ...connectingLines, // Add connecting lines
            ...connectingLineLabels // Add labels for connecting line endpoints
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

    if (counter === 7 || drawAll) {
        let x1 = calculateBase(Diameter / 2, cycloidCenterPoint[0].y - divisionPoints[11].y);
        let x2 = calculateBase(Diameter / 2, cycloidCenterPoint[1].y - divisionPoints[10].y);
        let x3 = calculateBase(Diameter / 2, cycloidCenterPoint[2].y - divisionPoints[9].y);
        let x4 = calculateBase(Diameter / 2, cycloidCenterPoint[3].y - divisionPoints[8].y);
        let x5 = calculateBase(Diameter / 2, cycloidCenterPoint[4].y - divisionPoints[7].y);
        let x6 = calculateBase(Diameter / 2, cycloidCenterPoint[5].y - divisionPoints[6].y);
        let x7 = calculateBase(Diameter / 2, cycloidCenterPoint[6].y - divisionPoints[5].y);
        let x8 = calculateBase(Diameter / 2, cycloidCenterPoint[7].y - divisionPoints[4].y);
        let x9 = calculateBase(Diameter / 2, cycloidCenterPoint[8].y - divisionPoints[3].y);
        let x10 = calculateBase(Diameter / 2, cycloidCenterPoint[9].y - divisionPoints[2].y);
        let x11 = calculateBase(Diameter / 2, cycloidCenterPoint[10].y - divisionPoints[1].y);
        let x12 = calculateBase(Diameter / 2, cycloidCenterPoint[11].y - divisionPoints[0].y);
        sendToPoints.push(
            ...calculateArcPoints(cycloidCenterPoint[0], { x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y }),
            ...calculateLabel({ x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y }, "p1", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[1], { x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y }),
            ...calculateLabel({ x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y }, "p2", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[2], { x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y }),
            ...calculateLabel({ x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y }, "p3", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[3], { x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y }),
            ...calculateLabel({ x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y }, "p4", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[4], { x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y }),
            ...calculateLabel({ x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y }, "p5", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[5], { x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y }),
            ...calculateLabel({ x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y }, "p6", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[6], { x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y }),
            ...calculateLabel({ x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y }, "p7", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[7], { x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y }),
            ...calculateLabel({ x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y }, "p8", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[8], { x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y }),
            ...calculateLabel({ x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y }, "p9", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[9], { x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y }),
            ...calculateLabel({ x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y }, "p10", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[10], { x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y }),
            ...calculateLabel({ x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y }, "p11", "left-up"),

            ...calculateArcPoints(cycloidCenterPoint[11], { x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y }),
            ...getCirclePoints( { x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y }),
            // ...calculateLabel({ x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y }, "p12", "left-up"),


            


            ...calculateLinePointsWithCircles(p_Point, { x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[0].x - x1, y: divisionPoints[11].y }, { x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[1].x - x2, y: divisionPoints[10].y }, { x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[2].x - x3, y: divisionPoints[9].y }, { x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[3].x - x4, y: divisionPoints[8].y }, { x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[4].x - x5, y: divisionPoints[7].y }, { x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[5].x - x6, y: divisionPoints[6].y }, { x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[6].x + x7, y: divisionPoints[5].y }, { x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[7].x + x8, y: divisionPoints[4].y }, { x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[8].x + x9, y: divisionPoints[3].y }, { x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[9].x + x10, y: divisionPoints[2].y }, { x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y }),
            ...calculateLinePointsWithCircles({ x: cycloidCenterPoint[10].x + x11, y: divisionPoints[1].y }, { x: cycloidCenterPoint[11].x + x12, y: divisionPoints[0].y }),

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

function calculateCycloidPoints() {

}



