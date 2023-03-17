const clock = document.querySelector('.clock')
let sec=0;min=0;hr=0
const startWatch = ()=>{
    intervalId = setInterval(()=>{
        if(sec < 59){
            sec++;
        }else if(min >=59){
            hr++;
            min=0;
        }else{
            sec=0;
            min++;
        }
        clock.innerText = `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
    },1000)
}
const stopWatch = ()=>{
    clearInterval(intervalId)
}