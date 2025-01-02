import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import {calculateAngle,defineSteps, calculateLinePointsWithCircles } from "@/utils/functionHelper";
import {FindAngle,ArcPoints,EndPoint,Linelength, Angle, label, anglepoint} from "@/utils/Scale/ScaleMethod";
import { darkPencil, lightPencil, superDarkPencil } from "@/utils/globalVariable";


const startPoint = { x: 100, y: 300 };
const endPoint = { x: 800, y: 300 };

let A1=["a","b","c","d","e","f","g","h","i","j"]
let B1=["a'","b'","c'","d'","e'","f'","g'","h'","i'","j'"]

let A2=["a1","b1","c1","d1","e1","f1","g1","h1","i1","j1"]
let B2=["a''","b''","c''","d''","e''","f''","g''","h''","i''","j''"]

let A3=["a2","b2","c2","d2","e2","f2","g2","h2","i2","j2"]
let B3=["a'''","b'''","c'''","d'''","e'''","f'''","g'''","h'''","i'''","j'''"]

//Global Variable
let PlaneName;
let side=25;
let sideCorner="corner";//position1
let inParallel="Parallel"//Position2
let shapeAt="HP";//position3
let hpInclinde=30;
let vpInclinde=60;

let tvStartPoint;
let fvStartPoint;
let tv2StartPoint;
let fv2StartPoint;
let tv3StartPoint;
let fv3StartPoint;

let shapeEdge,angle,move,shape,hAway,vAway;

export function Calculation()
{
  //default value
  shapeEdge=side*2;
  hAway=100;
  vAway=100;
  shape= TypeOfPlane(PlaneName);
  move=360/shape;
  console.log("move:",move);
  angle=90;
  
  
 
  
  if(sideCorner==="Corner")
    angle=move;
  
  if(inParallel==="in")
    hAway=0;
  
  if(shapeAt=="VP")
  {
    console.log("Test VP ");
   tvStartPoint={x:150,y:300-hAway};
   fvStartPoint={ x: 150, y:300+vAway };
 
   tv2StartPoint={x:350,y:300-hAway };
   fv2StartPoint={x: 350,y:300+vAway }
 
   tv3StartPoint={  x:550,y:300-hAway};
   fv3StartPoint={x: 550, y:300+vAway};
  } else {
    tvStartPoint={ x: 150, y:300+vAway };
    fvStartPoint={x:150,y:300-hAway}

    tv2StartPoint={ x: 350,y:300+vAway };
    fv2StartPoint={x:350,y:300-hAway}

    tv3StartPoint={ x: 550, y:300+vAway };
    fv3StartPoint={x:550,y:300-hAway};
  }

}




