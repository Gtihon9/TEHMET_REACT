import { Link } from "react-router-dom"
import "./JobsItem.css"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"
import { getEmploymentType } from "../../utils/getEmploymentType"
import { staggerChildrenMotionProps } from "../../utils/animationProps"

export const JobsItem = ({ job }) => {
	return (
		<motion.div {...staggerChildrenMotionProps} className="jobs-item">
			<div className="jobs-item-header">
				<p className="jobs-item-header-name">{job.name}</p>
				<div className="jobs-item-header-contacts">
					<span>+7-916-900-42-55</span>
					<span>d.fomenko@tehmetservice.ru</span>
				</div>
			</div>
			<div className="jobs-item-info">
				<p>
					Опыт работы: <span>{job.work_experience}</span>
				</p>
				<p>
					Занятость: <span>{getEmploymentType(job.employment)}</span>
				</p>
			</div>
			<div className="jobs-item-footer">
				<Link className="jobs-item-footer-button" to={`/jobs/${job.id}`}>
					<Button>Подробнее</Button>
				</Link>
				<span>{job.updated_at}</span>
			</div>
		</motion.div>
	)
}
