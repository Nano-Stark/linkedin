import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import NotificationWidget from "../components/NotificationWidget";

const Notifications = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-[#F3F2EF] h-full">
      <Navbar path={pathname} />
      <NotificationWidget />
    </div>
  );
};

export default Notifications;
