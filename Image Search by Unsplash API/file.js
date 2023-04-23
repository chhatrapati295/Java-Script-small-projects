const client_id = 'BU-HozrQrJfb8tfFsDb1pkyhJDLMt0UEMtWYd9Bfgj8';
const input = document.querySelector('#input')
const form = document.querySelector('form')
const box = document.querySelector('.box')
const showBtn = document.querySelector('.showBtn')

let page = 1
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(input.value)
})
async function getData(word){
    const url = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${word}&per_page=10&client_id=${client_id}`)
    const data = await url.json()
    console.log(data)
    if(page == 1){
        box.innerHTML = ''
    }
    setData(data?.results)
}
function setData(items){
    items.map(item=>{
        const card = document.createElement('div')
        card.className = 'card'
        const img = document.createElement('img')
        img.src = item.urls.small
        img.alt = item.alt_description
        const imageLink = document.createElement('a')
        imageLink.className = 'link'
        imageLink.href = item.links.html
        imageLink.target = '_blank'
        imageLink.textContent = item.alt_description
        box.append(card)
        card.append(img)
        card.append(imageLink)
    })
    page++;
    if(page > 1){
        showBtn.style.display = 'block'
    }
}
showBtn.addEventListener('click',()=>{
    getData(input.value)
})