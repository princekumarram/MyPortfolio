import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "That's great, Prince! It sounds like you're delivering high-quality work consistently, which speaks to your dedication and skills. Do you feel like this mindset helps push you to improve even further?",
    },
    {
      img: profilePic2,
      review:
        "That's great, Prince! It sounds like you're delivering high-quality work consistently, which speaks to your dedication and skills. Do you feel like this mindset helps push you to improve even further?.",
    },
    {
      img: profilePic3,
      review:
        "That's great, Prince! It sounds like you're delivering high-quality work consistently, which speaks to your dedication and skills. Do you feel like this mindset helps push you to improve even further?.",
    },
    {
      img: profilePic4,
      review:
        "That's great, Prince! It sounds like you're delivering high-quality work consistently, which speaks to your dedication and skills. Do you feel like this mindset helps push you to improve even further?.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My friends always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                {/* <img src={client.img} alt="" /> */}
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
