

export default function SearchInput({ searchInput, setSearchInput}) {
  return (
    <input
      className="bg-[#D6C5A0] w-3/5 p-5 rounded-4xl drop-shadow-2xl shadow-[#876F3A] outline-none focus:ring-4 focus:ring-[#876F3A] focus:bg-[#E9DFC2] text-xl placeholder:text-sm placeholder:text-[#5C4B2E] placeholder:opacity-50 focus:placeholder-transparent md:p-7 md:placeholder:text-xl xl:p-10 xl:rounded-full xl:placeholder:text-2xl transition [&::-webkit-search-cancel-button]:hidden"
      type="search"
      name="search"
      id="search"
      placeholder='Harry Potter and the Prisoner of Azkaban'
      onChange={(e) => setSearchInput(e.target.value)}
      value={searchInput}
      aria-label="search input"
    />
  );
}
