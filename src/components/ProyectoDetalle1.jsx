import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

function ProyectoDetalle1({ seccionAnimacion }) {

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

  const descargarDocumentacion = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Documentacion.pdf';  
    link.download = 'Documentacion.pdf'; 
    link.click();
  };

  const descargarGuiaEstilo = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/GuiaEstilo.pdf'; 
    link.download = 'GuiaEstilo.pdf';
    link.click();
  };

  return (
    <>
      <Transition
        show={seccionAnimacion === 'Proyecto1'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Proyecto1"
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? '5550px' : '7700px',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14">
            
          </div>
        </div>
      </Transition>
    </>
  );
}

export default ProyectoDetalle1;

