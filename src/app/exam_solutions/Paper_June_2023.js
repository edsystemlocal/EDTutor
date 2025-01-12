// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2023 = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);
  
//     const handleClick = (question) => {
//       if (question === "q1") {
//         setCurrentDrawing({
//           drawingType: "parallelToHP",
//           inputs: {
//             LineLength: 65,
//             firstPointAboveHPLength: 30,
//           },
//         });
//       } else if (question === "q2") {
//         setCurrentDrawing({
//           drawingType: "parallelToVP",
//           inputs: {
//             LineLength: 75,
//             firstpointfrontOfVPLength: 40,
//           },
//         });
//       } else if (question === "q3") {
//         setCurrentDrawing({
//           drawingType: "ellipseGeneralMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
//           },
//         });
//       } else if (question === "q4") {
//         setCurrentDrawing({
//           drawingType: "ellipseConcentricCircleMethod",
//           inputs: {
//             majorAxis: 500,
//             minorAxis: 300,
//             distanceofthefocusfromthedirectrix: 100,
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
//         <h1 className="title">Paper June 2023</h1>
//         <div className="max-w-4xl mx-auto space-y-6">

//         <div className="card">
//             <p className="card-text">
//             a) Fill in the blanks.
//             <br></br>

//             i) The number of mutually perpendicular planes that may surround an object in space is________.
//             <br></br>
//             ii) In the third angle projection, the object is imagined to be placed________.
//             <br></br>
//             iii) In half sectional view, _________ of the object is imagined to be removed. 
//             <br></br>
//             iv) In the orthographic projection, the projectors are ___________to the plane of projection.
//             <br></br>
//             v) Hatching lines are drawn at an angle of __________to the axis or to the main outline of the sections.
//             <br></br>
//             vi) Graphics can be converted into hard copy with a_______.
          
//                </p>
//             <button onClick={() => handleClick("q1(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>

//           <div className="card">
//             <p className="card-text">
//             What are Scale? Classify its different types, also describe how RF is calculated.
//             </p>
//             <button onClick={() => handleClick("q1(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">
//             A rectangular plot of land arca 0.45 hectare, is represented on a map by a similar rectangle of 5 sq. cm. 
//             Calculate the RF of the map, Also draw a scale to read up to single metre from the map, the scale should be long enough to measure up to 400 metres.
//             </p>
//             <button onClick={() => handleClick("q2(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">An inelastic string is unwound to a length of 122 mm from a drum of $30 mm.
//                Draw the locus of free end of the string which is held taut during unwinding.</p>
//             <button onClick={() => handleClick("q2(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
//           <div className="card">
//             <p className="card-text">The projections a'b' and ab of a line AB are 65 mm and 50 mm long, respectively. The midpoint of the line is 38 mm in front of VP and 30 mm above HP. End A is 10 mm in front of the VP and nearer to it.
//                End B is nearer to the HP. Draw the projections of the line, find its true length.</p>
//             <button onClick={() => handleClick("q3(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A regular hexagonal lamina 40 mm side has a square hole of 25 mm side centrally cut through it.
//              Draw its projections when it is resting on one of its sides on HP with its surface inclined at 60° to VP and its corner nearest to VP is 24 mm from VP.
               
//                </p>
//             <button onClick={() => handleClick("q3(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        
//           <div className="card">
//             <p className="card-text">
//             A triangular prism of side of base 30 mm and axis 55 mm long lies on one of its rectangular faces in HP with its axis parallel to VP. Draw its Projection.
//                </p>
//             <button onClick={() => handleClick("q4")} className="button-blue">
//               Click Here
//             </button>
//           </div>

          
//           <div className="card">
//             <p className="card-text">
//             A right regular square pyramid, edge of base 35 mm and height 50 mm, rest on its base on HP with its base edges equally inclined to VP.
//              A section plane perpendicular to VP and inclined to HP on 32°, cuts the pyramid bisecting its axis, Draw the projections and true shape of the section of truncated pyramid.
//                </p>
//             <button onClick={() => handleClick("q5")} className="button-blue">
//               Click Here
//             </button>
//           </div>
        

