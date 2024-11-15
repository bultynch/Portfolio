'use client'
import React, { useState, useEffect } from 'react';
import { BiDownArrowAlt } from "react-icons/bi";

function ScrollTopButton() {
    const [showScroll, setShowScroll] = useState(true);

    const checkScrollTop = () => {
        if (!showScroll && window.scrollY > 900) {
            setShowScroll(false);
        } else if (showScroll && window.scrollY <= 900) {
            setShowScroll(true);
        }
    };

    const scrollDown = () => {
        window.scrollTo({ top: window.scrollY + 820, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <button onClick={scrollDown} className={`bottom-2 fixed shadow-sm rounded-sm bg-nombre1 text-texto1 hover:bg-neutral-600 dark:bg-nombre2 dark:text-texto1 dark:hover:bg-texto1 dark:hover:text-nombre2 ${showScroll ? 'block' : 'hidden'} z-50`}>
            <BiDownArrowAlt className='w-96 h-6' />
        </button>
    );
}

export default ScrollTopButton;
