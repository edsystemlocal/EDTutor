import { calculateAngle,degreesToRadians} from "../functionHelper";

export function Linelength(startPoint, endPoint) {
  const lineLength = Math.sqrt(Math.pow(endPoint.y-startPoint.y,2)+ Math.pow(endPoint.x-startPoint.x,2));
  return  lineLength ;
}

export function EndPoint(startPoint, Degrees, Length) {
  const angleInRadians = degreesToRadians(Degrees);

  const EndPoint = {
    
    x: startPoint.x + Length * Math.cos(angleInRadians),
    y: startPoint.y - Length * Math.sin(angleInRadians),
  };

  return EndPoint ;
}

export function ArcPoints(startPoint,length,theta) {
  
  const arcPoints = [];
  
  for (let i = 10; i>=-10; i--) {
    const cordinate= EndPoint(startPoint,theta+i,length);
    arcPoints.push(cordinate);
  }
  return arcPoints;
 
}
export function Angle(pointStart,pointEnd) {
  // Calculate the angle in radians
  const angleRadians = Math.atan2(pointEnd.y - pointStart.y, pointEnd.x- pointStart.x);
  // Convert radians to degrees
  const angleDegrees = angleRadians * (180 / Math.PI);
  return angleDegrees;
}

export function unitRelation(s1, s2) {
  let n = 0, p = 0;

  if (s1 === "km" && s2 === "hm") {
    n = 10; p = 1;
  }
  if (s1 === "km" && s2 === "dm") {
    n = 100; p = 2;
  }
  if (s1 === "hm" && s2 === "dm") {
    n = 10; p = 1;
  }
  if (s1 === "hm" && s2 === "m") {
    n = 100; p = 2;
  }
  if (s1 === "dm" && s2 === "m") {
    n = 10; p = 1;
  }
  if (s1 === "dm" && s2 === "dcm") {
    n = 100; p = 2;
  }
  if (s1 === "m" && s2 === "dcm") {
    n = 10; p = 1;
  }
  if (s1 === "m" && s2 === "cm") {
    n = 100; p = 2;
  }
  if (s1 === "dcm" && s2 === "cm") {
    n = 10; p = 1;
  }
  if (s1 === "dcm" && s2 === "mm") {
    n = 100; p = 2;
  }
  if (s1 === "cm" && s2 === "mm") {
    n = 10; p = 1;
  }
  
  
  if (s1 === "yard" && s2 === "ft") {
    n = 3; p = 1;
  }
  if (s1 === "yard" && s2 === "inch") {
    n = 36; p = 2;
  }
  if (s1 === "ft" && s2 === "inch") {
    n = 12; p = 1;
  }
 
 
 
  if (s1 === "hh" && s2 === "min") {
    n = 6; p = 1;
  }
  if (s1 === "hh" && s2 === "sec") {
    n = 36; p = 2;
  }
  if (s1 === "min" && s2 === "sec") {
    n = 6; p = 1;
  }
  console.log("calcu",+n);
  return n;
}
export function drawUnit(a) {
  if (a === "km") return "KILOMETER";
  if (a === "hm") return "HECTOMETER";
  if (a === "dm") return "DECOMETER";
  if (a === "m") return "METER";
  if (a === "cm") return "CENTIMETER";
  if (a === "dcm") return "DECIMETER";
  if (a === "mm") return "MILIMETER";
  if (a === "yard") return "YARD";
  if (a === "ft") return "FEET";
  if (a === "inch") return "INCH";
  if (a === "hh") return "HOUR";
  if (a === "min") return "MINUTE";
  if (a === "sec") return "SECOND";
  return "hi";
}

export function CalculateLOS(RF,Maxlength) {
  
  return RF*Maxlength;
}

export function CalculateRF(drawingLength,drawingLengthUnit,actualLength,actualLengthUnit) {

  let n=unitRelation(actualLengthUnit,drawingLengthUnit);
  return n*actualLength/drawingLength;
}


