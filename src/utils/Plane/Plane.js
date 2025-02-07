import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { calculateAngle, defineSteps, calculateLinePointsWithCircles, calculateAngledLinePoints, calculateDistance, calculateAngleInDegrees, GenerateFullCircle } from "@/utils/functionHelper";
import { FindAngle, ArcPoints, EndPoint, Linelength, Angle, label, anglepoint } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, rotating, superDarkPencil } from "@/utils/globalVariable";



let startPoint = { x: 100, y: 300 };
let endPoint = { x: 800, y: 300 };

let A1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
let B1 = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'", "k'", "l'"]

let A2 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1", "k1", "l1"]
let B2 = ["a1'", "b1'", "c1'", "d1'", "e1'", "f1'", "g1'", "h1'", "i1'", "j1'", "k1'", "l1'"]

let A3 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2", "k2", "l2"]
let B3 = ["a2'", "b2'", "c2'", "d2'", "e2'", "f2'", "g2'", "h2'", "i2'", "j2'", "k2'", "l2'"]


let vpInclinde = 60;

let tvStartPoint;
let fvStartPoint;
let tv2StartPoint;
let fv2StartPoint;
let tv3StartPoint;
let fv3StartPoint;



export function Calculation(PlaneName, side, sideCorner, inParallel, shapeAt, hpInclinde, vpInclinde) {

  startPoint = { x: 100, y: 500 + ((side-50)*3) };
  endPoint = { x: 800 + side*25, y: 500 + ((side-50)*3) };
  //default value
  // if(PlaneName=="Circle")
  //     side=5;
  let shapeEdge = side * 2;
  let hAway = shapeEdge;
  let vAway = shapeEdge * 3;
  let shape = TypeOfPlane(PlaneName);
  let move = 360 / shape;
  console.log("move:", move);
  let angle = 90;

  if (sideCorner == "Corner")
    angle = CornerAngle(PlaneName);
  //angle=move;

  if (shapeAt == "VP") {
    if (inParallel === "in")
      vAway = 0;

    hpInclinde = 360 - vpInclinde;
    vpInclinde = 360 - hpInclinde;

    tvStartPoint = { x: startPoint.x + 50, y: startPoint.y - hAway };
    fvStartPoint = { x: startPoint.x + 50, y: startPoint.y + vAway };

    tv2StartPoint = { x: tvStartPoint.x + side * 5, y: startPoint.y - hAway };
    fv2StartPoint = { x: fvStartPoint.x + side * 5, y: startPoint.y + vAway };

    tv3StartPoint = { x: tv2StartPoint.x + side * 5, y: startPoint.y - hAway };
    fv3StartPoint = { x: fv2StartPoint.x + side * 5, y: startPoint.y + vAway };
  }
  else {
    if (inParallel === "in")
      hAway = 0;

    tvStartPoint = { x: startPoint.x + 50, y: startPoint.y + vAway };
    fvStartPoint = { x: startPoint.x + 50, y: startPoint.y - hAway };

    tv2StartPoint = { x: tvStartPoint.x + side * 5, y: startPoint.y + vAway };
    fv2StartPoint = { x: fvStartPoint.x + side * 5, y: startPoint.y - hAway };

    tv3StartPoint = { x: tv2StartPoint.x + side * 5, y: startPoint.y + vAway };
    fv3StartPoint = { x: fv2StartPoint.x + side * 5, y: startPoint.y - hAway };
  }

  let updatedInputs = {
    shapeEdge: shapeEdge,
    angle: angle,
    move: move,
    hAway: hAway,
    vAway: vAway,
    shape: shape,
    hpInclinde: hpInclinde,
    vpInclinde: vpInclinde
  }

  console.log("updatedInputs", updatedInputs);
  return updatedInputs;

}


