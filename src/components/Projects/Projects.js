import LeftArrowSVG from "../Icons/L_Arrow";
import ProjectsList from "./ProjectsList";
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm";
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./Projects.css"

const Projects = () => {
    return (
        <main className="projects-content">
            <div className="breadcrumbs container">
                <LeftArrowSVG />
                <div className="breadcrumbs-text">
                    <a href="/">Главная</a>/<a href="/projects">Проекты</a>
                </div>
            </div>
            <div className="projects container">
                <SectionHeading title="Проекты" description="Более 60 завершенных проектов" />

                <div className="directions-container">
                    <ArrowHeading>Направления</ArrowHeading>
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
                <div className="content-container">
                    <ProjectsList />
                </div>
            </div>
            <div className="background-container-2">
                <ExtendedContactForm />
            </div>
        </main>
    );
}

export default Projects;