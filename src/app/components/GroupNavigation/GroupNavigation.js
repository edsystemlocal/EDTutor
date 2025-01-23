import React from "react";

const GroupNavigation = ({ groups, expandedGroups, toggleGroup ,exerciseTitle }) => {
    return (
<div className="w-1/4 bg-gray-100 p-6 bg-gradient-to-r from-blue-50 to-blue-200">
        <div className="space-y-4">
                <h2 className="text-xl font-bold">{exerciseTitle}</h2>
                {groups.map((group, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => toggleGroup(group.key)}
                    >
                        <span className="mr-2">
                            {expandedGroups[group.key] ? "▼" : "▶"}
                        </span>
                        {group.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupNavigation;
