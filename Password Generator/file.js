const input = document.querySelector('.input')
const copyBtn = document.querySelector('.copy')
const generateBtn = document.querySelector('.generateBtn')
const alertMsg = document.querySelector('.alertMsg')

generateBtn.addEventListener('click',()=>{
    createPass()
})

function createPass(){
    let password = ''
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890_+=!@#$%^&*()[]{}\|?/><ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passwordLength = 14
    for(let i = 0;i<passwordLength;i++){
        let randomNum = Math.floor(Math.random()* chars.length)
        password += chars.substring(randomNum , randomNum+1)
    }
    // console.log(password)
    input.value = password
    if(input.value){
        copyBtn.addEventListener('click',()=>{
            input.select();
            input.setSelectionRange(0,9999);
            navigator.clipboard.writeText(input.value)
            alertMsg.innerText = password + '  Copied !'
            alertMsg.classList.remove('active')
            setTimeout(() => {
                alertMsg.classList.add('active')
            }, 3000);
        })
    }
}
