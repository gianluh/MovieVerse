import { useNavigate} from "react-router-dom";

// Page shown when no results were found with the user search
export default function NoResults() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[50vh] px-6 py-10 text-[#644e1d]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(214,197,160,0.35),transparent_60%),radial-gradient(500px_260px_at_80%_80%,rgba(214,197,160,0.22),transparent_55%)] blur-[2px]"
      />

      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D6C5A0]/70 ring-2 ring-[#876F3A]/30 shadow-lg shadow-[#876F3A]/20 motion-safe:animate-bounce select-none">
              <i className="fa-solid fa-magnifying-glass text-3xl text-[#715416]" onClick={() => navigate("/")}></i>
      </div>

      <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D6C5A0] via-[#E9DFC2] to-[#876F3A] drop-shadow-sm">
        No Results Found
      </h2>
      <p className="mt-3 max-w-2xl text-center text-base sm:text-lg text-[#644e1d]/80">
          <>We couldn't find any matches. Try different keywords or check your spelling.</>
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => navigate("/")}
                  className="px-5 py-2.5 rounded-2xl bg-[#E9DFC2] text-[#644e1d] ring-1 ring-[#876F3A]/30 hover:bg-[#F0E7CD]"
        >
          Back to Search
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
