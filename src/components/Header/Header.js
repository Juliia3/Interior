import "./header.scss";
import logo from "./logo.svg";
import search from "./search.svg";
import bag from "./bag.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__container container">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">Home</li>
            <li className="header__item">Pages</li>
            <li className="header__item">Services</li>
            <li className="header__item">Projects</li>
            <li className="header__item">Blog</li>
            <li className="header__item">Contact Us</li>
          </ul>
        </nav>
        <img className="header__search" src={search} alt="search" />
        <img className="header__bag" src={bag} alt="bag" />
      </div>
    </div>
  );
}

export default Header;
