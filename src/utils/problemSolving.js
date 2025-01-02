
import { calculateDashedLinePoints, calculateDirection, calculateLabel, calculateLinePoints, drawSinglePoint, drawXYaxis, getCirclePoints, getLineDirection, printPoints, xyaxis } from "./functionHelper";
import { calculateAngledLinePoints } from "./functionHelper";
import { lightPencil,darkPencil,superDarkPencil, startPoint } from "./globalVariable";


export function getProblem1Points() {
    // Define variables first
    const startPoint = { x: 100, y: 200 };
    const endPoint = { x: 200, y: 200 };
    const lineLength = 90; // Length of the angled line
    const verticalLineLength = 25; // Length of the vertical line
    const angleInDegrees = -60; // Angle in degrees
    
    // Calculate main line points
    const mainLinePoints = calculateLinePoints(startPoint, endPoint);
    
    // Calculate end point for the angled line
    const angledEndPoint = calculateAngledLinePoints(
        startPoint,
        angleInDegrees,      // Angle in degrees
        lineLength           // Length of the angled line
    );
    
    // Calculate points for the angled line
    const angledLinePoints = calculateLinePoints(startPoint, angledEndPoint);
    
    // Define and calculate the vertical line
    const verticalEndPoint = {
        x: startPoint.x,
        y: startPoint.y - verticalLineLength, // 25mm vertical line upwards
    };
    const verticalLinePoints = calculateLinePoints(startPoint, verticalEndPoint);
    
    // Calculate the dynamic length of the horizontal line (based on distance between verticalEndPoint and angledEndPoint)
    const horizontalLineLength = Math.abs(verticalEndPoint.x - angledEndPoint.x);
    
    // Define and calculate the horizontal line
    const horizontalStartPoint = verticalEndPoint; // Starts where the vertical line ends
    const horizontalEndPoint = {
        x: horizontalStartPoint.x + horizontalLineLength, // Calculate x-coordinate based on the length
        y: horizontalStartPoint.y, // Keep y-coordinate the same for a horizontal line
    };
    const horizontalLinePoints = calculateLinePoints(horizontalStartPoint, horizontalEndPoint);
    
    // Define and calculate the new vertical line from angled line to horizontal line
    const newVerticalStartPoint = angledEndPoint;
    const newVerticalEndPoint = {
        x: angledEndPoint.x,
        y: horizontalStartPoint.y, // Same y-coordinate as the horizontal line for intersection
    };
    const newVerticalLinePoints = calculateLinePoints(newVerticalStartPoint, newVerticalEndPoint);
    
    // Combine all line points into a single array
    return [
        ...mainLinePoints,
        ...superDarkPencil,
        ...angledLinePoints,
        ...lightPencil,
        ...verticalLinePoints,
        ...darkPencil,
        ...horizontalLinePoints,
        ...darkPencil,
        ...newVerticalLinePoints,
        ...darkPencil
    ];
}


// ---------------------------
//  Question 2
export function getProblem2Points() {

    // Define variables first
    const startPoint = { x: 100, y: 200 };
    const endPoint = { x: 200, y: 200 };
    
    const lineLength = 70; // Length of the angled line
    const verticalLineLength = 37; // Length of the vertical line
    const horizontalLineLength = 50; // Length of the horizontal line
    const angleInDegrees = 45; // Angle in degrees
    
    // Calculate main line points
    const mainLinePoints = calculateLinePoints(startPoint, endPoint);
    // Calculate start and end points for the angled line, going upwards (adjusted formula)
   

    // Calculate end point for the angled line
    const angledEndPoint = calculateAngledLinePoints(
        startPoint,
        angleInDegrees,      // Angle in degrees
        lineLength           // Length of the angled line
    );

    // Calculate points for the angled line
    const angledLinePoints = calculateLinePoints(startPoint, angledEndPoint);
    // Define and calculate the vertical line
    const verticalStartPoint = startPoint;
    const verticalEndPoint = {
        x: startPoint.x,
        y: startPoint.y + verticalLineLength, // Vertical line upwards
    };
    const verticalLinePoints = calculateLinePoints(verticalStartPoint, verticalEndPoint);
    // Define and calculate the horizontal line
    const horizontalStartPoint = verticalEndPoint; // Starts where the vertical line ends
    const horizontalEndPoint = {
        x: horizontalStartPoint.x + horizontalLineLength, // Extend x-coordinate by the desired length
        y: horizontalStartPoint.y, // Keep y-coordinate the same for a horizontal line
    };
    const horizontalLinePoints = calculateLinePoints(horizontalStartPoint, horizontalEndPoint);
    // Define and calculate the new vertical line from angled line to horizontal line
    const newVerticalStartPoint = angledEndPoint;
    const newVerticalEndPoint = {
        x: angledEndPoint.x,
        y: horizontalStartPoint.y, // Same y-coordinate as the horizontal line for intersection
    };
    const newVerticalLinePoints = calculateLinePoints(newVerticalStartPoint, newVerticalEndPoint);
    // Combine all line points into a single array
    return [
        ...mainLinePoints,
        ...superDarkPencil,
        ...angledLinePoints,
        ...lightPencil,
        ...verticalLinePoints,
        ...darkPencil,
        ...horizontalLinePoints,
        ...superDarkPencil,
        ...newVerticalLinePoints,
        ...darkPencil,

    ];

}


// ------------------------

// Function to calculate the direction of the arrow from startPoint to endPoint
function direction(startPoint, endPoint) {
    // Calculate the angle between startPoint and endPoint
    const deltaX = endPoint.x - startPoint.x;
    const deltaY = endPoint.y - startPoint.y;
    const angle = Math.atan2(deltaY, deltaX); // Calculate angle in radians

    // Set the arrow point slightly before the end point for visibility
    const arrowPoint = {
        x: endPoint.x - 10 * Math.cos(angle), // Adjusts distance of the arrow tip
        y: endPoint.y - 10 * Math.sin(angle), // Adjusts distance of the arrow tip
        type: "arrow",
        angle: angle
    };

    return arrowPoint;
}

// Assuming calculateLinePoints and calculateLabel functions are defined elsewhere
export function getProblem3Points() {
    // Define variables
    const startPoint = { x: 100, y: 200 };
    const endPoint = { x: 200, y: 200 };
    
    // Calculate main line points
    const mainLinePoints = calculateLinePoints(startPoint, endPoint);
    
    // Label the start and end points
    const labeledStartPoint = calculateLabel(startPoint, "a", "left");
    const labeledEndPoint = calculateLabel(endPoint, "b", "right");

    // Calculate the arrow direction point
    const arrowPoint = direction(startPoint, endPoint);

    // Combine all points into a single array
    return [
        labeledStartPoint,
        ...mainLinePoints,
        labeledEndPoint,
        arrowPoint
    ];
}

// ------------------------------------------



export function getProblem4Points() {
    
    return [
     
        ...drawXYaxis() 
       
    ];
}

// ---------------------------



