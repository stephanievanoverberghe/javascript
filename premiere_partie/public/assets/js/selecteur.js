// Exercice 1

let textToDisplay = 'Les Sélecteurs';

let elementText = document.getElementById('text');
elementText.innerHTML = textToDisplay;


// Exercice 2

// Afficher balise "h1"

let elementH1 = document.getElementById('text').innerText;
console.log(elementH1);

// Afficher class "description"

let elementDescription = document.querySelector('.description').innerText;
console.log(elementDescription);

// Afficher balise "li"

let elementList2 = document.querySelectorAll('li');
elementList2.forEach((li) => {
    let getContentLi = li.innerText;
    console.log(getContentLi);
})


// Exercice 3

let getLi = document.querySelectorAll('li')

getLi.forEach((value,index) => {
    let textValue = value.innerText;
    console.log(`${index+1} : ${textValue}`);
})


// Exercice 4

let elementInput = document.getElementById('src_image');
let elementImage = document.querySelector('img');
elementInput = elementImage;
console.log(elementInput = elementImage);


// Exercice 5

let importants = document.querySelector('span');
importants.classList.add('important');

let elementSpan = document.querySelector('.important');
elementSpan.style.fontWeight='bold';


// Exercice 6

let important = document.querySelector('ul>li:nth-of-type(4)');
important.classList.add('red')
important.style.color='red'