let notes = document.querySelectorAll('.mark');
let button = document.getElementById('moyenne');
let result = document.getElementById('result');

let getAverage = (event) => {
    event.preventDefault();
    let sum = 0;
    
    notes.forEach(note => {

        sum += Number(note.value);
        
    })
    
    let average = sum / notes.length;
    
    let message = '';

    if (average <=3) {
        message = 'Mauvais';
    } else if (average <= 5) {
        message = 'Moyen';
    } else if (average  <= 7) {
        message ='Assez bien';
    } else if (average  <= 9) {
        message ='Bien';
    } else {
        message = 'Excellent';
    } 
    // console.log(message);
    result.textContent = 'Votre moyenne est :' + ' ' + average;
    
}
    
    button.addEventListener('click', getAverage);