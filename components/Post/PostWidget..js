import React from "react";
import Backdrop from "../Feed/Backdrop";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

const PostWidget = () => {
  const backdrop = false;
  return (
    <section className="border-[1.5px] bg-white rounded-md shadow-md p-4">
      <PostBody backdrop={backdrop} />
      {backdrop && (
        <Backdrop>
          <PostBody backdrop={backdrop} />
        </Backdrop>
      )}
    </section>
  );
};

export default PostWidget;
