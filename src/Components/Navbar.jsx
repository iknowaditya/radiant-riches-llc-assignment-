import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const handleClick = () => [setIsOpen(!isOpen)];
  return (
    <div className="bg-[#212731] w-full">
      <header className="max-w-[1224px] flex justify-around items-center mx-auto p-5 px-5 md:px-8">
        <h1 className="text-white font-bold text-xl">Logo.</h1>

        <div className="px-2 py-[2px] rounded-lg bg-white flex items-center gap-3 text-primary text-sm">
          <IoSearchOutline className=" w-[24px] h-[24px] cursor-pointer" />
          <input
            type="text"
            className="w-[100px] sm:w-[180px] md:w-[258px] h-[37px] rounded-lg  bg-white  border-none"
          />
        </div>

        <div className=" hidden md:block">
          <ul className="flex gap-16 font-normal text-[14px] leading-5">
            <li className=" text-[#D1D6DA] hover:text-[#bac1c6] cursor-pointer">
              Categories
            </li>
            <li className="text-[#D1D6DA] hover:text-[#bac1c6] cursor-pointer">
              Website Builders
            </li>
            <li className="text-[#D1D6DA] hover:text-[#bac1c6] cursor-pointer">
              Today's deals
            </li>
          </ul>
        </div>

        {/* Mobile menu icon visible on smaller screens */}
        <div
          className="hamburger text-white md:hidden cursor-pointer"
          onClick={handleClick}
        >
          {/* Hamburger icon with three lines */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu text-white w-[24px] h-[24px]"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          {isOpen && (
            <ul className="absolute text-center top-[80px] left-0 bg-[#2e3540] w-full text-[#D1D6DA] font-normal text-[14px] leading-5 p-5 rounded-xl">
              <li className="p-2 hover:underline hover:bg-gray-700 rounded-lg">
                Categories
              </li>
              <li className="p-2 hover:underline hover:bg-gray-700 rounded-lg">
                Website Builders
              </li>
              <li className="p-2 hover:underline hover:bg-gray-700 rounded-lg">
                Today's deals
              </li>
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
