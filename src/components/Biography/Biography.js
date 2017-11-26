import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Biography.css';

import content from './Biography.json';

class Biography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    }
  }

  render() {
    const { language, menu } = this.props;
    let lang;
    let header;
    if (language.active === 'ru') {
      lang = content.ru;
      header = content.header.ru
    } else {
      lang = content.ua;
      header = content.header.ua
    }

    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="biography" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="biography__title">{header}</h1>
          { lang.map( (item, key) =>
            <div key={key} className="biography__text-part">
              <h3 className="biography__paragraph__title">{item.header}</h3>
              { item.text.map( (item, key) =>
                <p className="biography__text" key={key}>{item}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    menu: state.menu
  }
}
export default connect(mapStateToProps)(Biography)