export function Plane(payload) {

  let sendToPoints = [];
  const { counter, finalDrawing } = payload;
 

  const PlaneType = payload.inputs["Plane Type"];
  const PlaneSideLength = payload.inputs["Side Length"];

  const PlanePosition1 = payload.inputs["Plane Position"];
  const PlanePosition2 = payload.inputs["Plane in/parallel Postion"];
  const PlanePosition3 = payload.inputs["Plane HP/VP Postion"];

  const PlaneHPAngle = payload.inputs["Incline With HP"];
  const PlaneVPAngle = payload.inputs["Inclined With VP"];

  //assigmnet
  let PlaneName = PlaneType;
  let side = PlaneSideLength;
  let sideCorner = PlanePosition1;
  let inParallel = PlanePosition2;
  let shapeAt = PlanePosition3;

  console.log("corner", payload);

  let {
    shapeEdge,
    angle,
    move,
    shape,
    hpInclinde,
    vpInclinde
   } = Calculation(PlaneName, side, sideCorner, inParallel, shapeAt, PlaneHPAngle, PlaneVPAngle);
  let drawAll = false;
  if (counter === 1 || drawAll) {
    //step-1 Draw Main Line
    sendToPoints.push(...calculateLinePointsWithCircles(startPoint, endPoint), ...darkPencil)
    if (finalDrawing) {
      drawAll = true;
    }
  }
  console.log("counter1");

  //step-2  draw true shap 
  if (PlaneName == "Circle") {
    shape = 12;
  }
  let tvEndPoint = drawshape(tvStartPoint, angle, shapeEdge, PlaneName, move, shape);


  if (counter === 2 || drawAll) {
    sendToPoints.push(...drawshape1(tvEndPoint, PlaneName, shape), ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-3 draw line for FV and Draw FV
  let fvEndPoint = [];

  for (let i = 1; i <= shape; i++) {
    fvEndPoint[i] = { x: tvEndPoint[i].x, y: fvStartPoint.y }
  }


  if (counter === 3 || drawAll) {
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(tvEndPoint[i], fvEndPoint[i], lightPencil));
      sendToPoints.push(...lightPencil);
    }
    for (let i = 1; i < shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(fvEndPoint[i], fvEndPoint[i + 1], darkPencil));
      sendToPoints.push(...darkPencil);
      // sendToPoints.push(...label(fvEndPoint[i], B1[i - 1], "up"));
    }
    sendToPoints.push(...LabelPrint(fvEndPoint, B1, shape));
    if (finalDrawing) {
      drawAll = true;
    }
  }

  // 2nd Diagrame step-4 draw FV inclined to HP 
  let fv2EndPoint = [];
  fv2EndPoint[1] = { x: fv2StartPoint.x, y: fv2StartPoint.y };
  let fvlength, fvPointsLength = [];
  let max = startPoint.x, min = endPoint.x;
  for (let i = 1; i <= shape; i++) {
    if (max < fvEndPoint[i].x)
      max = fvEndPoint[i].x;
    if (min > fvEndPoint[i].x)
      min = fvEndPoint[i].x;
  }
  fvlength = max - min;

  let fv2lable = [];
  for (let i = 1; i <= shape; i++) {

    fvPointsLength[i] = Linelength(fvEndPoint[1], fvEndPoint[i]);
    fv2EndPoint[i] = EndPoint(fv2EndPoint[1], hpInclinde, fvPointsLength[i]);
  }
  fv2lable.push(...LabelPrint(fv2EndPoint, A2, shape));


  if (counter === 4 || drawAll) {

    const merger = calculateLinePointsWithCircles(fvEndPoint[1], EndPoint(fvEndPoint[1], 0, fvlength + 200), lightPencil);
    let angleLinePoints;

    angleLinePoints = calculateLinePointsWithCircles(fv2EndPoint[1], EndPoint(fv2EndPoint[1], hpInclinde, fvlength), darkPencil);

    
    sendToPoints.push(...merger, ...lightPencil, ...angleLinePoints, ...darkPencil, ...fv2lable)
  }


  //cross point TV inclined to HP
  let tv2EndPoint = [];
  for (let i = 1; i <= shape; i++) {
    tv2EndPoint[i] = { x: fv2EndPoint[i].x, y: tvEndPoint[i].y }
  }
  if (counter === 5 || counter === 6 || counter === 7 || drawAll) {

    let secondLinePointTemp = [];
    let majorCircleDivisions1 = [];
    if(PlaneName=="Circle"){
    
      majorCircleDivisions1 = generateCircle({x: tvStartPoint.x + shapeEdge, y: tvStartPoint.y}, shapeEdge, 1);
      let fvEndPointTemp = [];
      for (let i = 1; i <= majorCircleDivisions1.length-1; i++) {
        fvEndPointTemp[i] = { x: majorCircleDivisions1[i].x, y: fvStartPoint.y }
      }
      console.log("hpInclinde: "+hpInclinde);
      secondLinePointTemp = drawAngledShape(fv2EndPoint[1], 180- (90 - hpInclinde), fvEndPointTemp, fvEndPointTemp.length-1, fvEndPointTemp[1]);
        
    }
  if (counter === 5 || drawAll) {

    // step-5 vertical line 
    let verticalLine = [], Y = MaxMinY(tvEndPoint, 2, shapeAt, shape);

    for (let i = 1; i <= shape; i++) {
      verticalLine.push(...calculateLinePointsWithCircles(fv2EndPoint[i], { x: fv2EndPoint[i].x, y: Y }, lightPencil));
      verticalLine.push(...lightPencil);
    }

    //horizatal line
    let horizontalLine = [];
    for (let i = 1; i <= shape; i++) {
      horizontalLine.push(...calculateLinePointsWithCircles(tvEndPoint[i], { x: tv3StartPoint.x - 75, y: tv2EndPoint[i].y }, lightPencil));
      horizontalLine.push(...lightPencil);
    }
    let tv2LinePoints = [];
    

    if(PlaneName=="Circle"){
      
      for (let i = 1; i <= secondLinePointTemp.length-2; i++) {
        tv2LinePoints.push(...[{ x: secondLinePointTemp[i].x, y: majorCircleDivisions1[i].y }, { x: secondLinePointTemp[i+1].x, y: majorCircleDivisions1[i+1].y }]);
        tv2LinePoints.push(lightPencil);
      }
    } else {
      tv2LinePoints.push(...drawshapeAfterPoints(tv2EndPoint, A2));
    }
    tv2LinePoints.push(...LabelPrint(tv2EndPoint, A2, shape));

    //sendToPoints.push(...verticalLine, ...lightPencil, ...horizontalLine, ...lightPencil, ...LabelPrint(tv2EndPoint,A2),...lightPencil,...rotating, ...rotating, ...lightPencil, ...tv2LinePoints, ...darkPencil)
    //if(hpInclinde!==0)
    sendToPoints.push(...verticalLine, ...lightPencil, ...horizontalLine, ...lightPencil, ...lightPencil, ...tv2LinePoints, ...darkPencil)


    if (finalDrawing) {
      drawAll = true;
    }
  }

  // step-6 ,3rd digram
  let tv3EndPoint = [];
  let tv3LinePoints = [];

  tv3EndPoint = drawAngledShape(tv3StartPoint, vpInclinde, tv2EndPoint, shape, tv2EndPoint[1]);



  if (counter === 6 || drawAll) {

    console.log("Drawing six counter");

    if(PlaneName=="Circle"){
      let tv2LinePoints = [];
      for (let i = 1; i <= secondLinePointTemp.length-2; i++) {
        tv2LinePoints.push({x: secondLinePointTemp[i].x, y: majorCircleDivisions1[i].y });       
      }
      let tv3EndPointTemp = drawAngledShape(tv3StartPoint, vpInclinde, tv2LinePoints, tv2LinePoints.length-1, tv2LinePoints[1]);
      for (let i = 1; i < tv3EndPointTemp.length; i++) {
        tv3LinePoints.push(tv3EndPointTemp[i]);
      }
      tv3LinePoints.push(tv3EndPointTemp[1]);
    } else {
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;

      tv3LinePoints.push(...calculateLinePointsWithCircles(tv3EndPoint[i], tv3EndPoint[j]));
      tv3LinePoints.push(...darkPencil);

    }
  }
    tv3LinePoints.push(...LabelPrint(tv3EndPoint, A3, shape));
    sendToPoints.push(...tv3LinePoints, ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }
  //cross point
  let fv3EndPoint = [];
  for (let i = 1; i <= shape; i++) {
    fv3EndPoint[i] = { x: tv3EndPoint[i].x, y: fv2EndPoint[i].y };
  }


  if (counter === 7 || drawAll) {
    //vertical line
    let verticalLine3 = [], Y = MaxMinY(fv2EndPoint, 3, shapeAt, shape);
    for (let i = 1; i <= shape; i++) {
      verticalLine3.push(...calculateLinePointsWithCircles(tv3EndPoint[i], { x: tv3EndPoint[i].x, y: Y }, lightPencil));
      verticalLine3.push(...lightPencil);
    }

    //horizatal line
    let horizontalLine3 = [];
    for (let i = 1; i <= shape; i++) {
      horizontalLine3.push(...calculateLinePointsWithCircles(fv2EndPoint[i], { x: tv3StartPoint.x + shapeEdge * 3, y: fv2EndPoint[i].y }, lightPencil));
      horizontalLine3.push(...lightPencil);
    }

    let fv3LinePoints = [];
    if(PlaneName=="Circle"){
      let tv2LinePoints = [];
      for (let i = 1; i <= secondLinePointTemp.length-2; i++) {
        tv2LinePoints.push({x: secondLinePointTemp[i].x, y: majorCircleDivisions1[i].y });       
      }
      let tv3EndPointTemp = drawAngledShape(tv3StartPoint, vpInclinde, tv2LinePoints, tv2LinePoints.length-1, tv2LinePoints[1]);
      for (let i = 1; i < tv3EndPointTemp.length; i++) {
        fv3LinePoints.push({x: tv3EndPointTemp[i].x, y: secondLinePointTemp[i].y});
      }
      fv3LinePoints.push({x: tv3EndPointTemp[1].x, y: secondLinePointTemp[1].y});
    } else {
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      fv3LinePoints.push(...calculateLinePointsWithCircles(fv3EndPoint[i], fv3EndPoint[j]));
      fv3LinePoints.push(...darkPencil);

    }
  }
    fv3LinePoints.push(...LabelPrint(fv3EndPoint, B3, shape));
    sendToPoints.push(...verticalLine3, ...lightPencil, ...horizontalLine3, ...lightPencil, ...fv3LinePoints, ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }
}
const steps = Plane_Steps(PlaneName,shapeAt,sideCorner,inParallel, hpInclinde, vpInclinde);
  const step = drawAll
    ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
    : steps[counter];

