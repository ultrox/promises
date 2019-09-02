const MicroPromse = require('./index')


const executor = (resolve, reject) => {
  setTimeout(function() {
    reject(Date.now())
  }, 3000)
}

const mp = new MicroPromse(executor)

const onFulfilled = data => {
  console.log('resolved', data)
}

const onRejected = err => {
  console.log('rejected 33', err)
}

mp.add(onFulfilled, console.log)
