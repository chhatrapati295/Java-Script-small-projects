const boxes = document.querySelectorAll('.box-sm')
const container = document.querySelector('.container')
const container1 = document.querySelector('.container1')
const btn = document.querySelector('.btn')
let index = 0;

const refresh = ()=>{
    window.location.reload()
}
Array.from(boxes).forEach(box=>{
    box.addEventListener('click',(e)=>{
        removeClass()
        box.classList.add('active')
        btn.addEventListener('click',()=>{
            index++;
            if(index === 1){
                container1.remove()
            container1.style.display = 'none'
            const div = document.createElement('div')
            div.setAttribute('class','container2')
            div.innerHTML = `
            <span class="one">Thank You !</span>
                        <p >Feedback : <span class="two">${box.innerText}</span></p>
                        <p class="three">We'll use your feedback to improve our customer support.</p>
                        <span class="btn2" onClick='refresh()'>Edit review</span>
            `
            container.append(div)
            }else{
                console.log('error')
            }
        })
    })
})

function removeClass(){
    Array.from(boxes).forEach(box=>{
        box.classList.remove('active')
    })
}