import React, { Component } from 'react';
import './Links.css';

class LinksOther extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="content">
        { items.map( (item, key) =>
          <div className="links__part" key={key}>
            <h2 className="links__part-title">{item.title}</h2>
            <ul>
              { item.fill.map( (article, key) =>
                <li key={key}>
                  <a href={article.link} target="_blank" className="links__article-title" ref="noferrer">
                    <span>{article.number + '.'}</span>
                    {article.title}
                    <p className="links__article-description"><strong>Описание:</strong>{article.description}</p>
                  </a>
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
