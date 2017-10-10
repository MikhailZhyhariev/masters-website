import React, { Component } from 'react';
import './Links.css';

import LinksMasters from './LinksMasters.js';
import LinksArticles from './LinksArticles.js';
import LinksOther from './LinksOther.js';
import content from './Links.json';


class Links extends Component {
  render() {
    const { padding, className } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="links" style={className === 'fixed' ? style : null}>
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
