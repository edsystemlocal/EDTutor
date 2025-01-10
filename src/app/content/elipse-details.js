export default function ElipseDetails({ drawingType }) {
  return (
    <div className="flex flex-col w-full text-gray-700">

       <b>➽ Ellipse :</b>An ellipse is a smooth, oval-shaped curve that resembles a stretched circle. It has two fixed points called foci.
      For any point on the ellipse, the total distance to these two foci remains constant.  <br />
      <br />
    
      <b>➽ Uses of Ellipses:</b>
      &nbsp;&nbsp;Ellipses are used in various fields such as:<br />
      &nbsp;&nbsp;*&nbsp;Architecture (arches, bridges, and monuments)<br />
      &nbsp;&nbsp;*&nbsp;Engineering (dams and manholes)<br />
      &nbsp;&nbsp;*&nbsp;Mechanical components (glands and stuffing boxes)<br />
      &nbsp;&nbsp;Mathematically, an ellipse is represented by the equation:<br />
      &nbsp;&nbsp;x^2/a^2+y^2/b^2 =1<br />
      &nbsp;&nbsp;Here, a and b are half the lengths of the major and minor axes, respectively, while x and y represent coordinates.
      <br />
      <br />


      {drawingType === "ellipseGeneralMethod" && (
        <div>
         <b>➽ The distance of the focus from the directrix : </b> The distance of the focus from the directrix in a conic section (ellipse, parabola, or hyperbola) is related to the eccentricity (e) and the semi-latus rectum (l).<br />
         <b>Formula:<br /></b> 
          The distance of the focus from the directrix is given by:<br />
          <b> Distance from Focus to Directrix = l/e</b>,<br />
          where:<br />
          <b> l : </b>Semi-latus rectum (perpendicular distance from the focus to the curve).<br />
          <b> e: </b>Eccentricity of the conic section.<br />
          <br />

         <b>  ➽ Eccentricity of the Ellipse :</b><br />
          The ratio of distances from the center of the ellipse from either focus to the semi-major axis of the ellipse is defined as the eccentricity of the ellipse.
          <br />
          The eccentricity of ellipse, e = c/a
          <br />
          Where c is the focal length and a is length of the semi-major axis.<br />

          Since c ≤ a the eccentricity is always less than 1 in the case of an ellipse.<br />
          Also,<br />
          c^2 = a^2 - b^2<br />
          Therefore, eccentricity becomes:<br />
          e = √(a^2 - b^2)/a<br />
          e = √[(a^2 -b^2)/a^2] e = √[1-(b^2/a^2)]<br /><br />
         <b>➽ Example Question :</b> To construct an ellipse when the distance of the focus from the directrix is equal to 50 mm and eccentricity is 2/3·<br /><br />
        </div>
      )}


      {drawingType === "ellipseConcentricCircleMethod" && (
        <div>
        <b> ➽ ConcentricCricleMethod :</b>The Concentric Circle Method is a geometrical technique used to construct an ellipse by drawing two concentric circles:<br />
        &nbsp;&nbsp;*The larger circle corresponds to the major axis of the ellipse.<br />
        &nbsp;&nbsp;*The smaller circle corresponds to the minor axis of the ellipse.<br />
          <br />
          <b>   ➽ Major Axis: </b><br />
          &nbsp;&nbsp;* The major axis is the longest diameter of the ellipse.<br />
          &nbsp;&nbsp;* It passes through both foci and the center of the ellipse.<br />
          &nbsp;&nbsp;* The endpoints of the major axis are called the vertices of the ellipse.<br />
          &nbsp;&nbsp;* The length of the major axis determines the widest part of the ellipse.<br />
          <br />
          <b>   ➽ Minor Axis: </b><br />
          &nbsp;&nbsp;* The minor axis is the shortest diameter of the ellipse.<br />
          &nbsp;&nbsp; * It is perpendicular to the major axis and also passes through the center of the ellipse.<br />
          &nbsp;&nbsp;* The endpoints of the minor axis define the narrowest part of the ellipse.<br />
          &nbsp;&nbsp;* The minor axis is shorter than the major axis unless the ellipse is a perfect circle.<br />
          <br />
          <b>   ➽ example Question : </b>Construct an ellipse with major axis AB= 60 mm and minor axis CD = 40 mm,by
means of concentric circles method.
here,<br />
major axis = 60 mm<br />
minor axis = 40 mm <br />
<br />


        </div>
      )}

    </div>

  );
}