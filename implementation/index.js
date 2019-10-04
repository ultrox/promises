class NanoPromse {
  constructor(executor) {
    this.state = 'PENDING' // default state
    this.stack = []

    const resolve = res => {
      this.state = 'FULFILED'
      this.stack[0].onSuccess(res) // on purpuse fragile
    }

    const reject = err => {
      this.state = 'REJECTED'
      this.stack[0].onError(err)
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  // .then method is stack
  addOnStack(onSuccess, onError) {
    this.stack.push({ onSuccess, onError })
  }
} // end Promise Implementation

const executor = (resolve, reject) => {
  setTimeout(function() {
    resolve(Date.now())
  }, 3000)
}

const np = new NanoPromse(executor)
console.log(np, 'np')

const onSuccess = data => {
  console.log(data, np.state)
}
const onError = err => {
  console.log(err, np.state)
}

np.addOnStack(onSuccess, onError)
// np.then(onSuccess, onError) // alternative in real Promise lib
