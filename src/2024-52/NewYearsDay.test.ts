import { describe, expect, test } from '@jest/globals'
import f from './NewYearsDay'

describe('2024-52 New years day', () => {
  test('2025 should be wednesday', () => {
    expect(f(2025)).toBe(`Wednesday`)
  })
  test('2024 should be monday', () => {
    expect(f(2024)).toBe(`Monday`)
  })
})
