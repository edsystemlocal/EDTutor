

import React, { useState } from 'react'
import Canvas from '../components/Canvas/canvas';
import "../components/Style/paperStyle.css" // Import the CSS file

const CurveExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);

    const handleClick = (question) => {
        if (question === "q1") {
            setCurrentDrawing({
                drawingType: "ellipseGeneralMethod",
                inputs: {
                    "Distance From focus To Directrix":50
                },
            });
        }

       else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "ellipseConcentricCircleMethod",
                inputs: {
                   "Major Axis":110,
                   "Minor Axis":70
                },
            });
        }

       else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "parabolaGeneralMethod",
                inputs: {
                 "Distance From focus To Directrix":50
                },
            });
        }

       else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "parabolaTangentMethod",
                inputs: {
                 "Base":90,
                 "Height":50
                },
            });
        }
       else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "parabolaRectangularMethod",
                inputs: {
                 "Base":100,
                 "Height":50
                },
            });
        }

       else if (question === "q6") {
            setCurrentDrawing({
                drawingType: "parabolaParallelogramMethod",
                inputs: {
                 "Base":100,
                 "Height":50,
                 "Angle (Degrees)":30
                },
            });
        }

       else if (question === "q7") {
            setCurrentDrawing({
                drawingType: "hyperbolaGeneralMethod",
                inputs: {
             "Distance From focus To Directrix":65
                },
            });
        }

       else if (question === "q8") {
            setCurrentDrawing({
                drawingType: "cycloid",
                inputs: {
            "Diameter":50
                },
            });
        }

       else if (question === "q9") {
            setCurrentDrawing({
                drawingType: "Involute",
                inputs: {
            "Diameter":50
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
            <h1 className="title">Curve Exercise</h1>
            <div className="max-w-4xl mx-auto space-y-6">              

                    <div className="card">
                        <p className="card-text">
                        1.To construct an ellipse when the distance of the focus from
                        the directrix is equal to 50 mm and eccentricity is 2/3 . 
                        </p>
                        <button onClick={() => handleClick("q1")} className="button-blue">
                            Click Here
                        </button>
                    </div>
                 
                    <div className="card">
                        <p className="card-text">
                        2.The major axis of an ellipse is 110 mm and minor axis is 70 mm long. Draw an ellipse
                        by concentric circle method.  
                        </p>
                        <button onClick={() => handleClick("q2")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        3.To construct a Parabola, when the distance of the Focus from the directrix is 50 mm.  
                        </p>
                        <button onClick={() => handleClick("q3")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        4.Draw a Parabola of Base 90mm and Height 50 mm by Tangent Method.     
                        </p>
                        <button onClick={() => handleClick("q4")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        5.Draw a Parabola of Base 100MM and Height 50MM by Rectangular Method.     
                        </p>
                        <button onClick={() => handleClick("q5")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        6.Draw a Parabola by Parallelogram Method ,If the Base and Axis length of parabola are 100mm and 50mm. The base of parabola is incline at 30⁰ to horizontal.   
                        </p>
                        <button onClick={() => handleClick("q6")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        7.Construct a hyperbola,when the distance of the focus from the directrix is 65 mm and eccentricity is 3/2.   
                        </p>
                        <button onClick={() => handleClick("q7")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        8. Draw a cycloid of a circle of diameter 50 mm for one revolution.   
                        </p>
                        <button onClick={() => handleClick("q8")} className="button-blue">
                            Click Here
                        </button>
                    </div>

                    <div className="card">
                        <p className="card-text">
                        9. Draw an involute of a circle of diameter 50 mm.   
                        </p>
                        <button onClick={() => handleClick("q9")} className="button-blue">
                            Click Here
                        </button>
                    </div>

               


     </div>
        </div>
    );
};




export default CurveExercise;