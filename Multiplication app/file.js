const que = document.querySelector('.que')
const form = document.querySelector('form')
const score = document.querySelector('.scoreResult')
const input = document.querySelector('.input')

let result;
let count=0

window.addEventListener('DOMContentLoaded',()=>{
  init()
})
function init(){
  let num1 = Math.floor(Math.random ()*9) + 1
  let num2 = Math.floor(Math.random()*9) + 1
  que.textContent = `What is ${num1} multiply by ${num2}`
  result = num1*num2
}

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  submitAns()
  input.value = ''
  init()
})
function submitAns(){
  if(result == input.value){
    count++;
    score.textContent = count;
  }else{
    count--;
    score.textContent = count;
  }
}