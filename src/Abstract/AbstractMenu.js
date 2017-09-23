import React, { Component } from 'react';
import './Abstract.css';

class AbstractMenu extends Component {
  render() {
    const { items, className } = this.props;

    return (
      <ul className={'abstract__content-menu ' + className}>
        { items.map( (item, key) =>
          <li className="abstract__content-menu-item" key={key}>
            <a href={'#' + item.number} className="abstract__content-menu-link">
              { isNaN(+item.number[0]) ? '' : <span>{item.number}</span> }
              {item.name}
            </a>
            {item.subname ? <AbstractMenu items={item.subname}  className="submenu" /> : ''}
          </li>
        )}
      </ul>
    )
  }
}

export default AbstractMenu;
