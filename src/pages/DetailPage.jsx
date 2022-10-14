import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [movie, setMovie] = useState();
  const [banner, setBanner] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`
      );
      setMovie(response.data);
      console.log(response.data.spoken_languages);
    };

    getData();
  }, []);

  return (
    <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-10">
      <div
        className="hidden md:flex z-10 relative flex-col justify-center  px-8 md:w-5/12 h-full 
       "
      >
        <h1 className="mb-2 text-3xl text-white font-bold">{movie?.title}</h1>
        <ul className="flex flex-row mb-3 space-x-3">
          {movie?.genres?.map((home, i) => (
            <li key={i}>• {home.name}</li>
          ))}
        </ul>
        <p className="w-[650px] leading-relaxed text-gray-300">
          {movie?.overview}
        </p>
      </div>
      <div className="absolute hidden md:block w-[800px] h-full bg-gradient-to-r from-slate-800 to-transparent left-[38vw]"></div>
      <div className="w-full md:w-7/12">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt="banner-movie"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default DetailPage;
