import { calculateLinePointsWithCircles, defineSteps } from "../functionHelper";
import { drawUnit, ArcPoints, EndPoint, Linelength, unitRelation, CalculateRF, CalculateLOS, label } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "../globalVariable";
//import { useState } from "react";

const startPoint = { x: 100, y: 200 };
const endPoint = { x: 800, y: 200 };

//for step
export function calculation(Maxlength, maxlengthUnit, showlengthUnit1, showlengthUnit2) {
  let division1, division2;
  let plainScaleUnit;
  let division1Count = 1, division2Count = 1;
  let decideScale = [];
  let division3;
  if (showlengthUnit2 === "") {
    plainScaleUnit = showlengthUnit1;
    if (Maxlength >= 20) {
      plainScaleUnit = maxlengthUnit;
      division1Count = 10;
      division1 = Maxlength / 10;
      if (division1 >= 20) {
        division1Count = 100;
        division2Count = 10;
        division1 = division1 / 10;
        division2 = 10;
      }
      else {
        division2 = 10;
        if (maxlengthUnit === showlengthUnit1)
          division3 = 0;
        else {
          decideScale.push(unitRelation(maxlengthUnit, showlengthUnit1));
          division3 = decideScale[0][0];
        }
      }
    }
    else //unit2 is null and maxlength not 20 above
    {
      decideScale.push(unitRelation(maxlengthUnit, showlengthUnit1));
      console.log("decidescaleP", +decideScale[1]);
      division1 = Maxlength;
      division2 = decideScale[0][0];
      division3 = 0;
    }
  }
  else // showlength2 is not null
  {
    plainScaleUnit = showlengthUnit2;

    if (Maxlength >= 20) {
      plainScaleUnit = maxlengthUnit;
      division1Count = 10;
      division1 = Maxlength / 10;
      if (division1 >= 20) {
        dScaleUnit = maxlengthUnit;
        division1Count = 100;
        division2Count = 10;
        division1 = division1 / 10;
        division2 = 10;
        division3 = 10;
      }
      else {
        division2 = 10;
        division3 = 0;
      }
    }
    else //unit2 is not null and maxlength not 20 above
    {
      if (maxlengthUnit === showlengthUnit1) {
        decideScale.push(unitRelation(showlengthUnit1, showlengthUnit2));
        division1 = Maxlength;
        division2 = decideScale[0][0];
        division3 = 0;
      }

      else {
        decideScale.push(...unitRelation(showlengthUnit1, showlengthUnit2));
        division3 = decideScale[0][0];
        decideScale.push(...unitRelation(maxlengthUnit, showlengthUnit1));
        division2 = decideScale[0][0];
        division1 = Maxlength;
      }
    }
  }


  let updatedInputs = {
    division1: division1,
    division2: division2,
    plainScaleUnit: plainScaleUnit,
    division1Count: division1Count,
    division2Count: division2Count
  }
  return updatedInputs;
}



