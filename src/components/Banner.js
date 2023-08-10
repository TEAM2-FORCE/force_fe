import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import about from "../img/Banner/about.png";
import { styled } from "styled-components";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Banner = () => {
  return (
    <>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <AboutImage src={about} alt="Slide 1"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={about} alt="Slide 2"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={about} alt="Slide 3"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={about} alt="Slide 4"></AboutImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

const AboutImage = styled.img`
  width: 100%;
`;
