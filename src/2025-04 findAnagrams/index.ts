export default (s: string, p: string): number[] => {
  const ret: number[] = []
  const sArr = s.split('')
  const pArr = p.split('')
  for (let i = 0; i <= sArr.length - pArr.length; i++) {
    // get the current n letters. n = the length of p
    const temp = sArr.slice(i, i + pArr.length)
    //if the lengths are the same
    if (pArr.length === temp.length) {
      // if every letter in `p` is found in temp
      if (pArr.every((el) => temp.includes(el))) {
        ret.push(i)
      }
    }
  }

  return ret
}
