import React, { Component } from 'react';
import './Search.css';

import SearchTableLink from './SearchTableLink.js';
import SearchTableLogo from './SearchTableLogo.js';

class SearchTableRow extends Component {
  render() {
    const { items, logo } = this.props;

    return (
      <div className="search__table-body">
        <div className="search__table-row">
          <div className="search__table-cell language">{items.language}</div>
          <SearchTableLogo items={logo} className="hidden" />
        </div>
        { items.requests.map( (item, key) =>
          <div className="search__table-row" key={key}>
            <div className="search__table-cell">{item.request}</div>
            <SearchTableLink items={item.answer} />
          </div>
        )}
      </div>
    );
  }
}

export default SearchTableRow;
