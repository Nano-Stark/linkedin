import React from "react";

const RightWidget = () => {
  return (
    <section className="hidden lg:flex flex-col gap-y-2 ">
      <section className="bg-white w-80 relative rounded-md p-4">
        <header className="flex justify-between">
          <h4 className="font-semibold">Add to your feed</h4>
          <span>✨</span>
        </header>
        <section className="flex gap-x-2 pt-3">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="rounded-full object-cover h-[45px] w-[45px] border-2 border-x-gray-500"
          />
          <div>
            <h4 className=" text-sm font-semibold">GitHub</h4>
            <p className="text-sm font-medium">Company • Computer Software</p>
            <button className="mt-1 border-2 py-1.5 px-4 rounded-full">
              + Follow
            </button>
          </div>
        </section>
        <section className="flex gap-x-2 pt-3">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="rounded-full object-cover h-[45px] w-[45px] border-2 border-x-gray-500"
          />
          <div>
            <h4 className=" text-sm font-semibold">GitHub</h4>
            <p className="text-sm font-medium">Company • Computer Software</p>
            <button className="mt-1 border-2 py-1.5 px-4 rounded-full">
              + Follow
            </button>
          </div>
        </section>
        <section className="flex gap-x-2 pt-3">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="rounded-full object-cover h-[45px] w-[45px] border-2 border-x-gray-500"
          />
          <div>
            <h4 className=" text-sm font-semibold">GitHub</h4>
            <p className="text-sm font-medium">Company • Computer Software</p>
            <button className="mt-1 border-2 py-1.5 px-4 rounded-full">
              + Follow
            </button>
          </div>
        </section>
      </section>
      <section className="bg-white w-80 rounded-md p-4 pt-2 sticky top-20">
        <div className="flex justify-end">
          <span className="text-sm">Ad ...</span>
        </div>
        <section className="flex flex-col items-center pt-1 text-gray-600 text-[12px]">
          Stark, boost your search with Premium
          <div className="flex gap-x-3 pt-3">
            <img
              src="/assets/last-image.png"
              alt="bg-logo"
              className="rounded-full object-cover h-[60px] w-[60px]"
            />
            <img
              src="/assets/last-image.png"
              alt="bg-logo"
              className="object-cover h-[60px] w-[60px] rounded-md"
            />
          </div>
          <p className="font-normal text-base text-center pt-5 text-gray-800">
            See who's view your profile in the last 90 days
          </p>
          <div className="font-semibold text-base mt-3 py-2 px-5 text-blue-900 border-2 border-blue-900 rounded-full">
            <button>Try for free!</button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default RightWidget;
