import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2d82379bc64921870065fc272794785d';
const API_MEADIA_TYPE = 'movie';
const API_TIME_WINDOW = 'day';

export async function fetchTrendigMovies() {
  const { data } = await axios.get(
    `${API_URL}trending/${API_MEADIA_TYPE}/${API_TIME_WINDOW}?api_key=${API_KEY}`
  );

  return data.results;
}

export async function getMoviesById(moviesId) {
  const { data } = await axios.get(
    `${API_URL}movie/${moviesId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
}

export async function SearchMovies(searchQuery) {
  const { data } = await axios.get(
    `${API_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );

  return data.results;
}

export async function getMovieCredits(movieId) {
  const { data } = await axios.get(
    `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data.cast;
}

export async function getMovieReviews(movieId) {
  const { data } = await axios.get(
    `${API_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return data.results;
}
