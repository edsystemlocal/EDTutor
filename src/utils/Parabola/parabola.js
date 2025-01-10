import { calculateAngle, calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateDistance, calculateHeight, calculateHeightFromBase, calculateHypotenuseWithAngle, calculateLabel, calculateLinePointsWithCircles, calculateLinePointsWithCircles2, defineSteps, getCirclePoints }  from "../functionHelper";
import { darkPencil, lightPencil } from "../globalVariable";



export function ParabolaByTangentMethodSteps(values) {
    const {Base,
        Height ,} = values;
    return {
        1: defineSteps(
            `Draw the base line of given length ${Base} mm`,
            "Label the start point as 'A'",
            "Label the endpoint as 'B'",


        ),
        2: defineSteps(

            "calculate the mid point of base line ",
            `Draw the axis line of given hieght ${Height} mm`,
            "Label the endpoint as 'p'",

        ),
        3: defineSteps(
            `Draw the new line above the axis line with same hieght ${Height} mm`,
            "Label the endpoint of the new line as 'o'",
        ),
        4: defineSteps(
            "Now Draw the vertical line from 'A' to 'o'",
        ),
        5: defineSteps(
            "Draw the next vertical line from 'b' to 'o'",
        ),
        6: defineSteps("now divide lines ao into to the same number of equal part "),
        7: defineSteps(
            "now divide lines bo into to the same number of equal part",
        ),
        8: defineSteps(
            "draw lines joining 1 with 1' , 2 with 2', 3 with 3' etc",
            "this curve is the required parabola"

        ),
    };
}

