
"use client";
import { useState } from "react";
import LineDashboard from "../components/Line-Dashboard/LineDashboard";
import ScaleDashboard from "../components/Scale-Dashboard/ScaleDashBoard";
import DScaleDashboard from "../components/Scale-Dashboard/DScaleDashBoard";
import Navbar from "../components/Navbar/navbar";
import HyperbolaDashboard from "../components/Hyperbola-Dashboard/HyperbolaDashboard";
import PointDashboard from "../components/Point-Dashboard/PointDashboard";
import BisectLineDashboard from "../components/BisectLine-Dashboard/bisectLineDashboard";
import HomeDashboard from "../components/Home-Dashboard/HomeDashboard";
import EllipseConcentricCircleMethodDashboard from "../components/Ellipse-Dashboard/EllipseConcentricCircleMethodDashboard";
import EllipseGeneralMethodDashboard from "../components/Ellipse-Dashboard/EllipseGeneralMethodDashboard";
import PerpendiculartoVpDashboard from "../components/Line-Dashboard/PerpendiculartoVpDashboard";
import PerpendiculartoHpDashboard from "../components/Line-Dashboard/PerpendiculartoHpDashboard";
import TangentDashboard from "../components/Parabola-Dashboard/TangentDashboard";
import ParallelogramDashboard from "../components/Parabola-Dashboard/ParallelogramDashboard";
import GeneralMethodDashboard from "../components/Parabola-Dashboard/GeneralMethodDashboard";
import InclinationtobothDashboard from "../components/Line-Dashboard/InclinationtobothDashboard";
import Paper_June_2023 from "../exam_solutions/Paper_June_2023";
import PlaneDashboard from "../components/Plane-Dashboard/PlaneDashboard";
import Paper_June_2022 from "../exam_solutions/paper_June_2022";
import Paper_November_2022 from "../exam_solutions/Paper_November_2022";
import Paper_June_2020_GS from "../exam_solutions/Paper_June_2020_GS";
import Paper_June_2020_CBGS from "../exam_solutions/Paper_June_2020_CBGS";
import ParalleltobothDashboard from "../components/Line-Dashboard/ParalleltobothDashboard";
import SliderPanel from "../components/Slider-Panel/SliderPanel";
import LineExercise from "../exercise_questions/LineExercise";
import ScaleExercise from "../exercise_questions/ScaleExercise";
import PlaneExercise from "../exercise_questions/PlaneExercise";
import PointExercise from "../exercise_questions/PointExercise";

import SolidDashboard from "../components/Solid-Dashboard/solidDashboard";


import CycloidDashboard from "../components/Cycloidal-Dashboard/CycloidDashboard";
import HypocycloidDashboard from "../components/Cycloidal-Dashboard/HypocycloidDashboard";
import EpicycloidDashboard from "../components/Cycloidal-Dashboard/EpicycloidDashboard";
import ScaleOfChordsDashboard from "../components/Scale_Of_Chords/scaleOfChordsDashboard";
import AngleInScaleOfChordsDashboard from "../components/Scale_Of_Chords/angleInScaleofChordsDashboard";
import InvoluteDashboard from "../components/Involute-Dashboard/involuteDashboard";
import ParalleltohpandinclinationtovpDashboard from "../components/Line-Dashboard/ParalleltohpandinclinationtovpDashboard";
import ParalleltovpandinclinationtohpDashboard from "../components/Line-Dashboard/ParalleltovpandinclinationtohpDashboard";
import MidpointDashboard from "../components/Line-Dashboard/MidpointDashboard";
import CurveExercise from "../exercise_questions/CurveExercise";
import SolidExercise from "../exercise_questions/SolidExercise";


