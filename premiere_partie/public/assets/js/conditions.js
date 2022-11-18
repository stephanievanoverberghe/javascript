// Exercice 1

let age = 17;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}


// Exercice 2

let num = 15;

if (num%2 == 0) {
    console.log('Le nombre est pair');
} else {
    console.log('le nombre est impair');
}

// Exercice 3

let mark = 3;

if (mark >= 0 && mark <=3) {
    console.log('Mauvais');
} else if (mark >= 4 && mark <= 5) {
    console.log('Moyen')
} else if (mark >= 6 && mark <= 7) {
    console.log('Assez bien');
} else if (mark >= 8 && mark <= 9) {
    console.log('Bien')
} else if (mark == 10) {
    console.log(Excellent);
} else {
    console.log('Valeur incorrecte');
}

// Exercice 4

let day = 2;
let days ;

switch (day) {
case 1:
    days = 'lundi'
break;
case 2:
    days = 'mardi'
break;
case 3:
    days = 'mercredi'
break;
case 4:
    days = 'jeudi'
break;
case 5:
    days = 'vendredi'
break;
case 6:
    days = 'samedi'
break;
case 7:
    days = 'dimanche'
break;
}
    console.log(days)

// Exercice 5

let value = 3;
    console.log('La valeur entrée est une chaîne')