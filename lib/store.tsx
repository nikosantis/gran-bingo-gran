import { atom } from 'jotai'
import { focusAtom } from 'jotai/optics'

export type StoreType = {
  bingo: string[]
  numbers: number[]
  lastNumber: null | string
  isLoading: boolean
  isFinished: boolean
  isOpen: boolean
}

const store: StoreType = {
  bingo: [],
  numbers: [],
  lastNumber: null,
  isLoading: false,
  isFinished: false,
  isOpen: false
}

export const storeAtom = atom(store)

export const bingoAtom = focusAtom(storeAtom, optic => optic.prop('bingo'))
bingoAtom.debugLabel = 'bingoAtom'
export const numbersAtom = focusAtom(storeAtom, optic => optic.prop('numbers'))
numbersAtom.debugLabel = 'numbersAtom'
export const lastNumberAtom = focusAtom(storeAtom, optic =>
  optic.prop('lastNumber')
)
lastNumberAtom.debugLabel = 'lastNumberAtom'
export const isLoadingAtom = focusAtom(storeAtom, optic =>
  optic.prop('isLoading')
)
isLoadingAtom.debugLabel = 'isLoadingAtom'
export const isFinishedAtom = focusAtom(storeAtom, optic =>
  optic.prop('isFinished')
)
isFinishedAtom.debugLabel = 'isFinishedAtom'
export const isOpenAtom = focusAtom(storeAtom, optic => optic.prop('isOpen'))
isOpenAtom.debugLabel = 'isOpenAtom'
