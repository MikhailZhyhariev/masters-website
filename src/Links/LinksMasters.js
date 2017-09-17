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
                  <p className="library__article-manager"><strong>Руководитель:</strong>{article.manager}</p>
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
