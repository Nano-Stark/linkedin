import React from "react";

const LeftWidget = ({ view }) => {
  return (
    <section className="flex flex-col gap-y-2 mb-5">
      <section className="bg-white w-full sm:w-56 relative rounded-md">
        <img
          src="/assets/last-image.png"
          alt="bg-logo"
          className="object-cover h-[40px] w-full rounded-t-md"
        />
        <img
          src="/assets/last-image.png"
          alt="bg-logo"
          className="rounded-full object-cover h-[60px] w-[60px] border-2 border-x-gray-500 relative -top-5 left-0 right-0 mx-auto"
        />
        <div className="flex flex-col items-center mt-2 mb-2 font-semibold">
          <h4>Samuel Stark</h4>
          <span>--</span>
        </div>

        <div
          className={`px-4 text-[12px] border-t-2 py-4 ${
            !view && "hidden"
          } sm:block`}
        >
          <div className="flex justify-between">
            <div>
              <h6 className="text-gray-600">Connections</h6>
              <h6 className="font-semibold">Grow your network</h6>
            </div>
            <span className="text-blue-900">38</span>
          </div>
          <div className="flex justify-between">
            <h6 className="text-gray-600">Who viewed your profile</h6>
            <span className="text-blue-900">11</span>
          </div>
        </div>

        <div
          className={`px-4 text-[12px] border-t-2 py-4 ${
            !view && "hidden"
          } sm:block`}
        >
          <div className="text-gray-600 text-[12px]">
            Access to exclusive list
          </div>
          <div className="underline font-semibold">
            Get Hired fast, Try Premium and Insights
          </div>
        </div>
        <div
          className={`px-4 text-[12px] border-t-2 py-4 font-semibold ${
            !view && "hidden"
          } sm:block`}
        >
          <span>My Items</span>
        </div>
      </section>

      <section
        className={`bg-white w-full sm:w-56 rounded-md sm:sticky top-20 ${
          !view && "hidden"
        } sm:block`}
      >
        <div className="text-[12px] font-semibold text-gray-700 px-2 py-4">
          <h4 className="mb-2 text-sm">Recent</h4>
          <h6 className="truncate leading-6">
            Python's active Developers community
          </h6>
          <h6 className="truncate leading-6">
            Blockchain developers community
          </h6>
          <h6 className="truncate leading-6">IOT developers community</h6>
          <h6 className="truncate leading-6">Fintech developers community</h6>
          <h6 className="truncate leading-6">
            Blockchain developers community
          </h6>
        </div>
        <div className="text-[12px] font-semibold px-2 mt-1 text-gray-700">
          <h4 className="mb-1 text-sm text-blue-800">Groups</h4>
          <h6 className="truncate leading-6">
            Python's active Developers community
          </h6>
          <h6 className="truncate leading-6">
            Blockchain developers community
          </h6>
          <h6 className="truncate leading-6">IOT developers community</h6>
          <h6 className="truncate leading-6">Fintech developers community</h6>
          <h6 className="truncate leading-6">
            Blockchain developers community
          </h6>
        </div>

        <div className="flex justify-between text-[12px] font-semibold px-2 mt-2">
          <h4 className="mb-1 text-sm  text-blue-800">Event</h4>
          <h4 className="text-md">+</h4>
        </div>
        <div className="flex justify-between text-[12px] font-semibold px-2 mt-2">
          <h4 className="mb-1 text-sm  text-blue-800">Follow Hashtags</h4>
        </div>
        <div className="flex justify-center text-md p-4 font-semibold border-t-2">
          <h4>Discover More</h4>
        </div>
      </section>
      <>
        {view ? (
          <div
            onClick={() => setView(false)}
            className="flex items-center justify-center sm:hidden text-gray-500 font-semibold text-[14px] mt-2"
          >
            Show less
          </div>
        ) : (
          <div
            onClick={() => setView(true)}
            className="flex items-center justify-center sm:hidden text-gray-500 font-semibold text-[14px] mt-2"
          >
            Show more
          </div>
        )}
      </>
    </section>
  );
};

export default LeftWidget;
