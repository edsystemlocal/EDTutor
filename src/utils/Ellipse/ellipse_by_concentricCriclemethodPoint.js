
import { calculateAngle, calculateAngledLinePoints, calculateArcRadius, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, superDarkPencil } from "../globalVariable";


export function generateFullCircle(center, radius) {
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

export function ellipse_by_concentricCriclemethodSteps(values) {
    const { majorAxis, minorAxis } = values

    return {
        1: defineSteps(
            `Draw the major axis line 'ab' with the given length ${majorAxis} mm .`
        ),
        2: defineSteps(
            `Draw the minor axis line 'cd' with the given length ${minorAxis} mm and intersecting each other at O.`
        ),
        3: defineSteps(
            " with center O and diameters AB and CD respectively, draw two circles. "
        ),
        4: defineSteps(
            "Divide both circles into 12 equal parts. Label the intersection points on the outer circle as 1, 2, 3, ..., and on the inner circle as 1', 2', 3', ...."
        ),
        5: defineSteps(
            "Draw horizontal lines passing through the intersection points of the inner circle."
        ),
        6: defineSteps(
            "Draw vertical lines passing through the intersection points of the outer circle, extending them to intersect the horizontal lines."
        ),
        7: defineSteps(
            "Mark the intersection points of the vertical and horizontal lines as p1, p2, p3, ..., and so on."
        ),
        8: defineSteps(
            "Join all the marked points (p1, p2, p3, ...) with a smooth curve. Connect the endpoints of the major and minor axes to complete the ellipse."
        )

    };
}


export function ellipse_by_concentricCriclemethodPoint(payload) {
    const { counter, inputs, finalDrawing } = payload;

    const startpoint = { x: 100, y: 400 };
    const {
        majorAxis,
        minorAxis

    } = inputs;
    let values = {
        majorAxis,
        minorAxis

    }

    // Calculate the endpoints of the major axis
    const ab_LineEndPoint = { x: startpoint.x + majorAxis, y: startpoint.y };
    
    const midpoint = { x: (startpoint.x + ab_LineEndPoint.x) / 2, y: (startpoint.y + ab_LineEndPoint.y) / 2 };
    const labeled_midpoint = calculateLabel(midpoint, "o", "right");

    const halfLength = minorAxis / 2;
    const cd_LineStartPoint = { x: midpoint.x, y: midpoint.y - halfLength };
    const cd_LineEndPoint = { x: midpoint.x, y: midpoint.y + halfLength };    

    // Generate full circles for major and minor axes
    const major_half = majorAxis / 2;
    const minor_half = minorAxis / 2;
    
    let majorCircleDivisions = ellipse_by_concentricCriclemethodPoint_Divisions(midpoint, major_half);
    let minorCircleDivisions = ellipse_by_concentricCriclemethodPoint_Divisions(midpoint, minor_half);

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        const ab_LinePoints = calculateLinePointsWithCircles(startpoint, ab_LineEndPoint);
        const labeled_ab_LineStartPoints = calculateLabel(startpoint, "a", "left");
        const labeled_ab_LineEndPoints = calculateLabel(ab_LineEndPoint, "b", "right");
        sendToPoints.push(
            ...ab_LinePoints,
            ...darkPencil,
            ...labeled_ab_LineStartPoints,
            ...labeled_ab_LineEndPoints,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 || drawAll) {

        // Calculate points for the vertical line
        const cd_LinePoints = calculateLinePointsWithCircles(cd_LineStartPoint, cd_LineEndPoint);
        const labeled_cd_LineStartPoints = calculateLabel(cd_LineStartPoint, "c", "left");
        const labeled_cd_LineEndPoints = calculateLabel(cd_LineEndPoint, "d", "left");
        sendToPoints.push(
            ...labeled_midpoint,
            ...cd_LinePoints,
            ...darkPencil,
            ...labeled_cd_LineStartPoints,
            ...labeled_cd_LineEndPoints,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        const majorCirclePoints = generateFullCircle(midpoint, major_half);
        const minorCirclePoints = generateFullCircle(midpoint, minor_half);
        sendToPoints.push(
            ...minorCirclePoints,
            ...darkPencil,
            ...majorCirclePoints,
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 4 || drawAll) {
        let verticalLines = [];
        let labeledVerticalPoints = [];
        // console.log("majorCircleDivisions:",majorCircleDivisions);
        for(let i=0;i<=5;i++){
            const verticalLine = calculateLinePointsWithCircles(majorCircleDivisions[i], majorCircleDivisions[i+6], lightPencil);
            const majorCircle_labelstartpoint = calculateLabel(majorCircleDivisions[i], `${i + 1}`, "up");
            const majorCircle_labelendpoint=calculateLabel(majorCircleDivisions[i+6], `${i + 7}`, "up");
            const minorCircle_labelstartpoint = calculateLabel(minorCircleDivisions[i], `${i + 1}'`, "up");
            const minorCircle_labelendpoint = calculateLabel(minorCircleDivisions[i+6], `${i + 7}'`, "up");
            verticalLines.push(...verticalLine, ...lightPencil,...majorCircle_labelstartpoint ,...majorCircle_labelendpoint,...minorCircle_labelstartpoint,...minorCircle_labelendpoint);         
          
            
        }
        sendToPoints.push(
            ...verticalLines,

        );

        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 5 || drawAll) {

        let allIntersectionPoints = [];
        let labeledVerticalPoints = [];
        console.log("majorCircleDivisions:",majorCircleDivisions);
        for(let i=0;i<12;i++){
            const verticalIntersectionPoints = calculateLinePointsWithCircles(majorCircleDivisions[i], {x:majorCircleDivisions[i].x, y: minorCircleDivisions[i].y}, lightPencil);
            allIntersectionPoints.push(...verticalIntersectionPoints, ...lightPencil);
            
            const horizontalIntersectionPoints = calculateLinePointsWithCircles(minorCircleDivisions[i], {x:majorCircleDivisions[i].x, y: minorCircleDivisions[i].y}, lightPencil);
            const label = calculateLabel({x:majorCircleDivisions[i].x, y: minorCircleDivisions[i].y}, `p${i + 1}`, "right-down");
            allIntersectionPoints.push(...horizontalIntersectionPoints, ...lightPencil,...label ,...darkPencil);
      
        }
        sendToPoints.push(
            ...allIntersectionPoints,
      
        );

        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 6 || drawAll) {
        sendToPoints.push(
            //...calculateline,
            ...ellipse_by_concentricCriclemethodPoint2(midpoint, majorAxis, minorAxis),
            ...superDarkPencil,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    const steps = ellipse_by_concentricCriclemethodSteps(values); // Generate steps dynamically
    const step = drawAll
        ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
        : steps[counter];
    return { points: sendToPoints, step }; // Return points and the corresponding step
}

export function ellipse_by_concentricCriclemethodPoint_Divisions(midpoint, radius) {
    
    let eclipsePoints = [];

    for (let i = 0; i < 360; i+=30) {

        let endPoint1 = {
            x: calculateAngledLinePoints(midpoint, i, radius).x,
            y: calculateAngledLinePoints(midpoint, i, radius).y
        }
        eclipsePoints.push(endPoint1);      

    }

    return eclipsePoints;
}

export function ellipse_by_concentricCriclemethodPoint2(midpoint, majorAxis, minorAxis) {
    const major_half = majorAxis / 2;
    const minor_half = minorAxis / 2;

    let eclipsePoints = [];
    let startPoint1 = {
        x: calculateAngledLinePoints(midpoint, 0, major_half).x,
        y: calculateAngledLinePoints(midpoint, 0, minor_half).y
    }

    for (let i = 0; i < 360; i++) {
        eclipsePoints.push(startPoint1);

        let endPoint1 = {
            x: calculateAngledLinePoints(midpoint, i, major_half).x,
            y: calculateAngledLinePoints(midpoint, i, minor_half).y
        }
        eclipsePoints.push(endPoint1);
        startPoint1 = endPoint1;
        eclipsePoints.push(...superDarkPencil);

    }

    return [...eclipsePoints];
}


