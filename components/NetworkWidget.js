import React, { useState } from "react";
import NetworkCard from "./NetworkCard";

const NetworkWidget = () => {
  const [view, setView] = useState(true);
  return (
    <section className="px-5 flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto pt-7 gap-x-7 text-gray-500">
      <div className="bg-white rounded-lg shadow-md w-full sm:w-56 xl:w-[250px] h-fit border-b-[1.02px] mb-2">
        <div className="w-full border-b-[1.02px]">
          <p className="text-black font-semibold pt-4 pl-4">
            Manage my network
          </p>
          <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
            <div>
              <h6 className="text-gray-600">Connections</h6>
            </div>
            <span>38</span>
          </div>
          {view && (
            <>
              {" "}
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
              <div className="flex justify-between py-2 px-4 hover:bg-gray-300/20 text-gray-500">
                <div>
                  <h6 className="text-gray-600">Connections</h6>
                </div>
                <span>38</span>
              </div>
            </>
          )}
          {view ? (
            <div
              onClick={() => setView(false)}
              className="flex text-gray-600 font-semibold text-[16px] mt-2 hover:bg-gray-400/50 p-2 w-fit rounded-lg ml-4 mb-2"
            >
              Show less
            </div>
          ) : (
            <div
              onClick={() => setView(true)}
              className="flex text-gray-600 font-semibold text-[16px] mt-2 hover:bg-gray-400/50 p-2 w-fit rounded-lg ml-4 mb-2"
            >
              Show more
            </div>
          )}
        </div>

        <img
          src="/assets/last-image.png"
          alt="bg-logo"
          className="object-cover w-full aspect-square border-b-[1.02px] mb-2"
        />
        <div className="px-4 text-center mt-4 border-b-[1.02px]">
          <p className="text-black">Add personal Contacts</p>
          <p className="text-[12px] mb-2">
            We will periodically import and store your contacts to help you and
            others connect. You choose who to connect to and who to invite.
            Learn more
          </p>
          <p className="text-black border border-black text-[14px]  hover:border-gray-500 hover:border-[1px] text-left p-2 pl-2 rounded-md">
            stark007@gmail.com
          </p>
          <button className="border-blue-600 border mt-2 py-1 px-4 rounded-full text-blue-500 hover:bg-blue-500/10 font-semibold text-[16px]">
            continue
          </button>
          <p className="text-[14px] hover:text-blue-500 hover:underline mt-4 mb-4">
            More options
          </p>
        </div>
      </div>

      <section className="flex-1 w-full sm:w-[60vw] flex flex-wrap">
        <div className=" w-full pb-2 rounded-md shadow-md bg-white">
          <nav className="flex p-5 justify-between border-b-[1.2px] border-gray-200">
            <h6>Invitation</h6>
            <h6>Manage</h6>
          </nav>
          <nav className="flex justify-between items-center mt-1 px-5">
            <section className="flex gap-x-2 pt-3">
              <img
                src="/assets/last-image.png"
                alt="bg-logo"
                className="rounded-full object-cover h-[70px] w-[70px]"
              />
              <div>
                <h4 className=" text-sm font-semibold">GitHub</h4>
                <p className="text-sm font-medium">
                  Company • Computer Software
                </p>
                <p className=" ">+ Follow</p>
              </div>
            </section>
            <section className="flex gap-x-7">
              <p>Ignore</p>
              <p>Accept</p>
            </section>
          </nav>
        </div>
        <section className="flex-1 flex items-center justify-center flex-wrap gap-x-2 w-full bg-white mt-4 rounded-md shadow-md p-3">
          <NetworkCard />
          <NetworkCard />
          <NetworkCard />
          <NetworkCard />
          <NetworkCard />
          <NetworkCard />
          <NetworkCard follow />
          <NetworkCard follow />
          <NetworkCard follow />
          <NetworkCard follow />
        </section>
      </section>
    </section>
  );
};

export default NetworkWidget;
