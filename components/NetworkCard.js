import React from "react";

const NetworkCard = ({ follow }) => {
  return (
    <section
      className={`bg-white w-full sm:w-[48%] lg:w-[32%] ${
        follow && " sm:[20%] lg:w-[24%]"
      } rounded-md shadow-md hover:shadow-xl border-[1.05px] h-[320px] mt-2 `}
    >
      <img
        src="/assets/last-image.png"
        alt="bg-logo"
        // width="30%"
        className="aspect-square w-full h-[70px] rounded-t-md"
      />
      <img
        src="/assets/last-image.png"
        alt="bg-logo"
        className={`rounded-full  object-cover h-[60px] w-[60px] relative ${
          !follow && "-top-9 left-4 right-0"
        } ${follow && "left-0 right-0 mx-auto h-[80px] w-[80px] -top-12"}`}
      />
      <div
        className={`p-4 -mt-8 h-[60%] ${
          follow && "-mt-[52px] text-center"
        } text-gray-500 relative`}
      >
        <h6 className="font-semibold">Samuel Stark</h6>
        <p className="">Full stack web developer | React</p>
        <p className="text-[12px]">
          Talks about #blockchain, #programming, #backend, #golang
        </p>
        <button
          className={`border-[1.08px] border-blue-700 shadow-md text-blue-700 hover:border-[2px] h-[30px] hover:bg-blue-400/40 font-semibold text-base rounded-full w-[80%] px-6 mx-auto 
            absolute left-0 right-0 top-[90%]
          `}
        >
          Follow
        </button>
      </div>
    </section>
  );
};

export default NetworkCard;
