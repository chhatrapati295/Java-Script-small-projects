const form = document.querySelector('form')
const input = document.querySelector('.input')
const lists = document.querySelector('.lists')


// let list = JSON.parse(localStorage.getItem('list'))
// if(list){
//     list.forEach(liItem=>{
//         todoList(liItem)
//     })
// }
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     todoList()
// })

// function todoList(task){
//     let newTask = input.value
//     if(task){
//         newTask = task.name
//     }
//     const liEl = document.createElement('li')
//     liEl.innerText = newTask
//     lists.append(liEl)
//     input.value = ''
//     const trashBtn = document.createElement('div')
//     trashBtn.innerHTML = `<i class="fas fa-trash"></i>`
//     liEl.append(trashBtn)
//     trashBtn.addEventListener('click',()=>{
//         liEl.remove()
//         updateLocalStorage()
//     })
//     updateLocalStorage()
// }

// function updateLocalStorage(){
//     const allLiEl = document.querySelectorAll('li')
//     list = [];
//     allLiEl.forEach(oneLi=>{
//         list.push({
//             name : oneLi.innerText
//         })
//     })
//     localStorage.setItem('list',JSON.stringify(list))
// }


// /////////////////////////////////////////////////////////////////


let list = JSON.parse(localStorage.getItem('list'))
if(list){
    list.forEach(li=>{
        addTask(li)
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value !== ''){
        addTask()
    }
})

function addTask(task){
    let newTask = input.value
    if(task){
        newTask = task.name
    }
    const li = document.createElement('li')
    li.className = 'listItem'
    li.textContent = newTask
    lists.append(li)
    const trashBtn = document.createElement('button')
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`
    li.append(trashBtn)
    trashBtn.addEventListener('click',()=>{
        li.remove()
        updateStorage()
    })
    updateStorage()
    input.value = ''
}
function updateStorage(){
    const allLi = document.querySelectorAll('li')
    list = []
    allLi.forEach(liEl=>{
        list.push({
            name : liEl.innerText
        })
    })
    localStorage.setItem('list',JSON.stringify(list))
}
