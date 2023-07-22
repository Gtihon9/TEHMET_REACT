import React from 'react';
import './Main.css';
import PointSVG from "./Point";
import ArrowSVG from "./Arrow";
import LeftArrowSVG from "./L_Arrow";
import RightArrowSVG from "./R_Arrow";
import DefaultImage from '../images/default-image.png';

function Main() {
return (
      <main className="main-content">
          <div className="background-container">
              <div className="main-content-container-1">
                    <p className="main-title-text">Создание устойчивого будущего</p>
                    <p className="main-title-text-sub">Какой-то подзаголовок, еще не придумал</p>

                  <div className="main-items-container">
                      <div className="column">
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Снос и демонтаж строений</span>
                          </div>
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Рециклинг строительных отходов</span>
                          </div>
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Промышленный демонтаж</span>
                          </div>
                      </div>
                      <div className="column">
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Реновация территорий</span>
                          </div>
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Земляные работы</span>
                          </div>
                          <div className="circle">
                              <PointSVG/>
                              <span className="text">Шпунтовое ограждение котлованов</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="main-content-container-1">
              <div className="directions">
                  <div className="directions-title">
                      <ArrowSVG/>
                      <p className="directions-title-text">Направления</p>
                  </div>
                  <div className="directions-main">
                      <div className="directions-main-left-column">
                          <div className="directions-main-l-c-info">
                              <div className="title">
                                  <p>Снос и демонтаж <br/> строений, металлоконструкций</p>
                              </div>
                              <div className="description">
                                  <p>Снос и демонтаж - это сложные процессы, которые требуют тщательного <br/>
                                      планирования, точности и соблюдения строгих протоколов безопасноти. <br/>
                                      Наша команда специализируется по сносу любых строений, от небольших <br/>
                                      сооружений до масштабных зданий, а также их демонтажу, сохраняя <br/>
                                      ценных материалов для переработки и повторного использования.</p>
                              </div>
                          </div>
                          <div className="directions-main-l-c-links">
                              <div className="slider">
                                  <div className="slider-text">
                                      <p>
                                          1/6
                                      </p>
                                  </div>
                                  <div className="arrows">
                                    <LeftArrowSVG/>
                                    <RightArrowSVG/>
                                  </div>
                              </div>
                              <button className="directions-link-button">
                              <p>
                                 Смотреть полностью
                              </p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <path d="M25.375 14.5L15.4062 4.98438V10.4219C5.86627 10.4219 3.625 17.2624 3.625 24.0156C6.3783 20.4903 8.81328 18.5781 15.4062 18.5781V24.0156L25.375 14.5Z" stroke="white" stroke-linejoin="round"/>
                              </svg>
                          </button>
                          </div>

                      </div>
                      <img src={DefaultImage} className="default-image" alt="Default" />
                  </div>
              </div>
          </div>
    </main>
);
}

export default Main;