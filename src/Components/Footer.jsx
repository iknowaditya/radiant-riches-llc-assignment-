import React from "react";
import { ChevronDown } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#212731] w-full">
      <div className="max-w-[1224px] mx-auto py-20 px-5 md:px-8 text-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <h1 className=" text-lg font-semibold  uppercase">Categories</h1>

            <div className="mt-4  text-[#B6BDC4]">
              <a href="/">
                <ul className="flex flex-col gap-2">
                  <li>Web Builder</li>
                  <li>Hosting</li>
                  <li>Data Center</li>
                  <li>Robotic-Automation</li>
                </ul>
              </a>
            </div>
          </div>
          <div>
            <h1 className=" text-lg font-semibold  uppercase">Contact</h1>

            <div className=" mt-4 text-[#B6BDC4]">
              <a href="/">
                <ul className="flex flex-col gap-2">
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms Of Service</li>
                  <li>Categories</li>
                  <li>About</li>
                </ul>
              </a>
            </div>
          </div>

          <div>
            <button className="text-[#D1D6DA] flex justify-center items-center mt-10">
              United States <ChevronDown className=" h-4 w-4 ml-2 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
