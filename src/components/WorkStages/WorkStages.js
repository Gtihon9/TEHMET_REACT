import "./WorkStages.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { stages } from "./WorkStages.constants"
import { WorkStagesItem } from "./WorkStagesItem"

export const WorkStages = () => {
   return (
      <div className="work-stages">
         <ArrowHeading
            title="Этапы работы"
            description="Неизменное стремление к качеству и удовлетворенности клиентов стимулирует стремление к совершенству, делая компанию конкурентно способной рынке."
            style={{ maxWidth: 720 }}
         />
         <div className="work-stages-items">
            {stages.map((stage) => (
               <WorkStagesItem key={stage.id} stage={stage} />
            ))}
         </div>
      </div>
   )
}
