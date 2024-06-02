import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center">
      <SearchIcon className="absolute z-30 ml-4 text-primary placeholder:font-siliguri" />
      <Input
        className="relative pl-12 max-w-[400px] min-w-[400px] w-full"
        name="search"
        placeholder="আপনার কাঙ্খিত কোর্সটি সার্চ করুন"
      />
    </div>
  );
};

export default Search;
