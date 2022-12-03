import "./clientsCard.scss";

import star from "../../../assets/images/star.svg";
import line from "../../../assets/images/line-card.svg";

function ClientsCard(props) {
  const { img, name, title, text } = props;

  return (
    <div className="clients-card">
      <img className="clients-card__img" src={img} />
      <div className="clients-card__text-block">
        <h3 className="clients-card__name">{name}</h3>
        <p className="clients-card__title">{title}</p>
        <div className="clients-card__rate">
          <img src={star} />
          <p>4.0</p>
        </div>
        <img className="clients-card__line" src={line} />
        <p className="clients-card__text">{text}</p>
      </div>
    </div>
  );
}

export default ClientsCard;
