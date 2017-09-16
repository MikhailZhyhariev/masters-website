import React, { Component } from 'react';
import './Header.css';

import HeaderTop from './HeaderTop/HeaderTop.js';
import HeaderMain from './HeaderMain/HeaderMain.js';


class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderTop />
        <HeaderMain />
      </header>
    );
  }
}

export default Header;
