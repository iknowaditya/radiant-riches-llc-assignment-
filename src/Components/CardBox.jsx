import React from "react";
import { ChevronDown } from "lucide-react";
import star from "../Assets/star.png";
import builderImg from "../Assets/builder.png";

const CardBox = (props) => {
  const {
    title,
    CardCount,
    BannerIcon,
    BannerTitle,
    MainHeading,
    SubHeading,
    MainHighlights,
    Rating,
    RatingReview,
    info,
    off,
  } = props;

  return (
    <div className="md:mx-8 mx-6 bg-white shadow-sm rounded-lg mb-8">
      <div className="main w-full h-full grid grid-cols-1 md:grid-cols-4 gap-5 relative">
        <div className=" relative flex flex-col gap-2 items-center justify-center min-h-48">
          <img
            src={builderImg}
            alt=""
            className="h-[103px] w-[141px] object-cover"
          />
          <h1 className="font-normal text-sm">{title}</h1>
        </div>

        <div className="trophy absolute top-[-15px] md:left-[-20px] left-[-17px] flex flex-col gap-2">
          <div>
            {/* Display BannerIcon and BannerTitle if available */}
            {BannerIcon && (
              <div className="IconBG rounded-r-lg bg-[#FF7724] px-1 py-2 md:px-2 flex items-center text-white text-xs md:text-sm ">
                {BannerIcon} {BannerTitle}
              </div>
            )}
          </div>
          <button className=" w-8 h-8 md:h-10 md:w-10 bg-[#FFFFFF] border border-gray-300 rounded-full">
            {CardCount}
          </button>
        </div>

        <div className="flex flex-col gap-2 p-5 col-span-2">
          <div className="font-normal text-sm text-[#4B5665] ">
            <span className=" font-bold text-base mr-2">{MainHeading}</span>
            {SubHeading}
          </div>

          <div className="">
            {off}
            <h1 className="font-bold text-base text-[#2C384A]">
              Main highlights
            </h1>
            <div className="p-2 font-normal text-[#4B5665] text-sm">
              {" "}
              {MainHighlights}
            </div>

            <button className="flex items-center text-sm font-normal text-[#1B88F4] hover:text-blue-600">
              Show More <ChevronDown className=" h-4 w-4 " />
            </button>
          </div>
        </div>
        <div className=" h-full w-full flex flex-col gap-5 justify-between items-center pb-5">
          <div className="w-[135px] h-[138px] mx-5 p-5 bg-[#F3F9FF] rounded-b-lg flex flex-col items-center justify-center text-center">
            <div className="w-full flex justify-end mr-4">{info}</div>
            <h1 className="text-4xl ">{Rating}</h1>
            <p className=" text-[#074786] text-sm font-normal py-2">
              {RatingReview}
            </p>
            <div className="flex items-center gap-1 mb-4">
              {/* Display 5-star rating icons */}
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img src={star} alt="" className="h-3 w-3" />
                ))}
            </div>
          </div>
          <div className="Submit mx-5">
            <button className="text-gray-100 w-[232px] md:w-[170px] lg:w-[200px] xl:w-[232px] h-[48px]  rounded-xl  bg-[#1B88F4] hover:ring-2 hover:ring-blue-400">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
