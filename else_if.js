let age = 21 
let hasBlackjack = false

if (age <= 20) {
    console.log("Want to draw?")
} else if  (age === 21) {
    console.log("got a Blackjack")
    hasBlackjack = true
} else {
    console.log("Not Eligible")
}

console.log(hasBlackjack)