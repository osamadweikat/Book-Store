import "./App.css";
import BookSlider from "./components/book-slider/BookSlider";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeadingTitle from "./components/heading-title/HeadingTitle";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import { books } from "./data/books";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <HeadingTitle title="BEST SELLER" />
      <BookSlider data={books} />
      <HeadingTitle title="MOST GIFTED" />
      <BookSlider data={books} />
      <HeadingTitle title="MOST WISHED FOR" />
      <BookSlider data={books} />
      <Footer />
    </div>
  );
}

export default App;
