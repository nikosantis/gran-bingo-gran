import { ReactElement } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import PageLayout from 'components/page-layout'
import { allCardsId, CardType } from 'lib/all-cards'
import { getCardById } from 'lib/api'
import CardNumber from 'components/card-number'

type Props = {
  card: CardType
}

export default function CardPage({ card }: Props) {
  return (
    <main role='main' className='w-full flex flex-col flex-1'>
      <header className='w-full flex'>
        <div className='text-right w-full'>
          <h1 className='text-3xl font-bold p-4'>Cartón número: {card.id}</h1>
        </div>
      </header>
      <section className='w-full flex flex-1 flex-col items-center justify-center py-20'>
        <div className='flex border-gray-300 border-l'>
          {card.data.b.map(cardData => {
            return <CardNumber key={cardData} cardData={cardData} />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {card.data.i.map(cardData => {
            return <CardNumber key={cardData} cardData={cardData} />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {card.data.n.map(cardData => {
            return <CardNumber key={cardData} cardData={cardData} />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {card.data.g.map(cardData => {
            return <CardNumber key={cardData} cardData={cardData} />
          })}
        </div>
        <div className='flex border-gray-300 border-l border-b'>
          {card.data.o.map(cardData => {
            return <CardNumber key={cardData} cardData={cardData} />
          })}
        </div>
      </section>
    </main>
  )
}

CardPage.getLayout = function getLayout(page: ReactElement<Props>) {
  return (
    <PageLayout
      noHome
      customMetas={{
        title: `Cartón número ${page.props.card.id} || Gran Bingo Gran`
      }}
    >
      {page}
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getCards = allCardsId()
  const idCards = getCards.map(id => {
    return {
      params: { cardId: String(id) }
    }
  })
  return { paths: [...idCards], fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idParam = params?.cardId as string
  const _card = await getCardById(idParam)

  return {
    props: { card: _card }
  }
}
