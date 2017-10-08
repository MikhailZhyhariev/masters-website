import React, { Component } from 'react';
import './Abstract.css';

class AbstractMenu extends Component {
  addName(item) {
    const { onClick } = this.props;
    onClick(item)
  }

  render() {
    const { items, className } = this.props;
    const { addName } = this;

    return (
      <ul className={'abstract__content-menu ' + className}>
        { items.map( (item, key) =>
          <li className="abstract__content-menu-item" key={key}>
            <a href={'#' + item.number}
               className="abstract__content-menu-link"
               onClick={addName.bind(this, item.name)}>
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
