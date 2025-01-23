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

    // const arcPoints = calculateArcPoints(focus, arcEndPoint);
    // return { arcPoints, arcEndPoint }; 
    
}

import { calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateHeight, calculateHeightFromBase, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";
export function parabola_by_generalmethodSteps(values) {
    const {distanceofthefocusfromthedirectrix} = values;
    return {
        1: defineSteps("Draw the  directrix 'ab'and the axis 'cd' ",
        ),
        2: defineSteps(
            `Mark focus f on 'cd' ${distanceofthefocusfromthedirectrix} mm from c`,
        ),
        3: defineSteps(
            "Bisect 'cf' in v the vertex (because eccentricity = 1)",
            "draw a line 've' perpendicular to 'cd' such that 've' = 'vf'"
        ),
        4: defineSteps(
            "Draw a digonal line from the Point c and Passes through point e ",
        ),
        5: defineSteps(
            "Mark points 1,2,3 ..etc on the axis and through it ",
            "Draw  multiple  perpendiculars lines to meet 'ce' produced at 1' 2' 3' ...etc ",
        ),
        6: defineSteps("With the center 'f' and redius equal to (1-1' , 2-2' , 3-3' ... etc)", 
            "draw upper and lower arcs intersecting the perpendicular through 1 2 3 ... etc",
        ),
        7: defineSteps("connect the arc points for parabola")
    };
}

export function parabola_by_generalmethodPoint(payload) { //ParalleltoHP_and_InclinedtoVP
    const { counter , inputs , finalDrawing} = payload;
    // const startpoint = { x: 100, y: 300 };

    let distanceofthefocusfromthedirectrix = Number(inputs["Distance From focus To Directrix"]) || 0;
    const startpoint = { x: 100,
        y:200+distanceofthefocusfromthedirectrix };
    let values ={
        distanceofthefocusfromthedirectrix,
   }
    const LineLengthfor_v = distanceofthefocusfromthedirectrix / 2;
    const LineLengthfor_e = distanceofthefocusfromthedirectrix - LineLengthfor_v;

    console.log(LineLengthfor_v, "LineLengthfor_v")
    console.log(LineLengthfor_e, "LineLengthfor_e")

    const c_EndPoint = { x: startpoint.x + 500, y: startpoint.y };
    const c_LinePoints = calculateLinePointsWithCircles(startpoint, c_EndPoint);
    const labeled_c_LinePoints = calculateLabel(startpoint, "c", "left");
    const labeled_c_LinePoints2 = calculateLabel(c_EndPoint, "d", "right");


    const ab_LinePoints = [{ x: startpoint.x, y: startpoint.y - 250 }, { x: startpoint.x, y: startpoint.y + 250 }];
    const ab_Line = calculateLinePointsWithCircles(ab_LinePoints[0], ab_LinePoints[1]);
    const labeledStartPoint = calculateLabel(ab_LinePoints[0], "a", "left");
    const labeledEndPoint = calculateLabel(ab_LinePoints[1], "b", "left");

    const v_LineEndPoint = { x: startpoint.x + LineLengthfor_v, y: startpoint.y };
    const v_LinePoints = calculateLinePointsWithCircles(startpoint, v_LineEndPoint);
    const labeled_v_LinePoints = calculateLabel({ x: v_LineEndPoint.x, y: v_LineEndPoint.y +15 }, "v", "left-down");

    const e_LineEndPoint = { x: v_LineEndPoint.x, y: v_LineEndPoint.y - LineLengthfor_e };
    const e_LinePoints = calculateLinePointsWithCircles(v_LineEndPoint, e_LineEndPoint);
    const labeled_e_LinePoints = calculateLabel(e_LineEndPoint, "e", "left-up");

    const f_LineEndPoint = { x: startpoint.x + distanceofthefocusfromthedirectrix, y: startpoint.y };
    const f_LinePoints = calculateLinePointsWithCircles(startpoint, f_LineEndPoint);
    const labeled_f_LinePoints = calculateLabel(f_LineEndPoint, "f", "down");

    const lineAngle = calculateAngleInDegrees(startpoint, e_LineEndPoint);
    const topAngledEndPoint = calculateAngledLinePoints(startpoint, -lineAngle, 400);
    const diagonalLinePoints = calculateLinePointsWithCircles(startpoint, topAngledEndPoint);
    
    console.log("lineAngle: ", lineAngle);
    console.log("topAngledEndPoint: ", topAngledEndPoint);
    //console.log("diagonalLinePoints: ", diagonalLinePoints);

    const verticalLines = [];
    for (let i = v_LineEndPoint.x+40; i < topAngledEndPoint.x; i += 40) {
        verticalLines.push({ x: i, y: 300, label: "v" });
    }

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1|| drawAll) {
        sendToPoints.push(...ab_Line, ...darkPencil, ...labeledStartPoint, ...labeledEndPoint,...c_LinePoints, ...darkPencil, ...labeled_c_LinePoints, ...darkPencil,...labeled_c_LinePoints2);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2|| drawAll) {
        sendToPoints.push(...f_LinePoints, ...labeled_f_LinePoints,...darkPencil );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3|| drawAll) {
        sendToPoints.push(...v_LinePoints, ...labeled_v_LinePoints,
            ...e_LinePoints, ...labeled_e_LinePoints, ...darkPencil);
            if (finalDrawing) {
                drawAll = true;
            }
    }
    if (counter === 4|| drawAll) {
        sendToPoints.push(...diagonalLinePoints, ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    
    }
    if (counter === 5 || counter === 6|| drawAll) {
        verticalLines.forEach(({ x, y }, index) => {
            const angleStart = calculateAngle(LineLengthfor_v, LineLengthfor_e);
            let height = calculateHeightFromBase(x - startpoint.x, angleStart); // height of vertical lines
    
            const verticalLineStartPoint = { x, y: startpoint.y - height }; // Top point
            const verticalLineEndPoint = { x, y: startpoint.y + height }; // Bottom point
    
            if (counter === 5|| drawAll) {
                // Calculate vertical line points
                const linePoints = calculateLinePointsWithCircles(verticalLineStartPoint, verticalLineEndPoint, lightPencil);
                
                // Add points to the array
                const verticalLinePointsArray = [];
                verticalLinePointsArray.push(...linePoints, ...lightPencil);
    
                // Calculate and label the midpoint
                const midPoint = {
                    x: (verticalLineStartPoint.x + verticalLineEndPoint.x) / 2,
                    y: (verticalLineStartPoint.y + verticalLineEndPoint.y) / 2,
                };
                const midLabel = `${index + 1}`; // Label for midpoint
                sendToPoints.push(
                    ...verticalLinePointsArray,
                    ...calculateLabel(midPoint, midLabel, "up"), // Add label for midpoint
                    ...lightPencil
                );
    
                // Label the start and end points
                const startLabel = `${index + 1}'`; // Label for the start point
                const endLabel = `${index + 1}"`; // Label for the end point
                sendToPoints.push(
                    ...calculateLabel(verticalLineStartPoint, startLabel, "left-up"), // Add label for start point
                    ...calculateLabel(verticalLineEndPoint, endLabel, "down"), // Add label for end point
                    ...lightPencil
                );
                if (finalDrawing) {
                    drawAll = true;
                }
            }
    
            if (counter === 6|| drawAll) {

                const angleStart = calculateAngle(LineLengthfor_v, LineLengthfor_e);
        
                let height = calculateHeightFromBase(x - startpoint.x, angleStart);     // height of vertical lines
                const radius = height;
                const verticalLineStartPoint = { x, y: startpoint.y - height }; // Top point
                const verticalLineEndPoint = { x, y: startpoint.y + height }; // Bottom point
        
                
                // Calculate upper and lower arcs using F as the center
                const upperArc = calculateArcPoints1(f_LineEndPoint, verticalLineStartPoint, radius, "up"); // Arc towards the upper side
                const lowerArc = calculateArcPoints1(f_LineEndPoint, verticalLineEndPoint, radius, "down"); // Arc towards the lower side
                const arcs = [];
                arcs.push(...upperArc, ...lightPencil, ...lowerArc, ...lightPencil);    
        
            sendToPoints.push(...arcs, ...darkPencil,);
            if (finalDrawing) {
                drawAll = true;
            }
        }
        
    });
    if (finalDrawing) {
        drawAll = true;
    }
} 
    

    if (counter === 7|| drawAll) {        
        sendToPoints.push(...getParabolaPoints(startpoint, f_LineEndPoint, LineLengthfor_v, LineLengthfor_e, v_LineEndPoint), ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    const steps = parabola_by_generalmethodSteps(values); // Generate steps dynamically
    const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
    return { points: sendToPoints, step }; // Return empty points and message for invalid counter
}

export function getParabolaPoints(startpoint, pointF, LineLengthfor_v, LineLengthfor_e, v_LineEndPoint){
    const eclipsePoints = [];
    const verticalLines = [];
    for (let i = 110; i < 400; i += 1) {
        verticalLines.push({ x: i, y: 400});
    }

    let upperIntersectionPoints = [];
    let lowerIntersectionPoints = [];
    verticalLines.forEach(({ x, y }) => {      
                    
        const angleStart = calculateAngle(LineLengthfor_v, LineLengthfor_e);

        let height = calculateHeightFromBase(x - startpoint.x, angleStart);     // height of vertical lines
        const radius = height;
        const verticalLineStartPoint = { x, y: startpoint.y - height }; // Top point
        const verticalLineEndPoint = { x, y: startpoint.y + height }; // Bottom point
       
        // Calculate upper and lower arcs using F as the center
        const upperIntersectionPoint = calculateEclipsePoint(pointF, verticalLineStartPoint, radius, "up"); // Arc towards the upper side
        const lowerIntersectionPoint = calculateEclipsePoint(pointF, verticalLineEndPoint, radius, "down"); // Arc towards the lower side

        if (upperIntersectionPoint && upperIntersectionPoint.y!=null && !isNaN(upperIntersectionPoint.y)) {
            upperIntersectionPoints.push(upperIntersectionPoint);
        }
        if (lowerIntersectionPoint && lowerIntersectionPoint.y!=null && !isNaN(lowerIntersectionPoint.y)) {
            lowerIntersectionPoints.push(lowerIntersectionPoint);
        }
    
    });

    eclipsePoints.push(...darkPencil);
    upperIntersectionPoints.reverse();
    let eclipseStartpoint = upperIntersectionPoints[0];
    upperIntersectionPoints.forEach((point) => {        
        eclipsePoints.push(...calculateEclipseLinePoints(eclipseStartpoint, point));
        eclipseStartpoint = point;        
    });
    eclipsePoints.push(...calculateEclipseLinePoints(eclipseStartpoint, v_LineEndPoint));
    let eclipseStartpoint1 = v_LineEndPoint;
    lowerIntersectionPoints.forEach((point) => {        
        eclipsePoints.push(...calculateEclipseLinePoints(eclipseStartpoint1, point));
        eclipsePoints.push();
        eclipseStartpoint1 = point;
    });
    console.log("upperIntersectionPoints: ", upperIntersectionPoints.length);
    console.log("lowerIntersectionPoints: ", lowerIntersectionPoints.length);
    return eclipsePoints;

}

function calculateEclipsePoint(focus, linePoint, radius, upDown) {

    let base = Math.abs(focus.x - linePoint.x);

    let height = calculateHeight(radius, base);
    let arcEndPoint = { x: 0, y: 0 };
    if (upDown === "up") {
        arcEndPoint = { x: linePoint.x, y: focus.y - height };
    }
    if (upDown === "down") {
        arcEndPoint = { x: linePoint.x, y: focus.y + height };
    }
    
    return arcEndPoint;    
}

export function calculateEclipseLinePoints(startPoint, endPoint) {
  const points = [];
  
    if(startPoint.y!=null && endPoint.y!=null && !isNaN(startPoint.y) && !isNaN(endPoint.y)){
    
        points.push({
        x: startPoint.x,
        y: startPoint.y,
        });
        points.push({
            x: endPoint.x,
            y: endPoint.y,
        });
        points.push(...darkPencil);
    }

  return [...points];
}