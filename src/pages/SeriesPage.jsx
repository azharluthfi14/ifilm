import React from "react";
import { seriesServices } from "../api/series";
import RowCardSlider from "../components/RowCardSlider";

const SeriesPage = () => {
  return (
    <div className="mt-5 mb-16 space-y-8">
      <RowCardSlider
        id={1}
        type="series"
        title="Popular Series"
        url={seriesServices.getPopularSeries}
      />
      <RowCardSlider
        id={2}
        type="series"
        title="Top Rated Series"
        url={seriesServices.getTopRatedSeries}
      />

      <RowCardSlider id={3} type="series" title="K-Series" url={seriesServices.getKSeries} />

      <RowCardSlider
        id={4}
        type="series"
        title="Animated Series"
        url={seriesServices.getAnimatedSeries}
      />

      <RowCardSlider
        id={5}
        type="series"
        title="Action & Adventure"
        url={seriesServices.getActionAdventureSeries}
      />

      <RowCardSlider id={6} type="series" title="Mystery" url={seriesServices.getMysterySeries} />
    </div>
  );
};

export default SeriesPage;
