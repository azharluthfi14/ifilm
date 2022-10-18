import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import Row from "../components/Row";
import Movie from "../components/Movie";

const DetailPage = () => {
  const [movie, setMovie] = useState();
  const [collection, setCollection] = useState([]);
  const [trailer, setTrailer] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      );

      setMovie(response.data);
      console.log(response.data);
      if (response.data?.videos) {
        const index = response.data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(response.data.videos?.results[index]?.key);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-3">
        <div
          className="hidden md:flex z-10 relative flex-col justify-center  px-8 md:w-5/12 h-full 
       "
        >
          <h1 className="mb-2 text-3xl text-white font-bold">{movie?.title}</h1>
          <ul className="flex flex-row mb-5 space-x-3">
            {movie?.genres?.map((home, i) => (
              <li key={i}>• {home.name}</li>
            ))}
          </ul>
          <p className="w-[650px] leading-relaxed text-gray-300">
            {movie?.overview}
          </p>
          <button className="bg-black rounded-md">Play</button>
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
      <div className="mx-3 mb-8 md:mx-10">
        <div className="flex items-center flex-row">
          <span className="font-bold mr-3">Avaliable in : </span>
          <ul className="flex items-center flex-row space-x-3">
            {movie?.spoken_languages?.map((home, i) => (
              <li
                className="hover:bg-slate-700 border border-slate-700 py-1 px-5 rounded-full cursor-pointer"
                key={i}
              >
                {home.english_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="w-8/12 my-9">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
        />
      </div> */}

      <div className="my-10">
        <Row
          id={1}
          title="Similar Movies"
          url={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US&page=1`}
        />
      </div>
    </>
  );
};

export default DetailPage;
