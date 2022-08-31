import Image from "next/image";

import NavbarIcon from "./NavbarIcon";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <nav className="pl-3 pr-3 py-2 md:py-1 w-full bg-white sticky top-0 z-30">
      <nav className="flex justify-between items-center max-w-6xl mx-auto h-10 py-5 md:py-7 ">
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
          <NavbarIcon />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
