// Exercice 1

for (let year = 2020; year <= 2030; year ++) {
    console.log(year);
}


// Exercice 2

for (multiply = 0; multiply <= 100; multiply ++) {
    console.log(multiply);

    if (multiply %7 == 0){
        console.log(multiply + ' ' + 'est un multiple de 7')
    } else {
        console.log(multiply);
    }

}


// Exercice 3

let languages = ['Javascript', 'Python', 'Java', 'SQL'];

languages.forEach(function(language) {console.log(language)});


// Exercice 4

let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

days.forEach(function (value, index) {console.log(value, index)});


// Exercice 5

let day = 0;
let count = 0;

while(day < 5){
    day++;
    count += day;

    if (day < 5) {
    console.log('Jour' + ' ' + day + ' ' + 'de l\année');
    } else {
        console.log('Jour' + ' ' + day + ' ' + 'atteint');
    }
}


// Exercice 6

let firstNumber = 5;
let secondNumber = 8;
let result = 0

while(result < 250){
    console.log(result);
    result = firstNumber * secondNumber;
    secondNumber = result;
}