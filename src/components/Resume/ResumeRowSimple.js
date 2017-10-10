import React, { Component } from 'react';
import './Resume.css';


class ResumeRowSimple extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="resume__table-row">
        <div className="resume__table-cell header">
          {item.header}
          {item.extend ? <div className="extend">*({item.extend})</div>: ''}
        </div>
        <div className="resume__table-cell content">
          { item.content.map( (subitem, key) =>
            <div className="content-cell-part" key={key}>
              {subitem.name ? <strong>{subitem.name}</strong> : ''}
              <span>{subitem.text}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ResumeRowSimple;
