import React, { useState, useRef, useEffect, useCallback } from "react";
import Kalorize from "../../assets/Kalorize.png";

function Latihan() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef = useRef(null);
    const subDropdownRef = useRef(null);

    // Toggle untuk dropdown utama
    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        setIsDropdownOpen2(false); // Tutup sub-dropdown saat main dropdown dibuka/tutup
    };
    

    // Toggle untuk dropdown kedua (nested dropdown)
    const toggleDropdown2 = () => {
        setIsDropdownOpen2((prev) => !prev);
    };

    // Handle klik di luar dropdown agar bisa menutupnya
    const handleClickOutside = useCallback((event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            subDropdownRef.current && !subDropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
            setIsDropdownOpen2(false);
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
        <div className="flex justify-start md:space-x-9">
          <div>
            <a href="#">
              <img src={Kalorize} alt="Kalorize Logo" />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className=" hidden w-full bg-dark md:block md:w-auto" id="navbar-multi-level">
            <div className="flex font-medium p-4 md:p-0 mt-4 bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white">
              {/* Menu */}
              <div className="w-auto flex-initial">
                <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:p-0">
                  Home
                </a>
              </div>

              {/* Dropdown */}
              <div>
                <button
                  id="dropdownNavbarLink"
                  ref={dropdownRef}
                  className="flex items-center justify-between relative w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={toggleDropdown}
                >
                  Dropdown
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          Dashboard
                        </a>
                      </li>

                      {/* Nested Dropdown */}
                      <li>
                        <button
                          id="doubleDropdownButton"
                          onClick={toggleDropdown2}
                          ref={subDropdownRef}
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                        >
                          Dropdown
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                          </svg>
                        </button>

                        {isDropdownOpen2 && (
                          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                            <ul className="py-2 text-sm text-gray-700">
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                  My downloads
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <a href="#" className="block text-gray-900 hover:bg-gray-100">
                  Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Button Login/Signup */}
        <div className="hidden md:block">
          <button className="text-white bg-[#F94917] font-medium rounded-lg text-sm px-5 py-2.5 me-2">Masuk</button>
          <button className="text-white bg-[#413D66] font-medium rounded-lg text-sm px-5 py-2.5 me-2">Daftar</button>
        </div>
        <button
            type="button"
            className="inline-flex items-center w-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
      </div>
      <div className="md:hidden">
      <div className="w-full bg-dark md:block md:w-auto" id="navbar-multi-level">
            <div className=" font-medium p-4 md:p-0 mt-4 bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white">
              {/* Menu */}
              <div className="w-auto flex-initial">
                <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:p-0">
                  Home
                </a>
              </div>
              {/* Dropdown */}
              <div>
                <button
                  id="dropdownNavbarLink"
                  ref={dropdownRef}
                  className="flex items-center justify-start relative w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={toggleDropdown}
                >
                  Dropdown
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          Dashboard
                        </a>
                      </li>

                      {/* Nested Dropdown */}
                      <li>
                        <button
                          id="doubleDropdownButton"
                          onClick={toggleDropdown2}
                          ref={subDropdownRef}
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                        >
                          Dropdown
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                          </svg>
                        </button>

                        {isDropdownOpen2 && (
                          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                            <ul className="py-2 text-sm text-gray-700">
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                  My downloads
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <a href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                  Services
                </a>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Latihan;