export default function Home() {
  const [drawingType, setDrawingType] = useState("home");

  const resetDrawing = (path) => {

    if (drawingType === path) {
      setDrawingType(null); // Reset to null
      setTimeout(() => setDrawingType(path), 0); // Update after reset

    } else {
      setDrawingType(path); // Direct update for new selection

    }
  };



  // const [isOpen, setIsOpen] = useState(false);
  // const toggleSlider = () => {
  //   setIsOpen(!isOpen);
  // };

  return (

    <div className="flex flex-col w-full  ">

      {/* Navbar */}
      <Navbar resetDrawing={resetDrawing} />

      {/* Pass themeSelect state and setter to SliderPanel */}
      <SliderPanel />


      {/* Conditional Rendering of Dashboards */}
      {drawingType === "home" && <HomeDashboard />}

      {drawingType === "point" && <PointDashboard drawingType={drawingType} />}

      {drawingType === "bisectLine" && (

        <BisectLineDashboard drawingType={drawingType} />
      )}

      {drawingType === "plainScale" && <ScaleDashboard drawingType={drawingType} />}
      {drawingType === "diagonalScale" && <DScaleDashboard  drawingType={drawingType} />}
      {drawingType === "parallelToBoth" && <ParalleltobothDashboard drawingType={drawingType} />}
      {drawingType === "parallelToHPAndInclinationToVP" && <ParalleltohpandinclinationtovpDashboard drawingType={drawingType} />}
      {drawingType === "parallelToVPAndInclinationToHP" && <ParalleltovpandinclinationtohpDashboard drawingType={drawingType} />}
      {drawingType === "inclinationToBoth" && <InclinationtobothDashboard drawingType={drawingType} />}

      {drawingType === "perpendicularToHP" && <PerpendiculartoHpDashboard drawingType={drawingType} />}
      {drawingType === "perpendicularToVP" && <PerpendiculartoVpDashboard drawingType={drawingType} />}

      {drawingType === "parabolaTangentMethod" && <TangentDashboard drawingType={drawingType} />}
      {drawingType === "parabolaRectangularMethod" && <TangentDashboard drawingType={drawingType} />}
      {drawingType === "parabolaParallelogramMethod" && <ParallelogramDashboard drawingType={drawingType} />}
      {drawingType === "parabolaGeneralMethod" && <GeneralMethodDashboard drawingType={drawingType} />}


      {drawingType === "hyperbolaGeneralMethod" && <HyperbolaDashboard drawingType={drawingType} />}


      {drawingType === "ellipseGeneralMethod" && <EllipseGeneralMethodDashboard drawingType={drawingType} />}
      {drawingType === "ellipseConcentricCircleMethod" && <EllipseConcentricCircleMethodDashboard drawingType={drawingType} />}

      {drawingType === "plane" && <PlaneDashboard drawingType={drawingType} />}


      {drawingType === "solid" && <SolidDashboard drawingType={drawingType} />}



      {drawingType === "cycloid" && <CycloidDashboard drawingType={drawingType} />}
      {drawingType === "hypocycloid" && <HypocycloidDashboard drawingType={drawingType} />}
      {drawingType === "epicycloid" && <EpicycloidDashboard drawingType={drawingType} />}


      {drawingType === "Involute" && <InvoluteDashboard drawingType={drawingType} />}
      {drawingType === "scaleOfChords" && <ScaleOfChordsDashboard drawingType={drawingType} />}
      {drawingType === "angleInScaleOfChords" && <AngleInScaleOfChordsDashboard drawingType={drawingType} />}

      {drawingType === "MidPoint" && <MidpointDashboard drawingType={drawingType} />}

      {drawingType === "June_2023" && <Paper_June_2023 />}
      {drawingType === "june_2022" && <Paper_June_2022 />}
      {drawingType === "november_2022" && <Paper_November_2022 />}
      {drawingType === "june_2020_GS" && <Paper_June_2020_GS />}
      {drawingType === "june_2020_CBGS" && <Paper_June_2020_CBGS />}


      {drawingType === "PointExercise" && <PointExercise />}
      {drawingType === "lineExercise" && <LineExercise />}
      {drawingType === "scaleExercise" && <ScaleExercise />}
      {drawingType === "planeExercise" && <PlaneExercise />}
      {drawingType === "CurveExercise" && <CurveExercise />}
      {drawingType === "solidExercise" && <SolidExercise />}
    </div>
  );
}
