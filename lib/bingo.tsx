function getLetter(num: number): 'B' | 'I' | 'N' | 'G' | 'O' {
  if (num <= 15) return 'B'
  if (num > 15 && num <= 30) return 'I'
  if (num > 30 && num <= 45) return 'N'
  if (num > 45 && num <= 60) return 'G'
  if (num > 60 && num <= 75) return 'O'
  return 'B'
}

async function randomNumber(numbersPicked: number[], isFinished: boolean) {
  let repeated = false
  let randomNumber = 0
  const min = 1
  const max = 75
  if (isFinished) Promise.resolve(false)
  while (!repeated) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (numbersPicked.includes(randomNumber) === false) {
      repeated = false
      return Promise.resolve(randomNumber)
    } else {
      Promise.resolve(randomNumber)
    }
  }
}

export { getLetter, randomNumber }
