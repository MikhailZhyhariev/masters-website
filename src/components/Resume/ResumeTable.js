import React, { Component } from 'react';
import './Resume.css';

import ResumeRowSimple from '../Resume/ResumeRowSimple.js';
import ResumeRowList from '../Resume/ResumeRowList.js';
import ResumeRowLinkedList from '../Resume/ResumeRowLinkedList.js';
import ResumeRowAbout from '../Resume/ResumeRowAbout.js';


class ResumeTable extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="resume__table">
        { items.simple.map( (item, key) =>
          <ResumeRowSimple item={item} key={key} />
        )}
        <ResumeRowList item={items.list} />
        <ResumeRowLinkedList item={items.linkedList} />
        <ResumeRowAbout />
      </div>
    );
  }
}

export default ResumeTable;
