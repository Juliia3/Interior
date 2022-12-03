import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import "./latest.scss";
import LatestCards from "./LatestCards/LatestCards";

import latest1 from "../../assets/images/latest1.jpg";
import latest2 from "../../assets/images/latest2.jpg";
import latest3 from "../../assets/images/latest3.jpg";
import headLine from "../../assets/images/head-line.svg";

function Latest() {
  return (
    <div className="latest">
      <div className="latest__header">
        <Heading text="RECENT ARTICLES" />{" "}
        <img className="heading__line" src={headLine} />
      </div>

      <Subtitle text="Read Our Latest Articles" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="latest">
            <div className="latest__container container">
              <div className="latest__card">
                <LatestCards img={latest1} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest2} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest3} day="05" month="May" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="latest">
            <div className="latest__container container">
              <div className="latest__card">
                <LatestCards img={latest1} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest2} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest3} day="05" month="May" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="latest">
            <div className="latest__container container">
              <div className="latest__card">
                <LatestCards img={latest1} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest2} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest3} day="05" month="May" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="latest">
            <div className="latest__container container">
              <div className="latest__card">
                <LatestCards img={latest1} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest2} day="05" month="May" />
              </div>
              <div className="latest__card">
                <LatestCards img={latest3} day="05" month="May" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Latest;
