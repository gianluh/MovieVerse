
import { useNavigate, NavLink } from "react-router-dom";

// Page shown when the user navigate to non-existent page
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[70vh] px-6 py-10 text-[#644e1d]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(214,197,160,0.35),transparent_60%),radial-gradient(500px_260px_at_80%_80%,rgba(214,197,160,0.22),transparent_55%)] blur-[2px]"
      />
      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D6C5A0]/70 ring-2 ring-[#876F3A]/30 shadow-lg shadow-[#876F3A]/20 motion-safe:animate-bounce select-none">
        <i className="fa-solid fa-film text-3xl text-[#715416]"></i>
      </div>
      <h1 className="text-center text-6xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#D6C5A0] via-[#E9DFC2] to-[#876F3A] drop-shadow-sm">
        404
      </h1>
      <p className="mt-2 text-xl sm:text-2xl text-[#715416]">Reel not found</p>
      <p className="mt-3 max-w-xl text-center text-base sm:text-lg text-[#644e1d]/80">
        The scene you’re looking for rolled out of frame. It may have been
        moved, renamed, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <NavLink
          to="/"
          className="px-5 py-2.5 rounded-2xl bg-[#876F3A] text-[#F7F0E0] font-semibold shadow-lg shadow-[#876F3A]/30 hover:-translate-y-0.5 active:translate-y-0 transition-transform"
        >
          Go Home
        </NavLink>
        <button
          type="button"
          className="px-5 py-2.5 rounded-2xl bg-[#E9DFC2] text-[#644e1d] ring-1 ring-[#876F3A]/30 hover:bg-[#F0E7CD]"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
      <div className="pointer-events-none absolute left-8 top-14 text-[#D6C5A0]/70 animate-pulse select-none">
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="pointer-events-none absolute right-10 top-28 text-[#D6C5A0]/60 animate-pulse select-none [animation-delay:0.3s]">
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="pointer-events-none absolute right-1/4 bottom-16 text-[#D6C5A0]/60 animate-pulse select-none [animation-delay:0.6s]">
        <i className="fa-solid fa-star"></i>
      </div>
    </div>
  );
}
