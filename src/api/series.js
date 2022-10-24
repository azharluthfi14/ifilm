const api_key = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

export const seriesServices = {
  getTrendingSeries: `${BASE_URL}/trending/tv/day?api_key=${api_key}`,
  getPopularSeries: `${BASE_URL}/tv/popular?api_key=${api_key}&page=1`,
  getTopRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${api_key}&page=1`,
  getKSeries: `${BASE_URL}/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=ko`,
  getAnimatedSeries: `${BASE_URL}/discover/tv?api_key=${api_key}&with_genres=16`,
  getActionAdventureSeries: `${BASE_URL}/discover/tv?api_key=${api_key}&with_genres=10759&page=3`,
  getMysterySeries: `${BASE_URL}/discover/tv?api_key=${api_key}&with_genres=9648`,
};
