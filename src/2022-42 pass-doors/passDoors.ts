export const passDoors = (doors: number, passes: number): number => {
  if (passes < 1) return 0
  if (passes === 1) return doors
  if (doors < 1) return 0
  let openDoors = new Array<number>(doors).fill(0)

  for (let pass = 1; pass < passes; pass++) {
    for (let door = pass; door < doors; ) {
      openDoors[door] = openDoors[door] === 0 ? 1 : 0
      door += pass + 1
    }
  }
  return openDoors.filter((x) => x === 0).length
}
