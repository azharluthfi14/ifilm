import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player/youtube";
import RowCardSlider from "../components/RowCardSlider";
import SkeletonVideo from "../components/SkeletonVideo";
import SkeletonBanner from "../components/SkeletonBanner";
import getIdFromSlug from "../utils/parseSlug";

const DetailSeries = () => {
  const { id } = useParams();
  const seriesId = getIdFromSlug(id);

  const getDetail = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&include_adult=true&include_image_language=en&append_to_response=videos,images,credits`
    );

    return data;
  };

  const { data: series, isLoading } = useQuery(["detailSeries", seriesId], getDetail);

  const getTrailer = series?.videos.results.findIndex(
    (element) => element.type === "Trailer" || element.type === "Teaser"
  );
  const trailer = series?.videos.results[getTrailer]?.key;

  return (
    <>
      {isLoading ? (
        <div className="mt-5">
          <SkeletonBanner />
        </div>
      ) : (
        <>
          <Helmet>
            <title>{series?.name} - Watch Movies Online, Watch TV Series Online on Filmstar</title>
          </Helmet>
          <div className="my-5 w-full h-[190px] md:h-[385px] lg:h-[480px] rounded-xl relative bg-[#030b17]">
            <div className="overflow-hidden h-full rounded-xl">
              <div className="max-w-[990px] h-full w-full md:w-[450px] lg:w-[550px] xl:w-[650px] 2xl:w-[850px] float-right flex">
                <img
                  src={`https://image.tmdb.org/t/p/w780/${series?.backdrop_path}`}
                  alt="banner"
                  className="w-full md:h-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block absolute top-0 right-[251px] lg:right-[351px] xl:right-[451px] 2xl:right-[651px] w-[200px] h-full bg-gradient-to-r from-[#030b17] to-transparent"></div>

            <div className="hidden md:block absolute top-0 h-full w-full">
              <div className="pl-10 mt-12">
                <div className="flex flex-row gap-7">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${series?.poster_path}`}
                      alt={series?.name}
                      className="h-40 w-28 max-w-md rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h1 className="mb-2 text-xl lg:text-3xl text-white font-bold">
                      {series?.name}
                    </h1>
                    <div className="mb-2 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 mr-1 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{series?.vote_average}</span>
                    </div>
                    <div
                      className="inline-flex whitespace-nowrap mb-3 w-full font-semibold 
                text-slate-300 gap-2 text-base md:text-xs lg:text-base md:gap-1"
                    >
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
                    <div className="flex flex-row mb-5 gap-2">
                      {series?.genres?.slice(0, 2).map((item, i) => (
                        <span
                          className="bg-slate-600 py-1.5 px-3 lg:px-5 rounded-full text-white text-xs lg:text-base"
                          key={i}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="w-full md:w-[65%] flex items-center lg:w-[55%] md:h-[125px] lg:h-[145px] text-xs lg:text-base leading-relaxed text-gray-300">
                  {series?.overview}
                </p>

                <button className="hover:text-sky-500 mt-3 lg:mt-7 w-max text-slate-300 flex items-center text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 lg:w-14 lg:h-14 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col space-y-1">
                    <span className="font-bold text-base lg:text-xl">Watch First Episode</span>
                    <span className="text-xs lg:text-base">Season 1 • Episode 1</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <h3 className="mb-1 text-white font-bold">{series?.name}</h3>
            <div className="pb-3 border-b border-slate-700 mb-3">
              <div className="inline-flex whitespace-normal mb-2 w-full font-semibold text-slate-300 gap-1">
                <span className="after:content-['•'] after:ml-2 text-xs">
                  {series?.number_of_seasons} Seasons
                </span>
                <span className="after:content-['•'] after:ml-2 text-xs">
                  {series?.number_of_episodes} Episode
                </span>
                <span className="after:content-['•'] after:ml-2 text-xs">
                  {series?.first_air_date?.slice(0, 4)}
                </span>
                {series?.production_companies?.slice(0, 1).map((home, i) => (
                  <span className="text-xs" key={i}>
                    {home.name}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-2">
                {series?.genres?.slice(0, 2).map((item, i) => (
                  <span
                    className="bg-slate-600 py-1.5 px-5 rounded-full text-xs text-white"
                    key={i}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
            <p className="leading-relaxed text-gray-300">{series?.overview}</p>
          </div>

          <div className="my-7">
            <h3 className="mb-3">Top Cast</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {series?.credits?.cast.slice(0, 8).map((c) => (
                <div
                  key={c.id}
                  className="flex bg-[#030b17] p-3 rounded-lg flex-col items-center m-2 hover:cursor-default"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
                    alt={c.character}
                    className="rounded-full mb-2 w-20 h-20 object-cover"
                  />
                  <p className="text-gray-200 text-sm font-semibold">{c.name}</p>
                  <p className="text-gray-500 italic text-sm"> {c.character}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {isLoading ? (
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
                spaceBetweenSlides: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetweenSlides: 10,
              },
            }}
          >
            <SwiperSlide className="rounded-lg cursor-pointer aspect-video overflow-hidden">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="228px"
                controls={true}
              />
            </SwiperSlide>

            {series?.images?.backdrops.slice(0, 5).map((item, i) => (
              <SwiperSlide key={i} className="rounded-lg overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w780/${item?.file_path}`}
                  alt="backdrop"
                  className="w-full cursor-pointer object-cover"
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
          url={`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`}
        />
      </div>
    </>
  );
};

export default DetailSeries;
