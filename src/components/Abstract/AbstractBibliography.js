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

  handleItemList(item, key) {
    return <li className="abstract__bibliography-item"
               key={key}
               onClick={this.handleLinkOpen.bind(this, item.link)}>
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
