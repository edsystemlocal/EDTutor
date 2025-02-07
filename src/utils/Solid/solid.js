import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { calculateAngle, defineSteps, calculateLinePointsWithCircles } from "@/utils/functionHelper";
import { FindAngle, ArcPoints, EndPoint, Linelength, Angle, label, anglepoint } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "@/utils/globalVariable";
import { drawAngledShape } from "../Plane/Plane";


let startPoint = { x: 100, y: 500 };
let endPoint = { x: 1000, y:  500 };

let A1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
let B1 = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'"]

let A2 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"]
let B2 = ["a''", "b''", "c''", "d''", "e''", "f''", "g''", "h''", "i''", "j''"]

let A3 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"]
let B3 = ["a'''", "b'''", "c'''", "d'''", "e'''", "f'''", "g'''", "h'''", "i'''", "j'''"]

export function Calculation(sideCorner, shapeAt, SolidBase, BaseSide, inParallel, hpInclinde, vpInclinde) {
  startPoint = { x: 100, y: 500 + ((BaseSide - 25 )*3) };
  endPoint = { x: 800 + BaseSide*25, y: 500 + ((BaseSide - 25 )*3) };
  //default value
  let BaseEdge = BaseSide * 2;
  let hAway = BaseEdge*3;
  let vAway = BaseEdge*3;
  let shape = TypeOfBase(SolidBase);
  let move = 360 / shape;
  console.log("shape:", shape);
  let angle = 90;
  let tvStartPoint;
  let fvStartPoint;
  let tv2StartPoint;
  let fv2StartPoint;
  let tv3StartPoint;
  let fv3StartPoint;

  


  if (sideCorner == "Corner")
    angle = (((shape - 2) * 180) / shape) / 2;

  if (shapeAt == "VP") {
    if (inParallel === "in")
      vAway = 0;

    hpInclinde = 180 - vpInclinde;
    vpInclinde = 180 - hpInclinde;

    tvStartPoint = { x: startPoint.x + 100, y: startPoint.y - hAway };
    fvStartPoint = { x: startPoint.x + 100, y: startPoint.y + vAway };

    tv2StartPoint = { x: startPoint.x + 300, y: startPoint.y - hAway };
    fv2StartPoint = { x: startPoint.x + 300, y: startPoint.y + vAway }

    tv3StartPoint = { x: startPoint.x + 500, y: startPoint.y - hAway };
    fv3StartPoint = { x: startPoint.x + 500, y: startPoint.y + vAway };
  }
  else {
    if (inParallel === "in")
      hAway = 0;
    
    tvStartPoint = { x: startPoint.x + 100, y: startPoint.y + vAway };
    fvStartPoint = { x: startPoint.x + 100, y: startPoint.y - hAway }

    tv2StartPoint = { x: startPoint.x + 300, y: startPoint.y + vAway };
    fv2StartPoint = { x: startPoint.x + 300, y: startPoint.y - hAway }

    tv3StartPoint = { x: startPoint.x + 600, y: startPoint.y + vAway };
    fv3StartPoint = { x: startPoint.x + 600, y: startPoint.y - hAway };
  }

  let updatedInputs = {
    tvStartPoint: tvStartPoint,
    fvStartPoint: fvStartPoint,
    tv2StartPoint: tv2StartPoint,
    fv2StartPoint: fv2StartPoint,
    tv3StartPoint: tv3StartPoint,
    fv3StartPoint: fv3StartPoint,
    hpInclinde: hpInclinde,
    vpInclinde: vpInclinde,
    BaseEdge: BaseEdge,
    hAway: hAway,
    vAway: vAway,
    shape: shape,
    move: move,
    angle: angle
  }

  console.log("updatedInputs", updatedInputs);
  return updatedInputs;

}


export function getfirstShapeTop(Centroid, fvStartPoint, SolidHight) {
  let coneShapeTop = [];
  if (Centroid.y > startPoint.y) {
    coneShapeTop[1] = { x: Centroid.x, y: fvStartPoint.y - SolidHight };
  }
  if (Centroid.y < startPoint.y) {
    coneShapeTop[1] ={ x: Centroid.x, y: fvStartPoint.y + SolidHight };
  }
  return coneShapeTop;
}

export function getCylinderShapeTop(Centroid, baseShape, fvStartPoint, SolidHight) {
  let cylinderTop = [];
  for (let i = 1; i < baseShape.length; i++) {

    if (Centroid.y > startPoint.y) {
      cylinderTop[i] = { x: baseShape[i].x, y: fvStartPoint.y - SolidHight };
    }
    if (Centroid.y < startPoint.y) {
      cylinderTop[i] = { x: baseShape[i].x, y: fvStartPoint.y + SolidHight };
    }
  }
  return cylinderTop;
}

