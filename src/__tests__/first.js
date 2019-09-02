const utils = require('../utils')

test('tests works', () => {
  const result = utils.sum(1,1)
  expect(result).toBe(2)
});
