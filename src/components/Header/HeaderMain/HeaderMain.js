import React, { Component } from 'react';
import './HeaderMain.css';

import photo from '../../../img/photo.jpg';
import content from '../../../content/Header.json';

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
            <h1 className="header-main__info-name">{content.header1}</h1>
            <p className="header-main__info-text">{content.paragraph[0]}</p>
            <p className="header-main__info-text">{content.paragraph[1]}</p>
            <h2 className="header-main__info-thesis">{content.header2}</h2>
            <p className="header-main__info-text">{content.paragraph[2]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMain;
