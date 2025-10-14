import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="slider-wrapper"
      >
        <SwiperSlide>
          <div className="slide first-slide">
            <div className="slide-image-wrapper">
              <img src={FirstBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
              <h1 className="slide-info-title">Book Store</h1>
              <p className="slide-info-desc">
                It's not just reading. it's living the adventure
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide second-slide">
            <div className="slide-image-wrapper">
              <img src={SecondBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
              <h1 className="slide-info-title">The Books For Everyone</h1>
              <p className="slide-info-desc">
                You can read at the bookstore or at home
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide third-slide">
            <div className="slide-image-wrapper">
              <img src={ThirdBook} alt="" />
            </div>
            <div className="slide-info-wrapper">
              <h1 className="slide-info-title">Check Out The New Titles</h1>
              <p className="slide-info-desc">
                We send you the book you want at home
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
