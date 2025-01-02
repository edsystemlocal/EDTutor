export default function LineDetails({ drawingType }) {
  return (
    <div className="flex flex-col w-full">
      <div>
      <b> ➽ Line :</b> A straight line is the shortest distance between two points. Hence, the projections
        of a straight line may be drawn by joining the respective projections of its endswhich are points.<br />
        <br /> 
        <b>  ➽ Line length :</b>In general terms, line length refers to the measurement of the distance between the two endpoints of a line.
        It is a scalar quantity that represents the length of the line, irrespective of its orientation in space.
        <br /> 
        <br />
        <b>  ➽ Top View (Plan View):</b> The line appears as a true-length line inclined at the given angle to the VP.
        <br /> <br />
        <b>  ➽ Front View (Elevation):</b>The line appears as a horizontal line (since it is parallel to HP).
        <br /> <br />
        <b> ➽ Side View:</b>The side view may show the true inclination of the line with respect to the VP. 
        <br /> <br />
      </div>

{drawingType === "parallelToBoth" && (
        <div>
          <b>➽ example question for parallelToHP :</b> <br />
          <b> ➽ Question 1 :</b> Draw the projections of a 75 mm long straight line, in the following positions: <br />
          where, Parallel to and 30 mm above the H.P. and in the V.P. <br />
          here, <br />
          true length / line length= 75; <br />
          and Parallel to and 30 mm above the H.P. means FirstPointAboveHPLength =30 mm. and FirstPointFrontofVPLength = 0<br />
          <br />
          <b>  ➽ example question for parallelToVP : </b><br />
          <b>  ➽ Question 1:</b> Draw the projections of a 75 mm long straight line, in the following positions: <br />
          where, Parallel to and 40 mm in front of the V.P. and in the H.P. <br />
          here, <br />
          line length =75 ; <br />
          and Parallel to and 40 mm in front of the V.P. means FirstPointFrontofVPLength =40mm and FirstPointAboveHPLength = 0 <br />
          <br />
          <b> ➽ parallel to Both :</b> A line that is parallel to both the Vertical Plane (VP) and the Horizontal Plane (HP)
          in engineering drawing is said to be in a condition called parallel to both reference planes.
          <br />
          <br />
          <b>  ➽ example question for parallelToBoth :</b><br />
          <b>  ➽ Question 1:</b> Draw the projections of a 75 mm long straight line, in the following positions: <br />
          where,Parallel to both the H.P. and the V.P. and 25 mm from each. <br />
          here, <br />
          line length =75 ; <br />
          Parallel to both the H.P. and the V.P. means FirstPointAboveHPLength =25 mm. and FirstPointFrontofVPLength =25mm. <br />
          
          <br />
        </div>
      )}

      {drawingType === "parallelToHPAndInclinationToVP" && (
        <div>
         <b> ➽ parallel to HP and Inclination to VP : </b>"A line that lies flat and remains parallel to the Horizontal Plane, but is set at an angle with respect to the Vertical Plane."<br />
          <br />
          <b> ➽Inclined to VP: </b><br />
         &nbsp;&nbsp; *The line is tilted at a specific angle with respect to the VP.<br />
         &nbsp;&nbsp;*This means it is not parallel or perpendicular to the VP.<br />
          <br />
          <b> ➽ example question :</b> <br />
          <b> ➽ Question 1: </b> The front view of a line, inclined at 30° to the V.P is 65 mm long. Draw theprojections of the line,
           when it is parallel to and 40 mm above the H.P., its one end being 30 mm in front of the V.P. <br />
           here,<br />
           LineLenght =65 mm.<br />
           parallel to and 40 mm above the H.P. means firstPointAboveHPLength= 40mm<br />
           its one end being 30 mm in front of the V.P. means firstpointfrontOfVPLength =30 mm<br />
           inclined at 30° to the V.P means InclinationToVP =30<br />
          <br />
         <b> ➽ Question 2:</b>A 100 mm long line is parallel to and 40 mm above the H.P. Its two ends are 25 mm and 50 mm in front of the V.P. respectively.
          Draw its projections andfind its inclination with the V.P.  <br />

          here,<br />
          LineLength =100 mm.<br />
          parallel to and 40 mm above the H.P means firstPointAboveHPLength =40 mm.<br />
          Its two ends are 25 mm and 50 mm in front of the V.P means firstpointfrontOfVPLength =25 mm.<br />
          and SecondPointFrontofVPLength =50 mm.<br />
          <br />

        </div>
      )}

      {drawingType === "parallelToVPAndInclinationToHP" && (
        <div>
        <b>➽ parallel to VP and Inclination to HP :</b>"A line that remains parallel to the Vertical Plane but is inclined at a specific angle with respect to the Horizontal Plane."
          <br />
          <b>  ➽ Inclined to HP:</b><br />
          &nbsp;&nbsp;*The line is tilted upward or downward at a specific angle with respect to the HP.<br />
          &nbsp;&nbsp;*It does not lie flat but makes an angle with the horizontal surface.<br />
          <br />
         <b> ➽ example question : </b><br />
          <b>➽ Question 1:</b>A 90 mm long line is parallel to and 25 mm in front of the V.P. Its one end is in the H.P. while the other is 50 mm above the H.P.
          Draw its projections and find its inclination with the H.P. <br />

          here,<br />
          LineLength =90 mm.<br />
          and Parallel to and 25 mm in front of the V.P. means FirstPointFrontofVPLength = 25mm <br />
          and Its one end is in the H.P. while the other is 50 mm above the H.P. means SecondPointAboveHPLength: 50mm

        </div>
      )}
      {drawingType === "inclinationToBoth" && (
        <div>  
        <b> ➽ Inclination to Both planes :</b>Inclination to Both the Planes refers to the angles that a line or surface makes with two principal reference planes: the Horizontal Plane (HP) and the Vertical Plane (VP). 
          These angles are used to describe the orientation of the line or surface in 3D space.<br />
          <br />
          <b> ➽ example question : </b>A line CD,80 mm long, is inclined at 30 to the HP and at 45 to the VP. It's one end C 20mm above the HP and 30mm in front of the VP. Draw the projections of CD.<br />
          here,<br />
          lineLength = 80 mm, <br />
          inclined at 30 to the HP and at 45 to the VP Means InclinationtoHP = 30 and InclinationftoVP =45, <br />
          It's one end C 20mm above the HP and 30mm in front of the VP Means firstPointAboveHPLength =20 mm and FirstPointFrontofVPLength = 30 mm.
          <br />

        </div>
      )}

      {drawingType === "perpendicularToHP" && (
        <div>
          ➽ perpendicular to HP :"A line that is oriented at a right angle (90°) to the Horizontal Plane and is parallel to the Vertical Plane (VP)."<br />
          <br />
          <b> ➽ Perpendicular to HP: </b><br />
          &nbsp;&nbsp;*The line extends vertically upward or downward from the HP.<br />
          &nbsp;&nbsp;*It forms a 90° angle with the horizontal surface.<br />
          <b>➽ Parallel to VP: </b><br />
          &nbsp;&nbsp;*The line remains parallel to the VP and does not tilt sideways.<br />
          <br />
          <b> ➽ example question : </b><br />
          <b>➽ Question 1: </b>Draw the projections of a 75 mm long straight line, in the following positions: <br />
          where,Perpendicular to the H.P., 20 mm in front of the V.P. and its one end 15 mm above the H.P. <br />

          here,<br />
          line length = 75 mm <br />
          its one end 15 mm above the H.P. means FirstPointAboveHPLength: 15mm <br />
          and 20 mm in front of the V.P.means FirstPointFrontofVPLength : 20mm
        </div>
      )}

      {drawingType === "perpendicularToVP" && (
        <div>
          <b>➽ perpendicular to VP :</b>"A line that is oriented at a right angle (90°) to the Vertical Plane and is parallel to the Horizontal Plane (HP)."
          <br /><br />
          <b>➽Perpendicular to VP:</b><br />
          &nbsp;&nbsp;*The line extends directly toward or away from the VP.<br />
          &nbsp;&nbsp;*It forms a 90° angle with the VP.<br />
          <b>➽Parallel to HP:</b><br />
          &nbsp;&nbsp;*The line lies flat and does not incline upward or downward with respect to the HP.<br />
          <br />
          <b>➽ example question : </b><br />
         <b> ➽ Question 1:</b>Draw the projections of a 75 mm long straight line, in the following positions: <br />
          where,Perpendicular to the V.P., 25 mm above the H.P. and its one end in the V.P. <br />

          here,<br />
          line length = 75 mm <br />
          25 mm above the H.P means FirstPointAboveHPLength: 25mm <br />
          and its one end in the V.P means FirstPointFrontofVPLength: 0
        </div>
      )}
    </div>
  );
}