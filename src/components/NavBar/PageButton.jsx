import { NavLink, useLocation } from "react-router"

export default function PageButton() {

    const location = useLocation()

    return (
        <div className="flex gap-3 self-start mt-3">
            {location.pathname !== "/favorites" ? <NavLink
                className="bg-[#D6C5A0] rounded-full text hidden sm:block sm:px-4 sm:py-2.5 md:px-5 md:py-3.5 md:text-xl"
                to={"/favorites"}>
                <p>Favorites</p>
            </NavLink> : null} 
            {location.pathname !== "/watched" ? <NavLink
                className="bg-[#D6C5A0] rounded-full text hidden sm:block sm:px-4 sm:py-2.5 md:px-5 md:py-3.5 md:text-xl"
                to={"/watched"}>
                <p>Watched</p>
            </NavLink> : null}
            {location.pathname !== "/" ? <NavLink
                className="bg-[#D6C5A0] rounded-full text px-4 py-1.5 sm:block sm:px-4 sm:py-2.5 md:px-5 md:py-3.5 md:text-xl"
                to={"/"}>
                <p>Home</p>
            </NavLink> : null}
        </div>
        
    )
}