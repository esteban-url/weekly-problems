import Fraction from 'fraction.js'
type operations = 'add' | 'subtract' | 'multiply' | 'divide'
export const fractionMath = (
  first: string,
  operation: operations,
  second: string
): string => {
  let result: number
  const a = new Fraction(first).valueOf()
  const b = new Fraction(second).valueOf()
  switch (operation) {
    case 'add':
      result = a + b
      break
    case 'subtract':
      result = a - b
      break
    case 'multiply':
      result = a * b
      break
    case 'divide':
      result = a / b
      break
  }
  return new Fraction(result).toFraction()
}
