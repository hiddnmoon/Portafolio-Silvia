import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import EfectoEscritura from './EfectoEscritura';
import Inicio from './Inicio';

  function Slider() {

    const [seccionAnimacion, setseccionAnimacion] = useState('Inicio');
    const [mostrarPantallaInicial, setMostrarPantallaInicial] = useState(true);

    useEffect(() => {
      const tiempo = setTimeout(() => {
        setMostrarPantallaInicial(false);
      },2250);

      return () => clearInterval(tiempo);
    },[])

    const navegacion = (seccion) => {
      setseccionAnimacion(seccion);
      const elemento = document.getElementById(seccion);
      if(elemento){
        elemento.scrollIntoView({behavior:'smooth'})
      }
    }

    return (

      <div className="relative">

      <Transition
        show={mostrarPantallaInicial}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black flex items-center justify-center text-white text-4xl font-bold z-50">
          <EfectoEscritura />
        </div>
      </Transition>

      <Transition
        show={!mostrarPantallaInicial}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav className="fixed top-0 left-0 right-0 flex justify-center items-center py-4 z-50">
          <div className="ml-96 mr-96 flex justify-center items-center rounded-full shadow-md bg-white">
            <button onClick={() => navegacion('Inicio')} className="hover:bg-gray-200 hover:text-gray-800 py-2 px-4 focus:outline-none rounded-full">
              Inicio
            </button>
            <button onClick={() => navegacion('Tecnologias')} className="hover:bg-gray-200 hover:text-gray-800 py-2 px-4 focus:outline-none rounded-full ml-4">
              Tecnologías
            </button>
            <button onClick={() => navegacion('ExperienciayFormacion')} className="hover:bg-gray-200 hover:text-gray-800 py-2 px-4 focus:outline-none rounded-full ml-4">
              Experiencia y Formación
            </button>
            <button onClick={() => navegacion('Proyectos')} className="hover:bg-gray-200 hover:text-gray-800 py-2 px-4 focus:outline-none rounded-full ml-4">
              Proyectos
            </button>
          </div>
        </nav>
      </Transition>
        
      <Inicio seccionAnimacion={seccionAnimacion}/>

        <Transition
          show={seccionAnimacion === 'Tecnologias'}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0 transform translate-x-full"
          enterTo="opacity-100 transform translate-x-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 transform translate-x-0"
          leaveTo="opacity-0 transform translate-x-full"
        >
          <div id="Tecnologias" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
            <h2 className="text-4xl font-bold">Tecnologías</h2>
            <p className="mt-2">Scroll Down for next slide</p>
          </div>
        </Transition>

        <Transition
          show={seccionAnimacion === 'ExperienciayFormacion'}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0 transform -translate-y-full"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-full"
        >
          <div id="ExperienciayFormacion" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
            <h2 className="text-4xl font-bold">Experiencia y Formación</h2>
            <p className="mt-2">Scroll Down</p>
          </div>
        </Transition>

        <Transition
          show={seccionAnimacion === 'Proyectos'}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0 transform translate-y-full"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform translate-y-full"
        >
          <div id="Proyectos" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
            <h2 className="text-4xl font-bold">Proyectos</h2>
          </div>
        </Transition>

      </div>

    );
  }

  export default Slider;
