import { describe, expect, test } from '@jest/globals'
import f from '.'

describe('2025-03 longest sequence', () => {
  test('[1,2,3,4,5]', () => {
    expect(f([1, 2, 3, 4, 5])).toEqual(5)
  })

  test('[4,2,3,1,5]', () => {
    expect(f([4, 2, 3, 1, 5])).toEqual(2)
  })
  test('[10,11,7,8,9,12]', () => {
    expect(f([10, 11, 7, 8, 9, 12])).toEqual(3)
  })
  test('[4,2,3,1,5,10,11,7,8,9,12,1,2,3,4,5]', () => {
    expect(f([4, 2, 3, 1, 5, 10, 11, 7, 8, 9, 12, 1, 2, 3, 4, 5])).toEqual(5)
  })
})
