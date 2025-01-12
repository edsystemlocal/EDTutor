

// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_November_2022 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
      
//       if (question === "q1(b)") {
//         setCurrentDrawing({
//           drawingType: "ellipseGeneralMethod",
//           inputs: {
            
//             distanceofthefocusfromthedirectrix: 50,
//           },
//         });
//     };
    
//   }
  
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
//         <h1 className="title">Paper November 2022</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             1. a) An area of 144 sq cm on a map represents an area of 36 sq km on the field. Find the RF of the scale of the map and draw a diagonal scale to show km, hectometres and decametres and to measure up to 10 km.
// 			indicate on the scale a distance 7 km, 5 hectometres and 6 decimeters.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//            b) Construct a conic when the distance of its focus from its directrix is equal to 50 mm and its eccentricity is 2/3.
// 		   Name the curve; mark its major axis and minor axis. Draw a tangent at any point, P on the curve.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//           2. a) The length of the front view of a line CD which is parallel to HP and inclined 30 deg to VP is 50 mm. 
// 		  The end C of the line is 15 mm in front of VP and 25 mm above HP. Draw the projections of the line and find its true length.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
// 			b) A line PS 65 mm has its end P, 15 mm above the HP and 15 mm in front of the VP. It is inclined at 55 deg * 1 to the HP and 35 deg to the VP.
// 			Draw its projections..</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
              
//           3. a) Draw the projections of a pentagonal prism of base 25 mm side and 50 mm long. The prism is resting on one of its rectangular faces in with its is inclined at 45 deg P. HP.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) Draw the isometric view of a hexagonal prism having side of base 25 mm and axis 65 mm long resting on its base on HP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             4. a) A right circular cone of axis height 80 mm is resting on one of its generators in HP. Draw its projections. The base is 40 mm dia.
//                </p>
//             <button onClick={() => handleClick("q4(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//             <p className="card-text">
//              b) Give some examples where the layering concept is useful to use.
//                </p>
//             <button onClick={() => handleClick("q4(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//             5. a) Name and explain five edit commands used in CAD. 
//                </p>
//             <button onClick={() => handleClick("q5(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//           b) Explain the various advantages of CAD.
//                </p>
//             <button onClick={() => handleClick("q5(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//              6. a) What is the use of UCS icon? Explain in detail?
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             b) Write about Dialog boxes and windows in CAD software.
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            7. a) Explain the various commands used for transformation of an object.  i) Move ii) Copy iii) Rotate iv) Mirror
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           b) Explain the different methods used for drawing a circle in AutoCAD.
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           8. Write short notes of the following. 
// 		  i) Isometric projection ii) Epicycloid iii) Basic drawing command
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
 

//-------------------------------------------------------------------------------------------------

 



