
import { getBisectLinePoints } from "@/utils/General/bisectLineHelper";
import { getLineInclinedToBothPlanesPoints, getLineProblemPoints, projectionOfLine_1Points, projectionOfLine_2Points, projectionOfLine_3Points, projectionOfLine_4Points } from "@/utils/Line/lineproblem";

import { PScale } from "@/utils/Scale/Scale";
// import { getProblem_6_Points } from "@/utils/Line/lineproblem";
import { ellipse_by_concentricCriclemethodPoint } from "@/utils/Ellipse/ellipse_by_concentricCriclemethodPoint";
import { ellipse_by_generalmethodPoint } from "@/utils/Ellipse/ellipse_by_general_method";
import { parabola_by_generalmethodPoint } from "@/utils/Parabola/parabola_general_method";
import { hyperbola_by_generalmethod } from "@/utils/Hyperbola/hyperbola_genral_method";
import { PointExercises } from "@/utils/General/point";
import { Plane } from "@/utils/Plane/Plane";
import { Solid } from "@/utils/Solid/solid";
import { cycloidPoint } from "@/utils/Cycloidal/cycloid";
import { hypocycloidPoint } from "@/utils/Cycloidal/hypocycloid";
import { epicycloidPoint } from "@/utils/Cycloidal/epicycloid";
import { ParabolaByPARALLELOGRAMMethod, ParabolaByRectangularMethod, ParabolaByTangentMethod } from "@/utils/Parabola/parabola";
import { scaleOfChords } from "@/utils/Scale/ScaleOfChords";
import { AngleInscaleOfChords } from "@/utils/Scale/angleInScaleOfChords";
import { involute_by_generalmethod } from "@/utils/Involute/involute";
import { DScale } from "@/utils/Scale/DScale";
import { VScale } from "@/utils/Scale/VScale";

export async function POST(request, response) {
  try {
    // Parse the request body to get counter and drawingType
    const payload = await request.json();
    const { drawingType } = payload;
    //console.log("payload.inputs.ScaleShowLength1 : " + payload.inputs.ScaleShowLength1)

    let pointsToSend = null;
    let step = null;

    // Select points based on the drawing type
    if (drawingType === "plainScale") {
      ({ points: pointsToSend, step } = PScale(payload));
    }
    if (drawingType === "diagonalScale") {
      ({ points: pointsToSend, step } = DScale(payload));
    }
    if (drawingType === "vernierScale") {
      ({ points: pointsToSend, step } = VScale(payload));
    }
    if (drawingType === "plane") {
      ({ points: pointsToSend, step } = Plane(payload));
    } 
    if (drawingType === "bisectLine") {
      ({ points: pointsToSend, step } = getBisectLinePoints(payload));
    }
    if (drawingType === "point") {
      ({ points: pointsToSend, step } = PointExercises(payload));
    }
    // if (drawingType === "line_problem_6") {
    //   ({ points: pointsToSend, step } = getProblem_6_Points(payload));
    // }
    if (drawingType === "parallelToHP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "parallelToVP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "parallelToBoth") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "parallelToHPAndInclinationToVP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "parallelToVPAndInclinationToHP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "inclinationToBoth") {
      ({ points: pointsToSend, step } = getLineInclinedToBothPlanesPoints(payload));
    }
    if (drawingType === "perpendicularToHP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "perpendicularToVP") {
      ({ points: pointsToSend, step } = getLineProblemPoints(payload));
    }
    if (drawingType === "projectionOfLine_3") {
      ({ points: pointsToSend, step } = projectionOfLine_3Points(payload));
    }
    if (drawingType === "projectionOfLine_4") {
      ({ points: pointsToSend, step } = projectionOfLine_4Points(payload));
    }
    if (drawingType === "ellipseGeneralMethod") {
      ({ points: pointsToSend, step } = ellipse_by_generalmethodPoint(payload));
    }
    if (drawingType === "ellipseConcentricCircleMethod") {
      ({ points: pointsToSend, step } = ellipse_by_concentricCriclemethodPoint(payload));
    }
  
    if (drawingType === "parabolaTangentMethod") {
      ({ points: pointsToSend, step } = ParabolaByTangentMethod(payload));
    }

    if (drawingType === "parabolaRectangularMethod") {
      ({ points: pointsToSend, step } = ParabolaByRectangularMethod(payload));
    }

    if (drawingType === "parabolaParallelogramMethod") {
      ({ points: pointsToSend, step } = ParabolaByPARALLELOGRAMMethod(payload));
    }

    if (drawingType === "parabolaGeneralMethod") {
      ({ points: pointsToSend, step } = parabola_by_generalmethodPoint(payload));
    }
    if (drawingType === "hyperbolaGeneralMethod") {
      ({ points: pointsToSend, step } = hyperbola_by_generalmethod(payload));
    }

    if (drawingType === "solid") {
      ({ points: pointsToSend, step } = Solid(payload));
    }

    if (drawingType === "cycloid") {
      ({ points: pointsToSend, step } = cycloidPoint(payload));
    }
    if (drawingType === "hypocycloid") {
      ({ points: pointsToSend, step } = hypocycloidPoint(payload));
    }
    if (drawingType === "epicycloid") {
      ({ points: pointsToSend, step } = epicycloidPoint(payload));
    }
    if (drawingType === "Involute") {
      ({ points: pointsToSend, step } = involute_by_generalmethod(payload));
    }
    if (drawingType === "scaleOfChords") {
      ({ points: pointsToSend, step } = scaleOfChords(payload));
    }
    if (drawingType === "angleInScaleOfChords") {
      ({ points: pointsToSend, step } = AngleInscaleOfChords(payload));
    }

    // Return the appropriate points
    return new Response(
      JSON.stringify({ points: pointsToSend, steps: step }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in POST API:", error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
