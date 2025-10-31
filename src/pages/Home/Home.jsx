import { NavLink, useNavigate } from "react-router";
import SearchInput from "./SearchInput";
import SubmitButton from "./SubmitButton";
import { useState } from "react";

export default function Home({ searchInput, setSearchInput }) {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchInput.trim()) return;

    setLoading(true)

    try {
      const rawRes = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(searchInput)}`)
      const rawData = await rawRes.json()

      const imdbID = rawData.Search[0].imdbID
      const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${imdbID}&plot=short`)
      const data = await res.json()

      localStorage.setItem("searchResults", JSON.stringify(data));
      navigate("/searchresults")
    } catch (error) {
      console.error(error)
      navigate("/noresults")
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <>
      <div className="flex justify-center gap-6 mt-5">
        <NavLink to={'/favorites'} className="bg-[#D6C5A0] rounded-full text-xl p-2 px-3 sm:hidden">
          <p>Favorites</p>
        </NavLink>

        <NavLink to={"/watched"} className="bg-[#D6C5A0] rounded-full text-xl p-2 px-3 sm:hidden">
          <p>Watched</p>
        </NavLink>
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-60 md:flex-col lg:mt-55">
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
        <SubmitButton handleSearch={handleSearch} />
      </div>
      
    </>
  );
}
