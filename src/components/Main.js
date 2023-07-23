import React from 'react';
import './Main.css';
import PointSVG from "./Point";
import ArrowSVG from "./Arrow";
import LeftArrowSVG from "./L_Arrow";
import RightArrowSVG from "./R_Arrow";
import ListArrowSVG from "./ListArrow";
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
          <div className="main-content-container-2">
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
              <div className="about-company-container">
                  <div className="about-company-title">
                      <ArrowSVG/>
                      <p className="about-company-title-text">О компании</p>
                  </div>
                  <div className="about-company-main">
                      <div className="about-company-images">
                          <div className="about-company-left-image">
                              <img src={DefaultImage} className="default-image" alt="Default" />
                          </div>
                          <div className="about-company-right-images">
                              <img src={DefaultImage} className="default-image" alt="Default" />
                              <img src={DefaultImage} className="default-image" alt="Default" />
                          </div>
                      </div>
                      <div className="about-company-main-info">
                          <p>Техметсервис</p>
                          <div className="about-company-main-text">
                              <p>
                                  Мы - это опыт работы с объектами любого масштаба. Благодаря<br/>
                                  большому опыту и использованию современных технологий мы <br/>
                                  добиваемся исключительных результатов, поддерживая высокий<br/>
                                  уровень подготовки рабочих. Независимо от того, требуется ли вам снос <br/>
                                  небольшого строения или реновации территории крупного <br/>
                                  промышленного объекта, мы обладаем достаточным опытом и <br/>
                                  ресурсами, чтобы справиться с любой задачей.
                              </p>
                              <p>
                                  Безопасность - наш главный приоритет. Мы строго соблюдаем все<br/>
                                  правила договоров и инструкции по технике безопасности, применяя <br/>
                                  комплексные меры по защите наших работников, клиентов и <br/>
                                  окружающей среды. Наша приверженность поддержанию безопасных <br/>
                                  условий труда отличает нас как надежную и ответственную компанию.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="about-company-container">
                 <div className="about-company-title">
                      <ArrowSVG/>
                      <p className="about-company-title-text">Техметсервис - это</p>
                      </div>
                      <div className="about-company-main-info-2">
                          <div className="about-company-main-info-list">
                              <button>
                                  <p>Открытость и прозрачность в работе</p>
                                  <ListArrowSVG/>
                              </button>
                              <button>
                                  <p>Экологичность</p>
                                  <ListArrowSVG/>
                              </button>
                              <button>
                                  <p>Высококвалифицированные работники</p>
                                  <ListArrowSVG/>
                              </button>
                              <button>
                                  <p>Открытость и прозрачность в работе</p>
                                  <ListArrowSVG/>
                              </button>
                              <button>
                                  <p>Сотрудничество</p>
                                  <ListArrowSVG />
                              </button>
                          </div>
                          <div className="about-company-main-text">
                                  <p>
                                      Наша компания гордится тем, что поддерживает культуру открытости и честности во всех аспектах <br/>
                                      своей деятельности. Открытые отношения являются краеугольными камнями построения <br/>
                                      доверительных и прочных отношений как с нашими сотрудниками, так и с клиентами. В нашей <br/>
                                      организации создана атмосфера, способствующая открытому общению и сотрудничеству.
                                  </p>
                                  <p>
                                      Мы считаем, что доверие заслуживается последовательными действиями и ответственностью. <br/>
                                      Придерживаясь самых высоких стандартов профессионализма и этического поведения и стремимся <br/>
                                      превзойти ожидания во всем, что мы делаем. Следуя политики открытости и честности, мы <br/>
                                      устанавливаем прочные и долговечные отношения.
                                  </p>
                              </div>
                      </div>
              </div>
               <div className="about-company-container">
                  <div className="about-company-title">
                      <ArrowSVG/>
                      <p className="about-company-title-text">Наши последние проекты</p>
                  </div>
               </div>
          </div>
    </main>
);
}

export default Main;