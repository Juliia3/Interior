import GalleryCard from "./GalleryCard/GalleryCard";
import Heading from "../Heading/Heading";
import "./gallery.scss";

import galleryCard1 from "../../assets/images/gallery-card1.svg";
import galleryCard2 from "../../assets/images/gallery-card2.svg";
import galleryCard3 from "../../assets/images/gallery-card3.svg";
import galleryCard4 from "../../assets/images/gallery-card4.svg";
import galleryCard5 from "../../assets/images/gallery-card5.svg";
import galleryCard6 from "../../assets/images/gallery-card6.svg";
import galleryCard7 from "../../assets/images/gallery-card7.svg";
import galleryCard8 from "../../assets/images/gallery-card8.svg";
import Subtitle from "../Subtitle/Subtitle";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__container container">
        <Heading text="PROFESSIONAL TEAM" />
        <h2 className="gallery__title">
          <Subtitle text="The Best New Arrivals" />
        </h2>
        <div className="gallery__block">
          <div className="gallery__card-box">
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
          <div className="gallery__card-box">
            <GalleryCard
              img={galleryCard5}
              name="Decorative vase"
              price="$25.00"
            />
            <GalleryCard
              img={galleryCard6}
              name="Coral vase"
              crossed="$20.00"
              price="$12.00"
            />
            <GalleryCard
              img={galleryCard7}
              name="Gray sofa"
              crossed="$20.00"
              price="$15.00"
            />
            <GalleryCard
              img={galleryCard8}
              name="Black chair"
              crossed="$20.00"
              price="$15.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
