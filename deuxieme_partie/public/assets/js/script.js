// Exercice 1

// Déclaration de variables

let elForm = document.getElementById('envoyer');
let passOne = document.getElementById('passOne');
let passTwo = document.getElementById('passTwo');


// Déclaration d'évenements

elForm.addEventListener('click', (event) => {
    if (passOne.value == passTwo.value) {        
        passOne.style.backgroundColor = 'green';
        passTwo.style.backgroundColor = 'green';
    } else {
        passOne.style.backgroundColor = 'red';
        passTwo.style.backgroundColor = 'red';
    }
    event.preventDefault();
})
    console.log(elForm);


// correction

// function validate_password(event) {
//     event.preventDefault();
//     let passOne = document.getElementById(passOne);
//     let passTwo = document.getElementById(passTwo);

//     if (passOne.value != passTwo.value) {
//         passOne.style.backgroundColor = 'red';
//         passTwo.style.backgroundColor = 'red';
//     } else {
//         passOne.style.backgroundColor = 'green';
//         passTwo.style.backgroundColor = 'green';
//     }
    
// }

// let elForm = document.getElementById('envoyer');
// elForm.addEventListener('click', validate_password)