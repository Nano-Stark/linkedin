import React from "react";
import NotificationPost from "./NotificationPost";

const NotificationWidget = () => {
  return (
    <div className="px-5 flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto pt-7 gap-x-7 pb-40">
      <section className="flex flex-col gap-y-2 mb-5">
        <section className="bg-white w-full sm:w-56 rounded-md sticky top-[90px] text-center text-[14px] border">
          <div className="flex flex-col items-center mt-1 font-semibold border-b-2 p-4">
            <h4 className="text-[16px] pb-2">Samuel Stark</h4>
            <span className="text-gray-500 font-medium text-[16px]">
              You have new notifications
            </span>
          </div>

          <div className="flex flex-col items-center p-[10px] font-semibold bg-gray-100/80 rounded-b-md ">
            <h4 className="text-gray-500 font-medium">
              Improve your notifications
            </h4>
            <span className="text-blue-600 text-[16px] mt-[2px]">
              View Settings
            </span>
          </div>
        </section>
      </section>

      <div className="flex-1 flex flex-col rounded-md bg-white">
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
        <NotificationPost />
      </div>

      <section className="hidden lg:flex flex-col gap-y-2 ">
        <section className="bg-white w-80 rounded-md px-4 sticky top-[90px]">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="object-cover w-full aspect-square"
          />
        </section>
      </section>
    </div>
  );
};

export default NotificationWidget;
