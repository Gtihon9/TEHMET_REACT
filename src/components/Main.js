import React from 'react';
import './Main.css';
import PointSVG from "./Point";
function Main() {
return (
    <main className="main-content">

      <div className="main-content-container">
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
    </main>
);
}

export default Main;