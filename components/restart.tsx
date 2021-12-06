import { Fragment, useRef } from 'react'
import { useAtom } from 'jotai'
import { Dialog, Transition } from '@headlessui/react'

import { isOpenAtom } from 'lib/store'
import RestartButton from './restart-button'

export default function Restart() {
  const cancelButtonRef = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useAtom(isOpenAtom)
  return (
    <>
      <button
        type='button'
        className='rounded-md py-3 px-6 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mr-4'
        onClick={() => setIsOpen(true)}
      >
        Reiniciar bingo
      </button>
      <Transition.Root appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={() => setIsOpen(false)}
          initialFocus={cancelButtonRef}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  ¿Quieres reiniciar el bingo?
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Si lo reinicias, perderás todos los números sorteados.
                  </p>
                </div>

                <div className='mt-4 flex justify-end'>
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setIsOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                  <RestartButton />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
