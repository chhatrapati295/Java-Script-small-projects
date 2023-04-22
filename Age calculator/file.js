const input = document.querySelector('#inputDate')
const form = document.querySelector('form')
const result = document.querySelector('.result')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(input.value != ''){
        calculateDate(input.value)
    }else{
        result.textContent = 'Please fill your Birthday date !'
    }
})

function calculateDate (birthdayDate){
    let now = new Date()
        let userDate = new Date(birthdayDate)
        let age = now.getFullYear() - userDate.getFullYear()
        let month = now.getMonth() - userDate.getMonth()
        if(month < 0 || month === 0 && now.getDate() < userDate.getDate()){
            age--;
        }
        result.textContent = `You are ${age} ${age > 1 ? 'years' : 'year'} old.`
}