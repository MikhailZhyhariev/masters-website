import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';

import SearchTable from './SearchTable.js';
import content from './Search.json';


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

function mapStateToProps(state) {
  return {
    menu: state.menu,
    button: state.button
  }
}
export default connect(mapStateToProps)(Search)
