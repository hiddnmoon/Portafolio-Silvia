import { Transition } from '@headlessui/react'
import React from 'react'
import street2 from '../image/street2.jpg';

function Experiencia({seccionAnimacion}) {
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
            <div id="ExperienciayFormacion" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${street2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
                <h2 className="text-4xl font-bold">Experiencia y Formación</h2>
                <p className="mt-2">Scroll Down</p>
            </div>
        </Transition>
    </>
  )
}

export default Experiencia