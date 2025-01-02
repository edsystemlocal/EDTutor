import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { calculateAngle, defineSteps, calculateLinePointsWithCircles } from "@/utils/functionHelper";
import { FindAngle, ArcPoints, EndPoint, Linelength, Angle, label, anglepoint } from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "@/utils/globalVariable";


const startPoint = { x: 100, y: 300 };
const endPoint = { x: 800, y: 300 };

let A1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
let B1 = ["a'", "b'", "c'", "d'", "e'", "f'", "g'", "h'", "i'", "j'"]

let A2 = ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1"]
let B2 = ["a''", "b''", "c''", "d''", "e''", "f''", "g''", "h''", "i''", "j''"]

let A3 = ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"]
let B3 = ["a'''", "b'''", "c'''", "d'''", "e'''", "f'''", "g'''", "h'''", "i'''", "j'''"]

//Global Variable
let SolidBase;
let SolidHight = 150;
let BaseSide = 25;
let sideCorner = "side";//position1
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

let BaseEdge, angle, move, shape, hAway, vAway;

export function Calculation() {
  //default value
  BaseEdge = BaseSide * 2;
  hAway = 100;
  vAway = 100;
  shape = TypeOfBase(SolidBase);
  move = 360 / shape;
  console.log("move21:", move);
  angle = 90;


  if (sideCorner == "Corner")
    angle = 54;


  if (shapeAt == "VP") {
    if (inParallel === "in")
      vAway = 0;

    hpInclinde = 360 - hpInclinde;

    tvStartPoint = { x: 150, y: 300 - hAway };
    fvStartPoint = { x: 150, y: 300 + vAway };

    tv2StartPoint = { x: 450, y: 300 - hAway };
    fv2StartPoint = { x: 450, y: 300 + vAway }

    tv3StartPoint = { x: 550, y: 300 - hAway };
    fv3StartPoint = { x: 550, y: 300 + vAway };
  }
  else {
    if (inParallel === "in")
      hAway = 0;

    tvStartPoint = { x: 150, y: 300 + vAway };
    fvStartPoint = { x: 150, y: 300 - hAway }

    tv2StartPoint = { x: 450, y: 300 + vAway };
    fv2StartPoint = { x: 450, y: 300 - hAway }

    tv3StartPoint = { x: 550, y: 300 + vAway };
    fv3StartPoint = { x: 550, y: 300 - hAway };
  }

}






