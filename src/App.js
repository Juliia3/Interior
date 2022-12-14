import React from "react";
import "./assets/styles/index.scss";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Latest from "./components/Latest/Latest";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";
import Top from "./components/Top/Top";
import { ShoppingCardProvider } from "./contexts/ShoppingCardContext";

function App() {
  return (
    <ShoppingCardProvider>
      <div className="page-wrapper">
        <div className="App">
          <Header />
          <Main />
          <Slider />
          <Gallery />
          <Clients />
          <Top />
          <Info />
          <Latest />
          <Footer />
        </div>
      </div>
    </ShoppingCardProvider>
  );
}

export default App;
