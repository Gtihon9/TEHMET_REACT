import React from 'react';
import './Company.css';
import LeftArrowSVG from "./L_Arrow";
import ArrowSVG from "./Arrow";
import VerticalLineSVG from "./VerticalLine";
import ContactUsForm from "./ContactUsForm";

function Company() {

    return (
        <main className="main-content">
            <div className="back">
                <LeftArrowSVG />
                <div className="back-text">
                    <a href="/">Главная</a>/<a href="/company">О компании</a>
                </div>
            </div>

            <div className="main-content-container">
                <div className="company">
                    <div className="main-title">
                        <p>О компании</p>
                    </div>
                    <div className="company-info">
                        <div className="company-info-text">
                            <p>
                                “Техметсервис” - компания специализирующаяся на демонтаже, сносе <br />
                                зданий и металлоконструкций,  утилизации строительных отходов, а <br />
                                также предоставление своей спецтехники частным лицам или <br />
                                организациям,  и на этом спектор услуг не ограничивается. Проработов <br />
                                более 5 лет, наша компания предоставляет высококвалифицированных <br />
                                специалистов и широким спектром специализированного оборудования, <br />
                                благодаря котормы - мы  выполняем проекты любого масштаба - от <br />
                                небольших частных предприятий до масштабных промышленных <br />
                                демонтажных работ.
                            </p>
                            <p>Основополагающие факторы нашей компании является открытость в <br />
                                коммуникации со своими сотрудниками и партнерами. Благодаря <br />
                                индивидуальному подходу, мы можем предложить клиенту <br />
                                индивидуальные стратегии и решения, учитывающие все тонкости <br />
                                проекта и обеспечивающие достижение желаемых результатов.
                            </p>
                            <p>
                                Одним из основных принципов компании “Техметсервис” является <br />
                                экологическое поддержание окружающей среды. Компания акцентирует <br />
                                важность минимизации экологического воздействия своей <br />
                                деятельности.
                            </p>
                        </div>
                        <div className="company-info-image"></div>
                    </div>
                </div>
                <div className="company-block-container">
                    <div className="title-block">
                        <div className="title">
                            <ArrowSVG />
                            <p className="title-text">О компании</p>
                        </div>
                        <p className="title-additional-text">
                            Предоставляет выбор ......
                        </p>
                    </div>
                    <div className="company-images-block">
                        <a href="/demolition" className=" card card-1">
                            <p>
                                Снос и демонтаж
                            </p>
                        </a>
                        <a href="/ground-works" className="card card-2">
                            <p>
                                Земляные работы
                            </p>
                        </a>
                        <a href="/pit-developing" className="card card-3">
                            <p>
                                Разработка и ограждение котлованов
                            </p>
                        </a>
                        <a href="/recycling" className="card card-4">
                            <p>
                                Рециклинг
                            </p>
                        </a>
                        <a href="/renovation" className="card card-5">
                            <p>
                                Реновация территорий
                            </p>
                        </a>
                    </div>
                </div>
                <div className="recycling-container">
                    <div className="title-block">
                        <div className="title">
                            <ArrowSVG />
                            <p className="title-text">Переработка материала</p>
                        </div>
                        <p className="title-additional-text" style={{ maxWidth: "926px" }}>
                            Предоставляет рациональное решение  не только для подрядчика, но и является оптимальным
                            вариантом для застройщика территории.  Наша команда заинтересована в оптимизации процесса
                            работы, а также в достижение результата сопровожждаемого уменьшением затрат клиента
                        </p>
                    </div>
                    <div className="recycling-info-block">
                        <VerticalLineSVG />

                        <div className="block">
                            <p>
                                Вторичное использование строительных отходов, находящихся на том же месте,
                                что и изначально, даёт экономию в вопросах, как покупки, так и перевозки
                                необходимых для строительства материалов
                            </p>

                        </div>

                        <VerticalLineSVG />

                        <div className="block">
                            <p>
                                Экономически рациональное действие, так как материал можно переработать,
                                тем самым не затрагивая вопрос перевозки или утилизации
                            </p>

                        </div>

                        <VerticalLineSVG />

                        <div className="block">
                            <p>
                                Экономия при этом процессе достигается тем, что эти отработанные материалы
                                нет надобности перевозить с места демонтажа, то есть нести затраты на
                                погрузку, транспортировку и разгрузку
                            </p>
                        </div>

                        <VerticalLineSVG />

                        <div className="block">
                            <p>
                                Рециклинг, такой способ разрушения старых конструкций позволяет
                                переработать или утилизировать максимальное количество строительных отходов
                                при минимальном воздействии на окружающую среду
                            </p>

                        </div>

                        <VerticalLineSVG />
                    </div>
                </div>
                <div className="stats-container">
                    <div className="title-block">
                        <div className="title">
                            <ArrowSVG />
                            <p className="title-text">Цифры о нас</p>
                        </div>
                        <p className="title-additional-text" style={{ maxWidth: "716px" }}>
                            Неизменное стремление к качеству и удовлетворенности клиентов стимулирует
                            стремление к совершенству, делая компанию конкурентно способной рынке.
                        </p>
                    </div>
                    <div className="stats-main-content-container">

                        <div className="stats-block">
                            <div className="count">
                                <p>
                                    60+
                                </p>
                            </div>
                            <div className="info">
                                <p className="title">
                                    Выполненных проектов
                                </p>
                                <p className="sub-title">
                                    В Москве и Московской области
                                </p>
                            </div>
                        </div>
                        <div className="stats-block">
                            <div className="count">
                                <p>
                                    50+
                                </p>
                            </div>
                            <div className="info">
                                <p className="title">
                                    Сотрудников высшей категории
                                </p>
                                <p className="sub-title">
                                    Ответственный подход к работе
                                </p>
                            </div>
                        </div>
                        <div className="stats-block">
                            <div className="count">
                                <p>
                                    43+
                                </p>
                            </div>
                            <div className="info">
                                <p className="title">
                                    Собственной техники
                                </p>
                                <p className="sub-title">
                                    Оперативность и без посредников
                                </p>
                            </div>
                        </div>
                        <div className="stats-block">
                            <div className="count">
                                <p>
                                    8+
                                </p>
                            </div>
                            <div className="info">
                                <p className="title">
                                    Государственных заказов
                                </p>
                                <p className="sub-title">
                                    Нам доверяют
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rent-container">
                        <div className="title-block">
                            <div className="title">
                                <ArrowSVG />
                                <p className="title-text">Аренда техники</p>
                            </div>
                            <p className="title-additional-text">
                                Предоставление техники под нужды юредическим или физическим лиц
                            </p>
                        </div>
                        <div className="rent-main-content-container">
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="rent-card">
                                <p>
                                    Название
                                </p>
                            </a>
                            <a href="" className="all-rent-cards">
                                <div className="link">
                                    <p>
                                        Посмотреть все
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                        <path d="M25.375 15L15.4062 5.48438V10.9219C5.86627 10.9219 3.625 17.7624 3.625 24.5156C6.3783 20.9903 8.81328 19.0781 15.4062 19.0781V24.5156L25.375 15Z" stroke="white" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </a>


                        </div>
                    </div>
                </div>
            </div>
            <ContactUsForm />
        </main>
    );
}

export default Company;