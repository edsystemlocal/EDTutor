import { calculateAngledLinePoints, calculateAngleInDegrees, calculateArcPoints, calculateDashLinePoints, calculateDistance, calculateHeight, calculateHypotenuse, calculateHypotenuseWithAngle, calculateLabel, calculateLinePointsWithCircles, defineSteps, drawInclinedArrow, drawParallelArrow, drawPerpendicularArrow, drawPointWithArrow, drawQuarterCircle, drawXYaxis, getCirclePoints } from "@/utils/functionHelper";
import { darkPencil, lightPencil, startPoint, superDarkPencil } from "../globalVariable";
import { anglepoint } from "../Scale/ScaleMethod";



export function getLineProblemSteps(values) {
  let { counter, firstPointAboveHPLength, firstpointfrontOfVPLength, LineLength, InclinationToVP, InclinationToHP, isPositive, drawingType } = values;

  const isAboveHPPositive = isPositive(firstPointAboveHPLength);
  const isFrontVPPositive = isPositive(firstpointfrontOfVPLength);
  LineLength = LineLength / 2;
  firstPointAboveHPLength = firstPointAboveHPLength / 2;
  firstpointfrontOfVPLength = firstpointfrontOfVPLength / 2;
  const steps = {
    1: defineSteps(`Draw the XY axis with a total line length of ${LineLength} mm`),
    2: isAboveHPPositive && isFrontVPPositive
      ? defineSteps(
        `Draw a ${firstPointAboveHPLength} mm vertical line from the XY axis to the first point above HP and label it as a and a'`,
        `Draw a ${firstpointfrontOfVPLength} mm vertical line from the XY axis to the first point in front of VP and label it as a`,
      )
      : isAboveHPPositive
        ? defineSteps(`Draw a ${firstPointAboveHPLength} mm vertical line from the XY axis to the first point above HP and label it as a and a'`)
        : isFrontVPPositive
          ? defineSteps(`Draw a ${firstpointfrontOfVPLength} mm vertical line from the XY axis to the first point in front of VP and label it as a`)
          : defineSteps(""),
    3:
      drawingType === "parallelToVPAndInclinationToHP" || drawingType === "parallelToVP"
        ? defineSteps(`Draw an inclined line from the first point above HP with an angle of ${InclinationToHP}° and line length ${LineLength} mm. Mark it as b'.`)
        : drawingType === "parallelToHPAndInclinationToVP" || drawingType === "parallelToHP"
          ? defineSteps(`Draw an inclined line from the first point front VP with an angle of ${360 - InclinationToVP}° with line length ${LineLength} mm. Mark it as b.`)
          : drawingType === "perpendicularToVP"
            ? defineSteps(`Draw a ${LineLength} mm vertical line perpendicular to VP and label the second point as b.`)
            : drawingType === "perpendicularToHP"
              ? defineSteps(`Draw a ${LineLength} mm vertical line perpendicular to HP and label the second point as b'.`)
              : drawingType === "parallelToBoth"
                ? defineSteps(`Draw a ${LineLength} mm horizontal line parallel to HP and label the second point as b'.`)
                : defineSteps(""),


    4:
      drawingType === "parallelToVPAndInclinationToHP"
        ? defineSteps(`Draw a vertical line from the b' till parallel to first point of VP and label the point as b`)
        : drawingType === "parallelToHPAndInclinationToVP"
          ? defineSteps(`Draw a vertical line from the b till parallel to first point of HP and label the point as b'`,)
          : drawingType === "parallelToBoth"
          ? defineSteps(`Draw a ${LineLength} mm horizontal line parallel to VP and label the second point as b.`)
          : defineSteps(""),
    5:
      drawingType === "parallelToVPAndInclinationToHP"
        ? defineSteps(
          `Draw parallel line from a to b. This represents top view of line.`
        )
        : drawingType === "parallelToHPAndInclinationToVP"
          ? defineSteps(`Draw parallel line from the a' to b'. This represents front view of line.`)
          : defineSteps(""),
    6:
      drawingType === "parallelToVPAndInclinationToHP"
        ? defineSteps(`Calculate θ and write value at right corner`)
        : drawingType === "parallelToHPAndInclinationToVP"
          ? defineSteps(`Calculate Φ and write value at right below`)
          : defineSteps(""),
  };

  return steps;
}

function getCounter2Points(xyAxisLineStartPoint, firstPointAboveHP, firstPointFrontVP, firstPointAboveHPLength, firstpointfrontOfVPLength) {
  let sendToPoints = [];

  sendToPoints.push(
    ...drawPointWithArrow(xyAxisLineStartPoint, firstPointAboveHP, "left", "a'", firstPointAboveHPLength, lightPencil)
  );

  sendToPoints.push(
    ...drawPointWithArrow(xyAxisLineStartPoint, firstPointFrontVP, "left", "a", firstpointfrontOfVPLength, lightPencil)
  );

  return sendToPoints;
}

function getParameters(inputs, zoom) {
  let updatedInputs = [];
  let LineLength = Number(inputs.LineLength) || 0;
  let firstPointAboveHPLength = Number(inputs.firstPointAboveHPLength) || 0;
  let firstpointfrontOfVPLength = Number(inputs.firstpointfrontOfVPLength) || 0;
  let secondpointAboveHPLength = Number(inputs.secondpointAboveHPLength) || 0;
  let secondpointFrontOfVPLength = Number(inputs.secondpointFrontOfVPLength) || 0;
  let InclinationToVP = Number(inputs.InclinationToVP) || -1;
  let InclinationToHP = Number(inputs.InclinationToHP) || -1;
  let topViewLength = Number(inputs.topViewLength) || 0;
  let frontViewLength = Number(inputs.frontViewLength) || 0;
  let MidpointHPLength = Number(inputs.MidpointHPLength) || 0;
  let MidpointVPLength = Number(inputs.MidpointVPLength) || 0;

  let frontViewAngle = Number(inputs.FrontviewAngle) || 0;
  let topViewAngle = Number(inputs.TopviewAngle) || 0;
  console.log("MidpointHPLength: ", MidpointHPLength);


  LineLength = isPositive(LineLength) ? LineLength * zoom : -1;
  firstPointAboveHPLength = isPositive(firstPointAboveHPLength) ? firstPointAboveHPLength * zoom : -1;
  firstpointfrontOfVPLength = isPositive(firstpointfrontOfVPLength) ? firstpointfrontOfVPLength * zoom : -1;
  secondpointAboveHPLength = isRealPositive(secondpointAboveHPLength) ? secondpointAboveHPLength * zoom : -1;
  secondpointFrontOfVPLength = isRealPositive(secondpointFrontOfVPLength) ? secondpointFrontOfVPLength * zoom : -1;
  MidpointHPLength = isRealPositive(MidpointHPLength) ? MidpointHPLength * zoom : -1;
  MidpointVPLength = isRealPositive(MidpointVPLength) ? MidpointVPLength * zoom : -1;
  topViewLength = isRealPositive(topViewLength) ? topViewLength * zoom : -1;
  frontViewLength = isRealPositive(frontViewLength) ? frontViewLength * zoom : -1;
  InclinationToHP = isPositive(InclinationToHP) ? InclinationToHP : -1;
  frontViewAngle = isRealPositive(frontViewAngle) ? frontViewAngle : -1;
  topViewAngle = isRealPositive(topViewAngle) ? 360 - topViewAngle : -1;
  InclinationToVP = isPositive(InclinationToVP) ? 360 - InclinationToVP : -1;

  updatedInputs = {
    LineLength: LineLength,
    firstPointAboveHPLength: firstPointAboveHPLength,
    firstpointfrontOfVPLength: firstpointfrontOfVPLength,
    secondpointAboveHPLength: secondpointAboveHPLength,
    secondpointFrontOfVPLength: secondpointFrontOfVPLength,
    topViewLength: topViewLength,
    frontViewLength: frontViewLength,
    InclinationToHP: InclinationToHP,
    frontViewAngle: frontViewAngle,
    topViewAngle: topViewAngle,
    InclinationToVP: InclinationToVP,
    MidpointHPLength: MidpointHPLength,
    MidpointVPLength: MidpointVPLength
  }

  console.log("updatedInputs", updatedInputs);
  return updatedInputs;

}


