import {calculateLabel, calculateLinePointsWithCircles, defineSteps } from "./functionHelper";
import {ArcPoints,EndPoint,Linelength} from "./ScaleMethod";

export const lightPencil = [{ x: 5000, y: 5000 }];
export const darkPencil = [{ x: 5001, y: 5001 }];
export const superDarkPencil = [{ x: 5002, y: 5002 }];
const startPoint = { x: 100, y: 200 };
const endPoint = { x: 800, y: 200 };
const numPoints = 100;
export function scale_Steps() {
  return {
    1: defineSteps("Draw main line"),
    2: defineSteps(
      "Draw angled line",
      "Cut arcs of any length 5 times",
      "Draw parallel line"
    )
    
  };
}
export function PScale(payload) {
  //const length = 6;
  //const RF = "1:4";

  //convertParameters;
  //const length1 = 3;
   
  const { counter, scaleLength } = payload; // Destructure counter from payload 
  console.log("scale length is equal to : "+ scaleLength);
  let i = 10; 
  const division1=2,division2=5,division3=5;
   let x=startPoint,y=endPoint;
   let move=0,move2=0,move3=0;
   let part=0,part2=0,part3=0;
   let angle=330,angle2=300,angle3=235;

   let sendToPoints = [];

  //step-1 
  

   
   let arcPoints=[],arcPoints2=[],arcPoints3=[];
   let partPoints=[],partPoints2=[],partPoints3=[];
   let multipleLine=[],multipleLine2=[],multipleLine3=[];
   if (counter === 1) {
   const mainLinePoints = calculateLinePointsWithCircles(startPoint, endPoint);

   sendToPoints.push(
    ...mainLinePoints,
      ... calculateLabel(startPoint, ""+i, "down"),
      ...darkPencil
  );
}

   const mainlineLength =Linelength(startPoint,endPoint);
   
    // step-2
  const inclindLine1endpoints=EndPoint(startPoint,330,mainlineLength);
  // step-3
  const InclindLine1Length =Linelength(startPoint,endPoint);
  move=InclindLine1Length/(division1+2);
  if (counter === 2) {
    const inclindLine1Points = calculateLinePointsWithCircles(startPoint, inclindLine1endpoints);
   for(let i=1;i<=division1;i++)
   {
     y=EndPoint(x,330,move)    
    arcPoints.push(...ArcPoints(x,move,330));    
    arcPoints.push(...lightPencil);
    x=y;
   }
   sendToPoints.push(
    ...inclindLine1Points,        
      ...darkPencil,
      ...arcPoints,
      ...lightPencil
  );
}
   // step-4
    part=mainlineLength/division1;
   y=endPoint;
   for(let i=division1;i>=1;i--)
    {
     
     partPoints.push(...calculateLinePointsWithCircles(EndPoint(startPoint,0,part*i),EndPoint(startPoint,330,move*i)));
     partPoints.push(...lightPencil);
     
    }
    //step-5
    
    const leftLine =calculateLinePointsWithCircles(startPoint,EndPoint(startPoint,90,120));
    
    const rightLine =calculateLinePointsWithCircles(endPoint,EndPoint(endPoint,90,120));
    
    const uperLine =calculateLinePointsWithCircles(EndPoint(startPoint,90,120),EndPoint(endPoint,90,120));
     for(let i=1;i<division1;i++)
     {
       multipleLine.push(...calculateLinePointsWithCircles(EndPoint(startPoint,0,part*i),EndPoint(EndPoint(startPoint,0,part*i),90,120)));
       multipleLine.push(...darkPencil);
     }
     
     
     //Reapet Step
    //step-6
  
    const inclindLine2endpoints=EndPoint(startPoint,angle2,mainlineLength/2);
    const inclindLine2Points = calculateLinePointsWithCircles(startPoint, inclindLine2endpoints, numPoints);
    
    //step-7
   
    const InclindLine2Length =Linelength(startPoint,inclindLine2endpoints);
     move2=InclindLine2Length/(division2+2);
    x=startPoint;
    
    for(let i=1;i<=division2;i++)
    {
      y=EndPoint(x,angle2,move2)
     
     arcPoints2.push(...ArcPoints(x,move2,angle2));
     
     arcPoints2.push(...lightPencil);
     x=y;
    }

    // step-8
   part2=part/division2;
   y=endPoint;
   for(let i=division2;i>=1;i--)
    {
     
     partPoints2.push(...calculateLinePointsWithCircles(EndPoint(startPoint,0,part2*i),EndPoint(startPoint,angle2,move2*i)));
     partPoints2.push(...lightPencil);
     
    }

    //step-9
       
     for(let i=1;i<=division2;i++)
     {
       if(division3>0)
           multipleLine2.push(...calculateLinePointsWithCircles(EndPoint(startPoint,0,part2*i),EndPoint(EndPoint(startPoint,0,part2*(i-1)),90,120)));
       else
           multipleLine2.push(...calculateLinePointsWithCircles(EndPoint(startPoint,0,part2*i),EndPoint(EndPoint(startPoint,0,part2*i),90,120)));
      

       multipleLine2.push(...lightPencil);
     }

     //step-10
     const Unit2Line1=calculateLinePointsWithCircles(EndPoint(startPoint,270,80),EndPoint(partPoints[1],270,80));
     const Unit2Line2=calculateLinePointsWithCircles(EndPoint(startPoint,270,100),EndPoint(partPoints[1],270,100));

     //Diagonal Scale
     
     let leftLineLength=120;
     const dstartPoint={x:startPoint.x,y:startPoint.y-leftLineLength}
     const inclindLine3endpoints=EndPoint(dstartPoint,angle3,leftLineLength+30);
     const inclindLine3Points = calculateLinePointsWithCircles(dstartPoint, inclindLine3endpoints);

      //step-11
   
    const InclindLine3Length =Linelength(dstartPoint,inclindLine3endpoints);
    move3=InclindLine3Length/(division3+1);
    x=dstartPoint;
   
   for(let i=1;i<=division3;i++)
   {
     y=EndPoint(x,angle3,move3)
    
    arcPoints3.push(...ArcPoints(x,move3,angle3));
    
    arcPoints3.push(...lightPencil);
    x=y;
   }
      // step-12
   part3=leftLineLength/division3;
   y=startPoint;
   for(let i=division3;i>=1;i--)
    {
     
     partPoints3.push(...calculateLinePointsWithCircles(EndPoint(dstartPoint,90,part3*(-i)),EndPoint(dstartPoint,angle3,move3*i)));
     partPoints3.push(...lightPencil);
     partPoints3.push(...calculateLabel(EndPoint(dstartPoint,angle3,move3*i), ""+i, "down"));
     
    }
    //step-13
       
    for(let i=1;i<=division3;i++)
      {
       
        multipleLine3.push(...calculateLinePointsWithCircles(EndPoint(startPoint,90,part3*i),EndPoint(EndPoint(startPoint,90,part3*i),0,part)));
        multipleLine3.push(...lightPencil);
      }
 

const Diagonal=[];


if(counter === 3) {
  sendToPoints.push(...partPoints,
  ...darkPencil,
  ...leftLine,
  ...darkPencil,
  ...rightLine,
  ...darkPencil,
  ...uperLine,
  ...darkPencil,
  ...multipleLine,
  ...darkPencil,
  
  ...inclindLine2Points,
  ...lightPencil,
   ...arcPoints2,
   ...lightPencil,
  ...partPoints2,
  ...lightPencil,
 ...multipleLine2,
 ...lightPencil,
 
 ...Unit2Line1,
 ...lightPencil,
 ...Unit2Line2,
 ...lightPencil,


  
  ...inclindLine3Points,
  ...lightPencil,
 
...arcPoints3,
...lightPencil,
 ...partPoints3,
 ...lightPencil,
 
  ...multipleLine3,
  ...lightPencil);
}
//Diagonal.push(...darkPencil);
//Diagonal.push(...mainLinePoints);

//if(division3>0){
//Diagonal.push(...inclindLine1Points,);
//Diagonal.push(...inclindLine3Points); 
//}
const steps = scale_Steps(); // Generate steps dynamically
  let step = steps[counter];
return { points: sendToPoints, step };
  

}
