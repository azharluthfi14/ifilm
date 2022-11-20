import React from "react";
import { seriesServices } from "../api/services/series";
import RowCardSlider from "../components/RowCardSlider";

export default function SeriesPage() {
  return (
    <div className="mt-5 mb-16 space-y-8">
      <RowCardSlider
        id={1}
        type="tv"
        title="Popular Series"
        url={seriesServices.getPopularSeries}
      />
      <RowCardSlider
        id={2}
        type="tv"
        title="Top Rated Series"
        url={seriesServices.getTopRatedSeries}
      />
      <RowCardSlider id={3} type="tv" title="K-Series" url={seriesServices.getKSeries} />
      <RowCardSlider
        id={4}
        type="tv"
        title="Animated Series"
        url={seriesServices.getAnimatedSeries}
      />
      <RowCardSlider
        id={5}
        type="tv"
        title="Action & Adventure"
        url={seriesServices.getActionAdventureSeries}
      />
      <RowCardSlider id={6} type="tv" title="Mystery" url={seriesServices.getMysterySeries} />
    </div>
  );
}