function getSecondPointAboveHP(drawingType, xyAxisLineStartPoint, firstPointAboveHP, firstPointFrontVP,
  secondpointFrontOfVPLength, secondpointAboveHPLength, InclinationToHP, InclinationToVP, LineLength, secondPointAboveHPPosition,secondPointFrontOfVPPosition) {
  let secondPointFrontVP = null;
  let secondPointAboveHP = null;

  if (drawingType === "parallelToHPAndInclinationToVP") {
    
    console.log("here secondpointFrontOfVPLength=", secondpointFrontOfVPLength);
    if (isPositive(secondpointFrontOfVPLength)) {
      console.log("here secondpointFrontOfVPLength=", secondpointFrontOfVPLength);
      
      if(secondPointFrontOfVPPosition==="behind" || secondPointFrontOfVPPosition==="Behind") {
        let height = secondpointFrontOfVPLength - (startPoint.y - firstPointFrontVP.y );
        let base = calculateHeight(LineLength, height);
        secondPointFrontVP = { x: firstPointAboveHP.x + base, y: startPoint.y - secondpointFrontOfVPLength };
        console.log("height: ", height, ",base: ", base, ",pointInclinedToVPTemp: ", secondPointFrontVP, ", firstPointFrontVP.y - startPoint.y = ", firstPointFrontVP.y - startPoint.y, ", secondpointFrontOfVPLength: ", secondpointFrontOfVPLength);
      
      } else {
        let height = secondpointFrontOfVPLength - Math.abs((firstPointFrontVP.y - startPoint.y));
        let base = calculateHeight(LineLength, height);
        secondPointFrontVP = { x: firstPointAboveHP.x + base, y: startPoint.y + secondpointFrontOfVPLength };
        console.log("height: ", height, ",base: ", base, ",pointInclinedToVPTemp: ", secondPointFrontVP, ", firstPointFrontVP.y - startPoint.y = ", firstPointFrontVP.y - startPoint.y, ", secondpointFrontOfVPLength: ", secondpointFrontOfVPLength);
      }
      secondPointAboveHP = { x: secondPointFrontVP.x, y: firstPointAboveHP.y };

      // secondPointFrontVP = { x: firstPointAboveHP.x + LineLength, y: xyAxisLineStartPoint.y + secondpointFrontOfVPLength };
      // secondPointAboveHP = { x: secondPointFrontVP.x, y: firstPointAboveHP.y };
    } else if (isPositive(InclinationToVP)) {
      console.log("here it is");
      //secondPointFrontVP = calculateAngledLinePoints(firstPointFrontVP, InclinationToVP, calculateHypotenuseWithAngle(secondPointAboveHP.x - firstPointAboveHP.x, InclinationToVP) );
      if(secondPointFrontOfVPPosition==="behind" || secondPointFrontOfVPPosition==="Behind") {
        InclinationToVP = 360 - InclinationToVP;
      }
      secondPointFrontVP = calculateAngledLinePoints(firstPointFrontVP, InclinationToVP, LineLength);
      secondPointAboveHP = { x: secondPointFrontVP.x, y: firstPointAboveHP.y };
    }
    console.log("calculateHypotenuseWithAngle(LineLength, InclinationToHP): ", calculateHypotenuseWithAngle(LineLength, InclinationToHP));
    console.log("secondPointAboveHP: ", secondPointAboveHP);
    console.log("secondPointFrontVP: ", secondPointFrontVP);
  }

  if (drawingType === "parallelToVPAndInclinationToHP") {
    

    console.log("InclinationToHP: ", InclinationToHP);
    if (isPositive(secondpointAboveHPLength)) {

      if(secondPointFrontOfVPPosition==="below" || secondPointFrontOfVPPosition==="Below") {
        let height = secondpointAboveHPLength - (firstPointAboveHP.y - startPoint.y);
        let base = calculateHeight(LineLength, height);
        secondPointAboveHP = { x: firstPointAboveHP.x + base, y: startPoint.y + secondpointAboveHPLength };        
        console.log("height: ", height, ",base: ", base, ",pointInclinedToVPTemp: ", secondPointFrontVP, ", firstPointFrontVP.y - startPoint.y = ", firstPointFrontVP.y - startPoint.y, ", secondpointFrontOfVPLength: ", secondpointFrontOfVPLength);
      
      } else {
        let height = secondpointAboveHPLength - (startPoint.y - firstPointAboveHP.y);
        let base = calculateHeight(LineLength, height);
        secondPointAboveHP = { x: firstPointAboveHP.x + base, y: startPoint.y - secondpointAboveHPLength };
        console.log("height: ", height, ",base: ", base, ",pointInclinedToVPTemp: ", secondPointFrontVP, ", firstPointFrontVP.y - startPoint.y = ", firstPointFrontVP.y - startPoint.y, ", secondpointFrontOfVPLength: ", secondpointFrontOfVPLength);
      }
      
      secondPointFrontVP = { x: secondPointAboveHP.x, y: firstPointFrontVP.y };
      console.log("y: ", startPoint.y - firstPointAboveHP.y);
      // secondPointAboveHP = { x: firstPointFrontVP.x + LineLength, y: xyAxisLineStartPoint.y - secondpointAboveHPLength };
      // secondPointFrontVP = { x: secondPointAboveHP, y: firstPointFrontVP.y };
    } else if (isPositive(InclinationToHP) || isPositive(Number(InclinationToHP))) {
      //secondPointAboveHP = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, calculateHypotenuseWithAngle(secondPointFrontVP.x - firstPointFrontVP.x, InclinationToHP));

      if(secondPointAboveHPPosition==="below" || secondPointAboveHPPosition==="Below") {
        InclinationToHP = 360 - InclinationToHP;
      }
      secondPointAboveHP = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, LineLength);
      secondPointFrontVP = { x: secondPointAboveHP.x, y: firstPointFrontVP.y };
    }
    console.log("calculateHypotenuseWithAngle(LineLength, InclinationToHP): ", calculateHypotenuseWithAngle(LineLength, InclinationToHP));
    console.log("secondPointAboveHP: ", secondPointAboveHP);
  }

  if (drawingType === "parallelToBoth") {
    secondPointAboveHP = { x: firstPointAboveHP.x + LineLength, y: firstPointAboveHP.y };
    secondPointFrontVP = { x: firstPointFrontVP.x + LineLength, y: firstPointFrontVP.y };
  } else if (drawingType === "perpendicularToHP") {
    secondPointAboveHP = { x: firstPointAboveHP.x, y: firstPointAboveHP.y - LineLength };
  } else if (drawingType === "perpendicularToVP") {
    secondPointFrontVP = { x: firstPointFrontVP.x, y: firstPointFrontVP.y + LineLength };
  }

  let updatedSecondPoint = [];
  updatedSecondPoint = { secondPointAboveHP: secondPointAboveHP, secondPointFrontVP: secondPointFrontVP };
  console.log("updatedSecondPoint: ", updatedSecondPoint);
  return updatedSecondPoint;

}

function isPositive(value) {
  return value >= 0;
}

function isRealPositive(value) {
  return value > 0;
}

