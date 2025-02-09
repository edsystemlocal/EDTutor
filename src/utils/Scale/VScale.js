
import { calculateLinePointsWithCircles, defineSteps } from "../functionHelper";
import { drawUnit, ArcPoints, EndPoint, Linelength, unitRelation, CalculateRF, CalculateLOS, label } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "../globalVariable";
//import { useState } from "react";

const startPoint = { x: 150, y: 200 };
const endPoint = { x: 800, y: 200 };

let angle1 = 330, angle2 = 300, angle3 = 235;
let leftLineLength = 50;

export function calculation3isnull(Maxlength, maxlengthUnit, showlengthUnit1, showlengthUnit2) {
  let division1, division2, division3;

  let plainScaleUnit, dScaleUnit;
  let division1Count = 1, division2Count = 1;

  let decideScale = [];
  console.log("3rd unit null");
  if (showlengthUnit2 === "") {
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

      division1 = Maxlength;
      division2 = decideScale[0][0];
      division3 = 0;
    }
  }
  else // showlength2 is not null
  {
    console.log("2nd not null");
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
        decideScale.push(unitRelation(showlengthUnit1, showlengthUnit2));
        division2 = 10;
        division3 = decideScale[0][0];
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
    division3: division3,
    plainScaleUnit: plainScaleUnit,
    dScaleUnit: dScaleUnit,
    division1Count: division1Count,
    division2Count: division2Count
  }
  return updatedInputs;
}

export function VCalculation(Maxlength, maxlengthUnit, showlengthUnit1, showlengthUnit2)
{
  let division1, division2, division3;

  let plainScaleUnit, dScaleUnit;
  let division1Count = 1, division2Count = 1;
 
  division1=Maxlength;
  division2=10;
  division3=10;
  dScaleUnit=showlengthUnit1;
  
  let updatedInputs = {
    division1: division1,
    division2: division2,
    division3: division3,
    plainScaleUnit: plainScaleUnit,
    dScaleUnit: dScaleUnit,
    division1Count: division1Count,
    division2Count: division2Count
  }
  return updatedInputs;

}


