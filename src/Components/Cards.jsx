import React from "react";
import CardBox from "./CardBox";
import { Trophy, Gem, Info, Check } from "lucide-react";

function Cards() {
  return (
    <>
      <div className="max-w-[1200px] py-20 mx-auto">
        {/* CardBox components for showcasing different builders */}
        <CardBox
          title="Builder 1"
          CardCount="1"
          BannerTitle="Best Choice"
          BannerIcon={<Trophy className="h-4 w-4 mr-2" />}
          MainHeading="WixPro 72-Inch Responsive Website Builder-"
          info={<Info className="text-gray-400 h-3 w-3 cursor-pointer" />}
          Rating="9.8"
          RatingReview="Exceptional"
          SubHeading="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          MainHighlights="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        />
        <CardBox
          title="Builder "
          CardCount="2"
          BannerTitle="Best Value"
          BannerIcon={<Gem className="h-4 w-4 mr-2 " />}
          MainHeading="SiteCraft 68-Inch Ultimate Web Design Studio-"
          info={<Info className="text-gray-400 h-3 w-3 cursor-pointer" />}
          Rating="9.5"
          RatingReview="Excellent"
          SubHeading="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          MainHighlights="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        />
        <CardBox
          title="Builder 1"
          CardCount="3"
          MainHeading="WixPro 72-Inch Responsive Website Builder-"
          Rating="9.3"
          RatingReview="Exceptional"
          SubHeading="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          MainHighlights="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        />
        <CardBox
          title="CDK"
          CardCount="4"
          MainHeading="CDK Resposive Builder:"
          Rating="9.1"
          RatingReview="Very Good"
          SubHeading="An extensive library of widgets and apps, and detailed step-by-step guides"
          off={
            <span className="bg-gray-100 rounded-md text-xs p-1">26% Off</span>
          }
          // Additional details and highlights for CDK builder
          MainHighlights={
            <div className="">
              <div className=" mx-2 my-2 p-3 bg-[#FFF4ED] rounded-lg flex flex-col gap-2 text-sm shadow-sm">
                <div className=" flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white text-blue-500">
                    9.9
                  </div>
                  <p>Building Responsive</p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white text-blue-500">
                    8.9
                  </div>
                  <p>Cool</p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className="p-2 rounded-md bg-white text-blue-500">
                    8.9
                  </div>
                  <p>Docs</p>
                </div>
              </div>
              <div className=" flex flex-col gap-2 text-sm my-2">
                <h1 className=" font-medium">Why we love it</h1>
                <div className=" flex items-center gap-2">
                  <div className=" rounded-full bg-blue-50 p-1 ">
                    <Check className=" h-4 w-4 text-blue-500 font-bold" />
                  </div>
                  <p>Documentation</p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className=" rounded-full bg-blue-50 p-1 ">
                    <Check className=" h-4 w-4 text-blue-500" />
                  </div>
                  <p>Easy Use</p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className=" rounded-full bg-blue-50 p-1">
                    <Check className=" h-4 w-4 text-blue-500" />
                  </div>
                  <p>Out Of Box</p>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}

export default Cards;