export function getLineProblemPoints(payload) {
  const { counter, inputs, drawingType, finalDrawing } = payload;
  // Helper function to validate if a value is greater than 0
  let zoom = 2;
  let updatedInputs = getParameters(inputs, zoom);
  let LineLength = Number(inputs["Line Length"]) * zoom || 0;
  let firstPointAboveHPLength = Number(inputs["First Point Above of HP"]) * zoom || 0;
  let secondpointAboveHPLength = Number(inputs["Second Point Above of HP"]) * zoom || -1;
  let firstpointfrontOfVPLength = Number(inputs["First Point Front of VP"]) * zoom || 0;
  let secondpointFrontOfVPLength = Number(inputs["Second Point Front of VP"]) * zoom || -1;
  let InclinationToVP = 360 - Number(inputs["Inclination To VP"]) || -1;
  //let InclinationToHP = Number(inputs["Inclination To HP"]) || -1;
  let InclinationToHP = Number(inputs["Inclination To HP"]);
  let firstPointFrontOfVPPosition = inputs["First point Position VP"];
  let firstPointAboveHPPosition = inputs["First Point Position HP "];
  let secondPointAboveHPPosition = inputs["Second point Position HP"];  
  let secondPointFrontOfVPPosition = inputs["Second point Position VP"];
  console.log("inputs: ", inputs);


  // const {
  //   LineLength, firstPointAboveHPLength, firstpointfrontOfVPLength,
  //   secondpointAboveHPLength, secondpointFrontOfVPLength, topViewLength,
  //   frontViewLength, InclinationToHP, frontViewAngle, topViewAngle, InclinationToVP, MidpointHPLength, MidpointVPLength
  // } = updatedInputs;

  let sendToPoints = [];
  let drawAll = false;
  // Proceed only if primary drawingTypes are met
  if (
    drawingType === "parallelToHPAndInclinationToVP" ||
    drawingType === "parallelToVPAndInclinationToHP" ||
    drawingType === "perpendicularToHP" ||
    drawingType === "perpendicularToVP" ||
    drawingType === "parallelToHP" ||
    drawingType === "parallelToVP" ||
    drawingType === "parallelToBoth"
  ) {
    // Calculate XY axis line points
    const xyAxisLineStartPoint = { x: startPoint.x + 100, y: startPoint.y };

    
  let firstPointAboveHP = xyAxisLineStartPoint;

  if (isPositive(firstPointAboveHPLength)) {
    //firstPointAboveHP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y - firstPointAboveHPLength };
    firstPointAboveHP = getPoint(xyAxisLineStartPoint, firstPointAboveHPLength, firstPointAboveHPPosition);
  }
  let firstPointFrontVP = xyAxisLineStartPoint;
  if (isPositive(firstpointfrontOfVPLength)) {
    //firstPointFrontVP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y + firstpointfrontOfVPLength };
    firstPointFrontVP = getPoint(xyAxisLineStartPoint, firstpointfrontOfVPLength, firstPointFrontOfVPPosition);
  }

    const { secondPointAboveHP, secondPointFrontVP } = getSecondPointAboveHP(drawingType, xyAxisLineStartPoint, firstPointAboveHP, firstPointFrontVP,
      secondpointFrontOfVPLength, secondpointAboveHPLength, InclinationToHP, InclinationToVP, LineLength, secondPointAboveHPPosition, secondPointFrontOfVPPosition);

    console.log("firstPointAboveHPLength: ", firstPointAboveHPLength);
    console.log("firstpointfrontOfVPLength: ", firstpointfrontOfVPLength);
    console.log("InclinationToVP: ", InclinationToVP);
    console.log("InclinationToHP: ", InclinationToHP, " and ", inputs["Inclination To HP"], " and ", Number(inputs["Inclination To HP"]));
    console.log("firstPointAboveHP: ", firstPointAboveHP);
    console.log("firstPointFrontVP: ", firstPointFrontVP);
    console.log("secondPointFrontVP: ", secondPointFrontVP);

    if (counter === 1 || drawAll) {
      sendToPoints.push(...drawXYaxis());
      if (finalDrawing) {
        drawAll = true;
      }
    }


    if (counter === 2 || drawAll) {
      sendToPoints.push(...getCounter2Points(xyAxisLineStartPoint, firstPointAboveHP, firstPointFrontVP, Number(inputs["First Point Above of HP"]), Number(inputs["First Point Front of VP"])));
      if (drawingType === "perpendicularToVP") {
        sendToPoints.push(...calculateLabel(firstPointAboveHP, "b'", "right-up"));
      } else if (drawingType === "perpendicularToHP") {
        sendToPoints.push(...calculateLabel(firstPointFrontVP, "b", "right-down"));
      }
      if (finalDrawing) {
        drawAll = true;
      }
    }


    if (counter === 3 || drawAll) {
      
      let inclinedLinePoints = null;
      let calculatedAngle = null;
      let labelparallelLinePoints = null;
      if (drawingType === "parallelToVPAndInclinationToHP" || drawingType === "perpendicularToVP") {
        if (drawingType === "parallelToVPAndInclinationToHP") {
          calculatedAngle = calculateAngleInDegrees(firstPointAboveHP, secondPointAboveHP);
          if (Math.abs(calculatedAngle) > 0) {
            sendToPoints.push(...drawTheta(firstPointAboveHP, calculatedAngle, secondPointAboveHP));
          }
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP, darkPencil);
          labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right-up");
          sendToPoints.push(...drawInclinedArrow({x: firstPointAboveHP.x - 10, y: firstPointAboveHP.y}, {x: secondPointAboveHP.x - 10, y: secondPointAboveHP.y}, "up",  LineLength / zoom));     
        } else if (drawingType === "perpendicularToVP") {
          sendToPoints.push(...lightPencil, ...drawPerpendicularArrow(firstPointFrontVP, secondPointFrontVP, "left", (Math.abs(secondPointFrontVP.y - firstPointFrontVP.y)) / zoom));
          labelparallelLinePoints = calculateLabel(secondPointFrontVP, "b", "left-down");
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, darkPencil,);
          
        }
        

      } else if (drawingType === "parallelToHPAndInclinationToVP" || drawingType === "perpendicularToHP") {
        if (drawingType === "parallelToHPAndInclinationToVP") {
          calculatedAngle = calculateAngleInDegrees(firstPointFrontVP, secondPointFrontVP);
          if (calculatedAngle > 0) {
            sendToPoints.push(...drawFi(firstPointFrontVP, calculatedAngle, secondPointFrontVP));
          }
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, darkPencil);
          labelparallelLinePoints = calculateLabel(secondPointFrontVP, "b", "right-down");
          sendToPoints.push(...drawInclinedArrow({x: firstPointFrontVP.x - 10, y: firstPointFrontVP.y}, {x: secondPointFrontVP.x - 10, y: secondPointFrontVP.y}, "down",  LineLength / zoom));     
        
          //sendToPoints.push(...drawParallelArrow(firstPointFrontVP, secondPointFrontVP, "down", LineLength / zoom));
        } else if (drawingType === "perpendicularToHP") {
          sendToPoints.push(...lightPencil, ...drawPerpendicularArrow(firstPointAboveHP, secondPointAboveHP, "left", (Math.abs(firstPointAboveHP.y - secondPointAboveHP.y)) / zoom));
          labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "left-up");
          inclinedLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP, darkPencil,);
        }      

      } else if (drawingType === "parallelToBoth") {
        sendToPoints.push(...drawParallelArrow(firstPointAboveHP, secondPointAboveHP, "up", (Math.abs(firstPointAboveHP.x - secondPointAboveHP.x)) / zoom));
        inclinedLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP, darkPencil);
        labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
      }


      sendToPoints.push(
        ...inclinedLinePoints,
        ...labelparallelLinePoints
      );
      if (finalDrawing) {
        drawAll = true;
      }
    }


    if (
      drawingType === "parallelToVPAndInclinationToHP" ||
      drawingType === "parallelToHPAndInclinationToVP" ||
      drawingType === "parallelToBoth"
    ) {
      if (counter === 4 || drawAll) {

        let verticalLinePoints = null;
        let labelverticalLinePoints = "";
        if (drawingType === "parallelToVPAndInclinationToHP") {
          verticalLinePoints = calculateLinePointsWithCircles(secondPointFrontVP, secondPointAboveHP, lightPencil);
          labelverticalLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
        } else if (drawingType === "parallelToHPAndInclinationToVP") {
          console.log("error secondPointAboveHP: ", secondPointAboveHP);
          console.log("error secondPointFrontVP: ", secondPointFrontVP);

          verticalLinePoints = calculateLinePointsWithCircles(secondPointAboveHP, secondPointFrontVP, lightPencil);
          labelverticalLinePoints = calculateLabel(secondPointFrontVP, "b", "right");
        } else if (drawingType === "parallelToBoth") {
          sendToPoints.push(...drawParallelArrow(firstPointFrontVP, secondPointFrontVP, "down", (Math.abs(firstPointFrontVP.x - secondPointFrontVP.x)) / zoom));
          console.log("parallelToBoth firstPointFrontVP: ", firstPointFrontVP);
          console.log("parallelToBoth secondPointFrontVP: ", secondPointFrontVP);
          //parallelLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP);
          //labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
          verticalLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, darkPencil);
          sendToPoints.push(...calculateLabel(secondPointFrontVP, "b", "right"));
        }

        sendToPoints.push(
          ...verticalLinePoints
        );
        if (finalDrawing) {
          drawAll = true;
        }
      }

    }
    if (
      drawingType === "parallelToVPAndInclinationToHP" ||
      drawingType === "parallelToHPAndInclinationToVP"
    ) {
      if (counter === 5 || drawAll) {
        let parallelLinePoints;
      let labelparallelLinePoints;
        if (drawingType === "parallelToVPAndInclinationToHP") {
          sendToPoints.push(...drawParallelArrow(firstPointFrontVP, secondPointFrontVP, "down", roundUpToTwoDecimalPlaces(Math.abs(secondPointFrontVP.x - firstPointFrontVP.x)) / zoom));
          labelparallelLinePoints = calculateLabel(secondPointFrontVP, "b", "right");
          parallelLinePoints = calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, darkPencil);
        } else if (drawingType === "parallelToHPAndInclinationToVP") {          
          sendToPoints.push(...drawParallelArrow(firstPointAboveHP, secondPointAboveHP, "up", roundUpToTwoDecimalPlaces(Math.abs(firstPointAboveHP.x - secondPointAboveHP.x)) / zoom));
          labelparallelLinePoints = calculateLabel(secondPointAboveHP, "b'", "right");
          parallelLinePoints = calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP, darkPencil);
        }        
        sendToPoints.push(...labelparallelLinePoints, ...parallelLinePoints);
        if (finalDrawing) {
          drawAll = true;
        }
      }
    }
  }

  let values = {
    counter,
    firstPointAboveHPLength,
    firstpointfrontOfVPLength,
    LineLength,
    InclinationToVP,
    InclinationToHP,
    isPositive,
    drawingType,
  };

  const steps = getLineProblemSteps(values);
  const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];

    console.log("step: ", step);
    console.log("drawAll: ", drawAll);
    console.log("steps: ", steps);

  return { points: sendToPoints, step };
}


