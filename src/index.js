const fetch = require('node-fetch');
const { loading, clear, log } = require('./utils')

var prefix = 'http://'
var uri = 'reddit.com/r/mma'

//
// const API_BASE = 'http://starwars.egghead.training'
//
// clear()
// loading({msg: 'Today Loading'})
//
// fetch(`${API_BASE}/films`)
//   .then(onFullfiled)
//   .catch(onRejected)
//   .finally(_ => loading({msg: ''}))
//   
// function onRejected(err) {
//   console.log(err)
// }
//
// function onFullfiled(res) {
//   if(!res.ok) {
//     return Promise.reject(new Error('Response not successuful'))
//   }
//   return res.json().then(films => {
//     log(getFilmTitles(films).join('\n'))
//   })
// }
//
// // helper
// function getFilmTitles(films) {
//   return films.slice(0,6)
//     .sort((a,b) => a.episode_id - b.episode_id)
//     .map(f => `${f.episode_id}. ${f.title}`)
// }
