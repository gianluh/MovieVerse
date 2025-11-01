import { useState } from "react"

// Button to unselect watched films
export default function ToggleWatched({ index, setWatched }) {

    const [status, setStatus] = useState(true)

    const handleClick = () => {

        setStatus(prev => !prev)

        if (typeof index === "number" && setWatched) {
            setWatched(prev => prev.filter((_, i) => i !== index))
        }
    }

    return (
        <button
            className="hover:cursor-pointer"
            onClick={handleClick}>
            <div className="relative w-fit h-fit bottom-2 right-4 sm:bottom-3 sm:right-5 lg:right-7 xl:right-10">
                <i
                    className={`${status ? "opacity-100" : "opacity-0"} fa-solid fa-eye absolute inset-0 transition-all sm:text-xl lg:text-2xl xl:text-3xl`}
                ></i>
                <i
                    className={`${status ? "opacity-0" : "opacity-100"} fa-regular fa-eye absolute inset-0 transition-all sm:text-xl lg:text-2xl xl:text-3xl`}
                ></i>
            </div >
        </button >
    )
}
