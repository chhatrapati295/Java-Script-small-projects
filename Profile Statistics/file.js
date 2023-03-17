const counters = document.querySelectorAll('.counter')
counters.forEach(counter=>{
    counter.innerText = '0'
    getData()
    function getData (){
        let dataCeil = counter.getAttribute('data-ceil')
        let currentNum = +counter.innerText
        let increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)
        if(currentNum < dataCeil){
            counter.innerText = currentNum
            setTimeout(() => {
                getData()
            }, 50);
        }else{
            counter.innerText = dataCeil
        }
    }
})