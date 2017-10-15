import React, { Component } from 'react';
import './Menu.css';

import MenuItem from './MenuItem.js';
import MenuButton from './MenuButton.js';
import content from './Menu.json';

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
    const { chooseSection, updateButtonClass, updateButtonTop, checkLanguage, handleSetTitle } = this.props;

    chooseSection(selectedItem.index);
    checkLanguage(selectedItem.available);

    updateButtonTop(0);
    updateButtonClass('button-up');

    handleSetTitle(selectedItem.title);

    window.scrollTo(0, 0);
  }

  render() {
    const { active, language, className, onScroll, openAdaptiveMenu, updateClass, classNameMenu, classNameButton, setClassNameButton, open } = this.props;
    const { handleItemClick } = this;

    let lang;
    if (language === 'ru') lang = content.ru;
    else if (language === 'en') lang = content.en;
    else lang = content.ua;

    return (
      <nav className={"menu " + className} onScroll={onScroll}>
        <div className="container">
          <ul className={classNameMenu}>
            { lang.map( (item, key) => {
              return <MenuItem key={key}
                               item={item}
                               isActive={item.index === active}
                               onClick={handleItemClick}
                               updateClass={updateClass}
                               setClassNameButton={setClassNameButton}
                               handleOpen={openAdaptiveMenu}
              />
            })}
          </ul>
        </div>
        <MenuButton handleOpen={openAdaptiveMenu}
                    open={open}
                    updateClass={updateClass}
                    setClassNameButton={setClassNameButton}
                    classNameButton={classNameButton} />
      </nav>
    );
  }
}

export default Menu;
