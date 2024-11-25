"use client";

import React, { useState, useEffect, useRef } from "react";

const Dropnav = () => {
    const [guest, setGuest] = useState(1);
    const [room, setRoom] = useState(1);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown container

    const incrementGuest = () => {
        setGuest(guest + 1);
    };
    
    const decrementGuest = () => {
        if (guest > 0) {
            setGuest(guest - 1);
        }
    };

    const incrementRoom = () => {
        setRoom(room + 1);
    };
    
    const decrementRoom = () => {
        if (room > 0) {
            setRoom(room - 1);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setIsDropdownVisible(false);
    };

    // Effect to handle clicks outside of the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown(); // Close dropdown if click is outside
            }
        };

        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <div className="bg-black py-1.5 px-2 rounded flex">
                <button 
                    className="bg-black text-white" 
                    onClick={toggleDropdown}
                >
                    {room} Room and {guest} guest
                </button>
            </div>

            {/* Dropdown Content */}
            {isDropdownVisible && (
                <div ref={dropdownRef} className="absolute mt-2 bg-white text-black rounded-md shadow-lg p-4 z-10">
                    {/* Room Controls */}
                    <div className="flex items-center justify-between mb-4">
                        <span>Rooms:</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={decrementRoom}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>
                            <span>{room}</span>
                            <button
                                onClick={incrementRoom}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    {/* Guest Controls */}
                    <div className="flex items-center justify-between mb-6">
                        <span>Guests:</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={decrementGuest}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                -
                            </button>
                            <span>{guest}</span>
                            <button
                                onClick={incrementGuest}
                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropnav;
