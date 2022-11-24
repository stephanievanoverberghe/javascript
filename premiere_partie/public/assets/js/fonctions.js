// Exercice 1

function helloWorld(){
    return 'Bonjour tout le monde'
};

    console.log(helloWorld());


// Exercice 2

let firstanme = 'steve'

function helloYou(firstname){
    console.log(firstname);
}

helloYou('Bonjour Steve')


// Exercice 3 ----- fonction classique

function average(numberOne, numberTwo){
    return((numberOne + numberTwo)/2);
}

let moyenne = average(45, 10);

console.log('La moyenne des deux nombres est ' + moyenne)


// Exercice 4 ------- fonction fléchée

let chaine = 'chaine';
let result = (chaine) => chaine + longueur;

console.log(`${chaine.length}`)


// Exercice 5 --------- fonction fléchée à classique

// howAreYou = (name) => `Bonjour, ${name} ! Comment vas-tu ?`;

function howAreYou(name) {
    return (`Bonjour, ${name} ! Comment vas-tu ?`);
}

console.log(howAreYou("steph"))


// Exercice 6 -------------------- fonction classique à fléchée

// function average(numberOne, numberTwo){
//     return((numberOne + numberTwo)/2);
// }

// let moyenne = average(45, 10);

// console.log('La moyenne des deux nombres ' + moyenne)

average2 = (number1, number2) => (number1 + number2)/2;
let moyenne2 = average(45,10)

console.log(`La moyenne des deux nombres est ` + moyenne2)