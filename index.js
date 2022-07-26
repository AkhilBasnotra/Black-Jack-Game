let player = {             /* object formation*/
    name: "Akhil",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isalive = false;
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el").textContent = player.name + ": $" +player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 10) + 1   
    
    if ( randomCard > 10){
        return 10
    }
    else if ( randomCard === 1){
        return 11
    }
    else {
        return randomCard
    }
}

function startGame(){
    isalive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: ";

    for( let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
if (sum <= 20) {
    message = "do you want to draw a new card? "
}
else if (sum === 21) {
    message = "Wohoo! You've got BlackJack!"
    hasBlackJack = true;
}
else {
    message = "you're out of the game!"
    isalive = false
}
    messageEl.textContent = message;
}

function newCard() {
    if(isalive === true && hasBlackJack === false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}






