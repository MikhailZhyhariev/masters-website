import React, { Component } from 'react';
import './Biography.css';

import content from './Biography.json';

class Biography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    }
  }

  render() {
    const { language } = this.props;
    let lang;
    let header;
    if (language === 'ru') {
      lang = content.ru;
      header = content.header.ru;
    } else {
      lang = content.ua;
      header = content.header.ua;
    }

    const { padding, className } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="biography" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="biography__title">{header}</h1>
          { lang.map( (item, key) =>
            <div key={key} className="biography__text-part">
              <h3 className="biography__paragraph__title">{item.header}</h3>
              { item.text.map( (item, key) =>
                <p className="biography__text" key={key}>{item}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Biography;
