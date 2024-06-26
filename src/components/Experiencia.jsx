import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import sunset2 from '../image/sunset2.jpg';

function Experiencia({ seccionAnimacion }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Transition
        show={seccionAnimacion === 'ExperienciayFormacion'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform -translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-full"
      >
        <div
          id="ExperienciayFormacion"
          className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${sunset2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: isMobile ? '115vh' : '100vh',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full px-8">
            <div className="flex flex-col items-center col-span-3 h-full">
              <div className="flex items-center space-x-2 mb-4">
                <FaBriefcase className="text-3xl" />
                <h3 className="text-2xl font-bold">Experiencia Profesional</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="col-span-1"></div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 text-center">
                  <h4 className="text-xl font-semibold">Acomodadora de cine</h4>
                  <p className="mt-2">Cines Aqualon / Huelva / abr. 2022 - jun. 2022</p>
                  <p className="mt-2 text-sm">Gestión integral de taquilla y concesiones, logística y abastecimiento de alimentos, diseño y coordinación de la agenda de espectáculos y 
                    mantenimiento de la higiene en las salas.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center col-span-3">
              <div className="flex items-center space-x-2 mb-4">
                <FaGraduationCap className="text-3xl" />
                <h3 className="text-2xl font-bold">Formación Académica</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 text-center">
                  <h4 className="text-xl font-semibold">Grado superior Realización de Proyectos Audiovisuales y Espectáculos</h4>
                  <p className="italic mt-2">IES Pablo Neruda / Huelva / 2022</p>
                </div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 sm:mt-0 text-center">
                  <h4 className="text-xl font-semibold">Bachillerato de Arte</h4>
                  <p className="italic mt-2">Escuela de Arte León Ortega, Huelva / 2020</p>
                </div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 text-center">
                  <h4 className="text-xl font-semibold">Educación Secundaria Obligatoria</h4>
                  <p className="italic mt-2">IES Fuentepiña / Huelva / 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Experiencia;
