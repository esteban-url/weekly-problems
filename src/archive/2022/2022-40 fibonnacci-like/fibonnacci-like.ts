/** Generate a sequence of n digits where the next number in the pattern is the sum of the previous two numbers.
 * @param {number} first the first number in the sequence
 * @param {number} second the second number in the sequence
 * @param {number} results the number of results to return
 * @returns {number[]} the sequence of numbers
 * @example fibLike(10, 20, 5) // [10, 20, 30, 50, 80]
 * @example fibLike(3, 7, 5) // [3, 7, 10, 17, 27]
 * @example fibLike(1, 1, 10) // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */
export const fibLike = (
  first: number,
  second: number,
  results: number
): number[] => {
  const sequence: number[] = [first, second]
  for (let i = 1; i < results - 1; i++) {
    sequence.push(sequence[i - 1] + sequence[i])
  }

  return results < 2 ? sequence.slice(0, results) : sequence
}

/** Determine if a sequence is “fibonacci - like”
 * @param {number[]} sequence the sequence to test
 * @returns {boolean} true if the sequence is fibonacci - like
 * @example isFibLike([10, 20, 30, 50, 80]) // true
 * @example isFibLike([3, 7, 10, 17, 27]) // true
 * @example isFibLike([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]) // true
 * @example isFibLike([1, 2, 3, 4, 5, 6, 7]) // false
 **/
export const isFibLike = (sequence: number[]): boolean => {
  if (sequence.length < 3) return false
  for (let i = sequence.length - 1; i > 1; i--) {
    if (sequence[i] !== sequence[i - 1] + sequence[i - 2]) return false
  }
  return true
}
