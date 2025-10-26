import { Outlet } from "react-router";
import Contacts from "./Contacts";
import PrevPageButton from "./PrevPageButton";

export default function NavBar() {

    return (
        <>
            <div className="flex justify-between text-[#715416]">
                <PrevPageButton />
                <Contacts />
            </div>
            <Outlet />
        </>
    )
}