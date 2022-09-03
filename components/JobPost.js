import React from "react";

const JobPost = () => {
  return (
    <section className="border-b-[1.5px] bg-white mt-4 pb-4">
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-x-2">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="object-cover h-[60px] w-[60px]"
          />
          <div className="">
            <p className="text-blue-600 text-md font-semibold hover:underline">
              Data Scientist - Machine Learning
            </p>

            <p className="text-black/75">Stark Technologies</p>
            <p className="text-[16px]">United States (Remote)</p>
            <p className="text-[12px]">$140K/Yr $160K/Yr</p>
            <p className="text-[12px] mt-1">🎯 Actively recruiting</p>
            <p className="text-[12px] mt-4">3 days ago · 🔡Easy apply</p>
          </div>
        </div>
        <span>•••</span>
      </div>
    </section>
  );
};

export default JobPost;
