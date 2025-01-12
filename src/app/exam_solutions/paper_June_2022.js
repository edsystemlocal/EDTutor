 

// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2022 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
  
//     const handleClick = (question) => {
     
//         if (question === "q2(a)") {
//         setCurrentDrawing({
//           drawingType: "inclinationToBoth",
//           inputs: {
//             LineLength:70,
//             firstpointfrontOfVPLength:15,
//             firstPointAboveHPLength:10,
//             InclinationToVP:"",
//             InclinationToHP:"",
//             Topview:60,
//             Frontview:50
//           },
//         });
//       }
//         else if (question === "q2(b)") {
//           setCurrentDrawing({
//             drawingType: "inclinationToBoth",
//             inputs: {
//               LineLength:60,
//               firstpointfrontOfVPLength:10,
//               firstPointAboveHPLength:15,
//               InclinationToVP:30,
//               InclinationToHP:45,
//               //Topview:60,
//               //Frontview:50
//             },
//           });
//         }
//       };

          
          
           

    

            
  
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
//         <h1 className="title">Paper June 2022</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             1. a) Construct a forward reading vernier scale to read distance correct to decimetre on a map in which the actual distances are reduced in the ratio of 1: 40000.
// 			The scale should be long enough to measure upto 6 km. Mark on the scale a length of 3.34 km and 0.59 km.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//            b) Construct a hypocycloid, rolling circle 50 mm diameter and directing circle 175 mm diameter. 
// 		   Draw a tangent to it at a point 50 mm from the centre of the directing circle.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//            2. a) A line AB of 70 mm long has its end A at 10 mm above H.P and 15 mm in front of V.P. Its front view and top view measure 50 mm and 60 mm respectively.
// 		   Draw the projections of the line and determine its inclinations with H.P. and V.P.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
// 			b) A line AB, 60 mm long has its end A 15 mm above HP and 10 mm in front of V.P. 
// 			It is inclined at 45° to the HP and 30° to V.P. Draw it's projections.</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
              
//         3. a) Draw the isometric projections of the frustum of a cone of 50mm base diameter, 25mm top diameter and 60mm height.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) Draw the isometric view of a hexagonal prism having side of base 25mm and axis 65mm long resting on its base on HP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             4. a) Explain the layering concept with examples. How is it implemented into CAD software?
//                </p>
//             <button onClick={() => handleClick("q4(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

           
//           <div className="card">
//             <p className="card-text">
//     b) Differentiate between the first angles and third angles projection.
//                </p>
//             <button onClick={() => handleClick("q4(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
         
         

          
            

             
//           <div className="card">
//             <p className="card-text">
//             5. a) How do you specify a plotter for graphics applying?
//                </p>
//             <button onClick={() => handleClick("q5(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            b) What is CAD? Name two CAD Softwares. Give advantages and disadvantages of using CAD.
//                </p>
//             <button onClick={() => handleClick("q5(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             6. a) Explain the purpose of Zoom command.
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             b) Explain the method of drawing wireframe models of the following objects. 
// 			7 i) Cone ii) Pyramid iii) Prism
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//            7. a) Prepare an ellipse using four different methods in AutoCAD.
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//            b) Explain about Building Information Modeling (BIM).
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
		  
		  
// 		   <div className="card">
//             <p className="card-text">
//           8. Write short notes of the following.
// 		  i) Types of scales ii) Editing commands in CAD iii) Orthographic projection
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_June_2022;

//-----------------------------------------------------------



