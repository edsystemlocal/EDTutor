export default function ParabolaDetails({drawingType}) {
  return (
    <div className="flex flex-col w-full">
       <div>
      ➽ <b>Parabola :</b>A parabola is a U-shaped curve formed by all points equidistant from a fixed point (focus) and a line (directrix). 
        Its key features include the vertex (turning point), 
        axis of symmetry (divides it evenly), and the focus and directrix, which determine its shape. 
        Parabolas appear in the paths of thrown objects, satellite dishes, and bridge designs.  <br/>  
        <br/>  

        <b> Main Features :-</b><br/> 
        &nbsp;&nbsp;<b>•	Vertex :</b> The turning point of the parabola, located halfway between the focus and the directrix.<br/> 
        &nbsp;&nbsp;<b>•	Axis of Symmetry :</b> A line that splits the parabola into two identical halves.<br/> 
        <br/>  

        <b> Equation :-</b><br/> 
        &nbsp;&nbsp;•	The equation of a parabola depends on its orientation: <br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;o	Opens up or down: y2=4axy^2 = 4ax<br/> 
            &nbsp;&nbsp;&nbsp;&nbsp;o	Opens left or right: x2=4ayx^2 = 4ay<br/> 
            &nbsp;&nbsp;•	These equations can be written if the focus and directrix are known.<br/>     
    <br />  
      </div>
      {drawingType === "parabolaTangentMethod" && (
        <div>
         <b>Parabola By Tangent Method :-</b><br/> 
         &nbsp;&nbsp;➽ The Parabola by Tangent Method involves constructing a parabola using its tangents. In this method, 
         a series of tangent lines are drawn at different points along the curve, ensuring that each tangent meets 
         the condition of a parabola:the perpendicular distance from the tangent to the focus equals the perpendicular 
         distance to the directrix. This technique is used in geometry and drafting to precisely create the shape of a parabola.<br/> 
         <br/> 
         <b>Example Question :- </b><br/> <b>Tangent Method :-</b>  Construct a parabola with the length of base as 200mm and height 100mm .<br/>
         <br/>  
         here :- Base = 200 , Height = 100 



        </div>
      )}
      {drawingType === "parabolaRectangularMethod" && (
        <div>
         <b>Parabola By Rectangular Method :-</b><br /> 
         <br /> 
         &nbsp;&nbsp; ➽ The Parabola by Rectangular Method is a way to draw a parabola using a coordinate system (x and y axes). In this method,
          the parabola is defined by its focus and directrix. By calculating distances from these two points, we can find the points on 
          the curve and plot them on a graph. The result is a smooth, U-shaped curve that is the parabola. This method uses 
          the parabola's equation to plot points and draw the shape.<br />  
          <br/> 
          <b>Example Question :-</b> <br/> <b>Rectangular Method :- </b> Construct a parabola with the length of base as 200 mm and height 100 mm .<br/> 
          <br/> 
          here :- Base = 200 , Height = 100 

        </div>
      )}
     
      {drawingType === "parabolaParallelogramMethod" && (
        <div>
         <b>Parabola By Parallelogram Method :-</b><br />  
         <br /> 
         &nbsp;&nbsp;➽ The Parabola by Parallelogram Method is a technique used to draw a parabola by constructing a series of parallelograms.
          The method involves finding points on the parabola using the focus and directrix, and then forming parallelograms to help 
          plot the curve. By accurately positioning these parallelograms, we can trace the shape of the parabola. This method is a 
          geometric approach to constructing a parabola based on its defining properties, ensuring it maintains the right shape and 
          symmetry.<br />
          <br />
          <b>Example Question :-</b><br/> <b>Parallelogram Method :- </b>Draw a parabola by Parallelogram method if the base and axis lenght of parabola are 200 mm and 100 mm resp.
          the base of parabola is inclined at 60° to horizontal.
          <br/>
          here :- axis = Height and inclined = angleInDegrees <br/>
          Base = 200 , Height = 100 , and angleInDegrees = 60 
        </div>
      )}
     
      {drawingType === "parabolaGeneralMethod" && (
        <div>
         <b>Parabola By General Method :-</b><br /> 
         <br />  
         &nbsp;&nbsp;➽ The Parabola by General Method is a way of constructing a parabola by plotting points based on its standard geometric 
         definition. According to this method, a parabola is the set of all points that are equidistant from a fixed point called 
         the focus and a straight line called the directrix. By determining multiple points using this distance relationship and 
         connecting them smoothly, the parabolic curve is formed.<br />  
         <br /> 
         <b> Example Question :-</b><br />  <b>General Method :- </b>To construct a parabola , when the distance of the focus from the directrix is 100 mm .<br /> 
         <br /> 
         here :- distanceofthefocusfromthedirectrix = 100 
        </div>
      )}
    </div>
  );
}