function itbPointParalllelToHP(frontViewLength, topViewAngle, InclinationToVP, firstPointAboveHP, LineLength, secondpointFrontOfVPLength, firstPointFrontVP, InclinationToHP) {
  let pointParalllelToHP = null;
  if (isPositive(frontViewLength)) {
    pointParalllelToHP = { x: firstPointAboveHP.x + frontViewLength, y: firstPointAboveHP.y };
  } else if (isPositive(InclinationToVP) && isPositive(LineLength)) {
    console.log("itbFrontViewLengthSecondPointAboveHP, InclinationToVP: ", InclinationToVP);
    let projectPointOfTopViewTemp = calculateAngledLinePoints(firstPointAboveHP, InclinationToVP, LineLength);
    pointParalllelToHP = { x: projectPointOfTopViewTemp.x, y: firstPointAboveHP.y };
  } else if (isPositive(secondpointFrontOfVPLength)) {
    let height = secondpointFrontOfVPLength - (firstPointFrontVP.y - startPoint.y);
    let base = calculateHeight(LineLength, height);
    let pointInclinedToVPTemp = { x: firstPointAboveHP.x + base, y: startPoint.y + secondpointFrontOfVPLength };
    console.log("height: ", height, ",base: ", base, ",pointInclinedToVPTemp: ", pointInclinedToVPTemp, ", firstPointFrontVP.y - startPoint.y = ", firstPointFrontVP.y - startPoint.y, ", secondpointFrontOfVPLength: ", secondpointFrontOfVPLength);
    pointParalllelToHP = { x: pointInclinedToVPTemp.x, y: firstPointAboveHP.y };
  }

  if (pointParalllelToHP == null) {
    let y = -1;
    let x = -1;
    let pointInclinedToHPTemp = null;
    if (isPositive(InclinationToHP) && isPositive(LineLength)) {
      pointInclinedToHPTemp = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, LineLength);
      y = pointInclinedToHPTemp.y;
    }

    console.log("pointInclinedToHPTemp");
    if (pointInclinedToHPTemp != null && isPositive(topViewAngle)) {
      let pointInclinedToTV = calculateAngledLinePoints(firstPointFrontVP, topViewAngle, pointInclinedToHPTemp.x - firstPointAboveHP.x,);
      x = pointInclinedToTV.x;
    }

    if (x != -1 && y != -1) {
      let frontViewLengthTemp = calculateDistance(firstPointAboveHP, { x, y });
      pointParalllelToHP = { x: firstPointAboveHP.x + frontViewLengthTemp, y: firstPointAboveHP.y };
    }
  }
  console.log("Exit itbFrontViewLengthSecondPointAboveHP : pointParalllelToHP: ", pointParalllelToHP);
  return pointParalllelToHP;
}

function itbPointParallelToVP(topViewLength, InclinationToHP, firstPointAboveHP, firstPointFrontVP, LineLength, secondpointAboveHPLength) {
  let pointParallelToVP = null;
  if (isPositive(topViewLength)) {
    pointParallelToVP = { x: firstPointFrontVP.x + topViewLength, y: firstPointFrontVP.y };
  } else if (isPositive(InclinationToHP) && isPositive(LineLength)) {
    let projectPointOfTopViewTemp = calculateAngledLinePoints(firstPointAboveHP, InclinationToHP, LineLength);
    pointParallelToVP = { x: projectPointOfTopViewTemp.x, y: firstPointFrontVP.y };
  } else if (isPositive(secondpointAboveHPLength)) {
    let height = secondpointAboveHPLength - (startPoint.y - firstPointAboveHP.y);
    let base = calculateHeight(LineLength, height);
    let projectPointOfTopViewTemp = { x: firstPointAboveHP.x + base, y: startPoint.y - secondpointAboveHPLength };
    pointParallelToVP = { x: projectPointOfTopViewTemp.x, y: firstPointFrontVP.y };
    console.log("height: ", height)
    console.log("y: ", startPoint.y - firstPointAboveHP.y);
  }
  console.log("Exit itbPointParallelToVP, pointParallelToVP: ", pointParallelToVP);
  return pointParallelToVP;
}

function itbPointInclinedToHP(firstPointAboveHP, LineLength, pointParallelToVP, secondpointAboveHPLength) {
  let pointInclinedToHP = null;

  if (isPositive(secondpointAboveHPLength)) {
    let height = secondpointAboveHPLength - (startPoint.y - firstPointAboveHP.y);
    let base = calculateHeight(LineLength, height);
    pointInclinedToHP = { x: firstPointAboveHP.x + base, y: startPoint.y - secondpointAboveHPLength };
  } else if (pointParallelToVP != null && isPositive(LineLength)) {
    pointInclinedToHP = { x: pointParallelToVP.x, y: firstPointAboveHP.y - calculateHeight(LineLength, pointParallelToVP.x - firstPointAboveHP.x) }
  }
  console.log("Exit itbPointInclinedToHP, pointInclinedToHP: ", pointInclinedToHP);
  return pointInclinedToHP;
}

function itbPointInclinedToVP(firstPointFrontVP, LineLength, pointParalllelToHP, secondpointFrontOfVPLength) {
  let pointInclinedToVP = null;
  if (isPositive(secondpointFrontOfVPLength)) {
    let height = secondpointFrontOfVPLength - (firstPointFrontVP.y - startPoint.y);
    let base = calculateHeight(LineLength, height);
    pointInclinedToVP = { x: firstPointFrontVP.x + base, y: startPoint.y + secondpointFrontOfVPLength };
  } else if (pointParalllelToHP != null && isPositive(LineLength)) {
    pointInclinedToVP = { x: pointParalllelToHP.x, y: firstPointFrontVP.y + calculateHeight(LineLength, pointParalllelToHP.x - firstPointFrontVP.x) }
  }

  console.log("Exit itbpointInclinedToVP, pointInclinedToVP: ", pointInclinedToVP);
  return pointInclinedToVP;
}

