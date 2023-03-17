const box1 = document.querySelector('.box1')
const menuItems = document.querySelector('.menu-items')
const lists = document.querySelectorAll('li')
const arrow = document.querySelector('.arrow')
const heading = document.querySelector('.heading')

box1.addEventListener('click',()=>{
    menuItems.classList.toggle('active')
    arrow.classList.toggle('hide')
})
lists.forEach(list=>{
    list.addEventListener('click',()=>{
        heading.innerHTML = list.innerHTML
    })
})