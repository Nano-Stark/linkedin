import React from "react";

const MessageBody = () => {
  return (
    <div>
      <div className="flex justify-between items-center border-b mb-2 p-2 px-4 ">
        <div className="text-[12px]">
          <p className="text-[14px] font-bold">Samuel Stark</p>
          <p>DL/RL, IOT Blockchain artifacts</p>
        </div>

        <div>
          <span className="ml-4">🖋🖊</span>
        </div>
      </div>
      <div className="flex justify-between text-[12px] px-4">
        <p>Sponsored</p>
        <p>Sept 4</p>
      </div>
      <section className="border-b-[1.5px] bg-white p-4 px-6 rounded-t-md">
        <div className="flex justify-between text-gray-500 mt-2">
          <div className="flex gap-x-2">
            <img
              src="/assets/last-image.png"
              alt="bg-logo"
              className="object-cover rounded-full h-[60px] w-[60px]"
            />
            <div className="">
              <p className="text-[14px] text-gray-900">
                <p className="text-[16px]">Samuel Stark</p>
                <p>Dear user,</p>
                You can also use variant modifiers to target media queries like
                responsive breakpoints, dark mode, prefers-reduced-motion, and
                more. You can also use variant modifiers to target media queries
                like responsive breakpoints, dark mode, prefers-reduced-motion,
                and more. You can also use variant modifiers to target media
                queries like responsive breakpoints, dark mode,
                prefers-reduced-motion, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessageBody;
