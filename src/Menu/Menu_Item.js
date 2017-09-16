import React, { Component } from 'react';
import './Menu.css';


class MenuItem extends Component {
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

    return (
      <li className={'menu__item ' + (isActive ? 'active' : '')} onClick={handleClick}>
        {item.name}
      </li>
    );
  }
}

export default MenuItem;
