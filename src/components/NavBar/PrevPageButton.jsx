import { useNavigate } from 'react-router-dom'

// Buttons that links to the previous page
export default function PrevPageButton() {

    const navigate = useNavigate()

    return (
        <button
            className="bg-[#D6C5A0] px-4 py-2 rounded-full m-2 hover:cursor-pointer sm:px-4 sm:py-2 sm:text-xl md:px-5 md:py-3.5"
            onClick={() => { navigate(-1) }}>
            <i className="fa-solid fa-arrow-left pt-1"></i>
        </button>
    );
}