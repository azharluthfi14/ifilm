import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import RowCardSlider from "../components/RowCardSlider";
import ReactPlayer from "react-player/youtube";
import SkeletonBanner from "../components/SkeletonBanner";
import SkeletonVideo from "../components/SkeletonVideo";
import { convertDurattion } from "../utils/convertDuration";

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
        }&language=en-US&include_image_language=en&append_to_response=videos,images,credits`
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

  return (
    <>
      {loading ? (
        <div className="mt-5">
          <SkeletonBanner />
        </div>
      ) : (
        <>
          <div className="my-5 w-full h-[190px] md:h-[385px] lg:h-[450px] rounded-xl relative bg-[#030b17]">
            <div className="overflow-hidden h-full rounded-xl">
              <div className="max-w-[990px] h-full w-full md:w-[450px] lg:w-[550px] xl:w-[650px] 2xl:w-[850px] float-right flex">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie?.images?.backdrops[0].file_path}`}
                  alt="banner"
                  className="w-full md:h-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block absolute top-0 right-[251px] lg:right-[351px] xl:right-[451px] 2xl:right-[651px] w-[200px] h-full bg-gradient-to-r from-[#030b17] to-transparent"></div>
            <div className="hidden md:block absolute top-0 h-full w-full">
              <div className="pl-10 mt-12">
                <h1 className="mb-2 text-3xl text-white font-bold">
                  {movie?.title}
                </h1>
                <div
                  className="inline-flex whitespace-nowrap mb-3 w-full font-semibold 
                text-slate-300 gap-2 text-base md:text-xs lg:text-base md:gap-1"
                >
                  <span>{convertDurattion(movie?.runtime)}</span>
                  <span className="after:content-['•'] after:ml-2">
                    {movie?.release_date?.slice(0, 4)}
                  </span>
                  {movie?.genres?.slice(0, 1).map((home, i) => (
                    <span className="after:content-['•'] after:ml-2" key={i}>
                      {home.name}
                    </span>
                  ))}
                  {movie?.production_companies?.slice(0, 1).map((home, i) => (
                    <span key={i}>{home.name}</span>
                  ))}
                </div>
                <div className="flex flex-row mb-5 gap-2">
                  {movie?.genres?.slice(0, 2).map((item, i) => (
                    <span
                      className="bg-slate-600 py-1.5 px-5 rounded-full text-white"
                      key={i}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <p className="w-[650px] leading-relaxed text-gray-300">
                  {movie?.overview}
                </p>
                <button className="mt-8 hover:text-sky-500 text-slate-300 w-max rounded-md flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-bold text-xl">Watch Movie</span>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full border-b border-slate-500"></div>

          {/*  <div className="my-7">
            <h3>Cast</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 ">
              {movie?.credits?.cast.slice(0, 6).map((c) => (
                <div key={c.id} className="flex flex-col items-center m-2">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                    alt={c.character}
                    className="rounded-full mb-2 ring-4 ring-sky-500 w-20 h-20 object-cover"
                  />
                  <p> {c.name}</p>
                  <p className="text-gray-700 italic"> {c.character}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="block md:hidden">
            <h3 className="mb-1 text-white font-bold">{movie?.title}</h3>
            <div className="pb-3 border-b border-slate-700 mb-3">
              <div className="inline-flex whitespace-nowrap w-full mb-2 font-semibold text-slate-300 gap-1">
                <span className="after:content-['•'] after:ml-2 text-xs">
                  {convertDurattion(movie?.runtime)}
                </span>
                <span className="after:content-['•'] after:ml-2 text-xs">
                  {movie?.release_date?.slice(0, 4)}
                </span>
                {movie?.production_companies?.slice(0, 1).map((home, i) => (
                  <span className="text-xs" key={i}>
                    {home.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-2">
                {movie?.genres?.slice(0, 2).map((item, i) => (
                  <span
                    className="bg-slate-600 py-1.5 px-5 rounded-full text-xs text-white"
                    key={i}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <p className="leading-relaxed text-gray-300">{movie?.overview}</p>
          </div>
        </>
      )}

      {loading ? (
        <SkeletonVideo />
      ) : (
        <div className="mt-5 mb-10">
          <h3 className="mb-5">Trailers</h3>
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
            <SwiperSlide className="rounded-lg cursor-pointer overflow-hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="228px"
                controls={true}
              />
            </SwiperSlide>

            {movie?.images?.backdrops.slice(0, 5).map((item, i) => (
              <SwiperSlide
                key={i}
                className="rounded-lg cursor-pointer overflow-hidden"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${item?.file_path}`}
                  alt="backdrop"
                  className="w-full object-cover"
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
