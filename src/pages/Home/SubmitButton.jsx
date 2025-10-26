
export default function SubmitBTN() {
  return (
    <button
      type="submit"
      aria-label="Search"
      className="group inline-flex items-center gap-2 rounded-3xl px-6 py-3 hover:cursor-pointer bg-[#876F3A] text-[#F7F0E0] font-semibold tracking-wide shadow-lg shadow-[#876F3A]/40 ring-1 ring-[#D6C5A0]/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:ring-[#D6C5A0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D6C5A0]/60 focus-visible:ring-offset-2"
    >
      <i className="fa fa-search w-5 h-5 pt-1 opacity-90 group-hover:opacity-100 select-none"></i>
      <span className="hidden sm:inline">Search</span>
      <span className="sr-only">Search</span>
    </button>
  );
}
