import React from "react";

const GroupNavigation = ({ groups, expandedGroups, toggleGroup, exerciseTitle }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{exerciseTitle}</h2>
        {groups.map((group, index) => (
          <button
            key={index}
            className={`w-full text-left bg-blue-500 border  border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none 
              ${expandedGroups[group.key] ? 'bg-gradient-to-r from-orange-400 to-yellow-400' : 'bg-blue hover:bg-blue-700'}`}
            onClick={() => toggleGroup(group.key)}
          >
            {group.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GroupNavigation;

