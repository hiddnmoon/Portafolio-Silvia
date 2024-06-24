import { Transition } from '@headlessui/react';
import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import street2 from '../image/street2.jpg';

function Experiencia({ seccionAnimacion }) {
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${street2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full px-8">
            <div className="flex flex-col items-center col-span-3 h-full"> {/* Ensure div takes full height */}
              <div className="flex items-center space-x-2 mb-4">
                <FaBriefcase className="text-3xl" />
                <h3 className="text-2xl font-bold">Experiencia Profesional</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="col-span-1"></div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 text-center">
                  <h4 className="text-xl font-semibold">Diseñador Web</h4>
                  <p className="mt-2">Tecninet / 2024</p>
                  <p className="mt-2 text-sm">Creación de páginas web en WordPress, optimizando diseño responsive. Realicé consultas SQL en un entorno de bases de datos para mejorar la eficiencia del sistema.</p>
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
                  <h4 className="text-xl font-semibold">Grado Superior en Desarrollo de Aplicaciones Web</h4>
                  <p className="italic mt-2">IES San Sebastián, Huelva / 2024</p>
                </div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 mt-4 sm:mt-0 text-center">
                  <h4 className="text-xl font-semibold">Bachillerato de Arte</h4>
                  <p className="italic mt-2">Escuela de Arte León Ortega, Huelva / 2020</p>
                </div>

                <div className="border-2 border-white bg-opacity-10 rounded-lg p-4 text-center">
                  <h4 className="text-xl font-semibold">Educación Secundaria Obligatoria</h4>
                  <p className="italic mt-2">IES Estuaria, Huelva / 2018</p>
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
