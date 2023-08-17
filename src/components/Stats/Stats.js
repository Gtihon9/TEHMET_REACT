import { StatsItem } from "./StatsItem"
import { stats } from "./Stats.constants"
import "./Stats.css"

export const Stats = () => {
   return (
      <div className="stats">
         {stats.map((stat) => (
            <StatsItem key={stat.title} stat={stat} />
         ))}
      </div>
   )
}