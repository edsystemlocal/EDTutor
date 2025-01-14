import { calculateLinePointsWithCircles, defineSteps } from "../functionHelper";
import { drawUnit, ArcPoints, EndPoint, Linelength, unitRelation, CalculateRF, CalculateLOS, label } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "../globalVariable";
//import { useState } from "react";

const startPoint = { x: 100, y: 200 };
const endPoint = { x: 800, y: 200 };
let x = startPoint, y = endPoint;

// const [SRF1, setSRF1] = useState(1);
// const [SRF2, setSRF2] = useState(20);
// const [LOS, setLOS] = useState(20);
let SRF1, SRF2, LOS, RF;
let SDrawingLength, SDrawingLengthUnit, SActualLength, SActualLengthUnit;

let Maxlength, maxlengthUnit;
let showlength1, showlengthUnit1 = "";
let showlength2, showlengthUnit2 = "";
let showlength3, showlengthUnit3;

let division1, division2, division3;
let scaleType = "Plane";
let decideScale = [];

let part = 0, part2 = 0, part3 = 0;
let angle1 = 330, angle2 = 300, angle3 = 235;

let inclindLine1Points, inclindLine2Points, inclindLine3Points;
let arcPoints = [], arcPoints2 = [], arcPoints3 = [];
let partPoints = [], partPoints2 = [], partPoints3 = [];
let multipleLine = [], multipleLine2 = [], multipleLine3 = [];

let digit = [], digit2 = [], digit3 = [];

let leftLineLength = 120;
let plainScaleUnit, dScaleUnit;
let division1Count = 1, division2Count = 1;

//for step
export function calculation() {
  if (SRF1 && SRF2)
    //setSRF2(CalculateRF(SDrawingLength,SDrawingLengthUnit,SActualLength,SActualLengthUnit));
    SRF2 = CalculateRF(SDrawingLength, SDrawingLengthUnit, SActualLength, SActualLengthUnit)
  if (showlengthUnit3)
    // setLOS(CalculateLOS(SRF2,Maxlength,maxlengthUnit,plainScaleUnit));
    LOS = CalculateLOS(SRF2, Maxlength, maxlengthUnit, plainScaleUnit)
  else
    //setLOS(CalculateLOS(SRF2,Maxlength,maxlengthUnit,dScaleUnit));
    LOS = CalculateLOS(SRF2, Maxlength, maxlengthUnit, dScaleUnit)


  console.log("RF:-", +SRF2);
  console.log("LOS:-", +LOS);


}


