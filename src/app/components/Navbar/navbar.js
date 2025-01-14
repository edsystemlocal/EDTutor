
"use client";

import { useState } from "react";
import Home from "../../page";
import Paper_June_2018 from "../../exam_solutions/paper_June_2018";
import { useRouter } from "next/router";
import companyDetails from "../Company-Details/companyDetails";

const menuItems = [


  {
    label: "General",
    children: [
      { label: "Point", path: "point" },
      { label: "Bisect Line", path: "bisectLine" },
    ],
  },

  {
    label: "Scales",
    children: [
      { label: "Plain Scale", path: "plainScale" },
      { label: "Diagonal Scales", path: "diagonalScale" },
      { label: "Comparative Scales", path: "comparativeScale" },
      { label: "Vernier Scales", path: "vernierScale" },
      {
        label: "Scale of Chords",
        children: [
          { label: "Scale of Chords", path: "scaleOfChords" },
          { label: "Angle in Scale of Chords ", path: "angleInScaleOfChords" },
        ],
      },
    ],
  },

  {
    label: "Lines",
    children: [
      { label: "Parallel to Both", path: "parallelToBoth" },
      {
        label: "Perpendicular Line",
        children: [
          { label: "Perpendicular to HP", path: "perpendicularToHP" },
          { label: "Perpendicular to VP", path: "perpendicularToVP" },
        ],
      },
      {
        label: "Parallel with Inclination Line",
        children: [
          { label: "Parallel to HP & Inclination to VP", path: "parallelToHPAndInclinationToVP" },
          { label: "Parallel to VP & Inclination to HP", path: "parallelToVPAndInclinationToHP" },
        ],
      },

      { label: "InclinationToBoth", path: "inclinationToBoth" },
      { label: "MidPoint", path: "MidPoint" },

    

    ],
  },

  {
    label: "Planes",
    children: [
      { label: "Plane", path: "plane" },
    ],
  },

  {
    label: "Solid",
    children: [
      { label: "Solid", path: "solid" },
    ],
  },



  {
    label: "Curves",
    children: [
      {
        label: "Parabola",
        children: [
          { label: "General Method", path: "parabolaGeneralMethod" },
          { label: "Tangent Method", path: "parabolaTangentMethod" },
          { label: "Rectangular Method", path: "parabolaRectangularMethod" },
          { label: "Parallelogram Method", path: "parabolaParallelogramMethod" },
        ],
      },
      {
        label: "Hyperbola",
        children: [
          { label: "General Method", path: "hyperbolaGeneralMethod" },
        ],
      },
      {
        label: "Ellipse",
        children: [
          { label: "General Method", path: "ellipseGeneralMethod" },
          { label: "Concentric Circle Method", path: "ellipseConcentricCircleMethod" },
        ],
      },

      {
        label: "Cycloidal",
        children: [
          { label: "Cycloid", path: "cycloid" },
          { label: "Epicycloid", path: "epicycloid" },
          { label: "Hypocycloid", path: "hypocycloid" },
        ],
      },
      { label: "Involute", path: "Involute" },
    ],
  },



  {
    label: "Exam Paper",
    children: [
      {
        label: "RGPV University",
        children: [
          { label: "June_2023", path: "June_2023" },
          { label: "June_2022", path: "june_2022" },
          { label: "November_2022", path: "november_2022" },
          { label: "June_2020_GS", path: "june_2020_GS" },
          { label: "June_2020_CBGS", path: "june_2020_CBGS" },

        ],
      },
      {
        label: "SGSITS",
        children: [
          { label: "24_June_2023", path: "24_June_2023" },
          { label: "June_2023", path: "24_June_2023" },
          { label: "24_June_2023", path: "24_June_2023" },
        ],
      },

    ],
  },

  {
    label: "Exercise",
    children: [
      { label: "Point Exercise", path: "PointExercise" },
      { label: "Line Exercise", path: "lineExercise" },
      { label: "Scales Exercise", path: "scaleExercise" },
      { label: "Plane Exercise", path: "planeExercise" },
      { label: "Solid Exercise", path: "solidExercise" },
      { label: "Curve Exercise", path: "CurveExercise" },


    ],
  },
];

export default function Navbar({ resetDrawing }) {
  const [hoveredParent, setHoveredParent] = useState(null);
  const [hoveredChild, setHoveredChild] = useState(null);
  const [hoveredSubChild, setHoveredSubChild] = useState(null);
  const [hoveredGrandChild, setHoveredGrandChild] = useState(null);

  const route = (path, label) => {
    resetDrawing(path, label);
    console.log(label, "clicked");
    setHoveredParent(null);
    setHoveredChild(null);
    setHoveredSubChild(null);
    setHoveredGrandChild(null);

  };

  return (
    <>
      <div className="overflow-hidden bg-gray-200 py-1">
        <span className="block whitespace-nowrap animate-scroll text-blue-600 font-medium">
          {`Welcome to ${companyDetails.name}! | ${companyDetails.tagline} | Contact us at ${companyDetails.email} or ${companyDetails.contactNumber} | ${companyDetails.updates}`}
        </span>
      </div>

      <nav className="h-10 w-full flex items-center px-8 py-2 bg-blue-600 text-white mt-1">
        <div className="mx-auto flex w-full items-center gap-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer py-2"
              onMouseEnter={() => setHoveredParent(item.label)}
              onMouseLeave={() => setHoveredParent(null)}
            >
              <div className="flex items-center space-x-2 ">
                <button
                  className="my-2 px-10 py-2 text-sm font-medium transition-all duration-300 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md active:scale-95 active:translate-y-1 hover:shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 hover:-translate-y-1 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-400"
                  onClick={() => item.path && route(item.path, item.label)}
                >
                  {item.label}
                </button>

                {/* {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )} */}
              </div>

              {item.children && hoveredParent === item.label && (
                <div className="absolute top-full left-0 bg-gray-100 py-1 shadow-xl">
                  {item.children.map((child, idx) => (
                    <div
                      key={idx}
                      className="group relative"
                      onMouseEnter={() => setHoveredChild(child.label)}
                      onMouseLeave={() => setHoveredChild(null)}
                    >
                      <button
                        className="block  w-full py-2 px-4 text-left text-gray-700 font-medium transition-all duration-300 transform hover:bg-gray-200 hover:text-red-400 hover:scale-105 hover:underline"
                        onClick={() => child.path && route(child.path, child.label)}
                      >
                        {child.label}
                      </button>

                      {child.children && hoveredChild === child.label && (
                        <div className="absolute left-full top-0 bg-gray-200 py-1 shadow-lg">
                          {child.children.map((subChild, subIdx) => (
                            <button
                              key={subIdx}
                              className="block w-full py-2 px-4 text-left text-gray-700 font-medium transition-all duration-300 transform hover:bg-gray-200 hover:text-green-600 hover:scale-105"
                              onClick={() => route(subChild.path, subChild.label)}
                            >
                              {subChild.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
