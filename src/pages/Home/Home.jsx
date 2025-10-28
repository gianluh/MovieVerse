
import { NavLink } from "react-router";
import SearchInput from "./SearchInput";
import SubmitButton from "./SubmitButton";

export default function Home({ searchInput, setSearchInput }) {
  return (
    <div className="w-full flex items-center justify-center gap-3 mt-65 md:flex-col lg:mt-55">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <SubmitButton />
    </div>
  );
}
