// 50f9e55e

//https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c

const movieListEl = document.querySelector("")
const movie = localStorage.getItem("movie")

async function onSearchChange(event) {
    const movie = event.target.value
    renderMovies(movie)
}

async function renderMovies () {
    const movies = await fetch ('https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c')
    const moviesData = await postMessage.json()
}

function movieHTML (movie) {
    return  <div class="movie--container">
            <div class="movie__contents">
            <div class="movie__poster"></div>
            <div class="movie__info--container">
                <div class="movie__title"></div>
                <div class="movie__year"></div>
            </div>
            </div>
        </div>
}