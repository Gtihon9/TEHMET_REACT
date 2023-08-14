import { Link } from "react-router-dom"
import "./JobsItem.css"

export const JobsItem = ({ job }) => {
	return (
		<div className="jobs-item">
			<div className="jobs-item-header">
				<p className="jobs-item-header-name">{job.name}</p>
				<div className="jobs-item-header-contacts">
					<span>{job.phoneNumber}</span>
					<span>{job.email}</span>
				</div>
			</div>
			<div className="jobs-item-info">
				<p>
					Опыт работы: <span>{job.workExperience}</span>
				</p>
				<p>
					Занятость: <span>{job.busyness}</span>
				</p>
			</div>
			<div className="jobs-item-footer">
				<Link className="jobs-item-footer-button" to={`/jobs/${job.id}`}>
					Подробнее
				</Link>
				<span>{job.date}</span>
			</div>
		</div>
	)
}
