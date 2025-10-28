import UnfavoriteButton from "./UnfavoriteButton";

export default function Favorites({favorited, setFavorited}) {
  return (
    <div className="bg-[#D6C5A0] text-[#715416] w-4/5 h-4/5 m-auto mt-10 rounded-4xl overflow-y-scroll grid grid-cols-1 grid-rows-[auto_1fr]">
      <div className="bg-[#876F3A] text-[#ceba8e] sticky z-10 top-5 text-4xl p-3 w-4/5 pt-4 ml-7.5 text-center rounded-4xl row-start-1 row-end-2 sm:ml-13 md:ml-15 lg:ml-59 lg:w-2/5 xl:ml-94 xl:w-1/4 2xl:ml-110">
        <h1>Favorites</h1>
      </div>
      <div className="mt-15 row-start-2 row-end-3 sm:text-xl lg:text-2xl xl:text-3xl">
        <div className="ml-5 mr-5">
          <div className="flex justify-between">
            <p className="truncate w-5/6">Harry Potter and the Prisoner of Azkaban</p>
            <UnfavoriteButton favorited={favorited} setFavorited={setFavorited} />
          </div>
          <p className="text-center sm:hidden">-----------------------------------------------</p>
          <p className="hidden sm:block sm:text-center md:hidden">-----------------------------------------------------------------------</p>
          <p className="hidden md:block md:text-center lg:hidden">--------------------------------------------------------------------------------</p>
          <p className="hidden lg:block lg:text-center">--------------------------------------------------------------------------------------------</p>
        </div>
      </div>
    </div>
  );
}