export function VScale(payload) {

  let sendToPoints = [];
  const { counter, finalDrawing } = payload;
  const steps = scale_Steps(); // Generate steps dynamically
  let step = steps[counter];


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
  const ScaleShowLength3 = payload.inputs["Show Length3"]
  const ScaleShowUnit3 = payload.inputs["Show Length3 Unit"]

  //Assigmnet to front end
  let Maxlength = ScaleMaximumLength;
  let maxlengthUnit = ScaleMaximumLengthUnit;

  let showlength1 = ScaleShowLength1;
  let showlengthUnit1 = ScaleShowUnit1;

  let showlength2 = ScaleShowLength2;
  let showlengthUnit2 = ScaleShowUnit2;

  let showlength3 = ScaleShowLength3;
  let showlengthUnit3 = ScaleShowUnit3;


  let SRF1 = RF1;
  let SRF2 = RF2;
  let SDrawingLength = DrawingLength;
  let SDrawingLengthUnit = DrawingUnit;
  let SActualLength = RealLength;
  let SActualLengthUnit = RealUnit;

  let {
    division1,
    division2,
    division3,
    plainScaleUnit,
    dScaleUnit,
    division1Count,
    division2Count
  } = VCalculation(Maxlength, maxlengthUnit, showlengthUnit1, showlengthUnit2);

  // if (showlengthUnit3 != ""){
  //   let decideScale = [];
  //   dScaleUnit = showlengthUnit3;
  //   plainScaleUnit = showlengthUnit2;
  //   decideScale.push(unitRelation(showlengthUnit2, showlengthUnit3));
  //   division3 = decideScale[0][0];
  //   decideScale.push(unitRelation(showlengthUnit1, showlengthUnit2));

  //   division2 = decideScale[0][0];
  //   division1 = Maxlength;

  // }

  VCalculation();

  let LOS;
  //calculation of RF and LOS
  if (SRF1 === "" && SRF2 === "")
    SRF2 = CalculateRF(SDrawingLength, SDrawingLengthUnit, SActualLength, SActualLengthUnit)
  if (showlengthUnit3 === "")
    LOS = CalculateLOS(SRF2, Maxlength, maxlengthUnit, plainScaleUnit);
  else
    LOS = CalculateLOS(SRF2, Maxlength, maxlengthUnit, dScaleUnit);




   //step-1 //main line draw
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

  // step-2 //incined line draw
  let inclindLine1Points = drawInclindLine(startPoint, angle1, mainlineLength);
  if (counter === 2 || drawAll) {
    sendToPoints.push(...inclindLine1Points, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  // step-3 cut inclined line

  if (counter === 3 || drawAll) {
    let arcPoints = drawArc(startPoint, angle1, mainlineLength, division1);
    sendToPoints.push(...arcPoints, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  // step-4 join inclined line cut  with main line
  let part = mainlineLength / division1;
  console.log("part", part);

  if (counter === 4 || drawAll) {
    let partPoints = drawParallelLine(startPoint, part, division1, angle1, mainlineLength);
    sendToPoints.push(...partPoints, ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  //step-5 make uppper scale boundary

  const leftLine = calculateLinePointsWithCircles(startPoint, EndPoint(startPoint, 90, leftLineLength));
  const rightLine = calculateLinePointsWithCircles(endPoint, EndPoint(endPoint, 90, leftLineLength));
  const uperLine = calculateLinePointsWithCircles(EndPoint(startPoint, 90, leftLineLength), EndPoint(endPoint, 90, leftLineLength));

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

  //step-6 divide upper scale boundary

  let multipleLine = drawMultipleLine(startPoint, endPoint, division1);

  if (counter === 6 || drawAll) {
    let digit = [];
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
  //step-7 draw another inclined line
  const inclindLine2endpoints = EndPoint(startPoint, angle2, mainlineLength / 2);
  let inclindLine2Points = drawInclindLine(startPoint, angle2, mainlineLength / 2);
  if (counter === 7 || drawAll) {
    sendToPoints.push(...inclindLine2Points, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-8 cut inclined line 
  const InclindLine2Length = Linelength(startPoint, inclindLine2endpoints);

  if (counter === 8 || drawAll) {
    let arcPoints2 = drawArc(startPoint, angle2, InclindLine2Length, division2);
    sendToPoints.push(...arcPoints2, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }



  // step-9 draw parallel line 

  let part2 = part / division2;

  if (counter === 9 || drawAll) {
    let partPoints2 = drawParallelLine(startPoint, part2, division2, angle2, InclindLine2Length);
    sendToPoints.push(...partPoints2, ...lightPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

 
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

  //step-11// Vernier Scale start

    console.log("Vernier scale");
    let vstartPoint={x:startPoint.x-part2,y:startPoint.y-leftLineLength};
    let vEndPoint={x:startPoint.x+part,y:startPoint.y-leftLineLength};
    //let vpart=Linelength(vstartPoint,vEndPoint)/division2;
    let vpart=(vEndPoint.x-vstartPoint.x)/division2;

    if (counter === 11 || drawAll) {
       sendToPoints.push(...calculateLinePointsWithCircles(vstartPoint,{x:startPoint.x,y:startPoint.y-leftLineLength}));
       sendToPoints.push(...calculateLinePointsWithCircles(vstartPoint,EndPoint(vstartPoint,90,leftLineLength)));
       sendToPoints.push(...calculateLinePointsWithCircles(vEndPoint,EndPoint(vEndPoint,90,leftLineLength)));
       sendToPoints.push(...calculateLinePointsWithCircles(EndPoint(vstartPoint,90,leftLineLength),EndPoint(vEndPoint,90,leftLineLength)));
      if (finalDrawing) {
        drawAll = true;
      }
    }
    
    let vInclineLine=drawInclindLine(EndPoint(vstartPoint,90,leftLineLength),30,200);
    if (counter === 12 || drawAll) {
      sendToPoints.push(...vInclineLine,...lightPencil);
      if (finalDrawing) {
        drawAll = true;
      }
    }

    if (counter === 13 || drawAll) {
      let vpartPoints = drawParallelLine(EndPoint(vstartPoint,90,leftLineLength),vpart,division2, 30, 200);
      sendToPoints.push(...vpartPoints, ...lightPencil);
      if (finalDrawing) {
        drawAll = true;
      }
    }
    let multipleLine3=drawMultipleLine(vstartPoint,vEndPoint,division2);
    let vdigit = [];
      for (let i = 9; i >=1; i--) {
        if(i%2==1)
        {
        vdigit.push(...label({ x: vstartPoint.x + vpart* (10-i), y: vstartPoint.y },11*i,  "left-down"));
        vdigit.push(...darkPencil);
        }
       
      }
     
    if (counter === 14 || drawAll) {
      sendToPoints.push(...multipleLine3,...darkPencil,...vdigit,...darkPencil);
      if (finalDrawing) {
        drawAll = true;
      }
    }
    if (counter === 15 || drawAll) {
   
  
     sendToPoints.push( ...WriteUnitRFAnswer(showlength1, showlength2, showlengthUnit1, 
                                            showlengthUnit2, division2, maxlengthUnit, 
                                            part, part2, SRF1, SRF2, plainScaleUnit, showlength3, 
                                            showlengthUnit3, division3,dScaleUnit,vstartPoint,vEndPoint));
      if (finalDrawing) {
        drawAll = true;
      }
    }

  


  return { points: sendToPoints, step };

}

export function scale_Steps() {
  // return {
  //   1: defineSteps("RF of given Problem is :- 1:" + SRF2,
  //     "Length of Scale is :-" + LOS + " " + plainScaleUnit,
  //     "Draw a main line  " + Maxlength + "" + plainScaleUnit + "long and divide it into " + division1 + " equal parts. for this:-"),
  //   2: defineSteps("Draw a line from start point of main line with 30 degree agle "),
  //   3: defineSteps("Cut arcs of any length " + division1 + " times",),
  //   4: defineSteps("Draw a line between last arc point and end point of line ", "Draw Parallel line from each arc point. "),
  //   5: defineSteps("Draw Perpendicular line from both end",),
  //   6: defineSteps("Make Division each representing :" + division1Count + " " + maxlengthUnit),

  //   7: defineSteps("Draw a line from start point of main line with 60 degree agle "),
  //   8: defineSteps("Cut arcs of any length " + division2 + " times",),
  //   9: defineSteps("Draw a line between last arc point and end point of fist division ", "Draw Parallel line from each arc point. ",),

  //   9: defineSteps("Divide the first part into " + division2 + "equal divisions. ",
  //     " Each division will show one " + plainScaleUnit),
  //   10: defineSteps("Draw Perpendicular line from both end",
  //     "Make Division each representing :" + division2Count + " " + plainScaleUnit),


  //   11: defineSteps("Draw a line from start point of Scale line with 30 degree agle "),
  //   12: defineSteps("Cut arcs of any length " + division3 + " times",),
  //   13: defineSteps("Draw a line between last arc point and end point of fist division ", "Draw Parallel line from each arc point. ",),
  //   14: defineSteps("Divide the first part into " + division3 + "equal divisions. ",
  //     " Each division will show one " + dScaleUnit),
  //   15: defineSteps("Draw Perpendicular line from both end",
  //     "Make Division each representing one " + dScaleUnit),

  //   11: defineSteps("draw 2 line below the scale and write units as draw",
  //     "marks points above the scale as shown in scale problem ")

  // };
  return "";
}

export function drawInclindLine(pointStart, angle, length) {
  const pointEnd = EndPoint(pointStart, angle, length);
  return calculateLinePointsWithCircles(pointStart, pointEnd, lightPencil);

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

    partPoints.push(...calculateLinePointsWithCircles(EndPoint(pointStart, 0, part * i), EndPoint(pointStart, angle, move * i), lightPencil));
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
      (EndPoint(pointStart, 0, part * i), EndPoint(EndPoint(pointStart, 0, part * i), 90, leftLineLength)));
    multipleLine.push(...darkPencil);
  }


  return multipleLine;
}

export function WriteUnitRFAnswer(showlength1, showlength2, showlengthUnit1, showlengthUnit2, division2, maxlengthUnit, 
  part, part2, SRF1, SRF2, plainScaleUnit, showlength3, showlengthUnit3, division3,dScaleUnit,vstartPoint,vEndPoint) {
  let X = { x: startPoint.x, y: startPoint.y + 100 };
  let Y = { x: endPoint.x, y: endPoint.y + 100 };
  const Unitline1 = calculateLinePointsWithCircles(X, Y,lightPencil);
  const UnitLine2 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 20 }, { x: Y.x, y: Y.y + 20 },lightPencil);
  //const Unit3line1 = calculateLinePointsWithCircles(EndPoint(vstartPoint,90,leftLineLength+50),EndPoint(vEndPoint,90,leftLineLength+50),lightPencil);
  //const Unit3line2 = calculateLinePointsWithCircles(EndPoint(vstartPoint,90,leftLineLength+70),EndPoint(vEndPoint,90,leftLineLength+70),lightPencil);
  
  let WriteUnit3=label({x:vstartPoint.x,y:vstartPoint.y-100}, drawUnit(dScaleUnit), "down");
  let WriteUnit1 = label(Y, drawUnit(maxlengthUnit), "End-Start");
  let WriteUnit2 = label(X, drawUnit(plainScaleUnit), "down");

  let RFX = { x: startPoint.x, y: startPoint.y + 200 };
  let RFY = { x: endPoint.x, y: endPoint.y + 200 };
  const RFLine1 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 100 }, { x: Y.x, y: Y.y + 120 });
  const RFLine2 = calculateLinePointsWithCircles({ x: X.x, y: Y.y + 120 }, { x: Y.x, y: Y.y + 120 });
  const WriteRF = label({ x: X.x + 300, y: Y.y + 120 }, "RF" + SRF1 + ":" + SRF2, "down");
  
  let vpart=(vEndPoint.x-vstartPoint.x)/division2;
 let V = { x: vstartPoint.x + vpart*showAnswer(showlength2,"ver"), y: vstartPoint.y - 100 };
  //let V = { x: vstartPoint.x + vpart*1, y: vstartPoint.y - 120 };
  let M = { x: startPoint.x + part *(showAnswer(showlength2,"main")+1)+part2*showAnswer(showlength2,"main1"), y: vstartPoint.y - 100 }
  
  let answerLine = [];
  answerLine.push(...calculateLinePointsWithCircles(V, M, lightPencil))
  answerLine.push(...label(V, "<", "exact"));
  answerLine.push(...label(M, ">", "exact"));
  answerLine.push(...darkPencil);
  answerLine.push(...showAnswer(showlength2,"calculation"));
  answerLine.push(...darkPencil);
  const answerUnit = label(
   { x: V.x + (M.x - V.x) / 2, y: V.y },
   showlength2 + " " + showlengthUnit2 ,
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
 // ...Unit3line1,
  //...Unit3line2,
  ...WriteUnit3,

  ];



}
 export function showAnswer(len,S)
 {
  let temp=len*100;
  let d3 =temp%10;
  let d2 =d3*10+d3;
  let d1= len-(d2/100);
  
  
  if(S==="ver")
      return (10-d3);
  if(S==="main")  
    return (((d1*10)-(d1*10)%10)/10);
  if(S==="calculation")
    return (label({x:700,y:50},"="+(d2/100)+"+"+d1, "down"));
  else
   return (d1*10)%10;
 }

export function DScale1(counter, drawAll, part, part2, division2, division3) {
  //step-10

  return 0
}