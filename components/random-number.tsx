import { useEffect } from 'react'
import { useAtom } from 'jotai'

import { getLetter, randomNumber } from 'lib/bingo'
import {
  bingoAtom,
  isFinishedAtom,
  isLoadingAtom,
  numbersAtom,
  lastNumberAtom
} from 'lib/store'

export default function RandomNumber() {
  const [, setBingo] = useAtom(bingoAtom)
  const [numbers, setNumbers] = useAtom(numbersAtom)
  const [isFinished, setIsFinished] = useAtom(isFinishedAtom)
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom)
  const [, setLastNumber] = useAtom(lastNumberAtom)

  const handleClick = async () => {
    setIsLoading(true)
    const getNumber = await randomNumber(numbers, isFinished)
    if (getNumber) {
      const letter = getLetter(getNumber)
      setTimeout(() => {
        setNumbers(prev => [...prev, getNumber])
        setBingo(prev => [...prev, `${letter}${getNumber}`])
        setLastNumber(`${letter}${getNumber}`)
        setIsLoading(false)
      }, 800)
    }
  }

  useEffect(() => {
    if (numbers.length === 75) {
      setIsFinished(true)
    }
  }, [numbers.length, setIsFinished])

  return (
    <section className='w-full flex justify-center'>
      <div>
        <button
          className='rounded-md py-3 px-6 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={handleClick}
          disabled={isLoading || isFinished}
        >
          Sortear números
        </button>
      </div>
    </section>
  )
}
