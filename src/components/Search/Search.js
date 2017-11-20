import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

import SearchTable from './SearchTable.js';
import content1 from './Search.json';
import content2 from './Search2.json';

import image1 from '../../img/search1.jpg';

class Search extends Component {
  render() {
    const { menu, button } = this.props;
    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="search" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="search__title">Отчет об информационном поиске</h1>
          { content1.text.map( (item, key) =>
            <p className="search__text" key={key}>{item}</p>
          )}
          <h1 className="search__table-title">Отчет о поиске за 18.09.2017</h1>
          <SearchTable content={ content1 }/>
          <h1 className="search__table-title">Отчет о поиске за 20.11.2017</h1>
          <SearchTable content={ content2 }/>
          <h1 className="search__table-title">Анализ результатов</h1>
          <br />
          <p className="search__text">Сравнивая результаты запросов по различным поисковым системам, можно прийти к выводу, что наилучшие результаты показала система Google. Во всех случаях было найдено достаточное количество документов на всех языках.</p>
          <p className="search__text">Необходимо отметить, что поисковая система Яндекс при большом числе найденных страниц не дает возможности зафиксировать их точное количество. Поэтому в таблице для Яндекса и приведены приблизительные значения, которые предоставляет поисковая система.</p>
          <p className="search__text">Cтабильную динамику прироста результатов, ни одна из поисковых систем, не показала. Очень низкая динамика присутствует у Meta и Bing ввиду малого количества результатов поиска. Получить достоверную информацию из графика сложно, т.к. в отдельных случаях, эффективность поиска сводилась к нулю. Процент изменения для каждого запроса в каждой из поисковых систем приведен на диаграмме ниже.</p>
          <div className="search-image-container"><img src={image1} alt="График"/></div>
          <p className="search__text center">Процент изменения результатов поисковой выдачи в отчетах о поиске</p>
          <p className="search__text">Из диаграммы можно сделать вывод, что максимальный рост поисковой выдачи составляет 94%, а для некоторых запросов количество найденных страниц не изменилось, а для некоторых страниц количество результатов поиска значительно сократилось. Максимальное уменьшение количества результатов поиска составляет 2500%.</p>
          <p className="search__text">Диаграмма также позволяет оценить изменения для каждого выполненного запроса.</p>
          <p className="search__text">Так, например, количество найденных страниц в поисковой системе Google для запроса “Системы мониторинга промышленных предприятий” выросло на 59%, а поисковая выдача по запросу “Исследование модели стабилизации беспилотных летательных аппаратов” в системе Bing упала на ≈ 200%. При этом данные большого числа страниц совсем не изменилось или изменились очень незначительно.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    button: state.button
  }
}
export default connect(mapStateToProps)(Search)
