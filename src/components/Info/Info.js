import "./info.scss";

import info1 from "../../assets/images/info1.svg";
import info2 from "../../assets/images/info2.svg";
import info3 from "../../assets/images/info3.svg";
import info4 from "../../assets/images/info4.svg";
import infoLine from "../../assets/images/info-line.svg";

function Info() {
  return (
    <div className="info">
      <div className="info__container container">
        <div className="info__box">
          <img src={info1} />
          <div className="info__text-box">
            <h5 className="info__title">Free Shipping</h5>
            <p className="info__text">Capped at $319 per order</p>
          </div>
        </div>
        <img src={infoLine} />
        <div className="info__box">
          <img src={info2} />
          <div className="info__text-box">
            <h5 className="info__title">Free Returns</h5>
            <p className="info__text">Within 25 Days</p>
          </div>
        </div>
        <img src={infoLine} />
        <div className="info__box">
          <img src={info3} />
          <div className="info__text-box">
            <h5 className="info__title">100% Secure</h5>
            <p className="info__text">100% Secure payment</p>
          </div>
        </div>
        <img src={infoLine} />
        <div className="info__box">
          <img src={info4} />
          <div className="info__text-box">
            <h5 className="info__title">Best Price</h5>
            <p className="info__text">Guaranteed Gifts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
