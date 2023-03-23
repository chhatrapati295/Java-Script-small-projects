 const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

console.log(cardArray.sort(()=> 0.5 - Math.random()))
let cardChosen =[]
let cardChosenIds = []
let cardsWon = []

function createGrid (){
  for(let i=0;i<cardArray.length;i++){
    const card = document.createElement('img')
    card.setAttribute('src','./images/blank.png')
    card.setAttribute('data-id',i)
    document.querySelector('#grid').appendChild(card)
    card.addEventListener('click',flipCard)
  }
}
createGrid()

function flipCard (){
  let cardId = this.getAttribute('data-id')
  console.log(cardId)
  cardChosen.push(cardArray[cardId].name)
  cardChosenIds.push(cardId)
  console.log(cardChosen)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardChosen.length === 2){
    setTimeout(() => {
      checkMatch()
    }, 500);
  }
}
function checkMatch(){
  const cards = document.querySelectorAll('img')
  if(cardChosenIds[0] == cardChosenIds[1]){
    cards[cardChosenIds[0]].setAttribute('src','./images/blank.png')
    cards[cardChosenIds[1]].setAttribute('src','./images/blank.png')

    alert('You clicked on same image')
    cardChosen = [];
  cardChosenIds = []
    return;
  }
  if(cardChosen[0] === cardChosen[1]){
    alert('you found a match')
    cards[cardChosenIds[0]].setAttribute('src','./images/white.png')
    cards[cardChosenIds[1]].setAttribute('src','./images/white.png')
    cards[cardChosenIds[0]].removeEventListener('click',flipCard)
    cards[cardChosenIds[1]].removeEventListener('click',flipCard)
    cardsWon.push(cardChosen)
  }else{
    alert('Try again')
    cards[cardChosenIds[0]].setAttribute('src','./images/blank.png')
    cards[cardChosenIds[1]].setAttribute('src','./images/blank.png')
  }
  document.querySelector('.result').textContent = cardsWon.length
  cardChosen = [];
  cardChosenIds = []

  if(cardsWon.length == cardArray.length/2){
    document.querySelector('.result').textContent = 'Congratulations You found all.'
  }
}