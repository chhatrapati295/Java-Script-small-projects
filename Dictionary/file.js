const input = document.querySelector('.input')
const word = document.querySelector('.one')
const meaning = document.querySelector('.two')
const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const refresh = document.querySelector('#refresh')


const showData = (data)=>{
	const div = document.createElement('div')
	div.setAttribute('class','box')
	div.innerHTML = `
	<span class="one">Word title : <span>${input.value}</span></span>
	<span class="two">Meaning : <span>${data[0].meanings[0].definitions[0].definition}</span></span>
	<audio src=${data[0].phonetics[0].audio} controls></audio>
	`
	input.value = ''
	container.append(div)
	refresh.addEventListener('click',()=>{
		if(!data){
			refresh.disabled = true
		}else{
			window.location.reload()
		}
	})
}
const getData = async ()=>{
	document.querySelector('.img-div img').style.display = 'block';
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
	const data = await response.json()
	document.querySelector('.img-div img').style.display = 'none';
	console.log(data)
	showData(data)
}
btn.addEventListener('click',getData)