import React, { useState } from 'react';
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_June_2022 = () => {
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

        {/* Question 1 - Theory */}
        <div className="card">
             <p className="card-text">
             1. a) Construct a forward reading vernier scale to read distance correct to decimetre on a map in which the actual distances are reduced in the ratio of 1: 40000.
 			The scale should be long enough to measure upto 6 km. Mark on the scale a length of 3.34 km and 0.59 km.
          
                </p>
            <button onClick={() => handleClick("q1(a)")} className="button-blue">
              Click Here
           </button>
           </div>

           <div className="card">
            <p className="card-text">
            b) Construct a hypocycloid, rolling circle 50 mm diameter and directing circle 175 mm diameter. 
 		   Draw a tangent to it at a point 50 mm from the centre of the directing circle.
             </p>
            <button onClick={() => handleClick("q1(b)")} className="button-blue">
               Click Here
             </button>
           </div>

        {/* Question 2 - Drawing */}
        <div className="card">
          <p className="card-text">
            2. a) A line AB of 70 mm long has its end A at 10 mm above H.P and 15 mm in front of V.P. Its front view and top view measure 50 mm and 60 mm respectively.
            Draw the projections of the line and determine its inclinations with H.P. and V.P.
          </p>
          <button onClick={() => handleClick("q2(a)")} className="button-blue">
          Click Here
          </button>
        </div>

        <div className="card">
            <p className="card-text">
 			         b) A line AB, 60 mm long has its end A 15 mm above HP and 10 mm in front of V.P. 
			           It is inclined at 45° to the HP and 30° to V.P. Draw it's projections.</p>
             <button onClick={() => handleClick("q2(b)")} className="button-blue">
               Click Here
             </button>
           </div>

           <div className="card">
             <p className="card-text">
              
         3. a) Draw the isometric projections of the frustum of a cone of 50mm base diameter, 25mm top diameter and 60mm height.</p>
             <button onClick={() => handleClick("q3(a)")} className="button-blue">
               Click Here
            </button>
           </div>


           <div className="card">
             <p className="card-text">
            b) Draw the isometric view of a hexagonal prism having side of base 25mm and axis 65mm long resting on its base on HP.
               
                </p>
             <button onClick={() => handleClick("q3(b)")} className="button-blue">
               Click Here
             </button>
           </div>

        {/* Question 4 - Theory */}
        <div className="card">
          <p className="card-text">
            4. a) Explain the layering concept with examples. How is it implemented into CAD software?
          </p>
          <button onClick={() => toggleAnswer("q4a")} className="button-blue">
            {visibleAnswers["q4a"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q4a"] && (
            <div className="answer-text">
              <p>Answer to Question 4a: Layering in CAD allows users to group elements and control visibility, color, and line styles...</p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
            4. b)Differentiate between the first angles and third angles projection.
          </p>
          <button onClick={() => toggleAnswer("q4(b)")} className="button-blue">
            {visibleAnswers["q4(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q4(b)"] && (
            <div className="answer-text">
              <p> *  First Angle Projection - In this type of projection, the objects assumed to be situated in first quadrant. 
               <br/>
	             explain the concept of first angle projection as follows - 
               <br/>
	            (1) The object lies in between the observer and the planes of projection. 
              <br/>
	            (2) Object is situated on or above the H.P 
              <br/>
	            (3) The front view is drawn above the XY line and the top view below XY.
              <br/>
	 
	           * Third Angle Projection - In this type of projection system, the object is assumed to be situated in third quadrant. 
             <br/>
	            explain the concept of third angle projection as follows - 
              <br/>
	           (1) The planes of projections are situated in between the object and the observer.
             <br/> 
	           (2) Object is situated on or above the ground. 
             <br/>
	           (3) The front view is drawn below the XY line and the top vies above it..
             </p>
            </div>
          )}
        </div>

        {/* Question 5 - Theory */}
        <div className="card">
          <p className="card-text">
            5. a) How do you specify a plotter for graphics applying?
          </p>
          <button onClick={() => toggleAnswer("q5a")} className="button-blue">
            {visibleAnswers["q5a"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q5a"] && (
            <div className="answer-text">
              <p>Answer to Question 5a: Specify plotters in CAD settings based on printer capabilities, paper sizes, and resolution...</p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
            5. b) What is CAD? Name two CAD Softwares. Give advantages and disadvantages of using CAD.
          </p>
          <button onClick={() => toggleAnswer("q5(b)")} className="button-blue">
            {visibleAnswers["q5(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q5(b)"] && (
            <div className="answer-text">
              <p>CAD (computer aided design) can be defined as, "The use of computer systems to assist in the creation, modification, analysis or optimization of a design."
                 Computer aided design is the technology concerned with the integrated design activities using a digital computer. 
                 This includes computer generation and modification of graphic images on a video display, analysis of design data, electronic storage and retrieval of design information and printing these designs as a hard copy on a plotter or printer. 
                 The generation of design drawings interactively by the user supplying information to the computer via commands or with a menu driven series of instructions, is called computer aided drafting. These drawings can easily be edited,
                  manipulated and stored for future usages.
                <br/>
    . Engineering design is an interactive process and when it is performed on drawing boards and includes their documentation, it is quite cumbersome and time consuming.
     Today in the era of rapid technological changes, product innovation, greater response to customer requirements, CAD gives an innovative and efficient system for design. CAD has the following advantages over traditional method of design 
     <br/>
	(i) Computer aided design (CAD) is faster and give more accurate results than conventional methods. 
  <br/>

	(ii) Developing the design of a component and associated drafting is a very easy task with CAD. 
  <br/>
	(iii) Manipulation of various dimensions, attributes and distance of drawing elements, is very easy. This makes CAD the most useful designing tool.
  <br/>
	(iv) By using CAD it is not necessary to redraw any design or part of it, for further usage. A component once designed, can be copied anywhere for further references. 
  <br/>
	(v) Various geometric properties including dimensions of various components, their tolerance and interference with each other can be checked accurately, without making their models and prototypes.
   <br/>

     *  Some commonly used CAD softwares are
     <br/>
	 (1) AutoCAD, (ii) CorelCAD, (iii) Pro-E, (iv) IDEAS and (v) CATIA.
   <br/>
	 
	   * Disadvantages of CAD - 
   <br/>
	 
	 (1) 32-bit word computer is necessary because of large amount of computer memory and time.
   <br/>
	 (ii) The size of the software package is large. 
   <br/>
	 (iii) It requires huge investment. 
   <br/>
	 (iv) Skill and judgement are required to prepare the drawing..
   </p>
            </div>
          )}
        </div>

        {/* Question 6 - Theory */}
        <div className="card">
          <p className="card-text">
            6. a) Explain the purpose of Zoom command.
          </p>
          <button onClick={() => toggleAnswer("q6a")} className="button-blue">
            {visibleAnswers["q6a"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q6a"] && (
            <div className="answer-text">
              <p>
              The Zoom Command is a tool commonly used in applications such as CAD software (e.g., AutoCAD), graphic design tools, or other visualization software to enhance the user's ability to focus on specific areas of a drawing, model, or workspace. Here's a breakdown of its purpose:

Purpose of the Zoom Command
<br/>
1)Focus on Details:
The command allows users to magnify specific sections of the workspace or drawing to closely inspect or modify details.
<br/>
2)Adjust View Scale:
Users can zoom in to increase the scale (make elements appear larger) or zoom out to decrease the scale (see more of the overall workspace).
<br/>
3)Navigation:
Helps users navigate large or complex drawings efficiently by quickly shifting focus to a particular area.
<br/>
4)Improve Precision:
In design or drafting applications, zooming enables precise selection, alignment, and editing of elements.
<br/>
5)Customizable Viewing:
Often allows users to set predefined zoom levels, zoom to fit the entire drawing, or zoom to specific extents (e.g., selected objects or the entire model).
              </p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
            6. b) Explain the method of drawing wireframe models of the following objects. 
             			 i) Cone ii) Pyramid iii) Prism
          </p>
          <button onClick={() => toggleAnswer("q6(b)")} className="button-blue">
            {visibleAnswers["q6(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q6(b)"] && (
            <div className="answer-text">
              <p>Answer to Question 6a: The Zoom command is used in CAD software to magnify or reduce the view of a drawing...</p>
            </div>
          )}
        </div>


        {/* Question 7 - Theory */}
        <div className="card">
          <p className="card-text">
            7. a) Prepare an ellipse using four different methods in AutoCAD.
          </p>
          <button onClick={() => toggleAnswer("q7a")} className="button-blue">
            {visibleAnswers["q7a"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7a"] && (
            <div className="answer-text">
              <p>Answer to Question 7a: Methods for creating an ellipse include the Ellipse command, using axis and distance, and more...</p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
            7. b) Explain about Building Information Modeling (BIM).
          </p>
          <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
            {visibleAnswers["q7a"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(b)"] && (
            <div className="answer-text">
              <p>Answer to Question 7a: Methods for creating an ellipse include the Ellipse command, using axis and distance, and more...</p>
            </div>
          )}
        </div>

        <div className="card">
          <p className="card-text">
          8. Write short notes of the following.
          		  i) Types of scales ii) Editing commands in CAD iii) Orthographic projection
          </p>
          <button onClick={() => toggleAnswer("q8")} className="button-blue">
            {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q8"] && (
            <div className="answer-text">
              <p> i) Types of scales = Some commonly used types of scales in engineering practice are listed below - 
                <br/>
	              (i) Plain scales (ii) Diagonal scales (iii) Comparative scales (iv) Vernier scales (v) Scale of chords (vi) Isometric scales.
                <br/>

                ii) Editing commands in CAD = A drawing may be modified or edited either during its preparation or during the revision of design. In AutoCAD, editing commands can be of
	                 following two types 
                   <br/>
                   (1) Commands used to modify the entities, e.g. ERASE, UNDO, REDO, SELECT, ROTATE, CHAM- FER, etc.
                   <br/> 
	                 (2) Commands used to make copies of the drawings, e.g. COPY. MIRROR. OFFSET, ARRAY, etc. 
                  <br/>


                iii)Orthographic Projection = If the lines or projectors are drawn parallel to each other, but perpendicular to the plane of projection, the projection thus obtained is known as orthographic projection. 
                The engineers use the orthographic system of projection for describing true shapes of different object, 
                and is therefore universally used in engineering drawing Practical application of this method of describing an object results in a drawing consisting a number of systematically arranged views that produce the object's exact shape.
	 </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Paper_June_2022;
