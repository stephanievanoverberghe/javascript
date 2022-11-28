// Exercice 2

// variables

let regex1 = new RegExp('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]*$');
let regex2 = new RegExp('^[0-9]{1,2}$');
let regex3 = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');

let elFirstname = document.getElementById('firstname');
let elLastname = document.getElementById('lastname');
let elEmail = document.getElementById('email');
let elAge = document.getElementById('age');

let smallFirstname = document.getElementById('firstnameSmall');
let smallLastname = document.getElementById('lastnameSmall');
let smallEmail = document.getElementById('emailSmall');
let smallAge = document.getElementById('ageSmall');

// Instructions

elFirstname.addEventListener('change', () => {

    smallFirstname.classList.add('d-none');

if (regex1.test(elFirstname.value) == false) {
    smallFirstname.classList.remove('d-none');
} 
})

elLastname.addEventListener('change', () => {

    smallLastname.classList.add('d-none');

if (regex1.test(elLastname.value) == false) {
    smallLastname.classList.remove('d-none');
} 
})

elEmail.addEventListener('change', () => {

    smallEmail.classList.add('d-none');

if (regex2.test(elEmail.value) == false) {
    smallEmail.classList.remove('d-none');
} 
})

elAge.addEventListener('change', () => {

    smallAge.classList.add('d-none');

if (regex3.test(elAge.value) == false) {
    smallAge.classList.remove('d-none');
} 
})


// Exercice 3

// Variables


let button = document.getElementById('button');

// Instructions

button.addEventListener('click', () => {
    let node = document.getElementById('firstname').lastChild;
    let clone = node.cloneNode(true);
    document.getElementById('lastname').appendChild(clone);
})