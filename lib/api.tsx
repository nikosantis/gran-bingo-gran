import { allCards } from './all-cards'

export function getCardById(id: string) {
  const founded = allCards.find(x => x.id === id)
  if (!founded) {
    return Promise.reject(new Error(`No card with id: ${id}`))
  }
  return Promise.resolve(founded)
}
