import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18next from 'i18next';
import './App.css';

import * as menuActions from '../../actions/MenuActions.js';
import * as languageActions from '../../actions/HeaderActions.js';

import Header from '../../components/Header/Header.js';
import Menu from '../../components/Menu/Menu.js';
import Resume from '../../components/Resume/Resume.js';
import Biography from '../../components/Biography/Biography.js';
import Abstract from '../../components/Abstract/Abstract.js';
import Library from '../../components/Library/Library.js';
import Links from '../../components/Links/Links.js';
import Search from '../../components/Search/Search.js';

class App extends Component {
  render() {
    const { language, menu } = this.props;
    const { chooseSection } = this.props.menuActions;
    const { chooseLanguage } = this.props.languageActions;
    const contentArray = [<Resume />, <Biography />, <Abstract />, <Library />, <Links /> , <Search />];

    return (
      <div className="app">
        <Header chooseLanguage={chooseLanguage} language={language.language} />
        <Menu chooseSection={chooseSection} active={menu.active} />
        {contentArray[menu.active]}
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

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch),
    languageActions: bindActionCreators(languageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
