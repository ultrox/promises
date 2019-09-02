const MicroPromise = require('./index')

it('throws when executor is not function', function() {
  expect(() => {
    const mp = new MicroPromise('I NEED FUNCTION')
  }).toThrow()
})
