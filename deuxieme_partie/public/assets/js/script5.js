let gridContainer = document.querySelector('.grid-container');
let watcher = document.querySelector('.intersection-watcher');

let fetchData = async () => {
    let result = await fetch ('https://jsonplaceholder.typicode.com/users/1/posts');
    let data = await result.json();
    return data;
}

let addContent = async () => {

    let data = await fetchData()

    data.forEach(post => {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h2>Lorem Hello World</h2>`
        gridContainer.appendChild(card);
    })
    
}




let handleIntersect = entries => {
    console.log(entries);
    if(entries[0].isIntersecting) {
        addContent()
    }
}

let options = {
    root: null
}

new IntersectionObserver(handleIntersect).observe(watcher)