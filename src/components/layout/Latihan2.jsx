import React, { useState, useRef, useEffect, useCallback } from "react";
import Kalorize from '../../assets/Kalorize.png';

function Latihan2() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
    const [isDropdownOpen2Mobile, setIsDropdownOpen2Mobile] = useState(false);


    const menuRef = useRef(null); 
    const menuRefMobile = useRef(null);

    
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        setIsDropdownOpen2(false);
    };
    const toggleDropdownMobile = () => {
        setIsDropdownOpenMobile((prev) => !prev);
        setIsDropdownOpen2Mobile(false);
    };
    
    const toggleDropdown2 = () => {
        setIsDropdownOpen2((prev) => !prev);
    };
    
    const toggleDropdown2Mobile = () => {
        setIsDropdownOpen2Mobile((prev) => !prev);
    };

    const handleItemClick = () => {
        setIsDropdownOpen(false);
        setIsDropdownOpen2(false);
        setIsDropdownOpenMobile(false);
        setIsDropdownOpen2Mobile(false);
    };
    
    const handleClickOutside = useCallback((event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
            setIsDropdownOpen2(false);
        }
        if (menuRefMobile.current && !menuRefMobile.current.contains(event.target)) {
            setIsDropdownOpenMobile(false);
            setIsDropdownOpen2Mobile(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex justify-start md:space-x-8">
                    <div className="py-2">
                        <a href="#">
                            <img src={Kalorize} alt="Kalorize Logo" />
                        </a>
                    </div>
                    <div className="hidden w-full md:block md:w-auto">
                        <div className="flex font-medium p-4 md:p-0 mt-4 bg-gray-200 md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-white">
                            <a href="#" className="block py-2 px-3 text-black">Home</a>
                            
                            {/* Dropdown */}
                            <div className="relative" ref={menuRef}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdown}
                                >
                                    Dropdown 
                                    <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a></li>
                                            <li>
                                                <button 
                                                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                                                    onClick={toggleDropdown2}
                                                >
                                                    Sub Dropdown
                                                    <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                    </svg>
                                                </button>
                                                {isDropdownOpen2 && (
                                                    <div className=" bg-white rounded-lg">
                                                        <ul className=" text-sm text-gray-700">
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Overview</a></li>
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">My Downloads</a></li>
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Billing</a></li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Services</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Pricing</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Contact</a>
                        </div>
                    </div>
                </div>
                
                <div className="hidden md:block">
                    <button className="text-white bg-[#F94917] px-5 py-2 rounded-lg me-2">Masuk</button>
                    <button className="text-white bg-[#413D66] px-5 py-2 rounded-lg">Daftar</button>
                </div>
            </div>
            {/* ukuran MD */}
            <div className="md:hidden w-full md:block md:w-auto">
                        <div className="flex font-medium p-4 md:p-0 mt-4 bg-gray-200 md:space-x-8 flex-col md:border-0 bg-white">
                            <a href="#" className="block py-2 px-3 text-black">Home</a>
                            
                            {/* Dropdown */}
                            <div className="relative" ref={menuRefMobile}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownMobile}
                                >
                                    Dropdown 
                                    <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenMobile && (
                                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100"onClick={handleItemClick} >Dashboard</a></li>
                                            <li>
                                                <button 
                                                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                                                    onClick={toggleDropdown2Mobile}
                                                >
                                                    Sub Dropdown
                                                    <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                    </svg>
                                                </button>
                                                {isDropdownOpen2Mobile && (
                                                    <div className=" bg-white rounded-lg">
                                                        <ul className=" text-sm text-gray-700">
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleItemClick}>Overview</a></li>
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleItemClick}>My Downloads</a></li>
                                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleItemClick}>Billing</a></li>
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"onClick={handleItemClick}>Services</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"onClick={handleItemClick}>Pricing</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"onClick={handleItemClick}>Contact</a>
                        </div>
                    </div>
            
        </nav>
    );
}

export default Latihan2;
