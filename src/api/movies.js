const api_key = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

export const movieServices = {
  getPopularMovies: `${BASE_URL}/movie/popular?api_key=${api_key}&page=1`,
  getTrendingMovies: `${BASE_URL}/trending/movie/day?api_key=${api_key}`,
  getTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${api_key}&page=1`,
  getIndonesianMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&release_date.gte=2022-09-01&release_date.lte=2022-10-25&region=ID&page=1`,
  getUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${api_key}&page=1`,
  getMarvelMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_companies=420`,
  getHorrorThrillerMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=27,53`,
  getActionAdventureMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=28,12`,
  getBestDramaMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=18`,
  getScifiMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=878`,
  getComedyMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=35`,
  getHistoryDocMovies: `${BASE_URL}/discover/movie?api_key=${api_key}&page=1&with_genres=36,99`,
};
