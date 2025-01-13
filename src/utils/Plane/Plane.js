import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { calculateAngle, defineSteps, calculateLinePointsWithCircles, calculateAngledLinePoints, calculateDistance, calculateAngleInDegrees } from "@/utils/functionHelper";
import { FindAngle, ArcPoints, EndPoint, Linelength, Angle, label, anglepoint } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, rotating, superDarkPencil } from "@/utils/globalVariable";



const startPoint = { x: 100, y: 300 };
const endPoint = { x: 800, y: 300 };

let A1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
let B1 = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'"]

let A2 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"]
let B2 = ["a1''", "b1''", "c1''", "d1''", "e1''", "f1''", "g1''", "h1''", "i1''", "j1''"]

let A3 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"]
let B3 = ["a2'''", "b2'''", "c2'''", "d2'''", "e2'''", "f2'''", "g2'''", "h2'''", "i2'''", "j2'''"]

//Global Variable
let PlaneName;
let side = 25;
let sideCorner = "corner";//position1
let inParallel = "Parallel"//Position2
let shapeAt = "HP";//position3
let hpInclinde = 30;
let vpInclinde = 60;

let tvStartPoint;
let fvStartPoint;
let tv2StartPoint;
let fv2StartPoint;
let tv3StartPoint;
let fv3StartPoint;
let circleEndPoint=[];

let shapeEdge, angle, move, shape, hAway, vAway;

export function Calculation() {
  //default value
  if(PlaneName=="Circle")
      side=5;
  shapeEdge = side * 1.5;
  hAway = 100;
  vAway = 100;
  shape = TypeOfPlane(PlaneName);
  move = 360 / shape;
  console.log("move:", move);
  angle = 90;




  if (sideCorner == "Corner")
    angle = CornerAngle(PlaneName);
  //angle=move;



  if (shapeAt == "VP") {
    if (inParallel === "in")
      vAway = 0;

    hpInclinde = 360 - hpInclinde;

    tvStartPoint = { x: startPoint.x + 50, y: startPoint.y - hAway };
    fvStartPoint = { x: startPoint.x + 50, y: startPoint.y + vAway };

    tv2StartPoint = { x: startPoint.x + 250, y: startPoint.y - hAway };
    fv2StartPoint = { x: startPoint.x + 250, y: startPoint.y + vAway };

    tv3StartPoint = { x: startPoint.x + 450, y: startPoint.y - hAway };
    fv3StartPoint = { x: startPoint.x + 450, y: startPoint.y + vAway };
  }
  else {
    if (inParallel === "in")
      hAway = 0;

    tvStartPoint = { x: startPoint.x + 50, y: startPoint.y + vAway };
    fvStartPoint = { x: startPoint.x + 50, y: startPoint.y - hAway };

    tv2StartPoint = { x: startPoint.x + 250, y: startPoint.y + vAway };
    fv2StartPoint = { x: startPoint.x + 250, y: startPoint.y - hAway };

    tv3StartPoint = { x: startPoint.x + 450, y: startPoint.y + vAway };
    fv3StartPoint = { x: startPoint.x + 450, y: startPoint.y - hAway };
  }

}




