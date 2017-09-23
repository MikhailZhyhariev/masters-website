import React, { Component } from 'react';
import './Links.css';

const content = [
  {
    title: 'Материалы магистров ДонНТУ',
    fill: [
      {
        title: 'Татолов Е.Р. Разработка и исследование подхода к унификации синтеза автоматов Мура в базисе FPGA',
        manager: 'к.т.н. Зеленева И.Я.',
        description: 'Персональный сайт на портале магистров ДонНТУ, 2011 г.',
        link: '',
        number: 1
      },
      {
        title: 'ФИО, Тема',
        manager: 'Какой-то руководитель',
        description: 'В данной работе...',
        link: '',
        number: 2
      },
      {
        title: 'ФИО, Тема',
        manager: 'Какой-то руководитель',
        description: 'В данной работе...',
        link: '',
        number: 3
      },
      {
        title: 'ФИО, Тема',
        manager: 'Какой-то руководитель',
        description: 'В данной работе...',
        link: '',
        number: 4
      }
    ]
  }
]


class LinksPart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: content
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div className="links__content">
        { items.map( (item, key) =>
          <div className="links__part" key={key}>
            <h2 className="links__part-title">{item.title}</h2>
            <ul>
              { item.fill.map( (article, key) =>
                <li key={key}>
                  <a href={article.link} target="_blank" className="links__article-title" ref="noferrer">
                    <span className="number">{article.number + '.'}</span>
                    <span className="text">{article.title}</span>
                    <p className="links__article-description"><strong>Описание:</strong>{article.description}</p>
                    <p className="links__article-manager"><strong>Руководитель:</strong>{article.manager}</p>
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

export default LinksPart;
