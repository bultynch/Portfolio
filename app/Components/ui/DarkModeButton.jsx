'use client'
import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedMode = localStorage.getItem('theme');

      if (storedMode) {
        return storedMode;

      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      
    }
    return 'light';
  });

  useEffect(() => {
    if (darkMode === 'dark') {
      document.querySelector('html').classList.add('dark');

    } else {
      document.querySelector('html').classList.remove('dark');
    }

    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => (prevDarkMode === 'light' ? 'dark' : 'light'));
  };

  return (

    <button className="swap swap-rotate btn btn-ghost btn-circle text-texto2 dark:hover:text-texto1 dark:text-texto1" onClick={toggleDarkMode}>

      {darkMode === 'dark' ? <MdOutlineWbSunny className='w-5 h-5' /> : <IoMoon className='w-5 h-5' />}

    </button>

  );
}

export default DarkModeButton;
