import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Resume.css';

import ResumeTable from '../Resume/ResumeTable.js';
import content from './Resume.json';


class Resume extends Component {
  render() {
    const { language, menu, button } = this.props;
    let lang;
    if (language.active === 'ru') lang = content.ru;
    else if (language.active === 'en') lang = content.en;
    else lang = content.ua;

    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="resume" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="resume__title">{lang.title}</h1>
          <ResumeTable items={ lang.table }/>
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
export default connect(mapStateToProps)(Resume)
