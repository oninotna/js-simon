// #########################################################################
// FUNCTION
// 
function randomNumber (max, min = 1, totalNumber){
    let listNumber = "";
    for (i = 0; i < totalNumber; i++) {
        const currentRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        listNumber += `${currentRandomNumber} `;
    }

    return listNumber;
}

// #########################################################################
// COUNTDOWN & NUMBERS 
// 
const numberGenerate = randomNumber(50, 1, 5);
console.log(numberGenerate);

// #########################################################################
// INSERT ELEMENT IN DOCUMENT 
//
const numbersList = document.getElementById("numbers-list");
numbersList.innerText = numberGenerate;