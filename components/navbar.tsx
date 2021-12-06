import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'

export default function Navbar() {
  const router = useRouter()
  return (
    <div className='w-full flex justify-center mb-4'>
      <nav className='flex'>
        <Link href='/'>
          <a
            title='Inicio'
            className={cx('mx-1 rounded-md text-sm text-gray-600 py-1 px-2', {
              'bg-gray-200 text-black': router.pathname === '/'
            })}
          >
            Inicio
          </a>
        </Link>
        <Link href='/modelo'>
          <a
            title='Inicio'
            className={cx('mx-1 rounded-md text-sm text-gray-600 py-1 px-2', {
              'bg-gray-200 text-black': router.pathname === '/modelo'
            })}
          >
            Modelo
          </a>
        </Link>
        <Link href='/carton'>
          <a
            title='Inicio'
            className={cx('mx-1 rounded-md text-sm text-gray-600 py-1 px-2', {
              'bg-gray-200 text-black': router.pathname === '/carton'
            })}
          >
            Listado Cartones
          </a>
        </Link>
      </nav>
    </div>
  )
}
