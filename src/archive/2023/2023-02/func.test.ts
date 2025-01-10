import { describe, expect, test } from '@jest/globals'
import { func } from './func'

describe('sample test suite', () => {
  test('should work', () => {
    expect(func(2, 2)).toBe(`Hello World! 2 + 2 = 4`)
  })
})
