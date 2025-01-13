import { describe, expect, test } from '@jest/globals'
import f from '.'

describe('2025-02 nato translator', () => {
  test('hello world', () => {
    expect(f('hello world')).toEqual(
      'Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta'
    )
  })

  test('3spooky5me', () => {
    expect(f('3spooky5me')).toEqual(
      'Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo'
    )
  })
})
