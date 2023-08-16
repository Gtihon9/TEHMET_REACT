import { Button } from "../Button/Button"
import { RentDialog } from "./RentDialog"
import { useDisclosure } from "../../hooks/useDisclosure"
import "./RentItem.css"

export const RentItem = ({ item }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()

	return (
		<>
			<div className="rent-item">
				<img className="rent-item-image" alt={item.name} src={item.imageUrl} />
				<div className="rent-item-content">
					<div className="rent-item-heading">
						<p>{item.name}</p>
						<div className="rent-item-price">
							<p>{item.price}</p>
							<span> / смена</span>
						</div>
					</div>

					<div className="rent-item-settings">
						{item.settings.map(setting => (
							<p key={setting + item.name}>{setting}</p>
						))}
					</div>
					<Button className="rent-item-button" onClick={onOpen}>Арендовать</Button>
				</div>
			</div>
			<RentDialog isOpen={isOpen} onClose={onClose} />
		</>
	)
}
