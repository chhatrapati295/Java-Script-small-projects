const emojis = document.querySelectorAll('.emoji')
const stars = document.querySelectorAll('.star')
const colors = ['red','tomato','orange','orchid','limeGreen']

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        updateRating(index)
        updateEmoji(index)
    })
})

function updateRating (index){
    stars.forEach((star,idx)=>{
        if(idx < index + 1){
            star.classList.add('active')
        }else{
            star.classList.remove('active')
        }
    })
}
function updateEmoji (index){
    emojis.forEach(emoji=>{
        emoji.style.transform = `translateX(-${index *5}rem)`
        emoji.style.backgroundColor = `${colors[index]}`
    })
}