function itbPointInclinedToFV(firstPointAboveHP, pointInclinedToHP, pointParalllelToHP) {
  let pointInclinedToFV = null;
  if (pointParalllelToHP != null) {
    let hype = pointParalllelToHP.x - firstPointAboveHP.x;
    let height = pointParalllelToHP.y - pointInclinedToHP.y;
    let base = calculateHeight(hype, height);
    if (!isPositive(base) && (hype - height < 1)) {
      base = 0;
    }
    console.log("hype1: ", hype, ", height1: ", height);
    pointInclinedToFV = { x: firstPointAboveHP.x + base, y: pointInclinedToHP.y };
  }
  console.log("Exit itbPointInclinedToFV, pointInclinedToFV: ", pointInclinedToFV);
  return pointInclinedToFV;
}

function itbPointInclinedToTV(firstPointFrontVP, pointInclinedToVP, pointParallelToVP) {
  let pointInclinedToTV = null;
  if (pointParallelToVP != null && pointInclinedToVP != null) {
    let hype = pointParallelToVP.x - firstPointFrontVP.x;
    let height = pointInclinedToVP.y - firstPointFrontVP.y;
    let base = calculateHeight(hype, height);
    if (!isPositive(base) && (hype - height < 1)) {
      base = 0;
    }
    console.log("hype: ", hype, ", height: ", height);
    console.log("firstPointFrontVP: ", firstPointFrontVP, ", pointInclinedToVP: ", pointInclinedToVP, ", pointParallelToVP: ", pointParallelToVP, ", base: ", base);
    pointInclinedToTV = { x: firstPointFrontVP.x + base, y: pointInclinedToVP.y };
  }
  console.log("Exit itbpointInclinedToTV, pointInclinedToTV: ", pointInclinedToTV);
  return pointInclinedToTV;
}

function getPoint(pointXY, pointLength, position) {
  let firstPointAboveHPPoint = pointXY;
  if (position === "above" || position === "Above") {
    firstPointAboveHPPoint = { x: pointXY.x, y: pointXY.y - pointLength };
  } else if (position === "below" || position === "Below") {
    firstPointAboveHPPoint = { x: pointXY.x, y: pointXY.y + pointLength };
  } else if (position === "front" || position === "Front") {
    firstPointAboveHPPoint = { x: pointXY.x, y: pointXY.y + pointLength };
  } else if (position === "behind" || position === "Behind") {
    firstPointAboveHPPoint = { x: pointXY.x, y: pointXY.y - pointLength };
  }

  console.log("getPoint(), pointXY=", pointXY, ", pointLength=", pointLength, ", position=", position, ", firstPointAboveHPPoint=", firstPointAboveHPPoint)
  return firstPointAboveHPPoint;
}

