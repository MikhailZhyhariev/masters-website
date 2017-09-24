import React, { Component } from 'react';
import './Search.css';

import SearchTable from './SearchTable.js';
import content from '../content/Search.json';


class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="container">
          <h1 className="search__title">Отчет об информационном поиске</h1>
          { content.text.map( (item, key) =>
            <p className="search__text" key={key}>{item}</p>
          )}
          <h1 className="search__table-title">Отчет о поиске за 18.09.2017</h1>
          <SearchTable content={ content }/>
        </div>
      </div>
    );
  }
}

export default Search;