//           <div className="card">
//             <p className="card-text">
//             Develop the lateral surface of an oblique cone, diameter of the base 40mm and height 40 mm having its axis inclined at 60° to its base..
//                </p>
//             <button onClick={() => handleClick("q6(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A right circular cone, diameter of base 50 mm and axis 62 mm long, rest on its base rim on HP with its axis parallel to VP and one of the elements perpendicular to HP. Draw the projections..
//                </p>
//             <button onClick={() => handleClick("q6(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             A cube 30 mm edge is placed centrally on the top of a cylindrical block of 52 mm and 20 mm height. Draw the isometric drawing of the solid.
//                </p>
//             <button onClick={() => handleClick("q7(a)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             Explain the purpose of Zoom Command.
//                </p>
//             <button onClick={() => handleClick("q7(b)")} className="button-blue">
//               Click Here
//             </button>
//           </div>


//           <div className="card">
//             <p className="card-text">
//             Write short note on: (any two) 
//             i) View ports 
//             ii) Layering concept 
//             iii) Type of projections
//                </p>
//             <button onClick={() => handleClick("q8")} className="button-blue">
//               Click Here
//             </button>
//           </div>




        
        
            
         
//         </div>
//       </div>
//     );
//   };
  
 
  
  
//   export default Paper_June_2023;
  
//************************************************************************





// ------------------------------------

