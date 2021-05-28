const API_URL =
  'https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f69b71c8e65b1aef0270ca2280da25a6&page=1';

const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie? api_key=f69b71c8e65b1aef0270ca2280da25a6&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});

// Get initial movies on load.
getMovies(API_URL);
