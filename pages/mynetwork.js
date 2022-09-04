import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import NetworkWidget from "../components/NetworkWidget";

const Mynetwork = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-[#F3F2EF]">
      <Navbar path={pathname} />
      <NetworkWidget />
    </div>
  );
};

export default Mynetwork;
