import Image from "next/image";
import { useState } from "react";
import PostInput from "./PostInput";
import PostWidget from "./PostWidget.";

const FeedWidget = () => {
  const [view, setView] = useState(false);
  return (
    <div className="pl-2 pr-2 flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto pt-7 gap-x-7">
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
          className={`bg-white w-full sm:w-56 rounded-md sm:sticky top-14 ${
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

      <div className="flex-1 flex flex-col gap-y-5">
        <PostInput />
        <PostWidget />
        <PostWidget />
        <PostWidget />
        <PostWidget />
        <PostWidget />
        <PostWidget />
        <PostWidget />
        <PostWidget />
      </div>

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
        <section className="bg-white w-80 rounded-md p-4 pt-2 sticky top-14">
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
    </div>
  );
};

export default FeedWidget;
