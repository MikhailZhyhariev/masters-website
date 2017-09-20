import React, { Component } from 'react';
import './Search.css';

import SearchTableRow from './SearchTableRow.js';
import content from './content.js';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    }
  }

  handleImageClick(link) {
    window.open(link, '_blank');
  }

  render() {
    const head = [
      {link: 'https://www.google.ru/', alt: 'google'},
      {link: 'https://yandex.ua/', alt: 'yandex'},
      {link: 'https://www.bing.com/', alt: 'bing'},
      {link: 'https://www.meta.ua/', alt: 'meta'},
    ];
    const { handleImageClick } = this;

    return (
      <table className="search__table">
        <thead>
          <tr>
            <td className="search__table-cell title">Строка поиска</td>
            {head.map( (item, key) =>
              <td key={key}
                  className={'search__table-cell logo search__table-logo-' + key}
                  onClick={handleImageClick.bind(this, item.link)}/>
            )}
          </tr>
        </thead>
        { content.map( (item, key) =>
          <SearchTableRow items={item} key={key} />
        )}
      </table>
    );
  }
}

export default Search;
