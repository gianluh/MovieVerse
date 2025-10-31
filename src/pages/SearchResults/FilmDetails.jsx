
export default function FilmDetails({ title, year, rated, runtime, genreArray, author, plot, setWatched, setFavorited }) {
  
  const handleClick = (array, item) => {
    if (!item) return
    array(prev => ([...prev, item]))
  }
    

  return (
    <div
      className="bg-[#D6C5A0] text-[#644e1d] rounded-3xl p-6 mt-3 drop-shadow-2xl shadow-[#876F3A] ring-1 ring-[#876F3A]/30 lg:mb-15 lg:w-5/16"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {title}
        </h2>
      </div>

      <p
        id="author"
        className="mt-2 text-sm uppercase tracking-wider text-[#876F3A] font-semibold"
      >
        {author}
      </p>

      <p className="mt-4 text-base leading-relaxed">
        {plot}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 text-sm">
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          {year}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          {rated}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20">
          {runtime}
        </span>
        {genreArray.map((genre, index) => {
          if (index > 3) return
          return <span
            className="px-2.5 pt-1.5 py-0.5 rounded-full text-xs sm:text-sm bg-[#876F3A]/10 text-[#876F3A] ring-1 ring-[#876F3A]/20"
            key={index}>
            {genre}
          </span>
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="px-4 py-2 rounded-2xl bg-[#876F3A] text-[#F7F0E0] font-semibold shadow-lg shadow-[#876F3A]/30 hover:-translate-y-0.5 transition-transform hover:cursor-pointer"
          onClick={() => handleClick(setFavorited, title)}
        >
          Add to Favorites
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-2xl bg-[#E9DFC2] text-[#644e1d] ring-1 ring-[#876F3A]/30 hover:bg-[#F0E7CD] hover:cursor-pointer hover:-translate-y-0.5 transition-transform"
          onClick={() => handleClick(setWatched, title)}
        >
          Add to Watched
        </button>
      </div>
    </div>
  );
}
