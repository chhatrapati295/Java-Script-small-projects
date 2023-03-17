const content = [
    {
        id:1,
        mainName : 'Susan Smith',
        mainDesignation : 'Actor',
        mainReview : "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        mainSrc : 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg'
    },
    {
        id:2,
        mainName : 'Anna Johnson',
        mainDesignation : 'Doctor',
        mainReview : 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        mainSrc : 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg'
    },
    {
        id:3,
        mainName : 'Bill Anderson',
        mainDesignation : 'Comedian',
        mainReview : 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        mainSrc : 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg'
    },
    
]

const heading = document.querySelector('.heading')
const designation = document.querySelector('.designation')
const review = document.querySelector('.review')
const btnPrev = document.querySelector('#btnPrev')
const btnNext = document.querySelector('#btnNext')
const img = document.querySelector('#img')
let index = 0

window.addEventListener('DOMContentLoaded',()=>{
    let data = content[index]
    img.src = data.mainSrc;
    heading.innerText = data.mainName;
    designation.innerText = data.mainDesignation;
    review.innerText = data.mainReview;
})
const showCard = ()=>{
    let data = content[index]
    img.src = data.mainSrc;
    heading.innerText = data.mainName;
    designation.innerText = data.mainDesignation;
    review.innerText = data.mainReview;
}

btnNext.addEventListener('click',()=>{
    index++;
    if(index > content.length-1){
        index=0
    }
    showCard()
})
btnPrev.addEventListener('click',()=>{
    index--;
    if(index <0){
        index= content.length-1
    }
    showCard()
})