
"use client";
import React, { useState, useRef, useEffect } from "react";

const SliderPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(""); // State for dropdown value
    const [slideSpeed, setSlideSpeed] = useState(60); // State for slide animation speed
    const panelRef = useRef(null);

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (panelRef.current && !panelRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedValue(selectedValue); // Update state
        window.selectedDropdownValue = selectedValue; // Set value in window object
        console.log("Dropdown value set in window object:", window.selectedDropdownValue);
    };

    const handleSpeedChange = (e) => {
        const newSpeed = parseInt(e.target.value);
        setSlideSpeed(newSpeed); // Update slide speed in state
        window.slideSpeedValue = newSpeed; // Store in window object
        console.log("Slide speed value set in window object:", window.slideSpeedValue);
    };

    return (
        <div className="relative">
            <div
                ref={panelRef}
                style={{ transitionDuration: `${slideSpeed}ms` }}
                className={`fixed top-20 right-0 h-[85%] bg-white shadow-lg transition-transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } w-64`}
            >
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-700">Preferences</h2>

                    <div className="mt-4">
                        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                            Theme:
                        </label>
                        <select
                            id="dropdown"
                            value={selectedValue}
                            onChange={handleDropdownChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700 "
                        >
                            <option value="theme_colorful">Theme Colorful</option>
                            <option value="theme_b_and_w">Theme_B_&_W</option>
                            <option value="theme_red">Theme Red</option>
                            <option value="classic_grayscale">Classic Grayscale</option>
                            <option value="sunset_glow">Sunset Glow</option>
                            <option value="ocean_blues">Ocean Blues</option>
                            <option value="forest_shades">Forest Shades</option>
                            <option value="sunny_days">Sunny Days</option>
                            <option value="modern_neutrals">Modern Neutrals</option>
                            <option value="purple_rain">Purple Rain</option>
                            
                        </select>
                    </div>
                    {selectedValue && (
                        <p className="text-sm text-gray-600 mt-2">
                            You selected: <strong>{selectedValue}</strong>
                        </p>
                    )}

                    <div className="mt-6">
                        <label htmlFor="speed" className="block text-sm font-medium text-gray-700">
                            Drawing Speed:
                        </label>
                        <input
                            id="speed"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={slideSpeed}
                            onChange={handleSpeedChange} 
                            className="w-full mt-1"
                        />
                        <p className="text-sm text-gray-600 mt-2">
                            Current Speed: <strong>{slideSpeed}</strong>
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={toggleSlider}
                className={`fixed transform -translate-y-50  bg-gradient-to-r from-blue-300 to-green-200 p-2 rounded-l ${
                    isOpen ? "right-64" : "right-0"
                }`}
            >
                {isOpen ? "<" : ">"}
            </button>
        </div>
    );
};

export default SliderPanel;
