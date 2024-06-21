import { Transition } from '@headlessui/react'
import React from 'react'

function Tecnologias({seccionAnimacion}) {
  return (
    <>
        <Transition
            show={seccionAnimacion === 'Tecnologias'}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0 transform translate-x-full"
            enterTo="opacity-100 transform translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100 transform translate-x-0"
            leaveTo="opacity-0 transform translate-x-full"
        >
            <div id="Tecnologias" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
                <h2 className="text-4xl font-bold">Tecnologías</h2>
                <p className="mt-2">Scroll Down for next slide</p>
            </div>
        </Transition>
    </>
  )
}

export default Tecnologias