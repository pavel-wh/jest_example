const {sum} = require('./intro')

test('Sum should return sum of two values',  () => {
  expect(sum(1, 3)).toBe(4)
  expect(sum(1, 3)).toEqual(4)
})

test('Sum should return value correctly comparing to other', () => {
  expect(sum(2, 3)).toBeGreaterThan(4)
  expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
  expect(sum(2, 3)).toBeLessThan(6)
  expect(sum(2, 3)).toBeLessThanOrEqual(5)
})

test('Sum should sum 2 flot values correctly', () => {
  expect(sum(0.2, 0.3)).toBe(0.5)
  expect(sum(0.1, 0.2)).toBe(0.3)
})