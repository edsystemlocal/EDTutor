import { connection } from "next/server";
import { calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateDistance, calculateHeight, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";
import { roundUpToTwoDecimalPlaces } from "../Line/lineproblem";
export function involute_by_generalmethodSteps(values) {
    const { Diameter , string} = values;
    return {
        1: defineSteps(
            `Draw a circle of Diameter ${Diameter} mm with centre O.`
        ),
        2: defineSteps(
            "Divide circle into 12 equal parts.And label the line."
        ),
        3: defineSteps(
            `Draw the directing line PA = πD = ${string} mm long and divide it into 12 equal parts. Mark its divisions as 1', 2' 3', etc. `
        ),
        4: defineSteps(
            "  Draw tangents to the circle at points 1, 2, 3, 4, etc., such that they represent the thread position during unwound."
        ),
        5: defineSteps(
            " The length of thread when unwound for 1/12th revolution is equal to P1. Therefore, draw an arc with centre 1 and radius P1 to intersect the tangent line through point 1 at point P1."
        ),
        6: defineSteps(
            "Erect vertical lines from points 1, 2, 3, etc., to meet the centre line C at C1, C2, C3, etc."
        ),
        7: defineSteps(
            " Draw an arc with centre C1 and radius = Daimeter/2 to intersect the horizontal line through point 1 at point P1.",
             "Similarly, draw arcs with centres C2, C3, C4, etc., and radius = Daimeter/2, to intersect the horizontallocus lines through points 2, 3, 4, etc., at points P2, P3, P4, etc.,",
              "respectively.Draw a smooth curve passing through P1, P2, P3, P4, etc., to get the required cycloid."
        ),
    }
}

export function involute_by_generalmethod(payload) { //ParalleltoHP_and_InclinedtoVP
    const { counter, inputs, finalDrawing } = payload;
    // const startPoint = { x: 300, y: 400 };

    let Diameter = Number(inputs["Diameter"]) || 0;
   let string = 22 / 7 * Diameter;
    const startPoint = { x: 200+Diameter, y: 500+ Diameter};
    console.log("string = ", string)


    let values = {
        Diameter,
        string
    }
Diameter  =Diameter*2;
string = string*2 ;
    const DiameterLineEndPoint = { x: startPoint.x + Diameter, y: startPoint.y };
    const DiameterLinePoints = calculateLinePointsWithCircles(startPoint, DiameterLineEndPoint);

    const midpoint = { x: (startPoint.x + DiameterLineEndPoint.x) / 2, y: (startPoint.y + DiameterLineEndPoint.y) / 2 };

    const halfLength = Diameter / 2;
    const cd_LineStartPoint = { x: midpoint.x, y: midpoint.y - halfLength };
    const cd_LineEndPoint = { x: midpoint.x, y: midpoint.y + halfLength };
    const cd_LinePoints = calculateLinePointsWithCircles(cd_LineStartPoint, cd_LineEndPoint);


    const major_half = Diameter / 2;
    const majorCirclePoints = generateFullCircle(midpoint, major_half);


    const BaseLineStartPoint = cd_LineEndPoint;
    const BaseLineEndPoint = { x: BaseLineStartPoint.x + string, y: BaseLineStartPoint.y };
    const BaseLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, BaseLineEndPoint);

    const InclinedEndPoint = calculateAngledLinePoints(BaseLineStartPoint, -20, (string-60));
    const InclinedLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, InclinedEndPoint);

    // Generate circles along the inclined line and label them
    const circleRadius = 1; // Radius of the circles
    const circleSpacing = (string-60)/12; // Distance between each circle
    const numberOfCircles = Math.floor((string-60) / circleSpacing); // Total circles to fit within 240 mm

    const circleCenters = [];
    const inclinedCircles = [];
    // const labels = [];

    for (let i = 0; i < numberOfCircles; i++) {
        // Calculate the center of the current circle
        const offset = circleSpacing * (i + 1);
        const center = calculateAngledLinePoints(BaseLineStartPoint, -20, offset);
        circleCenters.push(center);

        // Generate points for the circle using the getCirclePoints function
        const circlePoints = getCirclePoints(center, circleRadius);
        inclinedCircles.push(...circlePoints);

        // // Generate a label for the circle
        // const label = `${i + 1}'`;
        // const labelPoints = calculateLabel(center, label, "down");
        // labels.push(...labelPoints);
    }

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        sendToPoints.push(

            ...DiameterLinePoints,
            ...darkPencil,
            ...getCirclePoints(midpoint),
            ...darkPencil,
            ...calculateLabel(midpoint, "O","up"),
            ...majorCirclePoints,
            ...lightPencil,
        );

        if (finalDrawing) {
            drawAll = true;
        }
    }

    const numDivisions = 12;
    const verticalLines = [];
    const perpendicularLines = [];
    const perpendicularLabels = [];
    const circleDivisions12 = circleDivisions(midpoint, halfLength, 30);
    const arcRadiusPoints = [];

     

        if (counter === 2 || drawAll) {
            // Create vertical line from midpoint to circle's edge
            for (let i = 0; i <= 5; i++) {
                const verticalLine = calculateLinePointsWithCircles(circleDivisions12[i], circleDivisions12[i + 6], lightPencil);
                verticalLines.push(...verticalLine, ...lightPencil);
            }
            sendToPoints.push(
                ...verticalLines,
                ...lightPencil,
                ...calculateLabel(cd_LineEndPoint, "P", "down")
            );
            for (let i = 0; i < 12; i++) {
                const labelPointsCircle = calculateLabel(circleDivisions12[i], i + 1, "up"); // Position label above the point
                sendToPoints.push(...labelPointsCircle);
            }

            if (finalDrawing) {
                drawAll = true;
            }
        }

        if (counter === 3 || drawAll) {
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
                    x: BaseLineStartPoint.x + i * circleSpacing,
                    y: BaseLineStartPoint.y,
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
                    const lineEndPointLabel = calculateLabel(circleCenter, `${i}'`, "left-down"); // Label for the circle
                    // const lineStartPointLabel = calculateLabel(inclinedPoint, `${i}'`, "up"); // Label for inclined point
                    connectingLineLabels.push(...lineEndPointLabel);
                }
            }
        
            sendToPoints.push(
                ...BaseLinePoints,
                ...darkPencil,
                ...calculateLabel(BaseLineEndPoint, "Q", "down"),
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
        

        if (counter === 4 || drawAll) {
            for (let i = 0; i < 12; i++) {
                const angled = calculateAngledLinePoints(circleDivisions12[i], 240 + 90 - (30 * i), BaseLineEndPoint.x - BaseLineStartPoint.x);
                const perpendicularLine = calculateLinePointsWithCircles(circleDivisions12[i], angled, lightPencil);
                perpendicularLines.push(...perpendicularLine, ...darkPencil);
            }
            sendToPoints.push(

                ...perpendicularLines,
                ...darkPencil,
                ...perpendicularLabels
            );

            if (finalDrawing) {
                drawAll = true;
            }

        }
        console.log("BaseLineStartPoint: ", BaseLineStartPoint);
        console.log("BaseLineEndPoint: ", BaseLineEndPoint);

        console.log("arcRadiusPoints: ", arcRadiusPoints);
        let arcRadius = Math.abs((BaseLineStartPoint.x - BaseLineEndPoint.x)) / 12;
        
        if (counter === 5 || drawAll) {
            
            for (let i = 0; i < 12; i++) {
                console.log("i=", i);
                console.log("circleDivisions12[i]=", circleDivisions12[i]);
                console.log("arcRadiusPoints[i]=", arcRadiusPoints[i]);
                console.log("calculateDistance(BaseLineStartPoint, arcRadiusPoints[t] = ", arcRadius * (i + 1));
                let arcPoint = calculateAngledLinePoints(circleDivisions12[i], 240 + 90 - (30 * i), arcRadius * (i + 1));

                sendToPoints.push(
                    ...calculateArcPoints(circleDivisions12[i], arcPoint, lightPencil),
                    ...calculateLabel(arcPoint, `p${i+1}`, "up"),

                );
            }          

            if (finalDrawing) {
                drawAll = true;
            }

        }
    



    if (counter === 6 || drawAll) {
        let involutePoints = [];
        const circleDivision11 = circleDivisions1(midpoint, halfLength, 1);

        let arcRadius1 = Math.abs((BaseLineStartPoint.x - BaseLineEndPoint.x) / 360);
        console.log(BaseLineStartPoint.x - BaseLineEndPoint.x);
        for (let i = 0; i < 360; i++) {
            console.log(arcRadius1 * (i));
            let arcPoint = calculateAngledLinePoints(circleDivision11[i], 240 + 120 - (i), arcRadius1 * (i));
            involutePoints.push(arcPoint);
        }
        involutePoints.push(BaseLineEndPoint);

        
        for (let p = 0; p < involutePoints.length; p++) {
            sendToPoints.push(
                involutePoints[p]
            );
        }
        sendToPoints.push(
            ...darkPencil
        );

        if (finalDrawing) {
            drawAll = true;
        }

    }

    if (counter === 6 || drawAll) {

        if (finalDrawing) {
            drawAll = true;
        }
    }




    if (counter === 7 || drawAll) {

        if (finalDrawing) {
            drawAll = true;
        }
    }
    const steps = involute_by_generalmethodSteps(values); // Generate steps dynamically
    const step = drawAll
        ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
        : steps[counter];
    return { points: sendToPoints, step }; // Return empty points and message for invalid counter
}

