import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

function EfectoEscritura() {
  const [escribir, setEscribir] = useState('');
  const [mostrarTexto, setMostrarTexto] = useState(true);
  const nombre = "Carmelo Rodríguez | Portafolio";

  useEffect(() => {
    let intervalo;
    let timeout;

    const escribirNombre = () => {
      let i = 0;
      intervalo = setInterval(() => {
        if (i < nombre.length) {
          setEscribir(nombre.substring(0, i + 1));
          i++;
        } else {
          clearInterval(intervalo);
          timeout = setTimeout(() => {
            setMostrarTexto(false); 
          }, 350); 
        }
      }, 50);
    };

    escribirNombre();

    return () => {
      clearInterval(intervalo);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Transition
      show={mostrarTexto}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <h2 className="text-5xl font-normal text-white">
        <span className='font-times font-extrabold p-2 border-4 border-white'>
          {escribir}
        </span>
      </h2>
    </Transition>
  );
}

export default EfectoEscritura;
