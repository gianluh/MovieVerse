
// Buttons that redirect to social medias
export default function Contacts() {

    return (
        <div className="sm:text-xl">
            <button
                className="bg-[#D6C5A0] px-4 py-2 rounded-full m-2 hover:cursor-pointer sm:px-4 sm:py-2 md:px-5 md:py-3.5 md:text-xl"
            >
                <a href="https://github.com/gianluh" target="_blank"><i className="fa-brands fa-github pt-1"></i></a>
            </button>
            <button
                className="bg-[#D6C5A0] px-4 py-2 rounded-full m-2 hover:cursor-pointer sm:px-4 sm:py-2 md:px-5 md:py-3.5 md:text-xl"
                >
                <a href="https://www.instagram.com/gianlu.hh/" target="_blank"><i className="fa-brands fa-instagram pt-1"></i></a>
            </button>
            <button
                className="bg-[#D6C5A0] px-4 py-2 rounded-full m-2 hover:cursor-pointer sm:px-4 sm:py-2 md:px-5 md:py-3.5 md:text-xl"
                >
                <a href=""><i className="fa-brands fa-linkedin pt-1" target="_blank"></i></a>
            </button>
        </div>
    )
}