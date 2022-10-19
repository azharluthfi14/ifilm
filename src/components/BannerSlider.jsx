import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Controller,
} from "swiper";
import Banner from "./Banner";
import SkeletonBanner from "./SkeletonBanner";

const BannerSlider = ({ id, title, url }) => {
  const prevBannerRef = useRef();
  const nextBannerRef = useRef();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await axios.get(url);
      setData(response.data?.results);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <SkeletonBanner />;

  return (
    <div>
      <h3>{title}</h3>
      {/* Slider area */}
      <div className="relative group flex-row items-center">
        <div
          ref={prevBannerRef}
          className={`prevbanner bg-white left-0 rounded-full p-1 top-[50%] absolute md:group-hover:block opacity-70 hidden
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
          spaceBetween={30}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          centeredSlides={true}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: `.prevbanner`,
            nextEl: `.nextbanner`,
            clickable: true,
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Banner movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={nextBannerRef}
          className={`nextbanner bg-white right-0 rounded-full top-[50%] p-1 absolute md:group-hover:block opacity-70 hidden
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
    </div>
  );
};

export default BannerSlider;
