import React, { Component } from 'react';
import './HeaderMain.css';

import photo from '../../img/photo.jpg';


class HeaderMain extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="container">
          <img src={photo}
               className="header_main__photo"
               alt={photo}
          />
          <div className="header-main__info">
            <h1 className="header-main__info-name">Жигарев Михаил Юрьевич</h1>
            <p className="header-main__info-text">Факультет компьютерных информационных технологий и автоматики</p>
            <p className="header-main__info-text">Кафедра радиотехники и защиты информации</p>
            <h2 className="header-main__info-thesis">Исследование модели стабилизации беспилотных летательных аппаратов в системах мониторинга промышленных предприятий</h2>
            <p className="header-main__info-text">Научный руководитель: какой-то научный руководитель</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
