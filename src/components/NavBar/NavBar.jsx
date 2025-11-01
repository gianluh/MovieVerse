import { Outlet } from "react-router";
import Contacts from "./Contacts";
import PrevPageButton from "./PrevPageButton";
import PageButton from "./PageButton";

// Navigation Bar shown on every page
export default function NavBar() {

    return (
    <>
        <div className="flex justify-between text-[#715416] items-center">
            <div className="flex ">
                <PrevPageButton />
                <PageButton />
            </div>
            <Contacts />  
        </div>
        <div>
            <Outlet />
        </div>
    </>
    )
}
