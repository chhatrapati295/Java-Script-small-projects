const data = [
    {
        id : 1,
        textContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam officiis odio ratione, quis numquam sed sequi fuga sunt aliquid provident, vel nesciunt porro iure hic eos molestias recusandae ipsa assumenda.',
        imageId : 'https://plus.unsplash.com/premium_photo-1677087122572-dfd9f7ab2e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
        id : 2,
        textContent : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quae adipisci hic consequuntur eligendi, quos sequi provident est amet veniam! Commodi facilis porro asperiores, at molestiae aperiam magnam?',
        imageId : 'https://images.unsplash.com/photo-1682289571993-32a168b263bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
        id : 3,
        textContent : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit autem eligendi libero ullam quod repudiandae quo, soluta quasi incidunt similique assumenda nostrum, dignissimos repellendus facere delectus dicta quidem voluptatum perferendis vitae accusamus tempore quam.',
        imageId : 'https://plus.unsplash.com/premium_photo-1676648534602-db1517105311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60'
    },
]

const tabs = document.querySelectorAll('.tabs div')
const head = document.querySelector('.head')
const content = document.querySelector('.content')
const img = document.querySelector('img')

window.addEventListener('DOMContentLoaded',()=>{
    setData(0)
})

tabs.forEach(tab=>{
    tab.addEventListener('click',(e)=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        e.target.classList.add('active')
        if(e.target.textContent === 'Step 1'){
            setData(0)
        }else if(e.target.textContent === 'Step 2'){
            setData(1)
        }else{
            setData(2)
        }
    })
})

function setData(idx){
    img.src = `${data[idx].imageId}`
    head.textContent = `Step ${data[idx].id}`
    content.textContent = `Step ${data[idx].textContent}`
}