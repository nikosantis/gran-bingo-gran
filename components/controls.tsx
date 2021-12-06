import Restart from './restart'
import RecoverBingo from './recover-bingo'

export default function Controls() {
  return (
    <section className='w-full flex justify-center flex-col items-center'>
      <div className='mb-3'>
        <Restart />
        <RecoverBingo />
      </div>
      <div>
        <p className='text-xs text-gray-500 italic'>
          * Si deseas recuperar el último bingo jugado en tu dispositivo, no
          debes iniciar un bingo nuevo (botón sortear números). Si no hay ningún
          bingo guardado o inicias un bingo nuevo, este botón estará
          deshabilitado.
        </p>
      </div>
    </section>
  )
}
