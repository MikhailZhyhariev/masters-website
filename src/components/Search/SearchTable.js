import React, { Component } from 'react';
import './Search.css';

import SearchTableRow from './SearchTableRow.js';

class Search extends Component {
  handleImageClick(link) {
    window.open(link, '_blank');
  }

  render() {
    const { content } = this.props;
    const { handleImageClick } = this;

    return (
      <table className="search__table">
        <thead>
          <tr>
            <td className="search__table-cell title">Строка поиска</td>
            {content.head.map( (item, key) =>
              <td key={key}
                  className={'search__table-cell logo search__table-logo-' + key}
                  onClick={handleImageClick.bind(this, item.link)}/>
            )}
          </tr>
        </thead>
        { content.row.map( (item, key) =>
          <SearchTableRow items={item} key={key} />
        )}
      </table>
    );
  }
}

export default Search;
