// #########################################################################
// FUNCTION
//
//* funzione che dati n max, n min e n range genera dei numeri randomici
function randomNumbers(max, min = 1, totalNumber = 1) {
  let listNumber = [];
  while (listNumber.length < totalNumber) {
    let currentRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (listNumber.includes(currentRandomNumber)) {
      currentRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
    listNumber.push(currentRandomNumber);
    }
  };

  return listNumber;
}

//* funzione che una volta invocata all'interno del setInterval se il
//* countdown è pari a zero cambia la proprietà display delle due sezioni
function showForm() {
    if (countDownTime === 0) {
        countDownPrint.classList.add("d-none");
        gameInfo.classList.add("d-none");
        numbersList.classList.add("d-none");
        inputNumbersForms.classList.replace("d-none", "d-block");
    }
}

// #########################################################################
// INSERT ELEMENT IN DOCUMENT
//
const countDownPrint = document.getElementById("countdown");
const gameInfo = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
const inputNumbersForms = document.getElementById("answers-form");
const userNumbers = inputNumbersForms.querySelectorAll(".form-control");
const userMessage = document.getElementById("message");
const buttonStart = document.getElementById("button-start")

// #########################################################################
// COUNTDOWN & NUMBERS
//
let countDownTime = 10;
const numberGenerate = randomNumbers(50, 1, 5);
let userListNumbers = [];
let count = 0;

console.log(numberGenerate);

for (let i = 0; i < numberGenerate.length; i++) {
    numbersList.innerHTML += `<li>${numberGenerate[i]}</li>`;
}

let timerId = setInterval(function () {
    if (countDownTime > 0) {
      countDownTime--;
      // console.log(`${countDownTime}`);
      countDownPrint.innerText = countDownTime;
    } else { 
     //* Finito il timer
      clearInterval(timerId);
      //* Mostro la form e nascondo il countdown con i numeri random
      showForm();
    }
  }, 1000);

//* Registro un eventListener al bottone conferma
  inputNumbersForms.addEventListener("submit", (event) => {
    event.preventDefault();

    buttonStart.classList.add("d-none");

    for (i = 0; i < userNumbers.length; i++) {
      userListNumbers.push(parseInt(userNumbers[i].value));
    }

    for (i = 0; i < userListNumbers.length; i++) {
      if (numberGenerate.includes(userListNumbers[i])) count += 1;
    }

    userMessage.innerText = count <= 1 ? `Hai indovinato ${count} numero su ${numberGenerate.length}`
    : `Hai indovinato ${count} numeri su ${numberGenerate.length}`;
     console.log(userListNumbers);
     console.log(count);
     
  });