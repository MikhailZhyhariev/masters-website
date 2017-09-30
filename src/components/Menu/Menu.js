import React, { Component } from 'react';
import './Menu.css';

import MenuItem from './MenuItem.js';
import content from '../../content/Menu.json';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.onScroll);
  }

  handleItemClick(selectedItem) {
    this.props.chooseSection(selectedItem.index);
  }

  render() {
    const { active, language, className, onScroll } = this.props;
    const { handleItemClick } = this;

    let lang;
    if (language === 'ru') lang = content.ru;
    else if (language === 'en') lang = content.en;
    else lang = content.ua;

    return (
      <nav className={"menu " + className} onScroll={onScroll}>
        <div className="container">
          <ul>
            { lang.map( (item, key) => {
              return <MenuItem key={key}
                               item={item}
                               isActive={item.index === active}
                               onClick={handleItemClick}
              />
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