export function getMidPointProblemPoints(payload, updatedInputs, xyAxisLineStartPoint) {
  const { counter, inputs, finalDrawing, drawingType } = payload;

  console.log(getMidPointProblemPoints);

  let {
    LineLength, firstPointAboveHPLength, firstpointfrontOfVPLength,
    secondpointAboveHPLength, secondpointFrontOfVPLength, topViewLength,
    frontViewLength, InclinationToHP, frontViewAngle, topViewAngle, InclinationToVP, MidpointHPLength, MidpointVPLength
  } = updatedInputs;

  let midpointAboveHP = { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint.y - MidpointHPLength };
  let midpointFrontVP = { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint.y + MidpointVPLength };

  let firstPointInclinedHP;
  let secondPointInclinedHP;
  if (isPositive(MidpointHPLength) && isRealPositive(LineLength) && isRealPositive(InclinationToHP)) {
    console.log("Getting it from midpoint");
    firstPointInclinedHP = calculateAngledLinePoints(midpointAboveHP, 180 + InclinationToHP, LineLength / 2);
    secondPointInclinedHP = calculateAngledLinePoints(midpointAboveHP, InclinationToHP, LineLength / 2);
  }

  let firstPointInclinedVP;
  let secondPointInclinedVP;
  if (isPositive(MidpointVPLength) && isRealPositive(LineLength) && isRealPositive(InclinationToVP)) {
    console.log("Getting it from midpoint VP");
    firstPointInclinedVP = calculateAngledLinePoints(midpointFrontVP, 180 + InclinationToVP, LineLength / 2);
    secondPointInclinedVP = calculateAngledLinePoints(midpointFrontVP, InclinationToVP, LineLength / 2);
  }

  let pointParallelFirstAboveHP = { x: firstPointInclinedHP.x, y: midpointFrontVP.y };
  let pointParallelSecondAboveHP = { x: secondPointInclinedHP.x, y: midpointFrontVP.y };
  let pointParallelFirstFrontVP = { x: firstPointInclinedVP.x, y: midpointAboveHP.y };
  let pointParallelSecondFrontVP = { x: secondPointInclinedVP.x, y: midpointAboveHP.y };

  let base1 = calculateHeight(midpointFrontVP.x - firstPointInclinedHP.x, midpointFrontVP.y - firstPointInclinedVP.y);
  let firstPointFrontVP = { x: midpointFrontVP.x - base1, y: firstPointInclinedVP.y };

  let base2 = calculateHeight(midpointFrontVP.x - secondPointInclinedHP.x, midpointFrontVP.y - secondPointInclinedVP.y);
  let secondPointFrontVP = { x: midpointFrontVP.x + base2, y: secondPointInclinedVP.y };

  let base3 = calculateHeight(midpointAboveHP.x - firstPointInclinedVP.x, midpointAboveHP.y - firstPointInclinedHP.y);
  let firstPointAboveHP = { x: midpointAboveHP.x - base3, y: firstPointInclinedHP.y };

  let base4 = calculateHeight(midpointAboveHP.x - secondPointInclinedVP.x, midpointAboveHP.y - secondPointInclinedHP.y);
  let secondPointAboveHP = { x: midpointAboveHP.x + base4, y: secondPointInclinedHP.y };

  console.log("midpointAboveHP.x - secondPointInclinedVP.x: ", midpointAboveHP.x - secondPointInclinedVP.x);
  console.log("xyAxisLineStartPoint.y - secondPointInclinedHP.y: ", xyAxisLineStartPoint.y - secondPointInclinedHP.y);
  console.log("secondPointAboveHP: ", secondPointAboveHP);

  let drawAll = false;
  const sendToPoints = [];
  if (counter === 1 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(...drawXYaxis(),
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 2 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(
      ...calculateLinePointsWithCircles(midpointAboveHP, midpointFrontVP, lightPencil),

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 3 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(

      ...calculateLinePointsWithCircles(firstPointInclinedHP, secondPointInclinedHP, lightPencil),
      ...calculateLinePointsWithCircles(firstPointInclinedVP, secondPointInclinedVP, lightPencil),

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 4 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(
      ...calculateDashLinePoints(firstPointInclinedVP, { x: midpointAboveHP.x, y: firstPointInclinedVP.y }, lightPencil),
      ...calculateDashLinePoints(firstPointInclinedHP, { x: midpointAboveHP.x, y: firstPointInclinedHP.y }, lightPencil),
      ...calculateDashLinePoints(secondPointInclinedHP, { x: midpointAboveHP.x, y: secondPointInclinedHP.y }, lightPencil),
      ...calculateDashLinePoints(secondPointInclinedVP, { x: midpointAboveHP.x, y: secondPointInclinedVP.y }, lightPencil),

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 5 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(

      ...calculateLinePointsWithCircles(pointParallelFirstAboveHP, pointParallelSecondAboveHP, lightPencil),
      ...calculateLinePointsWithCircles(firstPointInclinedHP, pointParallelFirstAboveHP, lightPencil),
      ...calculateLinePointsWithCircles(secondPointInclinedHP, pointParallelSecondAboveHP, lightPencil),

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 5 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(

      ...drawQuarterCircle(midpointFrontVP, 180, 90, (midpointFrontVP.x - firstPointInclinedHP.x)), ...lightPencil,
      ...drawQuarterCircle(midpointFrontVP, 180, 90, (midpointFrontVP.x - secondPointInclinedHP.x)), ...lightPencil,

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 6 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(

      ...calculateLinePointsWithCircles(firstPointFrontVP, secondPointFrontVP, superDarkPencil),
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 7 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(

      ...calculateLinePointsWithCircles(pointParallelFirstFrontVP, pointParallelSecondFrontVP, lightPencil),
      ...calculateLinePointsWithCircles(firstPointInclinedVP, pointParallelFirstFrontVP, lightPencil),
      ...calculateLinePointsWithCircles(secondPointInclinedVP, pointParallelSecondFrontVP, lightPencil),

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 8 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(
      ...drawQuarterCircle(midpointAboveHP, 0, 90, (midpointAboveHP.x - firstPointInclinedVP.x)), ...lightPencil,
      ...drawQuarterCircle(midpointAboveHP, 0, 90, (midpointAboveHP.x - secondPointInclinedVP.x)), ...lightPencil,

    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 9 || drawAll) {
    console.log("Enter counter 1", { x: xyAxisLineStartPoint.x + LineLength / 2, y: xyAxisLineStartPoint - MidpointHPLength });
    sendToPoints.push(
      ...calculateLinePointsWithCircles(firstPointAboveHP, secondPointAboveHP, superDarkPencil),
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }


  const steps = projectionOfLine_4Steps(); // Generate steps dynamically
  let step = steps[counter];

  return { points: sendToPoints, step };

}
export function getLineInclinedToBothPlanesPoints(payload) {
  const isPositive = (value) => typeof value === "number" && value >= 0;
  const isRealPositive = (value) => typeof value === "number" && value > 0;

  //Problem 10-8 (fig 10-31) page 214
  //Problem 10-9 (fig 10-33) page 215 Done
  //Problem 10-11 (fig 10-35) page 216 Done
  //Problem 10-17 (fig 10-42) page 220 Done
  //Problem 10-14 (fig 10-39) page 218 Done
  //
  //Problem 10-12 (fig 10-36) page 217 Work on it
  // Work on it New parameter needed
  //Problem 10-10 (fig 10-34) page 216 Work on it New parameter needed for midpoint check in question paper

  const { counter, inputs, finalDrawing, drawingType } = payload;

  let zoom = 2;
  let updatedInputs = getParameters(inputs, zoom);
  let {
    LineLength, firstPointAboveHPLength, firstpointfrontOfVPLength,
    secondpointAboveHPLength, secondpointFrontOfVPLength, topViewLength,
    frontViewLength, InclinationToHP, frontViewAngle, topViewAngle, InclinationToVP, MidpointHPLength, MidpointVPLength
  } = updatedInputs;

  const xyAxisLineStartPoint = { x: startPoint.x + 100, y: startPoint.y };

  if (isPositive(MidpointHPLength) || isPositive(MidpointVPLength)) {
    console.log("MidPoint");
    return getMidPointProblemPoints(payload, updatedInputs, xyAxisLineStartPoint);
  }
  let firstPointFrontOfVPPosition = inputs["firstpointPositionVP"];
  let firstPointAboveHPPosition = inputs["firstpointPositionHP"];

  console.log("LineLength : " + LineLength);
  console.log(inputs);

  // Calculate XY axis line points


  let firstPointAboveHP = xyAxisLineStartPoint;

  if (isPositive(firstPointAboveHPLength)) {
    //firstPointAboveHP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y - firstPointAboveHPLength };
    firstPointAboveHP = getPoint(xyAxisLineStartPoint, firstPointAboveHPLength, firstPointAboveHPPosition);
  }
  let firstPointFrontVP = xyAxisLineStartPoint;
  if (isPositive(firstpointfrontOfVPLength)) {
    //firstPointFrontVP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y + firstpointfrontOfVPLength };
    firstPointFrontVP = getPoint(xyAxisLineStartPoint, firstpointfrontOfVPLength, firstPointFrontOfVPPosition);
  }

  // if (isPositive(secondpointAboveHPLength)) {
  //   //firstPointFrontVP = { x: xyAxisLineStartPoint.x, y: xyAxisLineStartPoint.y + firstpointfrontOfVPLength };
  //   firstPointFrontVP = getPoint(xyAxisLineStartPoint, secondpointAboveHPLength, firstPointFrontOfVPPosition);
  // }

  //Second Point Above HP which is parallel to HP normally b1'
  let pointParalllelToHP = itbPointParalllelToHP(frontViewLength, topViewAngle, InclinationToVP, firstPointAboveHP, LineLength, secondpointFrontOfVPLength, firstPointFrontVP, InclinationToHP);

  //Second Point Above HP which is parallel to VP normally b1
  let pointParallelToVP = itbPointParallelToVP(topViewLength, InclinationToHP, firstPointAboveHP, firstPointFrontVP, LineLength, secondpointAboveHPLength);

  //Project point of top view which is equal to Inclination to HP Normally b2'
  let pointInclinedToHP = itbPointInclinedToHP(firstPointAboveHP, LineLength, pointParallelToVP, secondpointAboveHPLength);

  //final point of front view which is equal to final front view angle Inclination to HP Normally b'
  let pointInclinedToFV = itbPointInclinedToFV(firstPointAboveHP, pointInclinedToHP, pointParalllelToHP);

  //Project point of front view which is equal to Inclination to VP Normally b2
  let pointInclinedToVP = itbPointInclinedToVP(firstPointFrontVP, LineLength, pointParalllelToHP, secondpointFrontOfVPLength);

  //final point of front view which is equal to final top view angle Inclination to VP Normally b
  let pointInclinedToTV = itbPointInclinedToTV(firstPointFrontVP, pointInclinedToVP, pointParallelToVP);

  console.log("firstPointAboveHP : ", firstPointAboveHP);
  console.log("firstPointFrontVP : ", firstPointFrontVP);
  console.log("pointParalllelToHP : ", pointParalllelToHP);
  console.log("pointParallelToVP : ", pointParallelToVP);
  console.log("pointInclinedToHP: ", pointInclinedToHP);
  console.log("pointInclinedToVP: ", pointInclinedToVP);
  console.log("pointInclinedToFV: ", pointInclinedToFV);
  console.log("pointInclinedToTV: ", pointInclinedToTV);

  const alpha = calculateAngleInDegrees(firstPointAboveHP, pointInclinedToFV);
  const beta = calculateAngleInDegrees(firstPointFrontVP, pointInclinedToTV);
  const theta = calculateAngleInDegrees(firstPointAboveHP, pointInclinedToHP);
  const fi = calculateAngleInDegrees(firstPointFrontVP, pointInclinedToVP);
  let drawAll = false;
  const sendToPoints = [];
  // Return points and step description based on the counter value
  if (counter === 1 || drawAll) {
    console.log("Enter counter 1");
    sendToPoints.push(...drawXYaxis(),
    );
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 2 || drawAll) {
    console.log("Enter counter 2");
    sendToPoints.push(...getCounter2Points(xyAxisLineStartPoint, firstPointAboveHP, firstPointFrontVP, Number(inputs.firstPointAboveHPLength), Number(inputs.firstpointfrontOfVPLength)));
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 3 || drawAll) {
    console.log("Enter counter 3");
    if (isPositive(InclinationToHP) && isPositive(frontViewLength)) {
      sendToPoints.push(
        ...drawTheta(firstPointAboveHP, theta, pointInclinedToVP),
        ...calculateArcPoints(firstPointAboveHP, pointInclinedToHP),
        ...lightPencil,
        ...calculateLineLabel(pointInclinedToHP, "b'", "lineRightUp"),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToHP, darkPencil),
        ...lightPencil
      )
    } else if (isPositive(InclinationToHP)) {

      sendToPoints.push(
        ...calculateArcPoints(firstPointAboveHP, pointInclinedToHP),
        ...lightPencil,
        ...drawTheta(firstPointAboveHP, theta, pointInclinedToVP),
        ...calculateLineLabel(pointInclinedToHP, "b'", "lineRightUp"),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToHP, darkPencil),
        ...lightPencil
      )
    } else if (isPositive(frontViewLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointParalllelToHP, lightPencil),
        ...lightPencil,
        ...calculateLineLabel(pointParalllelToHP, "b1'", "lineRightUp"),
        ...lightPencil
      )
    } else if (isPositive(secondpointAboveHPLength)) {
      sendToPoints.push(
        ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: pointInclinedToHP.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }, lightPencil),
        ...drawPerpendicularArrow({ x: pointInclinedToHP.x + 50, y: xyAxisLineStartPoint.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }, "", roundUpToTwoDecimalPlaces(secondpointAboveHPLength / zoom)),
        ...calculateArcPoints(firstPointAboveHP, pointInclinedToHP),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToHP, lightPencil),
        ...lightPencil,
        ...calculateLineLabel(pointInclinedToHP, "b'", "lineRightUp"),
        ...lightPencil
      )
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 4 || drawAll) {
    console.log("Enter counter 4");
    if (isPositive(topViewLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointParallelToVP, lightPencil),
        ...calculateLineLabel(pointParallelToVP, "b1", "lineRightDown"),
      )
    } else if (isPositive(InclinationToHP)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointInclinedToHP, pointParallelToVP, lightPencil),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointParallelToVP, lightPencil),
        ...calculateLineLabel(pointParallelToVP, "b1", "lineRightDown"),
        ...lightPencil

      )
    } else if (isPositive(secondpointFrontOfVPLength)) {
      sendToPoints.push(
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToVP.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToVP.y }, lightPencil),
        ...drawPerpendicularArrow({ x: pointInclinedToVP.x + 50, y: xyAxisLineStartPoint.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToVP.y }, "", roundUpToTwoDecimalPlaces(secondpointFrontOfVPLength / zoom)),
        ...calculateArcPoints(firstPointFrontVP, pointInclinedToVP),
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, lightPencil),
        ...lightPencil,
        ...calculateLineLabel(pointInclinedToVP, "b", "lineRightDown"),
        ...lightPencil
      )
    }
    if (finalDrawing) {
      drawAll = true;
    }

  }

  if (counter === 5 || drawAll) {
    console.log("Enter counter 5");
    if (isPositive(topViewLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointParallelToVP, pointInclinedToHP, lightPencil),
        ...calculateLineLabel(pointInclinedToHP, "b'", "lineRightUp"),
        ...calculateArcPoints(firstPointAboveHP, pointInclinedToHP),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToHP),
        ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: pointInclinedToHP.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }, lightPencil)
      )
    }

    if (isPositive(InclinationToHP) && !isPositive(topViewAngle) && !isPositive(InclinationToVP)) {
      sendToPoints.push(
        ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: pointInclinedToHP.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }, lightPencil),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToFV),
        ...calculateLineLabel(pointInclinedToFV, "b2'", "lineRightUp"),
        ...darkPencil,
      )
    }

    if (isPositive(InclinationToVP) && isPositive(InclinationToHP)) {
      sendToPoints.push(
        ...lightPencil,
        ...drawFi(firstPointFrontVP, fi, pointInclinedToVP),
        ...calculateArcPoints(firstPointFrontVP, pointInclinedToVP),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, darkPencil),
        ...calculateLineLabel(pointInclinedToVP, "b", "lineRightDown"),
        ...calculateLinePointsWithCircles(pointInclinedToVP, pointParalllelToHP, lightPencil),
        ...calculateLineLabel(pointParalllelToHP, "b1'", "lineRightUp"),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointParalllelToHP, lightPencil)
      )
    }

    if (isPositive(topViewAngle)) {
      sendToPoints.push(
        //...drawLowerCircleArc(firstPointFrontVP, pointParallelToVP)
        ...drawArc(firstPointFrontVP, pointInclinedToTV),
      );
    }

    if (isPositive(secondpointAboveHPLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointInclinedToVP, pointParalllelToHP, lightPencil),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointParalllelToHP),
        ...calculateLineLabel(pointParalllelToHP, "b1'", "lineRightUp"),
        ...darkPencil,
      )
    }

    if (isPositive(secondpointFrontOfVPLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointInclinedToHP, pointParallelToVP, lightPencil),
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointParallelToVP),
        ...calculateLineLabel(pointParallelToVP, "b1", "lineRightUp"),
        ...darkPencil,
      )
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 6 || drawAll) {
    console.log("Enter counter 6");
    if (isPositive(topViewLength)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointParalllelToHP, pointInclinedToVP, lightPencil),
        ...lightPencil,
        ...calculateLineLabel(pointInclinedToVP, "b1", "lineRightDown"),
        ...lightPencil,
        ...calculateArcPoints(firstPointFrontVP, pointInclinedToVP),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, darkPencil),
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToVP.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToVP.y }, lightPencil)
      )
    }

    if (isPositive(InclinationToHP) && !isPositive(topViewAngle) && !isPositive(InclinationToVP)) {
      sendToPoints.push(
        ...calculateLinePointsWithCircles(pointInclinedToFV, pointInclinedToTV, lightPencil)
      )
    }

    if (isPositive(InclinationToHP) && !isPositive(topViewAngle) && isPositive(InclinationToVP)) {
      sendToPoints.push(
        //...drawLowerCircleArc(firstPointFrontVP, pointParallelToVP),
        ...drawArc(firstPointFrontVP, pointInclinedToTV),
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToVP.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToVP.y }),
        ...calculateLineLabel(pointInclinedToTV, "b2", "lineRightDown"),
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToTV, darkPencil)
      )
    }

    if (isPositive(topViewAngle)) {
      sendToPoints.push(
        ...drawBeta(firstPointFrontVP, beta, pointInclinedToVP),
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToTV, darkPencil),
        ...calculateLineLabel(pointInclinedToTV, "b2", "lineLeftDown"),
        ...lightPencil,
        ...calculateLinePointsWithCircles(pointInclinedToTV, pointInclinedToFV, lightPencil),
        ...lightPencil,
        ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: pointInclinedToHP.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }, lightPencil),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToFV, darkPencil),
        ...calculateLineLabel(pointInclinedToFV, "b2'", "lineRightUp"),
        ...lightPencil
      )
    }

    if (isPositive(secondpointFrontOfVPLength)) {
      sendToPoints.push(
        //...drawUpperCircleArc(firstPointAboveHP, pointParalllelToHP),
        ...drawArc(firstPointAboveHP, pointInclinedToFV),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToFV, darkPencil),
        ...calculateLineLabel(pointInclinedToFV, "b2'", "lineRightUp"),
        ...darkPencil,
      )
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 7 || drawAll) {
    console.log("Enter counter 7");
    if (isPositive(frontViewLength) && !isPositive(InclinationToHP)) {
      sendToPoints.push(
        //...drawUpperCircleArc(firstPointAboveHP, pointParalllelToHP)
        ...drawArc(firstPointAboveHP, pointInclinedToFV),
      )
    }
    console.log("Till this point");
    if (isPositive(secondpointFrontOfVPLength) || isPositive(topViewLength) || (isPositive(InclinationToHP) && !isPositive(topViewAngle) && !isPositive(InclinationToVP))) {
      sendToPoints.push(
        //...drawLowerCircleArc(firstPointFrontVP, pointParallelToVP)
        ...drawArc(firstPointFrontVP, pointInclinedToTV),
      )

      //console.log("Till this point as well", firstPointFrontVP.x - pointParallelToVP.x);
      sendToPoints.push(
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToFV),
        ...calculateLineLabel(pointInclinedToFV, "b2'", "lineRightUp"),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToTV),
        ...calculateLineLabel(pointInclinedToTV, "b2", "lineRightDown"),
      )

      if (isPositive(InclinationToHP) && isPositive(frontViewLength)) {
        sendToPoints.push(
          ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToTV.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToTV.y }, lightPencil),
          ...calculateArcPoints(firstPointFrontVP, pointInclinedToVP),
          ...lightPencil,
          ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, darkPencil),
          ...calculateLineLabel(pointInclinedToVP, "b", "lineRightDown"),
          ...lightPencil
        )
      } else if (isPositive(InclinationToHP)) {
        sendToPoints.push(
          ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToTV.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToTV.y }, lightPencil),
          ...calculateArcPoints(firstPointFrontVP, pointInclinedToVP),
          ...lightPencil,
          ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, lightPencil),
          ...calculateLineLabel(pointInclinedToVP, "b", "lineRightDown"),
          ...lightPencil
        )
      }
    }

    if (isPositive(InclinationToHP) && !isPositive(topViewAngle) && isPositive(InclinationToVP)) {
      sendToPoints.push(
        //...drawUpperCircleArc(firstPointAboveHP, pointParalllelToHP),
        ...drawArc(firstPointAboveHP, pointInclinedToFV),
        ...calculateDashLinePoints({ x: firstPointAboveHP.x, y: pointInclinedToHP.y }, { x: pointInclinedToHP.x + 50, y: pointInclinedToHP.y }),
        ...calculateLineLabel(pointInclinedToFV, "b2'", "lineRightUp"),
        ...calculateLinePointsWithCircles(firstPointAboveHP, pointInclinedToFV, darkPencil),
        ...lightPencil
      )
    }

    if (isPositive(topViewAngle)) {
      sendToPoints.push(
        ...drawFi(firstPointFrontVP, fi, pointInclinedToVP),
        ...calculateDashLinePoints({ x: firstPointFrontVP.x, y: pointInclinedToTV.y }, { x: pointInclinedToVP.x + 50, y: pointInclinedToTV.y }, lightPencil),
        ...lightPencil,
        ...calculateLinePointsWithCircles(firstPointFrontVP, pointInclinedToVP, darkPencil),
        ...darkPencil,
        ...calculateLineLabel(pointInclinedToVP, "b", "lineRightDown"),
      )
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 8 || drawAll) {
    console.log("Enter counter 8");
    sendToPoints.push(
      ...drawTheta(firstPointAboveHP, theta, pointInclinedToVP),
      ...drawFi(firstPointFrontVP, fi, pointInclinedToVP),
      ...drawAlpha(firstPointAboveHP, alpha, pointInclinedToVP),
      ...drawBeta(firstPointFrontVP, beta, pointInclinedToVP),
    )

    if (finalDrawing) {
      drawAll = true;
    }
  }

  const steps = projectionOfLine_4Steps(); // Generate steps dynamically
  let step = steps[counter];

  return { points: sendToPoints, step };
}

