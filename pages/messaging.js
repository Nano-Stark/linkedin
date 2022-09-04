import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import MessageWidget from "../components/MessageWidget";

const Messaging = () => {
  const { pathname } = useRouter();
  return (
    <div className="bg-[#F3F2EF] overflow-hidden h-screen">
      <Navbar path={pathname} />
      <MessageWidget />
    </div>
  );
};

export default Messaging;
