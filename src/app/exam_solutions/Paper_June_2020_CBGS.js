

// import React, { useState } from 'react'
// import Canvas from "../components/Canvas/canvas";
// import "../components/Style/paperStyle.css" // Import the CSS file

// const Paper_June_2020_CBGS = () => {
//   const [currentDrawing, setCurrentDrawing] = useState(null);

//   const handleClick = (question) => {
//     if (question === "q6(a)") {
//       const inputs = {
//         "Plane Type": "Pentagone", // Static value
//         "Side Length": 26, // Static value
//         "Plane Position": "Side -> Parallel -> VP", // Static value
//         "Incline With HP":45 , // Replace with the actual value
//         "Inclined With VP": 30, // Replace with the actual value
//       };

//       setCurrentDrawing({
//         drawingType: "plane", // Static value
//         inputs,
//       });
//     }
//   };


// if (currentDrawing) {
//   return (
//     <Canvas
//       inputs={currentDrawing.inputs}
//       drawingType={currentDrawing.drawingType}
//     />
//   );
// }

// return (
//   <div className="container">
//     <h1 className="title">Paper June 2020 CBGS</h1>
//     <div className="max-w-4xl mx-auto space-y-6">

//       <div className="card">
//         <p className="card-text">
//           1. Mark the answer as True/False:
//           <br></br>
//           i) Arc of circle method is used for drawing parabola.
//           <br></br>
//           ii) Scale of chords is used for measuring angles.
//           <br></br>
//           iii) If a right circular cylinder is cut by a plane parallel to the axis of the cylinder the section obtained is a ellipse.
//           <br></br>
//           iv) Four centre method is known to draw cycloid.
//           <br></br>
//           v) CAD is time consuming.
//           vi) In case of orthographic projections, projectors are not perpendicular to the plane of projection.
//           <br></br>
//           vii) True length of line inclined to H.P. and parallel to V.P. appears in front view.

//         </p>
//         <button onClick={() => handleClick("q1")} className="button-blue">
//           Click Here
//         </button>
//       </div>

//       <div className="card">
//         <p className="card-text">
//           2. A cube 25 mm edge is placed centrally on the top of another square block of 40 mm edge and 15 mm thick.
//           Draw the isometric drawing of two solids.
//         </p>
//         <button onClick={() => handleClick("q2")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           3. a) Define R.F. of scale.
//         </p>
//         <button onClick={() => handleClick("q3(a)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           b) Construct a diagonal scale of R.F = 1/32 to read metres, decimeters and centimetres and long enough to read upto 4 metres.
//           Show on this scale a distance of 2.46 m.
//         </p>
//         <button onClick={() => handleClick("q3(b)")} className="button-blue">
//           Click Here
//         </button>
//       </div>

//       <div className="card">
//         <p className="card-text">
//           4. One end of a line UV is in the first quadrant, 20mm above HP and 30mm infront of V.P. other end is 40mm behind VP and 50mm below other end is 40mm behind the projectors of the line is 60mm.
//           Draw the projection of the line and find its true length.
//         </p>
//         <button onClick={() => handleClick("q4")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           5. a) Draw the isometric projection of a cone of base 40mm diameter and height 58mm. When it rests with its base on H.P.

//         </p>
//         <button onClick={() => handleClick("q5(a)")} className="button-blue">
//           Click Here
//         </button>
//       </div>

//       <div className="card">
//         <p className="card-text">
//           b) Explain the various advantages of CAD.
//         </p>
//         <button onClick={() => handleClick("q5(b)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           6. a) Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
//           its one side is parallel to the V.P. and inclined at 45° to H.P.
//         </p>
//         <button onClick={() => handleClick("q6(a)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           b) A square prism, side of base 35mm and axis 50mm long lies with one of longer edges on HP such that its axis is perpendicular to V.P.
//           Also one of its rectangular faces containing that longer edge is inclined at 30° to H.P. Draw its projection.
//         </p>
//         <button onClick={() => handleClick("q6(b)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           7. a) A line AB, 50 mm long has end A 12 mm above HP and 10 mm infront of V.P.
//           The end B is 30 mm above HP and 25 mm infront of V.P. Draw the projection of line.
//         </p>
//         <button onClick={() => handleClick("q7(a)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           b) Differentiate between the first angle and third angle projection.
//         </p>
//         <button onClick={() => handleClick("q7(b)")} className="button-blue">
//           Click Here
//         </button>
//       </div>


