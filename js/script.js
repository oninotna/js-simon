// #########################################################################
// FUNCTION
// 
function randomNumber (max, min = 1, totalNumber){
    const arrayRandom = [];
    for (i = 0; i < totalNumber; i++) {
        const currentRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayRandom.push(currentRandomNumber);
    }

    return arrayRandom;
}

