import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Abstract.css';

import * as menuActions from '../../actions/MenuActions.js';
import * as languageActions from '../../actions/HeaderActions.js';
import * as buttonActions from '../../actions/ButtonActions.js';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import AbstractBibliography from './AbstractBibliography.js';

import bibliography from './AbstractBibliography.json';
import content from './Abstract.json';

class Abstract extends Component {
  render() {
    const { language, menu, button } = this.props;
    const { buttonClick, classnameChange } = this.props.buttonActions;

    let lang;
    let headers;
    if (language.active === 'ru') {
      lang = content.ru;
      headers = content.header.ru;
    } else if (language.active === 'en') {
      lang = content.en;
      headers = content.header.en;
    } else {
      lang = content.ua;
      headers = content.header.ua;
    }

    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="abstract" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="abstract__title">{headers.sectionHeader}</h1>
          <h1 className="abstract__theme-title">{headers.themeHeader}</h1>
          <nav className="abstract__content">
            <h2 className="abstract__content-title">{headers.text}</h2>
            <AbstractMenu items={lang}
                          menuHeight={menu.height}
                          onButtonClass={classnameChange}
                          onButtonTop={buttonClick} />
          </nav>
          <AbstractText items={lang} />
          <AbstractBibliography content={bibliography} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    menu: state.menu,
    button: state.button
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
    languageActions: bindActionCreators(languageActions, dispatch),
    buttonActions: bindActionCreators(buttonActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Abstract)
