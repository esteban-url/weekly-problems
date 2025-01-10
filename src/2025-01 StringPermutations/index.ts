export default (str: string): string[] => {
  const ret: Array<string> = []
  for (let i = 0; i < str.length; i++) {
    let fwd = str[i]
    for (let j = 0; j < str.length; j++) {
      fwd += i === j ? '' : str[j]
    }
    ret.push(fwd)

    let back = str[i]
    for (let k = str.length - 1; k >= 0; k--) {
      back += i === k ? '' : str[k]
    }
    ret.push(back)
  }
  return ret
}
