// 4c0ff725

// http://www.omdbapi.com/?i=tt3896198&apikey=4c0ff725

const movieListEl = document.querySelector(".movie__container")
// const movie = localStorage.getItem("movie")

// async function onSearchChange(event) {
//     const movie = event.target.value
//     renderMovies(movie)
// }

async function renderMovies () {
    const movies = await fetch ('https://www.omdbapi.com/?i=tt3896198&apikey=4c0ff725')
    const moviesData = await movies.json()
    movieListEl.innerHTML = 
}

function movieHTML (movie) {
    return  `<div class="movie--container">
            <div class="movie__contents">
            <div class="movie__poster"></div>
            <div class="movie__info--container">
                <div class="movie__title"></div>
                <div class="movie__year"></div>
            </div>
            </div>
        </div>`
}

// const userAction = async () => {
//     const response = await fetch ('https://www.omdbapi.com/?i=tt3896198&apikey=4c0ff725')
//     const myJson = await response.json ();
// }

// console.log (myJson)