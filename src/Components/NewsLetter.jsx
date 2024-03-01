import React from "react";

function NewsLetter() {
  return (
    <div className="max-w-[1200px] py-10 mx-auto px-4 md:px-8">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 py-20">
        <h1 className=" text-3xl md:text-4xl text-[#5C6874]">
          Sign up and get exclusive special deals
        </h1>

        <div className=" hover:ring-2 hover:ring-blue-500 w-full h-14 rounded-lg  overflow-hidden flex items-center">
          <input
            type="text"
            className=" h-full w-full outline-none border-none bg-white p-2  flex-1"
          />
          <button className=" h-full  bg-blue-500 text-white w-fit py-2 px-4">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
