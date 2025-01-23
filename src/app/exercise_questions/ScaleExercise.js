

import React, { useState } from 'react';
import Canvas from '../components/Canvas/canvas';
import GroupNavigation from '../components/GroupNavigation/GroupNavigation';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import { Scale } from './InputHelper';

const ScaleExercise = () => {
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
        const exerciseTitle = " Scale Exercise"

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
        { key: 'group1', name: 'Plain Scale ' },
        { key: 'group2', name: 'Diagonal Scale ' },
        { key: 'group3', name: 'Vernier Scale ' },
        { key: 'group4', name: 'Scale Of Chords' },
       
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
                        "RF" :"",
                        ":":"",
                        "Actual Length":1,
                        "Actual Length Unit":"dm",
                        "Drawing Length":1.5,
                       "Drawing Length Unit" :"cm",
                        "Maximum Length":1,
                        "Maximum Length Unit":"m",
                        "Show Length1": 6,
                        "Show Length1 Unit": "dm",
                        "Show Length2":0,
                        "Show Length2 Unit":"",
                    },
                });
            }
    
            else if (question === "q3") {
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
                        "RF" :"",
                        ":":"",
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
                      "RF" :"",
                        ":":"",
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
    
            else if (question === "q6") {
                setCurrentDrawing({
                    drawingType: "plainScale",
                    inputs: {
                      "RF" :1,
                        ":":40,
                        "Actual Length":"",
                        "Actual Length Unit":"",
                        "Drawing Length":"",
                       "Drawing Length Unit" :"",
                        "Maximum Length":6,
                        "Maximum Length Unit":"m",
                        "Show Length1": 4,
                        "Show Length1 Unit": "m",
                        "Show Length2":7,
                        "Show Length2 Unit":"dcm",
                    },
                });
            }
    
            else if (question === "q7") {
                setCurrentDrawing({
                    drawingType: "plainScale",
                    inputs: {
                      "RF" :"",
                        ":":"",
                        "Actual Length":4,
                        "Actual Length Unit":"m",
                        "Drawing Length":1,
                       "Drawing Length Unit" :"cm",
                        "Maximum Length":50,
                        "Maximum Length Unit":"m",
                        "Show Length1": 44,
                        "Show Length1 Unit": "m",
                        "Show Length2":"",
                        "Show Length2 Unit":"",
                    },
                });
            }
    
            else if (question === "q8") {
                setCurrentDrawing({
                    drawingType: "plainScale",
                    inputs: {
                      "RF" :"",
                        ":":"",
                        "Actual Length":10,
                        "Actual Length Unit":"km",
                        "Drawing Length":2,
                       "Drawing Length Unit" :"cm",
                        "Maximum Length":50,
                        "Maximum Length Unit":"km",
                        "Show Length1": 43,
                        "Show Length1 Unit": "km",
                        "Show Length2":"",
                        "Show Length2 Unit":"",
                    },
                });
            }
            else if (question === "q9") {
                setCurrentDrawing({
                    drawingType: "plainScale",
                    inputs: {
                      "RF" :"1",
                        ":":"400000",
                        "Actual Length":0,
                        "Actual Length Unit":"",
                        "Drawing Length":0,
                       "Drawing Length Unit" :"",
                        "Maximum Length":60,
                        "Maximum Length Unit":"km",
                        "Show Length1": 26,
                        "Show Length1 Unit": "km",
                        "Show Length2":"",
                        "Show Length2 Unit":"",
                    },
                });
            }
            else if (question === "q10") {
                setCurrentDrawing({
                    drawingType: "plainScale",
                    inputs: {
                      "RF" :"1",
                        ":":"250000",
                        "Actual Length":"",
                        "Actual Length Unit":"",
                        "Drawing Length":"",
                       "Drawing Length Unit" :"",
                        "Maximum Length":50,
                        "Maximum Length Unit":"km",
                        "Show Length1": 26,
                        "Show Length1 Unit": "km",
                        "Show Length2":"",
                        "Show Length2 Unit":"",
                    },
                });
            }
    
            else if (question === "q11") {
                setCurrentDrawing({
                    drawingType: "diagonalScale",
                    inputs: {
                      "RF" :1,
                        ":":250,
                        "Actual Length":"",
                        "Actual Length Unit":"",
                        "Drawing Length":"",
                       "Drawing Length Unit" :"",
                        "Maximum Length":30,
                        "Maximum Length Unit":"m",
                        "Show Length1": 26,
                        "Show Length1 Unit": "m",
                        "Show Length2":8,
                        "Show Length2 Unit":"dcm",
                        "Show Length3":"",
                        "Show Length3 Unit":"",
                    },
                });
            }
            else if (question === "q12") {
                setCurrentDrawing({
                    drawingType: "diagonalScale",
                    inputs: {
                      "RF" :"",
                        ":":"",
                        "Actual Length":5,
                        "Actual Length Unit":"m",
                        "Drawing Length":10,
                       "Drawing Length Unit" :"cm",
                        "Maximum Length":6,
                        "Maximum Length Unit":"m",
                        "Show Length1": 3,
                        "Show Length1 Unit": "m",
                        "Show Length2":2,
                        "Show Length2 Unit":"dcm",
                        "Show Length3":4,
                        "Show Length3 Unit":"cm",
                    },
                });
            }
            else if (question === "q13") {
                setCurrentDrawing({
                    drawingType: "diagonalScale",
                    inputs: {
                      "RF" :1,
                        ":":50000,
                        "Actual Length":"",
                        "Actual Length Unit":"",
                        "Drawing Length":"",
                       "Drawing Length Unit" :"",
                        "Maximum Length":6,
                        "Maximum Length Unit":"km",
                        "Show Length1": 5,
                        "Show Length1 Unit": "km",
                        "Show Length2":4,
                        "Show Length2 Unit":"hm",
                        "Show Length3":3,
                        "Show Length3 Unit":"dm",
                    },
                });
            }
            else if (question === "q14") {
                setCurrentDrawing({
                    drawingType: "diagonalScale",
                    inputs: {
                      "RF" :1,
                        ":":32,
                        "Actual Length":"",
                        "Actual Length Unit":"",
                        "Drawing Length":"",
                       "Drawing Length Unit" :"",
                        "Maximum Length":4,
                        "Maximum Length Unit":"yard",
                        "Show Length1": 1,
                        "Show Length1 Unit": "yard",
                        "Show Length2":1,
                        "Show Length2 Unit":"ft",
                        "Show Length3":1,
                        "Show Length3 Unit":"inch",
                    },
                });
            }
            else if (question === "q15") {
                setCurrentDrawing({
                    drawingType: "diagonalScale",
                    inputs: {
                      "RF" :1,
                        ":":50000,
                        "Actual Length":25,
                        "Actual Length Unit":"m",
                        "Drawing Length":1,
                       "Drawing Length Unit" :"cm",
                        "Maximum Length":300,
                        "Maximum Length Unit":"m",
                        "Show Length1": 235,
                        "Show Length1 Unit": "m",
                        "Show Length2":"",
                        "Show Length2 Unit":"",
                        "Show Length3":"",
                        "Show Length3 Unit":"",
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
                    <h1 className="text-4xl font-bold">Scale Exercise</h1>
                    <button
                        className="button-blue"
                        onClick={() => setShowAllQuestions(!showAllQuestions)}
                    >
                        {showAllQuestions ? "Hide All Questions" : "Show All Questions"}
                    </button>
                </div>

               <div className="max-w-4xl mx-auto space-y-6">
              
                                  {/* first scale  */}
                                  {(showAllQuestions || expandedGroups["group1"]) && (
                                      <div className="border p-4 rounded-md shadow-lg space-y-4">
                                          <h3 className="text-2xl font-semibold">Plain Scale</h3>
                                          <div className="space-y-4">
                             <QuestionCard
                                    question=" 1.Construct a scale of 1 : 4 to show centimetres and long
                                                  enough to measure upto 5 decimetres."
                                    tooltipContent={Scale.ScaleQ1}
                                    tooltipId="q1"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q1')} />

                                    {/* Add other questions for the first quadrant */}
                             <QuestionCard
                                    question="  2.Construct a scale of 1.5 cm = 1 dm to read upto 1 metre and show on it a length 
                                                        of 0.6 metre.  "
                                    tooltipContent={Scale.ScaleQ2}
                                    tooltipId="q2"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q2')} />
                             <QuestionCard
                                    question="  3. Draw a scale of 1 :50 showing metres and decimetres, and to measure upto 
                                                         8 metres. "
                                    tooltipContent={Scale.ScaleQ3}
                                    tooltipId="q3"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q3')} />
                            <QuestionCard
                                    question="  4. Construct the following scales and show below each, its R.F. and the units 
                                                         which its divisions represent :Scale of 1 4 = 1 foot, to measure upto 5 feet and showing feet and inches.  "
                                    tooltipContent={Scale.ScaleQ4}
                                    tooltipId="q4"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q4')} />
                             <QuestionCard
                                    question=" 5. Construct a scale of 1 = 1 foot to read upto 6 feet and show on it, 4' - 7
                                                         length.  "
                                    tooltipContent={Scale.ScaleQ5}
                                    tooltipId="q5"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q5')} />
                             <QuestionCard
                                    question="6. Construct a scale of 1:40 to read metres and decimetres and long enough to measure
                                                         up to 6 metres. Mark a distance of 4.7 m on it.  "
                                    tooltipContent={Scale.ScaleQ6}
                                    tooltipId="q6"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q6')} />
                             <QuestionCard
                                    question="7.If 1 centimetre long line on a map represents a real length of 4 metres. Calculate the
                                                         R.F. and draw a plain scale long enough to measure up to 50 metres. Show a distance of 44 m on it. "
                                    tooltipContent={Scale.ScaleQ7}
                                    tooltipId="q7"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q7')} />
                            <QuestionCard
                                    question="8.A rectangular plot of 100 square kilometres is represented on a certain map by a similar rectangular area of 4 square centimetres. 
                        Draw a scale to read 50 kilometres and mark a distance of 43 kilometres on it. "
                                    tooltipContent={Scale.ScaleQ8}
                                    tooltipId="q8"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q8')} />
                            <QuestionCard
                                    question=" 9.The distance between Hyderabad and Mumbai is 1200 km. A altitude train covers this distance in 20 hours. 
                                            R.F. of the scale is 1/400,000. Draw a plain scale to measure time up to a single minute. 
                                           Show the distance covered by the train in 26 minuts."
 
                                    tooltipContent={Scale.ScaleQ9}
                                    tooltipId="q9"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q9')} />
                            <QuestionCard
                                    question=" 10.The distance between Hyderabad and Mumbai is 1200 km. A altitude train covers this distance in 20 hours. 
                        R.F. of the scale is 1/400,000. Draw a plain scale to measure time up to a single minute. 
                        Show the distance covered by the train in 26 minuts."

 
                                    tooltipContent={Scale.ScaleQ10}
                                    tooltipId="q10"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q10')} />
                                  </div>
                                      </div>
                                  )}
              
                              {/* Second Quadrant */}
                              {(showAllQuestions || expandedGroups["group2"]) && (
                                  <div className="border p-4 rounded-md shadow-lg space-y-4">
                                      <h3 className="text-2xl font-semibold">Diagonal Scale</h3>
                                      <div className="space-y-4">
                            <QuestionCard
                                    question=" 11.Construct a scale of R.F. = 1 : 250 to show decimetre and enough to measure upto 30 m. 
                                              Mark a distance of 26.8 m on it."

 
                                    tooltipContent={Scale.ScaleQ11}
                                    tooltipId="q11"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q11')} />
                              {/* Add other questions for the second quadrant */}
                              <QuestionCard
                                    question=" 12.On a building plan, a line 10 cm long represents a distance of 5 m.
                         Construct a diagonal scale for the plan to read upto 6 m, showing metres, decimetres and centimetres.
                          Indicate on your scale the length 3.24 m. "

 
                                    tooltipContent={Scale.ScaleQ12}
                                    tooltipId="q12"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q12')} />
                            <QuestionCard
                                    question="13.Construct a diagonal scale to measure kilometres, hectometres ind decimetre to a scale of R.F. = 1/50,000
                         and measure on it a length of 6 representintm, 4 hectometres and 3 decimetres."

 
                                    tooltipContent={Scale.ScaleQ13}
                                    tooltipId="q13"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q13')} />
                            <QuestionCard
                                    question=" 14.Construct a diagonal scale of R.F.=1/32 showing yards,
                                              feet and inches and to measure upto 4 yards.."

 
                                    tooltipContent={Scale.ScaleQ14}
                                    tooltipId="q14"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q14')} />
                            <QuestionCard
                                    question="15.The area of a field is 50,000 sq m. The length and the  breadth of the field, 
                           on the map is 10 cm and 8 cm respectively. Construct a diagonal scale which can
                         read upto one metre. Mark the length of 235 metre on the scale. What is the R.F. of the scale?"

 
                                    tooltipContent={Scale.ScaleQ15}
                                    tooltipId="q15"
                                    activeTooltip={activeTooltip}
                                    toggleTooltip={toggleTooltip}
                                    onDrawClick={() => handleClick('q15')} />
                              </div>
                                  </div>
                              )}
              
                              {/* Third Quadrant */}
                              {(showAllQuestions || expandedGroups["group3"]) && (
                                  <div className="border p-4 rounded-md shadow-lg space-y-4">
                                      <h3 className="text-2xl font-semibold">Vernier Scale</h3>
                                      <div className="space-y-4">
                                          {/* Add questions for the third quadrant */}
              
              
                                         
                                      </div>
                                  </div>
                              )}

                              
                              {/* Third Quadrant */}
                              {(showAllQuestions || expandedGroups["group4"]) && (
                                  <div className="border p-4 rounded-md shadow-lg space-y-4">
                                      <h3 className="text-2xl font-semibold">Scale Of Chords</h3>
                                      <div className="space-y-4">
                                          {/* Add questions for the third quadrant */}
              
                                        
              
                                         
                                      </div>
                                  </div>
                              )}
              
              
                             
                          </div>
                      </div>
                      </div >
                  );
              };
              
export default ScaleExercise;