import { useNavigate } from 'react-router-dom'

export default function PrevPageButton() {

    const navigate = useNavigate()

    return (
        <button
            className="bg-[#D6C5A0] px-4 py-2 rounded-full m-2 hover:cursor-pointer sm:px-6 sm:py-4 sm:text-xl"
            onClick={() => { navigate(-1) }}>
            <i className="fa-solid fa-arrow-left pt-1"></i>
        </button>
    );
}