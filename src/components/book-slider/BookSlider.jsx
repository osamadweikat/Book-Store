import { useState } from "react";
import Modal from "../modal/Modal";
import "./book-slider.css";
import Rating from "./Rating";

export default function BookSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  const itemWidth = 340;
  const visibleCount = 4;

  const handleClick = (direction) => {
    if (direction === "left" && slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else if (
      direction === "right" &&
      slideIndex < data.length - visibleCount
    ) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="book-slider-container">
      {slideIndex > 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{
          transform: `translateX(${slideIndex * -itemWidth}px)`,
          transition: "transform 0.5s ease",
        }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i
                onClick={() => handleOpenModal(item)}
                className="bi bi-eye-fill"
              ></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex < data.length - visibleCount && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
}
