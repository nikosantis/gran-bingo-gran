import { ReactElement } from 'react'

import PageLayout from 'components/page-layout'
import CardNumber from 'components/card-number'
import Navbar from 'components/navbar'

const gridNumbers = Array(5).fill(undefined)

export default function CardPage() {
  return (
    <main role='main' className='w-full flex flex-col flex-1'>
      <header className='w-full flex py-4'>
        <div className='text-center w-full'>
          <Navbar />
          <h1 className='text-3xl font-bold p-4'>Cartón modelo</h1>
        </div>
      </header>
      <section className='w-full flex flex-1 flex-col items-center justify-center'>
        <div className='flex border-gray-300 border-l'>
          {gridNumbers.map((_d, index) => {
            return <CardNumber key={index} cardData='x' />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {gridNumbers.map((_d, index) => {
            return <CardNumber key={index} cardData='x' />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {gridNumbers.map((_d, index) => {
            return <CardNumber key={index} cardData='x' />
          })}
        </div>
        <div className='flex border-gray-300 border-l'>
          {gridNumbers.map((_d, index) => {
            return <CardNumber key={index} cardData='x' />
          })}
        </div>
        <div className='flex border-gray-300 border-l border-b'>
          {gridNumbers.map((_d, index) => {
            return <CardNumber key={index} cardData='x' />
          })}
        </div>
      </section>
    </main>
  )
}

CardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout
      noHome
      customMetas={{
        title: 'Cartón modelo'
      }}
    >
      {page}
    </PageLayout>
  )
}
