



import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { points } from './InputHelper';

const PointExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({
        group1: false,
        group2: false,
        group3: false,
        group4: false,
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

    const exerciseTitle = "Point Exercise";

    if (currentDrawing) {
        return (
            <Canvas
                inputs={currentDrawing.inputs}
                drawingType={currentDrawing.drawingType}
            />
        );
    }

    const groups = [
        { key: 'group1', name: 'First Quadrant' },
        { key: 'group2', name: 'Second Quadrant' },
        { key: 'group3', name: 'Third Quadrant' },
        { key: 'group4', name: 'Fourth Quadrant' },
    ];

    const handleClick = (question) => {
        if (activeQuestion === question) {
            setActiveQuestion(null); // Hide the question if it's already active
        } else {
            setActiveQuestion(question); // Show the new question
        }

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
            });
        }
    };

    return (
        <div className="container flex text-gray-700">
            <GroupNavigation
                groups={groups}
                expandedGroups={expandedGroups}
                toggleGroup={toggleGroup}
                exerciseTitle={exerciseTitle}
            />
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold">Point Exercise</h1>
                    <button
                        className="button-blue"
                        onClick={handleShowAllQuestionsToggle}
                    >
                        {showAllQuestions ? 'Hide All Questions' : 'Show All Questions'}
                    </button>
                </div>
                <div className="max-w-4xl space-y-6">
                    {/* First Quadrant */}
                    {(showAllQuestions || expandedGroups['group1']) && (

                        <div className="border p-4  rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">First Quadrant</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question="2. Draw the projections of the following points on the same ground line, keeping the projectors 25 mm apart. B, 40 mm above the H.P. and 25 mm in front of the V.P."
                                    tooltipContent={points.pointQ1}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />
                                <QuestionCard
                                    question="7. Draw the projections of the following points on the same ground line, keeping the projectors 25 mm apart. G, in both the H.P. and the V.P."
                                    tooltipContent={points.pointQ2}
                                    tooltipId="q7"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q7')} />
                                <QuestionCard
                                    question="8. A point P is 15 mm above the H.P. and 20 mm in front of the V.P."
                                    tooltipContent={points.pointQ3}
                                    tooltipId="q8"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q8')} />
                            </div>
                        </div>
                    )}

                    {/* Second Quadrant */}
                    {(showAllQuestions || expandedGroups['group2']) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Second Quadrant</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question="3. Draw the projections of the following points on the same ground line, keeping the projectors 25 mm apart. C, in the V.P. and 40 mm above the H.P."
                                    tooltipContent={points.pointQ4}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />
                                <QuestionCard
                                    question="5. Draw the projections of the following points on the same ground line, keeping the projectors 25 mm apart. E, 15 mm above the H.P. and 50 mm behind the V.P."
                                    tooltipContent={points.pointQ5}
                                    tooltipId="q5"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q5')} />
                            </div>
                        </div>
                    )}

                    {/* third Quadrant */}
                    {(showAllQuestions || expandedGroups['group3']) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Third Quadrant</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question="  1. Draw the projections of the following points on the same ground line, keeping
                                    the projectors 25 mm apart. A, in the H.P. and 20 mm behind the V.P."
                                    tooltipContent={points.pointQ6}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />
                                <QuestionCard
                                    question="4. Draw the projections of the following points on the same ground line, keeping
                                    the projectors 25 mm apart.
                                    D,25 mm below the H.P. and 25 mm behind the V.P."
                                    tooltipContent={points.pointQ7}
                                    tooltipId="q4"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q4')} />
                                <QuestionCard
                                    question=" 9.  point Q is 25 mm behind the V.P. and 40 mm below the H.P."
                                    tooltipContent={points.pointQ8}
                                    tooltipId="q9"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q9')} />
                            </div>
                        </div>
                    )}

 {/* Fourth Quadrant */}
 {(showAllQuestions || expandedGroups['group4']) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Fourth Quadrant</h3>
                            <div className="space-y-4">
                                <QuestionCard
                                    question=" 6. Draw the projections of the following points on the same ground line, keeping
                                    the projectors 25 mm apart.
                                    F, 40 mm below the H.P. and 25 mm in front of the V.P."
                                    tooltipContent={points.pointQ9}
                                    tooltipId="q6"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q6')} />
                               
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default PointExercise;

