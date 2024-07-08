import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import siyaProyecto from '../image/siyaProyecto.webp';
import siyaProyecto2 from '../image/siyaProyecto2.webp';

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
          className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? '900px' : '1000px',
            padding: '2rem',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14">
            <div className='text-center'>
              <h2 className="text-3xl font-semibold mb-4 text-center md:inline-block md:border-b-4">
                SÍMBOLO
              </h2>
            </div>
            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/_5vwORc34s8" frameborder="0" allowfullscreen></iframe>
            </div>
            <p className="text-lg text-gray-200">
            <span className='font-bold'>Introducción del Proyecto</span> El cortometraje presentado para el certamen de cortometrajes de Castilblanco de los Arroyos, 
            llamado Símbolo - 5mm. Se narra la historia de un joven que vive bajo el control estricto de sus padres y su eventual rebelión 
            contra ellos. Esta narrativa se desarrolla tanto en entorno cerrado como fuera, donde se capturan los momentos de tensión y liberación 
            del protagonista y se ve la contraposición de sus emociones.
            </p>

            <br></br>

            <p className="text-lg text-gray-200">
            <span className='font-bold'>Equipo de Producción:</span> El equipo estuvo compuesto por 10 personas, permitiendo una distribución de roles más específica y colaborativa. 
            En esta ocasión, mis responsabilidades se centraron en las siguientes áreas:
            </p>

            <br></br>

            <ul className="list-disc list-inside text-gray-200">
              <li className='text-lg'><span className='font-bold'>Maquillaje y Vestuario:</span> Diseñé y supervisé el maquillaje y vestuario de los personajes, asegurando que cada 
                detalle contribuyera a la construcción de sus personalidades y a la atmósfera del cortometraje.
              </li>
              <li className='text-lg'><span className='font-bold'>Script:</span> Me encargué de la continuidad y de asegurar que todos los elementos visuales y narrativos se 
                mantuvieran coherentes a lo largo de las diferentes tomas y escenas.
              </li>
            </ul>

            <p className="text-lg text-gray-200">
            <span className='font-bold'>Elementos Destacables:</span>
            </p>

            <ul className="list-disc list-inside text-gray-200">
              <li className='text-lg'><span className='font-bold'>Narrativa:</span> La historia resuena con cualquier audiencia que haya experimentado conflictos 
                familiares y la lucha por la independencia personal.
              </li>
              <li className='text-lg'><span className='font-bold'>Dirección de Fotografía:</span> Los planos nocturnos fueron diseñados para ser particularmente llamativos, 
                utilizando técnicas de iluminación y encuadre que destacan la tensión y la emoción del protagonista.
              </li>
              <li className='text-lg'><span className='font-bold'>Producción Local:</span> La elección de grabar en una casa local no solo aporta autenticidad al cortometraje,
                sino que también subraya la conexión del proyecto con el pueblo de Castilblanco de los Arroyos.
              </li>
            </ul>
            
            <br></br>

            <p className="text-lg text-gray-200">
            <span className='font-bold'>Conclusión:</span> Este cortometraje no solo se enfoca en una narrativa poderosa y relevante, 
              sino que también muestra un alto nivel de colaboración y creatividad del equipo. Cada miembro contribuyó de manera 
              significativa para lograr un producto final que cumple con los estándares del certamen y refleja la dedicación y talento del grupo.
            </p>

          </div>
        </div>
      </Transition>
    </>
  );
}

export default ProyectoDetalle1;
