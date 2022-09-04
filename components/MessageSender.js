import React from "react";

const MessageSender = () => {
  return (
    <div className="flex justify-between text-gray-500 mt-2 p-2 leading-5">
      <div className="flex gap-x-2 pb-4 border-b-[2px] ">
        <img
          src="/assets/last-image.png"
          alt="bg-logo"
          className="object-cover rounded-full h-[60px] w-[60px]"
        />
        <div className="">
          <p className="text-[16px] text-gray-900 flex justify-between">
            <p>Samuel Stark</p>
            <span className="text-[12px]">Sept 4</span>
          </p>

          <span className="text-[12px] leading-3">
            <span className="font-semibold">Sponsored • </span>Studying in
            Germany, explore here
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
