import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

type Props = {
  children: ReactNode
  customMetas?: {
    title?: string
    description?: string
  }
  noHome?: boolean
}

export default function PageLayout({
  children,
  customMetas,
  noHome = false
}: Props) {
  const _metas = {
    title: 'Gran Bingo Gran',
    description: 'Juega al Gran Bingo Gran.',
    ...customMetas
  }
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Head>
        <title>{_metas.title}</title>
        <meta content={_metas.description} name='description' />
        <meta name='robots' content='follow, index' />
      </Head>
      {!noHome && <Header />}
      <div className='w-full flex flex-1'>{children}</div>
      <Footer />
    </div>
  )
}
