import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai"
const Gotop = () => {
    const [scroll, setScroll] = useState(0)
    const handlegotp = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(document.body.scrollTop || document.documentElement.scrollTop)
        })
    }, [])
    if (scroll > 500) {
        return <button className='fixed bg-sky-600 p-3 z-[9999] text-white rounded-full text-2xl bottom-5 right-28' onClick={handlegotp}><AiOutlineArrowUp className='animate-bounce -translate-y-2' /></button>
    }
};
export default Gotop;