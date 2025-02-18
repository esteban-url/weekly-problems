import { describe, expect, test } from '@jest/globals'
import f from '.'

describe('2025-03 findAnagrams', () => {
  test('"cbaebabacd", "abc"', () => {
    expect(f('cbaebabacd', 'abc')).toEqual([0, 6])
  })

  test('"fish", "cake"', () => {
    expect(f('fish', 'cake')).toEqual([])
  })
  test('"abab", "ab"', () => {
    expect(f('abab', 'ab')).toEqual([0, 1, 2])
  })
})
