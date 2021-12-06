import { useAtom } from 'jotai'
import { useAtomValue } from 'jotai/utils'
import { storeAtom } from 'lib/store'
import { useEffect, useState } from 'react'

export default function RecoverBingo() {
  const [storeData, setStoreData] = useState<string | null>(null)
  const [bingoStoreData, setStore] = useAtom(storeAtom)
  useEffect(() => {
    const localStore = localStorage.getItem('bingo-store-data')
    if (localStore) {
      setStoreData(localStore)
    }
  }, [])
  const handleClick = () => {
    if (storeData && bingoStoreData.bingo.length === 0) {
      setStore(JSON.parse(storeData))
    }
  }
  return (
    <button
      type='button'
      className='rounded-md py-3 px-6 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      onClick={handleClick}
      disabled={!storeData || bingoStoreData.bingo.length > 0}
    >
      Recuperar último bingo
    </button>
  )
}
