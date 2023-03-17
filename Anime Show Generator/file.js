// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '94c3132271mshbd93a10e9d888c6p1de8adjsnda55697bc229',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };

// fetch('https://anime-db.p.rapidapi.com/anime/by-ranking/1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const img = document.querySelector('.img')
const animeName = document.querySelector('.name')
const box = document.querySelector('.box')

const options = {
	method : 'GET',
	headers : {
		'X-RapidAPI-Key' : '94c3132271mshbd93a10e9d888c6p1de8adjsnda55697bc229',
		'X-RapidAPI-Host' : 'anime-db.p.rapidapi.com'
	}
}
const init = (id)=>{
	document.querySelector('.loading').style.display = 'block'
	document.querySelector('.btn').disabled = true
	img.style.display='none'
	animeName.innerText=''
	fetch(`https://anime-db.p.rapidapi.com/anime/by-ranking/${id}`,options)
.then(res=>res.json())
.then(res=>{
	document.querySelector('.loading').style.display = 'none'
	document.querySelector('.btn').disabled = false
	console.log(res)
	img.style.display='block'
	img.src = `${res.image}`
	animeName.innerText = `${res.title}`
})
.catch(err=>console.error(err))
}
init(Math.floor(Math.random()*10))
document.querySelector('.btn').addEventListener('click',()=>{
	let index = Math.floor(Math.random()*20)
	init(index)
})
