import FilmDetails from "./FilmDetails";
import Poster from "./Poster";

export default function SearchResults() {
  return (
    <div className="mx-6 mt-2">
      <Poster />
      <FilmDetails />
    </div>
  );
}
