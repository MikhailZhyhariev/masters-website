import React, { Component } from 'react';
import './Menu.css';

import MenuItem from './MenuItem.js';
import content from '../../content/Menu.json';

class Menu extends Component {
  handleItemClick(selectedItem) {
    this.props.chooseSection(selectedItem.index);
  }

  render() {
    const { active } = this.props;
    const { handleItemClick } = this;

    return (
      <nav className="menu">
        <div className="container">
          <ul>
            { content.map( (item, key) => {
              return <MenuItem key={key}
                               item={item}
                               isActive={item.index === active}
                               onClick={handleItemClick.bind(this)}
              />
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
