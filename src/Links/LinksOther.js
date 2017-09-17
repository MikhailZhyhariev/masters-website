import React, { Component } from 'react';
import './Links.css';

class LinksOther extends Component {
  render() {
    const { items } = this.props;

    return (
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
                  <p className="library__article-description"><strong>Описание:</strong>{article.description}</p>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default LinksOther;
