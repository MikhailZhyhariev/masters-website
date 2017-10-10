import React, { Component } from 'react';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import content from './Abstract.json';

class Abstract extends Component {
  render() {
    const { padding, className, updateButtonClass, updateButtonTop } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="abstract" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="abstract__title">Реферат по теме выпускной работы</h1>
          <div className="abstract__content">
            <h2 className="abstract__content-title">Содержание</h2>
            <AbstractMenu items={content}
                          menuHeight={padding}
                          onButtonClass={updateButtonClass} onButtonTop={updateButtonTop} />
          </div>
          <AbstractText items={content} className={''} />
        </div>
      </div>
    );
  }
}

export default Abstract;
