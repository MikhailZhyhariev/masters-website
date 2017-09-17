import React, { Component } from 'react';
import './Abstract.css';

class AbstractMenu extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="abstract__content-menu">
        { items.map( (item, key) => {
          return <li className="abstract__content-menu-item" key={key}>
                    <a href={'#' + item.number} className="abstract__content-menu-link">{item.name}</a>
                    <ul>
                      {item.subname.map( (subitem, key) => {
                        return <li className="abstract__content-menu-item subitem" key={key}>
                                  <a href={'#' + subitem.number} className="abstract__content-menu-link">{subitem.name}</a>
                               </li>
                      })}
                    </ul>
                 </li>
        })}
      </ul>
    );
  }
}

export default AbstractMenu;
