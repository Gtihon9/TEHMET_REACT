import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, photos: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                                <textarea name="aim" placeholder="Укажите цель работы" required value={formData.aim} onChange={handleChange}></textarea>
                                <textarea name="address" placeholder="Укажите адрес объекта" required value={formData.address} onChange={handleChange}></textarea>
                                <input type="text" name="sizes" placeholder="Укажите объем рыбот или его габариты" required value={formData.sizes} onChange={handleChange} />
                                <input type="date" name="deadline" placeholder="Желаемые сроки выполнения работы" required value={formData.deadline} onChange={handleChange} />
                                <input style={{ all: "initial"}} type="file" name="photos"  multiple onChange={handlePhotoChange} />
                                <button type="submit">Submit</button>
                            </div>

                    </form>
                    </div>

          </div>
      </div>

  );
};

export default ExtendedContactForm;
