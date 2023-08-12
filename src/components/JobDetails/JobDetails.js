import { Link, useParams } from "react-router-dom"
import LeftArrowSVG from "../L_Arrow"
import "./JobDetails.css"
import { Button } from "../Button/Button"
import { JobMiniItem } from "./JobMiniItem"
import { useDisclosure } from "../../hooks/useDisclosure"
import { ModalForm } from "./ModalForm"

export const JobDetails = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { id } = useParams()

   return (
      <>
         <main className="container job-details-content">
            <div className="breadcrumbs">
               <LeftArrowSVG />
               <div className="breadcrumbs-text">
                  <Link to="/">Главная</Link>/
                  <Link to="/jobs">Вакансии</Link>/
                  <Link to={`/jobs/${id}`}>Монтажник</Link>
               </div>
            </div>

            <div className="job-details-heading">
               <h1>Монтажник</h1>
               <div className="job-details-heading-info">
                  <p>Опыт работы: {" "}
                     <span>2 года</span>
                  </p>
                  <p>Занятость: {" "}
                     <span>Полная</span>
                  </p>
               </div>
            </div>

            <div className="job-details-salary">
               <p>Оплата: {" "}</p>
               <div>
                  <span style={{ fontWeight: "bold" }}>500 ₽</span>
                  <span className="job-details-salary-tag"> / час</span>
               </div>
            </div>

            <div className="job-details">
               <div className="job-details-container">
                  <div className="job-details-item">
                     <h2>Обязанности</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                  </div>
                  <div className="job-details-item">
                     <h2>Требования:</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                  </div>
                  <div className="job-details-item">
                     <h2>Условия:</h2>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  Lorem Ipsum.</p>
                  </div>

                  <div className="job-detals-actions">
                     <Button onClick={onOpen}>Откликнуться</Button>
                     <div className="job-details-actions-contacts">
                        <span>+7-916-900-42-55</span>
                        <span>fdv240@gmail.com</span>
                     </div>
                  </div>
               </div>

               <div className="job-details-more">
                  <h3>Еще вакансии</h3>
                  <div className="job-details-more-list">
                     {moreJobs.map((job) => (
                        <JobMiniItem key={job.id} job={job} />
                     ))}
                  </div>
               </div>
            </div>
         </main >
         <ModalForm isOpen={isOpen} onClose={onClose} jobName={"Монтажник"} />
      </>
   )
}

const moreJobs = [
   {
      id: 1,
      name: "Водитель",
      workExperience: "2 года",
      busyness: "Полная",
      salary: "500 ₽"
   },
   {
      id: 2,
      name: "Сварщик",
      workExperience: "3 года",
      busyness: "Частичная",
      salary: "700 ₽"
   },
   {
      id: 3,
      name: "Сварщик",
      workExperience: "1 год",
      busyness: "Полная",
      salary: "460 ₽"
   },
]
