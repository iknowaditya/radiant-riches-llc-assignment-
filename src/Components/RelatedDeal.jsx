import React from "react";
import CardDeals from "./CardDeals";

function RelatedDeal() {
  return (
    <div className="max-w-[1224px] mx-auto flex flex-col py-5 px-4 md:px-8">
      <h1 className="font-normal text-3xl md:text-5xl text-[#2C384A]">
        Related deals you might like for
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-10">
        {/* Mapping over an array to create multiple instances of CardDeals */}
        {Array.from({ length: 3 }).map((_, index) => (
          <CardDeals key={index} />
        ))}
      </div>
    </div>
  );
}

export default RelatedDeal;
