// const value = document.querySelector('.value')
// const decrease = document.querySelector('.decrease')
// const reset = document.querySelector('.reset')
// const increase = document.querySelector('.increase')
// const buttons = document.querySelectorAll('.btn')
// let count = 0
// buttons.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.currentTarget.innerHTML == 'DECREASE'){
//             count--;
//             value.textContent = count
//         }else if(e.currentTarget.innerHTML == 'INCREASE'){
//             count++;
//             value.textContent = count
//         }else{
//             count = 0
//             value.textContent = count
//         }if(value.textContent > 0){
//             value.style.color = 'green'
//         }else if(value.textContent <0){
//             value.style.color = 'red'
//         }else{
//             value.style.color = 'black'
//         }
//     })
// })


let count = 0
const value = document.querySelector('.value')
const buttons = document.querySelectorAll('.btn')
// console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList
        if(styles.contains('de')){
            count--;
            value.textContent = count
        }else if(styles.contains('in')){
            count++;
            value.textContent = count
        }else{
            count = 0
            value.textContent = count
        }if(value.textContent > 0){
            value.style.color = 'green'
        }else if(value.textContent < 0){
            value.style.color = 'red'
        }else{
            value.style.color = 'black'
        }
    })
});