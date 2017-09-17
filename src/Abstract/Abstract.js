import React, { Component } from 'react';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import content from './content.js';

class Abstract extends Component {
  constructor (props) {
    super(props);

    this.state = {
      menuItems: content
    };
  }

  render() {
    const { menuItems } = this.state;

    return (
      <div className="abstract">
        <div className="container">
          <h1 className="abstract__title">Реферат по теме выпускной работы</h1>
          <div className="abstract__content">
            <h2 className="abstract__content-title">Содержание</h2>
            <AbstractMenu items={menuItems} />
            <AbstractText items={menuItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default Abstract;
