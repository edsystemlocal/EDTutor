
import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { November } from './ExamInputHelper';
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_November_2022= () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);


  // Function to toggle the answer visibility for theory questions
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
      
      if (question === "q1(b)") {
        setCurrentDrawing({
          drawingType: "ellipseGeneralMethod",
          inputs: {
            
            distanceofthefocusfromthedirectrix: 50,
          },
        });
    };
    
  }
  
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
        <h1 className="title">Paper November 2022</h1>
        <div className="max-w-4xl mx-auto space-y-6">
        <QuestionCard
        question=" 1. a) An area of 144 sq cm on a map represents an area of 36 sq km on the field. Find the RF of the scale of the map and draw a diagonal scale to show km, hectometres and decametres and to measure up to 10 km.
			indicate on the scale a distance 7 km, 5 hectometres and 6 decimeters.."
        tooltipContent={November.NovemberQ1}
        tooltipId="q1(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q1(a)')} />

<QuestionCard
        question=" b) Construct a conic when the distance of its focus from its directrix is equal to 50 mm and its eccentricity is 2/3.
		   Name the curve; mark its major axis and minor axis. Draw a tangent at any point, P on the curve."
        tooltipContent={November.NovemberQ2}
        tooltipId="q1(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q1(b)')} />
<QuestionCard
        question="2. a) The length of the front view of a line CD which is parallel to HP and inclined 30 deg to VP is 50 mm. 
		  The end C of the line is 15 mm in front of VP and 25 mm above HP. Draw the projections of the line and find its true length."
        tooltipContent={November.NovemberQ3}
        tooltipId="q2(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(a)')} />
<QuestionCard
        question="b) A line PS 65 mm has its end P, 15 mm above the HP and 15 mm in front of the VP. It is inclined at 55 deg * 1 to the HP and 35 deg to the VP.
			Draw its projections."
        tooltipContent={November.NovemberQ4}
        tooltipId="q2(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q2(b)')} />
<QuestionCard
        question="3. a) Draw the projections of a pentagonal prism of base 25 mm side and 50 mm long. The prism is resting on one of its rectangular faces in with its is inclined at 45 deg P. HP"
        tooltipContent={November.NovemberQ5}
        tooltipId="q3(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(a)')} />
<QuestionCard
        question=" b) Draw the isometric view of a hexagonal prism having side of base 25 mm and axis 65 mm long resting on its base on HP."
        tooltipContent={November.NovemberQ6}
        tooltipId="q3(b)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q3(b)')} />
<QuestionCard
        question="4. a) A right circular cone of axis height 80 mm is resting on one of its generators in HP. Draw its projections. The base is 40 mm dia.."
        tooltipContent={November.NovemberQ7}
        tooltipId="q4(a)"
        activeTooltip={activeTooltip}
        toggleTooltip={toggleTooltip}
        onDrawClick={() => handleClick('q4(a)')} />

       
