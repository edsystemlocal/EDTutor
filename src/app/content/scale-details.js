export default function ScaleDetails({drawingType}) {
  return (
    <div className="flex flex-col w-full">
      {drawingType === "plainScale" && (
        <div>
 <b>➽ plainScale :</b>A plain scale consists of a line divided into suitable number of
equal parts or units, the first of which is sub-divided into smaller parts. Plain scales
represent either two units or a unit and its sub-division. . <br />
<br/>
<b>➽ In every scale, </b><br />
&nbsp;&nbsp;(i) The zero should be placed at the end of the first main division, i.e. between the unit and its sub-divisions.<br />
&nbsp;&nbsp;(ii) From the zero mark, the units should be numbered to the right and its sub-divisions to the left.<br />
&nbsp;&nbsp;(iii) The names of the units and the sub-divisions should be stated clearly below or at the respective ends.<br />
&nbsp;&nbsp;(iv)  The name of the scale (e.g. scale, 1 : 10) or its R.F. should be mentioned below the scale. <br />
<br/>
<b>➽ Representative fraction (r.f) :</b>The ratio of the length of the object represented on drawing to the actual length of the 
object represented is called the Representative Fraction (i.e. R.F.). <br />
<br/>
<b>➽ formula of Representative fraction (r.f):</b><br />
&nbsp;&nbsp; &nbsp;&nbsp;   r.f. = Drawing length / Actual length <br />
<br/>
<b>➽ Calculate Rf :</b><br/>
<b>➽ example :</b><br/>
Distance on drawing:5cm<br/>
Actual distance:500m<br/>
&nbsp;&nbsp;Step 1: Convert actual distance to the same unit as the drawing distance: 500m = 500 * 100 = 50,000cm<br/>
&nbsp;&nbsp;Step 2: Apply the formula:  R.F. = 5/50,000 = 1:10,000     <br/>      
<br/>
<b>➽ Example Question.:</b> Construct a scale of 1 : 4 to show centimetres and long enough to measure upto 5 decimetres ? <br />
explain ,<br/>
&nbsp;&nbsp;(i) Determine R.F. of the scale. Here it is 1/4.<br/>
&nbsp;&nbsp;(ii) Determine length of the scale.  <br/>
&nbsp;&nbsp; &nbsp;&nbsp; Length of the scale == R.F. x maximum length = 1/4 x 5 dm = 12.5 cm.<br/>
    &nbsp;&nbsp;(iii) Draw a line 12.5 cm long and divide it into 5 equal divisions, each representing 1 dm.<br/>
    &nbsp;&nbsp;(iv) Mark O at the end of the first division and 1, 2, 3 and 4 at the end of each subsequent division to its right.<br/>
    &nbsp;&nbsp;(v) Divide the first division into 10 equal sub-divisions, each representing 1 cm.<br/>
    &nbsp;&nbsp;(vi) Mark ems to the left of O . <br/>
<br/>
        </div>
      )}
      {drawingType === "Diagonalscale" && (
        <div>
<b>➽ Diagonalscale : </b>A diagonal scale is used when very minute distances such as 0.1 mm etc. are to be accurately measured or when measurements are required
in three units; for example, dm, cm and mm, or yard, foot and inch. 
<br/>
<b>➽ Principle of a diagonal scale :</b>Diagonal scale follows the principle of similar triangles where a short length is divided into number of parts in which sides are proportional.
Divided into required number of equal parts.<br/>
<br/>

<b>Exaplme Question : </b>Construct a diagonal scale of R.F. =1/4000 to show meters and long enough to measure upto 500 metres.
here,<br/>
Length ofo the scale = 1//4000 *500 m = 1/8 meter = 12.5 cm.<br/>
&nbsp;&nbsp;(i) Draw a line 12.5 cm long and divide it into 5 equal parts. Each part will show 100 metres.<br/>
&nbsp;&nbsp;(ii) Divide the first part into ten equal divisions. Each division will show 10 metres.<br/>
&nbsp;&nbsp;(iii) At the left-hand end, erect a perpendicular and on it, step-off 10 equal divisions of any length. <br/>
&nbsp;&nbsp;(iv) Draw the rectangle and complete the scale .<br/>
&nbsp;&nbsp; &nbsp;&nbsp;The distance between points A and B shows 374 metres. <br/>
<br/>

        </div>
      )}
    </div>
      
   
  );
}
