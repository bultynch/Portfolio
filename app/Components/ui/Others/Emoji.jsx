'use client'
import React, { useState, useEffect } from 'react';

function Emoji() {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    // Función que actualiza el estado según el tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowEmoji(true);
      } else {
        setShowEmoji(false);
      }
    };

    // Llamada inicial al cargar el componente
    handleResize();

    // Escuchar los cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{showEmoji && '👋'}</>;
}

export default Emoji;