<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          4. b) Give some examples where the layering concept is useful to use?
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
            
            <br />
            Layering in CAD allows users to group elements and control visibility, color, and line styles. Some examples where the layering concept is useful include:
            <br />
            - Architectural drawings: Separate layers for walls, doors, windows, electrical, plumbing, and furniture.
            <br />
            - Mechanical drawings: Layers for dimensions, annotations, centerlines, and machining details.
            <br />
            - Electrical drawings: Layers for wiring diagrams, circuit layouts, and component placements.
            <br />
            - Urban planning: Layers for roads, utilities, green spaces, and zoning details.
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
          5.a) Name and explain five edit commands used in CAD?
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q5(a)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q5(a)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q5(a)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            A drawing may be modified or edited either during its preparation or during the revision of design. In AutoCAD, editing commands can be of the following two types:
            <br />
            (1) Commands used to modify the entities, e.g., ERASE, UNDO, REDO, SELECT, ROTATE, CHAMFER, etc.
            <br />
            (2) Commands used to make copies of the drawings, e.g., COPY, MIRROR, OFFSET, ARRAY, etc.
            <br />
            <strong>(i) Move:</strong> MOVE command is used to move one or more existing drawing entities from one location in drawing to another. 
   To invoke MOVE command, click MOVE from the Home tab's Modify panel or type MOVE at the command prompt. 
   Command line sequence is as follows Command: MOVE Select objects: Use an object selection method and press Enter when finished
   Specify base point or Displacement Specify a base point or enter d Specify second point or  Specify a point or press Enter
   The two points that has been specified define a vector that indicates how
	 far the selected objects to be moved and in what direction. If Enter has been pressed at the Specify second point prompt, the first point is interpreted as a relative X, Y, Z displacement. 
	 Co-ordinates, grid snaps, object snaps and other tools can be used to move objects with precision..
            <br />
            <strong>(ii) Mirror:</strong> MIRROR command creates a mirror image of the selected geometry element. 
  This command creates mirror images of entities by reflecting them symmetrically with reference to a defined axis. 
  Mirroring can be done about X or Y-axis, and also about a defined line or any two points. 
  It allows the option of move or copy the original entities within the drawing.
  Command line sequence is as follows Command: MIRROR Select objects: Select an object
  Specify first point of mirror line: Specify a point (1) Specify second point of mirror line: Specify a point (2) The two specified points become the end points of a line about which the selected objects are reflected. Delete source objects? [Yes/No] N: Enter y or n, or press Enter Yes Places the reflected image into the drawing and deletes the original objects. 
  No Places the reflected image into the drawing and retains the original objects.
            <br />
            <strong>(iii) Hatch:</strong> HATCH command fills an area defined by lines, arcs. circles, or polylines with either a predefined pattern, a user defined pattern, or
  a solid or simple non-associative hatch pattern. Boundaries of a hatch can be
  specified by one of the following methods 
  (a) Specify a point in an area that is enclosed by objects. 
  (b) Select objects that enclose an area. 
  (c) Drag a hatch pattern into an enclosed area from a tool palette or design center. The procedure to hatch is as follows - 
  1. Click Home tab→ Draw panel → Hatch A Hatch and Gradient dialog box appears. 
  2. In the Hatch and Gradient dialog box, click Add: Pick points 
  3. Now in drawing, specify a point inside each area that needs to be hatched, and then press Enter. This point is known as the internal point. 
  4. In the Hatch and Gradient dialog box, in Hatch tab, the swatch box shows the preview of the pattern that will be applied. To change the pattern, select another pattern from the Pattern list.
  5. In the Hatch and Gradient dialog box, make adjustments,
  6. Under Draw Order, click one of the options. Draw order of the hatch can be changed, so that the hatch is drawn either behind or in front of the hatch boundary, or behind or in front of all other objects. 
  7. Click OK. 
            <br />
            <strong>(iv) Offset:</strong> OFFSET command creates an object parallel to and at a specified distance from the original. In other words OFFSET command is used to draw parallel lines, polylines, concentric circles, arc, etc. The command prompt sequence is Command: OFFSET Offset distance or Through current 
  (a) Offset Distance Option: In this option, we have to specify the offset distance and the side to offset. 
  Command prompt sequence, for constructing a straight line parallel to a given line AB and at a distance of 2 units towards right as shown in
  Command: OFFSET Offset distance or Through default: 2 Select object to offset: (Select line AB) Side to offset?:
  (Pick point P) Select object to offset: Offset distance can also be entered by picking two points using cursor.
  AutoCAD will measure the distance between these two points and use it as the offset distance.
  (b) Through Option In A through option an offset point is specified instead of specifying the offset distance. A circle drawn concentric to a given circle and passing through an offset point is shown in  
            <br />
            <strong>(v) Copy:</strong>The COPY command is used to duplicate one or more existing drawing entities at another location without erasing the original one. Copy command can be invoked by clicking the Copy tool in the Home tab's Modify panel or by typing COPY at the command prompt. 
  The command line sequence for COPY command is as follows Ad Download to read ad-free Command: COPY Select objects: Select objects by an object selection method Current setting: Copy mode = current Specify base point or Displacement/mOde/Multiple Displacement Specify a base point or enter an option Specify second point or  use first point as displacement : Specify a point or press Enter
  Function of various options of COPY command are as follows
   (a) Displacement Specifies a relative distance and direction using co-ordinates.
  Specify displacement last value Enter co-ordinates to represent a vector 
  (b) Mode-Controls whether the command repeats automatically. 
  This setting is controlled by the COPYMODE system variable. Enter a copy mode option Single/Multiple current  Enter s or m
  (c) Multiple Overrids the single mode setting. The COPY command is set to repeat automatically for the duration of the command. This setting is controlled by the COPYMODE system variable. 
  Multiple option is displayed only when copy mode is set to single.
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
          5.b) Explain the various advantages of CAD.
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
            Engineering design is an interactive process, and when performed on drawing boards, it is quite cumbersome and time-consuming. Today, in the era of rapid technological changes, product innovation, and greater response to customer requirements, CAD provides an innovative and efficient system for design. 
            <br />
            CAD has the following advantages over the traditional method of design:
            <br />
            (i) Computer-aided design (CAD) is faster and gives more accurate results than conventional methods. 
            <br />
            (ii) Developing the design of a component and associated drafting is a very easy task with CAD. 
            <br />
            (iii) Manipulating various dimensions, attributes, and distances of drawing elements is very easy. This makes CAD the most useful designing tool. 
            <br />
            (iv) Using CAD, it is not necessary to redraw any design or part of it for further usage. A component once designed can be copied anywhere for further references.
            <br />
            (v) Various geometric properties, including dimensions of various components, their tolerance, and interference with each other, can be checked accurately, without making their models and prototypes. 
            <br />
            (vi) By specifying the material used and the atmospheric working conditions for the component, its behavior can be analyzed by using CAD.
            <br />
            (vii) The kinematic feature of CAD packages enables the designer to visualize the operational performance of the component. 
            <br />
            (viii) Several professional CAD packages also have 3D visualization capabilities, which help the designer see their product from different orientations. 
            <br />
            (ix) Two or more designs can be compared analytically.
            <br />
            (x) Drawings are stored in a systematic manner, which allows for easy and fast retrieval.
            <br />
            Thus, the use of a CAD system provides better engineering drawings, more standardization of drawings, better documentation, fewer design errors, and greater legibility.
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
          6. a) What is the use of UCS icon? Explain in detail?
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q6(a)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q6(a)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q6(a)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            The UCS icon appears at the lower-left corner of the drawing area. This is the User Coordinate System (UCS) icon, 
            which determines the user's orientation in the drawing. The X and Y indicate the x- and y-axes of the drawing.
          </p>
        </td>
      </tr>
    )}
  </tbody>
