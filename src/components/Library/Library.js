import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './Library.css';

import content from './Library.json';

import DocumentPreview from '../DocumentPreview/DocumentPreview.js';
import '../DocumentPreview/DocumentPreview.css';

class Library extends Component {
  linkOpen(item, e) {
    if (!isNaN(item)) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      ReactDOM.render(
        <DocumentPreview
          top={scrollTop}
          number={item} />,
        document.getElementById('document')
      )

      const page = document.getElementById('root');
      page.style.position = 'fixed';
      page.style.left = 0;
      page.style.top = -scrollTop + 'px';
      page.style.filter = 'blur(5px)';

      window.scrollTo(0, 0);
    } else {
      window.open(item, '_blank');
    }
  }

  render() {
    const { menu } = this.props;
    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="library" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="library__title">Библиотека материалов по теме выпускной работы</h1>
          <div className="library__content">
            { content.map( (item, key) =>
              <div className="library__part" key={key}>
                <h2 className="library__part-title">{item.title}</h2>
                <ul>
                  { item.fill.map( (article, key) =>
                    <li key={key}>
                      <div onClick={this.linkOpen.bind(this, article.link)}
                           className="library__article-title">
                        <span className="number">{article.number + '.'}</span>
                        <span className="text">{article.title}</span>
                        <p className="library__article-author"><strong>Авторы:</strong>{article.author}</p>
                        <p className="library__article-description"><strong>Описание:</strong>{article.description}</p>
                        <p className="library__article-source">
                          <strong>Источник:</strong>
                          {article.source}
                          <a target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} href={article.shortlink}>{article.shortlink}</a>
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div className="library__part">
              <h2 className="library__part-title">Переводы статей</h2>
              <ul>
                <li>
                  <div onClick={this.linkOpen.bind(this, 3)}
                       className="library__article-title">
                    <span className="number">11.</span>
                    <span className="text">Техническая спецификация цифрового датчика давления BPM180</span>
                    <p className="library__article-author"><strong>Авторы:</strong>Bosch Sensortec</p>
                    <p className="library__article-description"><strong>Перевод:</strong>Жигарев М.Ю.</p>
                    <p className="library__article-description"><strong>Описание:</strong>Данный документ содержит информацию о принципе действия и практического использования цифрового датчика давления BPM180.</p>
                    <p className="library__article-source">
                      <strong>Источник:</strong>
                      <a rel="noopener noreferrer" href="https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf" target="_blank" onClick={(e) => e.stopPropagation()}>Источник оригинальной статьи</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

export default connect(mapStateToProps)(Library)
