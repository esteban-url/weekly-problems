import { describe, expect, test } from '@jest/globals'
import { fibLike, isFibLike } from './fibonnacci-like'

describe('fibLike', () => {
  test('(10, 20, 5) should be [10, 20, 30, 50, 80]', () => {
    expect(fibLike(10, 20, 5)).toEqual([10, 20, 30, 50, 80])
  })

  test('(3, 7, 5) should be [3, 7, 10, 17, 27]', () => {
    expect(fibLike(3, 7, 5)).toEqual([3, 7, 10, 17, 27])
  })

  test('(1, 1, 11) should be [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]', () => {
    expect(fibLike(1, 1, 11)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  })
})
describe('isFibLike', () => {
  test('[10, 20, 30, 50, 80] should be true', () => {
    expect(isFibLike([10, 20, 30, 50, 80])).toBe(true)
  })
  test('[3, 7, 10, 17, 27] should be true', () => {
    expect(isFibLike([3, 7, 10, 17, 27])).toBe(true)
  })
  test('[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]should be true', () => {
    expect(isFibLike([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])).toBe(true)
  })
  test('[1, 2, 3, 4, 5, 6, 7] should be false', () => {
    expect(isFibLike([1, 2, 3, 4, 5, 6, 7])).toBe(false)
  })
})
