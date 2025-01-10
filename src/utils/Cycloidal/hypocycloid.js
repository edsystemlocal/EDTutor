

import { generateFullCircle } from "../Ellipse/ellipse_by_concentricCriclemethodPoint";
import { calculateAngle, calculateAngledLinePoints, calculateAngleInDegrees, calculateArcRadius, calculateDistance, calculateLabel, calculateLinePointsWithCircles, defineSteps, drawQuarterCircle, getCirclePoints } from "../functionHelper";
import { darkPencil, lightPencil, numPoints } from "../globalVariable";
import { drawParallelLine } from "../Scale/Scale";
export function hypocycloidSteps(values) {
    const { Diameter, DirectingCircle } = values;
    return {
        1: defineSteps(
            `Draw the major axis line 'ab' with the given length ${Diameter} mm .`
        ),
        2: defineSteps(
            `Draw the minor axis line 'cd' with the given length ${DirectingCircle} mm and intersecting each other at O.`
        ),
        3: defineSteps(
            " with center O and diameters AB and CD respectively, draw two circles. "
        )
    };
}
export function hypocycloidPoint(payload) { 
    const { counter, inputs, finalDrawing } = payload;
    const startPoint = { x: 300, y: 400 };

    let Diameter = Number(inputs["Diameter"]) || 0;
    let DirectingCircle = Number(inputs["Directing Circle"]) || 0;
    
    let values = { Diameter, DirectingCircle }
    let r = Diameter / 2;
    let R = DirectingCircle / 2;
    const angle = (r / DirectingCircle) * 360;
    // const angle1 = (r / R) * 360;
    console.log(angle,"angle");
    const o_LineEndPoint = { x: startPoint.x + DirectingCircle, y: startPoint.y };
    const o_LinePoints = calculateLinePointsWithCircles(startPoint, o_LineEndPoint);
    // const o_LinePoints =  calculateAngledLinePoints(startPoint, angle1, DirectingCircle);
    const o_Linestartlabel = calculateLabel(startPoint, "o", "down");
    const o_Lineendlabel = calculateLabel(o_LineEndPoint, "a", "down");
  
    const p_LineEndpoint = calculateAngledLinePoints(startPoint, angle, DirectingCircle);
    const p_LinePoints = calculateLinePointsWithCircles(startPoint, p_LineEndpoint, lightPencil);
    const p_Linelabel = calculateLabel(p_LineEndpoint, "p", "left-up");

      // Divide Major Circle into 12 Equal Parts
      const numDivisions = 12;
      const divisionPoints = [];
      const verticalLines = [];
      const dx = startPoint.x - p_LineEndpoint.x; // x-difference between O and P
      const dy = startPoint.y - p_LineEndpoint.y; // y-difference between O and P
      const distanceOP = Math.sqrt(dx * dx + dy * dy); // Distance between P and O
      const unitVector = { x: dx / distanceOP, y: dy / distanceOP }; 
      const c_point = { x: p_LineEndpoint.x + unitVector.x * r,y: p_LineEndpoint.y + unitVector.y * r};
      const c_Linepoint = calculateLinePointsWithCircles(p_LineEndpoint, c_point,lightPencil);
      const c_pointLabel = calculateLabel(c_point, "c", "down");
      const circlePoints = generateFullCircle(c_point, r);
    
      for (let i = 0; i < numDivisions; i++) {
          const startAngle = Math.PI / 2;
          const angle = startAngle + (i * (2 * Math.PI)) / numDivisions;
  
          const xCircle = c_point.x + r * Math.cos(angle);
          const yCircle = c_point.y + r * Math.sin(angle);
          divisionPoints.push({ x: xCircle, y: yCircle });

      }

 let radiusforpointc = calculateDistance(startPoint, c_point);
 const drawcirclefropointc = drawQuarterCircle(startPoint,angle,0,radiusforpointc)
 console.log(radiusforpointc,"radius");
    // Generate 12 Lines at 10° to 120°
    const additionalLinesforpointc = [];
   const lineEndpointsforpointc = [];
    for (let i = 0; i <= 11; i++) {
        const angleInDegrees =  i * 10; // 10°, 20°, ..., 120°
        const lineEndpointforpointc = calculateAngledLinePoints(startPoint, angleInDegrees, radiusforpointc);
        const linePoints = calculateLinePointsWithCircles(startPoint, lineEndpointforpointc);
        const c_linePointslabel = calculateLabel(lineEndpointforpointc,`c${12 - i}`, "up");

        // Push the endpoint of the current line into the array
        lineEndpointsforpointc.push(lineEndpointforpointc);

    additionalLinesforpointc.push(//...linePoints, ...darkPencil,
     ...c_linePointslabel);
    }

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {

        sendToPoints.push(
            ...o_LinePoints,
            ...o_Linestartlabel,
            ...o_Lineendlabel,
            ...darkPencil,
            ...p_LinePoints,
            ...p_Linelabel,
            ...darkPencil,      
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 ||drawAll) {
   
        for (let i = 0; i <= 5; i++) {
            const verticalLine = calculateLinePointsWithCircles(divisionPoints[i], divisionPoints[i + 6], lightPencil);
            // const Circlelabel_labelstartpoint = calculateLabel(divisionPoints[i], `${i + 1}`, "up");
            // const Circlelabel_labelendpoint=calculateLabel(divisionPoints[i + 6], `${i + 7}`, "up"); 
      
            verticalLines.push(...verticalLine, ...lightPencil);  
          
        }
        sendToPoints.push(
            ...c_Linepoint,
            ...c_pointLabel,
            ...darkPencil,
            ...circlePoints,
            ...darkPencil,
            ...verticalLines,
            ...lightPencil,
         
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        const drawcircles = []
        for (let i = 0; i <= 5; i++) {
            const verticalLine = calculateLinePointsWithCircles(divisionPoints[i], divisionPoints[i + 6], lightPencil);
        const calculateangle = -calculateAngleInDegrees(startPoint, divisionPoints[i]);
        let radius = calculateDistance(startPoint, divisionPoints[i]);
        console.log("calculateangle",calculateangle)
        const drawcircle = drawQuarterCircle(startPoint,calculateangle,0,radius);
        drawcircles.push(...drawcircle,...lightPencil)  
    }
        sendToPoints.push(
            ...drawcircles
        
           
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
  
    if (counter === 4 || drawAll) {
            // Generate 12 Lines at 10° to 120°
    const additionalLines = [];
   const lineEndpoints = [];
    for (let i = 1; i <= 12; i++) {
        const angleInDegrees = i * 10; // 10°, 20°, ..., 120°
        const lineEndpoint = calculateAngledLinePoints(startPoint, angleInDegrees, DirectingCircle);
        const linePoints = calculateLinePointsWithCircles(startPoint, lineEndpoint, lightPencil);
        // Push the endpoint of the current line into the array
    lineEndpoints.push(lineEndpoint);

        additionalLines.push(...linePoints, ...lightPencil);
    }
        sendToPoints.push(
            ...additionalLines ,
     
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 5 || drawAll) {
     
        sendToPoints.push(
            ...drawcirclefropointc,
            ...darkPencil,
         ...additionalLinesforpointc,
         ...darkPencil,
     
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
   
  
    const steps = hypocycloidSteps(values); // Generate steps dynamically
    const step = drawAll
        ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
        : steps[counter];
    return { points: sendToPoints, step }; // Return empty points and message for invalid counter
}

// -----------------------------------
