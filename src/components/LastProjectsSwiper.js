import React, { useState } from "react";
import "./LastProjectsSwiper.css";
import LeftArrowSVG from "./L_Arrow";
import RightArrowSVG from "./R_Arrow";
import image1 from '../images/lastProjectsSwiper1.png'
import image2 from '../images/lastProjectsSwiper2.png'
import image3 from '../images/lastProjectsSwiper3.png'
import mini_image1 from '../images/lastProjectsMiniImage1.png'
import mini_image2 from '../images/lastProjectsMiniImage2.png'
import mini_image3 from '../images/lastProjectsMiniImage3.png'


const LastProjectsSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const projectsData = [
    {
      title: "ОАО РСК МИГ",
      image: image1,
    },
    {
      title: "ООО Химпром",
      image: image2,
    },
    {
      title: "ООО Щекиноазот",
      image: image3,
    },
  ];
  const { title, image } = projectsData[currentSlide];

  const projectsDataMini = [

    {
      mini_title: "ООО Химпром",
      mini_image: mini_image2,
    },
    {
      mini_title: "ООО Щекиноазот",
      mini_image: mini_image3,
    },
    {
      mini_title: "ОАО РСК МИГ",
      mini_image: mini_image1,
    },
  ];
  const { mini_title, mini_image } = projectsDataMini[currentSlide];

  return (
    <div className="last-projects-main-container">
      <div
        className="last-projects-swiper"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="last-projects-navigate">
          <button onClick={handlePrevSlide}>
            <LeftArrowSVG />
          </button>

          <button onClick={handleNextSlide}>
            <RightArrowSVG />
          </button>
        </div>
        <div className="last-projects-info">
          <p>{title}</p>
          <button className="directions-link-button">
            <p>
              Смотреть полностью
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path d="M25.375 14.5L15.4062 4.98438V10.4219C5.86627 10.4219 3.625 17.2624 3.625 24.0156C6.3783 20.4903 8.81328 18.5781 15.4062 18.5781V24.0156L25.375 14.5Z" stroke="white" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="last-projects-swiper-right-container">
        <div
          className="image"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${mini_image}), lightgray 50% / cover no-repeat`,
          }}
        >
          <p>
            {mini_title}
          </p>
        </div>
        <button className="directions-link-button">
          <p>
            Смотреть полностью
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <path d="M25.375 14.5L15.4062 4.98438V10.4219C5.86627 10.4219 3.625 17.2624 3.625 24.0156C6.3783 20.4903 8.81328 18.5781 15.4062 18.5781V24.0156L25.375 14.5Z" stroke="white" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LastProjectsSwiper;