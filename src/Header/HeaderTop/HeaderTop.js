import React, { Component } from 'react';
import './HeaderTop.css';

import logo_ru from '../../img/ru.svg';
import logo_ua from '../../img/ua.svg';
import logo_en from '../../img/en.svg';

import HeaderTopFlag from './HeaderTopFlag.js'

class HeaderTop extends Component {
  constructor(props) {
    super(props);

    this.handleFlagClick = this.handleFlagClick.bind(this);
    this.state = {
      selectedItem: {language: 'RU'}
    }
  }

  handleFlagClick(selectedItem) {
    this.setState({ selectedItem });
  }

  handleLinkOpen(link, e) {
    window.open(link, "_blank");
  }

  render() {
    const flags = [
      {src: logo_ru, language: 'RU'},
      {src: logo_ua, language: 'UKR'},
      {src: logo_en, language: 'EN'}
    ]
    const links = [
      {name: 'ДонНТУ', link: 'http://donntu.org/?lang=ru'},
      {name: 'Портал магистров', link: 'http://masters.donntu.org/indexe.htm'}
    ];
    const { selectedItem } = this.state;
    const { handleFlagClick } = this;

    return (
      <div className="header-top">
        <div className="container">
          <div className="header-top__language">
            { flags.map( (item, key) => {
              return <HeaderTopFlag item={item}
                                    key={key}
                                    isActive={item.language === selectedItem.language}
                                    onClick={handleFlagClick}
                     />
            })}
          </div>
          <div className="header-top__website">
            { links.map( (link, key) =>
              <div key={key}
                      className="header-top__website-link"
                      onClick={this.handleLinkOpen.bind(this, link.link)}
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
