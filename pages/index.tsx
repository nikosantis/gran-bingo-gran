import { ReactElement } from 'react'

import PageLayout from 'components/page-layout'
import GridNumbers from 'components/grid-numbers'
import LastNumber from 'components/last-number'
import List from 'components/list'
import RandomNumber from 'components/random-number'
import Controls from 'components/controls'
import SaveBingo from 'components/save-bingo'

export default function IndexPage() {
  return (
    <main role='main' className='w-full flex flex-col flex-1'>
      <LastNumber />
      <RandomNumber />
      <GridNumbers />
      <List />
      <Controls />
      <SaveBingo />
    </main>
  )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
