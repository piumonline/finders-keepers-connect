"use client"

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=" text-gray-500 pt-5 pr-24 font-bold text-lg">
            <div className="container mx-auto flex items-center justify-end">
                <div className="hidden md:flex space-x-8 gap-5">
                    <a href="#" className="hover:text-blue-300">Home</a>
                    <a href="#" className="hover:text-blue-300">About</a>
                    <a href="#" className="hover:text-blue-300">Our Team </a>
                    
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-700 p-4">
                    <a href="#" className="py-2 hover:text-gray-300">Home</a>
                    <a href="#" className="py-2 hover:text-gray-300">About</a>
                    <a href="#" className="py-2 hover:text-gray-300">Services</a>
                    <a href="#" className="py-2 hover:text-gray-300">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
