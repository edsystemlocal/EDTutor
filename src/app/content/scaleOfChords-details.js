export default function ScaleOfChordsDetails({drawingType}) {
    return (
      <div className="flex flex-col w-full text-gray-700">
      <b>➽ Scale Of Chords :</b>The scale of chords is a numerical scale that represents the lengths of the chords of a circle corresponding to specific angles in degrees. The chord of an angle is the straight-line distance between the endpoints of an arc that subtends that angle at the center of the circle.<br /><br />

      <b>➽ How It Works:</b>
      &nbsp;&nbsp;• A circle is drawn with a fixed radius.<br/>
      &nbsp;&nbsp;• For a given angle 𝜃,the chord length is calculated as:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chord length = 2.R.sin(𝜃/2)<br/>

      &nbsp;&nbsp;where  R is the radius of the circle.<br/>
      &nbsp;&nbsp;• The scale of chords is essentially a table or a marked scale that provides these chord lengths for angles typically ranging from 0° to 90°.<br/><br/>


      <b>➽  How to Use It:</b>
      &nbsp;&nbsp;1.To measure an angle:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Place dividers on the scale of chords to measure the distance corresponding to the angle.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Place the dividers on the circle's radius and draw the arc to find the angle.<br/><br/>
      &nbsp;&nbsp;2.To construct an angle:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Take the chord length for the desired angle from the scale.<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mark this distance on a circle's circumference using dividers, creating an arc that subtends the desired angle at the center.<br/><br/>
     
      
      <b>➽ Angle In Scale Of Chords:</b>
     The angle in the scale of chords refers to the measurement of an angle based on the length of its chord in a circle. In simpler terms, <br/>
     it uses the concept of the chord of an angle to either measure or construct angles without directly using degrees or radians.<br/><br/>
     <b>The angle in the scale of chords can be found as follows:</b>
     &nbsp;&nbsp;1.Measuring an Angle:<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Using a ruler or dividers, measure the chord length of an angle from the scale.<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Find the corresponding angle by referencing the scale of chords.<br/>
     &nbsp;&nbsp;2.Constructing an Angle:<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Look up the chord length for the desired angle from the scale.<br/>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Mark this chord length on the circle's circumference to construct the angle.<br/><br/>
     
   
     </div>
    );
  
}