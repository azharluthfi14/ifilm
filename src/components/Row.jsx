import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Movie from "./Movie";

const Row = ({ id, title, url }) => {
  const [movies, setMovies] = useState([]);

  const prevRef = useRef();
  const nextRef = useRef();
  const refWrapper = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setMovies(response.data?.results);
      console.log(response);
    };
    getData();
  }, [url]);

  return (
    <div ref={refWrapper}>
      <>
        <h3>{title}</h3>

        {/* Slider area */}
        <div className="relative flex items-center group">
          <div
            ref={prevRef}
            className={`prev${id} bg-white left-0 rounded-full p-1 absolute md:group-hover:block opacity-70 hidden
             hover:opacity-100 cursor-pointer z-10`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-neutral-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            navigation={{
              prevEl: `.prev${id}`,
              nextEl: `.next${id}`,
              clickable: true,
            }}
            spaceBetween={10}
            slidesPerView={8}
            slidesPerGroup={8}
            speed={1800}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 8,
                slidesPerGroup: 8,
                spaceBetweenSlides: 150,
              },
              320: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetweenSlides: 10,
              },
            }}
          >
            {movies.map((item, id) => (
              <SwiperSlide key={id}>
                <Movie item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={nextRef}
            className={`next${id} bg-white right-0 rounded-full p-1 absolute md:group-hover:block opacity-70 hidden
            hover:opacity-100 cursor-pointer z-10`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-neutral-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </>
    </div>
  );
};

export default Row;
