import React from "react";

const Tooltip = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null;

      
  return (
    <>
      {/* Tooltip Content */}
      <div
        className="absolute   top-9 left-1 right-0 bg-white border border-gray-300 shadow-lg rounded-md p-2 w-64 z-10"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <p
          className="text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Close Tooltip on Clicking Outside */}
      <div
        className="fixed inset-0 bg-transparent"
        onClick={onClose}
      ></div>
    </>
  );
};

export default Tooltip;


// import React from "react";

// const Tooltip = ({ isVisible, content, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="abso">
//       {/* Tooltip Content */}
//       <div
//         className="absolute left-0  right-20 bg-white border border-gray-300 shadow-lg rounded-md p-2 w-64 z-10"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//       >
//         <p
//           className="text-sm text-gray-700"
//           dangerouslySetInnerHTML={{ __html: content }}
//         />
//       </div>

//       {/* Close Tooltip on Clicking Outside */}
//       <div className="fixed inset-0 bg-transparent" onClick={onClose}></div>
//     </div>
//   );
// };

// export default Tooltip;
