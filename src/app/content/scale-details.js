export default function ScaleDetails({drawingType}) {
  return (
    <div className="flex flex-col w-full text-gray-700">
      {drawingType === "plainScale" && (
        <div>
 <b>➽ Plain Scale :</b>A plain scale consists of a line divided into suitable number of
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
<b>➽ Formula of Representative fraction (r.f):</b><br />
&nbsp;&nbsp; &nbsp;&nbsp;   r.f. = Drawing length / Actual length <br />
<br/>
<b>➽ Calculate Rf :</b><br/>
<b>➽ Example :</b><br/>
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
      {drawingType === "diagonalScale" && (
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

{drawingType === "vernierScale" && (
    <div>
<b>➽ Vernier Scale : </b> Vernier scales, like diagonal scales, are used to read to a very 
small unit with great accuracy. A vernier scale consists of two parts -a primary 
scale and a vernier. The primary scale is a plain scale fully divided into minor divisions.
<br/>
<b>➽ Principle of a Vernier Scale :</b> The vernier scale works on the principle that the difference between one main scale division and one vernier scale division is a constant fraction of the main scale division. This allows for fine measurements beyond the smallest division of the main scale.
<br/>

<b>Example Question :</b> Construct a vernier scale with a least count of 0.1 mm to measure up to 10 cm.
<br/>
Here,<br/>
Length of the main scale = 10 cm<br/>
Least count = 0.1 mm = 0.01 cm<br/>
&nbsp;&nbsp;(i) Draw a line 10 cm long to represent the main scale and divide it into 10 equal divisions. Each division will show 1 cm.<br/>
&nbsp;&nbsp;(ii) Draw the vernier scale parallel to the main scale and divide it into 10 equal divisions, making it 9 cm in total length.<br/>
&nbsp;&nbsp;(iii) Align the vernier scale such that the first division coincides with zero on the main scale.<br/>
&nbsp;&nbsp;(iv) The measurement is read where a vernier division aligns exactly with a main scale division.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Example: If the 4th division of the vernier aligns with a main scale division, the reading will be 4.04 cm.
<br/>
    </div>
  )}

    </div>
      
   
  );
}
