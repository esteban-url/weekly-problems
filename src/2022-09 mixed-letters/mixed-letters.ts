export const scramble = (phrase: string): string => {
  const words = phrase.split(/(\w+)/)
  console.log(words)
  const scrambled = words
    .map((word) => {
      const wordLength = word.length
      if (wordLength < 4) return word
      const firstLetter = word[0]
      const lastLetter = word[wordLength - 1]
      const middle = word
        .slice(1, wordLength - 1)
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('')
      return `${firstLetter}${middle}${lastLetter}`
    })
    .join('')
  return scrambled
}
