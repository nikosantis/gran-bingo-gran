import { ReactElement } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import PageLayout from 'components/page-layout'
import { allCardsId } from 'lib/all-cards'
import Navbar from 'components/navbar'

export default function IndexCartonPage({
  cards
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main role='main' className='w-full flex flex-col flex-1'>
      <header className='w-full py-4 text-center'>
        <Navbar />
        <h1 className='text-3xl font-bold'>Listado de Cartones</h1>
      </header>
      <section className='w-full flex justify-center py-10'>
        <div className='flex flex-wrap justify-center w-11/12 xl:w-10/12'>
          {cards.map(cardData => {
            return (
              <div
                className='w-2/12 md:w-2/12 xl:w-1/12 rounded-lg m-1 shadow-sm'
                key={cardData}
              >
                <Link href={`/carton/${cardData}`}>
                  <a title={`Carton número ${cardData}`} className='group'>
                    <div className='w-full flex justify-center items-center rounded-lg border border-gray-200 p-4 group-hover:bg-green-300 transition-colors'>
                      {cardData}
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

IndexCartonPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout noHome>{page}</PageLayout>
}

export const getStaticProps: GetStaticProps<{ cards: number[] }> = async () => {
  const getCards = allCardsId()

  return {
    props: { cards: getCards }
  }
}
