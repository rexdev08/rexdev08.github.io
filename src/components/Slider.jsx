// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import galaxy from "../assets/galaxy.jpg";

// Import Swiper styles
import "swiper/css/bundle";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import styled from "styled-components";

const Slider = () => {
  return (
    <Container>
      <Swiper
        className="swiper"
        pagination={{ el: ".pagination", clickable: true }}
        navigation={{ nextEl: ".next", prevEl: ".prev", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
      >
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={galaxy} alt="" />
        </SwiperSlide>

        <div className="controls">
          <button className="prev">prev</button>
          <button className="next">next</button>
          <div className="pagination"></div>
        </div>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  background-color: blue;
  height: 300px;
  .swiper {
    height: 300px;
    .slide {
      height: 10%;

      img {
        /* width: 100%; */
        height: 100%;
        border-radius: 0.5rem;
      }
    }

    .controls {
      height: 100%;
      background-color: green;
    }
  }
`;

export default Slider;
