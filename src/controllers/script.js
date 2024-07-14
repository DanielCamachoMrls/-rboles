import { bst } from "./dependencies.js";
import Movie from "../models/Movie.js";

// agregar peliculas
document.getElementById('addMovieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    if (title && genre && year) {
        const movie = new Movie(title, genre, year);
        bst.add(movie);
        displayMovies();
    }

    this.reset();
});

// mostrar películas en el catalogo
function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    bst.inOrder(data => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3>${data.title}</h3>
            <p>Género: ${data.genre}</p>
            <p>Año: ${data.year}</p>
        `;
        movieList.appendChild(movieCard);
    });
}

// Obtener y mostrar el valor minimo
document.getElementById('getMinBtn').addEventListener('click', function() {
    const minMovie = bst.getMin();
    const minMovieContainer = document.getElementById('minMovie');
    if (minMovie) {
        minMovieContainer.innerHTML = `
            <h3>${minMovie.title}</h3>
            <p>Género: ${minMovie.genre}</p>
            <p>Año: ${minMovie.year}</p>
        `;
    } else {
        minMovieContainer.innerHTML = '<p>No hay películas en el catálogo</p>';
    }
});

// Obtener y mostrar el valor maximo
document.getElementById('getMaxBtn').addEventListener('click', function() {
    const maxMovie = bst.getMax();
    const maxMovieContainer = document.getElementById('maxMovie');
    if (maxMovie) {
        maxMovieContainer.innerHTML = `
            <h3>${maxMovie.title}</h3>
            <p>Género: ${maxMovie.genre}</h3>
            <p>Año: ${maxMovie.year}</p>
        `;
    } else {
        maxMovieContainer.innerHTML = '<p>No hay películas en el catálogo</p>';
    }
});

// Buscar y mostrar la pelicula por titulo
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTitle = document.getElementById('searchTitle').value;
    const searchResultContainer = document.getElementById('searchResult');
    const movie = bst.search(searchTitle);
    if (movie) {
        searchResultContainer.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Género: ${movie.genre}</p>
            <p>Año: ${movie.year}</p>
        `;
    } else {
        searchResultContainer.innerHTML = '<p>Película no encontrada</p>';
    }
});