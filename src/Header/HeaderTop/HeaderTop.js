import React, { Component } from 'react';
import './HeaderTop.css';

import logo_ru from '../../img/ru.svg';
import logo_ua from '../../img/ua.svg';
import logo_en from '../../img/en.svg';


class HeaderTop extends Component {
  handleLinkOpen(link, e) {
    window.open(link, "_blank");
  }

  render() {
    const items = [ logo_ru, logo_ua, logo_en ];
    const links = [
      {name: 'ДонНТУ', link: 'http://donntu.org/?lang=ru'},
      {name: 'Портал магистров', link: 'http://masters.donntu.org/indexe.htm'}
    ];

    return (
      <div className="header-top">
        <div className="container">
          <div className="header-top__language">
            { items.map( (item, key) =>
              <img key={key}
                   className="header-top__language-flag"
                   alt="russian"
                   src={item}
              />
            )}
          </div>
          <div className="header-top__website">
            { links.map( (link, key) =>
              <div key={key}
                      className="header-top__website-link"
                      onClick={this.handleLinkOpen.bind(this, link.link)}
                      target="_blank">
                      <div className="header-top__website-link-name">{link.name}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
