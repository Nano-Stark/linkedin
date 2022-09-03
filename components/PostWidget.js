import React from "react";

const PostWidget = () => {
  return (
    <section className="border-[1.5px] bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between text-gray-500">
        <div className="flex gap-x-2">
          <img
            src="/assets/last-image.png"
            alt="bg-logo"
            className="rounded-full object-cover h-[60px] w-[60px]"
          />
          <div className="text-[12px] ">
            <p>
              <span className="text-[14px] text-black font-semibold">
                Samuel Stark
              </span>{" "}
              • Following
            </p>
            <p>10M+ Content views | 10K Followers | Tech Evangelist....</p>
            <p>29m • Edited • 🌍 </p>
          </div>
        </div>
        <span>•••</span>
      </div>
      <div className="text-blue-600 font-bold text-[12px] mt-4">
        #Robot #Deep neural net
      </div>
      <p className="text-gray-800 text-[14px] mt-2">
        Qubits Ventures is launching a pitch competition for quantum and
        photonics innovation. If you have a world changing idea, a proof of
        concept solution or you are a budding quantum / photonics startup
        company, I encourage you to apply. Here is the link:
        https://lnkd.in/gUn3fBiF. Lets accelerate solving complex global
        problems together!
      </p>
      <img
        src="/assets/last-image.png"
        alt="bg-logo"
        className="object-cover w-[100%]"
      />
      <div className="flex justify-between items-center pt-2 text-[12px] text-gray-500">
        <span>👍 2</span>
        <span>56 comments • 11 shares</span>
      </div>
      <section className=" mt-2 border-t-[1.5px]">
        <div className="flex justify-evenly items-center pt-2.5 text-gray-500 text-[14px] font-semibold">
          <div>
            <span>Like</span>
          </div>
          <div>
            <span>Comment</span>
          </div>
          <div>
            <span>Share</span>
          </div>
          <div>
            <span>Send</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PostWidget;
