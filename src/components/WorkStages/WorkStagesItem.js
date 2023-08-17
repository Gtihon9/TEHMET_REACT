import "./WorkStagesItem.css"

export const WorkStagesItem = ({ stage }) => {
   return (
      <div className="work-stages-item">
         <div className="work-stages-header">
            <stage.image />
            <span>0{stage.id}</span>
         </div>
         <p>{stage.title}</p>
      </div>
   )
}
