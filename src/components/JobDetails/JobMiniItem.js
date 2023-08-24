import "./JobMiniItem.css"
import { getEmploymentType } from "../../utils/getEmploymentType"
import { getPaymentType } from "../../utils/getPaymentType"

export const JobMiniItem = ({ job }) => {
	return (
		<div className="job-mini-item">
			<p className="job-mini-item-name">{job.name}</p>
			<div className="job-mini-item-info">
				<p>
					Опыт работы: <span>{job.work_experience}</span>
				</p>
				<p>
					Занятость: <span>{getEmploymentType(job.employment)}</span>
				</p>
			</div>
			<div className="job-mini-item-salary">
				<span style={{ fontWeight: "bold" }}>{job.payment} ₽</span>
				<span className="job-mini-item-salary-tag"> / {getPaymentType(job.payment_type)}</span>
			</div>
		</div>
	)
}
