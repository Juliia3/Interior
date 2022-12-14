import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import Heading from "../Heading/Heading";
import Subtitle from "../Subtitle/Subtitle";
import "./latest.scss";
import LatestCards from "./LatestCards/LatestCards";

import latest1 from "../../assets/images/latest1.jpg";
import latest2 from "../../assets/images/latest2.jpg";
import latest3 from "../../assets/images/latest3.jpg";

function Latest() {
  return (
    <div className="latest">
      <div className="latest__header">
        <Heading text="RECENT ARTICLES" />{" "}
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