export function PScale(payload) {
  let part = 0, part2 = 0;
  let angle1 = 330, angle2 = 300; 
  let sendToPoints = [];
  const { counter, finalDrawing } = payload;
  // const steps = scale_Steps(SRF2,LOS ,plainScaleUnit, Maxlength,maxlengthUnit,division1,division2,division1Count,division2Count) // Generate steps dynamically
  // let step = steps[counter];

  const RF1 = payload.inputs["RF"]
  const RF2 = payload.inputs[":"]
  const RealLength = payload.inputs["Actual Length"]
  const RealUnit = payload.inputs["Actual Length Unit"]
  const DrawingLength = payload.inputs["Drawing Length"]
  const DrawingUnit = payload.inputs["Drawing Length Unit"]

  const ScaleMaximumLength = payload.inputs["Maximum Length"]
  const ScaleMaximumLengthUnit = payload.inputs["Maximum Length Unit"]
  const ScaleShowLength1 = payload.inputs["Show Length1"]
  const ScaleShowUnit1 = payload.inputs["Show Length1 Unit"]
  const ScaleShowLength2 = payload.inputs["Show Length2"]
  const ScaleShowUnit2 = payload.inputs["Show Length2 Unit"]

  console.log("RF2: ", RF2);

  //Assigmnet to front end


  let Maxlength = ScaleMaximumLength;
  let maxlengthUnit = ScaleMaximumLengthUnit;

  let showlength1 = ScaleShowLength1;
  let showlengthUnit1 = ScaleShowUnit1;

  let showlength2 = ScaleShowLength2;
  let showlengthUnit2 = ScaleShowUnit2;


  let SRF1 = RF1;
  let SRF2 = RF2;
  let SDrawingLength = DrawingLength;
  let SDrawingLengthUnit = DrawingUnit;
  let SActualLength = RealLength;
  let SActualLengthUnit = RealUnit;
  //RF and LOS calculate
  if(!SRF1 && !SRF2) 
    SRF2 = CalculateRF(SDrawingLength, SDrawingLengthUnit, SActualLength, SActualLengthUnit)
 
  console.log("SRF2: ", SRF2);


  let {
    division1,
    division2,
    plainScaleUnit,
    division1Count,
    division2Count
  } = calculation(Maxlength, maxlengthUnit, showlengthUnit1, showlengthUnit2);

  let LOS = CalculateLOS(SRF2, Maxlength, maxlengthUnit, plainScaleUnit);

  console.log("real unit" + RealLength, "", +RealUnit);

  //step-1 
  const mainLinePoints = calculateLinePointsWithCircles(startPoint, endPoint);
  const mainlineLength = Linelength(startPoint, endPoint);

  let drawAll = false;
  if (counter === 1 || drawAll) {
    sendToPoints.push(...mainLinePoints, ...darkPencil,
      ...label({ x: startPoint.x, y: startPoint.y + 500 }, "RF:" + SRF1 + ":" + SRF2, "up"),
      ...label({ x: startPoint.x, y: startPoint.y + 550 }, "LOS:" + LOS, "up"));
    if (finalDrawing) {
      drawAll = true;
    }
  }

  // step-2
  
  if (counter === 2 || drawAll) {
    let inclindLine1Points = drawInclindLine(startPoint, angle1, mainlineLength);
    sendToPoints.push(...inclindLine1Points, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  // step-3
  if (counter === 3 || drawAll) {
    let arcPoints = drawArc(startPoint, angle1, mainlineLength, division1);
    sendToPoints.push(...arcPoints, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  // step-4
  part = mainlineLength / division1;

  if (counter === 4 || drawAll) {
    let partPoints = drawParallelLine(startPoint, part, division1, angle1, mainlineLength);
    sendToPoints.push(...partPoints, ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  //step-5

  const leftLine = calculateLinePointsWithCircles(startPoint, EndPoint(startPoint, 90, 120));
  const rightLine = calculateLinePointsWithCircles(endPoint, EndPoint(endPoint, 90, 120));
  const uperLine = calculateLinePointsWithCircles(EndPoint(startPoint, 90, 120), EndPoint(endPoint, 90, 120));

  if (counter === 5 || drawAll) {
    sendToPoints.push(
      ...leftLine,
      ...darkPencil,
      ...rightLine,
      ...darkPencil,
      ...uperLine,
      ...darkPencil)

    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-6

  

  if (counter === 6 || drawAll) {
    let digit = [];
    let multipleLine = drawMultipleLine(startPoint, endPoint, division1);
    for (let i = 0; i <= division1; i++) {
      if (i == division1)
        digit.push(...label(startPoint, "" + i * division1Count, "left-down"));
      else
        digit.push(...label({ x: startPoint.x + part * (i + 1), y: startPoint.y }, "" + i * division1Count, "down"));
      digit.push(...darkPencil);
    }
    sendToPoints.push(...multipleLine, ...digit, ...darkPencil)
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //Reapet Step
  //step-7
  const inclindLine2endpoints = EndPoint(startPoint, angle2, mainlineLength / 2);
  let inclindLine2Points = drawInclindLine(startPoint, angle2, mainlineLength / 2);
  if (counter === 7 || drawAll) {
    sendToPoints.push(...inclindLine2Points, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-8
  const InclindLine2Length = Linelength(startPoint, inclindLine2endpoints);

  if (counter === 8 || drawAll) {
    let arcPoints2 = drawArc(startPoint, angle2, InclindLine2Length, division2);
    sendToPoints.push(...arcPoints2, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }



  // step-9

  part2 = part / division2;

  if (counter === 9 || drawAll) {
    let partPoints2 = drawParallelLine(startPoint, part2, division2, angle2, InclindLine2Length);
    sendToPoints.push(...partPoints2, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  //step-10

  


  if (counter === 10 || drawAll) {
    let multipleLine2 = drawMultipleLine(startPoint, EndPoint(startPoint, 0, part), division2);
    let j = 2;
    let digit2 = [];
    for (let i = division2 - 2; i >= 0; i = i - 2) {

      digit2.push(...label({ x: startPoint.x + part2 * (i), y: startPoint.y }, "" + j * division2Count, "down"));
      digit2.push(...darkPencil);
      j = j + 2;
    }
    sendToPoints.push(...multipleLine2, ...lightPencil, ...digit2, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  if (counter === 11 || drawAll) {
    sendToPoints.push(...WriteUnitRFAnswer(showlength1, showlength2, showlengthUnit1, showlengthUnit2, division2, maxlengthUnit, part, part2, SRF1, SRF2, plainScaleUnit));
    if (finalDrawing) {
      drawAll = true;
    }
  }



  const steps = scale_Steps(SRF2,LOS ,plainScaleUnit, Maxlength,maxlengthUnit,division1,division2,division1Count,division2Count) // Generate steps dynamically
  let step = steps[counter];

  return { points: sendToPoints, step };

}

export function scale_Steps(SRF2,LOS ,plainScaleUnit, Maxlength,maxlengthUnit,division1,division2,division1Count,division2Count) {
  return {
    1: defineSteps("RF of given Problem is :- 1:" + SRF2,
      "Length of Scale is :-" + LOS + " " + plainScaleUnit,
      "Draw a main line  " + Maxlength + " " + plainScaleUnit + " long and divide it into " + division1 + " equal parts. for this:-"),
    2: defineSteps("Draw a line from start point of main line with 30 degree angle "),
    3: defineSteps("Cut arcs of any length " + division1 + " times",),
    4: defineSteps("Draw a line between last arc point and end point of line ", "Draw Parallel line from each arc point. "),
    5: defineSteps("Draw Perpendicular line from both end",),
    6: defineSteps("Make Division each representing :" + division1Count + " " + maxlengthUnit),

    7: defineSteps("Draw a line from start point of main line with 60 degree agle "),
    8: defineSteps("Cut arcs of any length " + division2 + " times",),
    9: defineSteps("Draw a line between last arc point and end point of fist division ", "Draw Parallel line from each arc point. ",),

    9: defineSteps("Divide the first part into " + division2 + "equal divisions. ",
      " Each division will show one " + plainScaleUnit),
    10: defineSteps("Draw Perpendicular line from both end",
      "Make Division each representing :" + division2Count + " " + plainScaleUnit),


  };
  return "";
}

export function drawInclindLine(pointStart, angle, length) {
  const pointEnd = EndPoint(pointStart, angle, length);
  return calculateLinePointsWithCircles(pointStart, pointEnd, lightPencil);

}

export function drawArc(pointStart, angle, length, division) {
  const arcPointsInternal = [];

  const move = length / (division + 2);

  for (let i = 1; i <= division; i++) {
    let y = EndPoint(pointStart, angle, move)

    arcPointsInternal.push(...ArcPoints(pointStart, move, angle));

    arcPointsInternal.push(...lightPencil);
    pointStart = y;
  }

  return arcPointsInternal;
}

export function drawParallelLine(pointStart, part, division, angle, length) {

  let move = length / (division + 2);
  let partPointsInternal = [];
  for (let i = division; i >= 1; i--) {

    partPointsInternal.push(...calculateLinePointsWithCircles(EndPoint(pointStart, 0, part * i), EndPoint(pointStart, angle, move * i), lightPencil));
    partPointsInternal.push(...lightPencil);

  }
  return partPointsInternal;
}

export function drawMultipleLine(pointStart, pointEnd, division) {
  const multipleLineInternal = [];
  let length = Linelength(pointStart, pointEnd);
  let part = length / division;
  for (let i = 1; i < division; i++) {

    multipleLineInternal.push(...calculateLinePointsWithCircles
      (EndPoint(pointStart, 0, part * i), EndPoint(EndPoint(pointStart, 0, part * i), 90, 120)));
    multipleLineInternal.push(...darkPencil);
  }

  return multipleLineInternal;
}

export function WriteUnitRFAnswer(showlength1, showlength2, showlengthUnit1, showlengthUnit2, division2, maxlengthUnit, part, part2, SRF1, SRF2, plainScaleUnit) {
  let X = { x: startPoint.x, y: startPoint.y + 100 };
  let Y = { x: endPoint.x, y: endPoint.y + 100 };

  const Unitline1 = calculateLinePointsWithCircles(X, Y, lightPencil);
  const UnitLine2 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 20 }, { x: Y.x, y: Y.y + 20 }, lightPencil);



  let WriteUnit1 = label(Y, drawUnit(maxlengthUnit), "End-Start");
  let WriteUnit2 = label(X, drawUnit(plainScaleUnit), "down");

  const WriteRF = label({ x: X.x + 300, y: Y.y + 120 }, "RF" + SRF1 + ":" + SRF2, "down");
  let temp1 = showlength1;
  let temp2 = showlength2;

  if (showlength1 > 20) {
    showlength2 = showlength1 % 10;
    showlength1 = parseInt(showlength1 / 10);
  }
  X = { x: startPoint.x + part2 * (division2 - showlength2), y: startPoint.y - 140 };
  Y = { x: startPoint.x + part * (showlength1 + 1), y: startPoint.y - 140 }
  let answerLine = [];
  answerLine.push(...calculateLinePointsWithCircles(X, Y))
  answerLine.push(...label(X, "<", "exact"));
  answerLine.push(...label(Y, ">", "exact"));
  answerLine.push(...darkPencil);
  showlength1 = temp1;
  showlength2 = temp2;
  const answerUnit = label(
    { x: X.x + (Y.x - X.x) / 2, y: X.y },
    showlength1 + " " + showlengthUnit1 +
    ", " + showlength2 + " " + showlengthUnit2, "up");

  return [...Unitline1,
  ...lightPencil,
  ...UnitLine2,
  ...lightPencil,
  ...WriteUnit1,
  ...WriteUnit2,
  ...darkPencil,
  ...answerLine,
  ...answerUnit,
  ...WriteRF,
  ];



}

