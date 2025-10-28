export default function FilmDetails() {
  return (
    <div
      className="bg-[#D6C5A0] text-[#644e1d] rounded-3xl p-6 mt-3 drop-shadow-2xl shadow-[#876F3A] ring-1 ring-[#876F3A]/30 lg:h-auto lg:mt-35 lg:w-5/16 lg:self-start 2xl:mt-55"
    >
      <div className="flex items-baseline justify-between gap-4 ">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          The Prisoner of Azkaban
        </h2>
        <span className="px-2.5 py-0.5 rounded-full text-xs sm:text-sm bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          Fantasy
        </span>
      </div>

      <p
        id="author"
        className="mt-2 text-sm uppercase tracking-wider text-[#876F3A] font-semibold"
      >
        Author: J.K. Rowling
      </p>

      <p className="mt-4 text-base leading-relaxed">
        Three friends at a wizarding school confront a dangerous escapee from
        Azkaban and uncover hidden truths that reshape their world.
      </p>

      <div className="mt-5 flex flex-wrap gap-2 text-sm">
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          2004
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          PG
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          2h 22m
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-2xl bg-[#876F3A] text-[#F7F0E0] font-semibold shadow-lg shadow-[#876F3A]/30
                     hover:-translate-y-0.5 transition-transform"
        >
          Add to Favorites
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-2xl bg-[#E9DFC2] text-[#644e1d] ring-1 ring-[#876F3A]/30 hover:bg-[#F0E7CD]"
        >
          Details
        </button>
      </div>
    </div>
  );
}
