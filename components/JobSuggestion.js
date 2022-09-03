import React from "react";

const JobSuggestion = () => {
  return (
    <section className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex justify-between">
        <p>Suggestions for you</p>
        <span>✖</span>
      </div>
      <div className="flex flex-wrap gap-x-1 gap-y-1 mt-4 font-semibold text-blue-600">
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          Blockchain<span className=" text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          Web<span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          Software<span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          AI<span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          C/C++ Developer
          <span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          Python<span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
        <span className="border-[2px] border-blue-600 p-2 py-[2px] rounded-full bg-blue-600/20">
          Java Developer
          <span className="text-gray-500 text-[16px] ml-2">X</span>
        </span>
      </div>
    </section>
  );
};

export default JobSuggestion;
