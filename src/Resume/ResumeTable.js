import React, { Component } from 'react';
import './Resume.css';

import ResumeRow from '../Resume/ResumeRow.js';


class ResumeTable extends Component {
  render() {
    const { items } = this.props;

    return (
      <table className="resume__table">
        <tbody>
          { items.map( (item, key) => {
            return <ResumeRow className=""
                              item={item}
                              key={key}
            />
          })}
        </tbody>
      </table>
    );
  }
}

export default ResumeTable;
