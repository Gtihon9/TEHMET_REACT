import React from 'react';
import "./Projects.css"
import LeftArrowSVG from "./L_Arrow";
import ArrowSVG from "./Arrow";
import ProjectsList from "./ProjectsList";
import ExtendedContactForm from "./ExtendedContactForm";

function Projects() {
    return (
        <main className="main-content">
            <div className="back">
                <LeftArrowSVG/>
                <div className="back-text">
                    <a href="/">Главная</a>/<a href="/projects">Проекты</a>
                </div>
            </div>
            <div className="main-content-container">
                <div className="projects">
                    <div className="main-title-container">
                        <div className="main-title">
                            <p className="title">Проекты</p>
                            <p className="sub-title">Более 60 завершенных проектов</p>
                        </div>
                        <div className="directions-container">
                            <div className="title-block">
                                <div className="title">
                                    <ArrowSVG/>
                                    <p className="title-text">Направления</p>
                                </div>
                            </div>
                            <div className="directions-links-block">
                                <button className="link">
                                    <p>Все проекты</p>
                                </button>
                                <button className="link">
                                    <p>Снос и демонтаж</p>
                                </button>
                                <button className="link">
                                    <p>Рециклинг</p>
                                </button>
                                <button className="link">
                                    <p>Реновация территорий</p>
                                </button>
                                <button className="link">
                                    <p>Земляные работы</p>
                                </button>
                                <button className="link">
                                    <p>Разработка и ограждение котлованов</p>
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="content-container">
                        <ProjectsList/>
                    </div>
                </div>
            </div>
            <div className="background-container-2">
                <ExtendedContactForm/>
            </div>
        </main>
    );
}

export default Projects;