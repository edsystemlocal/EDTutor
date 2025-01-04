import { calculateAngle, calculateAngledLinePoints, calculateArcPoints, calculateDistance, calculateLabel, calculateLinePointsWithCircles, defineSteps, drawParallelArrow, drawPerpendicularArrow, drawQuarterCircle, } from "../functionHelper";
import { darkPencil, lightPencil, startPoint, } from "../globalVariable";
export function AngleIn_scaleOfChords_Steps(values) {
    const { Angle } = values;
    return {
        1: defineSteps(" Draw Scale Of Chords ",
        ),
        2: defineSteps(
            `Draw any line PQ. `,
        ),
        3: defineSteps(
            "With any point S on it as centre and radius equal to 0-60 (from the scale of chords), draw an arc cutting PS at a point R. ",

        ),
        4: defineSteps(
            `With R as centre and radius equal to 0-${Angle} (chord of ${Angle}°) cut the arc at a point T. .`,
        ),
        5: defineSteps(
            `Draw a line joining S with T. Then  RST = ${Angle}°.`,
        ),
    };
}


export function AngleInscaleOfChords(payload) { //ParalleltoHP_and_InclinedtoVP
    const { counter , inputs , finalDrawing} = payload;
    const {Angle}= inputs;
    const Diameter= 180;
    let fullLength = 254;

    let values ={
        Diameter,
        Angle
        
   }
   const AngleInDegree = 180-Angle;
    console.log("Diameter =", Diameter)
    const ChordsLineLenght = 30;


    let pointStartPoint = { x: startPoint.x, y: startPoint.y };
    let pointEndPoint = { x: startPoint.x + fullLength, y: startPoint.y }
    
    let SecondtStartPoint = {x: startPoint.x+320, y: startPoint.y};
    let secondEndPoint = {x: startPoint.x+650, y: startPoint.y}

    let DiameterLineEndPoint = { x: startPoint.x + Diameter, y: startPoint.y };


    let secondDiameterLineStartPoint = {x: startPoint.x+350, y: startPoint.y};
    let secondDiameterLineEndPoint = { x: secondDiameterLineStartPoint.x +Diameter, y: secondDiameterLineStartPoint.y };


    let perpendicularLineEndpoint = { x: DiameterLineEndPoint.x, y: DiameterLineEndPoint.y - Diameter };



    const circle = drawQuarterCircle(DiameterLineEndPoint, 180, 85, Diameter);

    let ChordsLineLenghtPoint = { x: pointStartPoint.x, y: pointStartPoint.y + ChordsLineLenght };
    let secondPointFrontOfVPPoint = { x: pointEndPoint.x, y: pointEndPoint.y + ChordsLineLenght };

    let oneStartPoint = { x: startPoint.x + fullLength / 9 * 1 + 4, y: startPoint.y };
    let twoStartPoint = { x: startPoint.x + fullLength / 9 * 2 + 7, y: startPoint.y };
    let threeStartPoint = { x: startPoint.x + fullLength / 9 * 3 + 9, y: startPoint.y };
    let fourStartPoint = { x: startPoint.x + fullLength / 9 * 4 + 11, y: startPoint.y };
    let fiveStartPoint = { x: startPoint.x + fullLength / 9 * 5 + 12, y: startPoint.y };
    let sixStartPoint = { x: startPoint.x + fullLength / 9 * 6 + 11, y: startPoint.y };
    let sevenStartPoint = { x: startPoint.x + fullLength / 9 * 7 + 9, y: startPoint.y };
    let eightStartPoint = { x: startPoint.x + fullLength / 9 * 8 + 5, y: startPoint.y };

    let onePointFrontOfVPPoint = { x: oneStartPoint.x, y: oneStartPoint.y + ChordsLineLenght };
    let twoPointFrontOfVPPoint = { x: twoStartPoint.x, y: twoStartPoint.y + ChordsLineLenght };
    let threePointFrontOfVPPoint = { x: threeStartPoint.x, y: threeStartPoint.y + ChordsLineLenght };
    let fourPointFrontOfVPPoint = { x: fourStartPoint.x, y: fourStartPoint.y + ChordsLineLenght };
    let fivePointFrontOfVPPoint = { x: fiveStartPoint.x, y: fiveStartPoint.y + ChordsLineLenght };
    let sixPointFrontOfVPPoint = { x: sixStartPoint.x, y: sixStartPoint.y + ChordsLineLenght };
    let sevenPointFrontOfVPPoint = { x: sevenStartPoint.x, y: sevenStartPoint.y + ChordsLineLenght };
    let eightPointFrontOfVPPoint = { x: eightStartPoint.x, y: eightStartPoint.y + ChordsLineLenght };


    let Angledline1 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 90, Diameter);
    let Angledline2 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 80, Diameter);
    let Angledline3 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 70, Diameter);
    let Angledline4 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 60, Diameter);
    let Angledline5 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 50, Diameter);
    let Angledline6 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 40, Diameter);
    let Angledline7 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 30, Diameter);
    let Angledline8 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 20, Diameter);
    let Angledline9 = calculateAngledLinePoints(DiameterLineEndPoint, 180 - 10, Diameter);


    const dist1 = calculateDistance(pointStartPoint, Angledline1);

    const dist2 = calculateDistance(pointStartPoint, Angledline2);

    const dist3 = calculateDistance(pointStartPoint, Angledline3);

    const dist4 = calculateDistance(pointStartPoint, Angledline4);

    const dist5 = calculateDistance(pointStartPoint, Angledline5);

    const dist6 = calculateDistance(pointStartPoint, Angledline6);

    const dist7 = calculateDistance(pointStartPoint, Angledline7);

    const dist8 = calculateDistance(pointStartPoint, Angledline8);

    const dist9 = calculateDistance(pointStartPoint, Angledline9);


    const cutarc1 = calculateArcPoints(perpendicularLineEndpoint, Angledline4, darkPencil)


    const cutarc2 = calculateArcPoints(perpendicularLineEndpoint, Angledline7, darkPencil)

    const cutarc3 = calculateArcPoints(perpendicularLineEndpoint, Angledline1, lightPencil)
    const cutarc4 = calculateArcPoints(perpendicularLineEndpoint, Angledline2, lightPencil)
    const cutarc5 = calculateArcPoints(perpendicularLineEndpoint, Angledline3, lightPencil)
    const cutarc6 = calculateArcPoints(perpendicularLineEndpoint, Angledline5, lightPencil)
    const cutarc7 = calculateArcPoints(perpendicularLineEndpoint, Angledline6, lightPencil)
    const cutarc8 = calculateArcPoints(perpendicularLineEndpoint, Angledline8, lightPencil)
    const cutarc9 = calculateArcPoints(perpendicularLineEndpoint, Angledline9, lightPencil)


    let AngledLineEndPoint = calculateAngledLinePoints (secondDiameterLineEndPoint , AngleInDegree , Diameter)



    let drawAll = false;
    const sendToPoints = [];

    

    if (counter === 1 || drawAll) {


        sendToPoints.push(
            ...calculateLinePointsWithCircles(pointStartPoint, pointEndPoint, darkPencil),
            ...darkPencil,
            ...calculateLabel(pointStartPoint, "A", "left-up"),
            ...calculateLabel(pointEndPoint, "D", "right-up"),
            ...calculateLinePointsWithCircles(pointStartPoint, DiameterLineEndPoint, darkPencil),
            ...darkPencil,
            ...calculateLabel(DiameterLineEndPoint, "B", "right-up"),
            ...calculateLinePointsWithCircles(DiameterLineEndPoint, perpendicularLineEndpoint, darkPencil),
            ...darkPencil,
            ...calculateLabel(perpendicularLineEndpoint, "C", "right-down"),
            ...calculateLabel(perpendicularLineEndpoint, "90", "up"),
            ...circle,
            ...lightPencil,
            ...cutarc1,
            ...darkPencil,
            ...calculateLabel(Angledline4, "60", "up"),
            ...cutarc2,
            ...darkPencil,
            ...calculateLabel(Angledline7, "30", "up"),
            ...cutarc3,
            ...lightPencil,
            ...calculateLabel(Angledline1, "90", "up"),
            ...cutarc4,
            ...lightPencil,
            ...calculateLabel(Angledline2, "80", "up"),
            ...cutarc5,
            ...lightPencil,
            ...calculateLabel(Angledline3, "70", "up"),
            ...cutarc6,
            ...lightPencil,
            ...calculateLabel(Angledline5, "50", "up"),
            ...cutarc7,
            ...lightPencil,
            ...calculateLabel(Angledline6, "40", "up"),
            ...cutarc8,
            ...lightPencil,
            ...calculateLabel(Angledline8, "20", "left"),
            ...cutarc9,
            ...lightPencil,
            ...calculateLabel(Angledline9, "10", "left"),

        );

        if (finalDrawing) {

            drawAll = true;
        }
    }



    if (counter === 1 || drawAll) {
        sendToPoints.push(
            ...drawQuarterCircle(pointStartPoint, 45, 0, dist1),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 50, 0, dist2),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 55, 0, dist3),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 60, 0, dist4),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 65, 0, dist5),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 70, 0, dist6),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 75, 0, dist7),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 80, 0, dist8),
            ...lightPencil,
            ...drawQuarterCircle(pointStartPoint, 85, 0, dist9),
            ...lightPencil,

        );

        if (finalDrawing) {
            drawAll = true;
        }
    }
    if (counter === 1 || drawAll) {


        sendToPoints.push(
            ...calculateLinePointsWithCircles(pointStartPoint, ChordsLineLenghtPoint),
            ...darkPencil,
            ...calculateLabel(ChordsLineLenghtPoint, "E", "left"),
            ...calculateLabel(ChordsLineLenghtPoint, "0", "down"),
            ...calculateLinePointsWithCircles(pointEndPoint, secondPointFrontOfVPPoint),
            ...darkPencil,
            ...calculateLabel(secondPointFrontOfVPPoint, "F", "right"),
            ...calculateLabel(secondPointFrontOfVPPoint, "90", "down"),
            ...calculateLinePointsWithCircles(ChordsLineLenghtPoint, secondPointFrontOfVPPoint),
            ...darkPencil,
            ...calculateLinePointsWithCircles(oneStartPoint, onePointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(onePointFrontOfVPPoint, "10", "down"),
            ...calculateLinePointsWithCircles(twoStartPoint, twoPointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(twoPointFrontOfVPPoint, "20", "down"),
            ...calculateLinePointsWithCircles(threeStartPoint, threePointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(threePointFrontOfVPPoint, "30", "down"),
            ...calculateLinePointsWithCircles(fourStartPoint, fourPointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(fourPointFrontOfVPPoint, "40", "down"),
            ...calculateLinePointsWithCircles(fiveStartPoint, fivePointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(fivePointFrontOfVPPoint, "50", "down"),
            ...calculateLinePointsWithCircles(sixStartPoint, sixPointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(sixPointFrontOfVPPoint, "60", "down"),
            ...calculateLinePointsWithCircles(sevenStartPoint, sevenPointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(sevenPointFrontOfVPPoint, "70", "down"),
            ...calculateLinePointsWithCircles(eightStartPoint, eightPointFrontOfVPPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(eightPointFrontOfVPPoint, "80", "down"),

        );

        if (finalDrawing) {
            drawAll = true;
        }

        

    }
    if (counter === 2|| drawAll) {

        sendToPoints.push(
            ...calculateLinePointsWithCircles(SecondtStartPoint,secondEndPoint,lightPencil),
            ...lightPencil,
            ...calculateLabel(SecondtStartPoint, "P", "down"),
            ...calculateLabel(secondEndPoint, "Q", "down"),
 
          
            );

        if (finalDrawing) {
            drawAll = true;
        }
    
    }



    
    if (counter === 3|| drawAll) {
        sendToPoints.push(
           
            ...calculateLinePointsWithCircles(secondDiameterLineStartPoint,secondDiameterLineEndPoint,darkPencil),
            ...darkPencil,
            ...calculateLabel(secondDiameterLineStartPoint, "R", "down"),
            ...calculateLabel(secondDiameterLineEndPoint, "S", "down"),
            ...drawQuarterCircle(secondDiameterLineEndPoint,180,90,Diameter),
            ...lightPencil,
          
            );
        

                if (finalDrawing) {
                    drawAll = true;
                }
               
    }
    
    if (counter === 4|| drawAll) {
        const cutarc = calculateArcPoints(secondDiameterLineStartPoint, AngledLineEndPoint, darkPencil)

        sendToPoints.push(
            ...cutarc,
            ...darkPencil,
            ...calculateLabel(AngledLineEndPoint, "T", "up"),

          
          
            );

                if (finalDrawing) {
                    drawAll = true;
                }
    }  
    if (counter === 5|| drawAll) {
        sendToPoints.push(
            ...calculateLinePointsWithCircles(secondDiameterLineEndPoint,AngledLineEndPoint ,darkPencil),
            ...darkPencil,

          
          
            );

                if (finalDrawing) {
                    drawAll = true;
                }
    }  
   
    const steps = AngleIn_scaleOfChords_Steps(values); // Generate steps dynamically
        const step = drawAll
            ? Object.values(steps).map((s, index) => `Step ${index + 1}: ${s}`).join("\n")
            : steps[counter];
        return { points: sendToPoints, step }; // Return empty points and message for invalid counter
    }

   