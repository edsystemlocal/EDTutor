import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { calculateAngle, defineSteps, calculateLinePointsWithCircles } from "@/utils/functionHelper";
import { FindAngle, ArcPoints, EndPoint, Linelength, Angle, label, anglepoint } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "@/utils/globalVariable";
import { drawAngledShape } from "../Plane/Plane";


const startPoint = { x: 100, y: 300 };
const endPoint = { x: 800, y: 300 };

let A1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
let B1 = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'"]

let A2 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"]
let B2 = ["a''", "b''", "c''", "d''", "e''", "f''", "g''", "h''", "i''", "j''"]

let A3 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"]
let B3 = ["a'''", "b'''", "c'''", "d'''", "e'''", "f'''", "g'''", "h'''", "i'''", "j'''"]

export function Calculation(sideCorner, shapeAt, SolidBase, BaseSide, inParallel, hpInclinde, vpInclinde) {
  //default value
  let BaseEdge = BaseSide * 2;
  let hAway = 100;
  let vAway = 100;
  let shape = TypeOfBase(SolidBase);
  let move = 360 / shape;
  console.log("move:", move);
  let angle = 90;
  let tvStartPoint;
  let fvStartPoint;
  let tv2StartPoint;
  let fv2StartPoint;
  let tv3StartPoint;
  let fv3StartPoint;


  if (sideCorner == "Corner")
    angle = 54;

  if (shapeAt == "VP") {
    if (inParallel === "in")
      vAway = 0;

    hpInclinde = 360 - hpInclinde;

    tvStartPoint = { x: 150, y: 300 - hAway };
    fvStartPoint = { x: 150, y: 300 + vAway };

    tv2StartPoint = { x: 300, y: 300 - hAway };
    fv2StartPoint = { x: 300, y: 300 + vAway }

    tv3StartPoint = { x: 550, y: 300 - hAway };
    fv3StartPoint = { x: 550, y: 300 + vAway };
  }
  else {
    if (inParallel === "in")
      hAway = 0;

    tvStartPoint = { x: 150, y: 300 + vAway };
    fvStartPoint = { x: 150, y: 300 - hAway }

    tv2StartPoint = { x: 300, y: 300 + vAway };
    fv2StartPoint = { x: 300, y: 300 - hAway }

    tv3StartPoint = { x: 550, y: 300 + vAway };
    fv3StartPoint = { x: 550, y: 300 - hAway };
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






export function Solid(payload) {
  console.log("solid is calling");
  let sendToPoints = [];
  const { counter, finalDrawing } = payload;

  const PlaneType = payload.inputs["Plane Type"];
  const PlaneSideLength = payload.inputs["Side Length"];

  const PlanePosition1 = payload.inputs["Plane Position"];
  const PlanePosition2 = payload.inputs["Plane in/parallel Postion"];
  const PlanePosition3 = payload.inputs["Plane HP/VP Postion"];

  const PlaneHPAngle = payload.inputs["Incline With HP"];
  const PlaneVPAngle = payload.inputs["Inclined With VP"];
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
    tv2StartPoint,
    fv2StartPoint,
    tv3StartPoint,
    fv3StartPoint,
    hpInclinde,
    vpInclinde,
    BaseEdge,
    hAway,
    vAway,
    shape,
    move,
    angle
  } = Calculation(sideCorner, shapeAt, SolidBase, BaseSide, inParallel, PlaneHPAngle, PlaneVPAngle);
  let SolidHight = 150;
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

    sendToPoints.push(...drawshape(tv1EndPoint, shape),
      ...drawApex(tv1EndPoint, Centroid, shape),
      ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }


  //step-3 draw line for FV and Draw FV
  console.log("tv1EndPoint: ", tv1EndPoint);
  let fv1HeightPointArray = [];
  fv1HeightPointArray[1] = { x: Centroid.x, y: fvStartPoint.y - SolidHight };
  let fv1BaseEndPointArray = [];
  for (let i = 1; i <= shape; i++) {
    fv1BaseEndPointArray[i] = { x: tv1EndPoint[i].x, y: fvStartPoint.y }
  }
  console.log("fv1BaseEndPointArray: ", fv1BaseEndPointArray);
  let fv1apexBasePoint = { x: Centroid.x, y: fvStartPoint.y };
  if (counter === 3 || drawAll) {
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(tv1EndPoint[i], fv1BaseEndPointArray[i], lightPencil));
      sendToPoints.push(...lightPencil);
    }


    sendToPoints.push(...calculateLinePointsWithCircles(Centroid, fv1HeightPointArray[1], lightPencil));

    for (let i = 1; i < shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(fv1BaseEndPointArray[i], fv1BaseEndPointArray[i + 1], darkPencil));
      sendToPoints.push(...label(fv1BaseEndPointArray[i], B1[i - 1], "down"));
    }
    sendToPoints.push(...label(fv1HeightPointArray[1], "O", "up"))
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(fv1BaseEndPointArray[i], fv1HeightPointArray[1], darkPencil));
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  let newTopPoint = [];
  newTopPoint[1] = fv1BaseEndPointArray[1];
  newTopPoint[2] = fv1HeightPointArray[1];
  console.log(fv1apexBasePoint);
  let inclinedShapes = drawAngledShape(fv2StartPoint, hpInclinde, fv1BaseEndPointArray, shape);
  let inclinedShapesTop = drawAngledShape(fv2StartPoint, hpInclinde, newTopPoint, 2);

  console.log("inclinedShapes: ", inclinedShapes);
  console.log("fv2StartPoint: ", fv2StartPoint);
  console.log("hpInclinde: ", hpInclinde);
  console.log("fv1BaseEndPointArray: ", fv1BaseEndPointArray);
  console.log("fv1apexBasePoint: ", fv1apexBasePoint);

  if (counter === 4 || drawAll) {
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;

      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], inclinedShapes[j]));
      sendToPoints.push(...darkPencil);


    }
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], inclinedShapesTop[2], darkPencil));

    }
    if (finalDrawing) {
      drawAll = true;
    }
  }




  if (counter === 5 || drawAll) {
    for (let i = 1; i <= shape; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;

      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], {x: inclinedShapes[i].x, y: tvStartPoint.y + 100}, lightPencil));
    }
    for (let i = 2; i < inclinedShapesTop.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop[i], {x: inclinedShapesTop[i].x, y: tvStartPoint.y + 100}, lightPencil));
    }
    for (let i = 1; i < tv1EndPoint.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(tv1EndPoint[i], {x: inclinedShapesTop[2].x + 50, y: tv1EndPoint[i].y}, lightPencil));
    }
    if (finalDrawing) {
      drawAll = true;
    }
  }

  let tV2ArrayBase = [];
  let tV2ArrayTop = [];
  for (let i = 1; i < tv1EndPoint.length; i++) {
    tV2ArrayBase[i] = {x: inclinedShapes[i].x, y: tv1EndPoint[i].y};
  }
  for (let i = 1; i < tv1EndPoint.length; i++) {
    tV2ArrayTop[i] = {x: inclinedShapesTop[2].x, y: Centroid.y};
  }

  if (counter === 6 || drawAll) {
    for (let i = 1; i < tV2ArrayBase.length; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      console.log("tV2ArrayBase[i]:",tV2ArrayBase[i]);
      console.log("tV2ArrayBase[j]:",tV2ArrayBase[j]);
      sendToPoints.push(...calculateLinePointsWithCircles(tV2ArrayBase[i], tV2ArrayBase[j], darkPencil));
    }

    for (let i = 1; i < tV2ArrayBase.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(tV2ArrayBase[i], tV2ArrayTop[2], darkPencil));

    }
    if (finalDrawing) {
      drawAll = true;
    }
    
  }


  let inclinedShapes2 = drawAngledShape(tv3StartPoint, vpInclinde, tV2ArrayBase, shape);
  let newTopPoint2 = [];
  newTopPoint2[1] = tV2ArrayBase[1];
  newTopPoint2[2] = tV2ArrayTop[1];
  console.log(fv1apexBasePoint);
  let inclinedShapesTop2 = drawAngledShape(tv3StartPoint, hpInclinde, newTopPoint2, 2);

  if (counter === 7 || drawAll) {
    for (let i = 1; i < tV2ArrayBase.length; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      console.log("tV2ArrayBase[i]:",tV2ArrayBase[i]);
      console.log("tV2ArrayBase[j]:",tV2ArrayBase[j]);
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes2[i], inclinedShapes2[j], darkPencil));
    }

    for (let i = 1; i < tV2ArrayBase.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes2[i], inclinedShapesTop2[2], darkPencil));

    }
    if (finalDrawing) {
      drawAll = true;
    }
    
  }



  if (counter === 8 || drawAll) {
    for (let i = 1; i < tV2ArrayBase.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes2[i], {x: inclinedShapes2[i].x, y: fv1HeightPointArray[1].y}, lightPencil));
    }

    for (let i = 1; i < 3; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop2[i], {x: inclinedShapesTop2[i].x, y: fv1HeightPointArray[1].y}, lightPencil));

    }

    for (let i = 1; i < fv1BaseEndPointArray.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapes[i], {x: inclinedShapesTop2[2].x + 50, y: inclinedShapes[i].y}, lightPencil));
    }

    for (let i = 1; i < 3; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(inclinedShapesTop[i], {x: inclinedShapesTop2[2].x + 50, y: inclinedShapesTop[i].y}, lightPencil));

    }
    if (finalDrawing) {
      drawAll = true;
    }
    
  }

  let thirdShapeBase = [];
  for (let i = 1; i < inclinedShapes2.length; i++) {
    thirdShapeBase[i] = {x: inclinedShapes2[i].x, y: inclinedShapes[i].y};   
  }
  let thirdShapeTop = [];
  thirdShapeTop[1] = {x: inclinedShapesTop2[2].x, y: inclinedShapesTop[2].y};
  if (counter === 9 || drawAll) {
    for (let i = 1; i < thirdShapeBase.length; i++) {
      let j = i + 1;
      if (j > shape)
        j = 1;
      sendToPoints.push(...calculateLinePointsWithCircles(thirdShapeBase[i], thirdShapeBase[j], darkPencil));
    }
    for (let i = 1; i < thirdShapeBase.length; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(thirdShapeBase[i], thirdShapeTop[1], darkPencil));

    }
    if (finalDrawing) {
      drawAll = true;
    }
    
  }


  console.log("thirdShapeBase:",thirdShapeBase);

 
 // console.log("sendToPoints:",sendToPoints);
  let step = "";
  return { points: sendToPoints, step };
}

export function BaseEndPoint(shapeStartPoint, firstAngle, sideLength, shape, move) {
  let tvEndPoint = [];
  tvEndPoint[1] = shapeStartPoint;

  for (let i = 1; i <= shape; i++) {
    console.log("shapen angle", +firstAngle);
    tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, sideLength);
    firstAngle = firstAngle - move;

  }
  return tvEndPoint;
}


export function drawshape(tvEndPoint, shape) {

  let shapeLinePoints = [];

  for (let i = 1; i <= shape; i++) {

    shapeLinePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i], tvEndPoint[i + 1]));
    shapeLinePoints.push(...label(tvEndPoint[i], A1[i - 1], "up"));

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
  console.log("st point:", pointStart, "    end point:", pointEnd);
  return calculateLinePointsWithCircles(pointStart, pointEnd, darkPencil);

}

export function Plane_Steps(SolidBase, hpInclinde, vpInclinde) {
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
