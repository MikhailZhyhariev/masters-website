import React, { Component } from 'react';
import './Header.css';

import HeaderTop from './HeaderTop/HeaderTop.js';
import HeaderMain from './HeaderMain/HeaderMain.js';


class Header extends Component {
  render() {
    const { chooseLanguage, language, openMenu, visible } = this.props;

    return (
      <header className="header">
        <HeaderTop chooseLanguage={chooseLanguage}
                   language={language}
                   openLangMenu={openMenu}
                   visible={visible} />
        <HeaderMain language={language.active} />
      </header>
    );
  }
}

export default Header;
