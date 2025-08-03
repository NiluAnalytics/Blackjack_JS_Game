let player = {
   name: "Nilu",
   chips: "$400"

}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards= [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let playerEL = document.getElementById("player-el")
let cardsEl= document.getElementById("cards-el")
console.log(messageEl)

playerEL.textContent = player.name + player.chips


function getRandomCard(){
   let randomNumber = Math.floor(Math.random()*13) + 1
   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1){
     return 11
   } else {
      return randomNumber
   }


}


function startGame() {
   renderGame()
}

function renderGame(){
        sumEl.textContent ="sum:" + sum
        cardsEl.textContent ="Cards: " 
        for (let i = 0; i < cards.length; i++){
            cardsEl.textContent += cards[i] + " "
        }
        if (sum <= 20) {
        message = "Do you want to draw a new card?"

     } else if  (sum === 21) {
        message = "Wohoo! You've got a blackjack!"
        hasBlackjack = true
     } else {
        message = "You're out of game!"
        isAlive = false
     }

     messageEl.textContent = message; 
}

function newCard(){
    console.log("Drawing a new card from the deck")
    let card = getRandomCard()
    
    sum += card
    cards.push(card)
   console.log(cards)
    renderGame()
}


