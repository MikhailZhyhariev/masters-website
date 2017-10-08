import React, { Component } from 'react';
import './Abstract.css';

class AbstractMenu extends Component {
  addName(item) {
    const { onClick, menuHeight, onButtonClass, onButtonTop } = this.props;

    const header = document.getElementById(item);
    const step = header.getBoundingClientRect().top / 100;

    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    const pageTopMax = scrollHeight - document.documentElement.clientHeight;

    const timerId = setInterval( () => {
      const top = header.getBoundingClientRect().top;
      if ((top - 10 - menuHeight) > 0 & window.pageYOffset < pageTopMax) {
        window.scrollBy(0, step);
      } else {
        clearInterval(timerId);
        onButtonClass('button-up');
        onButtonTop(0);
      }
    }, 5)
  }

  render() {
    const { items, className, menuHeight, onButtonClass, onButtonTop } = this.props;
    const { addName } = this;

    return (
      <ul className={'abstract__content-menu ' + className}>
        { items.map( (item, key) =>
          <li className="abstract__content-menu-item" key={key}>
            <div href={'#' + item.number}
               className="abstract__content-menu-link"
               onClick={addName.bind(this, item.number)}>
              { isNaN(+item.number[0]) ? '' : <span>{item.number}</span> }
              {item.name}
            </div>
            {item.subname ? <AbstractMenu items={item.subname}
                                          className="submenu"
                                          menuHeight={menuHeight}
                                          onButtonClass={onButtonClass} onButtonTop={onButtonTop} /> : ''}
          </li>
        )}
      </ul>
    )
  }
}

export default AbstractMenu;
