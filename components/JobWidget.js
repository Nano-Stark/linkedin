import Image from "next/image";
import { useState } from "react";
import JobPost from "./JobPost";
import JobSuggestion from "./JobSuggestion";

const JobWidget = () => {
  return (
    <div className="px-5 flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto pt-7 gap-x-7 pb-40">
      <section className=" flex flex-col gap-y-2">
        <div className="w-full bg-white pt-4 pb-4 text-gray-800 font-semibold sm:w-56  shadow-md rounded-lg">
          <div className="flex gap-x-2 py-3 px-4 pl-5 text-gray-800 font-semibold">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5 ">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5 ">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
          <div className="flex gap-x-2 py-3 px-4 pl-5">
            <span>🎁</span>
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
          </div>
        </div>
        <div className="border border-blue-600 text-blue-600 font-semibold py-2 text-center rounded-full mb-4">
          ✍ post a free job
        </div>
      </section>

      <div className="flex-1 flex flex-col rounded-md">
        <JobSuggestion />
        <main className="bg-white p-4 rounded-lg">
          <JobPost />
          <JobPost />
          <JobPost />
          <JobPost />
        </main>
      </div>

      <section className=" hidden lg:flex flex-col gap-y-2">
        <section className="bg-white w-80 rounded-md p-4 pt-2 sticky top-[92px]">
          <p className="text-[16px] font-semibold mt-4">Job experience</p>

          <section className="flex flex-col pt-1 text-gray-600 text-[12px]">
            <p>Stark, boost your search with Premium</p>
            <div className="flex gap-x-3 mt-3 p-2 items-center justify-between hover:bg-gray-200/30">
              <p className="font-bold text-black/70 text-sm">
                I want to improve my resume
              </p>
              <img
                src="/assets/last-image.png"
                alt="bg-logo"
                className="object-cover h-[60px] w-[60px] rounded-md"
              />
            </div>
            <p className="font-normal text-[14px] pt-5 text-gray-800">
              Explore our curated guide of expert-led courses, such as how to
              improve your resume and grow your network, to help you land your
              next opportunity.
            </p>
            <p className="hover:underline text-gray-500 mt-1 mb-2 hover:text-blue-600 text-[14px] font-bold">
              Show more ➡
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default JobWidget;
