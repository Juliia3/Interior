import "./main.scss";
import main from "./main.png";
import line1 from "./line1.svg";
import line2 from "./line2.svg";
import Button from "../Button/Button";

function Main() {
  return (
    <div className="main">
      <img className="main__bg" src={main} alt="bg" />
      <img className="main__line1 main__line" src={line1} alt="line1" />
      <img className="main__line2 main__line" src={line2} alt="line2" />
      <div className="main__container container">
        <h4 className="main__name">INTERIOR</h4>
        <h1 className="main__title">Home Designs Made Easy</h1>
        <p className="main__price">
          $416.00 <span className="main__text">Starting</span>
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Main;
