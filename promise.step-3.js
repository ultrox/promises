const fetch = require('node-fetch');
const { loading, clear } = require('./utils')

const API_BASE = 'http://starwars.egghead.training'

loading()

process.stdout.write('Loading..')

fetch(`${API_BASE}/films3`)
  .then(onFullfiled)
  .catch(onRejected)

function onRejected(err) {
  console.log(err)
}
// why don't we end up in .catch clause, clearly there is error going on
// refactor this function when there is wrong url to end up in .catch clause
function onFullfiled(res) {
  clear()
  if(!res.on) {
    throw new Error('Response not successuful')
  }
  return res.json().then(films => {
    process.stdout.write(getFilmTitles(films).join('\n'))
  })
}

// helper
function getFilmTitles(films) {
  return films.slice(0,6)
    .sort((a,b) => a.episode_id - b.episode_id)
    .map(f => `${f.episode_id}. ${f.title}`)
}
