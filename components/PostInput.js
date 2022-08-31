import React from "react";

const PostInput = () => {
  return (
    <section className="p-4 border-[1px] rounded-md shadow-md bg-white">
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/last-image.png"
          alt="bg-logo"
          className="rounded-full object-cover h-[45px] w-[45px] border-2 border-x-gray-500"
        />
        <div className="border-[1.5px] flex-1 rounded-full p-2 pl-5">Post</div>
      </div>
      <main className="flex flex-wrap gap-x-8 justify-evenly mt-2 font-semibold text-[14px] text-gray-500">
        <div>Photo</div>
        <div>Video</div>
        <div>Events</div>
        <div>Write Article</div>
      </main>
    </section>
  );
};

export default PostInput;
