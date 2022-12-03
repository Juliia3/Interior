import Button from "../../Button/Button";
import "./card.scss";

function Card(props) {
  const { title, img } = props;

  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <div className="card__button">
        <Button />
      </div>
      <img className="card__img" src={img} />
    </div>
  );
}

export default Card;
