const question = [
    {
        'que':'How many states in India ?',
        'a':28,
        'b':26,
        'c':29,
        'd':30,
        'correct':'a'
    },
    {
        'que':'Which state is the smallest state of India by area ?',
        'a':'Rajasthan',
        'b':'Bihar',
        'c':'Goa',
        'd':'Sikkim',
        'correct':'c'
    },
    {
        'que':'Which is the largest state of India by population ?',
        'a':'Maharashtra',
        'b':'Uttar-pradesh',
        'c':'Haryana',
        'd':'Rajasthan',
        'correct':'b'
    },
    {
        'que':'Which country has the highest population in 2022 ?',
        'a':'Russia',
        'b':'India',
        'c':'China',
        'd':'America',
        'correct':'c'
    },
    {
        'que':'Which sports is known as the National sports of India ?',
        'a':'Cricket',
        'b':'Hockey',
        'c':'Football',
        'd':'Wrestling',
        'correct':'b'
    },

]
const mainQuestion = document.getElementById('mainQue')
const options = document.querySelectorAll('.options')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
let index = 0;
let rightans = 0;
let wrongans = 0;
let total = question.length;
const questionLoad = ()=>{
    if(total===index){
        quizEnd()
        reset()
    }else{
        let data = question[index]
    mainQuestion.innerText = `${index + 1}. ${data.que}`
    options[0].nextElementSibling.innerText = data.a
    options[1].nextElementSibling.innerText = data.b
    options[2].nextElementSibling.innerText = data.c
    options[3].nextElementSibling.innerText = data.d
    pagination()
    reset()

    }
}
const reset = ()=>{
    options.forEach(element=>{
        element.checked = false
    })
}
const quizEnd = ()=>{
    
    if(rightans > 3){
        document.querySelector('.container').innerHTML=`<h2> You are Genius 🏆  ${rightans}/${total}</h2> <button onclick='newGame()' class='btn'>Restart</button>`
    }else{
        document.querySelector('.container').innerHTML=`<h2> Your score = ${rightans}/${total}</h2> <button onclick='newGame()' class='btn'>Restart</button>`
    }
    document.querySelector('.container').classList.toggle('middle')
}
const pagination = ()=>{
    if(index === 0){
        btn1.style.display = 'none'
    }else{
        btn1.style.display = 'inline-block'
    }
}
const newGame = ()=>{
    window.location.reload()
}
const checkOpt = ()=>{
    let opt;
    options.forEach(input=>{
        if(input.checked){
            console.log(input.value)
            opt = (input.value)
        }
        
    })
    return opt
}
questionLoad()
btn2.addEventListener('click',()=>{
    let data = question[index]
    let ans = checkOpt()
    // console.log(ans)
    if(ans === data.correct){
        console.log('right' , rightans++)
    }else{
        console.log('wrong', wrongans++)
    }
    index++;
    questionLoad()
})
btn1.addEventListener('click',()=>{
        index--;
     questionLoad()
})








// Latest Updated Code///////////////////////////////////////////











// const question = document.querySelector('.question')
// const options = document.querySelectorAll('input')
// const nextBtn = document.querySelector('.next')


// const data = [
//     {
//         'que':'How many states in India ?',
//         'a':28,
//         'b':26,
//         'c':29,
//         'd':30,
//         'correct':'a'
//     },
//     {
//         'que':'Which state is the smallest state of India by area ?',
//         'a':'Rajasthan',
//         'b':'Bihar',
//         'c':'Goa',
//         'd':'Sikkim',
//         'correct':'c'
//     },
//     {
//         'que':'Which is the largest state of India by population ?',
//         'a':'Maharashtra',
//         'b':'Uttar-pradesh',
//         'c':'Haryana',
//         'd':'Rajasthan',
//         'correct':'b'
//     },
//     {
//         'que':'Which country has the highest population in 2022 ?',
//         'a':'Russia',
//         'b':'India',
//         'c':'China',
//         'd':'America',
//         'correct':'c'
//     },
//     {
//         'que':'Which sports is known as the National sports of India ?',
//         'a':'Cricket',
//         'b':'Hockey',
//         'c':'Football',
//         'd':'Wrestling',
//         'correct':'b'
//     },

// ]
// let index = 0
// let right=0;
// let wrong=0;
// window.addEventListener('DOMContentLoaded',()=>{
//     init(index)
// })
// function init(index){
//     question.innerText = `${index+1}. ` + data[index].que
//     options[0].nextElementSibling.innerText = data[index].a
//     options[1].nextElementSibling.innerText = data[index].b
//     options[2].nextElementSibling.innerText = data[index].c
//     options[3].nextElementSibling.innerText = data[index].d
// }

//         nextBtn.addEventListener('click',()=>{
//             index++;
//             checkOpt()
//             if(index < data.length  ){
//                 reset()
//                 init(index)
//                 console.log(index)
//             }else{
//                 endQuiz()
//                 console.log('end')
//                 console.log('right' , right , 'wrong' , wrong)
//             }
//         })

//         function reset(){
//             options.forEach(opt=>{
//                 if(opt.checked){
//                     opt.checked = false
//                 }
//             })
//         }
// function endQuiz (){
//     document.querySelector('.container').innerHTML=''
//     const div = document.createElement('div')
//     div.innerHTML=`
//     <h2>Game Ended</h2>
//     <span class="score">Your score : ${right}/${data.length}</span>
//     <button onClick='restart()'>Restart</Restart>
//     `
//     div.className = 'result'
//     document.querySelector('.container').append(div)
// }
// function restart(){
//     window.location.reload()
// }
// function checkOpt (){
//     let ans = getOpt()
//     console.log(ans)
//     if(ans === data[index-1].correct){
//         console.log('right')
//         right++;
//     }else{
//         console.log('wrong')
//         wrong++;
//     }
// }
// function getOpt (){
//     let option;
//     options.forEach(opt=>{
//         if(opt.checked){
//             option = opt.value
//         }
//     })
//     return option
// }