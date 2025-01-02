

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
                    ScaleMaximumLength:10,
                    ScaleMaximumLengthUnit:"dcm",
                    ScaleShowLength1:7,
                    ScaleShowUnit1: "dcm",
                    ScaleShowLength2: 6,
                    ScaleShowUnit2: "cm",
                },
            });
        }

       else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    ScaleMaximumLength:1,
                    ScaleMaximumLengthUnit:"m",
                    ScaleShowLength1:0,
                    ScaleShowUnit1: "m",
                    ScaleShowLength2: 6,
                    ScaleShowUnit2: "dcm",
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    ScaleMaximumLength:8,
                    ScaleMaximumLengthUnit:"m",
                    ScaleShowLength1:0,
                    ScaleShowUnit1: "m",
                    ScaleShowLength2: 0,
                    ScaleShowUnit2: "dcm",
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    ScaleMaximumLength:5,
                    ScaleMaximumLengthUnit:"ft",
                    ScaleShowLength1:0,
                    ScaleShowUnit1: "ft",
                    ScaleShowLength2: 0,
                    ScaleShowUnit2: "inch",
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "plainScale",
                inputs: {
                    ScaleMaximumLength:6,
                    ScaleMaximumLengthUnit:"ft",
                    ScaleShowLength1:4,
                    ScaleShowUnit1: "ft",
                    ScaleShowLength2: 7,
                    ScaleShowUnit2: "inch",
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
                        1.Construct a scale of 1 :5 to show decimetres and centimetres and to read upto 
                        1 metre. Show the length of 7.6 dm on it. 
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
                            Click Here
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