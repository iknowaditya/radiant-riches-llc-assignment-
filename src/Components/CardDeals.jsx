import React from "react";
import Builder from "../Assets/builder.png";

function CardDeals() {
  return (
    <div className="flex flex-col gap-2 w-full bg-white rounded-xl overflow-hidden">
      <div className=" object-contain w-full  h-48 flex flex-col items-center justify-center">
        <img src={Builder} alt="" className=" w-40 h-28 object-cover" />
      </div>
      <div className=" flex flex-col gap-2 p-5 ">
        <div className=" flex gap-2 flex-wrap text-xs w-full ">
          <span className=" rounded-lg p-2 bg-secondary text-[#074786] bg-gray-100">
            20% Off
          </span>
          <div className=" rounded-lg p-2 bg-secondary text-[#074786] bg-gray-100">
            Limited Time
          </div>
        </div>

        <h1 className="text-lg font-semibold text-center">Webbuilder 1</h1>
        <p className=" text-muted-foreground">
          Computer Modern clasic with wix support
        </p>
        <div className=" flex items-end gap-2">
          <div className=" text-lg">$39.96</div>
          <div className=" text-xs text-muted-foreground pt-2 pb-1">
            $49.96 <span className=" text-red-500">(20% Off)</span>
          </div>
        </div>
        <button className=" text-gray-100 w-full h-[48px]  rounded-xl  bg-[#1B88F4] hover:ring-2 hover:ring-blue-400">
          View Deal
        </button>
      </div>
    </div>
  );
}

export default CardDeals;
