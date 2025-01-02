

import React, { useState } from 'react'
import Canvas from "../components/Canvas/canvas";
import "../components/Style/paperStyle.css" // Import the CSS file

const LineExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);

    const handleClick = (question) => {
        if (question === "q1") {
            setCurrentDrawing({
                drawingType: "parallelToBoth",
                inputs: {
                    LineLength: 75,
                    firstpointfrontOfVPLength: 25,
                    firstPointAboveHPLength: 25,
                },
            });
        }

        else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    LineLength:75,
                    firstpointfrontOfVPLength:0,
                    firstPointAboveHPLength:30,
                    // secondpointAboveHPLength:"",
                    // secondpointFrontOfVPLengt:"",
                    // InclinationToVP:"",
                    // InclinationToHP:""
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    LineLength:75,
                    firstpointfrontOfVPLength:40,
                    firstPointAboveHPLength:0,
                    
                    
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "perpendicularToHP",
                inputs: {
                    LineLength:75,
                   firstpointfrontOfVPLength:20,
                    firstPointAboveHPLength:15,
                    
                    
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "perpendicularToVP",
                inputs: {
                    LineLength:75,
                   // firstpointfrontOfVPLength:,
                     firstPointAboveHPLength:25,
                    
                    
                },
                
            });
        }

        else if (question === "q6") {
            setCurrentDrawing({
                drawingType: "perpendicularToHP",
                inputs: {
                    LineLength:75,
                   // firstpointfrontOfVPLength:,
                   //  firstPointAboveHPLength:25,
                    
                    
                },
                
            });
        }

        else if (question === "q7") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    LineLength:75,
     firstpointfrontOfVPLength:0,
     firstPointAboveHPLength:0,
     secondpointAboveHPLength:0,
     secondpointFrontOfVPLength:0,
                InclinationToVP:45,
    
                    
                    
                },
                
            });
        }

        else if (question === "q8") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    LineLength:75,
                    firstpointfrontOfVPLength: 30,
                    firstPointAboveHPLength: 20,
                   
                    InclinationToHP:30,
    
                    
                    
                },
                
            });
        }

        
        else if (question === "q9") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    LineLength: 75,
                    firstpointfrontOfVPLength:15 ,
                    firstPointAboveHPLength:25,
                    InclinationToVP:60,
                   
    
                    
                    
                },
                
            });
        }

        else if (question === "q10") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    LineLength: 100,
                    firstpointfrontOfVPLength: 25,
                    firstPointAboveHPLength: 40,
                    secondpointFrontOfVPLength: 50,
                   
                    
                    
                },
                
            });
        }

        else if (question === "q11") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    LineLength: 90,
                    firstpointfrontOfVPLength: 25,
                    firstPointAboveHPLength: 0,
                    secondpointAboveHPLength: 50,
                    
                   
                    
                    
                },
                
            });
        }

        else if (question === "q12") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    LineLength:65,
                    firstpointfrontOfVPLength: 30,
                    firstPointAboveHPLength: 40,
                    //secondpointAboveHPLength:0,
                     //secondpointFrontOfVPLength:0,
                    InclinationToVP: 30,
                   // InclinationToHP,
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
            <h1 className="title">Line Exercise</h1>
            <div className="max-w-4xl mx-auto space-y-6">

                
                    

                    <div className="card">
                        <p className="card-text">
                        1. Draw the projections of a 75 mm long straight line, in the following positions where Line 
                        Parallel to both the H.P. and the V.P. and 25 mm from each.
                        </p>
                        <button onClick={() => handleClick("q1")} className="button-blue">
                            Click Here
                        </button>
                    </div>
                    <div className="card">
                        <p className="card-text">
                            2. Draw the projections of a 75 mm long straight line, in the following positions where Line 
                            Parallel to and 30 mm above the H.P. and in the V.P.
                        </p>
                        <button onClick={() => handleClick("q2")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        3. Draw the projections of a 75 mm long straight line, in the following positions where Line 
                            Parallel to and 40 mm in front of the V.P. and in the H.P.
                        </p>
                        <button onClick={() => handleClick("q3")} className="button-blue">
                            Click Here
                        </button>
                    </div>
                    
                    <div className="card">
                        <p className="card-text">
                       4. Draw the projections of a 75 mm long straight line, in the following positions where line Perpendicular to the H.P., 20 mm in front of the V.P. and its one end 
                        15 mm above the H.P. 
                        </p>
                        <button onClick={() => handleClick("q4")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                            5.Draw the projections of a 75 mm long straight line, in the following positions where line
                             Perpendicular to the V.P., 25 mm above the H.P. and its one end in 
                            the V.P. 
                        </p>
                        <button onClick={() => handleClick("q5")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                            6.  Draw the projections of a 75 mm long straight line, in the following positions where line 
                            Perpendicular to the H.P., in the V.P. and its one end in the H.P.
                        </p>
                        <button onClick={() => handleClick("q6")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                       7. Draw the projections of a 75 mm long straight line, in the following positions where line 
                       Inclined at 45° to the V.P., in the H.P. and its one end in the V.P.  
                        </p>
                        <button onClick={() => handleClick("q7")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        8.  Draw the projections of a 75 mm long straight line, in the following positions where line 
                            Inclined at 30° to the H.P. and its one end 20 mm above it; parallel to and 30 mm in front of the V.P. 
                        </p>
                        <button onClick={() => handleClick("q8")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        9. Draw the projections of a 75 mm long straight line, in the following positions where line 
                            Inclined at 60° to the V.P. and its one end 15 mm in front of it; parallel to and 25 mm above the H.P. 
                        </p>
                        <button onClick={() => handleClick("q9")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                     <div className="card">
                        <p className="card-text">
                            10. A 100 mm long line is parallel to and 40 mm above the H.P. Its two ends are 
                                 25 mm and 50 mm in front of the V.P. respectively. Draw its projections and 
                                 find its inclination with the V.P. 
                        </p>
                        <button onClick={() => handleClick("q10")} className="button-blue">
                            Click Here
                        </button>
                     </div>

                    <div className="card">
                        <p className="card-text">
                            11. A 90 mm long line is parallel to and 25 mm in front of the V.P. Its one end is 
                             in the H.P. while the other is 50 mm above the H.P. Draw its projections 
                              and find its inclination with the H.P
                        </p>
                        <button onClick={() => handleClick("q11")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                <div className="card">
                        <p className="card-text">
                         12. The front view of a line, inclined at 30° to the V.P is 65 mm long. Draw the 
                              projections of the line, when it is parallel to and 40 mm above the H.P., its 
                              one end being 30 mm in front of the V.P. 
                        </p>
                        <button onClick={() => handleClick("q12")} className="button-blue">
                            Click Here
                        </button>
                </div>

                

     </div>
        </div>
    );
};




export default LineExercise;