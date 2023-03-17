const leftCont = document.querySelector('.left')
const rightCont = document.querySelector('.right')
leftCont.addEventListener('mouseover',()=>{
    leftCont.classList.add('leftBig')
})
leftCont.addEventListener('mouseleave',()=>{
    leftCont.classList.remove('leftBig')
})
rightCont.addEventListener('mouseover',()=>{
    rightCont.classList.add('rightBig')
})
rightCont.addEventListener('mouseleave',()=>{
    rightCont.classList.remove('rightBig')
})