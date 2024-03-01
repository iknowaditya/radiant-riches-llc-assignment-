import React from "react";
import { ChevronRight } from "lucide-react";

const HeroBox = () => {
  // Arrays containing the content for the boxes in the hero section and the index boxes
  const Boxes = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];

  const IndexBoxes = [
    "Home",
    "Hosting for all",
    "Hosting",
    "Hosting6",
    "Hosting5",
  ];
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className=" flex flex-wrap gap-2 w-full py-10 ">
          {Boxes.map(
            (
              box,
              index // Mapping over the 'Boxes' array to create individual boxes.
            ) => (
              <div
                key={index}
                className="bg-white hover:bg-[#fcfbfb] transform duration-100 cursor-pointer text-[#4B5665] font-normal px-6 py-3 rounded-lg border-none text-xs sm:text-sm shadow-sm"
              >
                {box}
              </div>
            )
          )}
        </div>

        <div className="flex flex-wrap gap-2 w-full text-sm ">
          {/* Mapping over the 'IndexBoxes' array to create index links */}
          {IndexBoxes.map((ibox, index) => (
            <React.Fragment key={index}>
              <div className="hover:text-slate-900 cursor-pointer text-[#4B5665] font-normal px-1 rounded-lg border-none text-xs sm:text-sm">
                {ibox}
              </div>
              {index < IndexBoxes.length - 1 && (
                <div className="flex items-center">
                  <ChevronRight className="text-[#5C6874] w-5 h-5 " />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroBox;
