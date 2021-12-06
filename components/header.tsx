import Navbar from './navbar'

export default function Header() {
  return (
    <header className='w-full flex justify-center'>
      <div className='py-4'>
        <Navbar />
        <h1 className='text-3xl font-bold text-center'>GRAN BINGO GRAN</h1>
      </div>
    </header>
  )
}