export function Plane(payload) {

  let sendToPoints = [];
  const { counter, finalDrawing } = payload;
  const steps = Plane_Steps(); // Generate steps dynamically
  let step = steps[counter];



  const PlaneType = payload.inputs["Plane Type"];
  const PlaneSideLength = payload.inputs["Side Length"];

  const PlanePosition1 = payload.inputs["Plane Position"];
  const PlanePosition2 = payload.inputs["Plane in/parallel Postion"];
  const PlanePosition3 = payload.inputs["Plane HP/VP Postion"];

  const PlaneHPAngle = payload.inputs["Incline With HP"];
  const PlaneVPAngle = payload.inputs["Inclined With VP"];

  //assigmnet
  PlaneName = PlaneType;
  side = PlaneSideLength;
  sideCorner = PlanePosition1;
  inParallel = PlanePosition2;
  shapeAt = PlanePosition3;
  hpInclinde = PlaneHPAngle;
  vpInclinde = PlaneVPAngle;
  console.log("corner", payload);

  Calculation();
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

  let tvEndPoint = drawshape(tvStartPoint, angle, shapeEdge);
  

  if (counter === 2 || drawAll) {
    sendToPoints.push(...drawshape1(tvEndPoint), ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-3 draw line for FV and Draw FV
  let fvEndPoint = [];
  if(PlaneName=="Circle")
  {
       shape=8;
       for (let i = 1; i <= shape; i++) 
       {
          tvEndPoint[i]=circleEndPoint[i];
       }
  }
        
  for (let i = 1; i <= shape; i++) 
  {
         fvEndPoint[i] = { x: tvEndPoint[i].x, y: fvStartPoint.y }
         //fvEndPoint[i] = { x: circleEndPoint[i].x, y: fvStartPoint.y }
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
    sendToPoints.push(...LabelPrint(fvEndPoint,B1));
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
  fv2lable.push(...LabelPrint(fv2EndPoint,A2));


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

  if (counter === 5 || drawAll) {
    
    // step-5 vertical line 
    let verticalLine = [], Y = MaxMinY(tvEndPoint, 2);

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
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      console.log("old point: ", tv2EndPoint[i]);
console.log("new point: ", {x: tv2EndPoint[i].x + 155, y: tv2EndPoint[i].y - 230});
let distance = calculateDistance({x:0, y:0}, tv2EndPoint[i]);
console.log("distance1 = ", distance);
console.log("1", calculateAngledLinePoints({x: 0, y: 0}, 18.81407483429035, distance));
console.log("2",calculateAngledLinePoints({x: 0, y: 0}, 3.81407483429035, distance));
console.log("3",calculateAngledLinePoints({x: 0, y: 0}, 210, distance));
console.log("4",calculateAngledLinePoints({x: 0, y: 0}, 300, distance));
console.log("angleOriginal",calculateAngleInDegrees({x:0, y:0}, tv2EndPoint[i]));
console.log("angleNew",calculateAngleInDegrees({x:0, y:0},{x: tv2EndPoint[i].x + 155, y: tv2EndPoint[i].y - 230}));

      //original
       tv2LinePoints.push(...calculateLinePointsWithCircles({x: tv2EndPoint[i].x, y: tv2EndPoint[i].y}, {x: tv2EndPoint[j].x, y: tv2EndPoint[j].y}, darkPencil));
      //45degree
      // tv2LinePoints.push(...calculateLinePointsWithCircles({x: tv2EndPoint[i].x + 180.33, y: tv2EndPoint[i].y - 365}, {x: tv2EndPoint[j].x + 180.33, y: tv2EndPoint[j].y - 365}, darkPencil));
      //60 degree
      // tv2LinePoints.push(...calculateLinePointsWithCircles({x: tv2EndPoint[i].x + 153.109, y: tv2EndPoint[i].y - 228.59}, {x: tv2EndPoint[j].x + 153.109, y: tv2EndPoint[j].y - 228.59}, darkPencil));
      //60 degree away
      // tv2LinePoints.push(...calculateLinePointsWithCircles({x: tv2EndPoint[i].x + 325, y: tv2EndPoint[i].y - 270}, {x: tv2EndPoint[j].x + 325, y: tv2EndPoint[j].y - 270}, darkPencil));
      
      // tv2LinePoints.push(...darkPencil);
      tv2LinePoints.push(...LabelPrint(tv2EndPoint,A2));
     
    }  


    
    //sendToPoints.push(...verticalLine, ...lightPencil, ...horizontalLine, ...lightPencil, ...LabelPrint(tv2EndPoint,A2),...lightPencil,...rotating, ...rotating, ...lightPencil, ...tv2LinePoints, ...darkPencil)
    sendToPoints.push(...verticalLine, ...lightPencil, ...horizontalLine, ...lightPencil, ...lightPencil, ...tv2LinePoints, ...darkPencil)
    

    // let previousPoint1 = tv2EndPoint[1];
    // for (let i = 1; i <= shape; i++) {
    //   let j = i + 1;
    //   if (j > shape) j = 1;
    //   console.log("j: ", tv2EndPoint[1], tv2EndPoint[j]);
    //   let distance = calculateDistance(tv2EndPoint[1], tv2EndPoint[j]);
    //   let angle = calculateAngleInDegrees(tv2EndPoint[1], tv2EndPoint[j]);
    //   let nextPoint  = calculateAngledLinePoints(tv2EndPoint[1], -angle - 45, distance);
    //   console.log("distance: ", distance, ", angle: ",  angle, ", nextPoint: ", nextPoint);
    //   //sendToPoints.push(...calculateLinePointsWithCircles(previousPoint1, nextPoint));
    //   //sendToPoints.push(...calculateLinePointsWithCircles({x:previousPoint1.x+200, y: previousPoint1.y}, {x:nextPoint.x+200, y: nextPoint.y}));
    //   previousPoint1 = nextPoint;
      
    // }


    // let anchorPoint = tv2EndPoint[1];
    // let previousPoint2 = tv2EndPoint[1];
    // for (let i = 1; i <= shape; i++) {
    //   let j = i + 1;
    //   if (j > shape) j = 1;
    //   console.log("j: ", anchorPoint, tv2EndPoint[j]);
    //   let distance = calculateDistance(anchorPoint, tv2EndPoint[j]);
    //   let angle = calculateAngleInDegrees(anchorPoint, tv2EndPoint[j]);
    //   let nextPoint  = calculateAngledLinePoints(anchorPoint, -angle - (90 - vpInclinde), distance);
    //   console.log("distance: ", distance, ", angle: ",  angle, ", nextPoint: ", nextPoint);
    //   //sendToPoints.push(...calculateLinePointsWithCircles(previousPoint1, nextPoint));
    //   sendToPoints.push(...calculateLinePointsWithCircles({x:previousPoint2.x+200, y: previousPoint2.y}, {x:nextPoint.x+200, y: nextPoint.y}));
    //   previousPoint2 = nextPoint;
      
    // }

    if (finalDrawing) {
      drawAll = true;
    }
  }

  // step-6 ,3rd digram
  let tv3EndPoint = [];
  let tv3LinePoints = [];
  //tv3EndPoint[1] = tv3StartPoint;
  tv3EndPoint = drawAngledShape(tv3StartPoint, vpInclinde, tv2EndPoint);
  // let angle3,
  //   tv3length = [],
  //   inclinedAngle = 90 - vpInclinde,
  //   newangle = vpInclinde
  // for (let i = 1; i <= shape; i++) {
  //   let j = i + 1;
  //   if (j > shape) j = 1;

  //   tv3length[i] = Linelength(tv2EndPoint[i], tv2EndPoint[j]);
  //   tv3EndPoint[j] = EndPoint(tv3EndPoint[i], newangle, tv3length[i]);

  //   let y2 = 0;
  //   if (j === shape) {
  //     tv3length[j] = Linelength(tv2EndPoint[j], tv2EndPoint[1]);
  //     angle3 = anglepoint(tv2EndPoint[j], tv2EndPoint[1], tv3length[j]);
  //     y2 = tv2EndPoint[1].y;

  //   }
  //   else {
  //     tv3length[j] = Linelength(tv2EndPoint[j], tv2EndPoint[j + 1]);
  //     angle3 = anglepoint(tv2EndPoint[j], tv2EndPoint[j + 1], tv3length[j]);
  //     y2 = tv2EndPoint[j + 1].y;

  //   }

  //   let y1 = tv2EndPoint[j].y;
  //   newangle = y1 > y2 ? angle3 - inclinedAngle : 360 - angle3 - inclinedAngle;
  //   // if (i > 1)
  //   //   tv3LinePoints.push(...calculateLinePointsWithCircles(tv3EndPoint[i], tv3EndPoint[j]));
  //   // tv3LinePoints.push(...darkPencil);
  //   // tv3LinePoints.push(...label(tv3EndPoint[i], A3[i - 1], "up"));
  // }

  
  if (counter === 6 || drawAll) {

    console.log("Drawing six counter");
   
    let vpinclindelinepoints = CalculateVPInclinedLinePoints();

    
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;

      tv3LinePoints.push(...calculateLinePointsWithCircles(tv3EndPoint[i], tv3EndPoint[j]));
      tv3LinePoints.push(...darkPencil);

     
      //console.log("angle3new" + angle3[j]);
      //console.log(tv2EndPoint[i].y,"   ",tv2EndPoint[j].y);
    }
    tv3LinePoints.push(...LabelPrint(tv3EndPoint,A3));
    sendToPoints.push(...vpinclindelinepoints, ...lightPencil, ...tv3LinePoints, ...darkPencil);
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
    let verticalLine3 = [], Y = MaxMinY(fv2EndPoint, 3);
    for (let i = 1; i <= shape; i++) {
      verticalLine3.push(...calculateLinePointsWithCircles(tv3EndPoint[i], { x: tv3EndPoint[i].x, y: Y }, lightPencil));
      verticalLine3.push(...lightPencil);
    }

    //horizatal line
    let horizontalLine3 = [];
    for (let i = 1; i <= shape; i++) {
      horizontalLine3.push(...calculateLinePointsWithCircles(fv2EndPoint[i], { x: endPoint.x - 100, y: fv2EndPoint[i].y }, lightPencil));
      horizontalLine3.push(...lightPencil);
    }

    let fv3LinePoints = [];
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      fv3LinePoints.push(...calculateLinePointsWithCircles(fv3EndPoint[i], fv3EndPoint[j]));
      fv3LinePoints.push(...darkPencil);
      
    }
    fv3LinePoints.push(...LabelPrint(fv3EndPoint,B3));
    sendToPoints.push(...verticalLine3, ...lightPencil, ...horizontalLine3, ...lightPencil, ...fv3LinePoints, ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }
  return { points: sendToPoints, step };

}

export function drawshape(shapeStartPoint, firstAngle, sideLength) {
  let tvEndPoint = [];
  tvEndPoint[1] = shapeStartPoint;

  for (let i = 1; i <= shape; i++) {
    
    tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, sideLength);
    firstAngle = firstAngle - move;

  }
  return tvEndPoint;
}

