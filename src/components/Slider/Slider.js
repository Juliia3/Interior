import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import "./slider.scss";

import Card from "./Card/Card";
import "./slider.scss";
import chair1 from "../../assets/images/chair1.svg";
import lamp from "../../assets/images/lamp.svg";
import chair2 from "../../assets/images/chair2.svg";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="slider">
            <div className="slider__container container">
              <div className="slider__card">
                <Card
                  title="New Chair
Collection 2022"
                  img={chair1}
                />
              </div>
              <div className="slider__card">
                <Card title="Lamp Desk" img={lamp} />
              </div>
              <div className="slider__card">
                <Card
                  title="Modern Chair
            Collection 2022"
                  img={chair2}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <div className="slider__container container">
              <div className="slider__card">
                <Card
                  title="New Chair
Collection 2022"
                  img={chair1}
                />
              </div>
              <div className="slider__card">
                <Card title="Lamp Desk" img={lamp} />
              </div>
              <div className="slider__card">
                <Card
                  title="Modern Chair
            Collection 2022"
                  img={chair2}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <div className="slider__container container">
              <div className="slider__card">
                <Card
                  title="New Chair
Collection 2022"
                  img={chair1}
                />
              </div>
              <div className="slider__card">
                <Card title="Lamp Desk" img={lamp} />
              </div>
              <div className="slider__card">
                <Card
                  title="Modern Chair
            Collection 2022"
                  img={chair2}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider">
            <div className="slider__container container">
              <div className="slider__card">
                <Card
                  title="New Chair
Collection 2022"
                  img={chair1}
                />
              </div>
              <div className="slider__card">
                <Card title="Lamp Desk" img={lamp} />
              </div>
              <div className="slider__card">
                <Card
                  title="Modern Chair
            Collection 2022"
                  img={chair2}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
