const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const seriesServices = {
  getTrendingSeries: `/trending/tv/day?api_key=${api_key}`,
  getPopularSeries: `/tv/popular?api_key=${api_key}&page=1`,
  getTopRatedSeries: `/tv/top_rated?api_key=${api_key}&page=1`,
  getKSeries: `/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=ko`,
  getAnimatedSeries: `/discover/tv?api_key=${api_key}&with_genres=16`,
  getActionAdventureSeries: `/discover/tv?api_key=${api_key}&with_genres=10759&page=3`,
  getMysterySeries: `/discover/tv?api_key=${api_key}&with_genres=9648`,
};