export const roundUpToTwoDecimalPlaces = (num) => {
  return Math.round(num);
};

function drawTheta(center, endAngle, angleBottomPoint) {
  return [
    ...drawAngle(center, 20, endAngle, "up", "θ"),
    ...calculateLabel({ x: angleBottomPoint.x + 100, y: angleBottomPoint.y + 40 }, "θ = " + roundUpToTwoDecimalPlaces(Math.abs(endAngle)), "left")
  ]
}

function drawFi(center, endAngle, angleBottomPoint) {
  return [
    ...drawAngle(center, 20, endAngle, "down", "Φ"),
    ...calculateLabel({ x: angleBottomPoint.x + 100, y: angleBottomPoint.y + 60 }, "Φ = " + roundUpToTwoDecimalPlaces(Math.abs(endAngle)), "left"),
  ]
}

function drawAlpha(center, endAngle, angleBottomPoint) {
  return [
    ...drawAngle(center, 40, endAngle, "up", "α"),
    ...calculateLabel({ x: angleBottomPoint.x + 100, y: angleBottomPoint.y + 80 }, "α = " + roundUpToTwoDecimalPlaces(Math.abs(endAngle)), "left")
  ]
}

function drawBeta(center, endAngle, angleBottomPoint) {
  return [
    ...drawAngle(center, 40, endAngle, "down", "β"),
    ...calculateLabel({ x: angleBottomPoint.x + 100, y: angleBottomPoint.y + 100 }, "β = " + roundUpToTwoDecimalPlaces(Math.abs(endAngle)), "left")
  ]
}