export function drawshape1(tvEndPoint) {

  let tvLinePoints1 = [],j=1;

  for (let i = 1; i <= shape; i++) {

    if(PlaneName=="Circle")
    {
      tvLinePoints1.push(...calculateLinePointsWithCircles(tvEndPoint[i], tvEndPoint[i + 1]));
      tvLinePoints1.push(...darkPencil);
      
       if((i-1)%8==0)
       {
          //circleEndPoint.push(...tvEndPoint[i]);
          circleEndPoint[j]=tvEndPoint[i];
          j++;

       }
    }
    else{
    tvLinePoints1.push(...calculateLinePointsWithCircles(tvEndPoint[i], tvEndPoint[i + 1]));
    tvLinePoints1.push(...darkPencil);
    //tvLinePoints1.push(...label(tvEndPoint[i], A1[i - 1], "up"));
    }

  }
  tvLinePoints1.push(...LabelPrint(tvEndPoint,A1));
  return tvLinePoints1;
}


export function drawAngledShape(anchorPoint, angleOfInclination, shapeArray){
    let angledObjectArray = [];
    angledObjectArray[1] = {x:anchorPoint.x, y: anchorPoint.y};
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape) j = 1;
      console.log("j: ", shapeArray[1], shapeArray[j]);
      let distance = calculateDistance(shapeArray[1], shapeArray[j]);
      let angle = calculateAngleInDegrees(shapeArray[1], shapeArray[j]);
      let nextPoint  = calculateAngledLinePoints(anchorPoint, -angle - (90 - angleOfInclination), distance);
      console.log("distance: ", distance, ", angle: ",  angle, ", nextPoint: ", nextPoint);
      //sendToPoints.push(...calculateLinePointsWithCircles(previousPoint1, nextPoint));
      angledObjectArray[i+1] = {x:nextPoint.x, y: nextPoint.y};
      
    }
    return angledObjectArray;
}

