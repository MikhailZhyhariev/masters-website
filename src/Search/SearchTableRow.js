import React, { Component } from 'react';
import './Search.css';

class SearchTableRow extends Component {
  handleLinkOpen(link) {
    window.open(link, '_blank');
  }

  render() {
    const { items } = this.props;

    return (
      <tbody>
        <tr>
          <td className="search__table-cell language" colSpan="5">{items.language}</td>
        </tr>
        { items.requests.map( (item, key) =>
          <tr key={key}>
            <td className="search__table-cell">{item.request}</td>
            { item.answer.map( (item, key) =>
              <td className="search__table-cell link"
                  key={key}
                  onClick={this.handleLinkOpen.bind(this, item.link)}>
                  {item.count}
              </td>
            )}
          </tr>
        )}
      </tbody>
    );
  }
}

export default SearchTableRow;
