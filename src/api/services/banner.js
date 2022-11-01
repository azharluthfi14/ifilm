const api_key = import.meta.env.VITE_TMDB_API_KEY;

export const bannerServices = {
  getTrendingWeek: `/trending/all/week?api_key=${api_key}`,
};
