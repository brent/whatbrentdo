export function shuffleArray<T>(array: T[]): T[] {
  let shuffled: T[] = []
  let indexes = array.map((_, index) => index)

  array.forEach((value) => {
    const randomIndex = Math.floor(Math.random() * indexes.length)
    const shuffledIndex = indexes[randomIndex]
    indexes.splice(randomIndex, 1)
    shuffled[shuffledIndex] = value
  })

  return shuffled
}