export function Solid(payload) {
  console.log("solid is calling");
  let sendToPoints = [];
  
  //let solidShape = "cylinder";

  const { counter, finalDrawing } = payload;

  const PlaneType = payload.inputs["Plane Type"];
  const PlaneSideLength = payload.inputs["Side Length"];

  const PlanePosition1 = payload.inputs["Plane Position"];
  const PlanePosition2 = payload.inputs["Plane in/parallel Postion"];
  const PlanePosition3 = payload.inputs["Plane HP/VP Postion"];

  const PlaneHPAngle = payload.inputs["Incline With HP"];
  const PlaneVPAngle = payload.inputs["Inclined With VP"];
  let SolidHight = Number(payload.inputs["Solid Height"]);
  let solidShape = payload.inputs["Solid Type"];
  
  console.log("PlaneType", PlaneType);
  //assigmnet
  let SolidBase = PlaneType;
  let BaseSide = PlaneSideLength;
  let sideCorner = PlanePosition1;
  let inParallel = PlanePosition2;
  let shapeAt = PlanePosition3;
  console.log("corner", payload);

  let {
    tvStartPoint,
    fvStartPoint,
    hpInclinde,
    vpInclinde,
    BaseEdge,
    shape,
    move,
    angle
  } = Calculation(sideCorner, shapeAt, SolidBase, BaseSide, inParallel, PlaneHPAngle, PlaneVPAngle);
  //let SolidHight = 150;
  let drawAll = false;
  //const steps = Plane_Steps(SolidBase, hpInclinde, vpInclinde); // Generate steps dynamically
  // let step = steps[counter];
  //step-1 Draw Main Line
  if (counter === 1 || drawAll) {
    sendToPoints.push(...calculateLinePointsWithCircles(startPoint, endPoint), ...darkPencil)
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-2 Draw base
  let tv1EndPoint = [];
  let Centroid = { x: 0, y: 0 };
  tv1EndPoint = BaseEndPoint(tvStartPoint, angle, BaseEdge, shape, move);
  Centroid = findCentroid(tv1EndPoint, shape);


  if (counter === 2 || drawAll) {
    sendToPoints.push(...drawshape(tv1EndPoint, shape, A1),
      ...drawApex(tv1EndPoint, Centroid, shape),
      ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  //step-3 draw line for FV and Draw FV
  console.log("tv1EndPoint: ", tv1EndPoint);
  let fv1HeightPointArray = [];
  if (solidShape === "Cone") {
    fv1HeightPointArray = getfirstShapeTop(Centroid, fvStartPoint, SolidHight);
  } else {
    fv1HeightPointArray = getCylinderShapeTop(Centroid, tv1EndPoint, fvStartPoint, SolidHight);
  }
  let fv1BaseEndPointArray = [];
  for (let i = 1; i <= shape; i++) {
    fv1BaseEndPointArray[i] = { x: tv1EndPoint[i].x, y: fvStartPoint.y }
  }
  console.log("fv1HeightPointArray: ", fv1HeightPointArray);
  let fv1apexBasePoint = { x: Centroid.x, y: fvStartPoint.y };
  if (counter === 3 || drawAll) {
    if (solidShape === "Cone") {
      sendToPoints.push(...calculateLinePointsWithCircles(Centroid, fv1HeightPointArray[1], lightPencil));
    }
    sendToPoints.push(...drawShapeWithTwoArray(tv1EndPoint, fv1BaseEndPointArray, lightPencil));    
    sendToPoints.push(...drawshape(fv1BaseEndPointArray, shape, A1));
    sendToPoints.push(...drawShapeWithTwoArray(fv1BaseEndPointArray, fv1HeightPointArray, darkPencil));
    sendToPoints.push(...drawshape(fv1HeightPointArray, shape, A1));

    if (finalDrawing) {
      drawAll = true;
    }
  }

  let inclinedShapes = drawAngledShape({x: fv1HeightPointArray[1].x + BaseEdge*4, y: fv1BaseEndPointArray[1].y}, hpInclinde, fv1BaseEndPointArray, shape, fv1BaseEndPointArray[4]);
  let inclinedShapesTop = drawAngledShape({x: fv1HeightPointArray[1].x + BaseEdge*4, y: fv1BaseEndPointArray[1].y}, hpInclinde, fv1HeightPointArray, fv1HeightPointArray.length - 1, fv1BaseEndPointArray[4]);

  if (counter === 4 || drawAll) {

    sendToPoints.push(...drawshape(inclinedShapes, shape, B1));
    sendToPoints.push(...drawShapeWithTwoArray(inclinedShapes, inclinedShapesTop, darkPencil));
    sendToPoints.push(...drawshape(inclinedShapesTop, shape, B1));

    if (finalDrawing) {
      drawAll = true;
    }
  }

  if (counter === 5 || drawAll) {
    let tempTopPointy = Centroid.y + 100;
    if (shapeAt == "VP") {
      tempTopPointy = Centroid.y - 100;
    }

    for (let i = 1; i < inclinedShapes.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], { x: inclinedShapes[i].x, y: tempTopPointy }, lightPencil));
    }
    for (let i = 1; i < inclinedShapesTop.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop[i], { x: inclinedShapesTop[i].x, y: tempTopPointy }, lightPencil));
    }
    for (let i = 1; i < tv1EndPoint.length; i++) {
        sendToPoints.push(...calculateLinePointsWithCircles(tv1EndPoint[i], { x: inclinedShapesTop[1].x + 100, y: tv1EndPoint[i].y }, lightPencil));
    }
    if(inclinedShapesTop.length === 2){
      sendToPoints.push(...calculateLinePointsWithCircles(Centroid, { x: inclinedShapesTop[1].x + 100, y: Centroid.y }, lightPencil));
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  let tV2ArrayBase = [];
  let tV2ArrayTop = [];
  for (let i = 1; i < tv1EndPoint.length; i++) {
    tV2ArrayBase[i] = { x: inclinedShapes[i].x, y: tv1EndPoint[i].y };
  }
  console.log("tV2ArrayTop[i]:", inclinedShapesTop.length);
  if(inclinedShapesTop.length>2){
    for (let i = 1; i < inclinedShapesTop.length; i++) {
      tV2ArrayTop[i] = { x: inclinedShapesTop[i].x, y: tv1EndPoint[i].y };
    }
  } else if(inclinedShapesTop.length === 2){
    tV2ArrayTop[1] = { x: inclinedShapesTop[1].x, y: Centroid.y };
  }
  

  if (counter === 6 || drawAll) {
    sendToPoints.push(...drawshape(tV2ArrayBase, shape, B2));
    sendToPoints.push(...drawShapeWithTwoArray(tV2ArrayBase, tV2ArrayTop, darkPencil));
    sendToPoints.push(...drawshape(tV2ArrayTop, shape, B2));
    if (finalDrawing) {
      drawAll = true;
    }
  }


  let inclinedShapes2 = drawAngledShape({x: inclinedShapes[1].x + BaseEdge*4 + SolidHight, y: tV2ArrayBase[1].y}, vpInclinde, tV2ArrayBase, shape, tV2ArrayBase[4]);
  let newTopPoint2 = [];
  newTopPoint2[1] = tV2ArrayTop[1];
  // newTopPoint2[2] = tV2ArrayTop[1];
  console.log(fv1apexBasePoint);
  let inclinedShapesTop2 = drawAngledShape({x: inclinedShapes[1].x + BaseEdge*4 + SolidHight, y: tV2ArrayBase[1].y}, vpInclinde, tV2ArrayTop, tV2ArrayTop.length - 1, tV2ArrayBase[4]);

  if (counter === 7 || drawAll) {

    sendToPoints.push(...drawshape(inclinedShapes2, shape, B3));
    sendToPoints.push(...drawShapeWithTwoArray(inclinedShapes2, inclinedShapesTop2, darkPencil));
    sendToPoints.push(...drawshape(inclinedShapesTop2, shape, B3));

    if (finalDrawing) {
      drawAll = true;
    }

  }



  if (counter === 8 || drawAll) {
    let xTemp = inclinedShapesTop2[1].x + 100;
    let yTemp = fv1HeightPointArray[1].y - 50;
    if(yTemp > startPoint.y){
      yTemp = fv1HeightPointArray[1].y + 100;
    }
    for (let i = 1; i < tV2ArrayBase.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes2[i], { x: inclinedShapes2[i].x, y: yTemp }, lightPencil));
    }

    for (let i = 1; i < inclinedShapesTop2.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop2[i], { x: inclinedShapesTop2[i].x, y: yTemp }, lightPencil));
    }

    for (let i = 1; i < fv1BaseEndPointArray.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], { x: inclinedShapesTop2[1].x + 100, y: inclinedShapes[i].y }, lightPencil));
    }

    for (let i = 1; i < inclinedShapesTop.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop[i], { x: inclinedShapesTop2[1].x + 100, y: inclinedShapesTop[i].y }, lightPencil));
    }
    if (finalDrawing) {
      drawAll = true;
    }

  }
  let thirdShapeBase = [];
  for (let i = 1; i < inclinedShapes2.length; i++) {
    thirdShapeBase[i] = { x: inclinedShapes2[i].x, y: inclinedShapes[i].y };
  }
  let thirdShapeTop = [];
  for (let i = 1; i < inclinedShapesTop.length; i++) {
    thirdShapeTop[i] = { x: inclinedShapesTop2[i].x, y: inclinedShapesTop[i].y };
  }
  if (counter === 9 || drawAll) {
    sendToPoints.push(...drawshape(thirdShapeBase, shape, B3));
    sendToPoints.push(...drawShapeWithTwoArray(thirdShapeBase, thirdShapeTop, darkPencil));
    sendToPoints.push(...drawshape(thirdShapeTop, shape, B3));
    if (finalDrawing) {
      drawAll = true;
    }

  }
  const steps = solidSteps(); // Generate steps dynamically
  let step = steps[counter];

  return { points: sendToPoints, step };
}