import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const Paper_June_2023 = () => {
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
    //   if (question === "q1") {
    //     setCurrentDrawing({
    //       drawingType: "parallelToHP",
    //       inputs: {
    //         LineLength: 65,
    //         firstPointAboveHPLength: 30,
    //       },
    //     });
     
    // };
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
        <h1 className="title">Paper June 2023</h1>
        <div className="max-w-4xl mx-auto space-y-6">

        <div className="card">
            <p className="card-text">
           1. a) Fill in the blanks.
            <br></br>

            i) The number of mutually perpendicular planes that may surround an object in space is________.
            <br></br>
            ii) In the third angle projection, the object is imagined to be placed________.
            <br></br>
            iii) In half sectional view, _________ of the object is imagined to be removed. 
            <br></br>
            iv) In the orthographic projection, the projectors are ___________to the plane of projection.
            <br></br>
            v) Hatching lines are drawn at an angle of __________to the axis or to the main outline of the sections.
            <br></br>
            vi) Graphics can be converted into hard copy with a_______.
          
            </p>
          <button onClick={() => toggleAnswer("q1(a)")} className="button-blue">
            {visibleAnswers["q1(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q1(a)"] && (
            <div className="answer-text">
              <p>
              i) three<br />
                ii) below and behind the projection planes.<br />
                iii) one-fourth<br />
                iv) perpendicular <br />
                v) 45 degrees <br />
                vi) plotter.<br />
                
              </p>
            </div>
          )}
        </div>


          
          <div className="card">
          <p className="card-text">
          b) What are Scale? Classify its different types, also describe how RF is calculated.

          </p>
          <button onClick={() => toggleAnswer("q1(b)")} className="button-blue">
            {visibleAnswers["q1(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q1(b)"] && (
            <div className="answer-text">
              <p>
              It is not always possible or convenient to draw drawings of an object to its actual size. For instance, drawings of very big objects like buildings, machines etc. 
              cannot be prepared in full size because they could be too big to accommodate on the drawing sheet. Drawings, of very small objects like precision instruments, namely, watches, electronic devices etc.
               also cannot be prepared in full size because they would be too small to draw and to read Therefore, a convenient scale is always chosen to prepare the drawings of big as well as small objects in proportionately smaller or larger sizes.
               <br/>
               Some commonly used types of scales in engineering practice are listed below - 
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

               Representative fraction is defined as the ratio of the linear dimensions of an element of the object in the 
               drawing to its actual linear dimension of the same element of the object itself. 
                           R.F. =Length of an element in the drawing / Actual length of the same element.
              </p>
            </div>
          )}
        </div>

          <div className="card">
            <p className="card-text">
           2. a) A rectangular plot of land arca 0.45 hectare, is represented on a map by a similar rectangle of 5 sq. cm. 
            Calculate the RF of the map, Also draw a scale to read up to single metre from the map, the scale should be long enough to measure up to 400 metres.
            </p>
            <button onClick={() => handleClick("q2(a)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              b) An inelastic string is unwound to a length of 122 mm from a drum of $30 mm.
               Draw the locus of free end of the string which is held taut during unwinding.</p>
            <button onClick={() => handleClick("q2(b)")} className="button-blue">
              Click Here
            </button>
          </div>
          <div className="card">
            <p className="card-text">
              3. a)The projections a'b' and ab of a line AB are 65 mm and 50 mm long, respectively. The midpoint of the line is 38 mm in front of VP and 30 mm above HP. End A is 10 mm in front of the VP and nearer to it.
               End B is nearer to the HP. Draw the projections of the line, find its true length.</p>
            <button onClick={() => handleClick("q3(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b)  A regular hexagonal lamina 40 mm side has a square hole of 25 mm side centrally cut through it.
             Draw its projections when it is resting on one of its sides on HP with its surface inclined at 60° to VP and its corner nearest to VP is 24 mm from VP.
               
               </p>
            <button onClick={() => handleClick("q3(b)")} className="button-blue">
              Click Here
            </button>
          </div>
        
          <div className="card">
            <p className="card-text">
           4) A triangular prism of side of base 30 mm and axis 55 mm long lies on one of its rectangular faces in HP with its axis parallel to VP. Draw its Projection.
               </p>
            <button onClick={() => handleClick("q4")} className="button-blue">
              Click Here
            </button>
          </div>

          
          <div className="card">
            <p className="card-text">
          5)  A right regular square pyramid, edge of base 35 mm and height 50 mm, rest on its base on HP with its base edges equally inclined to VP.
             A section plane perpendicular to VP and inclined to HP on 32°, cuts the pyramid bisecting its axis, Draw the projections and true shape of the section of truncated pyramid.
               </p>
            <button onClick={() => handleClick("q5")} className="button-blue">
              Click Here
            </button>
          </div>
        

          <div className="card">
            <p className="card-text">
           6. a) Develop the lateral surface of an oblique cone, diameter of the base 40mm and height 40 mm having its axis inclined at 60° to its base..
               </p>
            <button onClick={() => handleClick("q6(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           b) A right circular cone, diameter of base 50 mm and axis 62 mm long, rest on its base rim on HP with its axis parallel to VP and one of the elements perpendicular to HP. Draw the projections..
               </p>
            <button onClick={() => handleClick("q6(b)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
            <p className="card-text">
           7.a) A cube 30 mm edge is placed centrally on the top of a cylindrical block of 52 mm and 20 mm height. Draw the isometric drawing of the solid.
               </p>
            <button onClick={() => handleClick("q7(a)")} className="button-blue">
              Click Here
            </button>
          </div>


          <div className="card">
          <p className="card-text">
            7. b)  Explain the purpose of Zoom Command.
          </p>
          <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
            {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(b)"] && (
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
          8) Write short note on: (any two) 
            i) View ports 
            ii) Layering concept 
            iii) Type of projections
          </p>
          <button onClick={() => toggleAnswer("q8")} className="button-blue">
            {visibleAnswers["q8"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q8"] && (
            <div className="answer-text">
              <p>
              1) View ports =  The Viewports command in AutoCAD is used to split the screen in 2, 3 or 4 partitions, called viewports.
               Using Viewports command, we can view a drawing from different directions. For example, we can split the screen
               into 4 partitions one is showing isometric view and the other three are showing three orthographic views, e.g. front view, top view and side view. 
               Viewports can also be used to show different details of a drawing, e.g. one viewport can display a close-up of the bathroom, another can display the overall plan view and yet another can display the unit plan.
                Viewports command is very helpful in both creating and editing 3D drawings because it enables a designer to refer different portions of the drawing without changing the views.
                We can create a viewport in following steps - 
                <br/>
                (i) In the Visualize tab's Model Viewports panel, click the Named tool to open the Viewports dialog box.
                <br/>
                (ii) The left part of the New Viewports tab shows various standard configurations and the window on the right displays a sample of the selected viewport configuration.
                 For example, if we choose Three: Right configuration, the display window will show three rectangles with two on the left side and larger one to the right. Each rectangle is labeled as Current; indicating that the current view will be placed in each viewport.
                 <br/> 
                (iii) From the setup drop-down list at the bottom of the dialog box select 3D. The labels in the viewport sample change to indicate Top, Front and SE Isometric, displaying the above 3 views of the object 
                <br/>
                (iv) If you need to change view in any of the viewport say right one showing SE Isometric view, then click the mouse in that viewport sample. The border of the sample viewport border changes to a double border to indicate that it is selected. otion 
                <br/>
                (v) Open the Change View To drop-down list just below the sample viewports, and select the required view say SW Isometric. 
                The view and the label in the selected viewport changes. P 0% 0%  Embed In a similar way, we can change view in any other viewport, by clicking the Change View To list, which contains the standard four isometric views and the six orthographic views. Port port
                <br/>
                (vi) To name this viewport arrangement, enter 'My viewport' in the New Name box.
                <br/>
                (vii) Click OK. Your display changes to show three viewports arrangement as indicated in the Viewports dialog box. 
                <br/>
                (viii) To check that your viewport arrangement is saved, again open the Viewports dialog box. 
                <br/>
                (ix) Click the Named Viewports tab. You can see 'My Viewport' listed in the Named Viewports list box. Click it, to see a sample view of your viewport arrangement in the right side window.
                <br/>


              2) Layering concept =  A layer in AutoCAD is a transparent imaginary plane on which a drawing is created.
               A simple two-dimensional drawing having a few dimensions can be drawn on a single layer. 
               But as our drawing becomes more complex, keeping all details on one layer will make it difficult to understand.
                This facility is also useful when drawing is used for many purposes. For example, in mechanical drawings, outline may be in one layer, dimensioning in second.
                 hatching in third, text in fourth and so on. In a floor plan of a building, the walls, ceiling, plumbing fixtures, wiring and furniture can be put on separate
                 layers. In this way we can display or plot them individually or combine them in different ways. Any number of layers can be made visible at any time. 
                 A carefully planned layering scheme helps to produce a drawing that contains the types of information needed in each case.
                  Using layers also allows easy modification of drawings.
                  AutoCAD allows unlimited number of layers. Their visibility colour and linetype can be controlled globally.

             <br/>

              3) Type of projections =  Various types of projections used in engineering practice may be classified into two main types

              <br/>
               (1) Orthographic projection
               <br/>
                (2) Pictorial projection.
                <br/>
                 These projections can be further classified as 
                 <br/>
                (1) Orthographic projection 
                <br/>
                <span>(a) First angle projection </span>
                <span>(b) Second angle projection </span>
                <br/>
               <span>(c) Third angle projection </span> 
               <span>(d) Fourth angle projection.</span>
                
               <br/>

                 (2) Pictorial projection 
                 (a) Axonometric projection 
                 (1) Isometric projection 
                 
                 (2) Dimetric projection (3) Trimetric projection. 
                 <br/>
                 (b) Oblique projection 
                 (1) Cabinet projection (2) Cavalier projection Ad (3) Clinographic projection (4) Shades and shadows.
                 <br/>
                 (c) Perspective projection 
                 (1) One point perspective projection 
                 (2) Two point perspective projection 
                 (3) Three point perspective projection.
              </p>
            </div>
          )}
        </div>




        
        
            
         
        </div>
      </div>
    );
  };
  
 
  
  
  export default Paper_June_2023;