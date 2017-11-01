import React, { Component } from 'react';
import './IndividualSection.css';


class IndividualSection extends Component {
  render() {
    const { padding, className } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="individual-section" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="individual-section__title">Проектирование и разработка современных веб-приложений</h1>
          <nav className="individual-section__content">
            <h2 className="individual-section__content-title">Содержание</h2>
            <ul className="individual-section__content-list">
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">1</span>
                <span className="individual-section__content-list-item-text">Структура современных веб-приложений</span>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">2</span>
                <span className="individual-section__content-list-item-text">Обзор бесплатных сервисов для хостинга веб-приложений</span>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">3</span>
                <span className="individual-section__content-list-item-text">Создание веб-приложений для распознавания рукописных символов</span>
                <ul className="individual-section__content-sublist">
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.1</span>
                    Распознавание рукописных символов с помощью нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.2</span>
                    Обзор популярных библиотек для построения нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.3</span>
                    Создание нейросетей с помощью популярных библиотек и сравнение классификации построенных нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.4</span>
                    Создание веб-приложения с помощью Python Django Framework
                  </li>
                </ul>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">4</span>
                <span className="individual-section__content-list-item-text">Размещение веб-приложения на платформе Heroku</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default IndividualSection;
