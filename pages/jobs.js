import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import JobWidget from "../components/JobWidget";

const Jobs = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-[#F3F2EF]">
      <Navbar path={pathname} />
      <JobWidget />
    </div>
  );
};

export default Jobs;
