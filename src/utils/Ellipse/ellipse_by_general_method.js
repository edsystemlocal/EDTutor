

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

import { calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateHeight, calculateHeightFromBase, calculateLabel, calculateLinePointsWithCircles, defineSteps, drawParallelArrow, drawPerpendicularArrow, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";
export function ellipse_by_generalmethodSteps(values) {
    const {
        distanceofthefocusfromthedirectrix
    } = values
    return {
        1: defineSteps(
            " Draw a vertical line 'ab' to represent directrix.",
        ),
        2: defineSteps(
            "Draw the principal axis 'c' line perpendicular to 'ab'"
        ),
        3: defineSteps(
            `Mark focus F on the axis 'c' line such that 'cf' = ${distanceofthefocusfromthedirectrix} mm`
        ),
        4: defineSteps(
            "Divide 'cf' into five equal divisions. Mark the vertex 'V' on the third division point from c. Therefore, vf/vc = 2/3 and thereby the vertex V represents a locus point of the ellipse."
        ),

        5: defineSteps(
            "Draw a vertical line 've' equal to 'vf'. Join 'c' to 'e' and produce it to some distance. Therefore, in the triangle 'cve',ve/vc =vf/vc = 2/3 ."
        ),
        6: defineSteps(
            "Mark any point 1 on the axis and through it, draw a perpendicular meet CE-produced at 1'. ",
        ),
        7: defineSteps("With centre F and radius equal to 1-1' , draw arcs to intersect the perpendicular through 1 at points P1 and P' 1.",

        ),
        8: defineSteps("Join all the loci points of the ellipse and obtain the required ellipse.")
    };
}
export function ellipse_by_generalmethodPoint(payload) { 
    const { counter , inputs, finalDrawing } = payload;
    // const startpoint = { x: startPoint.x, y: startPoint.y };
    

    let distanceofthefocusfromthedirectrix = Number(inputs["Distance From focus To Directrix"]) || 0;
    const startpoint = { x: 100,
        y:300+distanceofthefocusfromthedirectrix };

    let values ={ distanceofthefocusfromthedirectrix }

    let distanceofthefocusfromthedirectrix1 = distanceofthefocusfromthedirectrix*2;
    
    let LineLengthfor_v = 3 * distanceofthefocusfromthedirectrix / 5;
    let LineLengthfor_e = distanceofthefocusfromthedirectrix- LineLengthfor_v;
    let LineLengthfor_v1=LineLengthfor_v*2;
    let  LineLengthfor_e1=LineLengthfor_e*2;

    console.log(LineLengthfor_v, "LineLengthfor_v")
    console.log(LineLengthfor_e, "LineLengthfor_e")

    const c_EndPoint = { x: startpoint.x + 500, y: startpoint.y };
    const c_LinePoints = calculateLinePointsWithCircles(startpoint, c_EndPoint ,lightPencil);
    const labeled_c_LinePoints = calculateLabel(startpoint, "c", "left");

    const ab_LinePoints = [{ x: startpoint.x, y: startpoint.y - 100 }, { x: startpoint.x, y: startpoint.y + 100 }];
    const ab_Line = calculateLinePointsWithCircles(ab_LinePoints[0], ab_LinePoints[1]);
    const labeledStartPoint = calculateLabel(ab_LinePoints[0], "a", "left");
    const labeledEndPoint = calculateLabel(ab_LinePoints[1], "b", "left");

    const v_LineEndPoint = { x: startpoint.x + LineLengthfor_v1, y: startpoint.y };
    const v_LinePoints = calculateLinePointsWithCircles(startpoint, v_LineEndPoint);
    const labeled_v_LinePoints = calculateLabel({ x: v_LineEndPoint.x, y: v_LineEndPoint.y +10 }, "v", "left-down");

    const e_LineEndPoint = { x: v_LineEndPoint.x, y: v_LineEndPoint.y - LineLengthfor_e1 };
    const e_LinePoints = calculateLinePointsWithCircles(v_LineEndPoint, e_LineEndPoint);
    const labeled_e_LinePoints = calculateLabel(e_LineEndPoint, "e", "left-up");

    const f_LineEndPoint = { x: startpoint.x + distanceofthefocusfromthedirectrix1, y: startpoint.y };
    const f_LinePoints = calculateLinePointsWithCircles(startpoint, f_LineEndPoint);
    const labeled_f_LinePoints = calculateLabel(f_LineEndPoint, "f", "down");

    const lineAngle = calculateAngleInDegrees(startpoint, e_LineEndPoint);
    const topAngledEndPoint = calculateAngledLinePoints(startpoint, -lineAngle, 500);
    const diagonalLinePoints = calculateLinePointsWithCircles(startpoint, topAngledEndPoint);
    
    console.log("lineAngle: ", lineAngle);
    console.log("topAngledEndPoint: ", topAngledEndPoint);
    //console.log("diagonalLinePoints: ", diagonalLinePoints);
    const verticalLines = [];


    for (let i = v_LineEndPoint.x+30; i < topAngledEndPoint.x; i += 30) {
        // verticalLines.push({ x: i, y: 400, label: "v" });
        verticalLines.push({ x: i, y: 400, label: `${(i - 100) / 10}` });

    }
    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        sendToPoints.push(...ab_Line, ...labeledStartPoint, ...labeledEndPoint); 
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 || drawAll) {
        sendToPoints.push(...c_LinePoints, ...labeled_c_LinePoints, ...darkPencil,); 
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        sendToPoints.push(...drawParallelArrow(ab_LinePoints[0],{ x: startpoint.x + distanceofthefocusfromthedirectrix1, y: startpoint.y - 100 },"Above","cf = "+distanceofthefocusfromthedirectrix));
        sendToPoints.push(...f_LinePoints, ...labeled_f_LinePoints); 
            if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 4 || drawAll) {
        // sendToPoints.push(...drawParallelArrow({ x: startPoint.x, y: startPoint.y - 50 }, { x: startpoint.x + LineLengthfor_v1, y: startpoint.y - 50 }, "Above", "cv = " + LineLengthfor_v));
        sendToPoints.push(...getCirclePoints(v_LineEndPoint),...labeled_v_LinePoints,
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 5 || drawAll) {
        // sendToPoints.push(...drawPerpendicularArrow({ x: startPoint.x - 50, y: startPoint.y }, { x: startPoint.x - 50, y: startPoint.y - LineLengthfor_e1 }, "right", "ve = " + LineLengthfor_e));
        sendToPoints.push(...e_LinePoints, ...labeled_e_LinePoints, ...diagonalLinePoints,);
        if (finalDrawing) {
            drawAll = true;
        }

    }
    if (counter === 6 || counter === 7 || drawAll) {

    
        verticalLines.forEach(({ x, y ,label},index) => {
            const verticalLineNumber = index + 1;

            const angleStart = calculateAngle(LineLengthfor_v, LineLengthfor_e);

            let height = calculateHeightFromBase(x - startpoint.x, angleStart);     // height of vertical lines
           
            const verticalLineStartPoint = { x, y: startpoint.y - height }; // Top point
            const verticalLineEndPoint = { x, y: startpoint.y + height }; // Bottom point
         const verticalLineMidPoint = { x, y: startpoint.y }; // Midpoint

    
            if (counter === 6 || drawAll) {
                // Calculate vertical line points
                const linePoints = calculateLinePointsWithCircles(verticalLineStartPoint, verticalLineEndPoint,lightPencil);
                // Add points to the array
                const verticalLinePointsArray = [];
                verticalLinePointsArray.push(...linePoints, ...lightPencil,
             ...calculateLabel(verticalLineStartPoint, `${verticalLineNumber}'`, "left-up"), // Start point label 
            ...calculateLabel(verticalLineMidPoint, `${verticalLineNumber}`, "up"), // Midpoint label 
                );
                sendToPoints.push(...verticalLinePointsArray); 
                if (finalDrawing) {
            drawAll = true;
        }
            }

            if (counter === 7 || drawAll) {

                    const angleStart = calculateAngle(LineLengthfor_v, LineLengthfor_e);
            
                    let height = calculateHeightFromBase(x - startpoint.x, angleStart);     // height of vertical lines
                    const radius = height;
                    const verticalLineStartPoint = { x, y: startpoint.y - height }; // Top point
                    const verticalLineEndPoint = { x, y: startpoint.y + height }; // Bottom point
            
                    
                    // Calculate upper and lower arcs using F as the center
                    const upperArc = calculateArcPoints1(f_LineEndPoint, verticalLineStartPoint, radius, "up"); // Arc towards the upper side
                    const lowerArc = calculateArcPoints1(f_LineEndPoint, verticalLineEndPoint, radius, "down"); // Arc towards the lower side
                    const arcs = [];
                    
                    arcs.push(...upperArc,...lightPencil,...lowerArc,...lightPencil);    
            
                sendToPoints.push(...arcs,...darkPencil); 
                if (finalDrawing) {
            drawAll = true;
        }
            }
            
        });
    }

    if (counter === 8 || drawAll) {        
        sendToPoints.push(...getEclipsePoints(startpoint, f_LineEndPoint, LineLengthfor_v, LineLengthfor_e, v_LineEndPoint));
         if (finalDrawing) {
            drawAll = true;
        }
    }
    const steps = ellipse_by_generalmethodSteps(values); // Generate steps dynamically
    const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
    return { points: sendToPoints, step }; // Return empty points and message for invalid counter
}

export function getEclipsePoints(startpoint, pointF, LineLengthfor_v, LineLengthfor_e, v_LineEndPoint){
    const eclipsePoints = [];
    const verticalLines = [];
  

   
    for (let i = 110; i < 500; i += 1) {
        verticalLines.push({ x: i, y: 400});
    }

    let upperIntersectionPoints = [];
    let lowerIntersectionPoints = [];


    verticalLines.forEach(({ x, y }) => {      
            
        // Define the center point F (horizontalLineEndPoint)
        
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


    let eclipseStartpoint = v_LineEndPoint;
    eclipsePoints.push(...darkPencil);
    upperIntersectionPoints.forEach((point) => {        
        eclipsePoints.push(...calculateEclipseLinePoints(eclipseStartpoint, point));
      
        eclipseStartpoint = point;        
    });
    let eclipseStartpoint1 = v_LineEndPoint;
    lowerIntersectionPoints.reverse();
    lowerIntersectionPoints.forEach((point) => {        
        eclipsePoints.push(...calculateEclipseLinePoints(eclipseStartpoint1, point));
        eclipsePoints.push(...darkPencil);
      
        eclipseStartpoint1 = point;
    });
    
    console.log("upperIntersectionPoints: ", upperIntersectionPoints.length);
    console.log("lowerIntersectionPoints: ", lowerIntersectionPoints.length);
    return eclipsePoints;

}

function calculateEclipsePoint(focus, linePoint, radius, upDown) {

    //console.log("focus: ",focus);
    //console.log("linePoint: ",linePoint);
    //console.log("radius: ",radius);
    //console.log("upDown: ",upDown);
    let base = Math.abs(focus.x - linePoint.x);

    let height = calculateHeight(radius, base);
    let arcEndPoint = { x: 0, y: 0 };
    if (upDown === "up") {
        arcEndPoint = { x: linePoint.x, y: focus.y - height };
    }
    if (upDown === "down") {
        arcEndPoint = { x: linePoint.x, y: focus.y + height };
        //console.log("Lower arcEndPoint: ", arcEndPoint);
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
