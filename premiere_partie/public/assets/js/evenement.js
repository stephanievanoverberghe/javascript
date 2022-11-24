// Exercice 1

// Dans la page HTML, créer un bouton 'Click-me'.
// Au clic sur ce bouton, afficher dans la console 'Click'

let fnClick = () => {
    console.log('click');
}
let elButton = document.querySelector('button');
elButton.addEventListener('click', fnClick);


// Exercice 2

// Dans une page HTML, intégrer une image.
// Au survol de cette image, afficher dans la console, la source de l'image.

let fnMouseOver = () => {
    console.log(elImage.getAttribute('src'));
}
let elImage = document.querySelector('img');
elImage.addEventListener('mouseover', fnMouseOver);

let fnMouseOver2 = () => {
    console.log(elImage.getAttribute('name'));
}
elImage.addEventListener('mouseover', fnMouseOver2);

// elImage.onmouseover = fnMouseOver
// elImage.onmouseover = fnMouseOver2

// Exercice 3

// Dans la console, pour chaque touche appuyée par l'utilisateur, afficher
// code de la touche -> valeur de la touche (ex 13 -> 'Enter')


document.addEventListener('keyup', function(event) {
    console.log(`${event.keyCode} -> ${event.key}`);
});


// Exercice 4

// Dans une page HTML, créer une liste de 5 métiers du numérique.
// Dans la console, afficher le métier du numérique qur lequel l'utilisateur clique.

let elLi = document.querySelectorAll('li');
console.log(elLi);
elLi.forEach((li) => {
    li.addEventListener('click', () => {
        console.log(li.innerHTML);
    })
})


// Exercice 5

// Dans une page HTML, créer un formulaire contenant un champ "firstname" et un champ "lastname".
// A la validation du formulaire, afficher la valeur du nom et du prénom dans la console.

// let elForm = document.getElementById('form');
// let firstname = document.getElementById('firstname');
// let lastname = document.getElementById('lastname');

// elForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log(firstname.value + ' ' + lastname.value);
// })


// Exercice 6

// Avec le formulaire de l'exercice 5, lorsque l'utilisateur est dans un champ, changer la couleur de fond,
// et lorqu'il quitte le champ, retirer la couleur de fond.

let allInput = document.querySelectorAll('input[type=text]');


allInput.forEach((input, index) => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = 'red';
    })
    input.addEventListener('blur', () => {
        input.style.backgroundColor = '';
    })
})


// Exercice 7

// Dans le formulaire de l'exercice 5, ajouter un select contenant les jours de la semaine.
// Quand l'utilisateur choisi un élement de la liste, afficher sa valeur
// (1 pour lundi, 2 pour mardi...) dans la console

let day = document.querySelector('select');

day.addEventListener('change', (e)=> {
    // console.log(e.target.value);
    console.log(day.value);
})



// Les objets

// Exercice 1

let user1 = {
    lastname: 'Musk',
    firstname: 'Elon',
    age: 51,
    phone: '0422521010',
    birthday: '1971-06-28'
}

console.log(user1);


// Exercice 2

user1.phone = '415-222-6970';
console.log(user1);


// Exercice 3

user1.age = null,
console.log(user1);


// Exercice 4

delete user1.age;
console.log(user1);


// Exercice 5

const children = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa'];

user1.children = children;
console.log(user1);


// Exercice 6

function getFullName(){
    return this.firstname + ' ' + this.lastname;
};

user1.getFullName = getFullName;
console.log(user1);


// Exercice 7

let user2 = {
    lastname: 'Gates',
    firstname: 'Bill',
    phone: '0622445853',
    birthday: '1955-10-28',
    children:['Jen', 'For'],
    getFullName: getFullName
} 

let users = [user1, user2];
console.table(users);


// Exercice 8

user1.forEach((user, indexUser) => {
    let childrenList = ' ';
    user.children.forEach((child, indexChild) => {
        childrenList = childrenList + child + ' - ';
    });
    console.log(user.getFullName() + '('+ childrenList +')' );
})