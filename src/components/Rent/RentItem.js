import { Button } from "../Button/Button"
import { RentModal } from "./RentModal"
import { useDisclosure } from "../../hooks/useDisclosure"
import "./RentItem.css"

export const RentItem = ({ item }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	return (
		<>
			<div className="rent-item">
				<div className="rent-item-content">
					<img className="rent-item-image" alt={item.name} src={item.logo} />
					<div className="rent-item-heading">
						<p>{item.name}</p>
						<div className="rent-item-settings">
							{item?.characteristics?.map(setting => {
								const name = setting.data.split(":")[0]
								const value = setting.data.split(":")[1]
								return (
									<div key={setting.id} className="rent-item-settings-item">
										<p>{name}:</p>
										<span>{value}</span>
									</div>
								)
							})}
						</div>
					</div>

					<div className="rent-item-footer">
						<div className="rent-item-price">
							<p>от {item.price} ₽</p>
							<span> / смена</span>
						</div>
						<Button className="rent-item-button" onClick={onOpen}>
							Арендовать
						</Button>
					</div>
				</div>
			</div>
			<RentModal isOpen={isOpen} onClose={onClose} />
		</>
	)
}
