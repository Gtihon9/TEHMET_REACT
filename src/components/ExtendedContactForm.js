import React, {useRef, useState} from 'react';
import "./ExtendedContactForm.css"
import ArrowSVG from "./Arrow";
const ExtendedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aim: '',
    address: '',
    sizes: '',
    deadline: '',
    photos: [],
  });
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, photos: files }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://your-api-endpoint.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form data submitted successfully');
    } else {
      console.error('Form data submission failed');
    }
  } catch (error) {
    console.error('An error occurred while submitting the form:', error);
  }
};

  return (
      <div className="main-content-container-3">

          <div className="form-main-content">
                    <div className="title-block">
                        <div className="title">
                            <ArrowSVG/>
                            <p className="title-text">Получите коммерческое предложение</p>
                        </div>
                        <p className="title-additional-text">
                            Опишите свой объект для лучшего расчета работы и выгодного решения
                        </p>
                    </div>
                    <div className="content">
                        <p>
                            Подробное описание объекта, для грядущей работе, поможет обеспечить эффективность процесса.
                            Сюда можно включить такие сведения, как адрес объекта, его площадь, количество этажей или
                            уровней, материалы, использованные при строительстве, а также любые уникальные или
                            примечательные особенности. Для большей ясности можно также включить любую сопроводительную
                            документацию или изображения. Предоставление максимально подробной информации поможет
                            свести к минимуму задержки и обеспечить безопасность всех участников проекта.
                        </p>


                        <form className="extended-contact-form" action="/submit" method="POST" onSubmit={handleSubmit}>
                            <div className="form">
                                <div className="three-rows">
                                    <input type="text" name="name" placeholder="Укажите имя..." required value={formData.name} onChange={handleChange} />
                                    <input type="email" name="email" placeholder="Укажите email..." required value={formData.email} onChange={handleChange} />
                                    <input type="tel" name="phone" placeholder="Укажите телефон..." required value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-columns">
                                    <textarea name="aim" placeholder="Укажите цель работы" required value={formData.aim} onChange={handleChange}></textarea>
                                    <textarea name="address" placeholder="Укажите адрес объекта" required value={formData.address} onChange={handleChange}></textarea>
                                    <input type="text" name="sizes" placeholder="Укажите объем работ или его габариты" required value={formData.sizes} onChange={handleChange} />
                                    <input type="date" name="deadline" placeholder="Желаемые сроки выполнения работы" required value={formData.deadline} onChange={handleChange} />
                                    <div className="file-input-container">
                                        <label htmlFor="fileInput" className="file-input-label">
                                            {formData.photos.length > 0 ? 'Изменить фото' : 'Прикрепить фото'}
                                            <input
                                                style={{display: "none"}}
                                                id="fileInput"
                                                className="file-input"
                                                type="file"
                                                name="photos"
                                                accept="image/*"
                                                multiple
                                                onChange={handlePhotoChange}
                                                ref={fileInputRef}
                                        />
                                        </label>
                                          {formData.photos.length > 0 && (
                                            <div className="photo-preview">
                                              {formData.photos.map((photo, index) => (
                                                <img
                                                  key={index}
                                                  src={URL.createObjectURL(photo)}
                                                  alt={`Preview ${index}`}
                                                />
                                              ))}
                                            </div>
                                          )}
                                    </div>
                                </div>
                                <div className="submit-container">
                                    <button type="submit">Отправить</button>
                                    <p>
                                         Нажимая на кнопку "Отправить", я подтверждаю, что <br/>
                                         ознакомился с <a href="/conf">Политикой конфиденциальностии</a>  даю согласие <br/>
                                         на обработку всех моих персональных данных
                                     </p>
                                </div>
                            </div>

                    </form>
                    </div>

          </div>
      </div>

  );
};

export default ExtendedContactForm;
