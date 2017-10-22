import React, { Component } from 'react';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import AbstractBibliography from './AbstractBibliography.js';

import bibliography from './AbstractBibliography.json';
import content from './Abstract.json';

class Abstract extends Component {
  render() {
    const { padding, className, updateButtonClass, updateButtonTop, language } = this.props;

    let lang;
    if (language === 'ru') lang = content.ru;
    else if (language === 'en') lang = content.en;
    else lang = content.ua;

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
            <AbstractMenu items={lang}
                          menuHeight={padding}
                          onButtonClass={updateButtonClass} onButtonTop={updateButtonTop} />
          </div>
          <AbstractText items={lang} className={''} />
          <AbstractBibliography content={bibliography} />
        </div>
      </div>
    );
  }
}

export default Abstract;
