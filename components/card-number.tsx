import { useState } from 'react'
import cx from 'clsx'

type Props = {
  cardData: string
}

export default function CardNumber({ cardData }: Props) {
  const [isSelected, setSelected] = useState(false)
  return (
    <div
      className={cx(
        'w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 flex justify-center items-center select-none'
      )}
    >
      <button
        className={cx(
          'w-full h-full border-r border-t border-gray-300 transition-colors',
          {
            'bg-green-500 border-green-500 text-white': isSelected
          }
        )}
        onClick={() => setSelected(prev => !prev)}
      >
        {cardData === 'libre' ? 'LIBRE' : cardData}
      </button>
    </div>
  )
}
