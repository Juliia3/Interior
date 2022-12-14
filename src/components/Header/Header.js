import "./header.scss";
import logo from "./logo.svg";
import search from "./search.svg";
import bag from "./bag.svg";
import ReactModal from "react-modal";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customStyles = {
    overlay: { zIndex: "10" },
    content: {
      width: "70%",
      height: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="header">
      <div className="header__container container">
        <a href="App.js">
          <img className="header__logo" src={logo} alt="logo" />
        </a>
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
        <button>
          <img
            onClick={() => setIsModalOpen(true)}
            className="header__bag"
            src={bag}
            alt="bag"
          />
        </button>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
      >
        <Modal onClose={() => setIsModalOpen(false)} />
      </ReactModal>
    </div>
  );
}

export default Header;
