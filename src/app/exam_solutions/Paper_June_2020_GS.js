


// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2020_GS = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
//       if (question === "q1(b)") {
//         setCurrentDrawing({
//           drawingType: "plainScale",
//           inputs: {
//             ScaleMaximumLength: 6,
//             ScaleMaximumLengthUnit: "m",
//             ScaleShowLength1:0,
//             ScaleShowUnit1: "m",
//             ScaleShowLength2:0,
//             ScaleShowUnit2: "dcm",
//           },
//         });
      
//       }

//       else if (question === "q5") {
//         setCurrentDrawing({
//           drawingType: "ellipseConcentricCircleMethod",
//           inputs: {
//             majorAxis: 100,
//             minorAxis: 75,
//           },
//         });
      
//       }

      
//     };
  
//     if (currentDrawing) {
//       return (
//         <Canvas
//           inputs={currentDrawing.inputs}
//           drawingType={currentDrawing.drawingType}
//         />
//       );
//     }
  
//     return (
//       <div className="container">
//         <h1 className="title">Paper June 2020</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//            1. a) List different types of scales used in Engineering drawing and define R.F. of scale.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//           b) Construct a plain scale to show metres and decimetres when 1m is represented by 2.5 cm and long enough to measure up to 6m.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//           2. Draw the projections of a hexagonal prism of base 25 mm side and axis 60 mm long which is resting on one of its corners of the base on H.P. 
// 		  The axis of the solid in inclined at 45° to H.P.
//             </p>
//             <button onClick={() => handleClick("q2")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
// 			3. A hexagonal pyramid with 30mm base sides and 70mm long axis is lying on a slant edge on the ground such that the axis is parallel to the V.P. Draw it's projections.
// 			</p>
//             <button onClick={() => handleClick("q3")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//        4. Draw the isometric projection of a hexagonal prism, side of base 25 mm and height 60 mm, any suitable position.
//               </p>
//             <button onClick={() => handleClick("q4")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//          5. Draw an ellipse given the length of major axis and minor axis as 100 mm and 75mm.
               
//                </p>
//             <button onClick={() => handleClick("q5")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//           6. Construct a diagonal scale of 3:200 showing meters, decimeters and centimeters and to measure upto 6 meters.
// 		  <br></br>
		  
// 		  or
// 		  <br></br>
// 		  What is CAD? List out five advantages of CAD as compared to conventional drawing.
//                </p>
//             <button onClick={() => handleClick("q6")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//              <p className="card-text">
//              7. List advantages of computer aided drafting.
// 			 <br></br>
// 			 or
// 			 <br></br>
// 			 List five editing commands and their functions used in CAD.
//                </p>
//             <button onClick={() => handleClick("q7")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//            8. Write a short notes on the following:(any two)
// 		   a) Orthographic Projection b) Traces of a line c) Editing commands in CAD
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>


         
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_June_2020_GS;







