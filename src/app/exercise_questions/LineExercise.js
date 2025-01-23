
import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { line } from './InputHelper';

const LineExercise = () => {
    const [currentDrawing, setCurrentDrawing] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({
        group1: false,
        group2: false,
        group3: false,
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
        const exerciseTitle = " line Exercise"

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
        { key: 'group1', name: 'Parallel To Both' },
        { key: 'group2', name: 'ParallelToHP And InclinationToVP' },
        { key: 'group3', name: 'Perpendicular To HP' },
        { key: 'group4', name: 'Perpendicular To VP' },
        { key: 'group5', name: 'ParallelToVP And InclinationToHP' },
        { key: 'group6', name: 'Inclination To Both' },
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
                drawingType: "parallelToBoth",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 25,
                    "First Point Above of HP": 25,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q2") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 0,
                    "First Point Above of HP": 30,
                    "Inclination To VP": 0,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q3") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 40,
                    "First Point Above of HP": 0,
                    "Inclination To HP": 0,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q4") {
            setCurrentDrawing({
                drawingType: "perpendicularToHP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 20,
                    "First Point Above of HP": 15,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q5") {
            setCurrentDrawing({
                drawingType: "perpendicularToVP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 0,
                    "First Point Above of HP": 25,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"

                },

            });
        }

        else if (question === "q6") {
            setCurrentDrawing({
                drawingType: "perpendicularToHP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 0,
                    "First Point Above of HP": 0,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q7") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 0,
                    "First Point Above of HP": 0,
                    "Inclination To VP": 45,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },

            });
        }

        else if (question === "q8") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 30,
                    "First Point Above of HP": 20,
                    "Inclination To HP": 30,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }
        else if (question === "q9") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    "Line Length": 75,
                    "First Point Front of VP": 15,
                    "First Point Above of HP": 25,
                    "Inclination To VP": 60,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q10") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    "Line Length": 100,
                    "First Point Front of VP": 25,
                    "First Point Above of HP": 40,
                    "Second Point Front of VP": 50,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q11") {
            setCurrentDrawing({
                drawingType: "parallelToVPAndInclinationToHP",
                inputs: {
                    "Line Length": 90,
                    "First Point Front of VP": 25,
                    "First Point Above of HP": 0,
                    "Second Point Above of HP": 50,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },
            });
        }

        else if (question === "q12") {
            setCurrentDrawing({
                drawingType: "parallelToHPAndInclinationToVP",
                inputs: {
                    "Line Length": 65,
                    "First Point Front of VP": 30,
                    "First Point Above of HP": 40,
                    "Inclination To VP": 30,
                    "First Point HP Position": "above",
                    "First Point VP Position": "front"
                },

            });
        }

        else if (question === "q13") {
            //Problem 10-17
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 90,
                    firstpointfrontOfVPLength: 20,
                    firstPointAboveHPLength: 12,
                    InclinationToHP: 30,
                    frontViewLength: 65,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },
            });
        }

        else if (question === "q14") {
            //Problem 10-14
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 90,
                    firstpointfrontOfVPLength: 12,
                    firstPointAboveHPLength: 20,
                    InclinationToHP: 45,
                    TopviewAngle: 60,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },

            });
        }

        else if (question === "q15") {
            //Problem 10-11
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 75,
                    firstpointfrontOfVPLength: 12,
                    firstPointAboveHPLength: 10,
                    frontViewLength: 50,
                    topViewLength: 65,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },
            });
        }

        else if (question === "q16") {
            //Problem 10-9
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 75,
                    firstpointfrontOfVPLength: 0,
                    firstPointAboveHPLength: 0,
                    InclinationToVP: 60,
                    InclinationToHP: 30,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },
            });
        }
        else if (question === "q17") {
            //Problem 10-8
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 50,
                    firstpointfrontOfVPLength: 0,
                    firstPointAboveHPLength: 0,
                    InclinationToVP: 45,
                    InclinationToHP: 30,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },
            });
        }
        else if (question === "q18") {
            //Problem 10-8
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 65,
                    firstpointfrontOfVPLength: 25,
                    firstPointAboveHPLength: 20,
                    secondpointAboveHPLength: 40,
                    secondpointFrontOfVPLength: 65,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },

            });
        }
        else if (question === "q19") {
            //Problem 10-8
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 70,
                    firstpointfrontOfVPLength: 50,
                    firstPointAboveHPLength: 50,
                    secondpointAboveHPLength: 25,
                    secondpointFrontOfVPLength: 25,
                    firstpointPositionHP: "above",
                    firstpointPositionVP: "front"
                },

            });
        } 
        else if (question === "q20") {
            //Problem 10-17
            setCurrentDrawing({
                drawingType: "inclinationToBoth",
                inputs: {
                    LineLength: 100,
                    firstpointfrontOfVPLength: -1,
                    firstpointPositionHP: "above",
                    firstPointAboveHPLength: -1,
                    firstpointPositionVP: "front",
                    InclinationToHP: 30,
                    InclinationToVP: 45,
                    MidpointHPLength: 20,
                    midpointPositionHP: "above",
                    MidpointVPLength: -1,
                    midpointPositionVP: "front"
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
                <h1 className="text-4xl font-bold">{exerciseTitle}</h1>                    <button
                        className="button-blue"
                        onClick={() => setShowAllQuestions(!showAllQuestions)}
                    >
                        {showAllQuestions ? "Hide All Questions" : "Show All Questions"}
                    </button>
                </div>
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* First line */}
                    {(showAllQuestions || expandedGroups["group1"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold"> Parallel To Both</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question="1. Draw the projections of a 75 mm long straight line, in the following positions where Line
                                        Parallel to both the H.P. and the V.P. and 25 mm from each."
                                    tooltipContent={line.lineQ1}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />



                                

                                {/* Add other questions for the first quadrant */}

                            </div>
                        </div>
                    )}
                     {/* Second line */}
                    {(showAllQuestions || expandedGroups["group2"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">ParallelToHP And InclinationToVP</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question="2. Draw the projections of a 75 mm long straight line, in the following positions where Line
                                        Parallel to and 30 mm above the H.P. and in the V.P."
                                    tooltipContent={line.lineQ2}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />

                            <QuestionCard
                                    question="3. Draw the projections of a 75 mm long straight line, in the following positions where line
                                        Inclined at 45° to the V.P., in the H.P. and its one end in the V.P."
                                    tooltipContent={line.lineQ3}
                                    tooltipId="q7"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q7')}
                                     />
                            <QuestionCard
                                    question="4. Draw the projections of a 75 mm long straight line, in the following positions where line
                                        Inclined at 60° to the V.P. and its one end 15 mm in front of it; parallel to and 25 mm above the H.P."
                                    tooltipContent={line.lineQ4}
                                    tooltipId="q9"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q9')}
                                     />
                            <QuestionCard
                                    question="5. A 100 mm long line is parallel to and 40 mm above the H.P. Its two ends are
                                        25 mm and 50 mm in front of the V.P. respectively. Draw its projections and
                                        find its inclination with the V.P."
                                    tooltipContent={line.lineQ5}
                                    tooltipId="q10"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q10')}
                                     />
                             <QuestionCard
                                    question="6. The front view of a line, inclined at 30° to the V.P is 65 mm long. Draw the
                                        projections of the line, when it is parallel to and 40 mm above the H.P., its
                                        one end being 30 mm in front of the V.P."
                                    tooltipContent={line.lineQ6}
                                    tooltipId="q12"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q12')}
                                     />
                                     
                            </div>
                        </div>
                    )}
                     {/* Third line */}
                    {(showAllQuestions || expandedGroups["group3"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Perpendicular To HP</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question="7. Draw the projections of a 75 mm long straight line, in the following positions where line Perpendicular to the H.P., 20 mm in front of the V.P. and its one end
                                        15 mm above the H.P."
                                    tooltipContent={line.lineQ7}
                                    tooltipId="q4"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q4')} />
                            <QuestionCard
                                    question=" 8.  Draw the projections of a 75 mm long straight line, in the following positions where line
                                        Perpendicular to the H.P., in the V.P. and its one end in the H.P.."
                                    tooltipContent={line.lineQ8}
                                    tooltipId="q6"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q6')} />
                                    
                                    </div>
                        </div>
                    )}

                    {/* Fourth line */}
                    {(showAllQuestions || expandedGroups["group4"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Perpendicular To VP</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question="9 .Draw the projections of a 75 mm long straight line, in the following positions where line
                                        Perpendicular to the V.P., 25 mm above the H.P. and its one end in
                                        the V.P."
                                    tooltipContent={line.lineQ9}
                                    tooltipId="q5"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q5')} />
                             </div>
                        </div>
                    )}
                    {/* fifth line */}
                    {(showAllQuestions || expandedGroups["group5"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">ParallelToVP And InclinationToHP</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question=" 10. Draw the projections of a 75 mm long straight line, in the following positions where Line
                                        Parallel to and 40 mm in front of the V.P. and in the H.P."
                                    tooltipContent={line.lineQ10}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />
                            <QuestionCard
                                    question="  11.  Draw the projections of a 75 mm long straight line, in the following positions where line
                                        Inclined at 30° to the H.P. and its one end 20 mm above it; parallel to and 30 mm in front of the V.P."
                                    tooltipContent={line.lineQ11}
                                    tooltipId="q8"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q8')} />
                            <QuestionCard
                                    question="  12.   A 90 mm long line is parallel to and 25 mm in front of the V.P. Its one end is
                                        in the H.P. while the other is 50 mm above the H.P. Draw its projections
                                        and find its inclination with the H.P."
                                    tooltipContent={line.lineQ12}
                                    tooltipId="q11"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q11')} />
                               </div>
                        </div>
                    )}
                    {/* six line */}
                      
                    {(showAllQuestions || expandedGroups["group6"]) && (
                        <div className="border p-4 rounded-md shadow-lg space-y-4">
                            <h3 className="text-2xl font-semibold">Inclination To Both</h3>
                            <div className="space-y-4">
                            <QuestionCard
                                    question="13. A line AB, 90 mm long is inclined at 30° to the H.P. Its end A is 12 mm above the H.P. and 20 mm in front of the V.P. Its front view measures 65 mm.
                                        Draw the top view of AB and determine its inclination with the V.P."
                                    tooltipContent={line.lineQ13}
                                    tooltipId="q13"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q13')} />
                             <QuestionCard
                                    question=" 14. A line AB, 90 mm long, is inclined at 45° to the
                                        H.P. and its top view makes an angle of 60° with the V.P. The end A is in the H.P.
                                        and 12 mm in front of the V.P. Draw its front view and find its true inclination with
                                        the V.P."
                                    tooltipContent={line.lineQ14}
                                    tooltipId="q14"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q14')} />
                             <QuestionCard
                                    question=" 15. The top view of a 75 mm long line AB measures 65 mrn, while the
                                        length of its front view is 50 mm. Its one end A
                                        is in the H.P. and 12 mm in front of the V.P.
                                        Draw the projections of AB and determine its
                                        inclinations with the H.P. and the V.P."
                                    tooltipContent={line.lineQ15}
                                    tooltipId="q15"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q15')} />
                             <QuestionCard
                                    question="  16. A line PQ 75 mm long, has its end P in the V.P.
                                        and the end Q in the H.P. The line is inclined at 30° to the H.P. and at 60° to
                                        the V.P. Draw its projections.."
                                    tooltipContent={line.lineQ16}
                                    tooltipId="q16"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q16')} />
                             <QuestionCard
                                    question="17. A line 50 mm long, has its end A in both the both
                                        H.P. and the V.P. It is inclined at 30' to the H.P. and at 45 to the V.p Draw its
                                        projections."
                                    tooltipContent={line.lineQ17}
                                    tooltipId="q17"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q17')} />
                            <QuestionCard
                                    question="18. A line AB, 65 mm long has its end A 20 mm
                                        above the H.P. and 25 mm in front of the V.P. The end B is 40 mm above the H.P.
                                        and 65 mm in front of the V.P. Draw the projections of AB and show its inclinations
                                        with the H.P. and the V.P."
                                    tooltipContent={line.lineQ18}
                                    tooltipId="q18"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q18')} />
                             <QuestionCard
                                    question=" 19. A line AB, 70 mm long has its end A 50 mm
                                        above the H.P. and 50 mm in front of the V.P. The end B is 25 mm above the H.P.
                                        and 25 mm in front of the V.P. Draw the projections of AB and show its inclinations
                                        with the H.P. and the V.P."
                                    tooltipContent={line.lineQ19}
                                    tooltipId="q19"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q19')} />
                            <QuestionCard
                                    question=" 20. A line PQ
                                        100 mm long, is inclined at 30° to the H.P.
                                        and at 45° to the V.P. Its mid-point is in the
                                        V.P. and 20 mm above the H.P. Draw its
                                        projections, if its end P is in the third quadrant
                                        and Q in the first quadrant."
                                    tooltipContent={line.lineQ20}
                                    tooltipId="q20"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q20')} />

                               </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default LineExercise;
