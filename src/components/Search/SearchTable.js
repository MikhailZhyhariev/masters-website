import React, { Component } from 'react';
import './Search.css';

import SearchTableRow from './SearchTableRow.js';
import SearchTableLogo from './SearchTableLogo.js';

class SearchTable extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="search__table">
        <div className="search__table-head">
          <div className="search__table-cell title">Строка поиска</div>
          <SearchTableLogo items={content.head} className=""/>
        </div>
        { content.row.map( (item, key) =>
          <SearchTableRow items={item} key={key} logo={content.head}/>
        )}
      </div>
    );
  }
}

export default SearchTable;
