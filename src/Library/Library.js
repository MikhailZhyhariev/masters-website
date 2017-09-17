import React, { Component } from 'react';
import './Library.css';

import content from './content.js';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: content
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="library">
        <div className="container">
          <h1 className="library__title">Библиотека материалов по теме выпускной работы</h1>
          <div className="content">
            { items.map( (item, key) =>
              <div className="library__part" key={key}>
                <h2 className="library__part-title">{item.title}</h2>
                <ul>
                  { item.fill.map( (article, key) =>
                    <li key={key}>
                      <h3 className="library__article-title">
                        <span>{article.number}</span>
                        <a href={article.link} target="_blank" ref="noferrer">{article.title}</a>
                      </h3>
                      <p className="library__article-author"><strong>Авторы:</strong>{article.author}</p>
                      <p className="library__article-description"><strong>Описание:</strong>{article.description}</p>
                      <p className="library__article-source"><strong>Источник:</strong>{article.source}</p>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Library;