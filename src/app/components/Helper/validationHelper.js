function validateField(value, fieldName, maxLimit, warnings) {
 if (isNaN(value)) {
    warnings.push(`Please provide a numeric value for '${fieldName}'.`);
  } else if (Number(value) < 0) {
    warnings.push(`Please provide a non-negative value for '${fieldName}'.`);
  } else if (String(value).includes(".")) { // New condition to catch decimal values like 1.0
    warnings.push(`Please provide an integer value for '${fieldName}' (no decimals allowed).`);
  } else if (Number(value) > maxLimit) {
    warnings.push(`Please provide a value for '${fieldName}' less than ${maxLimit}.`);
  }
}


// ======================================================================================================

export default function PointValidation(inputs, setWarningMessage, setIsCanvas) {
  console.log("inputs: ", inputs);

  // Correct destructuring based on the `inputs` object
  let {
    "First Point Of HP": firstPointAboveHP,
    "First Point Position HP": firstpointPositionHP,
    "First Point Of VP": firstPointFrontOfVP,
    "First Point Position VP": firstpointPositionVP,
  } = inputs;

  // Initialize an array to store warning messages
  let warnings = [];

  // Call individual validation functions
  validateField(firstPointAboveHP,"First Point Of HP",500, warnings);
  validateField(firstPointFrontOfVP, "First Point Of VP", 500 ,warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear any existing warnings and proceed to Canvas
  setWarningMessage([]);
  setIsCanvas(true);
}

// =======================================================================================================

export const bisectValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { Length } = inputs; // Destructure Length from inputs
  const warnings = [];

  validateField(Length,"Length",400, warnings);
  
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};


