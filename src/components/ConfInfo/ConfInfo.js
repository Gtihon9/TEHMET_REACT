import "./ConfInfo.css"
import { Link } from "react-router-dom"

export const ConfInfo = () => {
	return (
		<span className="conf-info">
			Нажимая на кнопку "Отправить", я подтверждаю, что ознакомился с
			<Link to="/conf"> Политикой конфиденциальности </Link>и даю согласие на обработку всех моих
			персональных данных
		</span>
	)
}
