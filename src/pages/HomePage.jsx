import BannerSlider from "../components/BannerSlider";
import RowCardSlider from "../components/RowCardSlider";
import { bannerServices } from "../api/services/banner";
import { movieServices } from "../api/services/movies";
import { seriesServices } from "../api/services/series";

export default function HomePage() {
  return (
    <>
      <div className="mt-5 mb-3 md:mb-8">
        <BannerSlider url={bannerServices.getTrendingWeek} />
      </div>
      <div className="mb-16 space-y-5">
        <RowCardSlider
          id={1}
          type="movie"
          title="Trending Movies"
          url={movieServices.getTrendingMovies}
        />
        <RowCardSlider
          id={2}
          title="Indonesia Movies"
          type="movie"
          url={movieServices.getIndonesianMovies}
        />
        <RowCardSlider
          id={3}
          type="tv"
          title="Trending Series"
          url={seriesServices.getTrendingSeries}
        />
        <RowCardSlider
          id={4}
          type="movie"
          title="Top Rated Movies"
          url={movieServices.getTopRatedMovies}
        />
      </div>
    </>
  );
}
