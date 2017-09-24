import React, { Component } from 'react';
import './Links.css';

import LinksMasters from './LinksMasters.js';
import LinksArticles from './LinksArticles.js';
import LinksOther from './LinksOther.js';
import content from '../../content/Links.json';


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
          <LinksMasters items={content.masters} />
          <LinksArticles items={content.articles} />
          <LinksOther items={ content.other } />
        </div>
      </div>
    );
  }
}

export default Links;
