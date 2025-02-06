"use client";
import { useEffect, useState } from "react";
import companyDetails from "../Company-Details/companyDetails";
import { useRouter } from "next/navigation";
import { MoreVertical } from "lucide-react"; // Three-dot icon from lucide-react
import Link from "next/link";
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
    children: [{ label: "Plane", path: "plane" }],
  },
  {
    label: "Solid",
    children: [{ label: "Solid", path: "solid" }],
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
        children: [{ label: "General Method", path: "hyperbolaGeneralMethod" }],
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
      { label: " Point ", path: "PointExercise" },
      { label: " Line ", path: "lineExercise" },
      { label: " Scales ", path: "scaleExercise" },
      { label: " Plane ", path: "planeExercise" },
      { label: " Solid ", path: "solidExercise" },
      { label: " Curve ", path: "CurveExercise" },
    ],
  },
];

export default function Navbar({ resetDrawing }) {
  const [hoveredParent, setHoveredParent] = useState(null);
  const [hoveredChild, setHoveredChild] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // State for profile dropdown
  const [activeParent, setActiveParent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Three-dot menu state
  const router = useRouter(); // Initialize router

  const route = (path, label) => {
    resetDrawing(path, label);
    console.log(label, "clicked");
    setHoveredParent(null);
    setHoveredChild(null);
    setProfileOpen(false);
    setMenuOpen(false);
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
              <button
                className={`my-2 px-10 py-2 text-sm font-medium transition-all duration-300 rounded-3xl bg-gradient-to-r ${activeParent === item.label || hoveredParent === item.label
                  ? "from-blue-600 to-blue-800 text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-blue-400"
                  : "from-blue-500 to-blue-700 text-white shadow-md"
                  } hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transform hover:scale-105 hover:-translate-y-1`}
              >
                {item.label}
              </button>

              {item.children && hoveredParent === item.label && (
                <div className="absolute top-full left-0 bg-gray-200 py-1 shadow-xl">
                  {item.children.map((child, idx) => (
                    <div
                      key={idx}
                      className="group relative"
                      onMouseEnter={() => setHoveredChild(child.label)}
                      onMouseLeave={() => setHoveredChild(null)}
                    >
                      <button
                        className={`block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900 hover:scale-105 hover:underline ${idx % 2 === 0 ? "bg-blue-100" : "bg-blue-200"
                          }`}
                        onClick={() => child.path && route(child.path, child.label)}
                      >
                        {child.label}
                      </button>
                      {child.children && hoveredChild === child.label && (
                        <div className="absolute left-full top-0 bg-gray-200 py-1 shadow-xl  ">
                          {child.children.map((subChild, subIdx) => (
                            <button
                              key={subIdx}
                              className={` block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900  hover:scale-105 ${subIdx % 2 === 0 ? "bg-blue-100 " : "bg-blue-200"}`}
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
        {/* Three-dot menu */}
        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-blue-700   hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transform hover:scale-105 hover:-translate-y-1"
            onClick={() => setMenuOpen(!menuOpen)}

          >
            <MoreVertical size={24} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg text-black">
              <button className="block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900 hover:scale-105 hover:underline "
                onClick={() => router.push("/home")}
              >
                Home
              </button>
              <button className="block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900 hover:scale-105 hover:underline "
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </button>
              <button className="block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900 hover:scale-105 hover:underline "
                onClick={() => router.push("/about")}
              >
                About Us
              </button>
              <button className="block w-full py-2 px-4 text-black text-left font-medium transition-all duration-300 transform hover:bg-gray-350 hover:text-blue-900 hover:scale-105 hover:underline "
                onClick={() => router.push("/login")}
              >
                logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

