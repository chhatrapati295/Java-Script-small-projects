const btns = document.querySelectorAll('.btn')
const contents = document.querySelectorAll('.content')

btns.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        contents.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.parentNode.nextElementSibling.classList.toggle('active')
    })
})