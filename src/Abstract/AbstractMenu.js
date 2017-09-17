import React, { Component } from 'react';
import './Abstract.css';

class AbstractMenu extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="abstract__content-menu">
        { items.map( (item, key) => {
          return <li className="abstract__content-menu-item" key={key}>
                    <a href={'#' + item.number} className="abstract__content-menu-link">
                      <div className={(item.number >= 1 ? 'noempty' : 'empty')}>
                        {(item.number >= 1 ? (item.number + '.') : '1')}
                      </div>
                      {item.name}
                    </a>
                    <ul className="abstract__content-menu">
                      {item.subname.map( (subitem, key) => {
                        return <li className="abstract__content-menu-item abstract__content-menu-subitem" key={key}>
                                  <a href={'#' + subitem.number} className="abstract__content-menu-link">
                                    <div className={(subitem.number >= 1 ? 'noempty' : 'empty')}>
                                      {(subitem.number >= 1 ? (subitem.number + '. ') : '')}
                                    </div>
                                    {subitem.name}
                                  </a>
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
