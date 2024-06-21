import React from 'react'
import street from '../image/street.jpg';
import yo from '../image/yo.jpg';
import { Transition } from '@headlessui/react';

function Inicio({seccionAnimacion}) {
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
        <div className='flex flex-col md:flex-row'>
          <div className='flex-grow md:w-3/4 flex flex-col justify-center p-4'>
              <h2 className="text-4xl font-base text-white">¡Hola, soy <span className='font-extrabold text-white'>Carmelo Rodríguez</span>!</h2>
              <h2 className='text-3xl font-bold text-white mt-2'>Frontend Developer</h2>
              <p className='text-white mt-3'>Desde temprana edad, descubrí mi pasión por el arte y la creatividad. Esta inclinación artística me ha</p>
              <p className='text-white'>acompañado a lo largo de los años y la he  canalizado hacia el diseño web, fusionando estética y funcionalidad</p>
              <p className='text-white'>en cada proyecto. Mi formación en Desarrollo de Aplicaciones Web,complementada con un fuerte enfoque en</p>
              <p className='text-white'>diseño, me permite crear experiencias digitales que no solo son visualmente atractivas, sino también intuitivas y</p>
              <p className='text-white'>eficientes. Nacido en Huelva, España, mi objetivo es aprovechar mi creatividad innata para desarrollar soluciones</p>
              <p className='text-white'>web innovadoras y de alta calidad.</p>
          </div>
          <div className='flex-none md:w-1/4 flex items-center justify-center p-4'>
            <img src={yo} className='rounded-full w-60 h-60 object-cover hover:scale-110' alt="Imagen de Carmelo Rodríguez" />
          </div>
        </div>
      </div>
      </Transition>
    </>
  )
}

export default Inicio