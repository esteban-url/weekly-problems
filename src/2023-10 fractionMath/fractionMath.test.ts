import { describe, expect, test } from '@jest/globals'
import { fractionMath } from './fractionMath'

describe('fraction math', () => {
  test('3/4 plus 3/4 should equal 3/2', () => {
    expect(fractionMath('3/4', 'add', '5/7')).toBe('41/28')
  })
  test('3/4 minus 5/7 should equal 1/28', () => {
    expect(fractionMath('3/4', 'subtract', '5/7')).toBe('1/28')
  })

  test('3/2 minus 3/4 should equal 3/4', () => {
    expect(fractionMath('3/2', 'subtract', '3/4')).toBe('3/4')
  })
  test('3/2 divided by 3/4 should equal 2/1', () => {
    expect(fractionMath('3/2', 'divide', '3/4')).toBe('2')
  })
  test('1/8 multiply by 2/2 should equal 1/8', () => {
    expect(fractionMath('1/8', 'divide', '2/2')).toBe('1/8')
  })
})
