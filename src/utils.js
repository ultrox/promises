function spinner() {
  const arr = ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']
  let state = 0;
  // so you can cleanup
  return setInterval(() => { 
    if(state === arr.length) {
      state = 0; 
    }
    // var s = new Promise(executor)
    process.stdout.write(arr[state])
    // process.stdout.clearLine();
    process.stdout.cursorTo(0);
    state++
  }, 80)
}

function sum(a,b) {
  return a + b
}

function clear() {
  console.clear()
  process.stdout.cursorTo(0)
}


function loading({msg = 'Loading...'} = {}) {
  process.stdout.write(msg)
  process.stdout.cursorTo(0)
}

function log(str, isNewLine = true) {

  let _str = str;
  if(isNewLine) {
    _str = `${str}\n`
  }

  process.stdout.write(_str)
}
module.exports = {
  sum,
  spinner,
  loading,
  clear,
  log
}
