
const input = document.querySelector('.input')
const container = document.querySelector('.container')
const form = document.querySelector('form')
const box = document.querySelector('.box')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData()
})
const options = {
    method : 'GET',
    headers : {
        'X-RapidAPI-Key' : '94c3132271mshbd93a10e9d888c6p1de8adjsnda55697bc229',
        'X-RapidAPI-Host' : 'weather-by-api-ninjas.p.rapidapi.com'
    }
}
const getData = async ()=>{
    box.innerText = 'Loading...'
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`, options)
    const data = await response.json()
    console.log(data)
        showData(data)
}
function showData(data){
    // const div = document.createElement('div')
    if(!data.temp){
        box.innerText = 'City not found'
    }else{
        box.innerHTML = `
    <div class="sm-box">
    <span class="heading">City</span>
    <span class="city ans">${input.value.toUpperCase()}</span>
</div>
<div class="sm-box">
    <span class="heading">Temperature</span>
    <span class="temp ans">${data.temp} ℃</span>
</div>
<div class="sm-box">
    <span class="heading">Feels like</span>
    <span class="feels ans">${data.feels_like} ℃</span>
</div>
<div class="sm-box">
    <span class="heading">Humidity</span>
    <span class="humadity ans">${data.humidity}</span>
</div>
<div class="sm-box">
    <span class="heading">Wind</span>
    <span class="wind ans">${data.wind_speed} kmph</span>
</div>
    `
    }
    input.value=''
}