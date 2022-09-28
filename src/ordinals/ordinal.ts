/**
 * Given a humber returns the ordinal suffix for that number.
 * @param {number} number number to get the ordinal suffix for
 * @returns {string}  the ordinal suffix for the number
 * @example ordinal(1) // 1st
 * @example ordinal(2) // 2nd
 * @example ordinal(3) // 3rd
 * @example ordinal(4) // 4th
 * @example ordinal(21) // 21st
 * @example ordinal(22) // 22nd
 * @example ordinal(23) // 23rd
 */
export const ordinal = (number: number): string => {
  const lastDigit = number % 10
  if (lastDigit === 1 && number !== 11) {
    return `${number}st`
  }
  if (lastDigit === 2 && number !== 12) {
    return `${number}nd`
  }
  if (lastDigit === 3 && number !== 13) {
    return `${number}rd`
  }
  return `${number}th`
}
