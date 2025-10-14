import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";

export default function Slider() {
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. It's living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out the New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
