const api_key = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;

export const bannerServices = {
  getTrendingWeek: `${BASE_URL}/trending/all/week?api_key=${api_key}`,
};
