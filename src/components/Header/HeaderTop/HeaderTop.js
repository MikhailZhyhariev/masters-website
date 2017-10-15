import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HeaderTop.css';

import logo_ru from '../../../img/ru.svg';
import logo_ua from '../../../img/ua.svg';
import logo_en from '../../../img/en.svg';

import HeaderTopFlag from './HeaderTopFlag.js';
import links from './HeaderTop.json';

class HeaderTop extends Component {
  handleFlagClick(selectedItem) {
    this.props.chooseLanguage(selectedItem.language);

    this.props.openLangMenu(false);
    const menu = ReactDOM.findDOMNode(this.refs.language_menu);
    menu.style.display = 'none';

    const button = ReactDOM.findDOMNode(this.refs.button);
    button.style.boxShadow = 'none';
  }

  handleLinkOpen(link) {
    window.open(link, "_blank");
  }

  handleButtonClick() {
    const button = ReactDOM.findDOMNode(this.refs.button);
    const menu = ReactDOM.findDOMNode(this.refs.language_menu);
    const coordButton = button.getBoundingClientRect();

    const { visible, openLangMenu } = this.props;

    if (!visible) {
      menu.style.display = 'flex';

      button.style.color = '#f22';
      button.style.boxShadow = '0 -1px 3px rgba(9, 9, 8, 0.73)';

      openLangMenu(true);
    } else {
      menu.style.display = 'none';

      button.style.color = 'black';
      button.style.boxShadow = 'none';

      openLangMenu(false);
    }

    menu.style.width = coordButton.width + 'px';
    menu.style.left = coordButton.left + coordButton.width / 2 - menu.style.width / 2 + 'px';
    menu.style.top = coordButton.bottom + 'px';
  }

  render() {
    const { language } = this.props;
    const { handleFlagClick, handleLinkOpen } = this;
    const flags = [
      {
        src: logo_ru,
        language: 'ru',
        languageAvailable: language.available.ru
      },
      {
        src: logo_ua,
        language: 'ua',
        languageAvailable: language.available.ua
      },
      {
        src: logo_en,
        language: 'en',
        languageAvailable: language.available.en
      }
    ]

    let lang = '';
    let button = '';
    if (language.active === 'ru') {
      lang = links.ru;
      button = 'Язык';
    } else if (language.active === 'en') {
      lang = links.en;
      button = 'Language';
    } else {
      lang = links.ua;
      button = 'Мова';
    }

    return (
      <div className="header-top">
        <div className="container">
          <button className="header-top__language-button"
                  ref="button"
                  onClick={this.handleButtonClick.bind(this)}>
                  {button}
          </button>
          <div className="header-top__language" ref="language_menu">
            { flags.map( (item, key) => {
              return <HeaderTopFlag item={item}
                                    key={key}
                                    isActive={item.language === language.active}
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