// const steps = Plane_Steps(PlaneName,shapeAt,sideCorner,inParallel); // Generate steps dynamically
// let step = steps[counter];
  return { points: sendToPoints, step };

}

export function calculateLinePoints(startPoint, endPoint) {
  const points = [];
  // Calculate the difference in x and y
  const deltaX = endPoint.x - startPoint.x;
  const deltaY = endPoint.y - startPoint.y;
  // Determine the step size for x and y
  const xStep = deltaX / (360 - 1);
  const yStep = deltaY / (360 - 1);
  // Generate points along the line
  for (let i = 0; i < 360; i++) {
    points.push({
      x: startPoint.x + i * xStep,
      y: startPoint.y + i * yStep,
    });
  }
  // Add circles at the start and end points
  return points;
}

export function drawshapeAfterPoints(baseArray, labelArray) {

  let shapeLinePoints = [];

  for (let i = 1; i < baseArray.length; i++) {
    let j = i + 1;
    if (j == baseArray.length)
      j = 1;
    shapeLinePoints.push(...calculateLinePointsWithCircles(baseArray[i], baseArray[j]));
    shapeLinePoints.push(...label(baseArray[i], labelArray[i - 1], "up"));

  }
  return shapeLinePoints;
}

export function drawshape(shapeStartPoint, firstAngle, sideLength, PlaneName, move, shape) {
  let tvEndPoint = [];
  tvEndPoint[1] = shapeStartPoint;
  console.log("shape: ", shape);
  
  let width=60; 
  if (PlaneName == "Rhombus"){
      return drawRhombus(shapeStartPoint);
  }
  if (shape == 12) {
    let majorCircleDivisions = generateCircle({x: shapeStartPoint.x + sideLength, y: shapeStartPoint.y}, sideLength, 30);
    console.log("majorCircleDivisions: ", majorCircleDivisions.length);
    for (let i = 1; i <= shape; i++) {
      tvEndPoint[i] = majorCircleDivisions[i-1];
    }
  } else {

    for (let i = 1; i <= shape; i++) {
      if (PlaneName == "Rectangle" && i%2===0){
        tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, width);
      }
      else{
        tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, sideLength);
      }
      firstAngle = firstAngle - move;

    }
  }
  return tvEndPoint;
}