export function Solid(payload) {
  console.log("solid is calling");
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
  SolidBase = PlaneType;
  BaseSide = PlaneSideLength;
  sideCorner = PlanePosition1;
  inParallel = PlanePosition2;
  shapeAt = PlanePosition3;
  hpInclinde = PlaneHPAngle;
  vpInclinde = PlaneVPAngle;
  console.log("corner", payload);

  Calculation();
  let drawAll = false;
  console.log("move211:", move);

  console.log("startPoint:", startPoint);
  console.log("endPoint:", endPoint);
  //step-1 Draw Main Line
  if (counter === 1 || drawAll) {
    sendToPoints.push(...calculateLinePointsWithCircles(startPoint, endPoint), ...darkPencil)
    if (finalDrawing) {
      drawAll = true;
    }
  }

  //step-2 Draw base
  let tv1EndPoint = BaseEndPoint(tvStartPoint, angle, BaseEdge);
  let Centroid = findCentroid(tv1EndPoint);
  if (counter === 2 || drawAll) {

    sendToPoints.push(...drawshape(tv1EndPoint),
      ...drawApex(tv1EndPoint, Centroid),
      ...darkPencil);
    if (finalDrawing) {
      drawAll = true;
    }
  }

  console.log("move212:", move);
  //step-3 draw line for FV and Draw FV
  let fv1apexHightPoint = { x: Centroid.x, y: fvStartPoint.y - SolidHight };
  console.log("fv1apexHightPoint", fv1apexHightPoint);
  let fv1BaseEndPoint = [];
  for (let i = 1; i <= shape; i++) {
    console.log("tv1EndPoint[i]:", tv1EndPoint[i]);
    console.log("fvStartPoint:", fvStartPoint);
    fv1BaseEndPoint[i] = { x: tv1EndPoint[i].x, y: fvStartPoint.y }
  }
  console.log("move214:", move);
  let fv1apexBasePoint = { x: Centroid.x, y: fvStartPoint.y };
  if (counter === 3 || drawAll) {
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(tv1EndPoint[i], fv1BaseEndPoint[i], lightPencil));
      sendToPoints.push(...lightPencil);
    }


    sendToPoints.push(...calculateLinePointsWithCircles(Centroid, fv1apexBasePoint, lightPencil));

    for (let i = 1; i < shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(fv1BaseEndPoint[i], fv1BaseEndPoint[i + 1], darkPencil));
      sendToPoints.push(...label(fv1BaseEndPoint[i], B1[i - 1], "up"));
    }
    // let fv1apexHightPoint={x:Centroid.x,y:fvStartPoint.y-SolidHight};
    for (let i = 1; i <= shape; i++) {
      sendToPoints.push(...calculateLinePointsWithCircles(fv1BaseEndPoint[i], fv1apexHightPoint, darkPencil));

    }
    // sendToPoints.push(...calculateLinePointsWithCircles(fv1apexBasePoint,fv1apexHightPoint,lightPencil));
    if (finalDrawing) {
      drawAll = true;
    }
  }

  console.log("move213:", move);
  // sendToPoints.push(...label(fv2StartPoint,"d","up")); 
  // 2nd digrame
  let fv2Apexpoint = { x: fv2StartPoint.x + 150, y: fv2StartPoint.y };
  if (counter === 4 || drawAll) {
    let slantLength = [], slantAngle = [], fv1PointsLength = [];
    for (let i = 1; i <= shape; i++) {
      slantLength[i] = Linelength(fv1BaseEndPoint[i], fv1apexHightPoint);
      slantAngle[i] = anglepoint(fv1apexHightPoint, fv1BaseEndPoint[i], slantLength[i]);

      fv1PointsLength[i] = Linelength(fv1BaseEndPoint[5], fv1BaseEndPoint[i]);
      console.log("slant edge:", slantAngle[i]);
      // sendToPoints.push(...shapeMove(fv2Apexpoint,slantAngle[i],slantLength[i]));
    }
    let fv1apexBasePointLength = Linelength(fv1BaseEndPoint[5], fv1apexBasePoint);

    let fv2BaseEndPoint = [];

    fv2BaseEndPoint[5] = { x: fv2StartPoint.x, y: fv2StartPoint.y };
    let fvlength;
    let max = startPoint.x, min = endPoint.x;
    for (let i = 1; i <= shape; i++) {
      if (max < fv1BaseEndPoint[i].x)
        max = fv1BaseEndPoint[i].x;
      if (min > fv1BaseEndPoint[i].x)
        min = fv1BaseEndPoint[i].x;

    }
    fvlength = max - min;
    let fv2apexBasePoint = EndPoint(fv2BaseEndPoint[5], 180 - hpInclinde, fv1apexBasePointLength);
    let fv2Apexpoint = EndPoint(fv2apexBasePoint, 90 - hpInclinde, SolidHight);
    for (let i = 1; i <= shape; i++) {
      fv2BaseEndPoint[i] = EndPoint(fv2BaseEndPoint[5], 180 - hpInclinde, fv1PointsLength[i]);
    }
    for (let i = 1; i <= shape; i++) {

      sendToPoints.push(...calculateLinePointsWithCircles(fv2BaseEndPoint[5],
        EndPoint(fv2BaseEndPoint[1], 180 - hpInclinde, fvlength), darkPencil));
      //sendToPoints.push(...label(fv2BaseEndPoint[i],A2[i-1], "up"))
    }
    for (let i = 1; i <= shape; i++) {

      sendToPoints.push(...calculateLinePointsWithCircles(fv2Apexpoint, fv2BaseEndPoint[i]), darkPencil);
      //sendToPoints.push(...label(fv2BaseEndPoint[i],A2[i-1], "up"))
    }

    if (finalDrawing) {
      drawAll = true;
    }
  }

  return { points: sendToPoints, step };
}

export function BaseEndPoint(shapeStartPoint, firstAngle, sideLength) {
  let tvEndPoint = [];
  tvEndPoint[1] = shapeStartPoint;

  for (let i = 1; i <= shape; i++) {
    console.log("shapen angle", +firstAngle);
    tvEndPoint[i + 1] = EndPoint(tvEndPoint[i], firstAngle, sideLength);
    firstAngle = firstAngle - move;

  }
  return tvEndPoint;
}


export function drawshape(tvEndPoint) {

  let shapeLinePoints = [];

  for (let i = 1; i <= shape; i++) {

    shapeLinePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i], tvEndPoint[i + 1]));
    shapeLinePoints.push(...label(tvEndPoint[i], A1[i - 1], "up"));

  }
  return shapeLinePoints;
}


export function drawApex(tvEndPoint, Centroid = { x: 0, y: 0 }) {
  let apexLinePoints = [];
  for (let i = 1; i <= shape; i++) {
    apexLinePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i], Centroid, darkPencil))
    apexLinePoints.push(...label(Centroid, "O", "up"));

  }
  return apexLinePoints;
}


export function findCentroid(tvEndPoint) {
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

export function Plane_Steps() {
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
