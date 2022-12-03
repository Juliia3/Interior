import GalleryCard from "../Gallery/GalleryCard/GalleryCard";
import "./top.scss";
import Heading from "../Heading/Heading";

import galleryCard1 from "../../assets/images/gallery-card1.svg";
import galleryCard2 from "../../assets/images/gallery-card2.svg";
import galleryCard3 from "../../assets/images/gallery-card3.svg";
import galleryCard4 from "../../assets/images/gallery-card4.svg";
import Subtitle from "../Subtitle/Subtitle";

function Top() {
  return (
    <div className="top">
      <div className="top__container container">
        <Heading text="POPULAR PRODUCT" />
        <h2 className="top__title">
          <Subtitle text="The Best New Arrivals" />
        </h2>
        <div className="top__card-box">
          <GalleryCard
            img={galleryCard1}
            name="Blue chair"
            crossed="$20.00"
            price="$15.00"
          />
          <GalleryCard
            img={galleryCard2}
            name="Blue chair"
            crossed="$10.00"
            price="$12.00"
          />
          <GalleryCard img={galleryCard3} name="Coral vase" price="$15.00" />
          <GalleryCard
            img={galleryCard4}
            name="Coffe table set"
            price="$15.00"
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
