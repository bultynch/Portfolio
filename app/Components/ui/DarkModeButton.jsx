'use client';
import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState('light'); // Valor inicial fijo

  useEffect(() => {
    // Sincronizar el estado con localStorage y las preferencias del sistema
    const storedMode = localStorage.getItem('theme');
    if (storedMode) {
      setDarkMode(storedMode);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode('dark');
    }
  }, []);

  useEffect(() => {
    // Aplicar la clase de tema al HTML y almacenar la preferencia
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
    <button
      className=" mt-4 swap swap-rotate  text-components1 dark:hover:text-texto1 dark:text-texto1 transform transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={toggleDarkMode}
    >
      {darkMode === 'dark' ? <MdOutlineWbSunny className="w-5 h-5" /> : <IoMoon className="w-5 h-5" />}
    </button>
  );
}

export default DarkModeButton;
