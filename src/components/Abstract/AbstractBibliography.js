import React, { Component } from 'react';
import './Abstract.css';

class AbstractBibliography extends Component {
  constructor(props) {
    super(props);

    this.handleItemList = this.handleItemList.bind(this);
  }

  handleLinkOpen(link) {
    window.open(link, '_blank');
  }

  handleHover(item) {
    const element = document.getElementById('item-' + item.id);
    if (item.link) {
      element.classList.add('abstract__bibliography-item-hover');
    }
  }

  handleUnHover(item) {
    const element = document.getElementById('item-' + item.id);
    element.classList.remove('abstract__bibliography-item-hover');
  }

  handleItemList(item, key) {
    const { handleHover, handleUnHover } = this;

    return <li className="abstract__bibliography-item"
               key={key}
               onClick={item.link ? this.handleLinkOpen.bind(this, item.link) : null}
               onMouseEnter={handleHover.bind(this, item)}
               onMouseLeave={handleUnHover.bind(this, item)}
               id={"item-" + item.id}>
      <span className="abstract__bibliography-item-number">{key + 1}.</span>
      {item.text}
      <span className="abstract__bibliography-link-name">{item.name}</span>
    </li>
  }

  render() {
    const { content } = this.props;
    const { handleItemList } = this;

    return (
      <ul className="abstract__bibliography">
        { content.map( (item, key) => handleItemList(item, key) )}
      </ul>
    );
  }
}

export default AbstractBibliography;