export function BaseEndPoint(shapeStartPoint, firstAngle, sideLength, shape, move) {
  let tvEndPoint = [];
  tvEndPoint[1] = shapeStartPoint;

  for (let i = 1; i < shape; i++) {
    console.log("shapen angle", +firstAngle);
    tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, sideLength);
    firstAngle = firstAngle - move;

  }
  console.log("BaseEndPoint", tvEndPoint);
  return tvEndPoint;
}


export function drawshape(baseArray, shape, labelArray) {

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

export function drawShapeWithTwoArray(baseArray, heightArray, pencil = darkPencil) {

  let shapeLinePoints = [];
  console.log("two array: ", heightArray, heightArray.length);
  console.log("two array baseArray: ", baseArray, baseArray.length);
  if (heightArray.length > 2) {
    for (let i = 1; i < baseArray.length; i++) {
      console.log("baseArray[i]=", baseArray[i], ", heightArray[i]=", heightArray[i]);
      shapeLinePoints.push(...calculateLinePointsWithCircles(baseArray[i], heightArray[i], pencil));
      //shapeLinePoints.push(...label(heightArray[i], labelArray[i - 1], "up"));
    }
  } else if(heightArray.length === 2){
    for (let i = 1; i < baseArray.length; i++) {
      console.log("baseArray[i]=", baseArray[i], ", heightArray[i]=", heightArray[1]);
      shapeLinePoints.push(...calculateLinePointsWithCircles(baseArray[i], heightArray[1], pencil));
      //shapeLinePoints.push(...label(heightArray[i], labelArray[i - 1], "up"));
    }
  }
  return shapeLinePoints;
}


export function drawApex(tvEndPoint, Centroid = { x: 0, y: 0 }, shape) {
  let apexLinePoints = [];
  for (let i = 1; i <= shape; i++) {
    apexLinePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i], Centroid, lightPencil))
    apexLinePoints.push(...label(Centroid, "O", "up"));

  }
  return apexLinePoints;
}