import React, { useState } from 'react';
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_November_2022= () => {
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

        <div className="card">
            <p className="card-text">
            1. a) An area of 144 sq cm on a map represents an area of 36 sq km on the field. Find the RF of the scale of the map and draw a diagonal scale to show km, hectometres and decametres and to measure up to 10 km.
			indicate on the scale a distance 7 km, 5 hectometres and 6 decimeters.
          
               </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          <div className="card">
            <p className="card-text">
           b) Construct a conic when the distance of its focus from its directrix is equal to 50 mm and its eccentricity is 2/3.
		   Name the curve; mark its major axis and minor axis. Draw a tangent at any point, P on the curve.
            </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
          2. a) The length of the front view of a line CD which is parallel to HP and inclined 30 deg to VP is 50 mm. 
		  The end C of the line is 15 mm in front of VP and 25 mm above HP. Draw the projections of the line and find its true length.
            </p>
            <button onClick={() => handleClick("q2(a)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
			b) A line PS 65 mm has its end P, 15 mm above the HP and 15 mm in front of the VP. It is inclined at 55 deg * 1 to the HP and 35 deg to the VP.
			Draw its projections..</p>
            <button onClick={() => handleClick("q2(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              
          3. a) Draw the projections of a pentagonal prism of base 25 mm side and 50 mm long. The prism is resting on one of its rectangular faces in with its is inclined at 45 deg P. HP.</p>
            <button onClick={() => handleClick("q3(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) Draw the isometric view of a hexagonal prism having side of base 25 mm and axis 65 mm long resting on its base on HP.
               
               </p>
            <button onClick={() => handleClick("q3(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
            4. a) A right circular cone of axis height 80 mm is resting on one of its generators in HP. Draw its projections. The base is 40 mm dia.
               </p>
            <button onClick={() => handleClick("q4(a)")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
          <p className="card-text">
            4. b) Give some examples where the layering concept is useful to use?
          </p>
          <button onClick={() => toggleAnswer("q4(b)")} className="button-blue">
            {visibleAnswers["q4(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q4(b)"] && (
            <div className="answer-text">
              <p>Answer to Question 4a: Layering in CAD allows users to group elements and control visibility, color, and line styles...</p>
            </div>
          )}
        </div>
        

        <div className="card">
          <p className="card-text">
            5.a)Name and explain five edit commands used in CAD?
          </p>
          <button onClick={() => toggleAnswer("q5(a)")} className="button-blue">
            {visibleAnswers["q5(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q5(a)"] && (
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
            5.b)Explain the various advantages of CAD.
          </p>
          <button onClick={() => toggleAnswer("q5(b)")} className="button-blue">
            {visibleAnswers["q5(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q5(b)"] && (
            <div className="answer-text">
              <p>
              Engineering design is an interactive process and when it is performed on drawing boards and includes their documentation, it is quite cumbersome and time consuming.
  Today in the era of rapid technological changes, product innovation, greater response to customer requirements, CAD gives an innovative and efficient system for design. 
  CAD has the following advantages over traditional method of design .
  <br/>
  (i) Computer aided design (CAD) is faster and give more accurate results than conventional methods. 
  <br/>
  (ii) Developing the design of a component and associated drafting is a very easy task with CAD. 
  <br/>
  (iii) Manipulation of various dimensions, attributes and distance of drawing elements, is very easy. This makes CAD the most useful designing tool. 
  <br/>
  (iv) By using CAD it is not necessary to redraw any design or part of it, for further usage. 
     A component once designed, can be copied anywhere for further references.
    <br/>
  (v) Various geometric properties including dimensions of various components, their tolerance and interference with each other can be checked accurately, without making their models and prototypes. 
  <br/>
  (vi) By specifying the material used and the atmospheric working conditions for the component which has to be designed its behaviour can be analysed by using CAD.
  <br/> 
  (vii) Kinematic feature of CAD packages enables the designer to visualize the operational performance of the component. 
  <br/>
  (viii) Several professional CAD packages also have 3D visualization capabilities, this helps the designer to see their product from different orientations. 
  <br/>
  (ix) Two or more designs can be compared analytically.
  <br/>
  (x) Drawings are stored in a systematic manner, which allows their easy and fast retrieval.
  <br/>
  Thus use of a CAD system provides better engineering drawings, more standardization of drawings, better documentation, 
  fewer design errors and greater legibility.
  

              </p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
            6. a) What is the use of UCS icon? Explain in detail?
          </p>
          <button onClick={() => toggleAnswer("q6(a)")} className="button-blue">
            {visibleAnswers["q6(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q6(a)"] && (
            <div className="answer-text">
              <p>
              The UCS icon appears at the lower-left corner of the drawing area. This is the User Coordinate System (UCS) icon, 
              which determines the user's orientation in the drawing. The X and Y indicate the x- and y-axes of the drawing.
              </p>
            </div>
          )}
        </div>


         
        <div className="card">
          <p className="card-text">
            6. b) Write about Dialog boxes and windows in CAD software.
          </p>
          <button onClick={() => toggleAnswer("q6(b)")} className="button-blue">
            {visibleAnswers["q6(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q6(b)"] && (
            <div className="answer-text">
              <p>Answer to Question 4a: Layering in CAD allows users to group elements and control visibility, color, and line styles...</p>
            </div>
          )}
        </div> 

        <div className="card">
          <p className="card-text">
          7. a) Explain the various commands used for transformation of an object.  i) Move ii) Copy iii) Rotate iv) Mirror
          </p>
          <button onClick={() => toggleAnswer("q7(a)")} className="button-blue">
            {visibleAnswers["q7(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(a)"] && (
            <div className="answer-text">
              <p>
              (1) Move =  MOVE command is used to move one or more existing drawing entities from one location in drawing to another. 
   To invoke MOVE command, click MOVE from the Home tab's Modify panel or type MOVE at the command prompt. 
   Command line sequence is as follows Command: MOVE Select objects: Use an object selection method and press Enter when finished
   Specify base point or Displacement Specify a base point or enter d Specify second point or  Specify a point or press Enter
   The two points that has been specified define a vector that indicates how
	 far the selected objects to be moved and in what direction. If Enter has been pressed at the Specify second point prompt, the first point is interpreted as a relative X, Y, Z displacement. 
	 Co-ordinates, grid snaps, object snaps and other tools can be used to move objects with precision.
   <br/>
              (2)Copy=  The COPY command is used to duplicate one or more existing drawing entities at another location without erasing the original one. Copy command can be invoked by clicking the Copy tool in the Home tab's Modify panel or by typing COPY at the command prompt.
  The command line sequence for COPY command is as follows - Command: COPY Select objects: Select objects by an object selection method Current setting: Copy mode = current Specify base point or (Displacement/mOde/Multiple Displacement: Specify a base point or enter an option Specify second point or  use first point as displacement : Specify a point or press Enter
  The two points that has been specified define a vector that indicates how far the copied objects are to be moved and in what direction. 
  The COPY command repeats automatically by default. To exit the command, press Enter.
  <br/>
              (4) Mirror= MIRROR command creates a mirror image of the selected geometry element. 
  This command creates mirror images of entities by reflecting them symmetrically with reference to a defined axis. 
  Mirroring can be done about X or Y-axis, and also about a defined line or any two points. 
  It allows the option of move or copy the original entities within the drawing.
  Command line sequence is as follows Command: MIRROR Select objects: Select an object
  Specify first point of mirror line: Specify a point (1) Specify second point of mirror line: Specify a point (2) The two specified points become the end points of a line about which the selected objects are reflected. Delete source objects? [Yes/No] N: Enter y or n, or press Enter Yes Places the reflected image into the drawing and deletes the original objects. 
  No Places the reflected image into the drawing and retains the original objects.
              </p>
            </div>
          )}
        </div>
		  
		  
        <div className="card">
          <p className="card-text">
          b) Explain the different methods used for drawing a circle in AutoCAD.
          </p>
          <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
            {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(b)"] && (
            <div className="answer-text">
              <p>Answer to Question 4a: Layering in CAD allows users to group elements and control visibility, color, and line styles...</p>
            </div>
          )}
        </div>
		  
        <div className="card">
          <p className="card-text">
          8. Write short notes of the following. 
        i) Isometric projection ii) Epicycloid iii) Basic drawing command
		  
          </p>
          <button onClick={() => toggleAnswer("q8")} className="button-blue">
            {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q8"] && (
            <div className="answer-text">
              <p>
              1) Isometric projection = Drawn to isometric scale.When the lines are drawn parallel to isometric axes, the lengths are foreshortened to 0.8165 times the actual lengths.
              <br/>
	            2)    Epicycloid        =  When a circle rolls, without slipping around the outside of a fixed circle, 
		                               the locus of a point on the circumference of the rolling circle is called the epicycloid.
		                               The rolling circle is called the generating circle and the fixed circle is called the base circle or directing circle.
              </p>
            </div>
          )}
        </div> 
           </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_November_2022;
