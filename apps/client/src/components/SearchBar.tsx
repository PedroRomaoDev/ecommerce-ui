import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="hidden items-center gap-2 rounded-md px-2 py-1 shadow-md ring-1 ring-gray-200 sm:flex">
      <Search className="h-4 w-4 text-gray-500" />
      <input
        id="search"
        placeholder="Search..."
        className="text-sm outline-0"
      ></input>
    </div>
  );
};

export default SearchBar;
