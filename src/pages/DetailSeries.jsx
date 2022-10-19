import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player/youtube";
import RowCardSlider from "../components/RowCardSlider";
import SkeletonVideo from "../components/SkeletonVideo";
import SkeletonBanner from "../components/SkeletonBanner";

const DetailSeries = () => {
  const { id } = useParams();
  const [series, setSeries] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&include_adult=true&include_image_language=en&append_to_response=videos,images`
      );
      setSeries(response.data);
      if (response?.data?.videos) {
        const index = response?.data?.videos?.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(response.data.videos?.results[index]?.key);
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  return (
    <>
      {loading ? (
        <SkeletonBanner />
      ) : (
        <>
          <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-3">
            <div
              className="hidden md:flex z-10 relative flex-col justify-center  px-8 md:w-6/12 h-full 
"
            >
              <h1 className="mb-2 text-3xl text-white font-bold">
                {series?.name}
              </h1>
              <div className="inline-flex mb-5 w-full font-semibold text-slate-300 gap-2 text-base">
                <span className="after:content-['•'] after:ml-2">
                  {series?.number_of_seasons} Seasons
                </span>
                <span className="after:content-['•'] after:ml-2">
                  {series?.number_of_episodes} Episode
                </span>
                <span className="after:content-['•'] after:ml-2">
                  {series?.first_air_date?.slice(0, 4)}
                </span>
                {series?.genres?.slice(0, 1).map((home, i) => (
                  <span className="after:content-['•'] after:ml-2" key={i}>
                    {home.name}
                  </span>
                ))}

                {series?.production_companies?.slice(0, 1).map((home, i) => (
                  <span key={i}>{home.name}</span>
                ))}
              </div>
              <p className="w-[650px] leading-relaxed text-gray-300">
                {series?.overview}
              </p>
              <button className="bg-sky-500 mt-6 text-white w-max rounded-md flex items-center py-2 px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch
              </button>
            </div>
            <div className="absolute hidden md:block w-[800px] h-full bg-gradient-to-r from-slate-800 to-transparent left-[45vw]"></div>
            <div className="w-full md:w-7/12">
              <img
                src={`https://image.tmdb.org/t/p/w1280/${series?.backdrop_path}`}
                alt="banner-series"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden">
            <h1 className="mb-2 text-white font-bold">{series?.name}</h1>
            <div className="inline-flex whitespace-normal mb-5 w-full font-semibold text-slate-300 gap-1">
              <span className="after:content-['•'] after:ml-2 text-xs">
                {series?.number_of_seasons} Seasons
              </span>
              <span className="after:content-['•'] after:ml-2 text-xs">
                {series?.number_of_episodes} Episode
              </span>
              <span className="after:content-['•'] after:ml-2 text-xs">
                {series?.first_air_date?.slice(0, 4)}
              </span>
              {/* {series?.genres?.slice(0, 1).map((home, i) => (
                <span
                  className="after:content-['•'] after:ml-2 text-xs"
                  key={i}
                >
                  {home.name}
                </span>
              ))} */}

              {series?.production_companies?.slice(0, 1).map((home, i) => (
                <span className="text-xs" key={i}>
                  {home.name}
                </span>
              ))}
            </div>
            <p className="leading-relaxed text-gray-300">{series?.overview}</p>
          </div>
        </>
      )}

      {loading ? (
        <SkeletonVideo />
      ) : series?.images?.backdrops.length > 0 ? (
        <div className="my-10">
          <h3 className="mb-5">Trailer</h3>

          <Swiper
            className="rounded-lg overflow-hidden"
            spaceBetween={10}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetweenSlides: 10,
              },
              320: {
                slidesPerView: 1,
                spaceBetweenSlides: 10,
              },
            }}
          >
            <SwiperSlide className="rounded-lg overflow-hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                controls={true}
              />
            </SwiperSlide>

            {series?.images?.backdrops.slice(0, 5).map((item, i) => (
              <SwiperSlide key={i} className="rounded-lg overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`}
                  alt="backdrop"
                  className="h-[9.5rem] w-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
      <div className="mb-16 space-y-8">
        <RowCardSlider
          id={1}
          type="series"
          title="More Like This"
          url={`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`}
        />
      </div>
    </>
  );
};

export default DetailSeries;
