
import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { Solid } from './InputHelper';

const SolidExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({

        group1: false,
        group2: false,
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
    const exerciseTitle = " Solid Exercise"

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
        { key: 'group1', name: 'InclinedToBothHPAndVP ' },
        { key: 'group2', name: 'InclinedToHPParallelToVP ' },

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
                drawingType: "solid",
                inputs: {
                    "Plane Type": "Pentagone",
                    "Side Length": 30,
                    "Plane Position": "side",
                    "Plane in/parallel Postion": "Parallel",
                    "Plane HP/VP Postion": "HP",
                    "Incline With HP": 45,
                    "Inclined With VP": 30,
                    "Solid Type": "Cylinder",
                    "Solid Height": 80
                }
            });
        }

        if (question === "q2") {
            setCurrentDrawing({
                drawingType: "solid",
                inputs: {
                    "Plane Type": "Hexagone",
                    "Side Length": 30,
                    "Plane Position": "side",
                    "Plane in/parallel Postion": "Parallel",
                    "Plane HP/VP Postion": "HP",
                    "Incline With HP": 45,
                    "Inclined With VP": 30,
                    "Solid Type": "Cone",
                    "Solid Height": 80
                }
            });
        }

        if (question === "q3") {
            setCurrentDrawing({
                drawingType: "solid",
                inputs: {
                    "Plane Type": "Hexagone",
                    "Side Length": 30,
                    "Plane Position": "side",
                    "Plane in/parallel Postion": "Parallel",
                    "Plane HP/VP Postion": "VP",
                    "Incline With HP": 45,
                    "Inclined With VP": 30,
                    "Solid Type": "Cylinder",
                    "Solid Height": 40
                }
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
                exerciseTitle={exerciseTitle}

            />
            {/* Right Side: Content Area for Questions */}
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Solid Exercise</h1>
                    <button
                        className="button-blue"
                        onClick={handleShowAllQuestionsToggle}
                    >
                        {showAllQuestions ? "Hide All Questions" : "Show All Questions"}
                    </button>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* first scale  */}
                    {(showAllQuestions || expandedGroups["group1"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">InclinedToBothHPAndVP</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question="1.Draw the projections of the following solids, situated in their respective positions, 
taking a side of the base 40 mm long or the diameter of the base 50 mm long 
and the axis 65 mm long."
                                    tooltipContent={Solid.SolidQ1}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />

                                <QuestionCard
                                    question=" 2.  A hexagonal pyramid, base on the H.P. and a side of the base parallel to and 25 mm in front of the V.P."
                                    tooltipContent={Solid.SolidQ2}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />


                            </div>
                        </div>
                    )}
                    {(showAllQuestions || expandedGroups["group2"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">InclinedToHPParallelToVP</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question="3. A hexagonal pyramid, base 25 mm side and axis 
50 mm long, has an edge of its base on the ground. Its axis is inclined at 30° to 
the ground and parallel to the V.P. Draw its projections. "
                                    tooltipContent={Solid.SolidQ3}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />




                            </div>
                        </div>
                    )}



                </div>
            </div>
        </div >

    );
};




export default SolidExercise;

