import React from 'react';
import './Main.css';
import PointSVG from "./Point";
import ArrowSVG from "./Arrow";
import LeftArrowSVG from "./L_Arrow";
import RightArrowSVG from "./R_Arrow";
import ListArrowSVG from "./ListArrow";
import DirectionsImage from '../images/directions.png';
import AboutCompany1 from '../images/about-company-1.png';
import AboutCompany2 from '../images/about-company-2.png';
import AboutCompany3 from '../images/about-company-3.png';

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
                      <img src={DirectionsImage} alt="Directions" />
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
                              <img src={AboutCompany1} alt="AboutCompany 1" />
                          </div>
                          <div className="about-company-right-images">
                              <img src={AboutCompany2} alt="About Company 2" />
                              <img src={AboutCompany3} alt="About Company 3" />
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
                  <div className="last-projects-main-container">
                      <div className="last-projects-swiper">
                          <div className="last-projects-navigate">
                              <button>
                                  <LeftArrowSVG/>
                              </button>

                              <button>
                                  <RightArrowSVG/>
                              </button>
                          </div>
                          <div className="last-projects-info">
                              <p>ОАО РСК МИГ</p>
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
                      <div className="last-projects-swiper-right-container">
                          <div className="image">
                              <p>
                                  Химпром
                              </p>
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
               </div>
          </div>
          <div className="background-container-2">
              <div className="main-content-container-3">
                  <div className="contact-us-container">
                     <div className="contact-us-form">
                          <h1>Свяжитесь с нами</h1>
                          <form action="/submit" method="POST">
                             <input type="text" id="name" name="name" placeholder="Укажите имя..." required/>

                             <input type="email" id="email" name="email" placeholder="Укажите email..." required/>

                             <textarea id="message" name="message" rows="4" placeholder="Сообщение" required></textarea>

                             <button type="submit" >Отправить</button>
                         </form>
                         <p>
                             Нажимая на кнопку "Отправить", я подтверждаю, что <br/>
                             ознакомился с <a href="/conf">Политикой конфиденциальностии</a>  даю согласие <br/>
                             на обработку всех моих персональных данных
                         </p>
                     </div>
                      <div className="contact-us-contacts">
                          <div className="title">
                              <p>Контакты</p>
                          </div>
                          <div className="text-container">
                              <div className="text-block">
                                  <p>Телефон:</p>
                                  <p>+7-916-900-42-55</p>
                              </div>
                              <div className="text-block">
                                  <p>Email</p>
                                  <p>fdv240@gmail.com</p>
                              </div>
                          </div>

                      </div>

                  </div>
                  <div className="button">
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <path d="M28.9062 17.6328L18.5 7.22656L8.09375 17.6328M18.5 8.67188V29.7734" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                      </button>
                  </div>
              </div>
          </div>
    </main>
);
}

export default Main;