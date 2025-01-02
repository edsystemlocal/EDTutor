import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import {calculateAngle,defineSteps, calculateLinePointsWithCircles, calculateLabel } from "@/utils/functionHelper";
import {ArcPoints,EndPoint,Linelength, Angle, label, anglepoint} from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "@/utils/globalVariable";


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


const startPoint = { x: 100, y: 300 };
const endPoint = { x: 800, y: 300 };

let A1=["a","b","c","d","e","f","g","h","i","j"]
let B1=["a'","b'","c'","d'","e'","f'","g'","h'","i'","j'"]

let A2=["a1","b1","c1","d1","e1","f1","g1","h1","i1","j1"]
let B2=["a''","b''","c''","d''","e''","f''","g''","h''","i''","j''"]

let A3=["a2","b2","c2","d2","e2","f2","g2","h2","i2","j2"]
let B3=["a'''","b'''","c'''","d'''","e'''","f'''","g'''","h'''","i'''","j'''"]

//Global Variable
let shape=6;
let side=25;
let hpInclinde=30;
let vpInclinde=60;
let hAway=100;
let vAway=100;
let initialShapePosition="corner";
let shapeAt="HP";

const tvStartPoint={ x: 150, y:300+vAway };
const fvStartPoint={x:150,y:300-hAway}

const tv2StartPoint={ x: 350,y:300+vAway };
const fv2StartPoint={x:350,y:300-hAway}

const tv3StartPoint={ x: 550, y:300+vAway };
const fv3StartPoint={x:550,y:300-hAway}



let tvLinePoints=[],tvEndPoint=[],fvLinePoints=[],fvEndPoint=[];
let tv2LinePoints=[],tv2EndPoint=[],fv2LinePoints=[],fv2EndPoint=[];
let tv3LinePoints=[],tv3EndPoint=[],fv3LinePoints=[],fv3EndPoint=[];
let linePoints=[];


let shapeEdge,angle,move,PlaneName;


export function Calculation()
{
  if(initialShapePosition==="corner")
    angle=90;
  else 
    angle=move;  

shapeEdge=side*2;
hAway=100;
vAway=100;
move=360/shape;


}




