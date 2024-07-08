import React, { useEffect, useState } from 'react';
import sunset4 from '../image/sunset4.jpg';
import { Transition } from '@headlessui/react';
import simbolo from '../image/simbolo.webp';
import siya from '../image/siya.webp';
import spot from '../image/spot.jpg';

const proyectos = [
  {
    id: 1,
    imagen: simbolo,
    nombre: 'Símbolo',
    descripcion: 'Cortometraje ganador de mejor BSO en certamen Castilblanco de los Arroyos.',
  },
  {
    id: 2,
    imagen: siya,
    nombre: 'Si ya',
    descripcion: 'Videoclip musical como parte de mi trabajo de fin de grado.',
  },
  {
    id: 3,
    imagen: spot,
    nombre: 'Spot',
    descripcion: 'Colaboraciones como operadora de cámara',
  },
];

const Proyectos = ({ seccionAnimacion, navegacion }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = proyectos.slice(indexOfFirstProject, indexOfLastProject);

  let gridColumns = 'grid-cols-1';
  if (currentProjects.length >= 3) {
    gridColumns = 'md:grid-cols-3';
  } else if (currentProjects.length === 2) {
    gridColumns = 'md:grid-cols-2';
  }

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Transition
      show={seccionAnimacion === 'Proyectos'}
      enter="transition ease-out duration-500"
      enterFrom="opacity-0 transform translate-y-full"
      enterTo="opacity-100 transform translate-y-0"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 transform translate-y-0"
      leaveTo="opacity-0 transform translate-y-full"
    >
      <div
        id="Proyectos"
        className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${sunset4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: isMobile ? '185vh' : '100vh'
        }}
      >
        <div className={`grid gap-4 sm:gap-8 ${gridColumns}`}>
          {currentProjects.map((proyecto, index) => (
            <div key={proyecto.id} className="bg-white text-black p-4 rounded-lg mt-6 sm:mt-10">
              <img
                src={proyecto.imagen}
                alt={proyecto.nombre}
                className="w-full h-60 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-center">{proyecto.nombre}</h3>
              <p className="text-sm mt-3 text-center">{proyecto.descripcion}</p>
              <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-3">
                {index === 0 && (
                  <button
                    onClick={() => navegacion('Proyecto1')}
                    className="bg-black text-white px-4 py-2 rounded-md mt-3 sm:mt-0 mx-auto"
                  >
                    Ver más detalles
                  </button>
                )}
                {index === 1 && (
                  <button
                    onClick={() => navegacion('Proyecto2')}
                    className="bg-black text-white px-4 py-2 rounded-md mt-3 sm:mt-0 mx-auto"
                  >
                    Ver más detalles
                  </button>
                )}
                {index === 2 && (
                  <button
                    onClick={() => navegacion('Proyecto3')}
                    className="bg-black text-white px-4 py-2 rounded-md mt-3 sm:mt-0 mx-auto"
                  >
                    Ver más detalles
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-8">
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(proyectos.length / projectsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`cursor-pointer px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-black text-white font-bold border-2 border-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </Transition>
  );
};

export default Proyectos;
