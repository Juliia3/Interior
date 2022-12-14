import { useContext } from "react";
import { ShoppingCardContext } from "../../contexts/ShoppingCardContext";

import GalleryCard from "../Gallery/GalleryCard/GalleryCard";
import "./modal.scss";

function Modal(props) {
  const items = useContext(ShoppingCardContext);

  return (
    <div className="modal">
      <button className="modal__btn" onClick={props.onClose}>
        X
      </button>
      {items.map((item, index) => (
        <GalleryCard {...item} key={index} />
      ))}
    </div>
  );
}

export default Modal;
