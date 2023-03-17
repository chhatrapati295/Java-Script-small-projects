const btn = document.querySelector('.btn')
const one = document.querySelector('.setUp')
const two = document.querySelector('.punchLine')

const options = {
	method : 'GET',
	headers : {
		'X-RapidAPI-Key' : '94c3132271mshbd93a10e9d888c6p1de8adjsnda55697bc229',
		'X-RapidAPI-Host' :  'dad-jokes.p.rapidapi.com'
	}
}
const getData = async()=>{
	one.innerHTML = `<img class='img' src='./spinner.gif' />`;
	two.innerText='';
	btn.disabled = true;
	const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke', options);
	const data = await response.json()
	console.log(data)
	one.innerText = data.body[0].setup
	two.innerText = data.body[0].punchline
	btn.disabled = false;
}
getData()
btn.addEventListener('click',getData)