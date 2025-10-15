import "./book-slider.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Rating from "./Rating";

export default function BookSlider({ data }) {
  return (
    <div className="book-slider-container">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".book-slider-arrow-right",
          prevEl: ".book-slider-arrow-left",
        }}
        loop={true}
        slidesPerView={4}
        spaceBetween={20}
        speed={600}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="book-slide-item">
              <img
                src={`/books/${item.image}`}
                alt={item.title}
                className="book-slide-item-img"
              />
              <h3 className="book-slide-item-title">{item.title}</h3>
              <Rating rating={item.rating} reviwes={item.reviwes} />
              <div className="book-slider-item-price">${item.price}</div>
              <div className="book-slider-icons-wrapper">
                <i className="bi bi-eye-fill"></i>
                <i className="bi bi-cart-plus"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <i className="bi bi-chevron-left book-slider-arrow-left"></i>
      <i className="bi bi-chevron-right book-slider-arrow-right"></i>
    </div>
  );
}
