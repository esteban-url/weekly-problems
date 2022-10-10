/**
 * Truncates every word in a string to length n.
 * Words are separated by spaces.
 * Special characters are not counted as part of the word
 * @param {string} value the string to truncate
 * @param {number} length the length to truncate to
 * @returns {string} the string with the truncated words
 * @example truncate('never gonna give you up', 3) // 'nev gon giv you up'
 * @example truncate('*hello* darkness, my ~old_friend', 3) // '*hel* dar, my ~old_fri'
 */
export const truncate = (value: string, length: number = 3): string => {
  let truncatedString = value
  value.match(/[a-z]+/gi).forEach((word) => {
    truncatedString = truncatedString.replace(word, word.substring(0, length))
  })
  return truncatedString
}
