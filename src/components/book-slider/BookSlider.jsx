import "./book-slider.css";

export default function BookSlider({ data }) {
  return (
    <div className="book-slider-container">
      <i className="bi bi-chevron-left book-slider-arrow-left"></i>
      <div className="book-slider-wrapper">
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <div className="rating">rating</div>
            <div className="book-slide-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i className="bi bi-eye-fill"></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      <i className="bi bi-chevron-right book-slider-arrow-right"></i>
    </div>
  );
}
