import Image from "next/image";

import NavbarIcon from "./NavbarIcon";
import NavSearch from "./NavSearch";

const Navbar = ({ path }) => {
  return (
    <nav className="pl-3 pr-3 pt-2 md:pt-1 w-full bg-white sticky top-0 z-30 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-5 h-10 py-5 md:py-7 ">
        <div className="flex items-center gap-x-2">
          <Image
            src="/assets/linkedin.svg"
            alt="logo"
            width={100}
            height={40}
            objectFit="contain"
            className="min-w-fit"
          />
          <NavSearch />
        </div>
        <div>
          <NavbarIcon path={path} />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
