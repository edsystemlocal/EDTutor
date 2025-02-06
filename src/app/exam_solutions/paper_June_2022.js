 

import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { June2022 } from './ExamInputHelper';
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_June_2022 = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);


  const toggleTooltip = (tooltipId) => {
    setActiveTooltip((prev) => (prev === tooltipId ? null : tooltipId));
  };

   // Function to toggle the answer visibility for theory questions
   const toggleAnswer = (question) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };


  const handleClick = (question) => {
    if (question === "q2(a)") {
      setCurrentDrawing({
        drawingType: "inclinationToBoth",
        inputs: {
          LineLength: 70,
          firstpointfrontOfVPLength: 15,
          firstPointAboveHPLength: 10,
          InclinationToVP: "",
          InclinationToHP: "",
          Topview: 60,
          Frontview: 50,
        },
      });
    } else if (question === "q2(b)") {
      setCurrentDrawing({
        drawingType: "inclinationToBoth",
        inputs: {
          LineLength: 60,
          firstpointfrontOfVPLength: 10,
          firstPointAboveHPLength: 15,
          InclinationToVP: 30,
          InclinationToHP: 45,
        },
      });
    }
  };

  // Rendering the drawing canvas if there is one
  if (currentDrawing) {
    return (
      <Canvas
        inputs={currentDrawing.inputs}
        drawingType={currentDrawing.drawingType}
      />
    );
  }

  return (
    <div className="container">
      <h1 className="title">Paper June 2022</h1>
      <div className="max-w-4xl mx-auto space-y-6">

        
<QuestionCard
        question=" 1. a) Construct a forward reading vernier scale to read distance correct to decimetre on a map in which the actual distances are reduced in the ratio of 1: 40000.
 			The scale should be long enough to measure upto 6 km. Mark on the scale a length of 3.34 km and 0.59 km."
        tooltipContent={June2022.June2022Q1}
        tooltipId="q1(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q1(a)')} />

        {/* Question 1 - Theory */}

        
<QuestionCard
        question=" b) Construct a hypocycloid, rolling circle 50 mm diameter and directing circle 175 mm diameter. 
 		   Draw a tangent to it at a point 50 mm from the centre of the directing circle."
        tooltipContent={June2022.June2022Q2}
        tooltipId="q1(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q1(b)')} />

        
<QuestionCard
        question="2. a) A line AB of 70 mm long has its end A at 10 mm above H.P and 15 mm in front of V.P. Its front view and top view measure 50 mm and 60 mm respectively.
            Draw the projections of the line and determine its inclinations with H.P. and V.P."
        tooltipContent={June2022.June2022Q3}
        tooltipId="q2(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(a)')} />

        
<QuestionCard
        question=" b) A line AB, 60 mm long has its end A 15 mm above HP and 10 mm in front of V.P. 
			           It is inclined at 45° to the HP and 30° to V.P. Draw it's projections."
        tooltipContent={June2022.June2022Q4}
        tooltipId="q2(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(b)')} />

        
<QuestionCard
        question=" 3. a) Draw the isometric projections of the frustum of a cone of 50mm base diameter, 25mm top diameter and 60mm height"
        tooltipContent={June2022.June2022Q5}
        tooltipId="q3(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(a)')} />

          
<QuestionCard
        question="b) Draw the isometric view of a hexagonal prism having side of base 25mm and axis 65mm long resting on its base on HP."
        tooltipContent={June2022.June2022Q6}
        tooltipId="q3(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(b)')} />
         {/* Question 4 - Theory */}

       <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          4. a) Explain the layering concept with examples. How is it implemented into CAD software?
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <button
            onClick={() => toggleAnswer("q4a")}
            className="button-blue"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              marginLeft: "10px",
            }}
          >
            {visibleAnswers["q4a"] ? "Hide Answer" : "Show Answer"}
          </button>
        </div>
      </td>
    </tr>
    {visibleAnswers["q4a"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>The layering concept is widely used in design, engineering, and CAD (Computer-Aided Design) software to organize and manage different aspects of a project within a single file. It allows designers to separate and manage different types of information or components systematically, improving clarity, collaboration, and efficiency.
         <br></br>
          <strong>(i) Example:</strong>  
          <br></br>
Designing a Building Floor Plan
<br></br>
A CAD drawing of a building floor plan might have layers like:
<br></br>
<strong>Walls:</strong>   Includes the outlines and dimensions of walls.
<br></br>
<strong>Furniture:</strong> Shows desks, chairs, and other furnishings.
<br></br>
<strong>Electrical:</strong>Contains wiring diagrams, sockets, and switches.
<br></br>
<strong>Plumbing:</strong> Includes pipes, fixtures, and water-related elements.
<br></br>
<strong>Annotations:</strong> Contains text and notes for architects or contractors.
<br></br>

<strong>How Is Layering Implemented in CAD Software</strong>
CAD software such as AutoCAD, SolidWorks, or Revit uses layers in the following way:
<br></br>
Creating Layers:

Users can create and name layers, e.g., "Walls," "Electrical," "Annotations."
Assign properties like line color, thickness, and type.
Assigning Objects to Layers:
<br></br>
Design components (e.g., lines, circles) are assigned to specific layers during creation.
A wall line would be assigned to the "Walls" layer, while text would go to the "Annotations" layer.
Managing Layers:
<br></br>
Visibility Control: Turn layers on/off to view or hide specific details.
Locking: Lock layers to prevent unintended modifications.
Isolation: Focus only on specific layers to simplify the workspace.
Advanced Features:
<br></br>
Layers can be grouped or filtered for easier management in large designs.
Visibility states can be stored for different viewing purposes (e.g., floor plans vs. electrical diagrams).

          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>






<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          4. b) Differentiate between the first angles and third angles projection.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q4(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q4(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q4(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <b>First Angle Projection:</b> In this type of projection, the object is assumed to be situated in the first quadrant.
            <br />
            - The object lies between the observer and the planes of projection.
            <br />
            - Object is situated on or above the H.P.
            <br />
            - The front view is drawn above the XY line and the top view below the XY line.
            <br /><br />
            <b>Third Angle Projection:</b> In this type of projection system, the object is assumed to be situated in the third quadrant.
            <br />
            - The planes of projection are situated between the object and the observer.
            <br />
            - Object is situated on or above the ground.
            <br />
            - The front view is drawn below the XY line and the top view above it.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


        {/* Question 5 - Theory */}
        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        {/* Question 5a */}
        <tr>
          <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
            <p className="card-text">
              5. a) How do you specify a plotter for graphics applying?
            </p>
          </td>
          <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
            <button
              onClick={() => toggleAnswer("q5a")}  // Toggle the visibility of the answer
              className="button-blue"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              {visibleAnswers["q5a"] ? "Hide Answer" : "Show Answer"} {/* Button text changes based on visibility */}
            </button>
          </td>
        </tr>

        {/* Answer for question 5a */}
        {visibleAnswers["q5a"] && (
          <tr>
            <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
              <p>
                <b></b> To specify a plotter for graphics applications, configure the plotter in the CAD settings by selecting the desired printer from the available list. Key factors to consider include:
                <br />
                - Printer capabilities (color, resolution, paper size).
                <br />
                - Available paper sizes (A4, A3, custom).
                <br />
                - Resolution settings for high-quality output.
                <br />
                Ensure that the correct printer driver is installed and configured for compatibility with your CAD software.
              </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>


<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          5. b) What is CAD? Name two CAD Softwares. Give advantages and disadvantages of using CAD.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q5(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q5(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q5(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            CAD (computer-aided design) can be defined as, "The use of computer systems to assist in the creation, modification, analysis, or optimization of a design." 
            Computer-aided design is the technology concerned with the integrated design activities using a digital computer. This includes:
            <br />
            - Computer generation and modification of graphic images on a video display.
            <br />
            - Analysis of design data, electronic storage, retrieval of design information, and printing these designs on a plotter or printer.
            <br />
            - Generation of design drawings interactively, which can easily be edited, manipulated, and stored for future use.
            <br /><br />
            <strong>Advantages of CAD:</strong>
            <br />
            (i) CAD is faster and gives more accurate results than conventional methods.
            <br />
            (ii) Developing the design of a component and associated drafting is very easy with CAD.
            <br />
            (iii) Manipulation of dimensions and drawing elements is simple, making CAD highly effective.
            <br />
            (iv) Designs can be reused without redrawing.
            <br />
            (v) Geometric properties, tolerances, and interferences can be checked accurately.
            <br /><br />
            <strong>Common CAD Softwares:</strong>
            <br />
            (i) AutoCAD, (ii) CorelCAD, (iii) Pro-E, (iv) IDEAS, (v) CATIA
            <br /><br />
            <strong>Disadvantages of CAD:</strong>
            <br />
            (i) Requires a 32-bit word computer due to high memory and processing needs.
            <br />
            (ii) The software packages are large in size.
            <br />
            (iii) CAD demands significant investment.
            <br />
            (iv) Skill and judgment are essential for effective use.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


        {/* Question 6 - Theory */}



<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          6. b) Explain the method of drawing wireframe models of the following objects: 
          <br />
          (i) Cone 
          <br />
          (ii) Pyramid 
          <br />
          (iii) Prism
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q6(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q6(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q6(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <strong>Method of Drawing Wireframe Models:</strong>
            <br />
            <strong>(i) Cone:</strong>
            <br />
            - Begin by drawing a circular base using a wireframe circle command.
            <br />
            - Draw a vertical line representing the cone's height, ending at the apex.
            <br />
            - Connect the perimeter of the base circle to the apex with straight lines.
            <br /><br />
            <strong>(ii) Pyramid:</strong>
            <br />
            - Start by drawing the base, which could be a triangle, square, or polygon, using wireframe lines.
            <br />
            - Draw a vertical line from the center of the base to the desired height of the pyramid.
            <br />
            - Connect the vertices of the base to the apex with straight lines.
            <br /><br />
            <strong>(iii) Prism:</strong>
            <br />
            - Draw the base shape, such as a rectangle or hexagon, using wireframe tools.
            <br />
            - Duplicate the base at the required height to create the top face.
            <br />
            - Connect corresponding vertices of the top and bottom faces with straight lines to form the edges.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>

        {/* Question 7 - Theory */}
        <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          7. a) Prepare an ellipse using four different methods in AutoCAD.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q7a")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q7a"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7a"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <strong>Methods for creating an ellipse in AutoCAD:</strong>
            <br />
            <strong>1. Ellipse Command:</strong>
            <br />
            - Use the built-in Ellipse command to specify the major and minor axes.
            <br />
            - Define the center and the two endpoints of the axes.
            <br /><br />
            <strong>2. Axis and Distance:</strong>
            <br />
            - Specify one axis and the distance to the other axis.
            <br />
            - This is useful for precise dimensions of ellipses.
            <br /><br />
            <strong>3. Ellipse by Center:</strong>
            <br />
            - Start by defining the center point.
            <br />
            - Specify the lengths of the major and minor axes to create the ellipse.
            <br /><br />
            <strong>4. Ellipse as Polyline:</strong>
            <br />
            - Convert an ellipse into a polyline for easier editing and manipulation.
            <br />
            - Use the `PEDIT` command to modify the polyline representation.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          7. b) Explain about Building Information Modeling (BIM).
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q7b")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q7b"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7b"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <strong>Building Information Modeling (BIM):</strong>
            <br />
            BIM is a digital representation of the physical and functional characteristics of a building. It serves as a shared knowledge resource for information about a facility, forming a reliable basis for decisions during its lifecycle, from design to demolition.
            <br /><br />
            <strong>Key Features of BIM:</strong>
            <br />
            1) **3D Modeling**: Provides a detailed and visual representation of the building in three dimensions (geometry, spatial relationships, etc.).
            <br />
            2) **Collaboration**: Enables architects, engineers, and other stakeholders to collaborate on the same model in real time.
            <br />
            3) **Data Integration**: Combines various data types like materials, costs, and schedules into a single integrated model.
            <br />
            4) **Lifecycle Management**: Covers all phases of a building’s lifecycle, from planning and construction to maintenance and demolition.
            <br /><br />
            <strong>Advantages of BIM:</strong>
            <br />
            (i) Enhances collaboration and reduces communication errors.
            <br />
            (ii) Allows early detection of potential conflicts in design and construction.
            <br />
            (iii) Reduces project costs and time through optimized planning and execution.
            <br />
            (iv) Facilitates better facility management post-construction.
            <br /><br />
            <strong>Disadvantages of BIM:</strong>
            <br />
            (i) High initial cost of software and training.
            <br />
            (ii) Requires skilled personnel to use effectively.
            <br />
            (iii) Large-scale models can demand significant computing resources.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          8. Write short notes on the following:
          <br />
          i) Types of scales &nbsp; ii) Editing commands in CAD &nbsp; iii) Orthographic projection
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q8")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q8"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <strong>i) Types of scales:</strong>
            <br />
            Some commonly used types of scales in engineering practice are:
            <br />
            (i) Plain scales &nbsp; (ii) Diagonal scales &nbsp; (iii) Comparative scales &nbsp; 
            (iv) Vernier scales &nbsp; (v) Scale of chords &nbsp; (vi) Isometric scales.
            <br /><br />

            <strong>ii) Editing commands in CAD:</strong>
            <br />
            A drawing may be modified during preparation or revision. Editing commands in AutoCAD are of two types:
            <br />
            (1) Commands used to modify entities: <em>ERASE, UNDO, REDO, SELECT, ROTATE, CHAMFER, etc.</em>
            <br />
            (2) Commands to copy drawings: <em>COPY, MIRROR, OFFSET, ARRAY, etc.</em>
            <br /><br />

            <strong>iii) Orthographic projection:</strong>
            <br />
            If lines or projectors are parallel and perpendicular to the projection plane, the result is an orthographic projection.
            Engineers use this method to describe true shapes of objects, universally applied in engineering drawings. It systematically arranges views to show the object's exact shape.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>


      </div>
    </div>
  );
};

export default Paper_June_2022;

