import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import street from '../image/street.jpg';
import yo from '../image/yo.jpg';
import gitHub from '../image/gitHub.png';
import linkedin from '../image/linkedin.png';
import instagram from '../image/instagram.png';

function Inicio({ seccionAnimacion, navegacion }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Función para descargar el CV
  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/CV-CarmeloRodriguez.pdf';
    link.download = 'CV-CarmeloRodriguez.pdf';
    link.click();
  };

  // Manejar el cambio de tamaño de la ventana
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${street})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
            {isMobile && (
              <div className="w-full flex items-center justify-center p-4 mb-8 mt-96">
                <img src={yo} className='rounded-full w-60 h-60 object-cover hover:scale-110' alt="Imagen de Carmelo Rodríguez" />
              </div>
            )}
            <div className={`flex-grow ${isMobile ? 'w-full' : 'md:w-3/4'} flex flex-col justify-center p-4 ${isMobile ? 'mb-8' : 'md:mb-0'}`}>
              <h2 className="text-4xl font-base text-white text-center md:text-left">
                ¡Hola, soy <span className="font-extrabold text-white">Carmelo Rodríguez</span>!
              </h2>
              <h2 className="text-3xl font-bold text-white mt-2 text-center md:text-left">Frontend Developer</h2>
              <p className="text-white mt-3 text-justify max-w-3xl mx-auto md:mx-0">
                Desde temprana edad, descubrí mi pasión por el arte y la creatividad. Esta inclinación artística me ha
                acompañado a lo largo de los años y la he canalizado hacia el diseño web, fusionando estética y funcionalidad
                en cada proyecto. Mi formación en Desarrollo de Aplicaciones Web, complementada con un fuerte enfoque en
                diseño, me permite crear experiencias digitales que no solo son visualmente atractivas, sino también intuitivas
                y eficientes. Nacido en Huelva, España, mi objetivo es aprovechar mi creatividad innata para desarrollar soluciones
                web innovadoras y de alta calidad.
              </p>
              <div className={`flex justify-center md:justify-start mt-4 ${isMobile ? 'flex-wrap space-x-3' : ''}`}>
              <a href="https://github.com/crodros2601" target="_blank" rel="noopener noreferrer">
                  <img src={gitHub} className='w-16' alt="Icono de GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/carmelorodriguezrosalina/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} className='w-12 mt-3 mr-4' alt="Icono de Linkedin" />
                </a>
                <a href="https://www.instagram.com/karmelartem" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} className='w-9 mt-7 mr-5' alt="Icono de Instagram" />
                </a>
                <div>
                  <button className='w-24 p-1 mt-8 bg-white rounded-full font-extrabold' onClick={descargarCV}>CV</button>
                </div>
                <div>
                  <button onClick={()=>navegacion("Contacto")} className='w-32 font-extrabold p-1 mt-8 ml-5 bg-white rounded-full'>CONTACTO</button>
                </div>
              </div>
            </div>
            {!isMobile && (
              <div className={`flex-none ${isMobile ? 'w-full mt-8' : 'md:w-1/4'} flex items-center justify-center p-4`}>
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
