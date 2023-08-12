import { useEffect, useRef, useState } from "react"
import "./ModalForm.css"
import { Button } from "../Button/Button"

export const ModalForm = ({ isOpen, onClose, jobName }) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      resume: ""
   })

   const fileInputRef = useRef(null)

   const handleFileChange = (e) => {
      const resume = e.target.files[0]
      console.log(resume)
      setFormData((prevData) => ({ ...prevData, resume }))
   }

   const handleFileClick = () => {
      fileInputRef.current.click()
   }

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevData) => ({ ...prevData, [name]: value }))
   }

   const onSubmit = (e) => {
      e.preventDefault()

      console.log(formData);
   }

   const onKeydown = ({ key }) => {
      switch (key) {
         case 'Escape':
            onClose()
            break
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', onKeydown)
      return () => document.removeEventListener('keydown', onKeydown)
   })

   if (!isOpen) return null

   return (
      <div className='modal' onClick={onClose}>
         <div className='modal-dialog' onClick={e => e.stopPropagation()}>
            <span className='modal-close' onClick={onClose}>
               &times;
            </span>
            <div className='modal-header'>
               <h3>
                  Отклик на вакансию:
               </h3>
               <p>{jobName}</p>
            </div>
            <form method="POST" onSubmit={onSubmit}>
               <div className='modal-body' >
                  <input name="name" placeholder="Укажите имя..." type="text" required value={formData.name} onChange={handleChange} />
                  <input name="email" placeholder="Укажите e-mail..." type="email" required value={formData.email} onChange={handleChange} />
                  <input name="phoneNumber" placeholder="Укажите телефон..." type="tel" required value={formData.phoneNumber} onChange={handleChange} />
                  <textarea name="message" placeholder="Сопроводительное письмо" required value={formData.message} onChange={handleChange} />
                  <div className="add-resume">
                     <button type="button" onClick={handleFileClick}>
                        {formData.resume ? "Изменить резюме" : "Прикрепить резюме"}
                     </button>
                     {formData.resume && <span>{formData?.resume.name}</span>}
                     <input id="resume" name="resume" hidden type="file" accept="application/pdf, image/*" multiple={false} required ref={fileInputRef} onChange={handleFileChange} />
                  </div>
               </div>
               <div className='modal-footer'>
                  <Button type="submit">Отправить</Button>
                  <p>
                     Нажимая на кнопку "Отправить", я подтверждаю, что <br />
                     ознакомился с <a href="/conf">Политикой конфиденциальностии</a>  даю согласие <br />
                     на обработку всех моих персональных данных
                  </p>
               </div>
            </form>
         </div>
      </div>
   )
}

