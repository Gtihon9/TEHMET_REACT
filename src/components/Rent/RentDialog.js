import { useEffect, useState } from "react"
import "./RentDialog.css"
import { Button } from "../Button/Button"

export const RentDialog = ({ isOpen, onClose }) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      rentPeriod: ""
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const onKeydown = ({ key }) => {
      if (key === "Escape") {
         onClose()
      }
   }

   useEffect(() => {
      document.addEventListener("keydown", onKeydown)
      return () => document.removeEventListener("keydown", onKeydown)
   })

   if (!isOpen) return null

   return (
      <div className="rent-modal" onClick={onClose}>
         <div className="rent-modal-dialog" onClick={e => e.stopPropagation()}>
            <span className="rent-modal-close" onClick={onClose}>
               &times;
            </span>
            <div className="rent-modal-content">
               <div className="rent-modal-content-left">
                  <h3>Свяжитесь с нами</h3>
                  <form method="POST" onSubmit={handleSubmit}>
                     <div className="rent-modal-body">
                        <input
                           name="name"
                           placeholder="Укажите имя..."
                           type="text"
                           required
                           value={formData.name}
                           onChange={handleChange}
                        />
                        <input
                           name="email"
                           placeholder="Укажите email..."
                           type="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                        />
                        <input
                           name="phoneNumber"
                           placeholder="Укажите телефон..."
                           type="tel"
                           required
                           value={formData.phoneNumber}
                           onChange={handleChange}
                        />
                        <input
                           name="rentPeriod"
                           placeholder="Срок аренды..."
                           type="date"
                           required
                           value={formData.rentPeriod}
                           onChange={handleChange}
                        />
                     </div>
                     <div className="rent-modal-footer">
                        <Button type="submit">Отправить</Button>
                        <p>
                           Нажимая на кнопку "Отправить", я подтверждаю, что <br />
                           ознакомился с <a href="/conf">Политикой конфиденциальностии</a> даю согласие{" "}
                           <br />
                           на обработку всех моих персональных данных
                        </p>
                     </div>
                  </form>
               </div>
               <div className="rent-modal-content-right">
                  <h3>Контакты</h3>
                  <div className="rent-modal-content-contacts">
                     <div className="rent-contact">
                        <span>Телефон</span>
                        <p>+7-916-900-42-55</p>
                     </div>
                     <div className="rent-contact">
                        <span>Email</span>
                        <p>fdv240@gmail.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
