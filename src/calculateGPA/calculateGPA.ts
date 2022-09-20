/**
 * Given a set of letter grades, output the GPA (grade point average) of those grades.
 * @param {string[]} grades
 * @returns {number} the Grade Point Average (GPA) with 1 decimal place
 * @example calculateGPA(['F', 'F', 'F']) // 0
 * @example calculateGPA(['A', 'A-', 'B+', 'B', 'B-']) // 3.3
 * @example calculateGPA(['A', 'B+', 'C-', 'A']) // 3.3
 */
export const calculateGPA = (grades: string[]): number => {
  const total = grades.reduce((subTotal, grade) => {
    return subTotal + gradeKey[grade.toLocaleUpperCase()]
  }, 0)

  return round(total / grades.length, 1)
}

const gradeKey = {
  A: 4,
  'A-': 3.7,
  'B+': 3.3,
  B: 3,
  'B-': 2.7,
  'C+': 2.3,
  C: 2,
  'C-': 1.7,
  'D+': 1.3,
  D: 1,
  'D-': 0.7,
  F: 0,
}

/**
 * Round a number to a certain number of decimal places
 * @param {number} value to be rounded
 * @param {number} precision number of decimal places
 * @returns {number} rounded value
 */
const round = (value: number, precision: number = 0): number => {
  const multiplier = Math.pow(10, precision)
  return Math.round(value * multiplier) / multiplier
}

