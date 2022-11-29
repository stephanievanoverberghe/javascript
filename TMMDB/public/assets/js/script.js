fetch("public/assets/js/movies.json")
    .then(response => response.json())
    .then(movies => {
        movies.results.map((movie) => {
            let title = movie.original_title;
            let url = movie.poster_path;
            let description = movie.overview;
            let vote = movie.vote_average;
            card.innerHTML += `<div class="card" style="width: 18rem;">
            <img src=${url} class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-vote">${vote}</p>
            </div>
        </div>`
        })
    })

