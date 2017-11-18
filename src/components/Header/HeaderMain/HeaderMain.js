import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HeaderMain.css';

import photo from '../../../img/photo180x240.jpg';
import content from './HeaderMain.json';

import BigPhoto from '../../BigPhoto/BigPhoto.js';

class HeaderMain extends Component {
  openBigPhoto() {
    const width = document.documentElement.clientWidth;
    if (width > 450) {
      ReactDOM.render(
        <BigPhoto />,
        document.getElementById('big-photo')
      )

      const page = document.getElementById('root');
      page.style.filter = 'blur(5px)';
    }
  }

  render() {
    const { openBigPhoto } = this;
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
               alt="Zhyhariev Mikhail"
               ref="photo"
               onClick={openBigPhoto.bind(this)}
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
