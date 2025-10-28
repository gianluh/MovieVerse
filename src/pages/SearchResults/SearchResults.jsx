import FilmDetails from "./FilmDetails";
import Poster from "./Poster";

export default function SearchResults() {
  return (
    <div className="mx-6 mt-2 h-screen gap-10 lg:w-screen lg:flex xl:ml-43">
      <Poster />
      <FilmDetails />
    </div>
  );
}