function drawAngle(center, radius, endAngle, arcPosition, label) {
  let sendToPoints = [];
  console.log("drawAngle, radius: ", radius);

  if (isPositive(radius)) {
    let labelPoint = calculateAngledLinePoints(center, -endAngle / 2, radius);
    let drawLowerCircle;
    let calculateLabel1;
    if (arcPosition == "up") {
      drawLowerCircle = drawQuarterCircle(center, 0, -endAngle, radius);
      calculateLabel1 = calculateLabel({ x: labelPoint.x, y: labelPoint.y + 5 }, label, "right");
    } else if (arcPosition == "down") {
      drawLowerCircle = drawQuarterCircle(center, 0, -endAngle, radius);
      calculateLabel1 = calculateLabel({ x: labelPoint.x, y: labelPoint.y + 5 }, label, "right");
    }
    sendToPoints.push(
      ...calculateLinePointsWithCircles(center, { x: center.x + radius, y: center.y }, lightPencil),
      ...drawLowerCircle,
      ...calculateLabel1,
      ...lightPencil,
    )
  }
  return sendToPoints;
}

function drawArc(center, pointParallelToHP) {
  //let radius = Math.abs(pointParallelToHP.x - center.x);

  let radius = calculateDistance(pointParallelToHP, center);
  console.log("radius of Arc: ", radius)
  let endAngle = calculateAngleInDegrees(center, pointParallelToHP);
  endAngle = endAngle < 0 ? endAngle - 10 : endAngle + 10;

  let sendToPoints = [];
  console.log("drawArc, radius: ", radius);
  if (isPositive(radius)) {
    let drawLowerCircle = drawQuarterCircle(center, 0, -endAngle, radius);
    sendToPoints.push(
      ...drawLowerCircle,
      ...lightPencil,
    )
  }
  return sendToPoints;
}

export function projectionOfLine_4Steps() {
  return {
    1: defineSteps("Draw the XY axis"),
    2: defineSteps(
      "Label the start point as 'A'",
      "Draw the XY axis line",
      "Label the endpoint as 'B'"
    ),
    3: defineSteps(
      "Draw the vertical line down from point 'A'",
      "Label the endpoint of the vertical line as 'A'",
      "Draw the downward vertical line"
    ),
    4: defineSteps(
      "Draw the second horizontal line from 'A' to 'B'",
      "Label the endpoint of the horizontal line as 'B'"
    ),
    5: defineSteps("Draw the upward vertical line"),
    6: defineSteps("Draw the downward vertical line starting from 'B'"),
    7: defineSteps("Draw the first angled line (upward)"),
    8: defineSteps("Draw the second angled line (downward)"),
    9: defineSteps("Draw the dashed line upward from the endpoint"),
    10: defineSteps("Draw the dashed line downward from the endpoint"),
    11: defineSteps("Draw the upper arc from point 'A'"),
    12: defineSteps("Draw the lower arc from point 'B'"),
    13: defineSteps("Draw the angled line upwards from the arc endpoint"),
    14: defineSteps("Draw the angled line downwards from the arc endpoint"),
    15: defineSteps("Draw the vertical line between the arcs")
  };
}

export function calculateLineLabel(point, label, alignment) {
  let labelX = point.x;
  let labelY = point.y;
  // Adjust label position based on alignment
  switch (alignment) {
    case "lineLeftUp":
      labelY -= 10; // Adjust Y upwards
      labelX -= 5;
      break;
    case "lineRightUp":
      labelY -= 10; // Adjust Y upwards
      labelX += 5;
      break;
    case "lineLeftDown":
      labelY += 20; // Adjust Y downwards
      labelX -= 5;
      break;
    case "lineRightDown":
      labelY += 20; // Adjust Y downwards
      labelX += 5;
      break;
    case "lineLeft":
      labelX -= 12; // Adjust X to the left
      break;
    case "lineRight":
      labelX += 10; // Adjust X to the right
      break;
    default:
      break; // No adjustment if no alignment is specified
  }
  return [{ ...point, label, labelX, labelY }];
}