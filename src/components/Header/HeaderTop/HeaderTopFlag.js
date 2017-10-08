import React, { Component } from 'react';
import './HeaderTop.css';


class HeaderTopFlag extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedItem) {
    const {item, onClick} = this.props;
    onClick(item);
  }

  render() {
    const { item, isActive } = this.props;
    const { handleClick } = this;
    let style;
    if (!item.languageAvailable) {
      style = {
        display: 'none'
      }
    } else {
      style = null;
    }

    return (
      <img className={'header-top__language-flag ' + (isActive ? 'header-top__language-flag-active' : '')}
           alt={item.language}
           src={item.src}
           onClick={handleClick}
           style={style}
      />
    );
  }
}

export default HeaderTopFlag;
