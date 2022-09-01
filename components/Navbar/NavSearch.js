import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const NavSearch = ({}) => {
  return (
    <div className="flex hover:border-2  border-blue-800 rounded-md items-center bg-[#EEF3F8] px-3 py-1 md:hover:w-[300px] ">
      <MagnifyingGlassIcon className="h-5 w-5 md:w-5 md:h-5 mr-1 font-bold" />
      <input
        type="search"
        placeholder="Search..."
        className="focus:outline-none hover:focus:outline-1 w-full bg-[#EEF3F8] hidden md:block"
      />
    </div>
  );
};

export default NavSearch;