export function generateCircle(midpoint, radius, angleDistance) {
    
  let eclipsePoints = [];
  //eclipsePoints.push({x: 0, y: 0});
  for (let i = 180; i < 540; i+=angleDistance) {

      let endPoint1 = {
          x: calculateAngledLinePoints(midpoint, i, radius).x,
          y: calculateAngledLinePoints(midpoint, i, radius).y
      }
      eclipsePoints.push(endPoint1);      

  }

  return eclipsePoints;
}

export function GenerateFullCirclePlane(center, radius) {
    const numPoints = 540; // Total points for the circle
    const circlePoints = [];
    let startPoint1 = {};
    for (let i = 180; i < numPoints; i++) {
  
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
  export function drawRhombus(shapeStartPoint)
{
  let tvEndPoint = [],d1=100,d2=40;
  tvEndPoint[1] = shapeStartPoint;
  tvEndPoint[2] ={x:250,y:350};
  //tvEndPoint[2] =EndPoint({x:shapeStartPoint.x+(d1/2),y:shapeStartPoint.y},90,d2/2);
  tvEndPoint[3] ={x:200,y:330};
   //tvEndPoint[3] = EndPoint(tvEndPoint[1],0,d1);
  
  //tvEndPoint[4] =EndPoint({x:shapeStartPoint.x+(d1/2),y:shapeStartPoint.y},(-90),d2/2);
  tvEndPoint[4] ={x:200,y:370};

return tvEndPoint;

}

export function drawshape1(tvEndPoint, PlaneName, shape) {
  console.log(tvEndPoint);
  let tvLinePoints1 = [], j = 1;
  if (PlaneName == "Circle") {
    tvLinePoints1.push(...GenerateFullCirclePlane({x: tvStartPoint.x + (Math.abs(tvEndPoint[1].x - tvEndPoint[7].x))/2, y: tvEndPoint[1].y}, (tvEndPoint[1].x - tvEndPoint[7].x)/2));
    tvLinePoints1.push(...darkPencil);
  } else {

  for (let i = 1; i <= shape; i++) {

    
      tvLinePoints1.push(...calculateLinePointsWithCircles(tvEndPoint[i], tvEndPoint[i + 1]));
      tvLinePoints1.push(...darkPencil);
      //tvLinePoints1.push(...label(tvEndPoint[i], A1[i - 1], "up"));
    }

  }
  //console.log(tvLinePoints1);
  tvLinePoints1.push(...LabelPrint(tvEndPoint, A1, shape));
  return tvLinePoints1;
}


export function drawAngledShape(anchorPoint, angleOfInclination, shapeArray, noOfSides, angleAnchorPoint) {
  console.log("drawAngledShape=", anchorPoint, angleOfInclination, shapeArray.length, noOfSides, angleAnchorPoint);
  let angledObjectArray = [];
  //angledObjectArray[1] = {x:anchorPoint.x, y: anchorPoint.y};
  for (let i = 1; i <= noOfSides; i++) {
    //console.log("angledObjectArray: i=",i);
    // let j = i + 1;
    // if (j > shape1) {
    //   j = 1;
    // }
    let distance = calculateDistance(angleAnchorPoint, shapeArray[i]);
    let angle = calculateAngleInDegrees(angleAnchorPoint, shapeArray[i]);
    let nextPoint = calculateAngledLinePoints(anchorPoint, -angle - (90 - angleOfInclination), distance);
    //console.log("distance: ", distance, ", angle: ",  angle, ", nextPoint: ", nextPoint);
    //sendToPoints.push(...calculateLinePointsWithCircles(previousPoint1, nextPoint));
    angledObjectArray[i] = { x: nextPoint.x, y: nextPoint.y };

  }
  console.log("angledObjectArray: ", angledObjectArray);
  return angledObjectArray;
}


export function Plane_Steps(PlaneName,shapeAt,sideCorner,inParallel, hpInclinde, vpInclinde) {

  return {
    1: defineSteps("Draw a XY Line where Top View of " + PlaneName + " draw below XY Line and Front View of the " + PlaneName + " draw above XY Line "),

    2: defineSteps("Draw "+stepReturn("view", PlaneName, shapeAt, sideCorner)+" of " + PlaneName +
      " where "+stepReturn("sideCorner", PlaneName, shapeAt, sideCorner)+" " +inParallel+" to "+shapeAt),
    3: defineSteps("Project  "+stepReturn("view", PlaneName, shapeAt, sideCorner)+" of " + PlaneName + " "+stepReturn("1st view", PlaneName, shapeAt, sideCorner)+" to XY "),
    4: defineSteps(" Now  reproduce second "+stepReturn("view", PlaneName, shapeAt, sideCorner) + " in such way that it makes angle of "+hpInclinde+" degree with xy"),
    5: defineSteps("Project second "+stepReturn("view", PlaneName, shapeAt, sideCorner)+" of " + PlaneName + " "+stepReturn("2nd view", PlaneName, shapeAt, sideCorner)+" to XY "),
    6: defineSteps("Now  rotate third "+stepReturn("view", PlaneName, shapeAt, sideCorner) + " in such way that its"+sideCorner+
       " makes angle of "+vpInclinde+" with xy"),
    7: defineSteps("Project final "+stepReturn("view", PlaneName, shapeAt)+" of " + PlaneName + " "+stepReturn("1st view", PlaneName, shapeAt, sideCorner)+" to XY "),
  };
}

export function stepReturn(text2, PlaneName, shapeAt, sideCorner)
{
   if(shapeAt==="HP" && text2==="view")
    return " Top View";
   if(shapeAt==="VP" && text2==="view")
    return " front View";
   
  if(sideCorner = "corner" && text2==="sideCorner")
    return " one of its Corner of "+PlaneName+ " is";
  if(sideCorner = "Side" && text2==="sideCorner")
    return " a Side of "+PlaneName+ " is";
  
  if(shapeAt==="HP" && text2==="1st view")
    return " above";
  if(shapeAt==="VP" && text2==="1st view")
    return " below";

  if(shapeAt==="HP" && text2==="2nd view")
    return " below";
  if(shapeAt==="VP" && text2==="2nd view")
    return " above";


   return 0;
}
export function TypeOfPlane(PlaneName) {
  let type;
  if (PlaneName === "Traingle")
    type = 3;
  if (PlaneName === "Square")
    type = 4;
  if (PlaneName === "Rectangle")
    type = 4;
  if (PlaneName === "Rhombus")
    type = 4;
  if (PlaneName === "Pentagone")
    type = 5;
  if (PlaneName === "Hexagone")
    type = 6;
  if (PlaneName === "Circle")
    type = 16;
  if (PlaneName === "Eclipse")
    type = 16;

  return type;
}

export function CornerAngle(PlaneName) {
  let angle;
  if (PlaneName === "Traingle")
    angle = 30;
  if (PlaneName === "Square")
    angle = 45;
  if (PlaneName === "Rectangle")
    angle = 45;
  if (PlaneName === "Rhombus")
    angle = 45;
  if (PlaneName === "Pentagone")
    angle = 54;
  if (PlaneName === "Hexagone")
    angle = 60;
  if (PlaneName === "Circle")
    angle = (((16 - 2) * 180) / shape) / 2;;
  if (PlaneName === "Eclipse")
    angle = (((16 - 2) * 180) / shape) / 2;;

  return angle;
}
export function MaxMinY(Points = [], step, shapeAt, shape) {
  let min = 1000, max = 0;
  for (let i = 1; i <= shape; i++) {
    if (max < Points[i].y)
      max = Points[i].y;
    if (min > Points[i].y)
      min = Points[i].y;
  }
  if (shapeAt == "HP") {
    if (step == 2)
      return max + 20;
    else
      return min - 20;

  }
  else {
    if (step == 2)
      return min - 20;
    else
      return max + 20;

  }

}

export function LabelPrint(Points = [], box, shape) {
  let k = 1, printLabel = [], match = "No";

  for (let i = 1; i <= shape; i++) {
    for (let j = i + 1; j <= shape; j++) {
      if (j > shape)
        break;
      else {
        if ((Points[i].x == Points[j].x) && (Points[i].y == Points[j].y)) {
          printLabel.push(...label(Points[i], box[i - 1], "left-up"));
          // printLabel.push(...label(Points[j], box[j - 1], "right-up"));
          match = "Yes";
          break;
        }
      }
    }
    if (match == "No") {
      //{x: Points[i] +170, y: Points[i].y - 390}
      printLabel.push(...label(Points[i], box[i - 1], "right-up"));

    }
    match = "No";
  }
  console.log("method call", printLabel);
  return printLabel;

}
