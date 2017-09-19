import React, { Component } from 'react';
import './Links.css';

import content from './content.js';
import LinksMasters from './LinksMasters.js';
import LinksArticles from './LinksArticles.js';
import LinksOther from './LinksOther.js';


class Links extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: content
    }
  }

  render() {
    return (
      <div className="links">
        <div className="container">
          <h1 className="links__title">Ссылки по теме выпускной работы</h1>
          <LinksMasters />
          <LinksArticles />
          <LinksOther items={ content } />
        </div>
      </div>
    );
  }
}

export default Links;
