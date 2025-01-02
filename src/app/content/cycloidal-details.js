export default function CycloidDetails({ drawingType }) {
    return (
      <div className="flex flex-col w-full">
   Cycloidal General Details


{drawingType === "cycloid" && (
  <div>

  CycloidDetails
      </div>

)}
{drawingType === "hypocycloid" && (
  <div>

  HypocycloidDetails
      </div>

)}
{drawingType === "epicycloid" && (
  <div>

EpicycloidDetails
      </div>

)}
</div>
)}
