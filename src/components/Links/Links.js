import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Links.css';

import LinksMasters from './LinksMasters.js';
import LinksArticles from './LinksArticles.js';
import LinksOther from './LinksOther.js';
import content from './Links.json';


class Links extends Component {
  render() {
    const { menu, button } = this.props;
    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="links" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="links__title">Ссылки по теме выпускной работы</h1>
          <LinksMasters items={content.masters} />
          <LinksArticles items={content.articles} />
          <LinksOther items={ content.other } />
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
export default connect(mapStateToProps)(Links)