//       <div className="card">
//         <p className="card-text">
//           8. Write short note on any two
//           a) Types of scales b) Epicycloid c) Editing commands in CAD
//         </p>
//         <button onClick={() => handleClick("q8")} className="button-blue">
//           Click Here
//         </button>
//       </div>






//     </div>
//   </div>
// );
//   };




// export default Paper_June_2020_CBGS;
// --------------------------------------------



// ----------------------------


import React, { useState } from 'react';
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css"; // Import the CSS file

const Paper_June_2020_CBGS = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});
   const [currentDrawing, setCurrentDrawing] = useState(null);

  const toggleAnswer = (question) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const handleClick = (question) => {
    if (question === "q6(a)") {
      setCurrentDrawing({
        drawingType: "plane",
        inputs: {
          "Plane Type": "Pentagone", // Static value
          "Side Length": 26, // Static value
          "Plane Position": "Side -> Parallel -> VP", // Static value
          "Incline With HP": 45, // Replace with the actual value
          "Inclined With VP": 30, // Replace with the actual value
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
      <h1 className="title">Paper June 2020 CBGS</h1>
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Question 1 */}
        <div className="card">
          <p className="card-text">
            1. Mark the answer as True/False:
            <br />
            i) Arc of circle method is used for drawing parabola.
            <br />
            ii) Scale of chords is used for measuring angles.
            <br />
            iii) If a right circular cylinder is cut by a plane parallel to the axis of the cylinder, the section obtained is an ellipse.
            <br />
            iv) Four centre method is known to draw cycloid.
            <br />
            v) CAD is time consuming.
            <br />
            vi) In case of orthographic projections, projectors are not perpendicular to the plane of projection.
            <br />
            vii) True length of line inclined to H.P. and parallel to V.P. appears in front view.
          </p>
          <button onClick={() => toggleAnswer("q1")} className="button-blue">
            {visibleAnswers["q1"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q1"] && (
            <div className="answer-text">
              <p>
                i) False<br />
                ii) False<br />
                iii) True<br />
                iv) True<br />
                v) False<br />
                vi) False<br />
                vii) True
              </p>
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="card">
          <p className="card-text">
            2. A cube 25 mm edge is placed centrally on the top of another square block of 40 mm edge and 15 mm thick.
            Draw the isometric drawing of two solids.
          </p>
          <button onClick={() => handleClick("q2")} className="button-blue">
            Click Here
          </button>
        </div>

        {/* Question 3a */}
        <div className="card">
          <p className="card-text">
            3. a) Define R.F. of scale.
          </p>
          <button onClick={() => toggleAnswer("q3(a)")} className="button-blue">
            {visibleAnswers["q3(a)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q3(a)"] && (
            <div className="answer-text">
              <p>
              When an object is drawn with its actual dimensions, the scale used is called full size scale. 
              But most of the time it is not possible to draw an object to its actual size. We have to use either a reducing scale for large objects or an enlarging scale for smaller objects.
              Drawings of small machine parts, mechanical instruments, watches, etc. are made larger than their real size. They are said to be drawn in an increasing or enlarging scale.
                **Representative Fraction (R.F.)** of a scale is the ratio of the distance on the drawing to the corresponding actual distance on the object.
                <br />
                R.F. = (Distance on Drawing) / (Actual Distance)
              </p>
            </div>
          )}
        </div>

        {/* Question 3b */}
        <div className="card">
       <p className="card-text">
           b) Construct a diagonal scale of R.F = 1/32 to read metres, decimeters and centimetres and long enough to read upto 4 metres.
           Show on this scale a distance of 2.46 m.
         </p>
        <button onClick={() => handleClick("q3(b)")} className="button-blue">
          Click Here
        </button>
      </div>

        {/* Question 4 */}
        <div className="card">
         <p className="card-text">
           4. One end of a line UV is in the first quadrant, 20mm above HP and 30mm infront of V.P. other end is 40mm behind VP and 50mm below other end is 40mm behind the projectors of the line is 60mm.
           Draw the projection of the line and find its true length.
         </p>
         <button onClick={() => handleClick("q4")} className="button-blue">
           Click Here
         </button>
       </div>

        {/* Question 5a */}
        <div className="card">
         <p className="card-text">
           5. a) Draw the isometric projection of a cone of base 40mm diameter and height 58mm. When it rests with its base on H.P.

         </p>
         <button onClick={() => handleClick("q5(a)")} className="button-blue">
           Click Here
         </button>
       </div>


        {/* Question 5b */}
        <div className="card">
          <p className="card-text">
            5. b) Explain the various advantages of CAD.
          </p>
          <button onClick={() => toggleAnswer("q5(b)")} className="button-blue">
            {visibleAnswers["q5(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q5(b)"] && (
            <div className="answer-text">
              <p>
                The advantages of CAD include:
                1. Enhanced accuracy and precision in design.
                2. Faster design iterations and changes.
                3. Better visualization of the final product.
                4. Easy sharing and collaboration on designs.
              </p>
            </div>
          )}
        </div>

        {/* Question 6a */}
        <div className="card">
          <p className="card-text">
            6. a) Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
            its one side is parallel to the V.P. and inclined at 45° to H.P.
          </p>
          <button onClick={() => handleClick("q6(a)")} className="button-blue">
            Click Here
          </button>
        </div>

        {/* Question 6b */}
        <div className="card">
        <p className="card-text">
           b) A square prism, side of base 35mm and axis 50mm long lies with one of longer edges on HP such that its axis is perpendicular to V.P.
           Also one of its rectangular faces containing that longer edge is inclined at 30° to H.P. Draw its projection.
         </p>
         <button onClick={() => handleClick("q6(b)")} className="button-blue">
           Click Here
         </button>
       </div>
          
       <div className="card">
         <p className="card-text">
          7. a) A line AB, 50 mm long has end A 12 mm above HP and 10 mm infront of V.P.
           The end B is 30 mm above HP and 25 mm infront of V.P. Draw the projection of line.
         </p>
         <button onClick={() => handleClick("q7(a)")} className="button-blue">
           Click Here
       </button>
       </div>


       {/* Question 5b */}
       <div className="card">
          <p className="card-text">
            7. b) Differentiate between the first angle and third angle projection.
          </p>
          <button onClick={() => toggleAnswer("q7(b)")} className="button-blue">
            {visibleAnswers["q7(b)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q7(b)"] && (
            <div className="answer-text">
              <p>
             *  First Angle Projection - In this type of projection, the objects assumed to be situated in first quadrant. 
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
	           (3) The front view is drawn below the XY line and the top vies above it.
             <br/>
              </p>
            </div>
          )}
        </div>


       <div className="card">
         <p className="card-text">
          8. Write short note on any two
         a) Types of scales b) Epicycloid c) Editing commands in CAD
         </p>
         <button onClick={() => toggleAnswer("q8")} className="button-blue">
            {visibleAnswers["q8)"] ? "Hide Answer" : "Show Answer"}
          </button>
          {visibleAnswers["q8"] && (
            <div className="answer-text">
              <p>
              i) Types of scales = Some commonly used types of scales in engineering practice are listed below - 
                <br/>
	              (i) Plain scales (ii) Diagonal scales (iii) Comparative scales (iv) Vernier scales (v) Scale of chords (vi) Isometric scales.
                <br/>

              b) Epicycloid = When a circle rolls, without slipping around the outside of a fixed circle, 
		                        the locus of a point on the circumference of the rolling circle is called the epicycloid.
		        The rolling circle is called the generating circle and the fixed circle is called the base circle or directing circle.
            <br/>
              c) Editing commands in CAD = A drawing may be modified or edited either during its preparation or during the revision of design. In AutoCAD, editing commands can be of
	                 following two types 
                   <br/>
                   (1) Commands used to modify the entities, e.g. ERASE, UNDO, REDO, SELECT, ROTATE, CHAM- FER, etc.
                   <br/> 
	                 (2) Commands used to make copies of the drawings, e.g. COPY. MIRROR. OFFSET, ARRAY, etc. 
                  <br/>

                </p>
                </div>
          )}
       </div>

       




        
      </div>
    </div>
  );
};

export default Paper_June_2020_CBGS;
