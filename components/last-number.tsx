import { useAtomValue } from 'jotai/utils'
import cx from 'clsx'

import { isLoadingAtom, lastNumberAtom } from 'lib/store'

export default function LastNumber() {
  const isLoading = useAtomValue(isLoadingAtom)
  const lastNumber = useAtomValue(lastNumberAtom)
  return (
    <section className='w-full mb-4 flex justify-center py-6'>
      <div className='border border-blue-700 text-4xl w-[100px] h-[100px] flex justify-center items-center'>
        {isLoading ? (
          <div className='rounded-full bg-blue-500 h-6 w-6 animate-bounce'></div>
        ) : (
          <div
            className={cx({
              'rounded-full bg-blue-600 text-white font-bold h-[80px] w-[80px] flex justify-center items-center text-3xl':
                lastNumber
            })}
          >
            {lastNumber || '😱'}
          </div>
        )}
      </div>
    </section>
  )
}
