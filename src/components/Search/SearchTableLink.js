import React, { Component } from 'react';
import './Search.css';

class SearchTableLink extends Component {
  handleLinkOpen(link) {
    window.open(link, '_blank');
  }

  render() {
    const { items } = this.props;

    return (
      <div className="search__table-link">
        { items.map( (item, key) =>
          <div className="search__table-cell link"
               onClick={this.handleLinkOpen.bind(this, item.link)}
               key={key}>
               {item.count}
          </div>
        )}
      </div>
    );
  }
}

export default SearchTableLink;
