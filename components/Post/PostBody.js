import React from "react";
import PostHeader from "./PostHeader";

const PostBody = ({ backdrop }) => {
  return (
    <>
      {!backdrop ? (
        <div>
          <PostHeader />
          <p className="text-gray-800 text-[14px] mt-2">
            Qubits Ventures is launching a pitch competition for quantum and
            photonics innovation. If you have a world changing idea, a proof of
            concept solution or you are a budding quantum / photonics startup
            company, I encourage you to apply. Here is the link:
            https://lnkd.in/gUn3fBiF. Let's accelerate solving complex global
            problems together!
          </p>
          {!backdrop && (
            <img
              src="/assets/last-image.png"
              alt="bg-logo"
              className="object-cover w-[100%]"
            />
          )}
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
        </div>
      ) : (
        <section className="flex h-[75%]">
          <div className="bg-gray-500 grid place-items-center rounded-tl-2xl rounded-bl-2xl">
            <img
              src="/assets/last-image.png"
              alt="bg-logo"
              className="object-cover w-[100%]"
            />
          </div>
          <div className="bg-white rounded-tr-2xl rounded-br-2xl max-w-[360px] p-5">
            <PostHeader />
            <p className="text-gray-800 text-[14px] mt-2">
              Qubits Ventures is launching a pitch competition for quantum and
              photonics innovation. If you have a world changing idea, a proof
              of concept solution or you are a budding quantum / photonics
              startup company, I encourage you to apply. Here is the link:
              https://lnkd.in/gUn3fBiF. Let's accelerate solving complex global
              problems together!
            </p>
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
          </div>
        </section>
      )}
    </>
  );
};

export default PostBody;
