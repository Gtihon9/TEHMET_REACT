import "./SectionHeading.css"

export const SectionHeading = ({ title, description }) => {
   return (
      <div className="section-heading">
         <h1>{title}</h1>
         <p>{description}</p>
      </div>
   )
}
