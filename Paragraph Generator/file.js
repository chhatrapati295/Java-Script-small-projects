const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const input = document.querySelector('#input-box')
const getWord = (n)=>{
    let text = ''
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<n;i++){
        text += letters[(Math.random()*25).toFixed()]
    }
    return text
}
const getpara = ()=>{
    const numberOfWords = input.value 
    let data = ''
    const para = document.createElement('p')
    para.setAttribute('class','description')
    for(let i=0;i<numberOfWords;i++){
        data += getWord((Math.random()*10).toFixed())
        data += ' '
    }
    para.innerText = data
    container.append(para)
    alert('Click on paragraph to copy text.')
    para.addEventListener('click',(e)=>{
        navigator.clipboard.writeText(e.target.innerText)
        para.style.backgroundColor = 'lightBlue'
        console.log(e.target.innerText)
    })
}