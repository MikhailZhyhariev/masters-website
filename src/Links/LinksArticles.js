import React, { Component } from 'react';
import './Links.css';

const content = [
  {
    title: 'Научные работы и статьи',
    fill: [
      {
        title: 'KISS: a program for optimal state assignment of finite state machines',
        author: 'De Micheli G., Brayton R., Sangiovanni-Vincentelli A.',
        description: 'Программная реализация алгоритма KISS кодирования состояний конечных автоматов',
        link: '',
        number: 5
      },
      {
        title: 'Какое-то название',
        author: 'Автор',
        description: 'В данной работе...',
        link: '',
        number: 6
      },
      {
        title: 'Какое-то название',
        author: 'Автор',
        description: 'В данной работе...',
        link: '',
        number: 7
      }
    ]
  }
]


class LinksArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: content
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="content">
        { items.map( (item, key) =>
          <div className="links__part" key={key}>
            <h2 className="links__part-title">{item.title}</h2>
            <ul>
              { item.fill.map( (article, key) =>
                <li key={key}>
                  <a href={article.link} target="_blank" className="links__article-title" ref="noferrer">
                    <span>{article.number}</span>
                    {article.title}
                    <p className="links__article-manager"><strong>Авторы:</strong>{article.author}</p>
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

export default LinksArticles;
