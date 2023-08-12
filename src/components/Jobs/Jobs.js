import LeftArrowSVG from "../L_Arrow";
import "./Jobs.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading";
import { PaperCheckIcon } from "../PaperCheckIcon"
import { JobsItem } from "./JobsItem";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Jobs = () => {
   return (
      <main className="container jobs-content">
         <div className="breadcrumbs">
            <LeftArrowSVG />
            <div className="breadcrumbs-text">
               <Link to="/">Главная</Link>/<Link to="/jobs">Вакансии</Link>
            </div>
         </div>
         <SectionHeading
            title={"Вакансии в Техметсервис"}
            description={"Наша компания постоянно растет и мы заинтересованы в поиске хороших сотрудников в нашу команду"}
         />

         <div className="jobs">
            <ArrowHeading>Новые вакансии</ArrowHeading>
            <div className="jobs-list">
               {jobsList.map((job) => (
                  <JobsItem key={job.id} job={job} />
               ))}
            </div>
         </div>
      </main >
   )
}

const jobsList = [
   {
      id: 1,
      name: "Монтажник",
      phoneNumber: "+7-916-900-42-55",
      email: "fdv240@gmail.com",
      workExperience: "2 года",
      busyness: "Полная",
      date: "23 марта 2023"
   },
   {
      id: 2,
      name: "Водитель",
      phoneNumber: "+7-916-900-42-55",
      email: "fdv240@gmail.com",
      workExperience: "1 год",
      busyness: "Полная",
      date: "20 марта 2023"
   },
   {
      id: 3,
      name: "Сварщик ",
      phoneNumber: "+7-916-900-42-55",
      email: "fdv240@gmail.com",
      workExperience: "3 года",
      busyness: "Частичная",
      date: "20 марта 2023"
   },
   {
      id: 3,
      name: "Сварщик ",
      phoneNumber: "+7-916-900-42-55",
      email: "fdv240@gmail.com",
      workExperience: "3 года",
      busyness: "Полная",
      date: "10 апреля 2023"
   },
]