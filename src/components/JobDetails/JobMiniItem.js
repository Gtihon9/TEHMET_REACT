import "./JobMiniItem.css"

export const JobMiniItem = ({ job }) => {
   return (
      <div className="job-mini-item">
         <p className="job-mini-item-name">{job.name}</p>
         <div className="job-mini-item-info">
            <p>Опыт работы: {" "}
               <span>{job.workExperience}</span>
            </p>
            <p>Занятость: {" "}
               <span>{job.busyness}</span>
            </p>
         </div>
         <div className="job-mini-item-salary">
            <span style={{ fontWeight: "bold" }}>{job.salary}</span>
            <span className="job-mini-item-salary-tag"> / час</span>
         </div>
      </div>
   )
}
