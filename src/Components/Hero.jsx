import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <>
      <div className="max-w-[1200px] flex flex-col h-[155px]  mx-auto py-10 px-4 md:px-8">
        <h1 className="font-normal text-3xl md:text-5xl text-[#2C384A] ">
          Best Website builders in the US
        </h1>

        <div className="w-full border-b border-t mt-6 border-[#E1E4E6] flex justify-between items-center py-2">
          <div className="flex gap-4 ">
            <h3 className="flex items-center gap-1 font-normal  text-[#4B5665] sm:text-sm text-xs">
              <IoIosCheckmarkCircleOutline className="w-[20px] h-[20px] text-[#4B5665]" />
              Last Updated - February 22, 2020
            </h3>

            <h3 className="flex items-center gap-1 font-normal text-[#4B5665] sm:text-sm text-xs">
              <IoIosInformationCircleOutline className="w-[20px] h-[20px] text-[#655b4b]" />
              Advertising Disclosure
            </h3>
          </div>

          <h3 className="flex items-center justify-center text-[#727D87] hover:text-[#5a646e] font-normal sm:text-sm text-xs cursor-pointer">
            Top Relevant
            <ChevronDown className="w-6 h-6" />
          </h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
