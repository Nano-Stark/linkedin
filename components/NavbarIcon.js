import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export const NavIcon = ({ Icon, text, path, _path }) => {
  const router = useRouter();
  const handleRoute = () => {
    router.push(_path);
  };
  // console.log(path);
  return (
    <div
      className={`flex flex-col items-center text-gray-800/80 hover:text-gray-900 pb-2  ${
        path === _path ? "border-b-2 border-gray-800/80" : ""
      } hover:cursor-pointer hover:text-black `}
      onClick={handleRoute}
    >
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      <h6 className="text-[12px] font-semibold hidden md:block">{text}</h6>
    </div>
  );
};

const NavbarIcon = ({ path }) => {
  return (
    <div className="flex gap-x-5 sm:gap-x-7 md:gap-x-5">
      <NavIcon Icon={HomeIcon} text="Home" path={path} _path="/feed" />
      <NavIcon
        Icon={UserGroupIcon}
        text="My Networks"
        path={path}
        _path="/mynetwork"
      />
      <NavIcon Icon={BriefcaseIcon} text="Jobs" path={path} _path="/jobs" />
      <NavIcon
        Icon={ChatBubbleOvalLeftEllipsisIcon}
        text="Messaging"
        path={path}
        _path="/messaging"
      />
      <NavIcon
        Icon={BellIcon}
        text="Notifications"
        path={path}
        _path="/notifications"
      />
    </div>
  );
};

export default NavbarIcon;
