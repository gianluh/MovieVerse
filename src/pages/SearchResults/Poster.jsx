
export default function Poster({poster}) {
  return (
    <div className="group transition h-1/2 md:h-4/7 lg:h-6/7 lg:w-3/5 xl:w-2/5 xl:pb-15">
      <div className="relative overflow-hidden rounded-3xl aspect-2/3 ring-2 ring-[#D6C5A0] shadow-xl shadow-[#876F3A]/30 h-full w-full">
        <img
          src={poster}
          alt="Poster"
          className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105 select-none"
        />
      </div>
    </div>
  );
}
