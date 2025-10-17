import "./book.css";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";
import { useState, useContext } from "react";
import CartContext from "../../context/cartContext";

export default function Book() {
  const { id } = useParams();
  const book = books.find((b) => b.id === +id);
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="book-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({ ...book, quantity: qty })}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">{book.description}</p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
}