import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2020_GS = () => {
  const [currentDrawing, setCurrentDrawing] = useState(null);
   const [visibleAnswers, setVisibleAnswers] = useState({});
  
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
          drawingType: "plainScale",
          inputs: {
            ScaleMaximumLength: 6,
            ScaleMaximumLengthUnit: "m",
            ScaleShowLength1:0,
            ScaleShowUnit1: "m",
            ScaleShowLength2:0,
            ScaleShowUnit2: "dcm",
          },
        });
      
      }

      else if (question === "q5") {
        setCurrentDrawing({
          drawingType: "ellipseConcentricCircleMethod",
          inputs: {
            majorAxis: 100,
            minorAxis: 75,
          },
        });
      
      }

      
    };
  
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
        <h1 className="title">Paper June 2020</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <div className="card">
          <p className="card-text">
          1. a) List different types of scales used in Engineering drawing and define R.F. of scale.
          </p>
          <button onClick={() => toggleAnswer("q1(a)")} className="button-blue">
            {visibleAnswers["q1(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q1(a)"] && (
            <div className="answer-text">
              <p>
              Some commonly used types of scales in engineering practice are listed below - 
              <br/>
              (i) Plain scales 
              <br/>
              (ii) Diagonal scales 
              <br/>
              (iii) Comparative scales 
              <br/>
              (iv) Vernier scales 
              <br/>
              (v) Scale of chords
              <br/>
               (vi) Isometric scales.
               <br/>
               The ratio of the drawing size of an object to its actual size is called the representative fraction, usually referred to as R.F.
               <br/>
                Thus, R.F. = Drawing size of an object / Its actual size
              </p>
            </div>
          )}
        </div>

          <div className="card">
            <p className="card-text">
          b) Construct a plain scale to show metres and decimetres when 1m is represented by 2.5 cm and long enough to measure up to 6m.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
          2. Draw the projections of a hexagonal prism of base 25 mm side and axis 60 mm long which is resting on one of its corners of the base on H.P. 
		  The axis of the solid in inclined at 45° to H.P.
            </p>
            <button onClick={() => handleClick("q2")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
			3. A hexagonal pyramid with 30mm base sides and 70mm long axis is lying on a slant edge on the ground such that the axis is parallel to the V.P. Draw it's projections.
			</p>
            <button onClick={() => handleClick("q3")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
       4. Draw the isometric projection of a hexagonal prism, side of base 25 mm and height 60 mm, any suitable position.
              </p>
            <button onClick={() => handleClick("q4")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
         5. Draw an ellipse given the length of major axis and minor axis as 100 mm and 75mm.
               
               </p>
            <button onClick={() => handleClick("q5")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
          6. a) Construct a diagonal scale of 3:200 showing meters, decimeters and centimeters and to measure upto 6 meters.
          </p>
            <button onClick={() => handleClick("q6(a)")} className="button-blue">
              Click Here
            </button>
          </div>
		
		  
          <div className="card">
          <p className="card-text">
         b.) What is CAD? List out five advantages of CAD as compared to conventional drawing.
          </p>
          <button onClick={() => toggleAnswer("q6(b)")} className="button-blue">
            {visibleAnswers["q6(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q6(b)"] && (
            <div className="answer-text">
              <p>
               CAD (computer aided design) can be defined as, "The use of computer systems to assist in the creation, modification, analysis or optimization of a design." Computer aided design is the technology concerned with the integrated design activities using a digital computer.
               This includes computer generation and modification of graphic images on a video display, analysis of design data, electronic storage and retrieval of design information and printing these designs as a hard copy on a plotter or printer. The generation of design drawings interactively by the user supplying information to the computer via commands or with a menu driven series of instructions,
               is called computer aided drafting. These drawings can easily be edited, manipulated and stored for future usages.

               . Engineering design is an interactive process and when it is performed on drawing boards and includes their documentation, it is quite cumbersome and time consuming. Today in the era of rapid technological changes, product innovation, greater response to customer requirements, CAD gives an innovative and efficient system for design. Download Save 0% P Embed  Share Print Report CAD has the following advantages over traditional method of design 
               (i) Computer aided design (CAD) is faster and give more accurate results than conventional methods.
               <br/>
                (ii) Developing the design of a component and associated drafting is a very easy task with CAD.
                <br/>
                 (iii) Manipulation of various dimensions, attributes and distance of drawing elements, is very easy. This makes CAD the most useful designing tool. 
                 <br/>
                 (iv) By using CAD it is not necessary to redraw any design or part of it, for further usage. A component once designed, can be copied anywhere for further references.
                 <br/> 
                  (v) Various geometric properties including dimensions of various components, their tolerance and interference with each other can be checked accurately, without making their models and prototypes.
              </p>
            </div>
          )}
        </div> 
          
        <div className="card">
          <p className="card-text">
          7. List advantages of computer aided drafting.
          </p>
          <button onClick={() => toggleAnswer("q7(a)")} className="button-blue">
            {visibleAnswers["q7(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(a)"] && (
            <div className="answer-text">
              <p>
              Engineering design is an interactive process and when it is performed on drawing boards and includes their documentation, it is quite cumbersome and time consuming. 
	         Today in the era of rapid technological changes, product innovation, greater response to customer requirements, CAD gives an innovative and efficient system for design. 
			 CAD has the following advantages over traditional method of design 
		 (i) Computer aided design (CAD) is faster and give more accurate results than conventional methods. 
		 (ii) Developing the design of a component and associated drafting is a very easy task with CAD. 
		 (iii) Manipulation of various dimensions, attributes and distance of drawing elements, is very easy. This makes CAD the most useful designing tool.
		 (iv) By using CAD it is not necessary to redraw any design or part of it, for further usage. A component once designed, can be copied anywhere for further references.
		 (v) Various geometric properties including dimensions of various components, their tolerance and interference with each other can be checked accurately, without making their models and prototypes. 
		 (vi) By specifying the material used and the atmospheric working conditions for the component which has to be designed its behaviour can be analysed by using CAD. 
		 (vii) Kinematic feature of CAD packages enables the designer to visualize the operational performance of the component. 
		 (viii) Several professional CAD packages also have 3D visualization capabilities, this helps the designer to see their product from different orientations. 
		 (ix) Two or more designs can be compared analytically.
		 (x) Drawings are stored in a systematic manner, which allows their easy and fast retrieval. 
		 Thus use of a CAD system provides better engineering drawings, more standardization of drawings, better documentation, fewer design errors and greater legibility.
              </p>
            </div>
          )}
        </div> 

        <div className="card">
          <p className="card-text">
          b). List five editing commands and their functions used in CAD.
          </p>
          <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
            {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(b)"] && (
            <div className="answer-text">
              <p>
              A drawing may be modified or edited either during its preparation or during the revision of design. In AutoCAD, editing commands can be of
	 following two types 
   (1) Commands used to modify the entities, e.g. ERASE, UNDO, REDO, SELECT, ROTATE, CHAM- FER, etc. 
	 (ii) Commands used to make copies of the drawings, e.g. COPY. MIRROR. OFFSET, ARRAY, etc. 
   <br/>
   (i) Move =  MOVE command is used to move one or more existing drawing entities from one location in drawing to another. 
   To invoke MOVE command, click MOVE from the Home tab's Modify panel or type MOVE at the command prompt. 
   Command line sequence is as follows Command: MOVE Select objects: Use an object selection method and press Enter when finished
   Specify base point or Displacement Specify a base point or enter d Specify second point or  Specify a point or press Enter
   The two points that has been specified define a vector that indicates how
	 far the selected objects to be moved and in what direction. If Enter has been pressed at the Specify second point prompt, the first point is interpreted as a relative X, Y, Z displacement. 
	 Co-ordinates, grid snaps, object snaps and other tools can be used to move objects with precision.
   <br/>
  (ii) Mirror= MIRROR command creates a mirror image of the selected geometry element. 
  This command creates mirror images of entities by reflecting them symmetrically with reference to a defined axis. 
  Mirroring can be done about X or Y-axis, and also about a defined line or any two points. 
  It allows the option of move or copy the original entities within the drawing.
  Command line sequence is as follows Command: MIRROR Select objects: Select an object
  Specify first point of mirror line: Specify a point (1) Specify second point of mirror line: Specify a point (2) The two specified points become the end points of a line about which the selected objects are reflected. Delete source objects? [Yes/No] N: Enter y or n, or press Enter Yes Places the reflected image into the drawing and deletes the original objects. 
  No Places the reflected image into the drawing and retains the original objects.
  <br/>
  (iii) Hatch - HATCH command fills an area defined by lines, arcs. circles, or polylines with either a predefined pattern, a user defined pattern, or
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
  <br/>
  (iv) Offset = OFFSET command creates an object parallel to and at a specified distance from the original. In other words OFFSET command is used to draw parallel lines, polylines, concentric circles, arc, etc. The command prompt sequence is Command: OFFSET Offset distance or Through current 
  (a) Offset Distance Option: In this option, we have to specify the offset distance and the side to offset. 
  Command prompt sequence, for constructing a straight line parallel to a given line AB and at a distance of 2 units towards right as shown in
  Command: OFFSET Offset distance or Through default: 2 Select object to offset: (Select line AB) Side to offset?:
  (Pick point P) Select object to offset: Offset distance can also be entered by picking two points using cursor.
  AutoCAD will measure the distance between these two points and use it as the offset distance.
  (b) Through Option In A through option an offset point is specified instead of specifying the offset distance. A circle drawn concentric to a given circle and passing through an offset point is shown in  
  <br/>
  (v) Copy = The COPY command is used to duplicate one or more existing drawing entities at another location without erasing the original one. Copy command can be invoked by clicking the Copy tool in the Home tab's Modify panel or by typing COPY at the command prompt. 
  The command line sequence for COPY command is as follows Ad Download to read ad-free Command: COPY Select objects: Select objects by an object selection method Current setting: Copy mode = current Specify base point or Displacement/mOde/Multiple Displacement Specify a base point or enter an option Specify second point or  use first point as displacement : Specify a point or press Enter
  Function of various options of COPY command are as follows
   (a) Displacement Specifies a relative distance and direction using co-ordinates.
  Specify displacement last value Enter co-ordinates to represent a vector 
  (b) Mode-Controls whether the command repeats automatically. 
  This setting is controlled by the COPYMODE system variable. Enter a copy mode option Single/Multiple current  Enter s or m
  (c) Multiple Overrids the single mode setting. The COPY command is set to repeat automatically for the duration of the command. This setting is controlled by the COPYMODE system variable. 
  Multiple option is displayed only when copy mode is set to single.
              </p>
            </div>
          )}
        </div> 
        

        <div className="card">
          <p className="card-text">
          8. Write a short notes on the following:(any two)
        a) Orthographic Projection b) Traces of a line c) Editing commands in CAD
          </p>
          <button onClick={() => toggleAnswer("q8")} className="button-blue">
            {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q8"] && (
            <div className="answer-text">
              <p>
              a) Orthographic Projection = If the lines or projectors are drawn parallel to each other, but perpendicular to the plane of projection, the projection thus obtained is known as orthographic projection. 
                The engineers use the orthographic system of projection for describing true shapes of different object, 
                and is therefore universally used in engineering drawing Practical application of this method of describing an object results in a drawing consisting a number of systematically arranged views that produce the object's exact shape.
                <br/>
              b) Traces of a line = When a line is inclined to a plane, it will meet that plane, produced if necessary. The point at which the line or line produced meets the plane is called its trace. The point of intersection of the line or line produced with H.P. is called horizontal trace (H.T.) and that with V.P. is called vertical trace (VT.). The VT. is a point in V.P. and its top view 
                (v) must be on the XY line, on a projector drawn perpendicular to the XY line, through V.T Similarly, H.T. 15 a point on H.P. and its elevation 
                (4) must lie on the XY line, where the projector drawn through H.T. and perpendicular to XY line meets it
                <br/>
              c) Editing commands in CAD = A drawing may be modified or edited either during its preparation or during the revision of design. In AutoCAD, editing commands can be of
	                 following two types 
                   <br/>
                   (1) Commands used to modify the entities, e.g. ERASE, UNDO, REDO, SELECT, ROTATE, CHAM- FER, etc.
                   <br/> 
	                 (2) Commands used to make copies of the drawings, e.g. COPY. MIRROR. OFFSET, ARRAY, etc. 
                  
              </p>
            </div>
          )}
        </div> 

         
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2020_GS;




