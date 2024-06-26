import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import sunset from '../image/sunset.jpg';
import yo from '../image/yo.webp';
import gitHub from '../image/gitHub.png';
import linkedin from '../image/linkedin.png';
import instagram from '../image/instagram.png';

function Inicio({ seccionAnimacion, navegacion }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/CV-CarmeloRodriguez.pdf';
    link.download = 'CV-CarmeloRodriguez.pdf';
    link.click();
  };

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
        show={seccionAnimacion === 'Inicio'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform -translate-x-full"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform -translate-x-full"
      >
        <div
          id="Inicio"
          className="h-screen flex flex-col items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${sunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: isMobile ? '130vh' : '100vh',
          }}
        >
          {isMobile && (
            <div className="flex-none w-full flex items-center justify-center p-4">
              <img src={yo} className="rounded-full w-60 h-60 object-cover hover:scale-110" alt="Imagen de Carmelo Rodríguez" />
            </div>
          )}
          <div className='flex flex-col md:flex-row '>
            <div className='flex-grow md:w-3/4 flex flex-col justify-center p-4'>
            <h2 className={`text-4xl font-base text-white ${isMobile ? 'text-center' : ''}`}>
              ¡Hola, soy <span className='font-extrabold text-white'>Silvia Garrido</span>!
            </h2>
            <h2 className={`text-2xl font-bold text-white mt-2 ${isMobile ? 'text-center' : ''}`}>
            Técnico de relación de Proyectos Audiovisuales 
            y Espectáculos
            </h2>
              <p className='text-white mt-3 text-justify max-w-4xl'>
              Desde temprana edad, mi pasión por el arte y la creatividad ha sido una constante en mi vida, impulsándome hacia la realización de proyectos 
              audiovisuales y espectáculos. Mi formación integral en cine, televisión, teatro y edición ha sido clave para desarrollar un amplio espectro 
              de habilidades técnicas y creativas. Nacida en Huelva, España, siempre he buscado integrar estética y narrativa en mis obras, creando experiencias
               audiovisuales visualmente impactantes y profundamente envolventes. Mi objetivo es aplicar mi creatividad y conocimientos para producir obras innovadoras
                y de alta calidad, mientras busco nuevas oportunidades y desafíos para seguir creciendo profesionalmente y aportando valor a cada proyecto en el que participe, 
                sin importar el campo específico.
              </p>
              <div className='flex justify-center md:justify-start'>
                <div>
                  <button className={`${isMobile ? 'w-14 font-extrabold p-1 mt-6 ml-0 bg-white rounded-full mr-4' : 'w-24 p-1 mt-8 bg-white rounded-full font-extrabold'}`} onClick={descargarCV}>CV</button>
                </div>
                <div>
                  <button onClick={()=>navegacion("Contacto")} className={`${isMobile ? 'w-24 font-extrabold p-1 mt-6 ml-0 bg-white rounded-full mr-4' : 'w-32 font-extrabold p-1 mt-8 ml-5 bg-white rounded-full'}`}>CONTACTO</button>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div className='flex-none md:w-1/4 flex items-center justify-center p-4'>
                <img src={yo} className='rounded-full w-60 h-60 object-cover hover:scale-110' alt="Imagen de Carmelo Rodríguez" />
              </div>
            )}
          </div>
        </div>
      </Transition>

    </>
  );
}

export default Inicio;
