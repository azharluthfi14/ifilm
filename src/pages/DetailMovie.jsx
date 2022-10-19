import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { Swiper, SwiperSlide } from "swiper/react";
import RowCardSlider from "../components/RowCardSlider";
import ReactPlayer from "react-player/youtube";
import SkeletonBanner from "../components/SkeletonBanner";
import SkeletonVideo from "../components/SkeletonVideo";

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&include_image_language=en&append_to_response=videos,images`
      );

      setMovie(response.data);

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

  let duration = moment
    .utc(moment.duration(movie.runtime, "minutes").asMilliseconds())
    .format("h [hr] m [min]");

  return (
    <>
      {loading ? (
        <SkeletonBanner />
      ) : (
        <>
          <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-3">
            <div
              className="hidden md:flex z-10 relative flex-col justify-center  px-8 md:w-5/12 h-full 
 "
            >
              <h1 className="mb-2 text-3xl text-white font-bold">
                {movie?.title}
              </h1>
              <ul className="flex flex-row mb-5 w-full text-sm space-x-3">
                <li>{duration}</li>
                <li>{movie?.release_date?.slice(0, 4)}</li>
                {movie?.genres?.slice(0, 1).map((home, i) => (
                  <li key={i}>{home.name}</li>
                ))}
                {movie?.adult ? <li>18+</li> : <li>PG-13</li>}
              </ul>
              <p className="w-[650px] leading-relaxed text-gray-300">
                {movie?.overview}
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
            <div className="absolute hidden md:block w-[800px] h-full bg-gradient-to-r from-slate-800 to-transparent left-[37vw]"></div>
            <div className="w-full md:w-7/12">
              <img
                src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
                alt="banner-movie"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          </div>

          <div className="block md:hidden">
            <h1 className="mb-2 text-white font-bold">{movie?.title}</h1>
            <div className="inline-flex whitespace-nowrap mb-5 w-full font-semibold text-slate-300 gap-1">
              <span className="after:content-['•'] after:ml-2 text-xs">
                {duration}
              </span>
              <span className="after:content-['•'] after:ml-2 text-xs">
                {movie?.release_date?.slice(0, 4)}
              </span>
              {movie?.genres?.slice(0, 1).map((home, i) => (
                <span
                  className="after:content-['•'] after:ml-2 text-xs"
                  key={i}
                >
                  {home.name}
                </span>
              ))}

              {movie?.production_companies?.slice(0, 1).map((home, i) => (
                <span className="text-xs" key={i}>
                  {home.name}
                </span>
              ))}
            </div>
            <p className="leading-relaxed text-gray-300">{movie?.overview}</p>
          </div>
        </>
      )}

      {loading ? (
        <SkeletonVideo />
      ) : (
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

            {movie?.images?.backdrops.slice(0, 5).map((item, i) => (
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
      )}

      <div className="mb-16 space-y-8">
        <RowCardSlider
          id={1}
          type="movie"
          title="More Like This"
          url={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`}
        />
      </div>
    </>
  );
};

export default DetailMovie;
