// Main Variables

let cards = [] // The cards 
let sum = 0
let message = ""
let hasBj = false 
let isAlive = false
let obutun = document.querySelector(".relol"); // Restart variable
let flag = null

// The "EL" Variables

let messageEL = document.getElementById("message-el") 
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let rools = document.getElementById("rools")


// Random Card Function

function getRandomCard() {
    return Math.floor( Math.random() * 10 ) + 1
}

// yes

function startGame() {
    if (flag === null) {
    isAlive = true
    hasBj = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    flag = true
    renderGame()
    } else if (flag === true) {
        message = "Please click on new card"
        messageEL.textContent = message
    }
}

// The render game function (main)

function renderGame() {

    sumEL.textContent = "Sum: " + sum
    cardsEL.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Draw a new card."
        isAlive = true
        hasBj = false
    } else if (sum === 21) {
        message = "YOU WIN!!! (there's a 1 in 22 chance that you can win)"
        isAlive = true
        hasBj = true
    } else if (sum > 21) {
        isAlive = false
        hasBj = false
        message = "You're out of the Game :("
    }
    messageEL.textContent = message
    }

// The new card function 

function newCard() {
    if (isAlive === true && hasBj === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    } else if (isAlive === false || hasBj === true) {
        message = "Please click on Restart"
        messageEL.textContent = message
    }
}




