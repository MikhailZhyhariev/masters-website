import React, { Component } from 'react';
import './Biography.css';

import content from '../content/Biography.json';

class Biography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    }
  }

  render() {
    return (
      <div className="biography">
        <div className="container">
          <h1 className="biography__title">Биография</h1>
          { content.map( (item, key) =>
            <div key={key}>
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
