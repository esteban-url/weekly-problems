import { describe, expect, test } from '@jest/globals'
import f from '.'

describe('2025-03 findAnagrams', () => {
  test('"12+" should equal 3', () => {
    expect(f('12+')).toEqual(3)
  })

  test('"56+7*" should equal 77', () => {
    expect(f('56+7*')).toEqual(77)
  })
  test('"56+72*" should equal 154', () => {
    expect(f('56+72**')).toEqual(154)
  })
})
