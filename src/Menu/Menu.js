import React, { Component } from 'react';
import './Menu.css';

import Resume from '../Resume/Resume.js';
import MenuItem from './Menu_Item.js';


class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {
      selectedItem: {index: 0, element: <Resume />}
    };
  }

  handleItemClick(selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;
    const { handleItemClick } = this;

    return (
      <main>
        <nav className="menu">
          <div className="container">
            <ul>
              { items.map( (item, key) => {
                return <MenuItem key={key}
                                 item={item}
                                 isActive={item.index === selectedItem.index}
                                 onClick={handleItemClick}
                />
              })}
            </ul>
          </div>
        </nav>
        { selectedItem.element }
      </main>
    );
  }
}

export default Menu;