// =======================================================================================================
export const scaleValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
   "RF": RF1,
    ":": RF2,
    "Actual Length": RealLength,
    "Actual Length Unit": RealUnit,
    "Drawing Length": DrawingLength,
    "Drawing Length Unit": DrawingUnit,
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
  } = inputs;
  const warnings = [];

  validateField(RF1,"RF",500, warnings);
  validateField(DrawingLength,"Drawing Length",500, warnings);
  validateField(RealLength,"Actual Length",500, warnings);
  validateField(ScaleMaximumLength,"Maximum Length",500, warnings);
  validateField(ScaleShowLength1,"Show Length1",500, warnings);
  validateField(ScaleShowLength2,"Show Length2",500, warnings);

   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const dScaleValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Maximum Length": ScaleMaximumLength,
    "Maximum Length Unit": ScaleMaximumLengthUnit,
    "Show Length1": ScaleShowLength1,
    "Show Length1 Unit": ScaleShowUnit1,
    "Show Length2": ScaleShowLength2,
    "Show Length2 Unit": ScaleShowUnit2,
    "Show Length3": ScaleShowLength3,
    "Show Length3 Unit": ScaleShowUnit3,
    "Scale RF": ScaleRF,
  } = inputs;
  const warnings = [];

  validateField(ScaleRF,"RF [1]",500, warnings);
  validateField(ScaleMaximumLength,"Maximum Length",500, warnings);
  validateField(ScaleShowLength1,"Show Length1",500, warnings);
  validateField(ScaleShowLength2,"Show Length2",500, warnings);
  validateField(ScaleShowLength3,"Show Length3",500, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const angleInScaleOfChordsValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    Angle
  } = inputs;
  const warnings = [];

  validateField(Angle,"Angle",360, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const ParalleltobothValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "First Point Position HP ": firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
  } = inputs;
  const warnings = [];

  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const PerpendiculartoHpValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "First Point Position HP ": firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
  } = inputs;
  const warnings = [];

  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const PerpendiculartoVpValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "First Point Position HP ": firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
  } = inputs;
  const warnings = [];

  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const ParalleltohpandinclinationtovpValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
  
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "Second Point Front of VP": secondpointFrontOfVPLength,
    "Inclination To VP": InclinationToVP,
    "First Point Position HP ":firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
    "Second point Position HP": secondpointPositionHP,
    "Second point Position VP": secondpointPositionVP,

  } = inputs;
  const warnings = [];

  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
  // validateField(secondpointFrontOfVPLength,"Second Point of VP Length",500, warnings);
  // validateField(InclinationToVP,"Inclination To VP",360, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const ParalleltovpandinclinationtohpValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Line Length": LineLength,
    "First Point Above of HP": firstPointAboveHPLength,
    "First Point Front of VP": firstpointfrontOfVPLength,
    "Second Point Above of HP": secondpointAboveHPLength,
    "Inclination To HP": InclinationToHP,
    "First Point Position HP ":firstpointPositionHP,
    "First point Position VP": firstpointPositionVP,
    "Second point Position HP": secondpointPositionHP,
    "Second point Position VP": secondpointPositionVP,

  } = inputs;
  const warnings = [];
  
  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
  // validateField(secondpointAboveHPLength,"Second Point of HP Length",500, warnings);
  // validateField(InclinationToHP,"Inclination To HP",360, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const InclinationtobothValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    LineLength,
    firstPointAboveHPLength,
    firstpointPositionHP,
    firstpointfrontOfVPLength,
    firstpointPositionVP,
    secondpointAboveHPLength,
    secondpointPositionHP,
    secondpointFrontOfVPLength,
    secondpointPositionVP,
    InclinationToVP,
    InclinationToHP,
    topViewLength,
    frontViewLength,
    TopviewAngle,
    FrontviewAngle,

  } = inputs;
  const warnings = [];
    
  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
  // validateField(secondpointAboveHPLength,"Second Point of HP Length",500, warnings);
  // validateField(secondpointFrontOfVPLength,"Second Point of VP Length",500, warnings);
  // validateField(InclinationToVP,"Inclination To VP",360, warnings);
  // validateField(InclinationToHP,"Inclination To HP",360, warnings);
  // validateField(topViewLength,"Top View Length",500, warnings);
  // validateField(frontViewLength,"Front View Length",500, warnings);
  // validateField(TopviewAngle,"Top View Angle",360, warnings);
  // validateField(FrontviewAngle,"Front View Angle",360, warnings);

  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const MidpointValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    LineLength,
    firstPointAboveHPLength,
    firstpointPositionHP,
    firstpointfrontOfVPLength,
    firstpointPositionVP,
    secondpointAboveHPLength,
    secondpointPositionHP,
    secondpointFrontOfVPLength,
    secondpointPositionVP,
    InclinationToVP,
    InclinationToHP,
    topViewLength,
    frontViewLength,
    TopviewAngle,
    FrontviewAngle,
    MidpointHPLength,
    midpointPositionHP,
    MidpointVPLength,
    midpointPositionVP,

  } = inputs;
  const warnings = [];
  
  // validateField(LineLength,"Line Length",500, warnings);
  // validateField(firstPointAboveHPLength,"First Point of HP Length",500, warnings);
  // validateField(firstpointfrontOfVPLength,"First Point of VP Length",500, warnings);
  // validateField(secondpointAboveHPLength,"Second Point of HP Length",500, warnings);
  // validateField(secondpointFrontOfVPLength,"Second Point of VP Length",500, warnings);
  // validateField(InclinationToVP,"Inclination To VP",360, warnings);
  // validateField(InclinationToHP,"Inclination To HP",360, warnings);
  // validateField(topViewLength,"Top View Length",500, warnings);
  // validateField(frontViewLength,"Front View Length",500, warnings);
  // validateField(TopviewAngle,"Top View Angle",360, warnings);
  // validateField(FrontviewAngle,"Front View Angle",360, warnings);
  // validateField(MidpointHPLength,"Mid Point of HP Length",360, warnings);
  // validateField(MidpointVPLength,"Mid Point of VP Length",360, warnings);


   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const PlaneValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Plane Type": PlaneType,
    "Side Length": PlaneSideLength,
    "Plane Position": PlanePosition1,
    "Plane in/parallel Postion": PlanePosition2,
    "Plane HP/VP Postion": PlanePosition3,
    "Incline With HP": PlaneHPAngle,
    "Inclined With VP": PlaneVPAngle

  } = inputs;
  const warnings = [];

  //validateField(PlaneType,"Plane Type",500, warnings);
  validateField(PlaneSideLength,"Side Length",500, warnings);
  validateField(PlaneHPAngle,"Incline With HP",360, warnings);
  validateField(PlaneVPAngle,"Inclined With VP",360, warnings);

   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const GeneralMethodValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Distance From focus To Directrix": distanceofthefocusfromthedirectrix,

  } = inputs;
  const warnings = [];
  validateField(distanceofthefocusfromthedirectrix,"Distance From focus To Directrix",100, warnings);

    // If there are any warnings, set the warning message and return
    if (warnings.length > 0) {
      setWarningMessage(warnings);
      return;
    }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const EllipseConcentricCircleMethodValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
   "Major Axis": majorAxis,
    "Minor Axis": minorAxis,

  } = inputs;
  const warnings = [];
  validateField(majorAxis,"Major Axis",500, warnings);
  validateField(minorAxis,"Minor Axis",300, warnings);

   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const ParallelogramValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Base": Base,
    "Height": Height,
    "Angle (Degrees)": angleInDegrees,

  } = inputs;
  const warnings = [];
  validateField(Base,"Base",200, warnings);
  validateField(Height,"Height",200, warnings);
  validateField(angleInDegrees,"Angle (Degrees)",40, warnings);
   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const TangentValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Base": Base,
    "Height": Height,

  } = inputs;
  const warnings = [];
  validateField(Base,"Base",500, warnings);
  validateField(Height,"Height",300, warnings);
   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const CycloidValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Diameter": Diameter


  } = inputs;
  const warnings = [];

  validateField(Diameter,"Diameter",500, warnings);

   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

export const EpicycloidValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Diameter": Diameter,
    "Directing Circle": DirectingCircle

  } = inputs;
  const warnings = [];

  validateField(Diameter,"Diameter",500, warnings);
  validateField(DirectingCircle,"Directing Circle",500, warnings);


   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const InvoluteValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Diameter": Diameter,
  } = inputs;
  const warnings = [];

  validateField(Diameter,"Diameter",300, warnings);
   
  // If there are any warnings, set the warning message and return
  if (warnings.length > 0) {
    setWarningMessage(warnings);
    return;
  }

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================