export function circleDivisions(center, radius, divisions) {
    console.log("center, radius", center, radius);
    let circleDivision = [];

    for (let i = 240; i > -120; i -= divisions) {

        let endPoint1 = {
            x: calculateAngledLinePoints(center, i, radius).x,
            y: calculateAngledLinePoints(center, i, radius).y
        }
        circleDivision.push(endPoint1);

    }

    return circleDivision;
}

export function circleDivisions1(center, radius, divisions) {
    console.log("center, radius", center, radius);
    let circleDivision = [];

    for (let i = 270; i > -90; i -= divisions) {

        let endPoint1 = {
            x: calculateAngledLinePoints(center, i, radius).x,
            y: calculateAngledLinePoints(center, i, radius).y
        }
        circleDivision.push(endPoint1);

    }

    return circleDivision;
}



export function generateFullCircle(center, radius) {
    const numPoints = 361; // Total points for the circle
    const circlePoints = [];
    let startPoint1 = {};
    for (let i = 0; i < numPoints; i++) {

        if (startPoint1 != null) {
            const angle = (i * Math.PI) / 180; // Convert degrees to radians
            const x1 = center.x + radius * Math.cos(angle);
            const y1 = center.y + radius * Math.sin(angle);
            circlePoints.push({
                x: startPoint1.x,
                y: startPoint1.y
            });
            startPoint1 = { x: x1, y: y1 }
            circlePoints.push(startPoint1);
            circlePoints.push(...lightPencil);
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
function calculateAngle(base, height) {
    const angleInRadians = Math.atan(height / base);
    const angleInDegrees = angleInRadians * (180 / Math.PI);
    return angleInDegrees;
}

function calculateArcPoints1(focus, linePoint, radius, upDown) {

    let base = Math.abs(focus.x - linePoint.x);

    let height = calculateHeight(radius, base);
    let arcEndPoint = { x: 0, y: 0 };
    if (upDown === "up") {
        arcEndPoint = { x: linePoint.x, y: focus.y - height };
    }
    if (upDown === "down") {
        arcEndPoint = { x: linePoint.x, y: focus.y + height };
    }
    return calculateArcPoints(focus, arcEndPoint);


}
