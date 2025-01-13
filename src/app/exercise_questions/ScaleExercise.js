import React, { useState } from 'react'
import Canvas from '../components/Canvas/canvas';
import "../components/Style/paperStyle.css" // Import the CSS file

const ScaleExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);

    const handleClick = (question) => {
        if (question === "q1") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    
                    "RF" :1,
                    ":":4,
                    "Actual Length":0,
                    "Actual Length Unit":"",
                    "Drawing Length":0,
                   "Drawing Length Unit" :"",
                    "Maximum Length":5,
                    "Maximum Length Unit":"dcm",
                    "Show Length1": 1,
                    "Show Length1 Unit": "dcm",
                    "Show Length2":1,
                    "Show Length2 Unit":"cm",
                },
            });
        }

       else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    "RF" :0,
                    ":":0,
                    "Actual Length":1,
                    "Actual Length Unit":"dm",
                    "Drawing Length":1.5,
                   "Drawing Length Unit" :"cm",
                    "Maximum Length":10,
                    "Maximum Length Unit":"dm",
                    "Show Length1": 0,
                    "Show Length1 Unit": "m",
                    "Show Length2":6,
                    "Show Length2 Unit":"dm",
                },
            });
        }

        else if (question === "q3s") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    "RF" :1,
                    ":":50,
                    "Actual Length":0,
                    "Actual Length Unit":"",
                    "Drawing Length":0,
                   "Drawing Length Unit" :"",
                    "Maximum Length":8,
                    "Maximum Length Unit":"m",
                    "Show Length1": 1,
                    "Show Length1 Unit": "m",
                    "Show Length2":1,
                    "Show Length2 Unit":"dcm",
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    "RF" :0,
                    ":":0,
                    "Actual Length":1,
                    "Actual Length Unit":"ft",
                    "Drawing Length":5/4,
                   "Drawing Length Unit" :"inch",
                    "Maximum Length":5,
                    "Maximum Length Unit":"ft",
                    "Show Length1": 1,
                    "Show Length1 Unit": "ft",
                    "Show Length2":1,
                    "Show Length2 Unit":"inch",
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                  "RF" :0,
                    ":":0,
                    "Actual Length":1,
                    "Actual Length Unit":"ft",
                    "Drawing Length":1,
                   "Drawing Length Unit" :"inch",
                    "Maximum Length":6,
                    "Maximum Length Unit":"ft",
                    "Show Length1": 4,
                    "Show Length1 Unit": "ft",
                    "Show Length2":7,
                    "Show Length2 Unit":"inch",
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
            <h1 className="title">Scale Exercise</h1>
            <div className="max-w-4xl mx-auto space-y-6">

                
                    

                    <div className="card">
                        <p className="card-text">
                        1.Construct a scale of 1 : 4 to show centimetres and long
                        enough to measure upto 5 decimetres.
                        </p>
                        <button onClick={() => handleClick("q1")} className="button-blue">
                            Click Here
                        </button>
                    </div>
                 
                    <div className="card">
                        <p className="card-text">
                        2.Construct a scale of 1.5 cm = 1 dm to read upto 1 metre and show on it a length 
                        of 0.6 metre.  
                        </p>
                        <button onClick={() => handleClick("q2")} className="button-blue">
                            *Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        3. Draw a scale of 1 :50 showing metres and decimetres, and to measure upto 
                        8 metres.  
                        </p>
                        <button onClick={() => handleClick("q3")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        4. Construct the following scales and show below each, its R.F. and the units 
                           which its divisions represent :Scale of 1 4 = 1 foot, to measure upto 5 feet and showing feet and inches. .  
                        </p>
                        <button onClick={() => handleClick("q4")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        5. Construct a scale of 1" = 1 foot to read upto 6 feet and show on it, 4' - 7" 
                        length.  
                        </p>
                        <button onClick={() => handleClick("q5")} className="button-blue">
                            Click Here
                        </button>
                    </div>


     </div>
        </div>
    );
};




export default ScaleExercise;
