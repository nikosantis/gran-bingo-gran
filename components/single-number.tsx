import { memo } from 'react'
import { useAtomValue } from 'jotai/utils'
import cx from 'clsx'

import { numbersAtom } from 'lib/store'

type Props = {
  letter: 'B' | 'I' | 'N' | 'G' | 'O'
  number: string
}

function SingleNumber({ letter, number }: Props) {
  const numbers = useAtomValue(numbersAtom)
  const isEndOfMobile = useIsEndOfMobile(number)
  return (
    <div
      className={cx(
        'px-2 py-4 lg:p-4 flex justify-center items-center flex-row w-1/5 md:w-[10%] md:h-[70px] lg:w-[10%] lg:h-[70px] xl:w-[6.666667%] border-b border-r border-gray-300',
        {
          'bg-purple-700 text-white': numbers.includes(Number(number)),
          'border-b border-gray-300': isEndOfMobile
        }
      )}
    >
      <span className='inline-block'>{letter}</span>
      <span className='inline-block px-[2px]'>-</span>
      <span className='inline-block'>{number}</span>
    </div>
  )
}

function useIsEndOfMobile(number: string) {
  return (
    number === '71' ||
    number === '72' ||
    number === '73' ||
    number === '74' ||
    number === '75'
  )
}

export default memo(SingleNumber)
