const inner = document.querySelector('#inner');
const spiner = document.querySelector('#spinner')
const API = 'https://starwars.egghead.training/films2'

const spin = spinner(spiner);

// eslint-disable-next-line
const movies = fetch(API)
	.then(res => {
		if(!res.ok) {
			return Promise.reject(new Error('not ok5'))
		}
		return res.json()
	})
	.then(data => {
		inner.innerText = formatTitle(data)
		console.log(data)
	})
	.catch(err => {
		console.warn(err)
		inner.innerText = ':('
	})
	.finally(_=> {
		clearInterval(spin); 
		spiner.innerText = ''
	})


function formatTitle(movies) {
	return movies
		.map(m => `${m.id} - ${m.title}`)
	        .join('\n')
}

function spinner(target) {
const arr = ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']
let state = 0;
return setInterval(_ => { 
	if(state === arr.length) 
		state = 0; 
	target.innerText = arr[state]
	state++
}, 80)
}
