import { connection } from "next/server";
import { calculateAngledLinePoints, calculateArcPoints, calculateHeight, calculateLabel, calculateLinePointsWithCircles, defineSteps, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";
export function involute_by_generalmethodSteps(values) {
    const {Diameter} = values;
    return {
        1: defineSteps("Draw the  directrix 'ab'and the axis 'cd' ",
        ),
        2: defineSteps(
            `Mark focus f on 'cd' ${Diameter} mm from c`,
        ),
        3: defineSteps(
            "Divide cf into 5 equal divisions and mark v the vertex ",
            "on the second division from c. ",
            "thus , eccentricity = vf/vc = 3/2 .",
            
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
        7: defineSteps("connect the arc points for hyperbola")
    };
}

export function involute_by_generalmethod(payload) { //ParalleltoHP_and_InclinedtoVP
    const { counter , inputs , finalDrawing} = payload;
    const startPoint = { x: 300, y: 400 };

    const {Diameter}= inputs;
    const string = 22/7*Diameter;
    console.log("string = ",string)


    let values ={
        Diameter,
        string
   }

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

     const InclinedEndPoint = calculateAngledLinePoints(BaseLineStartPoint, -20, 240);
        const InclinedLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, InclinedEndPoint);
        
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
  const center = calculateAngledLinePoints(BaseLineStartPoint, -20, offset);
  circleCenters.push(center);

  // Generate points for the circle using the getCirclePoints function
  const circlePoints = getCirclePoints(center, circleRadius);
  inclinedCircles.push(...circlePoints);

  // Generate a label for the circle
  const label = `${i + 1}'`;
  const labelPoints = calculateLabel(center, label, "down");
  labels.push(...labelPoints);
}

   let drawAll = false;
    const sendToPoints = [];
    if (counter === 1|| drawAll) {
        sendToPoints.push(
            ...majorCirclePoints,
            ...darkPencil,
        );
    
        if (finalDrawing) {
            
            drawAll = true;
        }
    }

const numDivisions = 12;
const divisionPoints = [];
const verticalLines = [];
const perpendicularLines = [];
const perpendicularLabels = [];

    if (counter === 2||counter === 3|| counter === 4||  drawAll) {
    for (let i = 0; i < numDivisions; i++) {
   
        const angle = (i * (2 * Math.PI)) / numDivisions; // Calculate angle in radians
        const xMajor = midpoint.x + major_half * Math.sin(angle);
        const yMajor = midpoint.y + major_half * Math.cos(angle);
        divisionPoints.push({ x: xMajor, y: yMajor });

        
         // Calculate perpendicular line
         const lastPoint = { x: xMajor, y: yMajor };
         const dx = lastPoint.x - midpoint.x;
         const dy = lastPoint.y - midpoint.y;
 
         // Calculate 90-degree rotated direction
         const perpendicularDir = { x: dy, y: -dx };
         const lengthFactor = string / Math.sqrt(perpendicularDir.x ** 2 + perpendicularDir.y ** 2);
         const endPerpendicular = {
             x: lastPoint.x + perpendicularDir.x * lengthFactor,
             y: lastPoint.y + perpendicularDir.y * lengthFactor,
         };
 
         // Store perpendicular line for later
         const perpendicularLine = calculateLinePointsWithCircles(lastPoint, endPerpendicular, superDarkPencil);
         perpendicularLines.push(...perpendicularLine, ...darkPencil);

            // Add label for perpendicular line start point
        const label = `${i + 1}`;
        const labelPoints = calculateLabel(lastPoint, label, "up"); // Position label above the point
        perpendicularLabels.push(...labelPoints);

    }

    if (counter === 2||  drawAll) {
        // Create vertical line from midpoint to circle's edge
        for(let i=0;i<=5;i++){
            const verticalLine = calculateLinePointsWithCircles(divisionPoints[i], divisionPoints[i+6], lightPencil);
            verticalLines.push(...verticalLine, ...lightPencil);
        }
        sendToPoints.push(
        ...DiameterLinePoints,
        ...darkPencil,
        ...verticalLines,
        ...lightPencil,
       
        );
    
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        const numCircles = 13; // Total number of circles
        const circleSpacing = string / 12; // Distance between circles
        console.log("circleSpacing  = ", circleSpacing);
        const circleRadius = 1; // Adjust radius as needed
        const circlePointsArray = [];
        const labels2 = [];
        const connectingLines = []; // Store lines connecting 1' to 1, 2' to 2, etc.
    
        // Generate circles along the base line
        for (let i = 1; i < numCircles; i++) {
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
            const label2Points = calculateLabel(circleCenter, label2, "up");
            labels2.push(...label2Points);
    
            // Connect corresponding points
            const inclinedPoint = circleCenters[i - 1]; // Corresponding 1', 2', ..., 12'
            if (inclinedPoint) {
                const linePoints = calculateLinePointsWithCircles(inclinedPoint, circleCenter, lightPencil);
                connectingLines.push(...linePoints, ...lightPencil);
            }
        }
    
        sendToPoints.push(
            ...BaseLinePoints,
            ...darkPencil,
            ...InclinedLinePoints,
            ...darkPencil,
            ...inclinedCircles,
            ...darkPencil,
            ...labels,
            ...connectingLines // Add connecting lines
        );
    
        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 4|| drawAll) {
        sendToPoints.push(
           
            ...perpendicularLines,
            ...darkPencil,
            ...perpendicularLabels
            );

        if (finalDrawing) {
            drawAll = true;
        }
    
    }
}


    
    if (counter === 5|| drawAll) {
        

                if (finalDrawing) {
                    drawAll = true;
                }
               
    }
    
    if (counter === 6|| drawAll) {

                if (finalDrawing) {
                    drawAll = true;
                }
    }  
        
   
    

    if (counter === 7|| drawAll) {        
    
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