import { useAtomValue } from 'jotai/utils'

import { bingoAtom } from 'lib/store'

export default function List() {
  const bingo = useAtomValue(bingoAtom)
  const bingoNumbers = bingo.join(', ')
  return (
    <section className='w-full flex flex-col mt-5 mb-4'>
      <div className='w-full text-center'>
        <h2 className='text-2xl font-semibold'>Historial de Números</h2>
      </div>
      <div className='w-full flex justify-center mt-5'>
        <div className='w-10/12 lg:w-6/12 border text-center min-h-[26px] flex justify-center items-center'>
          {bingoNumbers || '...'}
        </div>
      </div>
    </section>
  )
}
