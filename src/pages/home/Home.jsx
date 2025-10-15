import BookSlider from "../../components/book-slider/BookSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/books";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="BEST SELLER" />
      <BookSlider data={books} />
      <HeadingTitle title="MOST GIFTED" />
      <BookSlider data={books} />
      <HeadingTitle title="MOST WISHED FOR" />
      <BookSlider data={books} />
    </div>
  );
}
