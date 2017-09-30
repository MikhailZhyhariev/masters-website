import React, { Component } from 'react';
import './Resume.css';

import ResumeTable from '../Resume/ResumeTable.js';
import content from '../../content/Resume.json';


class Resume extends Component {
  render() {
    const { language } = this.props;
    let lang;
    if (language === 'ru') lang = content.ru;
    else if (language === 'en') lang = content.en;
    else lang = content.ua;

    const { padding, className } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="resume" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="resume__title">{lang.title}</h1>
          <ResumeTable items={ lang.table }/>
        </div>
      </div>
    );
  }
}

export default Resume;
