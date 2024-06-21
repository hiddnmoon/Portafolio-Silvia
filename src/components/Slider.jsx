  import React, { useEffect, useState } from 'react';
  import { Transition } from '@headlessui/react';
  import EfectoEscritura from './EfectoEscritura';
  import Inicio from './Inicio';
  import Tecnologias from './Tecnologias';
  import Experiencia from './Experiencia';
  import Proyectos from './Proyectos';

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

      useEffect(()=>{
        const titulos = {
          Inicio : "Inicio",
          Tecnologias : "Tecnología",
          ExperienciayFormacion : "Experiencia y Formación",
          Proyectos : "Proyectos"
        };
        document.title = titulos[seccionAnimacion];
      },[seccionAnimacion]);

      return (

        <>

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

        <Tecnologias seccionAnimacion={seccionAnimacion}/>

        <Experiencia seccionAnimacion={seccionAnimacion}/>  

        <Proyectos seccionAnimacion={seccionAnimacion}/>

        </div>

        </>

      );
    }

    export default Slider;
