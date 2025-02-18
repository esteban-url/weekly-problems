export default (exp: string): number => {
  const matches = [...exp.matchAll(/\d+[\+\/\*-]/g)]

  let result: number | undefined = undefined
  matches.forEach((m) => {
    const arr = m[0].split('')
    const op = arr.pop()
    if (result !== undefined) {
      arr.unshift(result.toString())
    }
    result = eval(arr.join(op))
  })

  return result
}
