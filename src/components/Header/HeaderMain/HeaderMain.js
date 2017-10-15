import React, { Component } from 'react';
import './HeaderMain.css';

import photo from '../../../img/photo.jpg';
import content from './HeaderMain.json';

class HeaderMain extends Component {
  render() {
    const { language } = this.props;
    let lang;
    if (language === 'ru') lang = content.ru;
    else if (language === 'en') lang = content.en;
    else lang = content.ua;

    return (
      <div className="header-main">
        <div className="container">
          <img src={photo}
               className="header_main__photo"
               alt={photo}
          />
          <div className="header-main__info">
            <h1 className="header-main__info-name">{lang.name}</h1>
            <p className="header-main__info-text">{lang.paragraph[0]}</p>
            <p className="header-main__info-text">{lang.paragraph[1]}</p>
            <p className="header-main__info-text">{lang.paragraph[2]}</p>
            <h1 className="header-main__info-thesis">{lang.thesis}</h1>
            <p className="header-main__info-text">{lang.paragraph[3]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
