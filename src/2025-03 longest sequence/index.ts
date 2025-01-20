// Copilot assisted
// export default (arr: number[]): number => {
//   if (arr.length <= 2) return arr.length
//   let maxSequence = 0
//   let currentSequence = 1
//   for (let i = 1; i < arr.length; i++) {
//     const diff = arr[i] - arr[i - 1]
//     if (Math.abs(diff) === 1) {
//       currentSequence++
//       if (currentSequence > maxSequence) {
//         maxSequence = currentSequence
//       }
//     } else {
//       currentSequence = 1
//     }
//   }
//   return maxSequence
// }

export default (arr: number[]): number => {
  let maxSequence = 0
  arr.reduce((acc, curr, i) => {
    if (i === 0) return 1
    const diff = curr - arr[i - 1]
    if (diff <= 1 && diff >= -1) {
      const thisSequence = acc + 1
      if (thisSequence > maxSequence) {
        maxSequence = thisSequence
      }
      return thisSequence
    } else return 1
  }, 0)
  return maxSequence
}
