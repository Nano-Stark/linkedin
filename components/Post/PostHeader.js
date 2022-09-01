const PostHeader = () => {
  return (
    <div>
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
    </div>
  );
};

export default PostHeader;
