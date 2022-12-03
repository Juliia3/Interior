import "./latestCards.scss";
import person from "../../../assets/images/person.svg";
import message from "../../../assets/images/message.svg";

function LatestCards(props) {
  const { img, day, month } = props;

  return (
    <div className="latest-card">
      <img className="latest-card__img" src={img} />
      <div className="latest-card__date">
        <p className="latest-card__day">{day}</p>
        <p className="latest-card__month">{month}</p>
      </div>
      <div className="latest-card__text-box">
        <div className="latest-card__icon-text">
          <p>
            <img className="latest-card__icon" src={person} />
            John Doe
          </p>
          <p>
            <img className="latest-card__icon" src={message} />6 Comments
          </p>
        </div>
        <p className="latest-card__text">
          Things to Know When Choosing the Perfect Sofa
        </p>
        <button className="latest-card__button">See More Product</button>
      </div>
    </div>
  );
}

export default LatestCards;
