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
					<img className="rent-item-image" alt={item.name} src={item.imageUrl} />
					<div className="rent-item-heading">
						<p>{item.name}</p>
						<div className="rent-item-settings">
							{item.settings.map(setting => {
								const name = setting.split(":")[0]
								const value = setting.split(":")[1]
								return (
									<div key={setting + item.name} className="rent-item-settings-item">
										<p>{name}:</p>
										<span>{value}</span>
									</div>
								)
							})}
						</div>
					</div>

					<div className="rent-item-footer">
						<div className="rent-item-price">
							<p>{item.price}</p>
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
