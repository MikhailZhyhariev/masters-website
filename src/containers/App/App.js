import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import * as menuActions from '../../actions/MenuActions.js';
import * as languageActions from '../../actions/HeaderActions.js';
import * as buttonActions from '../../actions/ButtonActions.js';

import Header from '../../components/Header/Header.js';
import Menu from '../../components/Menu/Menu.js';
import Resume from '../../components/Resume/Resume.js';
import Biography from '../../components/Biography/Biography.js';
import Abstract from '../../components/Abstract/Abstract.js';
import Library from '../../components/Library/Library.js';
import Links from '../../components/Links/Links.js';
import Search from '../../components/Search/Search.js';
import IndividualSection from '../../components/IndividualSection/IndividualSection.js';
import Button from '../../components/Button/Button.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.updateClassButton = this.updateClassButton.bind(this)
    this.handleSetTitle = this.handleSetTitle.bind(this);
  }

  handleScroll() {
    let coord = ReactDOM.findDOMNode(this.refs.menu).getBoundingClientRect();
    let documentCoord = window.pageYOffset;

    const { setClassName, setHeight } = this.props.menuActions;

    if (coord.top <= 0 & documentCoord >= 367) {
      setClassName('fixed');
      setHeight(coord.height);
    } else {
      setClassName('');
    }
  }

  updateClassButton() {
    const { button } = this.props;
    const { buttonClick, classnameChange } = this.props.buttonActions;

    if (button.coord <= window.pageYOffset & button.coord !== 0) {
      classnameChange('button-up');
      buttonClick(0);
    }
  }

  handleSetTitle(item) {
    const { setTitle } = this.props.menuActions;
    document.title = item;
    setTitle(item)
  }

  render() {
    const { language, menu, button } = this.props;
    const { chooseSection, openMenu, setClassNameMenu, setClassNameButton } = this.props.menuActions;
    const { chooseLanguage, checkAvailableLanguage, openAdaptiveLanguage } = this.props.languageActions;
    const { buttonClick, classnameChange } = this.props.buttonActions;
    const { handleScroll, updateClassButton, handleSetTitle } = this;

    const contentArray = [
      <Resume language={language.active}
              padding={menu.height}
              className={menu.className} />,
      <Biography language={language.active}
                 padding={menu.height}
                 className={menu.className} />,
      <Abstract padding={menu.height}
                className={menu.className}
                updateButtonClass={classnameChange}
                updateButtonTop={buttonClick}
                language={language.active} />,
      <Library padding={menu.height}
               className={menu.className} />,
      <Links padding={menu.height}
             className={menu.className} />,
      <Search padding={menu.height}
              className={menu.className} />,
      <IndividualSection padding={menu.height}
                         className={menu.className} />
    ];

    return (
      <div className="app">
        <Header chooseLanguage={chooseLanguage}
                language={language}
                openMenu={openAdaptiveLanguage}
                visible={language.visible}
                handleSetTitle={handleSetTitle}
                menuActive={menu.active} />
        <Menu chooseSection={chooseSection}
              active={menu.active}
              language={language.active}
              onScroll={handleScroll}
              className={menu.className}
              updateButtonTop={buttonClick}
              updateButtonClass={classnameChange}
              checkLanguage={checkAvailableLanguage}
              openAdaptiveMenu={openMenu}
              open={menu.open}
              updateClass={setClassNameMenu}
              classNameMenu={menu.classNameMenu}
              classNameButton={menu.classNameButton}
              setClassNameButton={setClassNameButton}
              handleSetTitle={handleSetTitle}
              ref="menu" />
        <Button coord={button.coord}
                onClick={buttonClick}
                className={button.className}
                classChange={classnameChange}
                updateClass={updateClassButton} />
        {contentArray[menu.active]}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)