export function Plane(payload)
 {

   

     let sendToPoints = [];
    
     const { counter} = payload;

  
     const steps = Plane_Steps(); // Generate steps dynamically
     let step = steps[counter];
  


     const PlaneType = payload.inputs["Plane Type"];
     const PlaneSideLength = payload.inputs["Side Length"];
     
     const PlaneHPAngle = payload.inputs["Incline With HP"];
     const PlaneVPAngle = payload.inputs["Inclined With VP"];
     
     const PlanePosition = payload.inputs["Plane side Postion"];
     const PlaneKeepON = payload.inputs["Plane Keep on HP/VP"];
     
     const PlaneHPAway = payload.inputs["Plane HP Distance"];
     const PlaneVPAway = payload.inputs["Plane VP Distance"];

     shape= TypeOfPlane(PlaneType);
     side=PlaneSideLength;
     hpInclinde=PlaneHPAngle;
     vpInclinde=PlaneVPAngle;
     PlaneName=PlaneType;
  
     Calculation();

    //step-1 Draw Main Line
  const mainLinePoints = calculateLinePointsWithCircles(startPoint, endPoint);
  const mainlineLength =Linelength(startPoint,endPoint);
 
  if (counter === 1) 
    sendToPoints.push( ...mainLinePoints, ...darkPencil)
  

  //step-2  draw true shap 
  let tv1lable;
  if(shapeAt="HP")    
  tv1lable=drawshape(tvStartPoint,angle,shapeEdge);
  
  if (counter === 2) 
      sendToPoints.push( ...tvLinePoints,...darkPencil,...tv1lable,...darkPencil)
    

  //step-3 draw line for FV and Draw FV
  
  for(let i=1;i<=shape;i++)
    {
      fvEndPoint[i]={x:tvEndPoint[i].x,y:fvStartPoint.y}
      
      linePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i],fvEndPoint[i]));
      linePoints.push(...lightPencil); 
    }
    
  for(let i=1;i<shape;i++)
    {
        
      fvLinePoints.push(...calculateLinePointsWithCircles(fvEndPoint[i],fvEndPoint[i+1]));
      fvLinePoints.push(...darkPencil);
      fvLinePoints.push(...calculateLabel(fvEndPoint[i],B1[i-1],"up"));
        
    }

    if (counter === 3) 
      sendToPoints.push(...linePoints,...lightPencil,...fvLinePoints,...darkPencil)
    

      // 2nd Diagrame step-4 draw FV inclined to HP 
      
      fv2EndPoint[1]={x:fv2StartPoint.x,y:fv2StartPoint.y};
      let fvlength,fvPointsLength=[];
      let max=startPoint.x,min=endPoint.x;
      for(let i=1;i<=shape;i++)
       {
         if(max<fvEndPoint[i].x)
              max=fvEndPoint[i].x;
         if(min>fvEndPoint[i].x)
          min=fvEndPoint[i].x;
       }
       fvlength=max-min;
       const merger =calculateLinePointsWithCircles(fvEndPoint[1],EndPoint(fvEndPoint[1],0,fvlength+200));
       
       const angleLinePoints =calculateLinePointsWithCircles(fv2EndPoint[1],EndPoint(fv2EndPoint[1],hpInclinde,fvlength));

      let fv2lable=[];
      for(let i=1;i<=shape;i++)
      {
        
        fvPointsLength[i]=Linelength(fvEndPoint[1],fvEndPoint[i]);
        fv2EndPoint[i]=EndPoint(fv2EndPoint[1],hpInclinde,fvPointsLength[i]);
        fv2lable.push(...calculateLabel(fv2EndPoint[i],A2[i-1], "up"));
      }
     
       
       if (counter === 4) 
        sendToPoints.push(...merger,...lightPencil,...angleLinePoints,...darkPencil,...fv2lable)  

      // step-5 vertical line 
      let verticalLine=[];
      for(let i=1;i<=shape;i++)
      {
        verticalLine.push(...calculateLinePointsWithCircles(fv2EndPoint[i],{x:fv2EndPoint[i].x,y:500}));
        verticalLine.push(...lightPencil);
      }
     
      //horizatal line
      let horizontalLine=[];
      for(let i=1;i<=shape;i++)
      {
        horizontalLine.push(...calculateLinePointsWithCircles(tvEndPoint[i],{x:750,y:tvEndPoint[i].y}));
        horizontalLine.push(...lightPencil);
      }
       
      //cross point TV inclined to HP
      
       for(let i=1;i<=shape;i++)
       {
         tv2EndPoint[i]={x:fv2EndPoint[i].x,y:tvEndPoint[i].y}
         
       }
       
       
      
       
       for(let i=1;i<=shape;i++)
       {
        let j=i+1;
        if(j>shape )
            j=1;
        tv2LinePoints.push(...calculateLinePointsWithCircles(tv2EndPoint[i],tv2EndPoint[(j)]));
        tv2LinePoints.push(...darkPencil);
        tv2LinePoints.push(...calculateLabel(tv2EndPoint[i],B2[i-1],"up"));
      }
      
      if (counter === 5) 
        sendToPoints.push( ...verticalLine,...lightPencil,...horizontalLine,...lightPencil,...tv2LinePoints,...darkPencil)  

      
      // step-6 ,3rd digram
      let vpinclindelinepoints=calculateLinePointsWithCircles(
        {x:endPoint.x-200,y:endPoint.y},EndPoint({x:endPoint.x-200,y:endPoint.y},180+vpInclinde,300));

         
       tv3EndPoint[1]=tv3StartPoint;
       
       let angle3=[],tv3length=[], newangle=180+vpInclinde;
        
       for(let i=1;i<=shape;i++)
       {
        let j=i+1;
           if(j>shape)
                j=1;
          
          tv3length[i]=Linelength(tv2EndPoint[i],tv2EndPoint[j]);  
          //angle3[i]=anglepoint(tv2EndPoint[i],tv2EndPoint[j],tv3length[i])
          angle3[i]=FindAngle(tv2EndPoint[i],tv2EndPoint[j]);
       }
       
       
       
       for(let i=1;i<=shape;i++)
        {
           let j=i+1;
           if(j>shape)
                j=1;
          
          // tv3length[i]=Linelength(tv2EndPoint[i],tv2EndPoint[j]);  
         
            tv3EndPoint[j]=EndPoint(tv3EndPoint[i],newangle,tv3length[i]);

          
         // angle3=FindAngle(tv2EndPoint[i],tv2EndPoint[j]);
        
        //  if(j===shape)
        //  { 
        //   tv3length[j]=Linelength(tv2EndPoint[j],tv2EndPoint[1]);  
        //   angle3=anglepoint(tv2EndPoint[j],tv2EndPoint[1],tv3length[j])
        //   //angle3=FindAngle(tv2EndPoint[j],tv2EndPoint[1]);
        //  }
        //  else
        // {
        //   tv3length[j]=Linelength(tv2EndPoint[j],tv2EndPoint[j+1]); 
        //   angle3=anglepoint(tv2EndPoint[j],tv2EndPoint[j+1],tv3length[j])
        //   //angle3=FindAngle(tv2EndPoint[j],tv2EndPoint[j+1]);
        // }
          newangle=newangle-angle3[i]-move;
         // newangle=newangle-39;
          
          console.log("angle3"+angle3);
          tv3LinePoints.push(...calculateLinePointsWithCircles(tv3EndPoint[i],tv3EndPoint[j]));
          tv3LinePoints.push(...darkPencil);
         
          tv3LinePoints.push(...calculateLabel(tv3EndPoint[i],A3[i-1], "up")); 
        }
        if (counter === 6) 
          sendToPoints.push( ...vpinclindelinepoints,...lightPencil, ...tv3LinePoints,...darkPencil) ; 

       //vertical line
      let verticalLine3=[];
      for(let i=1;i<=shape;i++)
      {
        verticalLine3.push(...calculateLinePointsWithCircles(tv3EndPoint[i],{x:tv3EndPoint[i].x,y:100}));
        verticalLine3.push(...lightPencil);
      }
      
      //horizatal line
      let horizontalLine3=[];
      for(let i=1;i<=shape;i++)
      {
        horizontalLine3.push(...calculateLinePointsWithCircles(fv2EndPoint[i],{x:750,y:fv2EndPoint[i].y}));
        horizontalLine3.push(...lightPencil);
      }
       
      //cross point
      
       for(let i=1;i<=shape;i++)
       {
         fv3EndPoint[i]={x:tv3EndPoint[i].x,y:fv2EndPoint[i].y};  
       }
       
       for(let i=1;i<=shape;i++)
       {
        let j=i+1;
        if(j>shape )
            j=1;
        fv3LinePoints.push(...calculateLinePointsWithCircles(fv3EndPoint[i],fv3EndPoint[j]));
        fv3LinePoints.push(...darkPencil);
        fv3LinePoints.push(...calculateLabel(fv3EndPoint[i],B3[i-1], "up"));
      }
      if (counter === 7) 
        sendToPoints.push(...verticalLine3,...lightPencil, ...horizontalLine3,...lightPencil,...fv3LinePoints,...darkPencil) ;
           
            return { points: sendToPoints, step }; 

}

