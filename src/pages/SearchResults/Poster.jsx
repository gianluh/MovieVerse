
export default function Poster() {
  return (
    <div className="group transition h-[50vh] sm:h-[60vh] sm:w-full">
      <div className="relative overflow-hidden rounded-3xl aspect-2/3 ring-2 ring-[#D6C5A0] shadow-xl shadow-[#876F3A]/30 h-full w-full">
        <img
          src="https://play-lh.googleusercontent.com/vGw_9zUqbqRRz3O1I0mFlixFDpFohP7ylVoemPoRGenWgy2j9Bt30LkLjO-7Cfe8odrsNGhAGhr7Myft3tc"
          alt="Poster"
          className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105 select-none"
        />
      </div>
    </div>
  );
}
