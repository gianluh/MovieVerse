
import ToggleFavorited from "./ToggleFavorited";

// Favorites films selected by the user
export default function Favorites({ favorited, setFavorited }) {

  return (
    <div className="bg-[#D6C5A0] text-[#715416] w-4/5 h-[80vh] m-auto mt-10 rounded-4xl overflow-y-scroll grid grid-cols-1 grid-rows-[auto_1fr]">
      <div className=" sticky flex z-10 top-5 text-4xl row-start-1 row-end-2 justify-center">
        <h1 className="bg-[#876F3A] text-[#ceba8e] p-3 text-center rounded-4xl pt-4.5">Favorites</h1>
      </div>
      <div className="mt-15 row-start-2 row-end-3 sm:text-xl lg:text-2xl xl:text-3xl">
        {favorited.map((item, index) => <div key={index} className="ml-5 mr-5">
          <div className="flex justify-between">
            <p className="md:text-center md:w-full">{item}</p>
            <ToggleFavorited index={index} setFavorited={setFavorited} />
          </div>
          <hr className="border-2 rounded-full border-[#876F3A] my-2 w-3/4 m-auto" />
        </div>)}
      </div>
    </div>
  );
}
