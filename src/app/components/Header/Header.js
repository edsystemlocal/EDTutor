import React, { useState } from "react";
import companyDetails from "../Company-Details/companyDetails";
import Navbar from "../Navbar/navbar";


const Header = () => {
      const [drawingType, setDrawingType] = useState("");
      const resetDrawing = (path) => {
        setDrawingType(path);
      };
  return (
    <>
      {/* Scrolling text above Navbar */}
      <div className="overflow-hidden bg-gray-200 py-1">
        <span className="block whitespace-nowrap animate-scroll text-blue-600 font-medium">
          {`Welcome to ${companyDetails.name}! | ${companyDetails.tagline} | Contact us at ${companyDetails.email} or ${companyDetails.contactNumber} | ${companyDetails.updates}`}
        </span>
      </div>
      <Navbar resetDrawing={resetDrawing} />
      
    </>
  );
};

export default Header;
