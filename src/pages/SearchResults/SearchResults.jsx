import { useEffect, useState } from "react";
import FilmDetails from "./FilmDetails";
import Poster from "./Poster";

export default function SearchResults({ setFavorited, setWatched, setIsFavorited, setIsWatched}) {

  const [results, setResults] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem("searchResults")
    if (saved) setResults(JSON.parse(saved))
  }, [])
  
  

  const splitGenre = results.Genre ? results.Genre.split(",").map(g => g.trim()) : []

  return (
    <div className="mx-6 mt-2 h-[calc(100vh-115px)] gap-10 lg:flex lg:justify-center lg:items-center">
      <Poster poster={results.Poster}/>
      <FilmDetails title={results.Title} year={results.Year} rated={results.Rated} runtime={results.Runtime} genreArray={splitGenre} author={results.Writer} plot={results.Plot} setFavorited={setFavorited} setWatched={setWatched} setIsFavorited={setIsFavorited} setIsWatched={setIsWatched} />
    </div>
  );
}
