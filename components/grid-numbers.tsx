import { getLetter } from 'lib/bingo'
import SingleNumber from './single-number'

const bingoNumbers = Array(75)
  .fill(undefined)
  .map((_n, i) => ({ letter: getLetter(i + 1), number: `${i + 1}` }))

export default function GridNumbers() {
  return (
    <section className='w-full flex justify-center mt-8 flex-col items-center'>
      <div className='w-11/12 lg:w-10/12 xl:w-10/12 2xl:w-8/12 flex justify-center items-center'>
        <div className='border-gray-300 border-t border-l flex flex-wrap'>
          {bingoNumbers.map(bingoNum => (
            <SingleNumber
              number={bingoNum.number}
              key={bingoNum.number}
              letter={bingoNum.letter}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
