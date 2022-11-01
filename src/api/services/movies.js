const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const movieServices = {
  getPopularMovies: ` /movie/popular?api_key=${api_key}&page=1`,
  getTrendingMovies: `/trending/movie/day?api_key=${api_key}`,
  getTopRatedMovies: `/movie/top_rated?api_key=${api_key}&page=1`,
  getIndonesianMovies: `/discover/movie?api_key=${api_key}&release_date.gte=2022-09-01&release_date.lte=2022-10-25&region=ID&page=1`,
  getUpcomingMovies: `/movie/upcoming?api_key=${api_key}&page=1`,
  getMarvelMovies: `/discover/movie?api_key=${api_key}&page=1&with_companies=420`,
  getHorrorThrillerMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=27,53`,
  getActionAdventureMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=28,12`,
  getBestDramaMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=18`,
  getScifiMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=878`,
  getComedyMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=35`,
  getHistoryDocMovies: `/discover/movie?api_key=${api_key}&page=1&with_genres=36,99`,
};
