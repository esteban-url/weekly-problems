import { describe, expect, test } from '@jest/globals'
import { passDoors } from './passDoors'

describe('pass Doors', () => {
  test('0 doors, 0 pass should be 0', () => {
    expect(passDoors(0, 0)).toBe(0)
  })
  test('1 doors, 1 pass should be 1', () => {
    expect(passDoors(1, 1)).toBe(1)
  })
  test('0 doors, any number greater than 1 passes should be 0', () => {
    expect(passDoors(0, Math.ceil(Math.random() * 100))).toBe(0)
  })
  test('any number greater than 1 doors, 0 passes should be 0', () => {
    const rand = Math.ceil(Math.random() * 100)
    expect(passDoors(rand, 0)).toBe(0)
  })
  test('any number greater than 1 doors, 1 pass should be the number of doors', () => {
    const rand = Math.ceil(Math.random() * 100)
    expect(passDoors(rand, 1)).toBe(rand)
  })
  test('7 doors, 1 pass should be 7', () => {
    expect(passDoors(7, 1)).toBe(7)
  })
  test('7 doors, 2 passes should be 0', () => {
    expect(passDoors(7, 2)).toBe(4)
  })
  test('7 doors, 3 passes should be 4', () => {
    expect(passDoors(7, 3)).toBe(4)
  })
  test('7 doors, 4 passes should be 5', () => {
    expect(passDoors(7, 4)).toBe(5)
  })
  test('7 doors, 5 passes should be 4', () => {
    expect(passDoors(7, 5)).toBe(4)
  })
  test('7 doors, 6 passes should be 3', () => {
    expect(passDoors(7, 6)).toBe(3)
  })
  test('7 doors, 7 pass should be 5', () => {
    expect(passDoors(7, 7)).toBe(2)
  })
  test('7 doors, 70 pass should be 5', () => {
    expect(passDoors(7, 70)).toBe(2)
  })
})
