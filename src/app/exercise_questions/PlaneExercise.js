

import React, { useState } from 'react'
import Canvas from '../components/Canvas/canvas';
import "../components/Style/paperStyle.css" // Import the CSS file

const PlaneExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);

    const handleClick = (question) => {
        if (question === "q1") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Hexagone",
                    "Side Length":40,
                    "Plane Position":"Corner",
                    "Plane in/parallel Postion":"in",
                    "Plane HP/VP Postion":"HP",
                    "Incline With HP":45,
                    "Inclined With VP":60
                    //"Plane Type": "Hexagone", // Static value
                    //"Side Length": 40, // Static value
                   // "Plane Position": "Corner -> in -> HP", // Static value
                   // "Incline With HP":45 , // Replace with the actual value
                   // "Inclined With VP": 60, // Replace with the actual value
                },
            });
        }

        else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Pentagone",
                    "Side Length":40,
                    "Plane Position":"Side",
                    "Plane in/parallel Postion":"Parallel",
                    "Plane HP/VP Postion":"HP",
                    "Incline With HP": 30,
                    "Inclined With VP":60
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Hexagone",
                    "Side Length":25,
                    "Plane Position":"Side",
                    "Plane in/parallel Postion":"in",
                    "Plane HP/VP Postion":"HP",
                    "Incline With HP": 45,
                    "Inclined With VP":60
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Square",
                    "Side Length":50,
                    "Plane Position":"Corner",
                    "Plane in/parallel Postion":"in",
                    "Plane HP/VP Postion":"HP",
                    "Incline With HP": 30,
                    "Inclined With VP":45
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Pentagone",
                    "Side Length":26,
                    "Plane Position":"Side",
                    "Plane in/parallel Postion":"Parallel",
                    "Plane HP/VP Postion":"VP",
                    "Incline With HP": 45,
                    "Inclined With VP":30
                },
            });
        }
        else if (question === "q6") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Circle",
                    "Side Length":50,
                    "Plane Position":"Side",
                    "Plane in/parallel Postion":"Parallel",
                    "Plane HP/VP Postion":"VP",
                    "Incline With HP": 30,
                    "Inclined With VP":0
                },
            });
        }
        else if (question === "q7a") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type":"Circle",
                    "Side Length":50,
                    "Plane Position":"Side",
                    "Plane in/parallel Postion":"Parallel",
                    "Plane HP/VP Postion":"HP",
                    "Incline With HP": 45,
                    "Inclined With VP":30
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
            <h1 className="title">Plane Exercise</h1>
            <div className="max-w-4xl mx-auto space-y-6">

                
                    

                    <div className="card">
                        <p className="card-text">
                        1. A regular hexagon of 40 mm side has a corner in the H.P. Its surface is 
                          inclined at 45° to the H.P. and the top view of the diagonal through the 
                          corner which is in the H.P. makes an angle of 60° with the V.P. Draw its 
                        projections. 
                        </p>
                        <button onClick={() => handleClick("q1")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        2. Draw the projections of a regular pentagon of 40 mm side, having its surface 
                           inclined at 30° to the H.P. and a side parallel to the H.P. and inclined at an 
                           angle of 60° to the V.P. 
                        </p>
                        <button onClick={() => handleClick("q2")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        3. Draw the projections of a regular hexagon of 
                            25 mm side, having one of its sides in the H.P. and inclined at 60° to the V.P., 
                            and its surface making an angle of 45° with the H.P. 

                        </p>
                        <button onClick={() => handleClick("q3")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        4.  A square ABCO of 50 mm side has its corner A in 
                            the H.P., its diagonal AC inclined at 30° to the H.P. and the diagonal BO inclined 
                            at 45° to the V.P. and parallel to the H.P. Draw its projections. 

                        </p>
                        <button onClick={() => handleClick("q4")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        5.   Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
                             its one side is parallel to the V.P. and inclined at 45° to H.P.
                        </p>
                        <button onClick={() => handleClick("q5")} className="button-blue">
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <p className="card-text">
                        6.  Draw the projections of a circle of 50 mm diamete1~having its plane vertical and inclined at 30° to the V.P. 
                        Its centre is 30 mm above the H.P. and 20 mm in front of the V.P. Show also its traces..
                        </p>
                        <button onClick={() => handleClick("q6")} className="button-blue">
                            *Click Here
                        </button>
                    </div>
                    <div className="card">
                        <p className="card-text">
                        7a.  Draw the projections of a circle of 50 mm diameter resting in the H.P. on a point A on the circumference,
                         its plane inclined at 45° to the H.P. and
                         (a) the top view of the diameter AB making 30° angle with the V.P.;
                         (b) the diameter AB making 30° angle with the V. P.
                        </p>
                        <button onClick={() => handleClick("q7a")} className="button-blue">
                            *Click Here
                        </button>
                    </div>
                    <div className="card">
                        <p className="card-text">
                        7b. Draw the projections of a circle of 50 mm diameter resting in the H.P. on a point A on the circumference,
                         its plane inclined at 45° to the H.P. and
                         (a) the top view of the diameter AB making 30° angle with the V.P.;
                         (b) the diameter AB making 30° angle with the V. P.
                        </p>
                        <button onClick={() => handleClick("q7b")} className="button-blue">
                            *Click Here
                        </button>
                    </div>
                 


     </div>
        </div>
    );
};




export default PlaneExercise;