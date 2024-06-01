import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="w-[400px] flex items-center">
      <SearchIcon className="absolute z-30 ml-4 text-primary placeholder:font-siliguri" />
      <Input
        className="relative pl-12"
        name="search"
        placeholder="আপনার কাঙ্খিত কোর্সটি সার্চ করুন"
      />
    </div>
  );
};

export default Search;