export function Plane_Steps() {
  return {
    1: defineSteps("Draw a XY Line"),

    2: defineSteps("Draw True Shape of " + PlaneName + "in the top view",
      "where side in Parallel to XY"),
    3: defineSteps("Project front view in XY "),
    4: defineSteps("Draw a front view inclined to" + hpInclinde + "with HP "),
    5: defineSteps("Project second top view "),
    6: defineSteps("Reproduce this top view making inclined" + vpInclinde + "with VP"),
    7: defineSteps("project the final front view."),



  };
}
export function TypeOfPlane(PlaneName) {
  let type;
  if (PlaneName === "Traingle")
    type = 3;
  if (PlaneName === "Square")
    type = 4;
  if (PlaneName === "Pentagone")
    type = 5;
  if (PlaneName === "Hexagone")
    type = 6;
  if (PlaneName === "Circle")
    type = 64;

  return type;
}

export function CornerAngle(PlaneName) {
  let angle;
  if (PlaneName === "Traingle")
    angle = 30;
  if (PlaneName === "Square")
    angle = 45;
  if (PlaneName === "Pentagone")
    angle = 54;
  if (PlaneName === "Hexagone")
    angle = 60;
  if (PlaneName === "Circle")
    angle = 16;

  return angle;
}
export function MaxMinY(Points = [], step) {
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
export function CalculateVPInclinedLinePoints() {

  let points = [], j = 0; // Initialize points as an array
  if(shapeAt=="HP")
      points.push(...calculateLinePointsWithCircles(tv3StartPoint, EndPoint(tv3StartPoint, vpInclinde, 400), lightPencil));
  else
      points.push(...calculateLinePointsWithCircles(tv3StartPoint, EndPoint(tv3StartPoint, 180+vpInclinde, 400), lightPencil));


  let subPoints = [];
  for (let i = 0; i < points.length; i++) 
  { 
   
    if(shapeAt=="HP")
    {
       if (points[i].y > 300) 
           j++;
       else 
           break; 
    }
  
     else
     {
         if (points[i].y < 300)
            j++;
         else 
            break; 
    }
  }
  if(shapeAt=="HP")
        subPoints = EndPoint(tv3StartPoint, 180 + vpInclinde, 100);
  else
        subPoints = EndPoint(tv3StartPoint, vpInclinde, 100);

  return calculateLinePointsWithCircles(subPoints, points[j - 1], lightPencil);

}

export function LabelPrint(Points=[], box) {
  let k = 1,printLabel=[],match="No";

  for (let i = 1; i <=shape; i++) 
  {
    for (let j = i+1; j <= shape; j++) 
    {
      if(j>shape)
        break;
      else
      {
        if((Points[i].x == Points[j].x) && (Points[i].y == Points[j].y)) 
        {
           printLabel.push(...label(Points[i], box[i - 1], "left-up"));
          // printLabel.push(...label(Points[j], box[j - 1], "right-up"));
           match="Yes";
           break;
        }      
      }
    }
    if(match=="No")
    {
      //{x: Points[i] +170, y: Points[i].y - 390}
      printLabel.push(...label(Points[i], box[i - 1], "right-up"));

    }
    match="No";
  }
  console.log("method call",printLabel);
  return printLabel;

}
