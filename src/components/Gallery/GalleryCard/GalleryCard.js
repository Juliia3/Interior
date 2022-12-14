import { useContext } from "react";
import "./galleryCard.scss";
import like from "../../../assets/images/like.svg";
import bag from "../../../assets/images/bag.svg";
import ReactStars from "react-rating-stars-component";
import { ShoppingCardToggleContext } from "../../../contexts/ShoppingCardContext";

function GalleryCard(props) {
  const { name, img, price, crossed } = props;
  const toggleItem = useContext(ShoppingCardToggleContext);

  return (
    <div className="gallery-card">
      <div className="gallery-card__container container">
        <div className="gallery-card__img-box">
          <img className="gallery-card__img" src={img} />
          <div className="gallery-card__buy">
            <button>
              <img className="gallery-card__buy-icon" src={like} />
            </button>
            <button onClick={() => toggleItem(props)}>
              <img className="gallery-card__buy-icon" src={bag} />
            </button>
          </div>
        </div>
        <h3 className="gallery-card__name">{name}</h3>
        <div className="gallery-card__price">
          <p>
            <span className="crossed">{crossed}</span> {price}
          </p>
          <ReactStars />
        </div>
      </div>
    </div>
  );
}
export default GalleryCard;