export function Plane(payload)
 {

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
     PlaneName=PlaneType;
     side=PlaneSideLength;
     sideCorner=PlanePosition1;
     inParallel=PlanePosition2;
     shapeAt=PlanePosition3;
     hpInclinde=PlaneHPAngle;
     vpInclinde=PlaneVPAngle;
  
     Calculation();    
     let drawAll = false;
  if (counter === 1|| drawAll) {
    //step-1 Draw Main Line
    sendToPoints.push( ...calculateLinePointsWithCircles(startPoint, endPoint), ...darkPencil)
    if (finalDrawing) {
      drawAll = true;
  }
  }

  //step-2  draw true shap 
 
  let tvEndPoint = drawshape(tvStartPoint,angle,shapeEdge);
  
  if (counter === 2|| drawAll) {
      sendToPoints.push( ...drawshape1(tvEndPoint),...darkPencil);
      if (finalDrawing) {
        drawAll = true;
    }
  }

  //step-3 draw line for FV and Draw FV
  let fvEndPoint = [];
  for(let i=1;i<=shape;i++)
    {
      fvEndPoint[i]={x:tvEndPoint[i].x,y:fvStartPoint.y}
    }

    if (counter === 3 || drawAll) {
      for(let i=1;i<=shape;i++)
        {          
          sendToPoints.push(...calculateLinePointsWithCircles(tvEndPoint[i],fvEndPoint[i],lightPencil));
          sendToPoints.push(...lightPencil); 
        }
        for(let i=1;i<shape;i++) {              
            sendToPoints.push(...calculateLinePointsWithCircles(fvEndPoint[i],fvEndPoint[i+1],darkPencil));
            sendToPoints.push(...darkPencil);
            sendToPoints.push(...label(fvEndPoint[i],B1[i-1],"up"));              
          }
          if (finalDrawing) {
            drawAll = true;
        }
    }

      // 2nd Diagrame step-4 draw FV inclined to HP 
      let fv2EndPoint = [];
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
       
      let fv2lable=[];
      for(let i=1;i<=shape;i++)
      {
        
        fvPointsLength[i]=Linelength(fvEndPoint[1],fvEndPoint[i]);
        fv2EndPoint[i]=EndPoint(fv2EndPoint[1],hpInclinde,fvPointsLength[i]);
        fv2lable.push(...label(fv2EndPoint[i],A2[i-1], "up"));
      }
     
       
       if (counter === 4 || drawAll) {
        const merger =calculateLinePointsWithCircles(fvEndPoint[1],EndPoint(fvEndPoint[1],0,fvlength+200), lightPencil);
       
       const angleLinePoints =calculateLinePointsWithCircles(fv2EndPoint[1],EndPoint(fv2EndPoint[1],hpInclinde,fvlength), darkPencil);

        sendToPoints.push(...merger,...lightPencil,...angleLinePoints,...darkPencil,...fv2lable)  
       }
      
       
      //cross point TV inclined to HP
      let tv2EndPoint = [];
       for(let i=1;i<=shape;i++)
       {
         tv2EndPoint[i]={x:fv2EndPoint[i].x,y:tvEndPoint[i].y}         
       }
      
      if (counter === 5 || drawAll)  {
          // step-5 vertical line 
          let verticalLine=[];
          for(let i=1;i<=shape;i++)
          {
            verticalLine.push(...calculateLinePointsWithCircles(fv2EndPoint[i],{x:fv2EndPoint[i].x,y:tv2StartPoint.y}, lightPencil));
            verticalLine.push(...lightPencil);
          }
        
          //horizatal line
          let horizontalLine=[];
          for(let i=1;i<=shape;i++)
          {
            horizontalLine.push(...calculateLinePointsWithCircles(tvEndPoint[i],{x:750,y:tv2EndPoint[i].y}, lightPencil));
            horizontalLine.push(...lightPencil);
          }
          let tv2LinePoints = [];
          for(let i=1;i<=shape;i++)
            {
             let j=i+1;
             if(j>shape )
                 j=1;
             tv2LinePoints.push(...calculateLinePointsWithCircles(tv2EndPoint[i],tv2EndPoint[(j)], darkPencil));
             tv2LinePoints.push(...darkPencil);
             tv2LinePoints.push(...label(tv2EndPoint[i],B2[i-1],"up"));
           }
          sendToPoints.push( ...verticalLine,...lightPencil,...horizontalLine,...lightPencil,...tv2LinePoints,...darkPencil)  
          if (finalDrawing) {
            drawAll = true;
          }
        }
      
      // step-6 ,3rd digram
     let tv3EndPoint = [];
       tv3EndPoint[1]=tv3StartPoint;
       
       
       let angle3=[],tv3length=[],sum=0;
        
       for(let i=1;i<=shape;i++)
       {
        let j=i+1;
           if(j>shape)
                j=1;
          
          tv3length[i]=Linelength(tv2EndPoint[i],tv2EndPoint[j]);  
          angle3[i]=anglepoint(tv2EndPoint[i],tv2EndPoint[j],tv3length[i])
          //angle3[i]=FindAngle(tv2EndPoint[i],tv2EndPoint[j]);
          console.log("angle3:"+angle3[i]);
          sum=sum+angle3[1];
       }
       
       
       let inclinedAngle=vpInclinde;
       for(let i=1;i<=shape;i++)
        {
              let j=i+1;
              if(j>shape)
                    j=1;
        
              tv3EndPoint[j]=EndPoint(tv3EndPoint[i],inclinedAngle,tv3length[i]);
            
               inclinedAngle=inclinedAngle-move;
              //  if(tv3EndPoint[i].y<tv3EndPoint[j].y)
              //       angle3[j]=360-angle3[j]-vpInclinde;
              //   else
              //       angle3[j]=angle3[j];

             
              console.log("angle3new"+angle3[j]);
         //console.log(tv2EndPoint[i].y,"   ",tv2EndPoint[j].y);
        }
        if (counter === 6 || drawAll)  {
          let vpinclindelinepoints=calculateLinePointsWithCircles(
            tv3EndPoint[1],EndPoint(tv3EndPoint[1],vpInclinde,300), lightPencil);
            let tv3LinePoints = [];
            for(let i=1;i<=shape;i++)
              {
                    let j=i+1;
                    if(j>shape)
                          j=1;      
                    tv3LinePoints.push(...calculateLinePointsWithCircles(tv3EndPoint[i],tv3EndPoint[j]));
                    tv3LinePoints.push(...darkPencil);
               
                    tv3LinePoints.push(...label(tv3EndPoint[i],A3[i-1], "up")); 
                    console.log("angle3new"+angle3[j]);
               //console.log(tv2EndPoint[i].y,"   ",tv2EndPoint[j].y);
              }
          sendToPoints.push( ...vpinclindelinepoints,...lightPencil, ...tv3LinePoints,...darkPencil) ; 
          if (finalDrawing) {
            drawAll = true;
          }
        }
      //cross point
      let fv3EndPoint = [];
       for(let i=1;i<=shape;i++)
       {
         fv3EndPoint[i]={x:tv3EndPoint[i].x,y:fv2EndPoint[i].y};  
       }
       
       
      if (counter === 7 || drawAll) {
        //vertical line
        let verticalLine3=[];
        for(let i=1;i<=shape;i++)
        {
          verticalLine3.push(...calculateLinePointsWithCircles(tv3EndPoint[i],{x:tv3EndPoint[i].x,y:fv3EndPoint.y}, lightPencil));
          verticalLine3.push(...lightPencil);
        }

          //horizatal line
        let horizontalLine3=[];
        for(let i=1;i<=shape;i++)
        {
          horizontalLine3.push(...calculateLinePointsWithCircles(fv2EndPoint[i],{x:750,y:fv2EndPoint[i].y}, lightPencil));
          horizontalLine3.push(...lightPencil);
        }

        let fv3LinePoints = [];
        for(let i=1;i<=shape;i++)
          {
           let j=i+1;
           if(j>shape )
               j=1;
           fv3LinePoints.push(...calculateLinePointsWithCircles(fv3EndPoint[i],fv3EndPoint[j]));
           fv3LinePoints.push(...darkPencil);
           fv3LinePoints.push(...label(fv3EndPoint[i],B3[i-1], "up"));
         }
        sendToPoints.push(...verticalLine3,...lightPencil, ...horizontalLine3,...lightPencil,...fv3LinePoints,...darkPencil) ;
        if (finalDrawing) {
          drawAll = true;
        }
      }
            return { points: sendToPoints, step }; 

}

