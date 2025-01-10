export default (year: number): string => {
  return new Date(year, 0, 1).toLocaleString('en', { weekday: 'long' })
}
