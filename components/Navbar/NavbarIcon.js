import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  HomeIcon,
} from "@heroicons/react/20/solid";

export const NavIcon = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center text-gray-600 hover:text-black">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      <h6 className="text-[12px] font-semibold hidden md:block">{text}</h6>
    </div>
  );
};

const NavbarIcon = ({ searchbox }) => {
  console.log(searchbox);
  return (
    <>
      {searchbox ? (
        <div></div>
      ) : (
        <div className="flex gap-x-5 sm:gap-x-7 md:gap-x-5">
          <NavIcon Icon={HomeIcon} text="Home" />
          <NavIcon Icon={UserGroupIcon} text="My Networks" />
          <NavIcon Icon={BriefcaseIcon} text="Jobs" />
          <NavIcon Icon={ChatBubbleOvalLeftEllipsisIcon} text="Messaging" />
          <NavIcon Icon={BellIcon} text="Notifications" />
        </div>
      )}
    </>
  );
};

export default NavbarIcon;
