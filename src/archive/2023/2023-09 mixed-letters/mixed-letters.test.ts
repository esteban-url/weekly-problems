import { describe, expect, test } from '@jest/globals'
import { scramble } from './mixed-letters'

describe('mixed letters', () => {
  test('should not scramble any of the words', () => {
    expect(scramble('Our cat ate a rat.')).toBe('Our cat ate a rat.')
  })
  test('should not scramble any of the words regardless of the special characters', () => {
    expect(scramble('Our cat a!%^te a rat.')).toBe('Our cat a!%^te a rat.')
  })
  test('should scramble the letter of words with four characters or more', () => {
    expect(
      scramble('A quick brown fox jumped over the lazy dog.').match(
        /A q[uic]{3}k b[row]{3}n fox j[umpe]{4}d o[ve]{2}r the l[az]{2}y dog./
      )
    ).toBeTruthy()
  })
})
