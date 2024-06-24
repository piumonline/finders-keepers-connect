"use client"

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 bg-white shadow-md text-gray-500 pt-5 pr-24 font-bold text-lg z-50 pb-4">
            <div className="container mx-auto flex items-center justify-end">
                <div className="hidden md:flex space-x-8 gap-5">
                    <a href="#home" className="hover:text-blue-300">Home</a>
                    <a href="#team" className="hover:text-blue-300">Team</a>
                    <a href="#overview" className="hover:text-blue-300">Overview</a>
                    <a href="#features" className="hover:text-blue-300">Features</a>
                    <a href="#how-to" className="hover:text-blue-300">How To</a>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-700 p-4">
                    <a href="#home" className="hover:text-blue-300">Home</a>
                    <a href="#team" className="hover:text-blue-300">Team</a>
                    <a href="#overview" className="hover:text-blue-300">Overview</a>
                    <a href="#features" className="hover:text-blue-300">Features</a>
                    <a href="#how-to" className="hover:text-blue-300">How To</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
