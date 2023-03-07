import { describe, expect, test } from '@jest/globals'
import { ordinal } from './ordinal'

describe('ordinal numbers', () => {
  test('1 should be 1st', () => {
    expect(ordinal(1)).toBe('1st')
  })
  test('2 should be 2nd', () => {
    expect(ordinal(2)).toBe('2nd')
  })
  test('3 should be 3rd', () => {
    expect(ordinal(3)).toBe('3rd')
  })
  test('4 should be 4th', () => {
    expect(ordinal(4)).toBe('4th')
  })
  test('21 should be 21st', () => {
    expect(ordinal(21)).toBe('21st')
  })
  test('22 should be 22nd', () => {
    expect(ordinal(22)).toBe('22nd')
  })
  test('23 should be 23rd', () => {
    expect(ordinal(23)).toBe('23rd')
  })
  test('123 should be 123rd', () => {
    expect(ordinal(123)).toBe('123rd')
  })
  test('234563 should be 234563rd', () => {
    expect(ordinal(234563)).toBe('234563rd')
  })
})
