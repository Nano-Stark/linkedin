import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const NavSearch = () => {
  return (
    <div className="group flex md:hover:border-2 hover:w-[360px]  border-blue-800 rounded-md items-center bg-[#EEF3F8] px-3 py-2 transition delay-[10000] hover:ease-in hover:duration-[100000]">
      <MagnifyingGlassIcon className="h-5 w-5 md:w-5 md:h-5 mr-1 font-bold" />
      <input
        type="search"
        placeholder="Search..."
        className="focus:outline-none focus:w-[360px] bg-[#EEF3F8] hidden group-hover:block  md:block"
      />
    </div>
  );
};

export default NavSearch;
