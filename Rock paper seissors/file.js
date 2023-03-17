const computerDisplay = document.querySelector('.computer')
const userDisplay = document.querySelector('.user')
const resultDisplay = document.querySelector('.result')
const buttons = document.querySelectorAll('.btn')
console.log(buttons)
let computer , user , result
buttons.forEach(element=>{
    element.addEventListener('click',(e)=>{
        user = e.target.innerText
        userDisplay.innerText = user
        computerGuess()
        checkWin()
    })
})
function computerGuess (){
    let random = Math.floor(Math.random()*3 +1)
    if(random === 1){
        computer = 'rock'
    }else if(random ===2){
        computer = 'paper'
    }else{
        computer = 'scissor'
    }
    computerDisplay.innerText = computer
}
function checkWin (){
    if(computerDisplay.innerText === userDisplay.innerText){
        resultDisplay.innerText = 'Draw 😒'
    }else if(computerDisplay.innerText === 'rock' && userDisplay.innerText === 'paper'){
        resultDisplay.innerText = 'You Won 😊'
        resultDisplay.style.color = 'royalblue'
    }
    else if(computerDisplay.innerText === 'paper' && userDisplay.innerText === 'rock'){
        resultDisplay.innerText = 'Computer Won 😿'
        resultDisplay.style.color = 'crimson'
    
    }else if(computerDisplay.innerText === 'rock' && userDisplay.innerText === 'scissor'){
        resultDisplay.innerText = 'Computer Won 😿'
        resultDisplay.style.color = 'crimson'
    
    }else if(computerDisplay.innerText === 'scissor' && userDisplay.innerText === 'rock'){
        resultDisplay.innerText = 'You Won 😊'
        resultDisplay.style.color = 'royalblue'
    
    }else if(computerDisplay.innerText === 'scissor' && userDisplay.innerText === 'paper'){
        resultDisplay.innerText = 'Computer Won 😿'
        resultDisplay.style.color = 'crimson'
    
    }else if(computerDisplay.innerText === 'paper' && userDisplay.innerText === 'scissor'){
        resultDisplay.innerText = 'You Won 😊'
        resultDisplay.style.color = 'royalblue'
    }else{
        console.log('error')
    }
}