export function drawshape(shapeStartPoint,firstAngle,sideLength)
{
  tvEndPoint[1]=shapeStartPoint;
  let tv1lable=[];
  for(let i=1;i<=shape;i++)
  {
        tvEndPoint[i+1]=EndPoint(tvEndPoint[i],firstAngle,sideLength);
 
        tvLinePoints.push(...calculateLinePointsWithCircles(tvEndPoint[i],tvEndPoint[i+1]));
        tvLinePoints.push(...darkPencil);
        tv1lable.push(...calculateLabel(tvEndPoint[i],A1[i-1], "up"));

        firstAngle=firstAngle-move;
 }
 return tv1lable;
}

export function Plane_Steps() {
  return {
    1: defineSteps("Draw a XY Line"),

    2: defineSteps("Draw True Shape of "+PlaneName+ "in the top view",
      "where side in Parallel to XY"),
    3: defineSteps( "Project front view in XY "), 
    4: defineSteps( "Draw a front view inclined to"+hpInclinde+"with HP ") ,
    5: defineSteps( "Project second top view ") ,
    6: defineSteps( "Reproduce this top view making inclined"+vpInclinde+"with VP"),
    7:defineSteps( "project the final front view."),
      
    
   
  };
}
export function TypeOfPlane(PlaneType) {
  let type;
if(PlaneType==="Traingle")
  type=3;
if(PlaneType==="Square")
  type=4;
if(PlaneType==="Pentagone")
  type=5;
if(PlaneType==="Hexagone")
  type=6;
if(PlaneType==="Circle")
  type=16;
  
  
  
  
  return type;

   
}