export function calculation3isnull() {
  console.log("3rd unit null");
  if (showlengthUnit2) {
    plainScaleUnit = showlengthUnit1;
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
}



export function PScale(payload) {
  const { counter } = payload;

  const RF1 = payload.inputs["RF"]
  const RF2 = payload.inputs[":"]
  const RealLength = payload.inputs["Actual Length"]
  const RealUnit = payload.inputs["Actual Length Unit"]
  const DrawingLength = payload.inputs["Drawing Length"]
  const DrawingUnit = payload.inputs["Drawing Length Unit"]

  console.log("RealUnit: ", RealUnit);


  // const ScaleRF = payload.inputs["Scale RF"]
  const ScaleMaximumLength = payload.inputs["Maximum Length"]
  const ScaleMaximumLengthUnit = payload.inputs["Maximum Length Unit"]
  const ScaleShowLength1 = payload.inputs["Show Length1"]
  const ScaleShowUnit1 = payload.inputs["Show Length1 Unit"]
  const ScaleShowLength2 = payload.inputs["Show Length2"]
  const ScaleShowUnit2 = payload.inputs["Show Length2 Unit"]
  const ScaleShowLength3 = payload.inputs["Show Length3"]
  const ScaleShowUnit3 = payload.inputs["Show Length3 Unit"]

  const steps = scale_Steps(); // Generate steps dynamically
  let step = steps[counter];
  let sendToPoints = [];


  //Assigmnet to front end


  Maxlength = ScaleMaximumLength;
  maxlengthUnit = ScaleMaximumLengthUnit;

  showlength1 = ScaleShowLength1;
  showlengthUnit1 = ScaleShowUnit1;

  showlength2 = ScaleShowLength2;
  showlengthUnit2 = ScaleShowUnit2;

  showlength3 = ScaleShowLength3;
  showlengthUnit3 = ScaleShowUnit3;


  SRF1 - RF1;
  SRF2 = RF2;
  SDrawingLength = DrawingLength;
  SDrawingLengthUnit = DrawingUnit;
  SActualLength = RealLength;
  SActualLengthUnit = RealUnit;

  //  if(showlengthUnit3==="")
  //     calculation3isnull();
  //  else
  //  {
  //   dScaleUnit=showlengthUnit3;
  //   plainScaleUnit=showlengthUnit2;
  //   decideScale.push(unitRelation(showlengthUnit2,showlengthUnit3));
  //   division3=decideScale[0][0];
  //   decideScale.push(unitRelation(showlengthUnit1,showlengthUnit2));

  //   division2=decideScale[0][0];
  //   division1=Maxlength;

  //  }
  //  console.log("unit1="+showlengthUnit1);
  //  console.log("unit2="+showlengthUnit2);
  //  console.log("decide scale"+decideScale.toString());
  //  console.log("division2"+division2);


  calculation3isnull();
  calculation();
  //division1=8;
  //division2= 10;
  //division3=10;

  console.log("RF" + RF2);

  //step-1 
  const mainLinePoints = calculateLinePointsWithCircles(startPoint, endPoint);
  const mainlineLength = Linelength(startPoint, endPoint);
  if (counter === 1)
    sendToPoints.push(...mainLinePoints, ...darkPencil);

  // step-2
  inclindLine1Points = drawInclindLine(startPoint, angle1, mainlineLength);
  if (counter === 2)
    sendToPoints.push(...inclindLine1Points, ...lightPencil);

  // step-3
  arcPoints = drawArc(startPoint, angle1, mainlineLength, division1);
  if (counter === 3)
    sendToPoints.push(...arcPoints, ...lightPencil,);


  // step-4
  part = mainlineLength / division1;
  partPoints = drawParallelLine(startPoint, part, division1, angle1, mainlineLength)
  if (counter === 4)
    sendToPoints.push(...partPoints, ...darkPencil);


  //step-5

  const leftLine = calculateLinePointsWithCircles(startPoint, EndPoint(startPoint, 90, 120));
  const rightLine = calculateLinePointsWithCircles(endPoint, EndPoint(endPoint, 90, 120));
  const uperLine = calculateLinePointsWithCircles(EndPoint(startPoint, 90, 120), EndPoint(endPoint, 90, 120));

  if (counter === 5) {
    sendToPoints.push(
      ...leftLine,
      ...darkPencil,
      ...rightLine,
      ...darkPencil,
      ...uperLine,
      ...darkPencil)
  }

  //step-6

  multipleLine = drawMultipleLine(startPoint, endPoint, division1);
  for (let i = 0; i <= division1; i++) {
    if (i == division1)
      digit.push(...label(startPoint, "" + i * division1Count, "left-down"));
    else
      digit.push(...label({ x: startPoint.x + part * (i + 1), y: startPoint.y }, "" + i * division1Count, "down"));
    digit.push(...darkPencil);
  }
  if (counter === 6)
    sendToPoints.push(...multipleLine, ...digit, ...darkPencil)

  //Reapet Step
  //step-7
  const inclindLine2endpoints = EndPoint(startPoint, angle2, mainlineLength / 2);
  inclindLine2Points = drawInclindLine(startPoint, angle2, mainlineLength / 2);
  if (counter === 7)
    sendToPoints.push(...inclindLine2Points, ...lightPencil);

  //step-8
  const InclindLine2Length = Linelength(startPoint, inclindLine2endpoints);
  arcPoints2 = drawArc(startPoint, angle2, InclindLine2Length, division2);
  if (counter === 8)
    sendToPoints.push(...arcPoints2, ...lightPencil);


  // step-9

  part2 = part / division2;
  partPoints2 = drawParallelLine(startPoint, part2, division2, angle2, InclindLine2Length)
  if (counter === 9)
    sendToPoints.push(...partPoints2, ...lightPencil);

  //step-10
  if (division3 > 0) {
    DScale(payload);

    if (counter === 10)
      sendToPoints.push(...multipleLine2, ...lightPencil, ...digit2);
  }
  else {
    multipleLine2 = drawMultipleLine(startPoint, EndPoint(startPoint, 0, part), division2);
    let j = 2;
    for (let i = division2 - 2; i >= 0; i = i - 2) {

      digit2.push(...label({ x: startPoint.x + part2 * (i), y: startPoint.y }, "" + j * division2Count, "down"));
      digit2.push(...darkPencil);
      j = j + 2;
    }

    if (counter === 10)
      sendToPoints.push(...multipleLine2, ...lightPencil, ...digit2, ...lightPencil);
  }

  //step-11// written unit and FR or Diogonal Scal

  let WrittenUnitRFAnswer = [];
  WrittenUnitRFAnswer.push(...WriteUnitRFAnswer());
  if (division3 === 0 && counter === 11)
    sendToPoints.push(...WrittenUnitRFAnswer);
  else {
    if (counter === 11)
      sendToPoints.push(...inclindLine3Points, ...lightPencil);
    if (counter === 12)
      sendToPoints.push(...arcPoints3, ...lightPencil);
    if (counter === 13)
      sendToPoints.push(...partPoints3, ...lightPencil);
    if (counter === 14)
      sendToPoints.push(...multipleLine3, ...lightPencil);
    if (counter === 15)
      sendToPoints.push(...WrittenUnitRFAnswer);
  }


  return { points: sendToPoints, step };

}

export function scale_Steps() {
  return {
    1: defineSteps("RF of given Problem is :- 1:" + SRF2,
      "Length of Scale is :-" + LOS + " " + plainScaleUnit,
      "Draw a main line  " + Maxlength + "" + plainScaleUnit + "long and divide it into " + division1 + " equal parts. for this:-"),
    2: defineSteps("Draw a line from start point of main line with 30 degree agle "),
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


    // 11: defineSteps("Draw a line from start point of Scale line with 30 degree agle "),   
    // 12: defineSteps( "Cut arcs of any length " +division3+" times",), 
    // 13: defineSteps("Draw a line between last arc point and end point of fist division ", "Draw Parallel line from each arc point. ",), 
    // 14:defineSteps("Divide the first part into "+division3+"equal divisions. ",
    //     " Each division will show one "+ dScaleUnit),
    // 15:defineSteps( "Draw Perpendicular line from both end",
    //       "Make Division each representing one "+ dScaleUnit),

    // 11:defineSteps("draw 2 line below the scale and write units as draw",
    //                "marks points above the scale as shown in scale problem ")

  };
}

export function drawInclindLine(pointStart, angle, length) {
  const pointEnd = EndPoint(pointStart, angle, length);
  return calculateLinePointsWithCircles(pointStart, pointEnd);

}

export function drawArc(pointStart, angle, length, division) {
  const arcPoints = [];

  const move = length / (division + 2);

  for (let i = 1; i <= division; i++) {
    let y = EndPoint(pointStart, angle, move)

    arcPoints.push(...ArcPoints(pointStart, move, angle));

    arcPoints.push(...lightPencil);
    pointStart = y;
  }

  return arcPoints;
}

export function drawParallelLine(pointStart, part, division, angle, length) {

  let move = length / (division + 2);
  let partPoints = [];
  // partPoints.push(...label(EndPoint(startPoint,0,part*i), ""+p, "down"));
  for (let i = division; i >= 1; i--) {

    partPoints.push(...calculateLinePointsWithCircles(EndPoint(pointStart, 0, part * i), EndPoint(pointStart, angle, move * i)));
    partPoints.push(...lightPencil);

  }
  return partPoints;
}

export function drawMultipleLine(pointStart, pointEnd, division) {
  const multipleLine = [];
  let length = Linelength(pointStart, pointEnd);
  let part = length / division;
  for (let i = 1; i < division; i++) {

    multipleLine.push(...calculateLinePointsWithCircles
      (EndPoint(pointStart, 0, part * i), EndPoint(EndPoint(pointStart, 0, part * i), 90, 120)));
    multipleLine.push(...darkPencil);
  }


  return multipleLine;
}

export function WriteUnitRFAnswer() {
  let X = { x: startPoint.x, y: startPoint.y + 100 };
  let Y = { x: endPoint.x, y: endPoint.y + 100 };
  const Unitline1 = calculateLinePointsWithCircles(X, Y);
  const UnitLine2 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 20 }, { x: Y.x, y: Y.y + 20 });

  let Unit3line1 = startPoint, Unit3line2 = startPoint, WriteUnit3;
  if (division3 > 0) {
    Unit3line1 = calculateLinePointsWithCircles({ x: startPoint.x - 100, y: startPoint.y }, { x: startPoint.x - 100, y: startPoint.y - leftLineLength });
    Unit3line2 = calculateLinePointsWithCircles({ x: startPoint.x - 120, y: startPoint.y }, { x: startPoint.x - 120, y: startPoint.y - leftLineLength });
    WriteUnit3 = label({ x: startPoint.x - 120, y: startPoint.y }, drawUnit(dScaleUnit), "down");
  }
  let WriteUnit1 = label(Y, drawUnit(maxlengthUnit), "End-Start");
  let WriteUnit2 = label(X, drawUnit(plainScaleUnit), "down");
  //if(division1Count>1)
  //WriteUnit2 = label(X,drawUnit(maxlengthUnit), "down");
  //else
  // WriteUnit2 = label(X,drawUnit(plainScaleUnit), "down");


  let RFX = { x: startPoint.x, y: startPoint.y + 200 };
  let RFY = { x: endPoint.x, y: endPoint.y + 200 };
  const RFLine1 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 100 }, { x: Y.x, y: Y.y + 120 });
  const RFLine2 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 120 }, { x: Y.x, y: Y.y + 120 });
  const WriteRF = label({ x: X.x + 300, y: Y.y + 120 }, "RF" + SRF1 + ":" + SRF2, "down");


  X = { x: startPoint.x + part2 * (division2 - showlength2), y: startPoint.y - 140 };
  Y = { x: startPoint.x + part * (showlength1 + 1), y: startPoint.y - 140 }
  let answerLine = [];
  answerLine.push(...calculateLinePointsWithCircles(X, Y))
  answerLine.push(...label(X, "<", "exact"));
  answerLine.push(...label(Y, ">", "exact"));
  answerLine.push(...darkPencil);
  const answerUnit = label(
    { x: X.x + (Y.x - X.x) / 2, y: X.y },
    showlength1 + " " + drawUnit(showlengthUnit1) +
    " " + showlength2 + " " + drawUnit(showlengthUnit2) +
    "up");

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
    //...Unit3line1,
    //...Unit3line2,
    //...WriteUnit3,

  ];



}

