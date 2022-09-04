import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import FeedWidget from "../components/FeedWidget";

const Feed = () => {
  const { pathname } = useRouter();
  // console.log("router", pathname);
  return (
    <div className="bg-[#F3F2EF]">
      <Navbar path={pathname} />
      <FeedWidget />
    </div>
  );
};

export default Feed;
