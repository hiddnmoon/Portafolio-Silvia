import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import siyaProyecto from '../image/siyaProyecto.webp';
import siyaProyecto2 from '../image/siyaProyecto2.webp';
import siyaProyecto3 from '../image/siyaProyecto3.webp';
import siyaProyecto4 from '../image/siyaProyecto4.webp';
import siyaProyecto5 from '../image/siyaProyecto5.webp';

function ProyectoDetalle3({ seccionAnimacion }) {
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
        show={seccionAnimacion === 'Proyecto3'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Proyecto1"
          className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? 'auto' : '1000px',
            padding: '2rem',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14">
            <div className='text-center'>
              <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
                SPOT
              </h2>
            </div>
            
            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/EjbiUko85FQ" frameBorder="0" allowFullScreen></iframe>
            </div>

            <p className="text-lg text-gray-200 text-justify">
            Colaboré como operadora de cámara en la creación de un spot publicitario para el IES Pablo Neruda. Este spot, 
            ambientado en Halloween y con un estilo cómico, presenta a dos personajes icónicos, Joker y Caracortada, interpretados 
            por compañeros de mi equipo. La trama gira en torno a la llegada de Joker a la ciudad, anunciando un evento especial organizado 
            por el Instituto. Mi rol fue fundamental en capturar las emociones y dinámicas de los personajes, contribuyendo así a la realización 
            visual y narrativa del proyecto, con planos rápidos y con movimiento.
            </p>

            <br />

            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/Pn7or7Z1EO4" frameBorder="0" allowFullScreen></iframe>
            </div>

            <br />

            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/iXaqDQG2Tkw" frameBorder="0" allowFullScreen></iframe>
            </div>

            <br />

            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/EQzOvoxxKWg" frameBorder="0" allowFullScreen></iframe>
            </div>

          </div>
        </div>
      </Transition>
    </>
  );
}

export default ProyectoDetalle3;
