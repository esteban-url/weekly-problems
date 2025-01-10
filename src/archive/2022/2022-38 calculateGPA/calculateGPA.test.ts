import { describe, expect, test } from '@jest/globals'
import { calculateGPA } from './calculateGPA'
describe('calculateGPA', () => {
  test('["A"] should be 4', () => {
    expect(calculateGPA(['A'])).toBe(4)
  })
  test('["F","f","F"] should be 4', () => {
    expect(calculateGPA(['F', 'f', 'F'])).toBe(0)
  })
  test('["A","A-","B+","B","B-"] should be 3.3', () => {
    expect(calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])).toBe(3.3)
  })
  test('["A","B+","C-","A"] should be 3.3', () => {
    expect(calculateGPA(['A', 'B+', 'C-', 'A'])).toBe(3.3)
  })
})
