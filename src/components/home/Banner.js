import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../img/Banner/banner1.png";
import banner2 from "../../img/Banner/banner2.png";
import banner3 from "../../img/Banner/banner3.png";
import banner4 from "../../img/Banner/banner4.png";
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
          <AboutImage src={banner1} alt="Slide 1"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={banner2} alt="Slide 2"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={banner3} alt="Slide 3"></AboutImage>
        </SwiperSlide>
        <SwiperSlide>
          <AboutImage src={banner4} alt="Slide 4"></AboutImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

const AboutImage = styled.img`
  width: 100%;
`;
