import React, { useState, useRef, useEffect, useCallback } from "react";
import Kalorize from '../../assets/Kalorize.png';

function Latihan2() {
    const [isDropdownOpenProduk, setisDropdownOpenProduk] = useState(false);
    const [isDropdownOpenProdukMobile, setisDropdownOpenProdukMobile] = useState(false);

    const [isDropdownOpenMakanan, setisDropdownOpenMakanan] = useState(false);
    const [isDropdownOpenMakananMobile, setisDropdownOpenMakananMobile] = useState(false);

    const [isDropdownOpenBermitra, setisDropdownOpenBermitra] = useState(false);
    const [isDropdownOpenBermitraMobile, setisDropdownOpenBermitraMobile] = useState(false);

    const [isOpen, setIsOpen] = useState(false);


    const menuRefProduk = useRef(null); 
    const menuRefMobileProduk = useRef(null);

    const menuRefMakanan = useRef(null); 
    const menuRefMobileMakanan = useRef(null);

    const menuRefBermita = useRef(null); 
    const menuRefMobileBermitra = useRef(null);

    
    const toggleDropdownProduk = () => {
        setisDropdownOpenProduk((prev) => !prev);
    };
    const toggleDropdownMakanan = () => {
        setisDropdownOpenMakanan((prev) => !prev);
    };

    const toggleDropdownMakananMobile = () => {
        setisDropdownOpenMakananMobile((prev) => !prev);
    };
    
    const toggleDropdownProdukMobile = () => {
        setisDropdownOpenProdukMobile((prev) => !prev);
    };

    const toggleDropdownBermitra = () => {
        setisDropdownOpenBermitra((prev) => !prev);
    };
    const toggleDropdownBermitraMobile = () => {
        setisDropdownOpenBermitraMobile((prev) => !prev);
    };
    
    const handleItemClick = () => {
        setisDropdownOpenProduk(false);
        setisDropdownOpenProdukMobile(false);
        setisDropdownOpenMakanan(false);
        setisDropdownOpenMakananMobile(false);
        setisDropdownOpenBermitra(false);
        setisDropdownOpenBermitraMobile(false);
    };
    
    const handleClickOutside = useCallback((event) => {
        if (menuRefProduk.current && !menuRefProduk.current.contains(event.target)) {
            setisDropdownOpenProduk(false);
            
        }
        if (menuRefMakanan.current && !menuRefMakanan.current.contains(event.target)) {
            setisDropdownOpenMakanan(false);
            
        }
        if (menuRefBermita.current && !menuRefBermita.current.contains(event.target)) {
            setisDropdownOpenBermitra(false);
        }
        if (menuRefMobileProduk.current && !menuRefMobileProduk.current.contains(event.target)) {
            setisDropdownOpenProdukMobile(false);
        }
        if (menuRefMobileMakanan.current && !menuRefMobileMakanan.current.contains(event.target)) {
            setisDropdownOpenMakananMobile(false);
        }
        if (menuRefMobileBermitra.current && !menuRefMobileBermitra.current.contains(event.target)) {
            setisDropdownOpenBermitraMobile(false);
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
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3">
                <div className="flex justify-start md:space-x-8">
                    <div className="py-2">
                        <a href="#">
                            <img src={Kalorize} alt="Kalorize Logo" />
                        </a>
                    </div>
                    <div className="hidden w-full md:block md:w-auto">
                        <div className="flex font-medium p-4 md:p-0 mt-4 bg-gray-200 md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-white">
                            <div className="relative" ref={menuRefMakanan}>
                                <button href="#" 
                                    className="block py-2 px-3 text-black flex items-center" 
                                    onClick={toggleDropdownMakanan} 
                                    >Makanan 
                                        <svg className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenMakanan ? 'rotate-180' : ''}`}
                                                viewBox="0 0 10 6" 
                                                fill="none">
                                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                        </svg>
                                
                                </button>
                                {isDropdownOpenMakanan && (
                                        <div className="absolute z-10 left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                            <ul className="py-2 text-sm text-gray-700">
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Chatbot</a></li>
                                                <li><a className="flex items-center w-full px-4 py-2 hover:bg-gray-100"> ERP</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gym App</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Membership Gym tracker</a></li>
                                            </ul>
                                        </div>
                                    )}
                            </div>
                            
                            
                            {/* Dropdown */}
                            <div className="relative" ref={menuRefProduk}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownProduk}
                                >
                                    produk 
                                    <svg  className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenProduk ? 'rotate-180' : ''}`}
                                        viewBox="0 0 10 6" 
                                        fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenProduk && (
                                    <div className="absolute z-10 left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Chatbot</a></li>
                                            <li><a className="flex items-center w-full px-4 py-2 hover:bg-gray-100"> ERP</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gym App</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Membership Gym tracker</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative" ref={menuRefBermita}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownBermitra}
                                >
                                    Bermitra 
                                    <svg  className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenBermitra ? 'rotate-180' : ''}`}
                                        viewBox="0 0 10 6" 
                                        fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenBermitra && (
                                    <div className="absolute z-10 left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Chatbot</a></li>
                                            <li><a className="flex items-center w-full px-4 py-2 hover:bg-gray-100"> ERP</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Gym App</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Membership Gym tracker</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Blog</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">Tentang Kami</a>
                        </div>
                    </div>
                </div>
                
                <div className="hidden md:block">
                    <button className="text-white bg-[#F94917] px-5 py-2 rounded-lg me-2">Masuk</button>
                    <button className="text-white bg-[#413D66] px-5 py-2 rounded-lg">Daftar</button>
                </div>

                {/* dimari */}
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hiddenfocus:outline-none hover:bg-gray-100 md:hidden" aria-controls="navbar-default" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} >
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            {/* ukuran MD */}
            <div className={`md:hidden w-full ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex font-medium md:p-0 mt-1 mb-4 bg-gray-200 md:space-x-8 flex-col md:border-0 bg-white">
                            <div className="relative" ref={menuRefMobileProduk}>
                            <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownMakananMobile}
                                >
                                    Makanan 
                                    <svg className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenMakananMobile ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenMakananMobile && (
                                    <div className=" bg-white">
                                        <ul className="text-sm text-gray-700">
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100"onClick={handleItemClick} >Dashboard</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            
                            {/* Dropdown */}
                            <div className="relative" ref={menuRefMobileProduk}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownProdukMobile}
                                >
                                    produk 
                                    <svg className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenProdukMobile ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenProdukMobile && (
                                    <div className=" bg-white">
                                        <ul className="text-sm text-gray-700">
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100"onClick={handleItemClick} >Dashboard</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="relative" ref={menuRefMobileBermitra}>
                                <button 
                                    className="flex items-center py-2 px-3 text-gray-900 hover:bg-gray-100"
                                    onClick={toggleDropdownBermitraMobile }
                                >
                                    Services 
                                    <svg className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${isDropdownOpenBermitraMobile ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                    </svg>
                                </button>
                                {isDropdownOpenBermitraMobile && (
                                    <div className=" bg-white">
                                        <ul className="text-sm text-gray-700">
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100"onClick={handleItemClick} >Dashboard</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                            <li><a href="#" className="block px-3 py-2 hover:bg-gray-100">Earnings</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"onClick={handleItemClick}>Pricing</a>
                            <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100"onClick={handleItemClick}>Contact</a>
                            <button className="block text-white bg-[#F94917] py-2 px-3 mx-[6px] my-[2px] rounded-lg">Download App</button>
                            <button className="block text-white bg-[#413D66] py-2 px-3 mx-[6px] my-[2px] rounded-lg">Admin gym</button>
                        </div>
                    </div>
            
        </nav>
    );
}

export default Latihan2;
