

import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { Curve } from './InputHelper';

const CurveExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({
        group1: false, 
        group2: false,
        group3: false,  
        group4: false,
        group5: false,
        group6: false,
        group7: false,
        group8: false,
        group9: false,

          
    });
    
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [showAllQuestions, setShowAllQuestions] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);

    const toggleGroup = (groupKey) => {
        setExpandedGroups((prevState) => {
            // If the clicked group is already expanded, leave it as is (don't collapse)
            if (prevState[groupKey]) {
                return prevState;
            }

            // Otherwise, collapse all groups and expand the clicked one
            const newState = {
        group1: false, 
        group2: false,
        group3: false,  
        group4: false,
        group5: false,
        group6: false,
        group7: false,
        group8: false,
        group9: false,
            };
            newState[groupKey] = true;
            return newState;
        });
    };

    const toggleTooltip = (tooltipId) => {
        setActiveTooltip((prev) => (prev === tooltipId ? null : tooltipId)); // Toggle tooltip
    };

    const closeTooltip = () => {
        setActiveTooltip(null);
    };

    const onDrawClick = (questionId) => {
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };
        const exerciseTitle = " Curve Exercise"

    // Render the Canvas if a drawing is set
    if (currentDrawing) {
        return (
            <Canvas
                inputs={currentDrawing.inputs}
                drawingType={currentDrawing.drawingType}
            />
        );
    }


    const groups = [
        { key: 'group1', name: 'Ellipse General Method' },
        { key: 'group2', name: ' Ellipse ConcentricCircle Method' },
        { key: 'group3', name: 'Parabola General Method' },
        { key: 'group4', name: 'Parabola Tangent Method' },
        { key: 'group5', name: 'Parabola Rectangular Method' },
        { key: 'group6', name: ' Parabola Parallelogram Method' },
        { key: 'group7', name: ' Hyperbola General Method' },
        { key: 'group8', name: ' Cycloid' },
        { key: 'group9', name: ' Involute' },
    ];


    

    const handleClick = (question) => {

         // Toggle the visibility of the question
         if (activeQuestion === question) {
            setActiveQuestion(null); // Hide the question if it's already active
        } else {
            setActiveQuestion(question); // Show the new question
        }

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

         else if (question === "q10") {
            setCurrentDrawing({
                drawingType: "ellipseConcentricCircleMethod",
                inputs: {
                   "Major Axis":140,
                   "Minor Axis":80
                },
            });
        }  
      
        else if (question === "q11") {
            setCurrentDrawing({
                drawingType: "parabolaGeneralMethod",
                inputs: {
                 "Distance From focus To Directrix":40
                },
            });
        }
        else if (question === "q12") {
            setCurrentDrawing({
                drawingType: "parabolaRectangularMethod",
                inputs: {
                 "Base":150,
                 "Height":90
                },
            });
        }
       
        else if (question === "q13") {
            setCurrentDrawing({
                drawingType: "hyperbolaGeneralMethod",
                inputs: {
             "Distance From focus To Directrix":60
                },
            });
        }
        else if (question === "q14") {
            setCurrentDrawing({
                drawingType: "cycloid",
                inputs: {
                    "Diameter":50
                },
            });
        }
        else if (question === "q15") {
            setCurrentDrawing({
                drawingType: "parabolaRectangularMethod",
                inputs: {
                 "Base":150,
                 "Height":100
                },
            });
        }
        else if (question === "q16") {
            setCurrentDrawing({
                drawingType: "parabolaTangentMethod",
                inputs: {
                 "Base":100,
                 "Height":110
                },
            });
        }
        else if (question === "q17") {
            setCurrentDrawing({
                drawingType: "hyperbolaGeneralMethod",
                inputs: {
             "Distance From focus To Directrix":50
                },
            });
        }
        else if (question === "q18") {
            setCurrentDrawing({
                drawingType: "cycloid",
                inputs: {
             "Diameter":50
                },
            });
        }
     };

     // Handle Show All / Hide All toggle
     const handleShowAllQuestionsToggle = () => {
        setShowAllQuestions(!showAllQuestions);
        if (!showAllQuestions) {
            // Collapse all groups when hiding all questions
            setExpandedGroups({
                group1: false, 
                group2: false,
                group3: false,  
                group4: false,
                group5: false,
                group6: false,
                group7: false,
                group8: false,
                group9: false,
            });
        }
    };
    return (
         <div className="container flex  text-gray-700">
                    {/* Left Side: Group Navigation */}
                    <GroupNavigation
            groups={groups}
            expandedGroups={expandedGroups}
            toggleGroup={toggleGroup}
            exerciseTitle ={exerciseTitle}

        />
        
                    {/* Right Side: Content Area for Questions */}
                    <div className="flex-1 p-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-bold">Curve Exercise</h1>
                            <button
                                className="button-blue "
                                onClick={handleShowAllQuestionsToggle}
                            >
                                {showAllQuestions ? "Hide All Questions" : "Show All Questions"}
                            </button>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-6">
        
                            {/* First Quadrant */}
                            {(showAllQuestions || expandedGroups["group1"]) && (
                                <div className="border p-4 rounded-md shadow-lg space-y-4">
                                    <h3 className="text-2xl font-semibold">Ellipse General Method</h3>
                                    <div className="space-y-4">
                        <QuestionCard
                                    question=" 1. To construct an ellipse when the distance of the focus from
                                              the directrix is equal to 50 mm and eccentricity is 2/3 . "
                                    tooltipContent={Curve.CurveQ1}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />

                                       
                                    {/* Add other questions for the first quadrant */}
                                        
                                   </div>
                                </div>
                            )}
        
                        {/* Second Quadrant */}
                        {(showAllQuestions || expandedGroups["group2"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold"> Ellipse ConcentricCircle Method</h3>
                                <div className="space-y-4">
                        <QuestionCard
                                    question="2.The major axis of an ellipse is 110 mm and minor axis is 70 mm long. Draw an ellipse
                                              by concentric circle method "
                                    tooltipContent={Curve.CurveQ2}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />
                        <QuestionCard
                                    question="10 .Construct an ellipse having major and minor axes 140 mm and 80 mm respectively."
                                    tooltipContent={Curve.CurveQ10}
                                    tooltipId="q10"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q10')} />

                                 {/* Add other questions for the second quadrant */}
                                </div>
                            </div>
                        )}
        
                        {/* Third Quadrant */}
                        {(showAllQuestions || expandedGroups["group3"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold"> Parabola General Method</h3>
                                <div className="space-y-4">

                            <QuestionCard
                                    question="3.To construct a Parabola, when the distance of the Focus from the directrix is 50 mm. "
                                    tooltipContent={Curve.CurveQ3}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />
                                    {/* Add questions for the third quadrant */}
                             <QuestionCard
                                    question="11.Construct a parabola whose focus is at a distance of 40 mm from the directrix.  
"
                                    tooltipContent={Curve.CurveQ11}
                                    tooltipId="q11"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q11')} />
        
                                   </div>
                            </div>
                        )}
        
                        {/* Fourth Quadrant */}
                        {(showAllQuestions || expandedGroups["group4"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold">  Parabola Tangent Method</h3>
                                <div className="space-y-4">
                                    {/* Add questions for the fourth quadrant */}
                                    <QuestionCard
                                    question=" 4.Draw a Parabola of Base 90mm and Height 50 mm by Tangent Method."
                                    tooltipContent={Curve.CurveQ4}
                                    tooltipId="q4"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q4')} />
                             <QuestionCard
                                    question="  16 .Draw an isosceles triangle of 100 mm long base and 110 mm long altitude.Inscribe a parabola in it by method of tangents."
                                    tooltipContent={Curve.CurveQ16}
                                    tooltipId="q16"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q16')} />
        
                                  </div>
                            </div>
                        )}
        
                        {(showAllQuestions || expandedGroups["group5"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold">  Parabola Rectangular Method </h3>
                                <div className="space-y-4">
                                <QuestionCard
                                    question="5.Draw a Parabola of Base 100MM and Height 50MM by Rectangular Method.."
                                    tooltipContent={Curve.CurveQ5}
                                    tooltipId="q5"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q5')} />
        
                                    {/* Add questions for the fourth quadrant */}

                                    <QuestionCard
                                    question="12.Draw a rectangle having its sides 150 mm and 90 mm long. Inscribe two parabolas in it with their axis bisecting each other"
                                    tooltipContent={Curve.CurveQ12}
                                    tooltipId="q12"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q12')} />
                             <QuestionCard
                                    question="15.A Ball Thrown In Air Attains 100 M Height And Covers Horizontal Distance 150 M On Ground. Draw the path of the ball (projectile)-"
                                    tooltipContent={Curve.CurveQ15}
                                    tooltipId="q15"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q15')} />

                                   </div>
                            </div>
                        )}
        
                        {(showAllQuestions || expandedGroups["group6"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold">Parabola Parallelogram Method</h3>
                                <div className="space-y-4">
                                    {/* Add questions for the fourth quadrant */}
                                    <QuestionCard
                                    question="6.Draw a Parabola by Parallelogram Method ,If the Base and Axis length of parabola are 100mm and 50mm. 
                                        The base of parabola is incline at 30⁰ to horizontal.   -"
                                    tooltipContent={Curve.CurveQ6}
                                    tooltipId="q6"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q6')} />
                                  
                                   </div>
                            </div>
                        )}

                         {(showAllQuestions || expandedGroups["group7"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold"> Hyperbola General Method</h3>
                                <div className="space-y-4">
                            <QuestionCard
                                    question="7.Construct a hyperbola,when the distance of the focus from the directrix is 65 mm and eccentricity is 3/2."
                                    tooltipContent={Curve.CurveQ7}
                                    tooltipId="q7"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q7')} />
                                    {/* Add questions for the fourth quadrant */}
                            <QuestionCard
                                    question="14.The focus of a hyperbola is 60 mm from its directrix.Draw the curve when eccentricity is 5/3."
                                    tooltipContent={Curve.CurveQ13}
                                    tooltipId="q13"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q13')} />
                            <QuestionCard
                                    question=" 17.Point F Is 50 Mm From A Line AB. A Point P Is Moving In A Plane Such That The Ratio Of It's Distances From F And Line AB Remains Constant And Equals To 2/3. Draw Locus Of Point P. ( Eccentricity = 2/3 )"
                                    tooltipContent={Curve.CurveQ17}
                                    tooltipId="q17"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q17')} />
                                 
                                    </div>
                            </div>
                        )}

                        
                        {(showAllQuestions || expandedGroups["group8"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold"> Cycloid</h3>
                                <div className="space-y-4">
                        <QuestionCard
                                    question="  8. Draw a cycloid of a circle of diameter 50 mm for one revolution."
                                    tooltipContent={Curve.CurveQ8}
                                    tooltipId="q8"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q8')} />
                                    {/* Add questions for the fourth quadrant */}
                         <QuestionCard
                                    question="  18.Draw Locus Of A Point On The Periphery Of A Circle Cycloid Which Rolls On Straight Line Path. Take Circle Diameter As 50 Mm."
                                    tooltipContent={Curve.CurveQ18}
                                    tooltipId="q18"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q18')} />
                                   

                                 </div>
                            </div>
                        )}

                        {(showAllQuestions || expandedGroups["group9"]) && (
                            <div className="border p-4 rounded-md shadow-lg space-y-4">
                                <h3 className="text-2xl font-semibold"> Involute</h3>
                                <div className="space-y-4">
                            <QuestionCard
                                    question="  9. Draw an involute of a circle of diameter 50 mm."
                                    tooltipContent={Curve.CurveQ9}
                                    tooltipId="q9"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q9')} />
                                   
                                    {/* Add questions for the fourth quadrant */}
        
                                     </div>
                            </div>
                        )}
                    </div>
                </div>
                </div >
            );
        };
        



export default CurveExercise;
