//ctrl+d
let firstCard;
let secondCard;
let sum = 0;
let card = []; // array of cards
let hasBlackjack = false;
let isAlive = false;
console.log(sum);
let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("message-Sum");
let cardsEl = document.getElementById("message-Cards");
let message = "";
let messagePer = document.getElementById("message-Per");
let player = {
  name: "Per",
  chips: 145,
};
messagePer.textContent = player.name + " $" + player.chips;
function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  sum = firstCard + secondCard;
  card.push(firstCard);
  card.push(secondCard);
  isAlive = true;
  renderGame();
}
function getRandomCard() {
  let val = Math.floor(Math.random() * 13) + 1;
  if (val === 1) return 11;
  else if (val >= 11 && val <= 13) return 10;
  else return val;
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
  if (isAlive === true && hasBlackjack === false) {
    let newcard = getRandomCard();
    sum += newcard;
    card.push(newcard);
    console.log(sum);
    renderGame();
  }
}

let person = {
  name: "Aryan",
  age: "21",
  country: "India",
};

function logData() {
  console.log(
    person.name +
      " is " +
      person.age +
      " years old and lives in " +
      person.country
  );
}
logData();
