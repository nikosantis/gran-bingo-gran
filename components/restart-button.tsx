import { useAtom } from 'jotai'
import { storeAtom } from 'lib/store'

export default function RestartButton() {
  const [, setStore] = useAtom(storeAtom)
  const handleClick = () => {
    setStore({
      bingo: [],
      numbers: [],
      lastNumber: null,
      isLoading: false,
      isFinished: false,
      isOpen: false
    })
  }
  return (
    <button
      type='button'
      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
      onClick={handleClick}
    >
      Reiniciar
    </button>
  )
}
