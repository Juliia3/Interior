import "./footer.scss";
import bg from "../../assets/images/footer-bg.jpg";
import logo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/images/facebook.svg";
import inst from "../../assets/images/inst.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__bg" src={bg} />
      <div className="footer__container container">
        <a href="App.js">
          <img src={logo} className="footer__logo" />
        </a>
        <h3 className="footer__title">Join Now For Early Access</h3>
        <p className="footer__text">
          Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt
          purus nec enim tincidunt, sit
        </p>
        <div className="footer__form">
          <input
            className="footer__input"
            type="text"
            placeholder="Enter your email address..."
          ></input>
          <button className="footer__button">SUBSCRIBE</button>
        </div>
      </div>
      <div className="footer__link">
        <p className="footer__right">
          Copyright 2022 - Designed & Developed by Frenify
        </p>
        <div className="footer__icons">
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={inst} />
          </a>
          <a>
            <img src={twitter} />
          </a>
          <a>
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
