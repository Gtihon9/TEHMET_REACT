import React from 'react';
import './Header.css';
import phoneIcon from './images/phone-icon.svg';
import Logo from './images/logo.png';
import LogoText from './images/logoText.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-wrapper">
            <img src={Logo} alt="Logo" />
            <img src={LogoText} alt="Logo Text" />
          </div>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/company">О компании</a>
            </li>
            <li>
              <a href="/projects">Проекты</a>
            </li>
            <li>
              <a href="/deals">Услуги</a>
            </li>
            <li>
              <a href="/rent">Аренда</a>
            </li>
            <li>
              <a href="/news">Новости</a>
            </li>
            <li>
              <a href="/jobs">Вакансии</a>
            </li>
          </ul>
        </nav>
        <div className="contact-info">
          <div className="contact-info-container">
            <img src={phoneIcon} className="phone-icon" alt="Phone Icon" />
            <span className="contact-info-text">+7-916-900-42-55</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
