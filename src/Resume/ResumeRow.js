import React, { Component } from 'react';
import './Resume.css';


class ResumeRow extends Component {
  render() {
    const { item } = this.props;

    return (
      <tr className="resume__table-row">
        <td className="resume__table-cell header">{item.header}</td>
        <td className="resume__table-cell content">
          { item.content.map( (cell, key) =>
            <div key={key} className="content-cell-part">{cell}</div>
          )}
        </td>
      </tr>
    );
  }
}

export default ResumeRow;
