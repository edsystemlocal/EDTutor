
import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { Plane } from './InputHelper';

const PlaneExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({
        group1: false, 
        group2: false,
        group3: false,  // New group for third quadrant
        group4: false,
        group5: false,
        group6: false,
          
    });

    const [activeQuestion, setActiveQuestion] = useState(null);
    const [showAllQuestions, setShowAllQuestions] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null);

    const toggleGroup = (groupKey) => {
        setExpandedGroups((prevState) => ({
            ...prevState,
            [groupKey]: !prevState[groupKey],
        }));
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
    const exerciseTitle = " Plane Exercise"


    if (currentDrawing) {
        return (
            <Canvas
                inputs={currentDrawing.inputs}
                drawingType={currentDrawing.drawingType}
            />
        );
    }

    const groups = [
        { key: 'group1', name: ' Haxagon Plane' },
        { key: 'group2', name: ' Pentagon Plane ' },
        { key: 'group3', name: ' Square Plane' },
        { key: 'group4', name: ' Circle Plane' },
        { key: 'group5', name: ' Triangle Plane '},
        { key: 'group6', name: ' Semi Circle Plane'},
    ];


    const handleClick = (question) => {
         // Toggle the visibility of the question
         if (activeQuestion === question) {
            setActiveQuestion(null); // Hide the question if it's already active
        } else {
            setActiveQuestion(question); // Show the new question
        }

        // Set `currentDrawing` based on the clicked question
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

    
   return (
        <div className="container flex">
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
                <h1 className="text-4xl font-bold">{exerciseTitle}</h1>                    
                    <button
                        className="button-blue"
                        onClick={() => setShowAllQuestions(!showAllQuestions)}
                    >
                        {showAllQuestions ? "Hide All Questions" : "Show All Questions"}
                    </button>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* First plane */}
                    {(showAllQuestions || expandedGroups["group1"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Hexagone Plane</h3>
                            <div className="space-y-4">

                            <QuestionCard
                                    question="1. A regular hexagon of 40 mm side has a corner in the H.P. Its surface is 
                          inclined at 45° to the H.P. and the top view of the diagonal through the 
                          corner which is in the H.P. makes an angle of 60° with the V.P. Draw its 
                        projections ."
                                    tooltipContent={Plane.PlaneQ1}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />
                             
                            {/* Add other questions for the first quadrant */}
                            <QuestionCard
                                    question="2. Draw the projections of a regular hexagon of 
                            25 mm side, having one of its sides in the H.P. and inclined at 60° to the V.P., 
                            and its surface making an angle of 45° with the H.P."
                                    tooltipContent={Plane.PlaneQ2}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />
                             </div>
                        </div>
                    )}

                {/* Second plane*/}
                {(showAllQuestions || expandedGroups["group2"]) && (
                    <div className="border p-4 rounded-md shadow-lg space-y-4">
                        <h3 className="text-2xl font-semibold">Pentagon Plane </h3>
                        <div className="space-y-4">
                        <QuestionCard
                                    question=" 3. Draw the projections of a regular pentagon of 40 mm side, having its surface 
                           inclined at 30° to the H.P. and a side parallel to the H.P. and inclined at an 
                           angle of 60° to the V.P. "
                                    tooltipContent={Plane.PlaneQ3}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />
                        <QuestionCard
                                    question=" 4. Draw the projections of a pentagonal sheet of 26mm side having its surface inclined at 30° to the V.P.
                                    its one side is parallel to the V.P. and inclined at 45° to H.P."
                                    tooltipContent={Plane.PlaneQ4}
                                    tooltipId="q5"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q5')} />
                                    
                                    </div>
                    </div>
                )}

                {/* Third Quadrant */}
                {(showAllQuestions || expandedGroups["group3"]) && (
                    <div className="border p-4 rounded-md shadow-lg space-y-4">
                        <h3 className="text-2xl font-semibold">Square Plane</h3>
                        <div className="space-y-4">
                        <QuestionCard
                                    question=" 5. A square ABCO of 50 mm side has its corner A in 
                            the H.P., its diagonal AC inclined at 30° to the H.P. and the diagonal BO inclined 
                            at 45° to the V.P. and parallel to the H.P. Draw its projections.."
                                    tooltipContent={Plane.PlaneQ5}
                                    tooltipId="q4"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q4')} />
                             </div>
                    </div>
                )}

                {/* Fourth Quadrant */}
                {(showAllQuestions || expandedGroups["group4"]) && (
                    <div className="border p-4 rounded-md shadow-lg space-y-4">
                        <h3 className="text-2xl font-semibold"> Circle Plane</h3>
                        <div className="space-y-4">
                        <QuestionCard
                                    question=" 6. Draw the projections of a circle of 50 mm diamete1~having its plane vertical and inclined at 30° to the V.P. 
                                           Its centre is 30 mm above the H.P. and 20 mm in front of the V.P. Show also its traces."
                                    tooltipContent={Plane.PlaneQ6}
                                    tooltipId="q6"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q6')} />
                         <QuestionCard
                                    question=" 7a.  Draw the projections of a circle of 50 mm diameter resting in the H.P. on a point A on the circumference,
                                               its plane inclined at 45° to the H.P. and
                                               (a) the top view of the diameter AB making 30° angle with the V.P.;
                                               (b) the diameter AB making 30° angle with the V. P."
                                    tooltipContent={Plane.PlaneQ7}
                                    tooltipId="q7a"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q7a')} />
                            </div>
                    </div>
                )}

                {(showAllQuestions || expandedGroups["group5"]) && (
                    <div className="border p-4 rounded-md shadow-lg space-y-4">
                        <h3 className="text-2xl font-semibold"> Triangle Plane </h3>
                        <div className="space-y-4">
                            {/* Add questions for the fourth quadrant */}

                          
                        </div>
                    </div>
                )}

                {(showAllQuestions || expandedGroups["group6"]) && (
                    <div className="border p-4 rounded-md shadow-lg space-y-4">
                        <h3 className="text-2xl font-semibold">Semi Circle Plane</h3>
                        <div className="space-y-4">
                            {/* Add questions for the fourth quadrant */}

                            
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div >
    );
};



export default PlaneExercise;