import { useState } from "react";
import LeftWidget from "./LeftWidget";
import PostFeed from "./PostFeed";
import RightWidget from "./RightWidget";

const FeedWidget = () => {
  const [view, setView] = useState(false);
  return (
    <div className="px-5  flex flex-col sm:flex-row w-full max-w-6xl justify-between mx-auto pt-7 gap-x-7">
      <LeftWidget view={view} />

      <PostFeed />

      <RightWidget />
    </div>
  );
};

export default FeedWidget;