</table>

<table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
  <tbody>
    {/* Question 6b */}
    <tr>
      <td style={{ padding: "10px", verticalAlign: "top", width: "80%" }}>
        <p className="card-text">
          6. b) Write about Dialog boxes and windows in CAD software.
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

    {/* Answer for question 6b */}
    {visibleAnswers["q6(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            Dialog boxes and windows in CAD software are crucial components of the user interface,
            designed to facilitate user interactions with the software. These elements provide
            a means for users to input data, configure settings, and interact with various tools and
            features. 
          </p>
          <p>
            <strong>Dialog Boxes:</strong> Dialog boxes are typically temporary windows that require
            user action before continuing with a task. For example, when saving a file, setting dimensions,
            or configuring tool parameters, dialog boxes prompt the user for specific inputs. These
            boxes often contain text fields, dropdown menus, checkboxes, and buttons for easy input.
          </p>
          <p>
            <strong>Windows:</strong> CAD software windows are larger, persistent interface elements
            that display the main workspace, tools, and outputs. These can include the drawing canvas,
            feature trees, property managers, and visualization panels. Windows in CAD software are
            designed to support multitasking and ensure easy access to multiple tools and functions.
          </p>
          <p>
            Together, dialog boxes and windows enhance usability and streamline workflows, allowing
            users to efficiently create and manage their designs.
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
          7. a) Explain the various commands used for transformation of an object. i) Move ii) Copy iii) Rotate iv) Mirror
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q7(a)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q7(a)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7(a)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            <b>(1) Move =</b> MOVE command is used to move one or more existing drawing entities from one location in drawing to another.
            To invoke MOVE command, click MOVE from the Home tab's Modify panel or type MOVE at the command prompt.
            Command line sequence is as follows:
            <br />
            Command: MOVE Select objects: Use an object selection method and press Enter when finished
            Specify base point or Displacement Specify a base point or enter d Specify second point or Specify a point or press Enter
            <br />
            The two points that have been specified define a vector that indicates how far the selected objects should be moved and in what direction. 
            If Enter has been pressed at the Specify second point prompt, the first point is interpreted as a relative X, Y, Z displacement.
            <br />
            <b>(2) Copy =</b> The COPY command is used to duplicate one or more existing drawing entities at another location without erasing the original one.
            <br />
            The command line sequence for COPY command is as follows:
            <br />
            Command: COPY Select objects: Select objects by an object selection method Current setting: Copy mode = current Specify base point or (Displacement/mode/Multiple Displacement)
            Specify second point or use first point as displacement: Specify a point or press Enter.
            The two points that have been specified define a vector that indicates how far the copied objects are to be moved and in what direction. 
            The COPY command repeats automatically by default. To exit the command, press Enter.
            <br />
            <b>(3) Rotate =</b> The ROTATE command is used to rotate an object or group of objects around a base point.
            <br />
            <b>(4) Mirror =</b> MIRROR command creates a mirror image of the selected geometry element. 
            This command creates mirror images of entities by reflecting them symmetrically with reference to a defined axis. 
            Mirroring can be done about the X or Y-axis, and also about a defined line or any two points. 
            <br />
            Command line sequence is as follows:
            <br />
            Command: MIRROR Select objects: Select an object Specify first point of mirror line: Specify a point (1) 
            Specify second point of mirror line: Specify a point (2)
            The two specified points become the end points of a line about which the selected objects are reflected. 
            <br />
            Delete source objects? [Yes/No] N: Enter y or n, or press Enter 
            Yes: Places the reflected image into the drawing and deletes the original objects. 
            No: Places the reflected image into the drawing and retains the original objects.
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
          b) Explain the different methods used for drawing a circle in AutoCAD.
        </p>
      </td>
      <td style={{ textAlign: "right", padding: "10px", width: "20%" }}>
        <button
          onClick={() => toggleAnswer("q7(b)")}
          className="button-blue"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
        </button>
      </td>
    </tr>
    {visibleAnswers["q7(b)"] && (
      <tr>
        <td colSpan="2" style={{ padding: "10px" }} className="answer-text">
          <p>
            AutoCAD provides several methods to draw a circle, such as:
            <br />
            <b>1. Center, Radius:</b> Specify the center point and then input the radius to create a circle.
            <br />
            <b>2. Center, Diameter:</b> Specify the center point and then input the diameter.
            <br />
            <b>3. Two Points:</b> Specify two endpoints of the circle’s diameter.
            <br />
            <b>4. Three Points:</b> Specify three points on the circle's circumference.
            <br />
            <b>5. Tangent, Tangent, Radius:</b> Specify two objects for the tangents and then provide a radius.
            <br />
            <b>6. Tangent, Tangent, Tangent:</b> Specify three objects to define the tangents of the circle.
            <br />
            Each method is suited to specific design needs, providing flexibility in drawing precise circles in different scenarios.
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
          8. Write short notes of the following.
          <br />
          i) Isometric projection
          <br />
          ii) Epicycloid
          <br />
          iii) Basic drawing command
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
            <b>1) Isometric projection:</b> Drawn to isometric scale. When the lines are drawn parallel to isometric axes, the lengths are foreshortened to 0.8165 times the actual lengths.
            <br />
            <b>2) Epicycloid:</b> When a circle rolls, without slipping, around the outside of a fixed circle, the locus of a point on the circumference of the rolling circle is called the epicycloid. The rolling circle is called the generating circle, and the fixed circle is called the base circle or directing circle.
            <br />
            <b>3) Basic drawing command: </b>   Basic drawing commands in CAD software allow users to create simple geometric shapes and structures. These commands typically include:
            <br />
            <strong>LINE:</strong> Draws a straight line between two points.
            <br />
            <strong>CIRCLE:</strong> Draws a circle defined by a center point and a radius.
            <br />
            <strong>RECTANGLE:</strong> Creates a rectangle defined by two opposite corners.
            <br />
            <strong>ARC:</strong> Draws an arc, defined by its start and end points, as well as the radius.
            <br />
            These commands are the basic tools for creating more complex drawings and designs in CAD systems.
 .
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
  
 
  
  
  export default Paper_November_2022;

