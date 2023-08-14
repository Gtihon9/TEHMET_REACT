import LeftArrowSVG from "../Icons/L_Arrow";
import ArrowSVG from "../Icons/Arrow";
import "./Services.css"

const Services = () => {
    return (
        <main className="main-content">
            <div className="breadcrumbs">
                <LeftArrowSVG />
                <div className="breadcrumbs-text">
                    <a href="/">Главная</a>/<a href="/services">Услуги</a>
                </div>
            </div>
            <div className="main-content-container">
                <div className="cervices">
                    <div className="main-title-container">
                        <div className="main-title">
                            <p className="title">Наш каталог услуг</p>
                            <p className="sub-title" style={{ maxWidth: "1050px" }}>
                                Наша команда профессионалов способна справиться с проектами
                                любого масштаба. Мы предлагаем широкий спектр услуг, выборочные внутренние,
                                наружные  и спектр работ в близко прилегающей территорий к строениям
                            </p>
                        </div>
                        <div className="stats-container">
                            <div className="title-block">
                                <div className="title">
                                    <ArrowSVG />
                                    <p className="title-text">Почему нас выбирают</p>
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

                        </div>
                    </div>
                </div>

            </div>


        </main>
    );
}

export default Services;