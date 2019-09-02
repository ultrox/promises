class NanoPromse {
  constructor(executor) {
    this.state = 'PENDING' // default state
    this.stack = []

    const resolve = res => {
      this.state = 'FULFILED'
      this.stack[0].onSuccess(res)
    }

    const reject = err => {
      this.state = 'REJECTED'
      this.stack[0].onError(err)
    }

    executor(resolve, reject)
  }
  // .then
  addOnStack(onSuccess, onError) {
    this.stack.push({ onSuccess, onError })
  }
}

const executor = (resolve, reject) => {
  setTimeout(function() {
    resolve(Date.now())
  }, 3000)
}

const mp = new NanoPromse(executor)

const onSuccess = (data) => {
  console.log(data, mp.state)
}
const onError = (err) => {
  console.log(err, mp.state)
}

mp.addOnStack(onSuccess, onError)

