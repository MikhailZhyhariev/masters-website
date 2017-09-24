import React, { Component } from 'react';
import './HeaderTop.css';

import logo_ru from '../../../img/ru.svg';
import logo_ua from '../../../img/ua.svg';
import logo_en from '../../../img/en.svg';

import HeaderTopFlag from './HeaderTopFlag.js';
import links from '../../../content/HeaderTop.json';

class HeaderTop extends Component {
  handleFlagClick(selectedItem) {
    this.props.chooseLanguage(selectedItem.language);
  }

  handleLinkOpen(link) {
    window.open(link, "_blank");
  }

  render() {
    const flags = [
      {src: logo_ru, language: 'ru'},
      {src: logo_ua, language: 'ua'},
      {src: logo_en, language: 'en'}
    ]
    const { chooseLanguage, language } = this.props;
    const { handleFlagClick, handleLinkOpen } = this;

    let lang;
    if (language == 'ru') lang = links.ru;
    else if (language == 'en') lang = links.en;
    else lang = links.ua;

    return (
      <div className="header-top">
        <div className="container">
          <div className="header-top__language">
            { flags.map( (item, key) => {
              return <HeaderTopFlag item={item}
                                    key={key}
                                    isActive={item.language === language}
                                    onClick={handleFlagClick.bind(this)}
                     />
            })}
          </div>
          <div className="header-top__website">
            { lang.map( (link, key) =>
              <div key={key}
                      className="header-top__website-link"
                      onClick={handleLinkOpen.bind(this, link.link)}
                      target="_blank">
                      {link.name}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
