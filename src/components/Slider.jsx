  import React, { useEffect, useState } from 'react';
  import { Transition } from '@headlessui/react';
  import EfectoEscritura from './EfectoEscritura';
  import Inicio from './Inicio';
  import Habilidades from './Habilidades';
  import Experiencia from './Experiencia';
  import Proyectos from './Proyectos';
  import Contacto from './Contacto';
  import Proyecto1 from './ProyectoDetalle1';
  import Proyecto2 from './ProyectoDetalle2';

  function Slider() {
    const [seccionAnimacion, setSeccionAnimacion] = useState('Inicio');
    const [mostrarPantallaInicial, setMostrarPantallaInicial] = useState(true);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); 
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      const tiempo = setTimeout(() => {
        setMostrarPantallaInicial(false);
      }, 2250);

      return () => clearTimeout(tiempo);
    }, []);

    const navegacion = (seccion) => {
      setSeccionAnimacion(seccion);
      const elemento = document.getElementById(seccion);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMobile) {
        setMenuAbierto(false);
      }
    };

    useEffect(() => {
      const titulos = {
        Inicio: 'Inicio',
        Habilidades: 'Habilidades',
        ExperienciayFormacion: 'Experiencia y Formación',
        Proyectos: 'Proyectos',
        Contacto: 'Contacto',
        Proyecto1 : 'Proyecto1',
        Proyecto2 : 'Proyecto2'
      };
      document.title = titulos[seccionAnimacion];
    }, [seccionAnimacion]);

    const toggleMenu = () => {
      setMenuAbierto(!menuAbierto);
    };

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
              {!isMobile && (
                <div className="ml-auto mr-auto flex items-center rounded-full shadow-md bg-white">
                  <button
                    onClick={() => navegacion('Inicio')}
                    className={`py-5 pr-10 pl-10 px-6 focus:outline-none rounded-full transition duration-300 ease-in-out ${seccionAnimacion === 'Inicio' ? 'text-black font-bold' : 'text-gray-400 font-bold'}`}
                  >
                    INICIO
                  </button>
                  <button
                    onClick={() => navegacion('Habilidades')}
                    className={`py-5 px-6 pr-10 pl-10 focus:outline-none rounded-full ml-4 transition duration-300 ease-in-out ${seccionAnimacion === 'Tecnologias' ? 'text-black font-bold' : 'text-gray-400 font-bold'}`}
                  >
                    HABILIDADES
                  </button>
                  <button
                    onClick={() => navegacion('ExperienciayFormacion')}
                    className={`py-5 px-4 pr-10 pl-10 focus:outline-none rounded-full ml-4 transition duration-300 ease-in-out ${seccionAnimacion === 'ExperienciayFormacion' ? 'text-black font-bold' : 'text-gray-400 font-bold'}`}
                  >
                    EXPERIENCIA Y FORMACIÓN
                  </button>
                  <button
                    onClick={() => navegacion('Proyectos')}
                    className={`py-5 pl-10 px-10 pr-10 focus:outline-none rounded-full ml-4 transition duration-300 ease-in-out ${seccionAnimacion === 'Proyectos' ? 'text-black font-bold' : 'text-gray-400 font-bold'}`}
                  >
                    PROYECTOS
                  </button>
                </div>
              )}

              {isMobile && (
              <div className="md:hidden mr-auto">

                <button onClick={toggleMenu} className="p-2 focus:outline-none">

                  <svg
                    className={`w-8 h-8 text-white ${menuAbierto ? 'hidden' : 'block'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>              
                </button>
                
                <Transition
                  show={menuAbierto}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"  
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50">
                    <div className="fixed top-0 left-0 h-screen bg-white shadow-lg w-full z-50">
                      <button
                        onClick={toggleMenu}
                        className="absolute top-2 left-2 p-2 rounded-full focus:outline-none hover:bg-gray-200"
                      >
                        <svg
                          className="w-6 h-6 text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          toggleMenu();
                          navegacion('Inicio');
                        }}
                        className="block text-black font-bold py-2 px-4 text-center w-full mt-10"
                      >
                        INICIO
                      </button>
                      <button
                        onClick={() => {
                          toggleMenu();
                          navegacion('Habilidades');
                        }}
                        className="block text-black font-bold py-2 px-4 text-center w-full"
                      >
                        HABILIDADES
                      </button>
                      <button
                        onClick={() => {
                          toggleMenu();
                          navegacion('ExperienciayFormacion');
                        }}
                        className="block text-black font-bold py-2 px-4 text-center w-full"
                      >
                        EXPERIENCIA Y FORMACIÓN
                      </button>
                      <button
                        onClick={() => {
                          toggleMenu();
                          navegacion('Proyectos');
                        }}
                        className="block text-black font-bold py-2 px-4 text-center w-full"
                      >
                        PROYECTOS
                      </button>
                            </div>
                          </div>
                        </Transition>
                      </div>
                    )}
                  </nav>
                  </Transition>
          <Inicio seccionAnimacion={seccionAnimacion} navegacion={navegacion} />
          <Habilidades seccionAnimacion={seccionAnimacion} />
          <Experiencia seccionAnimacion={seccionAnimacion} />
          <Proyectos seccionAnimacion={seccionAnimacion} navegacion={navegacion}/>
          <Proyecto1 seccionAnimacion={seccionAnimacion} />
          <Proyecto2 seccionAnimacion={seccionAnimacion} />
          <Contacto seccionAnimacion={seccionAnimacion} />
        </div>
      </>
    );
  }

  export default Slider;
