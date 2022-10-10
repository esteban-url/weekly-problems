import { describe, expect, test } from '@jest/globals'
import { truncate } from './truncate-words'

describe('truncate', () => {
  test('("*hello* darkness, my ~old_friend", 3) should be "*hel* dar, my ~old_fri"', () => {
    expect(truncate('*hello* darkness, my ~old_friend', 3)).toBe(
      '*hel* dar, my ~old_fri'
    )
  })

  test('("never gonna give you up", 3) should be "nev gon giv you up"', () => {
    expect(truncate('never gonna give you up', 3)).toBe('nev gon giv you up')
  })

  test('("never never nev gonna give you up", 3) should be "nev gon giv you up"', () => {
    expect(truncate('never never nev gonna give you up', 3)).toBe(
      'nev nev nev gon giv you up'
    )
  })
})
