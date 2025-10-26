
export default function SearchInput({ searchInput, setSearchInput, placeholder = "", autoFocus = false }) {
  return (
    <input
      className="bg-[#D6C5A0] w-3/5 p-5 rounded-3xl drop-shadow-2xl shadow-[#876F3A]
             outline-none focus:ring-4 focus:ring-[#876F3A] focus:bg-[#E9DFC2] text-xl"
      type="search"
      name="search"
      id="search"
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={(e) => setSearchInput(e.target.value)}
      value={searchInput}
      aria-label="search input"
    />
  );
}
