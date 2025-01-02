

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
                    "Plane Type": "Hexagone", // Static value
                    "Side Length": 40, // Static value
                    "Plane Position": "Corner -> in -> HP", // Static value
                    "Incline With HP":45 , // Replace with the actual value
                    "Inclined With VP": 60, // Replace with the actual value
                },
            });
        }

        else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type": "Pentagone", // Static value
                    "Side Length": 40, // Static value
                    "Plane Position": "Side -> Parallel -> HP", // Static value
                    "Incline With HP":30, // Replace with the actual value
                    "Inclined With VP": 60, // Replace with the actual value
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type": "Hexagone", // Static value
                    "Side Length": 25, // Static value
                    "Plane Position": "Side -> in -> HP", // Static value
                    "Incline With HP":45, // Replace with the actual value
                    "Inclined With VP": 60, // Replace with the actual value
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type": "Square", // Static value
                    "Side Length": 50, // Static value
                    "Plane Position": "Corner -> in -> HP", // Static value
                    "Incline With HP":30, // Replace with the actual value
                    "Inclined With VP": 45, // Replace with the actual value
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "plane",
                inputs: {
                    "Plane Type": "Pentagone", // Static value
                    "Side Length": 26, // Static value
                    "Plane Position": "Side -> Parallel -> VP", // Static value
                    "Incline With HP":45 , // Replace with the actual value
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
                 
                 


     </div>
        </div>
    );
};




export default PlaneExercise;