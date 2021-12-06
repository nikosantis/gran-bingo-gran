import { useAtomValue } from 'jotai/utils'
import { storeAtom } from 'lib/store'
import { useEffect } from 'react'

export default function SaveBingo() {
  const storeAtomData = useAtomValue(storeAtom)
  useEffect(() => {
    if (!storeAtomData.isLoading && storeAtomData.bingo.length > 0) {
      window.localStorage.setItem(
        'bingo-store-data',
        JSON.stringify(storeAtomData)
      )
    }
  }, [storeAtomData])
  return null
}
