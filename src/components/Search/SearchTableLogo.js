import React, { Component } from 'react';
import './Search.css';

class SearchTableLogo extends Component {
  handleImageClick(link) {
    window.open(link, '_blank');
  }

  render() {
    const { items, className } = this.props;
    const { handleImageClick } = this;

    return (
      <div className={"search__table-logo-part " + className}>
        { items.map( (item, key) =>
          <div key={key}
               className={'search__table-logo search__table-logo-' + key}
               onClick={handleImageClick.bind(this, item)} />
        )}
      </div>
    );
  }
}

export default SearchTableLogo;
