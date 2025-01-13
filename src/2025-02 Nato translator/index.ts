export default (str: string): string => {
  let ret: Array<String> = []
  const natoAlphabet = [
    'Alfa',
    'Bravo',
    'Charlie',
    'Delta',
    'Echo',
    'Foxtrot',
    'Golf',
    'Hotel',
    'India',
    'Juliett',
    'Kilo',
    'Lima',
    'Mike',
    'November',
    'Oscar',
    'Papa',
    'Quebec',
    'Romeo',
    'Sierra',
    'Tango',
    'Uniform',
    'Victor',
    'Whiskey',
    'Xray',
    'Yankee',
    'Zulu',
    'Zero', //26
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    '(space)', //36
  ]

  const getIndex = (char: string): number | null => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789 '
    const index = alphabet.indexOf(char.toLowerCase())
    return index !== -1 ? index : null
  }
  const getNatoWord = (char: string) => {
    const index = getIndex(char)
    return natoAlphabet[index]
  }

  for (let i = 0; i < str.length; i++) {
    ret.push(getNatoWord(str[i]))
  }
  return ret.join(' ')
}
