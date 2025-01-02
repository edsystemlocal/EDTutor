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

export function anglepoint(startPoint,endPoint, Length) {
  //const angleInRadians = degreesToRadians(Degrees);

  //Math.cos(angleInRadians)=(endPoint.x-startPoint.x)/length;
 // Math.sin(angleInRadians)=(endPoint.y-startPoint.y)/length;
  
  let radians = Math.acos((endPoint.x-startPoint.x)/Length);

  // Convert radians to degrees (optional)
  let degrees = radians * (180 / Math.PI);

  return degrees;
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
    n = 10; p = 2;
  }
  if (s1 === "km" && s2 === "dm") {
    n = 100; p = 3;
  }
  if (s1 === "hm" && s2 === "dm") {
    n = 10; p = 2;
  }
  if (s1 === "hm" && s2 === "m") {
    n = 100; p = 3;
  }
  if (s1 === "dm" && s2 === "m") {
    n = 10; p = 2;
  }
  if (s1 === "dm" && s2 === "dcm") {
    n = 100; p = 3;
  }
  if (s1 === "m" && s2 === "dcm") {
    n = 10; p = 2;
  }
  if (s1 === "m" && s2 === "cm") {
    n = 100; p = 3;
  }
  if (s1 === "dcm" && s2 === "cm") {
    n = 10; p = 2;
  }
  if (s1 === "dcm" && s2 === "mm") {
    n = 100; p = 3;
  }
  if (s1 === "cm" && s2 === "mm") {
    n = 10; p = 2;
  }
  
  
  if (s1 === "yard" && s2 === "ft") {
    n = 3; p = 2;
  }
  if (s1 === "yard" && s2 === "inch") {
    n = 36; p = 3;
  }
  if (s1 === "ft" && s2 === "inch") {
    n = 12; p = 2;
  }
 
 
 
  if (s1 === "hh" && s2 === "min") {
    n = 6; p = 2;
  }
  if (s1 === "hh" && s2 === "sec") {
    n = 36; p = 3;
  }
  if (s1 === "min" && s2 === "sec") {
    n = 6; p = 2;
  }
  console.log("calcu",+n);
  return [n,p];
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
  return "";
}

export function CalculateLOS(RF2,Maxlength,maxlengthUnit,otherUnit) {
  let n=unitRelation(maxlengthUnit,otherUnit);
  console.log("los calling");
  return n*Maxlength/RF2;
}

export function CalculateRF(drawingLength,drawingLengthUnit,actualLength,actualLengthUnit) {

  let n=unitRelation(actualLengthUnit,drawingLengthUnit);
  return n*actualLength/drawingLength;
}
export function label(point, label, alignment) {
  let labelX = point.x;
  let labelY = point.y;
  // Adjust label position based on alignment
  switch (alignment) {
    case "up":
      labelY -= 10; // Adjust Y upwards
      break;
    case "down":
      labelY += 20; // Adjust Y downwards
      break;
    case "left":
      labelX -= 12; // Adjust X to the left
      break;
    case "right":
      labelX += 2; // Adjust X to the right
      break;
    case "left-up":
      labelX -= 12; // Adjust X to the left
      labelY -= 5; // Adjust Y further upwards
      break;
    case "left-down":
      // If label has more than one character, adjust further to the left
      labelX -= label.length > 1 ? 18 : 12;
      labelY += 20; // Adjust Y downwards
      break;
    case "right-up":
      labelX += 5; // Adjust X to the right
      labelY -= 5; // Adjust Y upwards
      break;
    case "right-down":
      labelX += label.length > 1 ? 3 : 12;
      labelY += 5; // Adjust Y downwards
      break;
    case "exact":
      labelX -= 4;
      labelY += 4; // Adjust Y downwards
      break;
    case "End-Start":
      labelX -= label.length * 9;
      console.log("label lenght" + label.length);
      labelY += 20; // Adjus// Adjust Y downwards
      break;
    default:
      break; // No adjustment if no alignment is specified
  }
  return [{ ...point, label, labelX, labelY }];
}

export function FindAngle(line1, line2) {
  const dotProduct =
    line1.x * line2.x + line1.y * line2.y; // Dot product of vectors
  const magnitude1 = Math.sqrt(line1.x ** 2 + line1.y** 2); // Magnitude of line1
  const magnitude2 = Math.sqrt(line2.x ** 2 + line2.y ** 2); // Magnitude of line2

  const cosTheta = dotProduct / (magnitude1 * magnitude2); // Cosine of angle
  const angleInRadians = Math.acos(cosTheta); // Angle in radians
  const angleInDegrees = (angleInRadians * 180) / Math.PI; // Convert to degrees

 // return angleInDegrees.toFixed(2); // Return angle rounded to 2 decimal places
 return angleInRadians;
};