export function drawshape(shapeStartPoint,firstAngle,sideLength)
{
  let tvEndPoint = [];
  tvEndPoint[1]=shapeStartPoint;
  
  for(let i=1;i<=shape;i++)
  {
        console.log("shapen angle",+firstAngle);
        tvEndPoint[i+1]=EndPoint(tvEndPoint[i],firstAngle,sideLength);
        firstAngle=firstAngle-move;
        
 }
 return tvEndPoint;
}

export function drawshape1(tvEndPoint)
{
  
  let tvLinePoints1=[];
  for(let i=1;i<=shape;i++)
  {
 
        tvLinePoints1.push(...calculateLinePointsWithCircles(tvEndPoint[i],tvEndPoint[i+1]));
        tvLinePoints1.push(...darkPencil);
        tvLinePoints1.push(...label(tvEndPoint[i],A1[i-1], "up"));
        
 }
 return tvLinePoints1;
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
export function TypeOfPlane(PlaneName) {
  let type;
if(PlaneName==="Traingle")
  type=3;
if(PlaneName==="Square")
  type=4;
if(PlaneName==="Pentagone")
  type=5;
if(PlaneName==="Hexagone")
  type=6;
if(PlaneName==="Circle")
  type=16;
  
  
  
  
  return type;

   
}