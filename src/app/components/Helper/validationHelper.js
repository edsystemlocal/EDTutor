// Validation function for "First Point Above HP"
function validateFirstPointAboveHP(firstPointAboveHP, warnings) {
  if (!firstPointAboveHP || firstPointAboveHP.trim() === "") {
    warnings.push("Please provide a value for 'First Point Above HP'.");
  }
}

// Validation function for "First Point Front of VP"
function validateFirstPointFrontOfVP(firstPointFrontOfVP, warnings) {
  if (!firstPointFrontOfVP || firstPointFrontOfVP.trim() === "") {
    warnings.push("Please provide a value for 'First Point Front of VP'.");
  }
  if (firstPointFrontOfVP && Number(firstPointFrontOfVP) > 500) {
    warnings.push(
      "Please provide a value for 'First Point Front of VP' less than 500."
    );
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
  validateFirstPointAboveHP(firstPointAboveHP, warnings);
  validateFirstPointFrontOfVP(firstPointFrontOfVP, warnings);

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

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================


export const CycloidValidation = (inputs, setWarningMessage, setIsCanvas) => {
  const { 
    "Major Axis": majorAxis,
    "Minor Axis": minorAxis,

  } = inputs;
  const warnings = [];

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

  // Clear warnings and allow canvas rendering
  setWarningMessage([]);
  setIsCanvas(true);
};

// =======================================================================================================

