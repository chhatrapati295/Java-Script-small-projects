const startBtn = document.querySelector('.startBtn')
const scoreText = document.querySelector('.score')
const timerText = document.querySelector('.timer')
const squares = document.querySelectorAll('.square')
const gridDisplay = document.querySelector('.grid')

let cardPosition;
let score =0;
let timer =60;

startBtn.addEventListener('click',()=>{
    startBtn.style.display = 'none'
    const firstInterval = setInterval(() => {
        squares.forEach(square=>{
                square.classList.remove('mole')
        })
        let randomNum = Math.floor(Math.random()*9)
        let randomCard = squares[randomNum]
        randomCard.classList.add('mole')
        cardPosition = randomCard.id
        if(timer == 0){
            clearInterval(firstInterval)
            alert(`Game over ! your score is ${score}`)
            restartGame()
        }else{
            timer--;
            timerFunc()
        }
    }, 100);
})

function clickCard (){
    squares.forEach(item=>{
        item.addEventListener('mousedown',()=>{
            if(item.id == cardPosition){
                score++;
                scoreText.textContent = score
            }
        })
    })
}
clickCard()

function timerFunc (){
    timerText.textContent = timer;
}
function restartGame(){
    const btn = document.createElement('button')
    btn.className = 'restartBtn'
    btn.textContent = 'Reset'
    gridDisplay.after(btn)
    btn.addEventListener('click',()=>{
        window.location.reload()
    })
}