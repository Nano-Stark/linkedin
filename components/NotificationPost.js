import React from "react";

const JobPost = () => {
  return (
    <section className="border-b-[1.5px] bg-white p-4 px-6 rounded-t-md">
      <div className="flex justify-between text-gray-500 mt-2">
        <div className="flex gap-x-2">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="object-cover h-[60px] w-[60px]"
          />
          <div className="">
            <p className="text-[14px] text-gray-900">
              You can also use variant modifiers to target media queries like
              responsive breakpoints, dark mode, prefers-reduced-motion, and
              more.
            </p>
            <p className="text-[12px] mt-1">53 Reactions • 2 Comments</p>
          </div>
        </div>
        <div>
          <div className="text-[12px]">7h</div>
          <span>•••</span>
        </div>
      </div>
    </section>
  );
};

export default JobPost;
