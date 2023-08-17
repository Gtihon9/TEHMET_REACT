import "./StatsItem.css"

export const StatsItem = ({ stat }) => {
   return (
      <div className="stat-item">
         <h3>{stat.value}</h3>
         <p>{stat.title}</p>
         <span>{stat.subtitle}</span>
      </div>
   )
}
