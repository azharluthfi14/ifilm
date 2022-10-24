import axios from "axios";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Banner from "./Banner";
import SkeletonBanner from "./SkeletonBanner";

const BannerSlider = ({ title, url }) => {
  const prevBannerRef = useRef();
  const nextBannerRef = useRef();

  const getData = async () => {
    const { data } = await axios.get(url);
    return data.results;
  };

  const { data, isLoading, isError, error } = useQuery(["data", url], getData);

  if (isLoading) return <SkeletonBanner />;

  if (isError) return <h1>{error}</h1>;

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <Swiper
          spaceBetween={10}
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
            <SwiperSlide className="rounded-xl" key={item.id}>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
