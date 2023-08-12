import React, { useState } from "react";
import "./ProjectsList.css";
import image1 from "../images/project-item1.png"
import image2 from "../images/project-item2.png"
import image3 from "../images/project-item3.png"
import image4 from "../images/project-item4.png"
import image5 from "../images/project-item5.png"
import image6 from "../images/project-item6.png"



const ProjectsList = () => {

  const projectsData = [
    {
      title: "Завод имени ХРуничева",
      sub_title: "Ракетно-космический завод",
      image: image1,
    },
    {
      title: "ООО Транслом",
      sub_title: "Торговая компания ломом",
      image: image2,
    },
    {
      title: "ООО Химпром",
      sub_title: "Химическая компания",
      image: image3,
    },
    {
      title: "ОАО РСК МИГ",
      sub_title: "Цех самолетостроения ",
      image: image4,
    },
    {
      title: "ООО Щекиноазот",
      sub_title: "Химическая компания",
      image: image5,
    },
    {
      title: " г. Чебоксары ПАО Химпром",
      sub_title: "Химическая компания",
      image: image6,
    },
  ];
  return (
    <div className="project-list">
      <div className="projects-list-container">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index} style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),  url(${project.image})` }}>
            <div className="main-frame">
              <div className="title-container">
                <div className="title">{project.title}</div>
                <div className="sub-title">{project.sub_title}</div>
              </div>
              <button className="project-item-button">
                <p>
                  Смотреть полностью
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                  <path d="M25.375 14.5L15.4062 4.98438V10.4219C5.86627 10.4219 3.625 17.2624 3.625 24.0156C6.3783 20.4903 8.81328 18.5781 15.4062 18.5781V24.0156L25.375 14.5Z" stroke="white" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="project-list-button">
        <p>
          Посмотреть ещё
        </p>
      </button>
    </div>
  );
};

export default ProjectsList;