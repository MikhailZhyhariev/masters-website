import React, { Component } from 'react';
import './Resume.css';

import ResumeTable from '../Resume/ResumeTable.js';
import content from '../content/Resume.json'


class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="container">
          <h1 className="resume__title">Краткое резюме магистра</h1>
          <ResumeTable items={ content }/>
        </div>
      </div>
    );
  }
}

export default Resume;
