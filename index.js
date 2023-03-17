//ctrl+d
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let card = [firstCard, secondCard]; // array of cards
let hasBlackjack = false;
let isAlive = true;
console.log(sum);
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("message-Sum");
let cardsEl = document.getElementById("message-Cards");
let message = "";
function startGame() {
  renderGame();
}
function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}
function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum == 21) {
    message = "Blackjack nigga";
    hasBlackjack = true;
  } else {
    message = "sorry darling sorry darling you are out of the game";
    isAlive = false;
  }
  //console.log(message);
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "; // after the second cll of this function  this again gets render thats why the contents of the array doesnet gets repeated
  for (let i = 0; i < card.length; i++) {
    cardsEl.textContent += card[i] + " ";
  }
}
function newCard() {
  let newcard = getRandomCard();
  sum += newcard;
  card.push(newcard);
  console.log(sum);
  renderGame();
}

let featuredPosts = [
  "chekck out my nwe new card",
  "here is a new card",
  "I have a new card",
];
let newmesaages = "Hi there";
featuredPosts.push(newmesaages);
console.log(featuredPosts);
