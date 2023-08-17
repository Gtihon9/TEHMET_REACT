import { StatsItem } from "./StatsItem"
import "./Stats.css"

export const Stats = ({ stats }) => {
   return (
      <div className="stats">
         {stats.map((stat) => (
            <StatsItem key={stat.title} stat={stat} />
         ))}
      </div>
   )
}