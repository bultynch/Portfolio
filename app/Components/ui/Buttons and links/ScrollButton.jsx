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
        window.scrollTo({ top: window.scrollY + 860, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div className='w-full'>
            <button onClick={scrollDown} className={`mr-10 bottom-4 fixed shadow-sm rounded-sm bg-components1 text-texto1 dark:bg-components2 dark:hover:bg-texto1  ${showScroll ? 'block' : 'hidden'} z-50`}>
                <BiDownArrowAlt className='w-[452px] h-6' />
            </button>
        </div>
        
    );
}

export default ScrollTopButton;
