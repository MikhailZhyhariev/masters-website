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
    let headers;
    if (language === 'ru') {
      lang = content.ru;
      headers = content.header.ru;
    } else if (language === 'en') {
      lang = content.en;
      headers = content.header.en;
    } else {
      lang = content.ua;
      headers = content.header.ua;
    }

    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="abstract" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="abstract__title">{headers.sectionHeader}</h1>
          <h1 className="abstract__theme-title">{headers.themeHeader}</h1>
          <nav className="abstract__content">
            <h2 className="abstract__content-title">{headers.text}</h2>
            <AbstractMenu items={lang}
                          menuHeight={padding}
                          onButtonClass={updateButtonClass}
                          onButtonTop={updateButtonTop} />
          </nav>
          <AbstractText items={lang} />
          <AbstractBibliography content={bibliography} />
        </div>
      </div>
    );
  }
}

export default Abstract;
