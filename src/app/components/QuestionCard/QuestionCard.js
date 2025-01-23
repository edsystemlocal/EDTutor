import React, { useState } from 'react';
import Tooltip from '../Tooltip/tooltip';

const QuestionCard = ({ question, tooltipContent, tooltipId, activeQuestion,activeTooltip, toggleTooltip, onDrawClick }) => {
   // Helper to format content dynamically
  const formatContent = (content) => content.replace(/\n/g, "<br />");
    return (
        <div className="card flex justify-between items-center">
            <p className="card-text">{question}</p>
            <div className="flex items-center justify-center space-x-2 relative">
                <span
                    className="cursor-pointer text-blue-600 hover:text-blue-800 "
                    title={tooltipContent} // Tooltip on hover
                    onClick={() => toggleTooltip(tooltipId)}
                >
                    ⓘ
                </span> 
                {activeTooltip === tooltipId && (
                    <Tooltip
                        isVisible={activeTooltip === tooltipId}
                        content={formatContent(tooltipContent)} // Pass the tooltip content
                        onClose={() => toggleTooltip(null)}
                    />
                )}
                <button
                    className="button-blue w-auto px-4 py-2 text-center"
                    onClick={() => onDrawClick(tooltipId)} // Call onDrawClick with the tooltipId

                >
                    {activeQuestion === tooltipId ? 'Hide Question' : 'Draw'}
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;



// const QuestionCard = ({
//     question,
//     tooltipContent,
//     tooltipId,
//     activeTooltip,
//     toggleTooltip,
//     onDrawClick,
//   }) => {
//     return (
//       <div className="card flex justify-between items-center">
//         <p className="card-text">{question}</p>
//         <div className="flex items-center justify-center space-x-2 relative">
//           {/* Info Icon */}
//           <span
//             className="cursor-pointer text-blue-600 hover:text-blue-800 relative"
//             onClick={() => toggleTooltip(tooltipId)}
//           >
//             ⓘ
//           </span>
  
//           {/* Tooltip */}
//           {activeTooltip === tooltipId && (
//             <Tooltip
//               isVisible={activeTooltip === tooltipId}
//               content={tooltipContent} // Pass the tooltip content
//               onClose={() => toggleTooltip(null)}
//             />
//           )}
  
//           {/* Draw Button */}
//           <button className="button-blue w-auto px-4 py-2 text-center">
//             {activeTooltip === tooltipId ? "Hide Question" : "Draw"}
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default QuestionCard;
  