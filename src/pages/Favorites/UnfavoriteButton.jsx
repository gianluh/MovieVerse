
export default function UnfavoriteButton({ favorited, setFavorited }) {
    
    const handleClick = () => setFavorited(prev => !prev)

    return (
        <button
            className="hover:cursor-pointer"
            onClick={handleClick}>
            <div className="relative w-fit h-fit bottom-2 right-4 sm:bottom-3 sm:right-5">
                <i
                    className={`${favorited ? "opacity-100" : "opacity-0"} fa-solid fa-heart absolute inset-0 transition-all sm:text-xl`}
                ></i>
                <i
                    className={`${favorited ? "opacity-0" : "opacity-100"} fa-regular fa-heart absolute inset-0 transition-all sm:text-xl`}
                ></i>
            </div>
        </button>
    )
}