export function ParabolaByTangentMethod(payload) {
    const { counter, inputs , finalDrawing } = payload;
  
    let Base = Number(inputs["Base"]) || 0;
    let Height = Number(inputs["Height"]) || 0;
    let values ={
        Base,
        Height ,
   }
    const startPoint = { x: 50, y: 400 };

    const BaseLineStartPoint = { x: 150, y: startPoint.y };
    const BaseLineEndPoint = { x: BaseLineStartPoint.x + Base, y: startPoint.y };
    const BaseLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, BaseLineEndPoint);

    // Calculate the midpoint of the base line
    const MidPoint = {
        x: (BaseLineStartPoint.x + BaseLineEndPoint.x) / 2,
        y: BaseLineStartPoint.y,
    };

    // Calculate the perpendicular line points
    const PerpendicularLineStartPoint = { x: MidPoint.x, y: MidPoint.y };
    const PerpendicularLineEndPoint = { x: MidPoint.x, y: MidPoint.y - Height };

    const PerpendicularLinePoints = calculateLinePointsWithCircles(
        PerpendicularLineStartPoint,
        PerpendicularLineEndPoint
    );

    const newPerpendicularLineStartPoint = PerpendicularLineEndPoint;
    const newPerpendicularLineEndPoint = {
        x: newPerpendicularLineStartPoint.x,
        y: newPerpendicularLineStartPoint.y - Height,
    };

    const newPerpendicularLinePoints = calculateLinePointsWithCircles(
        newPerpendicularLineStartPoint,
        newPerpendicularLineEndPoint
    );

    const verticalLinePoints = calculateLinePointsWithCircles(
        newPerpendicularLineEndPoint,
        BaseLineStartPoint
    );
    const newverticalLinePoints = calculateLinePointsWithCircles(
        newPerpendicularLineEndPoint,
        BaseLineEndPoint
    );

    const SecoundverticalLinePoints = calculateLinePointsWithCircles2(
        BaseLineStartPoint,
        newPerpendicularLineEndPoint
    );
    const SecoundnewverticalLinePoints = calculateLinePointsWithCircles2(
        newPerpendicularLineEndPoint,
        BaseLineEndPoint
    );
    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1|| drawAll) {
        sendToPoints.push(
            ...BaseLinePoints,
            ...calculateLabel(BaseLineStartPoint, "a", "left-down"),
            ...calculateLabel(BaseLineEndPoint, "b", "right-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2|| drawAll) {
        sendToPoints.push(
            ...PerpendicularLinePoints,
            ...calculateLabel(PerpendicularLineEndPoint, "P", "top-right"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3|| drawAll) {
        sendToPoints.push(
            ...newPerpendicularLinePoints,
            ...calculateLabel(newPerpendicularLineEndPoint, "o", "top-right"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 4|| drawAll) {
        sendToPoints.push(...verticalLinePoints, ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 5|| drawAll) {
        sendToPoints.push(...newverticalLinePoints, ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 6|| drawAll) {
        // Draw points but exclude the first two and the last point
        const allDotPoints1 = drawPoints(SecoundverticalLinePoints, 14, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1, allDotPoints1.length); // Exclude first 2 and last point
    
        // Add labels to the remaining points
        dotPoints1.forEach((point, index) => {
            const label = `${index + 1}`; // Generate the label (1, 2, 3, ...)
            sendToPoints.push(...calculateLabel(point, label, "left")); // Adjust position as needed
        });
    
        sendToPoints.push(...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 7|| drawAll) {
        // Draw points but exclude the first two and the last point
        const allDotPoints2 = drawPoints(SecoundnewverticalLinePoints, 14, sendToPoints);
        const dotPoints2 = allDotPoints2.slice(1, allDotPoints2.length); // Exclude first 2 and last point
    
        // Add labels to the remaining points
        dotPoints2.forEach((point, index) => {
            const label = `${index + 1}'`; // Generate the label with prime notation (1', 2', 3', ...)
            sendToPoints.push(...calculateLabel(point, label, "top")); // Adjust position as needed
        });
    
        sendToPoints.push(...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    

    if (counter === 8|| drawAll) {
        const dotPoints1 = drawPoints(SecoundverticalLinePoints, 14, sendToPoints);
        const dotPoints2 = drawPoints(SecoundnewverticalLinePoints, 14, sendToPoints);
    
        // Ensure the number of points matches in both sets
        const totalDots = Math.min(dotPoints1.length, dotPoints2.length);
    
        // Connect each corresponding dot
        for (let i = 0; i < totalDots-1; i++) {
            const startDot = dotPoints1[i]; // Dot from the first vertical line (e.g., 1)
            const endDot = dotPoints2[i]; // Corresponding dot from the second vertical line (e.g., 1')
    
            // Draw a line between these two dots
            const linePoints = calculateLinePointsWithCircles(startDot, endDot, lightPencil);
            sendToPoints.push(...linePoints);
            sendToPoints.push(...lightPencil);
        }

        // const secondnewaperpendicularalLinePoints2 = calculateLinePointsWithCircles2(
        //     secondnewaperpendicularalLineStartPoint,
        //     secondnewaperpendicularalLineSEndPoint
        // );

       
    
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 9|| drawAll) {
        
        const starttomidpointLinePoints = calculateLinePointsWithCircles2(
            BaseLineStartPoint,
            MidPoint
        );

        const newPerpendicularLinePointsPara = calculateLinePointsWithCircles2(
            BaseLineStartPoint,
            {x: BaseLineStartPoint.x, y: PerpendicularLineEndPoint.y}
        );

        const secondPerpendicularLinePointsPara = calculateLinePointsWithCircles2(
            BaseLineEndPoint,
            {x: BaseLineEndPoint.x, y: PerpendicularLineEndPoint.y}
        );

        const MidPointToEndPointPara = calculateLinePointsWithCircles2(
            BaseLineEndPoint,
            {x: MidPoint.x, y: BaseLineEndPoint.y}
        );

        
        

        sendToPoints.push(
            ...getParabolaPoints(newPerpendicularLinePointsPara, PerpendicularLineEndPoint, starttomidpointLinePoints, BaseLineStartPoint),
            ...darkPencil
        );
    
            let eclipsePoints = getParabolaPoints(secondPerpendicularLinePointsPara, PerpendicularLineEndPoint, MidPointToEndPointPara, BaseLineEndPoint);
            sendToPoints.push(
                ...eclipsePoints.reverse(),
                ...darkPencil
            );
    
        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    const steps = ParabolaByTangentMethodSteps(values);
    const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
    return { points: sendToPoints, step }; // Return points and the step description
}

// .........................................................................................................................

// ParabolaByRectangularMethod

export function ParabolaByRectangularMethodSteps(values) {
    const {Base,
        Height ,} = values;
    return {
        1: defineSteps(
            `Draw the base line of given length ${Base}`,
            "Label the start point as 'a'",
            "Label the endpoint as 'b'",


        ),
        2: defineSteps(

            "calculate the mid point of base line ",
            `Draw the perpendicular line of given hieght ${Height}`,
            "Label the startpoint as 'o'",
            "Label the endpoint as 'c'",

        ),
        3: defineSteps(
            "Draw the new line at the start point of the base line with same hieght",
            "Label the endpoint of the new line as 'd'",
        ),
        4: defineSteps(
            "Draw the one more line at the End point of the base line with same hieght",
            "Label the endpoint of the new line as 'e'",
        ),
        5: defineSteps(
            "Now Draw the Horizontal line from 'd' to 'e'",
        ),
        6: defineSteps(
            "now divide the 'a' to 'd' new perpendicular line in the 3 part and draw the points and give them names ",
        ),
        7: defineSteps(
            "next  divide the 'a' to 'o' line (from start point to midpoint) in the 3 part as same as 'a' to 'd' line and draw the points and give them names ",
        ),
        8: defineSteps(
            "Connect each dot on the new perpendicular line to the perpendicular line's end point.",
        ),
        9: defineSteps(
            "Draw perpendicular lines of the same height from each dot on the base line (from start point to midpoint).",
        ),
        10: defineSteps(
            "create same structure as the other side ",
        ),
        11: defineSteps(
            "now connect the every intersection points one by one from base line start point to base line end point same as the diagram",
        ),
        12: defineSteps(
            "now connect the every intersection points one by one from base line end point to perpendicular line end point same as the other side",
        ),
        13: defineSteps(
            "Draw perpendicular lines of the same height from each dot on the base line (from start point to midpoint).",
        ),
    };
}

export function ParabolaByRectangularMethod(payload) {
    const { counter, inputs , finalDrawing} = payload;


    const startPoint = { x: 50, y: 400 };
    let Base = Number(inputs["Base"]) || 0;
    let Height = Number(inputs["Height"]) || 0;
    let values ={
        Base,
        Height ,
   }

    // Calculate XY axis line points
    const BaseLineStartPoint = { x: 150, y: startPoint.y };
    const BaseLineEndPoint = { x: BaseLineStartPoint.x + Base, y: startPoint.y };
    const BaseLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, BaseLineEndPoint);

    // Calculate the midpoint of the base line
    const MidPoint = {
        x: (BaseLineStartPoint.x + BaseLineEndPoint.x) / 2,
        y: BaseLineStartPoint.y,
    };

    // Calculate the perpendicular line points
    const PerpendicularLineStartPoint = { x: MidPoint.x, y: MidPoint.y };
    const PerpendicularLineEndPoint = { x: MidPoint.x, y: MidPoint.y - Height };

    const PerpendicularLinePoints = calculateLinePointsWithCircles(
        PerpendicularLineStartPoint,
        PerpendicularLineEndPoint
    );

    const newPerpendicularLineStartPoint = BaseLineStartPoint;
    const newPerpendicularLineEndPoint = {
        x: newPerpendicularLineStartPoint.x,
        y: newPerpendicularLineStartPoint.y - Height,
    };

    const newPerpendicularLinePoints = calculateLinePointsWithCircles(
        newPerpendicularLineStartPoint,
        newPerpendicularLineEndPoint
    );

    const newPerpendicularLinePoints2 = calculateLinePointsWithCircles2(
        newPerpendicularLineStartPoint,
        newPerpendicularLineEndPoint
    );

    const secondnewaperpendicularalLineStartPoint = BaseLineEndPoint;
    const secondnewaperpendicularalLineSEndPoint = {
        x: secondnewaperpendicularalLineStartPoint.x,
        y: secondnewaperpendicularalLineStartPoint.y - Height,
    };

    const secondnewaperpendicularalLinePoints = calculateLinePointsWithCircles(
        secondnewaperpendicularalLineStartPoint,
        secondnewaperpendicularalLineSEndPoint
    );

    const secondnewaperpendicularalLinePoints2 = calculateLinePointsWithCircles2(
        secondnewaperpendicularalLineStartPoint,
        secondnewaperpendicularalLineSEndPoint
    );

    const verticalLinePoints = calculateLinePointsWithCircles(
        newPerpendicularLineEndPoint,
        secondnewaperpendicularalLineSEndPoint
    );

    const lengthStartToMid = Math.sqrt(
        Math.pow(MidPoint.x - BaseLineStartPoint.x, 2) +
        Math.pow(MidPoint.y - BaseLineStartPoint.y, 2)
    );

    const lengthMidToEnd = Math.sqrt(
        Math.pow(BaseLineEndPoint.x - MidPoint.x, 2) +
        Math.pow(BaseLineEndPoint.y - MidPoint.y, 2)
    );

    console.log(`Length from Start to Midpoint: ${lengthStartToMid}`);
    console.log(`Length from Midpoint to Endpoint: ${lengthMidToEnd}`);


    const starttomidpointLinePoints = calculateLinePointsWithCircles2(
        BaseLineStartPoint,
        MidPoint
    );

    const midpointtoendpointbaseLinePoints = calculateLinePointsWithCircles2(
        BaseLineEndPoint,
        MidPoint,

    );

    const angle = calculateAngleInDegrees(BaseLineStartPoint, PerpendicularLineEndPoint)
    console.log("angle" + angle)

   const height= calculateHeightFromBase(30,angle)
   console.log("Height" +height)
   let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        sendToPoints.push(
            ...BaseLinePoints,
            ...calculateLabel(BaseLineStartPoint, "a", "left-down"),
            ...calculateLabel(BaseLineEndPoint, "b", "right-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 || drawAll) {
        sendToPoints.push(
            ...PerpendicularLinePoints,
            ...calculateLabel(PerpendicularLineStartPoint, "o", "down"),
            ...calculateLabel(PerpendicularLineEndPoint, "c", "up"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        sendToPoints.push(
            ...newPerpendicularLinePoints,
            ...calculateLabel(newPerpendicularLineEndPoint, "d", "up"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 4 || drawAll) {
        sendToPoints.push(
            ...secondnewaperpendicularalLinePoints,
            ...calculateLabel(secondnewaperpendicularalLineSEndPoint, "e", "up"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 5 || drawAll) {
        sendToPoints.push(...verticalLinePoints, ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    // let verticalPoints = [];
    if (counter === 6 || drawAll) {
        const allDotPoints1 = drawPoints(newPerpendicularLinePoints2, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1, allDotPoints1.length);
        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "left")); // Place label above the dot
            // verticalPoints.push({...dot});
        });
        if (finalDrawing) {
            drawAll = true;
        }

    }
    if (counter === 7 || drawAll) {
        const allDotPoints1 = drawPoints(starttomidpointLinePoints, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1, allDotPoints1.length);

        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "down")); // Place label above the dot
            // horizontalPoints.push({...dot});
        });
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 8 || drawAll) {
        // Retrieve dots from the newPerpendicularLinePoints
        const allDotPoints1 = drawPoints(
            newPerpendicularLinePoints2, // Points on the new perpendicular line
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );
        const newPerpendicularDots = allDotPoints1.slice(1, allDotPoints1.length);

        // Use a for loop to connect each dot to the PerpendicularLineEndPoint
        for (const dot of newPerpendicularDots) {
            // Calculate the line points for each dot to PerpendicularLineEndPoint 
            sendToPoints.push(
                ...calculateLinePointsWithCircles(dot, PerpendicularLineEndPoint,lightPencil)
            ); // Push the calculated points to sendToPoints
        }
        if (finalDrawing) {
            drawAll = true;
        }
        // Set the step description
    }

    if (counter === 9 || drawAll) {
        // Retrieve the dots drawn from the base line to the midpoint
        const allDotPoints1 = drawPoints(
            // calculateLinePointsWithCircles2(BaseLineStartPoint, MidPoint), // Line points
            starttomidpointLinePoints,
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );
        const baseToMidPoints = allDotPoints1.slice(1, allDotPoints1.length);

        // Loop through each dot to draw perpendicular lines
        for (const dot of baseToMidPoints) {
            // Calculate the perpendicular line's start and end points
            const perpendicularStartPoint = dot;
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height }; // Move upwards by the height

            // Get the points for the perpendicular line and add to sendToPoints
            const perpendicularLinePoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint,lightPencil);
            sendToPoints.push(...perpendicularLinePoints,
                ...lightPencil
            );
        }
const basetomid = calculateLinePointsWithCircles2(BaseLineStartPoint,MidPoint)
        // Add styling to the drawn points
        sendToPoints.push(...basetomid,...darkPencil);

        // Set the step description for this operation
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 10 || drawAll) {
        // Step 1: Draw dots and label on `secondnewaperpendicularalLinePoints`
        const allDotPoints1 = drawPoints(secondnewaperpendicularalLinePoints2, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1); // Skip the first point
        dotPoints1.forEach((dot, index) => {
            const label = `${index + 1}`;
            sendToPoints.push(...calculateLabel(dot, label, "right"));
        });
    
        // Step 2: Draw dots and label on `midpointtoendpointbaseLinePoints`
        const allDotPoints2 = drawPoints(midpointtoendpointbaseLinePoints, 30, sendToPoints);
        const dotPoints2 = allDotPoints2.slice(1);
        dotPoints2.forEach((dot, index) => {
            const label = `${index + 1}`;
            sendToPoints.push(...calculateLabel(dot, label, "down"));
        });
    
        // Step 3: Connect dots from `secondnewaperpendicularalLinePoints` to `PerpendicularLineEndPoint`
        const nextNewPerpendicularDots = drawPoints(secondnewaperpendicularalLinePoints2, 30, sendToPoints).slice(1);
        nextNewPerpendicularDots.forEach(dot => {
            const linePoints = calculateLinePointsWithCircles(dot, PerpendicularLineEndPoint, lightPencil);
            sendToPoints.push(...linePoints, ...lightPencil);
        });
    
        // Step 4: Draw vertical lines from `BaseLineEndPoint` to `MidPoint`
        const baseToMidPoints = drawPoints(
            calculateLinePointsWithCircles2(BaseLineEndPoint, MidPoint),
            30,
            sendToPoints
        ).slice(1);
        baseToMidPoints.forEach(dot => {
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height };
            const perpendicularLinePoints = calculateLinePointsWithCircles(dot, perpendicularEndPoint, lightPencil);
            sendToPoints.push(...perpendicularLinePoints, ...lightPencil);
        });
        const midtoend = calculateLinePointsWithCircles2(MidPoint,BaseLineEndPoint)

        // Finalize step
        sendToPoints.push(...midtoend,...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 11 || drawAll) {       
        sendToPoints.push(
        ...getParabolaPoints(newPerpendicularLinePoints2, PerpendicularLineEndPoint, starttomidpointLinePoints, BaseLineStartPoint),
        ...darkPencil
    );

        let eclipsePoints = getParabolaPoints(secondnewaperpendicularalLinePoints2, PerpendicularLineEndPoint, midpointtoendpointbaseLinePoints, BaseLineEndPoint);
        sendToPoints.push(
            ...eclipsePoints.reverse(),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    const steps = ParabolaByRectangularMethodSteps(values); // Generate steps dynamically
    const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
    return { points: sendToPoints, step }; // Return points and the step description
}
function drawPoints(linePoints, interval, sendToPoints) {
    const drawnPoints = [];
    for (let i = 0; i < linePoints.length; i += interval) {
        const dot = linePoints[i]; // Get the point at the specified interval
        sendToPoints.push(...getCirclePoints(dot)); // Add the dot to the points
        drawnPoints.push(dot); // Keep track of the dots
    }
    return drawnPoints;
}

export function calculateParabolaLinePoints(startPoint, endPoint) {
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

export function getParabolaPoints(verticalPoints, PerpendicularLineEndPoint, horizontalPoints, BaseLineStartPoint){
    console.log("verticalPoints: ", verticalPoints);
    let hyperbolaPoints = [];
    let startingPoint = verticalPoints[0];

        for (let i = 1; i <= 100; i++) {
        let endPoint = hyperbolaPoints1(
            verticalPoints[i],
            horizontalPoints[i],
            BaseLineStartPoint,
            PerpendicularLineEndPoint
        );
        hyperbolaPoints.push(...calculateParabolaLinePoints(startingPoint, endPoint));
        hyperbolaPoints.push(...darkPencil);
        startingPoint = endPoint;
    }

    hyperbolaPoints.push(...calculateParabolaLinePoints(startingPoint, PerpendicularLineEndPoint));
    hyperbolaPoints.push(...darkPencil);

    return hyperbolaPoints;
}

export function hyperbolaPoints1(verticalPoint, horizontalPoint, BaseLineStartPoint, PerpendicularLineEndPoint){
    let angle1 = -(calculateAngleInDegrees(verticalPoint, PerpendicularLineEndPoint));
    let firstPointHorizontalLength = horizontalPoint.x - BaseLineStartPoint.x;

    let hype = calculateHypotenuseWithAngle(firstPointHorizontalLength, angle1);
    let endPoint11 = calculateAngledLinePoints(verticalPoint, angle1, hype);
    // console.log("My Point: ", endPoint11);
    // console.log("verticalPoint11: ", verticalPoint);
    // console.log("horizontalPoint: ", horizontalPoint);
    // console.log("BaseLineStartPoint: ", BaseLineStartPoint);
    // console.log("angle1: ", angle1);
    return endPoint11;
}


// .............................................................


export function ParabolaByPARALLELOGRAMMethodSteps(values) {
    const {Base,
        Height ,
        angleInDegrees} = values;
    return {
        1: defineSteps(`Draw the base line `,
            "Label the start point as 'a'",
            "Label the endpoint as 'b'",
        ),
        2: defineSteps(
            "Draw a Perpendicular Line: From the starting point 'a'",
            " draw a vertical line named ac. This line should be perpendicular to the horizontal axis.",
        ),
        3: defineSteps(
            `Draw an Inclined Line: From the starting point 'a' of given Angle ${angleInDegrees}`,
            " draw an inclined line at a given angle, naming it ad.",
        ),
        4: defineSteps(
            `Locate a Point on the Inclined Line: Using the given length ${Base} `,
            "mark a point e on the inclined line ad, at the specified distance from point 'a'",
        ),
        5: defineSteps(
            `Locate a Point on the Vertical Line: Using the given height ${Height}`,
            "mark a point f on the vertical line ac, at the specified distance from point 'a'",
        ),
        6: defineSteps(
            "Draw a Parallel Line: From point e",
            "draw a horizontal line named eg, parallel to the vertical line ac, using the given height.",
        ),
        7: defineSteps(
            "Connect Two Points: Join points f and g with a straight line.",
        ),
        8: defineSteps(
            "Find Midpoints and Connect Them:",
            "Find the midpoint of the line AE and name it p.",
            "Find the midpoint of the line FG and name it q.",
            "Join points p and q with a straight line.",
        ),
        9: defineSteps(
            "Mark Equal Distances on Line af: Divide the line af into four equal segments",
             "marking the points as 1, 2, 3, and 4, respectively.",
        ),
        10: defineSteps(
            "Mark Equal Distances on Line ap: Similarly, divide the line ap into four equal segments",
            "marking the points as 1, 2, 3, and 4, respectively.",
        ),
        11: defineSteps(
            "Connect Points on af to q: Draw straight lines from points 1, 2, 3, and 4 on af to point q.",
        ),
        12: defineSteps(
            "Draw Parallel Lines from af Points to fq: From points 1, 2, 3, and 4 on af",
            "draw lines parallel to af until they intersect the line fq.",
        ),
        13: defineSteps(
            "Repeat on the Other Side: Mirror the entire structure created on the opposite side of the vertical line ac",
            "maintaining symmetry.",
        ),
        14: defineSteps(
            "now connect the every intersection points one by one from  Inclined Line start point to point f same as the diagram",
        ),
    };
}

export function ParabolaByPARALLELOGRAMMethod(payload) {
    const { counter , inputs , finalDrawing} = payload;
    const startPoint = { x: 50, y: 400 };
    let Base = Number(inputs["Base"]) || 0;
    let Height = Number(inputs["Height"]) || 0;
    let angleInDegrees = Number(inputs["Angle (Degrees)"]) || 0;
    
    let values ={
        Base,
        Height ,
        angleInDegrees
   }
    // Calculate XY axis line points
    const BaseLineStartPoint = { x: 150, y: startPoint.y };
    const BaseLineEndPoint = { x: BaseLineStartPoint.x + 500, y: startPoint.y };
    const BaseLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, BaseLineEndPoint);

    const perpendicularStartPoint = BaseLineStartPoint;
    const perpendicularEndPoint = { x: perpendicularStartPoint.x, y: perpendicularStartPoint.y - 300 };
    const perpendicularPoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint);

    // Use the end of the vertical line as the start of the angled line
    const angledStartPointUp = BaseLineStartPoint;
    const angledEndPointUp = calculateAngledLinePoints(

    angledStartPointUp,
    angleInDegrees,
    500
  );
  //     // Calculate points for the angled line
  const angledLinePoints = calculateLinePointsWithCircles(angledStartPointUp, angledEndPointUp);
  
  const baseLineInAngledStartPoint = BaseLineStartPoint;
  const baseLineInAngledEndPoint =calculateAngledLinePoints(

    BaseLineStartPoint,
    angleInDegrees,
    Base
  );
  const baseLineInAngledPoints = calculateLinePointsWithCircles(baseLineInAngledStartPoint, baseLineInAngledEndPoint);
  
  const HeightlineStartPoint =BaseLineStartPoint;
  const HeightlineEndPoint = { x: HeightlineStartPoint.x, y: HeightlineStartPoint.y - Height };
  const HeightlinePoints = calculateLinePointsWithCircles(HeightlineStartPoint, HeightlineEndPoint);

  const SecoundHeightlinePoints = calculateLinePointsWithCircles2(HeightlineStartPoint, HeightlineEndPoint);

  
  const NewHeightlineStartPoint = baseLineInAngledEndPoint;
  const NewHeightlineEndPoint = { x: NewHeightlineStartPoint.x, y: NewHeightlineStartPoint.y - Height };
  const NewHeightlinePoints = calculateLinePointsWithCircles(NewHeightlineStartPoint, NewHeightlineEndPoint);

  const SecoundNewHeightlinePoints = calculateLinePointsWithCircles2(NewHeightlineStartPoint, NewHeightlineEndPoint);


  const horizontalLinePoints = calculateLinePointsWithCircles(HeightlineEndPoint, NewHeightlineEndPoint);


  const MidPoint1 = {
    x: (baseLineInAngledStartPoint.x + baseLineInAngledEndPoint.x) / 2,
    y: (baseLineInAngledStartPoint.y + baseLineInAngledEndPoint.y) /2,
};

const MidPoint2 = {
    x: (HeightlineEndPoint.x + NewHeightlineEndPoint.x) / 2,
    y: (HeightlineEndPoint.y + NewHeightlineEndPoint.y)/2,
};

const verticalLinePoints = calculateLinePointsWithCircles(MidPoint1,MidPoint2 );

const starttomidpointLinePoints = calculateLinePointsWithCircles2(
    baseLineInAngledStartPoint,
    MidPoint1
);
const midtoendpointLinePoints = calculateLinePointsWithCircles2(
    baseLineInAngledEndPoint,
    MidPoint1
);

const angle = calculateAngleInDegrees(BaseLineStartPoint, MidPoint2)
    console.log("angle" + angle)

    let drawAll = false;
    const sendToPoints = [];
    if (counter === 1 || drawAll) {
        sendToPoints.push(
            ...BaseLinePoints,
            ...calculateLabel(BaseLineStartPoint, "a", "left-down"),
            ...calculateLabel(BaseLineEndPoint, "b", "right-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 2 || drawAll) {
        sendToPoints.push(
            ...perpendicularPoints,
            ...calculateLabel(perpendicularEndPoint, "c", "left-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 3 || drawAll) {
        sendToPoints.push(
            ...angledLinePoints,
            ...calculateLabel(angledEndPointUp, "d", "down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 4 || drawAll) {
        sendToPoints.push(
            ...baseLineInAngledPoints,
            ...calculateLabel(baseLineInAngledEndPoint, "e", "down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 5 || drawAll) {
        sendToPoints.push(
            ...HeightlinePoints,
            ...calculateLabel(HeightlineEndPoint, "f", "left-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 6 || drawAll) {
        sendToPoints.push(
            ...NewHeightlinePoints,
            ...calculateLabel(NewHeightlineEndPoint, "g", "right-down"),
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 7 || drawAll) {
        sendToPoints.push(
            ...horizontalLinePoints,
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 8 || drawAll) {
        sendToPoints.push(
            ...calculateLabel(MidPoint1, "p", "down"),
            ...calculateLabel(MidPoint2, "q", "left-up"),
            ...verticalLinePoints,
            ...darkPencil
        );
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 9 || drawAll) {
        const allDotPoints1 = drawPoints(SecoundHeightlinePoints, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1, allDotPoints1.length);

        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "left")); // Place label above the dot
        });
        if (finalDrawing) {
            drawAll = true;
        }

    }

    if (counter === 10 || drawAll) {
        const allDotPoints1 = drawPoints(starttomidpointLinePoints, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1, allDotPoints1.length);

        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "down")); // Place label above the dot
        });
        if (finalDrawing) {
            drawAll = true;
        }

    }

    
    if (counter === 11 || drawAll) {
        // Retrieve dots from the newPerpendicularLinePoints
        const allDotPoints1 = drawPoints(
            SecoundHeightlinePoints, // Points on the new perpendicular line
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );
        const newPerpendicularDots = allDotPoints1.slice(1, allDotPoints1.length);


        // Use a for loop to connect each dot to the PerpendicularLineEndPoint
        for (const dot of newPerpendicularDots) {
            // Calculate the line points for each dot to PerpendicularLineEndPoint
            const linePoints = calculateLinePointsWithCircles(dot, MidPoint2,lightPencil,lightPencil);
            sendToPoints.push(
                ...linePoints,
                ...lightPencil,
            ); // Push the calculated points to sendToPoints
        }
        // Set the step description
        if (finalDrawing) {
            drawAll = true;
        }
    }

    if (counter === 12 || drawAll) {
        // Retrieve the dots drawn from the base line to the midpoint
        const allDotPoints1 = drawPoints(
            calculateLinePointsWithCircles2(BaseLineStartPoint, MidPoint1), // Line points
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );
        const baseToMidPoints = allDotPoints1.slice(1, allDotPoints1.length);


        // Loop through each dot to draw perpendicular lines
        for (const dot of baseToMidPoints) {
            // Calculate the perpendicular line's start and end points
            const perpendicularStartPoint = dot;
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height }; // Move upwards by the height

            // Get the points for the perpendicular line and add to sendToPoints
            const perpendicularLinePoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint,lightPencil);
            sendToPoints.push(...perpendicularLinePoints,
                ...lightPencil
            );
        }

        // Add styling to the drawn points
        sendToPoints.push(...lightPencil);
        if (finalDrawing) {
            drawAll = true;
        }

    }
    if (counter === 13 || drawAll) {
        // Step 1: Draw dots and label on `secondnewaperpendicularalLinePoints`
        const allDotPoints1 = drawPoints(SecoundNewHeightlinePoints, 30, sendToPoints);
        const dotPoints1 = allDotPoints1.slice(1); // Skip the first point
        dotPoints1.forEach((dot, index) => {
            const label = `${index + 1}`;
            sendToPoints.push(...calculateLabel(dot, label, "right"));
        });
    
        // Step 2: Draw dots and label on `midpointtoendpointbaseLinePoints`
        const allDotPoints2 = drawPoints(midtoendpointLinePoints, 30, sendToPoints);
        const dotPoints2 = allDotPoints2.slice(1);
        dotPoints2.forEach((dot, index) => {
            const label = `${index + 1}`;
            sendToPoints.push(...calculateLabel(dot, label, "down"));
        });
    
        // Step 3: Connect dots from `secondnewaperpendicularalLinePoints` to `PerpendicularLineEndPoint`
        const nextNewPerpendicularDots = drawPoints(SecoundNewHeightlinePoints, 30, sendToPoints).slice(1);
        nextNewPerpendicularDots.forEach(dot => {
            const linePoints = calculateLinePointsWithCircles(dot, MidPoint2, lightPencil);
            sendToPoints.push(...linePoints, ...lightPencil);
        });
    
        // Step 4: Draw vertical lines from `BaseLineEndPoint` to `MidPoint`
        const baseToMidPoints = drawPoints(
            calculateLinePointsWithCircles2(baseLineInAngledEndPoint, MidPoint1),
            30,
            sendToPoints
        ).slice(1);
        baseToMidPoints.forEach(dot => {
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height };
            const perpendicularLinePoints = calculateLinePointsWithCircles(dot, perpendicularEndPoint, lightPencil);
            sendToPoints.push(...perpendicularLinePoints, ...lightPencil);
        });
        if (finalDrawing) {
            drawAll = true;
        }
    }
    
    if (counter === 14 || drawAll) {
        sendToPoints.push(
            ...getParabolaPoints(SecoundHeightlinePoints, MidPoint2, starttomidpointLinePoints, BaseLineStartPoint),
            ...darkPencil);

        const parabolaPointsDown = getParabolaPoints(SecoundNewHeightlinePoints, MidPoint2, midtoendpointLinePoints, baseLineInAngledEndPoint);
      
        sendToPoints.push(
            ...parabolaPointsDown.reverse(),
            ...darkPencil);
        if (finalDrawing) {
            drawAll = true;
        }
    }    
    const steps = ParabolaByPARALLELOGRAMMethodSteps(values);
    const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];
    return {points:sendToPoints, step}
}

// ------------------------------------------

// ..................................................
export function ParabolaBysecoundMethodSteps(values) {
    const {Base,
        Height ,
        angleInDegrees} = values;
    return {
        1: defineSteps(`Draw the base line `,
            "Label the start point as 'a'",
            "Label the endpoint as 'b'",
        ),
        2: defineSteps(
            "Draw a Perpendicular Line: From the starting point 'a'",
            " draw a vertical line named ac. This line should be perpendicular to the horizontal axis.",
        ),
        3: defineSteps(
            `Draw an Inclined Line: From the starting point 'a' of given Angle ${angleInDegrees}`,
            " draw an inclined line at a given angle, naming it ad.",
        ),
        4: defineSteps(
            `Locate a Point on the Inclined Line: Using the given length ${Base} `,
            "mark a point e on the inclined line ad, at the specified distance from point 'a'",
        ),
        5: defineSteps(
            `Locate a Point on the Vertical Line: Using the given height ${Height}`,
            "mark a point f on the vertical line ac, at the specified distance from point 'a'",
        ),
        6: defineSteps(
            "Draw a Parallel Line: From point e",
            "draw a horizontal line named eg, parallel to the vertical line ac, using the given height.",
        ),
        7: defineSteps(
            "Connect Two Points: Join points f and g with a straight line.",
        ),
        8: defineSteps(
            "Find Midpoints and Connect Them:",
            "Find the midpoint of the line AE and name it p.",
            "Find the midpoint of the line FG and name it q.",
            "Join points p and q with a straight line.",
        ),
        9: defineSteps(
            "Mark Equal Distances on Line af: Divide the line af into four equal segments",
             "marking the points as 1, 2, 3, and 4, respectively.",
        ),
        10: defineSteps(
            "Mark Equal Distances on Line ap: Similarly, divide the line ap into four equal segments",
            "marking the points as 1, 2, 3, and 4, respectively.",
        ),
        11: defineSteps(
            "Connect Points on af to q: Draw straight lines from points 1, 2, 3, and 4 on af to point q.",
        ),
        12: defineSteps(
            "Draw Parallel Lines from af Points to fq: From points 1, 2, 3, and 4 on af",
            "draw lines parallel to af until they intersect the line fq.",
        ),
        13: defineSteps(
            "Repeat on the Other Side: Mirror the entire structure created on the opposite side of the vertical line ac",
            "maintaining symmetry.",
        ),
        14: defineSteps(
            "Join Intersecting Points of the Same Number:",
            "Connect all corresponding intersecting points of the same number (e.g., 1 to 1, 2 to 2, and so on) with straight lines.",
        ),
        15: defineSteps(
            "now on the other side ",
            "Join Intersecting Points of the Same Number:",
            "Connect all corresponding intersecting points of the same number (e.g., 1 to 1, 2 to 2, and so on) with straight lines.",
        ),
    };
}

export function ParabolaBySecoundMethod(payload) {
    const { counter } = payload;
    const startPoint = { x: 50, y: 400 };
    const Base = 200;
    const Height = 150;
    const angleInDegrees = 30;
    let values ={
        Base,
        Height ,
        angleInDegrees
   }
       const steps = ParabolaBysecoundMethodSteps(values);
    // Calculate XY axis line points
    const BaseLineStartPoint = { x: 150, y: startPoint.y };
    const BaseLineEndPoint = { x: BaseLineStartPoint.x + 500, y: startPoint.y };
    const BaseLinePoints = calculateLinePointsWithCircles(BaseLineStartPoint, BaseLineEndPoint);

    const perpendicularStartPoint = BaseLineStartPoint;
    const perpendicularEndPoint = { x: perpendicularStartPoint.x, y: perpendicularStartPoint.y - 300 };
    const perpendicularPoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint);

    // Use the end of the vertical line as the start of the angled line
    const angledStartPointUp = BaseLineStartPoint;
    const angledEndPointUp = calculateAngledLinePoints(

    angledStartPointUp,
    angleInDegrees,
    500
  );
  //     // Calculate points for the angled line
  const angledLinePoints = calculateLinePointsWithCircles(angledStartPointUp, angledEndPointUp);
  
  const baseLineInAngledStartPoint = BaseLineStartPoint;
  const baseLineInAngledEndPoint =calculateAngledLinePoints(

    BaseLineStartPoint,
    angleInDegrees,
    Base
  );
  const baseLineInAngledPoints = calculateLinePointsWithCircles(baseLineInAngledStartPoint, baseLineInAngledEndPoint);
  
  const HeightlineStartPoint =BaseLineStartPoint;
  const HeightlineEndPoint = { x: HeightlineStartPoint.x, y: HeightlineStartPoint.y - Height };
  const HeightlinePoints = calculateLinePointsWithCircles(HeightlineStartPoint, HeightlineEndPoint);
  
  const NewHeightlineStartPoint = baseLineInAngledEndPoint;
  const NewHeightlineEndPoint = { x: NewHeightlineStartPoint.x, y: NewHeightlineStartPoint.y - Height };
  const NewHeightlinePoints = calculateLinePointsWithCircles(NewHeightlineStartPoint, NewHeightlineEndPoint);

  const horizontalLinePoints = calculateLinePointsWithCircles(HeightlineEndPoint, NewHeightlineEndPoint);


  const MidPoint1 = {
    x: (baseLineInAngledStartPoint.x + baseLineInAngledEndPoint.x) / 2,
    y: (baseLineInAngledStartPoint.y + baseLineInAngledEndPoint.y) /2,
};

const MidPoint2 = {
    x: (HeightlineEndPoint.x + NewHeightlineEndPoint.x) / 2,
    y: (HeightlineEndPoint.y + NewHeightlineEndPoint.y)/2,
};

const verticalLinePoints = calculateLinePointsWithCircles(MidPoint1,MidPoint2 );

const starttomidpointLinePoints = calculateLinePointsWithCircles(
    baseLineInAngledStartPoint,
    MidPoint1
);
const midtoendpointLinePoints = calculateLinePointsWithCircles(
    baseLineInAngledEndPoint,
    MidPoint1
);

const angle = calculateAngleInDegrees(BaseLineStartPoint, MidPoint2)
    console.log("angle" + angle)
    const sendToPoints = [];
    let step = ""; // Variable to hold the step description
    if (counter === 1) {
        sendToPoints.push(
            ...BaseLinePoints,
            ...calculateLabel(BaseLineStartPoint, "a", "left-down"),
            ...calculateLabel(BaseLineEndPoint, "b", "right-down"),
            ...darkPencil
        );
        step = steps[1];
    }
    if (counter === 2) {
        sendToPoints.push(
            ...perpendicularPoints,
            ...calculateLabel(perpendicularEndPoint, "c", "left-down"),
            ...darkPencil
        );
        step = steps[2];
    }
    if (counter === 3) {
        sendToPoints.push(
            ...angledLinePoints,
            ...calculateLabel(angledEndPointUp, "d", "down"),
            ...darkPencil
        );
        step = steps[3];
    }
    if (counter === 4) {
        sendToPoints.push(
            ...baseLineInAngledPoints,
            ...calculateLabel(baseLineInAngledEndPoint, "e", "down"),
            ...darkPencil
        );
        step = steps[4];
    }

    if (counter === 5) {
        sendToPoints.push(
            ...HeightlinePoints,
            ...calculateLabel(HeightlineEndPoint, "f", "left-down"),
            ...darkPencil
        );
        step = steps[5];
    }
    if (counter === 6) {
        sendToPoints.push(
            ...NewHeightlinePoints,
            ...calculateLabel(NewHeightlineEndPoint, "g", "right-down"),
            ...darkPencil
        );
        step = steps[6];
    }

    if (counter === 7) {
        sendToPoints.push(
            ...horizontalLinePoints,
            ...darkPencil
        );
        step = steps[7];
    }

    if (counter === 8) {
        sendToPoints.push(
            ...calculateLabel(MidPoint1, "p", "right-down"),
            ...calculateLabel(MidPoint2, "q", "left-up"),
            ...verticalLinePoints,
            ...darkPencil
        );
        step = steps[8];
    }

    if (counter === 9) {
        const dotPoints1 = drawPoints(HeightlinePoints, 30, sendToPoints);
        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "left")); // Place label above the dot
        });

        step = steps[9];
    }

    if (counter === 10) {
        const dotPoints1 = drawPoints(starttomidpointLinePoints, 30, sendToPoints);
        sendToPoints.push(...lightPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "down")); // Place label above the dot
        });

        step = steps[10];
    }

    
    if (counter === 11) {
        // Retrieve dots from the newPerpendicularLinePoints
        const newPerpendicularDots = drawPoints(
            HeightlinePoints, // Points on the new perpendicular line
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );

        // Use a for loop to connect each dot to the PerpendicularLineEndPoint
        for (const dot of newPerpendicularDots) {
            // Calculate the line points for each dot to PerpendicularLineEndPoint
            const linePoints = calculateLinePointsWithCircles(dot, MidPoint2);
            sendToPoints.push(
                ...linePoints,
                ...lightPencil,
            ); // Push the calculated points to sendToPoints
        }
        // Set the step description
        step = steps[11];
    }

    if (counter === 12) {
        // Retrieve the dots drawn from the base line to the midpoint
        const baseToMidPoints = drawPoints(
            calculateLinePointsWithCircles(BaseLineStartPoint, MidPoint1), // Line points
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );

        // Loop through each dot to draw perpendicular lines
        for (const dot of baseToMidPoints) {
            // Calculate the perpendicular line's start and end points
            const perpendicularStartPoint = dot;
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height }; // Move upwards by the height

            // Get the points for the perpendicular line and add to sendToPoints
            const perpendicularLinePoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint);
            sendToPoints.push(...perpendicularLinePoints,
                ...lightPencil
            );
        }

        // Add styling to the drawn points
        sendToPoints.push(...lightPencil);

        // Set the step description for this operation
        step = steps[12];
    }
    if (counter === 13) {
        const dotPoints1 = drawPoints(NewHeightlinePoints, 30, sendToPoints);
        // sendToPoints.push(...darkPencil);

        // Add numbering to each dot
        dotPoints1.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "right")); // Place label above the dot
        });

        const dotPoints2 = drawPoints(midtoendpointLinePoints, 30, sendToPoints);
        // sendToPoints.push(...darkPencil);

        // Add numbering to each dot
        dotPoints2.forEach((dot, index) => {
            // Label each dot with a number (index + 1)
            const label = (index + 1).toString(); // Convert index to string for the label
            sendToPoints.push(...calculateLabel(dot, label, "down")); // Place label above the dot
        });

        // Retrieve dots from the newPerpendicularLinePoints
        const newPerpendicularDots = drawPoints(
            NewHeightlinePoints, // Points on the new perpendicular line
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );

        // Use a for loop to connect each dot to the PerpendicularLineEndPoint
        for (const dot of newPerpendicularDots) {
            // Calculate the line points for each dot to PerpendicularLineEndPoint
            const linePoints = calculateLinePointsWithCircles(dot, MidPoint2);
            sendToPoints.push(
                ...linePoints,
                // ...darkPencil,
            ); // Push the calculated points to sendToPoints
        }

         // Retrieve the dots drawn from the base line to the midpoint
         const MidToEndPoints = drawPoints(
            calculateLinePointsWithCircles(baseLineInAngledEndPoint, MidPoint1), // Line points
            30, // Interval for drawing dots
            sendToPoints // Existing points array
        );

        // Loop through each dot to draw perpendicular lines
        for (const dot of MidToEndPoints) {
            // Calculate the perpendicular line's start and end points
            const perpendicularStartPoint = dot;
            const perpendicularEndPoint = { x: dot.x, y: dot.y - Height }; // Move upwards by the height

            // Get the points for the perpendicular line and add to sendToPoints
            const perpendicularLinePoints = calculateLinePointsWithCircles(perpendicularStartPoint, perpendicularEndPoint);
            sendToPoints.push(...perpendicularLinePoints,
                ...lightPencil
            );
        }

        // Add styling to the drawn points
        sendToPoints.push(...lightPencil);



        step = steps[13];
    }
    
    if (counter === 14) {
        console.log("HeightlinePoints: ", HeightlinePoints);
        console.log("starttomidpointLinePoints: ", starttomidpointLinePoints);
        // sendToPoints.push(
        //     ...getParabolaPoints(HeightlinePoints, MidPoint2, starttomidpointLinePoints, BaseLineStartPoint),
        //     ...darkPencil);

        // const parabolaPointsDown = getParabolaPoints(NewHeightlinePoints, MidPoint2, midtoendpointLinePoints, baseLineInAngledEndPoint);
      
        // sendToPoints.push(
        //     ...parabolaPointsDown.reverse(),
        //     ...darkPencil);
        step = steps[14];
    }    
    if (counter === 15) {
        
        step = steps[15];
    }
 // Generate steps dynamically
    return {points:sendToPoints, step}
}