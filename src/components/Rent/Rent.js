import LeftArrowSVG from "../Icons/L_Arrow"
import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { RentItem } from "./RentItem"
import "./Rent.css"
import Catalog1 from "../../images/catalog1.png"
import Catalog2 from "../../images/catalog2.png"
import Catalog3 from "../../images/catalog3.png"
import Catalog4 from "../../images/catalog4.png"

export const Rent = () => {
	return (
		<main className="container rent-content">
			<div className="breadcrumbs">
				<LeftArrowSVG />
				<div className="breadcrumbs-text">
					<Link to="/">Главная</Link>/<Link to="/rent">Аренда спецтехники</Link>
				</div>
			</div>

			<SectionHeading
				title="Аренда спецтехники"
				description="Техметсервис предоставляет услугу аренды спецтехники. Мы понимаем, что сроки реализации проектов могут быть непредсказуемыми. Поэтому мы предлагаем гибкие сроки аренды - от нескольких часов до нескольких недель или даже месяцев. Вы можете выбрать тот срок аренды, который наилучшим образом соответствует вашим потребностям, гарантируя, что вы будете платить за оборудование только тогда, когда оно вам необходимо. "
				style={{ maxWidth: 1250 }}
			/>

			<ArrowHeading title="Каталог спецтехники" />

			<div className="rent-catalog">
				{catalog.map(item => (
					<RentItem key={item.id} item={item} />
				))}
			</div>
		</main>
	)
}

const catalog = [
	{
		id: 1,
		name: "Экскаватор",
		imageUrl: Catalog1,
		price: "600 ₽",
		settings: [
			"Мощность: 200 кВт",
			"Рабочий вес: 29,4 т",
			"Глубина копания: 7, 30 м",
			"Длина рукояти: 3,7 м",
			"Объем ковша: 1,3 м³",
		],
	},
	{
		id: 2,
		name: "Экскаватор-разрушитель",
		imageUrl: Catalog2,
		price: "1600 ₽",
		settings: [
			"Мощность: 296 кВт",
			"Рабочий вес: 60 т",
			"Длина стрелы: 10, 800 м",
			"Рабочая высота: 21, 100 м",
			"Сила разрезания: 1560 кг",
		],
	},
	{
		id: 3,
		name: "Дробильная установка",
		imageUrl: Catalog3,
		price: "4000 ₽",
		settings: [
			"Производительность: до 390 т / ч",
			"Загрузочное отверстие: 60 т",
			"Загрузочный бункер: 7 м³",
			"Ширина ленты: 1050 мм",
		],
	},
	{
		id: 4,
		name: "Самосвал",
		imageUrl: Catalog4,
		price: "2600 ₽",
		settings: [
			"Грузоподъемность: 40 т",
			"Полная масса: 500 т",
			"Максимальная скорость: 70 км / ч",
			"Мощность двигателя: 200 - 700 л.с",
		],
	},
]
