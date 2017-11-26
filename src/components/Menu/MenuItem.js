import React, { Component } from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {item, onClick, updateClass, setClassNameButton, handleOpen } = this.props;

    updateClass('menu-close');
    setClassNameButton('menu__button-up');
    handleOpen(false);

    onClick(item);
  }

  render() {
    const { item, isActive } = this.props;
    const { handleClick } = this;

    const style = {
      color: isActive ? 'red' : 'black',
      textDecoration: 'none',
      width: '100%',
      padding: 15
    }

    return (
      <li className={'menu__item ' + (isActive ? 'active' : '')} onClick={handleClick}>
        <Link to={item.link}
              style={style}>
              {item.name}
        </Link>
      </li>
    );
  }
}

export default MenuItem;
