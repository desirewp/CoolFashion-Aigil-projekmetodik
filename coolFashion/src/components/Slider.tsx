import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={8}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>NYHETER</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>SKOR</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>TRÖJA</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>TSHIRT</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>MÖSSA</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>VÄSKA</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>SKOR</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>HOODIE</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>BYXOR</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>TSHIRT</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>TRÖJA</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/src/assets/placeholder round.avif" alt="slideimg" />
        <p>BYXOR</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
