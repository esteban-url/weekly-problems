import { describe, expect, test } from '@jest/globals'
import f from '.'

describe('2025-01 string permutations', () => {
  test('abc', () => {
    expect(f('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
})