export function DScale() {
  //step-10

  let part2 = part / division2;
  for (let i = 1; i <= division2; i++) {

    multipleLine2.push(...calculateLinePointsWithCircles
      (EndPoint(startPoint, 0, part2 * i), EndPoint(EndPoint(startPoint, 0, part2 * (i - 1)), 90, 120)));
    multipleLine2.push(...lightPencil);
  }
  let j = 2;
  for (let i = division2 - 2; i >= 0; i = i - 2) {

    digit2.push(...label({ x: startPoint.x + part2 * (i), y: startPoint.y }, "" + j, "down"));
    digit2.push(...darkPencil);
    j = j + 2;
  }


  //step-11

  const dstartPoint = { x: startPoint.x, y: startPoint.y - leftLineLength };
  const inclindLine3endpoints = EndPoint(dstartPoint, angle3, leftLineLength + 100);
  inclindLine3Points = calculateLinePointsWithCircles(dstartPoint, inclindLine3endpoints);

  //step-12

  const InclindLine3Length = Linelength(dstartPoint, inclindLine3endpoints);
  let move3 = InclindLine3Length / (division3 + 2);
  let x = dstartPoint;
  arcPoints3 = drawArc(dstartPoint, angle3, InclindLine3Length, division3)


  // step-13
  part3 = leftLineLength / division3;
  y = startPoint;
  let k = 1;
  for (let i = division3; i >= 1; i--) {

    partPoints3.push(...calculateLinePointsWithCircles(EndPoint(dstartPoint, 90, part3 * (-i)), EndPoint(dstartPoint, angle3, move3 * i)));
    partPoints3.push(...lightPencil);
    if (k % 2 == 0)
      partPoints3.push(...label(EndPoint(startPoint, 90, part3 * k), "" + k, "left-down"));
    k++;
  }
  //step-14

  for (let i = 1; i <= division3; i++) {

    multipleLine3.push(...calculateLinePointsWithCircles(EndPoint(startPoint, 90, part3 * i), EndPoint(EndPoint(startPoint, 90, part3 * i), 0, part)));
    multipleLine3.push(...lightPencil);
  }


}