export function findCentroid(tvEndPoint, shape) {
  let Centroid = { x: 0, y: 0 };
  for (let i = 1; i <= shape; i++) {
    Centroid.x = Centroid.x + tvEndPoint[i].x;
    Centroid.y = Centroid.y + tvEndPoint[i].y;

  }
  Centroid.x = Centroid.x / shape;
  Centroid.y = Centroid.y / shape;

  return Centroid;

}

export function shapeMove(pointStart, angle, length, moveAngle) {

  const pointEnd = EndPoint(pointStart, angle, length);
  console.log("st point:", pointStart, "end point:", pointEnd);
  return calculateLinePointsWithCircles(pointStart, pointEnd, darkPencil);

}

export function solidSteps(SolidBase, hpInclinde, vpInclinde) {
  return {
    1: defineSteps("Draw a XY Line"),

    2: defineSteps("Draw True Shape of " + SolidBase + "in the top view",
      "where side in Parallel to XY"),
    3: defineSteps("Project front view in XY "),
    4: defineSteps("Draw a front view inclined to" + hpInclinde + "with HP "),
    5: defineSteps("Project second top view "),
    6: defineSteps("Reproduce this top view making inclined" + vpInclinde + "with VP"),
    7: defineSteps("project the final front view."),



  };
}
export function TypeOfBase(SolidBase) {
  let type;
  if (SolidBase === "Traingle")
    type = 3;
  if (SolidBase === "Square")
    type = 4;
  if (SolidBase === "Pentagone")
    type = 5;
  if (SolidBase === "Hexagone")
    type = 6;
  if (SolidBase === "Circle")
    type = 16;
  return type;


}

export default function AngleBetweenLines(line1, line2) {
  // const [line1, setLine1] = useState({ x1: line1.x1, y1: 0, x2: 0, y2: 0 });
  // const [line2, setLine2] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  let angle;

  const calculateSlope = (x1, y1, x2, y2) => (x2 - x1 === 0 ? null : (y2 - y1) / (x2 - x1));


  const m1 = calculateSlope(line1.x1, line1.y1, line1.x2, line1.y2);
  const m2 = calculateSlope(line2.x1, line2.y1, line2.x2, line2.y2);

  if (m1 === null || m2 === null) {
    angle = 90;
  } else {
    const radians = Math.atan(Math.abs((m1 - m2) / (1 + m1 * m2)));
    const degrees = (radians * 180) / Math.PI;
    angle = degrees;
  }

  return angle;
}
