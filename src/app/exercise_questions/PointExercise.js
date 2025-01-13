import React, { useState } from 'react'
import Canvas from '../components/Canvas/canvas';
import "../components/Style/paperStyle.css";

const PointExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);

    const handleClick = (question) => {
        if (question === "q1") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 0,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 20,
                    "First Point Position VP": "Behind",
                }
            });
        }

        else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 40,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 25,
                    "First Point Position VP": "Front",
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 40,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 0,
                    "First Point Position VP": "Front",
                },

            });
        }
        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 25,
                    "First Point Position HP": "Below",
                    "First Point Of VP": 25,
                    "First Point Position VP": "Behind",
                },

            });
        }
        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 15,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 50,
                    "First Point Position VP": "Behind",
                },

            });
        }
        else if (question === "q6") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 40,
                    "First Point Position HP": "Below",
                    "First Point Of VP": 25,
                    "First Point Position VP": "Front",
                },

            });
        }
        else if (question === "q7") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 0,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 0,
                    "First Point Position VP": "Front",
                },

            });
        }
        else if (question === "q8") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 15,
                    "First Point Position HP": "Above",
                    "First Point Of VP": 20,
                    "First Point Position VP": "Front",
                },

            });
        }
        else if (question === "q9") {
            setCurrentDrawing({
                drawingType: "point",
                inputs: {
                    "First Point Of HP": 40,
                    "First Point Position HP": "Below",
                    "First Point Of VP": 25,
                    "First Point Position VP": "Behind",
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
            <h1 className="title">Point Exercise</h1>
            <div className="max-w-4xl mx-auto space-y-6">

                <div className="card">
                    <p className="card-text">
                        1. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        A, in the H.P. and 20 mm behind the V.P.
                    </p>
                    <button onClick={() => handleClick("q1")} className="button-blue">
                        Click Here
                    </button>
                </div>


                <div className="card">
                    <p className="card-text">
                        2. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        B, 40 mm above the H.P. and 25 mm in front of the V.P.
                    </p>
                    <button onClick={() => handleClick("q2")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        3. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        C, in the V.P. and 40 mm above the H.P.
                    </p>
                    <button onClick={() => handleClick("q3")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        4. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        D,25 mm below the H.P. and 25 mm behind the V.P.
                    </p>
                    <button onClick={() => handleClick("q4")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        5. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        E, 15 mm above the H.P. and 50 mm behind the V.P.
                    </p>
                    <button onClick={() => handleClick("q5")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        6. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        F, 40 mm below the H.P. and 25 mm in front of the V.P.
                    </p>
                    <button onClick={() => handleClick("q6")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        7. Draw the projections of the following points on the same ground line, keeping
                        the projectors 25 mm apart.
                        G,in both the H.P. and the V.P.
                    </p>
                    <button onClick={() => handleClick("q7")} className="button-blue">
                        Click Here
                    </button>
                </div>

                <div className="card">
                    <p className="card-text">
                        8.  A point P is 15 mm above the H.P. and 20 mm in front of the V.P.
                    </p>
                    <button onClick={() => handleClick("q8")} className="button-blue">
                        Click Here
                    </button>
                </div>
                <div className="card">
                    <p className="card-text">
                        9.  point Q is 25 mm behind the V.P. and 40 mm below the H.P.
                    </p>
                    <button onClick={() => handleClick("q9")} className="button-blue">
                        Click Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PointExercise;