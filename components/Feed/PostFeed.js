import PostInput from "../Post/PostInput";
import PostWidget from "../Post/PostWidget.";
import Backdrop from "./Backdrop";

const PostFeed = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-5 min-w-[320px]">
      <Backdrop />
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
  );
};

export default PostFeed;
